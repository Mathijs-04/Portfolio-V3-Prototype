import { useState } from "react";
import { Ornaments, RARITY_LABEL } from "./CardFace.jsx";

/** The reverse of a card: the project's write-up, gallery, tech and links. */
function CardBack({ project }) {
    const { name, rarity, tagline, tech, images, lore, links } = project;
    const [active, setActive] = useState(0);

    return (
        <div className="face face--back" data-rarity={rarity}>
            <div className="face__surface" aria-hidden="true" />
            <Ornaments />

            <div className="back">
                <p className="back__rarity">{RARITY_LABEL[rarity]}</p>
                <h2 className="back__name" id="inspector-title">
                    {name}
                </h2>
                <p className="back__tagline">{tagline}</p>

                <figure className="back__art">
                    <img src={`/${images[active]}`} alt={`${name}, image ${active + 1} of ${images.length}`} />
                </figure>

                {images.length > 1 && (
                    <div className="back__thumbs" role="group" aria-label="Gallery">
                        {images.map((src, i) => (
                            <button
                                key={src}
                                type="button"
                                className={`back__thumb${i === active ? " is-active" : ""}`}
                                onClick={() => setActive(i)}
                                aria-label={`Show image ${i + 1}`}
                                aria-pressed={i === active}
                            >
                                <img src={`/${src}`} alt="" loading="lazy" />
                            </button>
                        ))}
                    </div>
                )}

                <div className="back__lore">
                    {lore.map((p) => (
                        <p key={p.slice(0, 32)}>{p}</p>
                    ))}
                </div>

                <ul className="back__tech" aria-label="Built with">
                    {tech.map((t) => (
                        <li key={t}>{t}</li>
                    ))}
                </ul>

                {links.length > 0 && (
                    <div className="back__links">
                        {links.map(({ label, href, kind }) => (
                            <a key={href} className={`back__link back__link--${kind}`} href={href} target="_blank" rel="noreferrer">
                                {label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CardBack;
