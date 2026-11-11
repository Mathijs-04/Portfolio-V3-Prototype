import Gem from "./Gem.jsx";

export const RARITY_LABEL = {
    legendary: "Legendary",
    epic: "Epic",
    rare: "Rare",
    common: "Common",
};

const MAX_FRONT_TECH = 4;

export function Ornaments() {
    return (
        <>
            <span className="ornament ornament--tl" aria-hidden="true" />
            <span className="ornament ornament--tr" aria-hidden="true" />
            <span className="ornament ornament--bl" aria-hidden="true" />
            <span className="ornament ornament--br" aria-hidden="true" />
        </>
    );
}

/**
 * The front of a project card. Sizes are in container units, so the same face
 * renders in the grid and blown up in the inspector.
 */
function CardFace({ project }) {
    const { name, rarity, tagline, tech, images } = project;
    const extraTech = tech.length - MAX_FRONT_TECH;

    return (
        <div className="face" data-rarity={rarity}>
            <div className="face__surface" aria-hidden="true" />
            <Ornaments />
            <Gem className="face__gem" />

            <h3 className="face__name">{name}</h3>

            <figure className="face__art">
                {/* 640px thumbnails (public/projects/thumbs); the full-size images load on the back. */}
                <img
                    src={`/${images[0].replace("projects/", "projects/thumbs/")}`}
                    alt={`Preview of ${name}`}
                    loading="lazy"
                    decoding="async"
                />

            </figure>

            <p className="face__tagline">{tagline}</p>

            <ul className="face__tech" aria-label="Built with">
                {tech.slice(0, MAX_FRONT_TECH).map((t) => (
                    <li key={t}>{t}</li>
                ))}
                {extraTech > 0 && <li className="face__tech-more">+{extraTech}</li>}
            </ul>

            <p className="face__rarity">{RARITY_LABEL[rarity]}</p>

            <div className="face__fx" aria-hidden="true">
                <div className="face__foil" />
                <div className="face__glare" />
            </div>
        </div>
    );
}

export default CardFace;
