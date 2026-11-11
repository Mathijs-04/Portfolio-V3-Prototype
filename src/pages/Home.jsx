import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useIsPresent } from "framer-motion";
import TitleScene from "../components/TitleScene.jsx";

const SEEN_KEY = "home:intro-seen";

function Home() {
    const isPresent = useIsPresent();

    // The full intro plays once per visit; afterwards the scene assembles quickly.
    const [quick] = useState(() => {
        try {
            return (
                sessionStorage.getItem(SEEN_KEY) === "1" ||
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
            );
        } catch {
            return false;
        }
    });

    // Marked after mount (not in the initializer, which StrictMode runs twice).
    useEffect(() => {
        try {
            sessionStorage.setItem(SEEN_KEY, "1");
        } catch {
            /* storage unavailable: the intro simply plays every time */
        }
    }, []);

    const flags = { "data-quick": quick || undefined, "data-leaving": isPresent ? undefined : "true" };

    return (
        <>
            {/* The landscape sits behind the page (with the sky), so it is portalled out. */}
            {createPortal(
                <div className="title-stage" {...flags}>
                    <TitleScene />
                </div>,
                document.body,
            )}

            <div className="title-screen" {...flags}>
                <h1 className="title-screen__name">
                    <span className="ink">Mathijs van der Meijde</span>
                </h1>
                <p className="title-screen__role">Creative Technologist</p>
            </div>
        </>
    );
}

export default Home;
