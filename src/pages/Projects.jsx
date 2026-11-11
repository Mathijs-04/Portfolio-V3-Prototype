import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";
import { createPortal } from "react-dom";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import CardInspector from "../components/CardInspector.jsx";

const STAGGER_MS = 70;

/**
 * Deals cards in as they scroll into view. One IntersectionObserver for the whole deck;
 * cards that arrive in the same batch get a small stagger. Pure CSS transitions on
 * transform + opacity, so the compositor does the work.
 */
function useDealIn(deckRef) {
    useEffect(() => {
        const slots = [...deckRef.current.querySelectorAll(".deck__slot")];
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced || !("IntersectionObserver" in window)) {
            slots.forEach((s) => s.classList.add("is-dealt"));
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries
                    .filter((e) => e.isIntersecting)
                    .forEach((e, i) => {
                        e.target.style.transitionDelay = `${i * STAGGER_MS}ms`;
                        e.target.classList.add("is-dealt");
                        io.unobserve(e.target);
                    });
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
        );
        slots.forEach((s) => io.observe(s));
        return () => io.disconnect();
    }, [deckRef]);
}

function Projects() {
    const deckRef = useRef(null);
    const [inspecting, setInspecting] = useState(null); // { project, origin }
    const [hiddenSlug, setHiddenSlug] = useState(null);

    useDealIn(deckRef);

    const inspect = useCallback((project, origin) => {
        setInspecting({ project, origin });
        setHiddenSlug(project.slug);
    }, []);

    const close = useCallback(() => setInspecting(null), []);

    // Arriving from a skill: bring that card into view and let it glow.
    const { state: navState } = useLocation();
    useEffect(() => {
        const slug = navState?.summon;
        if (!slug) return;
        const el = document.querySelector(`.card[data-slug="${slug}"]`);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("is-summoned");
        const t = setTimeout(() => el.classList.remove("is-summoned"), 3200);
        return () => clearTimeout(t);
    }, [navState]);

    return (
        <div className="container projects">
            <h1 className="page-title">
                <span className="ink">Projects</span>
            </h1>

            <ul ref={deckRef} className="deck">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        hidden={hiddenSlug === project.slug}
                        onInspect={inspect}
                    />
                ))}
            </ul>

            {/* Portalled so it covers the nav too. */}
            {createPortal(
                <AnimatePresence onExitComplete={() => setHiddenSlug(null)}>
                    {inspecting && (
                        <CardInspector
                            key={inspecting.project.slug}
                            project={inspecting.project}
                            origin={inspecting.origin}
                            onClose={close}
                        />
                    )}
                </AnimatePresence>,
                document.body,
            )}
        </div>
    );
}

export default Projects;
