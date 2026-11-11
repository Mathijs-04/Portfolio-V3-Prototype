import { Ornaments } from "../components/CardFace.jsx";

const LINKEDIN_URL = "https://www.linkedin.com/in/mathijs-van-der-meijde-creative-developer/";
const GITHUB_URL = "https://github.com/Mathijs-04";

/** Placeholder About page: the V1 text on a single stone slab, to be designed later. */
function About() {
    return (
        <div className="container about">
            <h1 className="page-title">
                <span className="ink">About</span>
            </h1>

            <article className="slab">
                <div className="slab__face">
                    <div className="slab__surface" aria-hidden="true" />
                    <Ornaments />

                    <div className="about__body">
                        <figure className="about__portrait">
                            <img src="/about/profile.webp" alt="Portrait of Mathijs van der Meijde" width="900" height="1200" />
                        </figure>

                        <div className="about__text">
                            <h2 className="about__name">Mathijs van der Meijde</h2>
                            <p className="about__roles">
                                Full-Stack Developer at{" "}
                                <a href="https://www.nobears.com/" target="_blank" rel="noreferrer">
                                    NOBEARS
                                </a>
                                <br />
                                Student Creative Media &amp; Game Technologies at{" "}
                                <a href="https://www.hogeschoolrotterdam.nl/" target="_blank" rel="noreferrer">
                                    Hogeschool Rotterdam
                                </a>
                            </p>

                            <p>
                                I love building for the web, working with 3D, experimenting with AI and developing games. I
                                enjoy exploring the latest technologies and using them to build things that are both fun and
                                functional, from experiments to products.
                            </p>

                            <h3>Work</h3>
                            <p>
                                I currently work as a Full-Stack Developer at NOBEARS, a business accelerator based in
                                Rotterdam. There I work on challenging projects, collaborate on team efforts and learn from
                                experienced developers.
                            </p>

                            <h3>School</h3>
                            <p>
                                I&apos;m studying Creative Media and Game Technologies at Hogeschool Rotterdam, now in my
                                fourth year. I work on all kinds of creative tech projects, which lets me grow as both a
                                designer and a developer.
                            </p>

                            <p className="about__links">
                                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                                    LinkedIn
                                </a>
                                <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default About;
