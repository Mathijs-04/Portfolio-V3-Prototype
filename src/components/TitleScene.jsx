import { useEffect, useMemo, useRef } from "react";

const FOG_RATE = 0.5;
const FIREFLIES = 16;

/** Seeded midpoint displacement: a rough, hand-cut mountain ridge. */
function ridgePath(seed, { base, rough, width = 1000, height = 200 }) {
    let s = seed;
    const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
    let pts = [
        [0, base + (rnd() - 0.5) * rough],
        [width, base + (rnd() - 0.5) * rough],
    ];
    let spread = rough;
    for (let pass = 0; pass < 7; pass++) {
        const next = [];
        for (let i = 0; i < pts.length - 1; i++) {
            const [x1, y1] = pts[i];
            const [x2, y2] = pts[i + 1];
            next.push(pts[i], [(x1 + x2) / 2, (y1 + y2) / 2 + (rnd() - 0.5) * spread]);
        }
        next.push(pts[pts.length - 1]);
        pts = next;
        spread *= 0.55;
    }
    const line = pts.map(([x, y]) => `${x.toFixed(1)} ${Math.max(4, y).toFixed(1)}`).join("L");
    return { top: `M${line}`, fill: `M0 ${height}L${line}L${width} ${height}Z` };
}

function Ridge() {
    const { top, fill } = useMemo(() => ridgePath(93, { base: 95, rough: 130 }), []);
    return (
        <svg className="ridge" viewBox="0 0 1000 200" preserveAspectRatio="none" aria-hidden="true">
            <path className="ridge__fill" d={fill} />
            <path className="ridge__rim" d={top} filter="url(#title-rough)" />
        </svg>
    );
}

/** A distant dragon, side on, flying left to right. Wings flap around the shoulder. */
function Dragon() {
    return (
        <div className="dragon">
            <div className="dragon__bob">
                <svg className="dragon__svg" viewBox="-2 -6 192 104" aria-hidden="true">
                    <g className="dragon__wing dragon__wing--far">
                        <path d="M120 56Q129 43 132 28Q128 15 121 7Q98 -6 76 2Q90 14 65 24Q89 28 73 42Q91 42 95 55Q106 53 112 58Z" />
                    </g>
                    <g className="dragon__body">
                        <path d="M14 64C30 60 46 64 62 62C74 60 86 56 100 56C112 56 124 52 134 46C142 40 146 32 154 30C160 28 166 30 170 32L186 36L172 40C166 42 160 40 156 42C150 46 148 54 142 62C134 72 120 76 104 76C88 76 76 74 64 70C48 68 30 68 14 64Z" />
                        <path d="M16 64L2 56L7 64L2 72Z" />
                        <path d="M158 30L147 19L162 29ZM164 31L157 21L167 31Z" />
                        <path d="M80 73C82 81 76 87 68 90L66 87C72 85 74 80 72 72ZM126 71C130 79 128 85 122 88L120 85C125 83 126 78 121 72Z" />
                    </g>
                    <g className="dragon__wing dragon__wing--near">
                        <path d="M114 58Q124 44 126 28Q118 12 106 2L111 -7L109 3Q70 -14 34 -4Q56 12 26 24Q56 28 38 46Q64 44 70 60Q90 56 100 62Z" />
                    </g>
                </svg>
            </div>
        </div>
    );
}

function Fireflies() {
    const flies = useMemo(
        () =>
            Array.from({ length: FIREFLIES }, () => ({
                "--x": `${(Math.random() * 100).toFixed(1)}%`,
                "--y": `${(64 + Math.random() * 32).toFixed(1)}%`,
                "--dx": `${(-40 + Math.random() * 80).toFixed(0)}px`,
                "--dy": `${(-30 + Math.random() * 40).toFixed(0)}px`,
                "--size": `${(1.5 + Math.random() * 2).toFixed(1)}px`,
                "--drift": `${(9 + Math.random() * 10).toFixed(1)}s`,
                "--blink": `${(2.5 + Math.random() * 3).toFixed(1)}s`,
                "--delay": `${(-Math.random() * 12).toFixed(1)}s`,
            })),
        [],
    );
    return flies.map((style, i) => <span key={i} className="firefly" style={style} />);
}

function FogVideo({ className }) {
    const ref = useRef(null);
    useEffect(() => {
        const v = ref.current;
        if (!v) return;
        const set = () => (v.playbackRate = FOG_RATE);
        set();
        v.addEventListener("play", set);
        return () => v.removeEventListener("play", set);
    }, []);
    return (
        <video ref={ref} className={className} autoPlay muted loop playsInline preload="auto">
            <source src="/fx/Fog-Loop.mp4" type="video/mp4" />
        </video>
    );
}

/** The title-screen landscape, back to front. Static layers; only small things move. */
function TitleScene() {
    return (
        <div className="title-scene" aria-hidden="true">
            <svg className="svg-filters">
                <filter id="title-rough" x="-2%" y="-20%" width="104%" height="140%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="11" result="n" />
                    <feDisplacementMap in="SourceGraphic" in2="n" scale="2" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </svg>

            <div className="title-moon" />
            <div className="horizon-glow" />
            <Dragon />
            <div className="rise rise--1">
                <Ridge />
            </div>
            <FogVideo className="title-fog title-fog--back" />
            <div className="rise rise--2">
                <img className="title-forest" src="/fx/Forest-Backdrop.png" alt="" decoding="async" />
            </div>
            <FogVideo className="title-fog title-fog--front" />
            <div className="fireflies">
                <Fireflies />
            </div>
            <div className="rise rise--3 title-treeline">
                <img src="/fx/Forest-Backdrop.png" alt="" decoding="async" />
            </div>
            <div className="title-vignette" />
            <div className="title-curtain" />
        </div>
    );
}

export default TitleScene;
