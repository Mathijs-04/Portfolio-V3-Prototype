import { useMemo } from "react";
import CardFace, { RARITY_LABEL } from "./CardFace.jsx";
import useTilt from "./useTilt.js";

const EMBERS = 6;

function Embers() {
    const embers = useMemo(
        () =>
            Array.from({ length: EMBERS }, () => ({
                "--x": `${(10 + Math.random() * 80).toFixed(1)}%`,
                "--drift": `${(-16 + Math.random() * 32).toFixed(1)}px`,
                "--size": `${(2 + Math.random() * 2).toFixed(1)}px`,
                "--dur": `${(3.6 + Math.random() * 3).toFixed(2)}s`,
                "--delay": `${(-Math.random() * 6).toFixed(2)}s`,
            })),
        [],
    );
    return (
        <div className="embers" aria-hidden="true">
            {embers.map((style, i) => (
                <span key={i} className="ember" style={style} />
            ))}
        </div>
    );
}

/** A card in the grid. Tilts under the pointer and opens the inspector on click. */
function ProjectCard({ project, hidden, onInspect }) {
    const { ref, onPointerMove, onPointerLeave } = useTilt(project.rarity === "legendary" ? 12 : 10);

    const open = () => {
        onPointerLeave();
        onInspect(project, ref.current.getBoundingClientRect());
    };

    return (
        <li className="deck__slot">
            <div
                ref={ref}
                className="card"
                data-rarity={project.rarity}
                data-slug={project.slug}
                style={hidden ? { visibility: "hidden" } : undefined}
                role="button"
                tabIndex={0}
                aria-label={`${project.name}, ${RARITY_LABEL[project.rarity]}. Open details.`}
                onPointerMove={onPointerMove}
                onPointerLeave={onPointerLeave}
                onClick={open}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        open();
                    }
                }}
            >
                <div className="card__shadow" aria-hidden="true" />
                <div className="card__inner">
                    <CardFace project={project} />
                </div>
                {project.rarity === "legendary" && <Embers />}
            </div>
        </li>
    );
}

export default ProjectCard;
