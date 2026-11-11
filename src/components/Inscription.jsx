import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router";
import { projectsForStar } from "../data/skills.js";

/** The small panel that appears once a constellation is woken. */
function Inscription({ constellation, selectedStar, place, onSelectStar, onHintStar, onClose }) {
    const star = constellation.stars.find((s) => s.id === selectedStar);
    const seenIn = star ? projectsForStar(star) : [];
    const enter = { left: { x: -16 }, right: { x: 16 }, top: { y: -16 }, bottom: { y: 16 } }[place];

    return (
        <motion.aside
            className="inscription"
            data-place={place}
            aria-label={constellation.domain}
            initial={{ opacity: 0, ...enter }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, ...enter, transition: { duration: 0.25 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
        >
            <button type="button" className="inscription__close" onClick={onClose} aria-label="Close">
                ×
            </button>

            <h2 className="inscription__domain">{constellation.domain}</h2>

            <ul className="inscription__stars">
                {constellation.stars.map((s) => (
                    <li key={s.id}>
                        <button
                            type="button"
                            className={s.id === selectedStar ? "is-active" : undefined}
                            aria-pressed={s.id === selectedStar}
                            onClick={() => onSelectStar(s.id)}
                            onPointerEnter={() => onHintStar(s.id)}
                            onPointerLeave={() => onHintStar(null)}
                        >
                            {s.name}
                        </button>
                    </li>
                ))}
            </ul>

            <AnimatePresence mode="wait" initial={false}>
                {star && (
                    <motion.div
                        key={star.id}
                        className="inscription__star"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <h3 className="inscription__name">{star.name}</h3>
                        <p className="inscription__blurb">{star.blurb}</p>
                        {seenIn.length > 0 && (
                            <p className="inscription__seen">
                                <span className="inscription__seen-label">Seen in </span>
                                {seenIn.map((p, i) => (
                                    <span key={p.slug}>
                                        <Link to="/projects" state={{ summon: p.slug }} data-rarity={p.rarity}>
                                            {p.name}
                                        </Link>
                                        {i < seenIn.length - 1 && ", "}
                                    </span>
                                ))}
                            </p>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.aside>
    );
}

export default Inscription;
