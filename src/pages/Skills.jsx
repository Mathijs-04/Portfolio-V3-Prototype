import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { constellations } from "../data/skills.js";
import Constellation from "../components/Constellation.jsx";
import Inscription from "../components/Inscription.jsx";

function Skills() {
    const [hovered, setHovered] = useState(null);
    const [activeId, setActiveId] = useState(null);
    const [selectedStar, setSelectedStar] = useState(null);
    const [hintedStar, setHintedStar] = useState(null);
    const [place, setPlace] = useState("right");
    const refs = useRef({});

    const active = constellations.find((c) => c.id === activeId) ?? null;

    const wake = useCallback((id, starId = null) => {
        // Put the panel on the side of the sky the constellation isn't on.
        const rect = refs.current[id]?.getBoundingClientRect();
        if (rect) {
            const portrait = window.innerWidth / window.innerHeight < 0.9;
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            setPlace(
                portrait
                    ? cy > window.innerHeight / 2
                        ? "top"
                        : "bottom"
                    : cx > window.innerWidth / 2
                      ? "left"
                      : "right",
            );
        }
        setActiveId(id);
        setSelectedStar(starId);
    }, []);

    const close = useCallback(() => {
        setActiveId(null);
        setSelectedStar(null);
        setHintedStar(null);
    }, []);

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && close();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [close]);

    const stateOf = (c) => {
        if (activeId) return c.id === activeId ? "awake" : "faded";
        return c.id === hovered ? "hovered" : "idle";
    };

    // The sky holds still while you're looking at it.
    const still = Boolean(activeId || hovered);

    return (
        <div className="firmament" data-still={still || undefined} onClick={close}>
            <div className="container firmament__head">
                <h1 className="page-title">
                    <span className="ink">Skills</span>
                </h1>
            </div>

            <div className="firmament__sky">
                <span className="shooting-star" aria-hidden="true" />
                {constellations.map((c) => (
                    <Constellation
                        key={c.id}
                        ref={(el) => (refs.current[c.id] = el)}
                        data={c}
                        state={stateOf(c)}
                        selectedStar={selectedStar}
                        hintedStar={hintedStar}
                        onWake={wake}
                        onHover={setHovered}
                        onHintStar={setHintedStar}
                    />
                ))}
            </div>

            <AnimatePresence>
                {active && (
                    <Inscription
                        key={active.id}
                        constellation={active}
                        selectedStar={selectedStar}
                        place={place}
                        onSelectStar={setSelectedStar}
                        onHintStar={setHintedStar}
                        onClose={close}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

export default Skills;
