import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CardFace from "./CardFace.jsx";
import CardBack from "./CardBack.jsx";

const CARD_RATIO = 88 / 63; // standard trading card, height / width
const FLIP = { type: "spring", stiffness: 80, damping: 17, mass: 1 };

function getTargetSize() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let height = Math.min(vh * 0.86, 840);
    let width = height / CARD_RATIO;
    if (width > vw * 0.92) {
        width = vw * 0.92;
        height = width * CARD_RATIO;
    }
    return { width, height, left: (vw - width) / 2, top: (vh - height) / 2 };
}

/**
 * Lifts a card out of the grid, brings it to the centre of the screen and turns it over.
 * Closing plays the same flight back into its slot.
 */
function CardInspector({ project, origin, onClose }) {
    const [target, setTarget] = useState(getTargetSize);
    const closeRef = useRef(null);

    useEffect(() => {
        const onResize = () => setTarget(getTargetSize());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        const root = document.documentElement;
        const prevOverflow = root.style.overflow;
        root.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        closeRef.current?.focus({ preventScroll: true });
        return () => {
            window.removeEventListener("keydown", onKey);
            root.style.overflow = prevOverflow;
        };
    }, [onClose]);

    const fromSlot = {
        x: origin.left + origin.width / 2 - (target.left + target.width / 2),
        y: origin.top + origin.height / 2 - (target.top + target.height / 2),
        scale: origin.width / target.width,
        rotateY: 0,
    };

    return (
        <motion.div
            className="inspector"
            data-rarity={project.rarity}
            role="dialog"
            aria-modal="true"
            aria-labelledby="inspector-title"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.2 } }}
            transition={{ duration: 0.35 }}
        >
            <div className="inspector__veil" aria-hidden="true" />

            <motion.div
                className="inspector__card"
                style={{
                    width: target.width,
                    height: target.height,
                    left: target.left,
                    top: target.top,
                    transformPerspective: 2200,
                }}
                initial={fromSlot}
                animate={{ x: 0, y: 0, scale: 1, rotateY: 180 }}
                exit={{ ...fromSlot, transition: { ...FLIP, stiffness: 95 } }}
                transition={FLIP}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="inspector__side inspector__side--front" aria-hidden="true">
                    <CardFace project={project} />
                </div>
                <div className="inspector__side inspector__side--back">
                    <CardBack project={project} />
                </div>
            </motion.div>

            <motion.button
                ref={closeRef}
                type="button"
                className="inspector__close"
                onClick={onClose}
                aria-label="Close"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
                ×
            </motion.button>
        </motion.div>
    );
}

export default CardInspector;
