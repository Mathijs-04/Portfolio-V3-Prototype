import { forwardRef, useMemo } from "react";

/** Small deterministic PRNG: the same irregular shape on every visit. */
function seeded(seed) {
    let s = seed * 9973 + 7;
    return () => ((s = (s * 16807) % 2147483647) / 2147483647);
}

const GAP = 0.045; // lines stop short of their stars, like an old star chart
const DASHES = ["9 2 4 2 13 3", "6 2 11 3 3 2", "14 3 5 2"];

/**
 * A loose, natural-looking cluster: a wandering chain of stars with the odd branch,
 * normalised into a 0..100 box.
 */
function useShape(data) {
    return useMemo(() => {
        const rnd = seeded(data.seed);
        const pts = [{ x: 0, y: 0, a: rnd() * Math.PI * 2 }];
        const edges = [];

        for (let i = 1; i < data.stars.length; i++) {
            const parent = rnd() < 0.28 && i > 2 ? Math.floor(rnd() * (i - 1)) : i - 1;
            const p = pts[parent];
            let best = null;
            for (let tryN = 0; tryN < 14; tryN++) {
                const a = p.a + (rnd() - 0.5) * 2.2;
                const len = 0.3 + rnd() * 0.32;
                const c = { x: p.x + Math.cos(a) * len, y: p.y + Math.sin(a) * len, a };
                const near = Math.min(...pts.map((q) => Math.hypot(q.x - c.x, q.y - c.y)));
                if (!best || near > best.near) best = { ...c, near };
                if (near > 0.24) break;
            }
            pts.push({ x: best.x, y: best.y, a: best.a });
            edges.push([parent, i]);
        }

        const xs = pts.map((p) => p.x);
        const ys = pts.map((p) => p.y);
        const minX = Math.min(...xs);
        const minY = Math.min(...ys);
        const span = Math.max(Math.max(...xs) - minX, Math.max(...ys) - minY) || 1;
        const offX = (span - (Math.max(...xs) - minX)) / 2;
        const offY = (span - (Math.max(...ys) - minY)) / 2;
        const norm = pts.map((p) => ({
            x: 8 + ((p.x - minX + offX) / span) * 84,
            y: 8 + ((p.y - minY + offY) / span) * 84,
        }));

        const lines = edges.map(([a, b]) => {
            const p = norm[a];
            const q = norm[b];
            const dx = q.x - p.x;
            const dy = q.y - p.y;
            const len = Math.hypot(dx, dy);
            const g = (GAP * 100) / len;
            return {
                key: `${a}-${b}`,
                x1: p.x + dx * g,
                y1: p.y + dy * g,
                x2: q.x - dx * g,
                y2: q.y - dy * g,
                dash: DASHES[Math.floor(rnd() * DASHES.length)],
            };
        });

        const twinkles = data.stars.map(() => ({ dur: 3 + rnd() * 4, delay: -rnd() * 6 }));
        return { points: norm, lines, twinkles };
    }, [data]);
}

/**
 * One drifting constellation. Stars are plain buttons (composited opacity twinkles);
 * the lines are a static SVG, so the drift itself is a pure transform.
 * state: "idle" | "hovered" | "awake" | "faded"
 */
const Constellation = forwardRef(function Constellation(
    { data, state, selectedStar, hintedStar, onWake, onHover, onHintStar },
    ref,
) {
    const shape = useShape(data);
    const awake = state === "awake";

    return (
        <div
            ref={ref}
            className="constellation"
            data-state={state}
            style={{
                "--x": `${data.at.x}%`,
                "--y": `${data.at.y}%`,
                "--dx": `${data.drift.x}vw`,
                "--dy": `${data.drift.y}vh`,
                "--dur": `${data.drift.seconds}s`,
                "--phase": `${-data.drift.phase * data.drift.seconds}s`,
            }}
            onPointerEnter={() => onHover(data.id)}
            onPointerLeave={() => onHover(null)}
        >
            <svg className="constellation__lines" viewBox="0 0 100 100" aria-hidden="true">
                {shape.lines.map((l) => (
                    <line key={l.key} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} strokeDasharray={l.dash} />
                ))}
            </svg>

            {data.stars.map((star, i) => {
                const p = shape.points[i];
                const selected = awake && selectedStar === star.id;
                return (
                    <button
                        key={star.id}
                        type="button"
                        className="c-star"
                        data-level={star.level}
                        data-selected={selected || undefined}
                        data-hinted={(awake && hintedStar === star.id) || undefined}
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            "--twinkle": `${shape.twinkles[i].dur.toFixed(2)}s`,
                            "--twinkle-delay": `${shape.twinkles[i].delay.toFixed(2)}s`,
                        }}
                        aria-label={awake ? star.name : `${data.domain} constellation`}
                        onPointerEnter={() => awake && onHintStar(star.id)}
                        onPointerLeave={() => onHintStar(null)}
                        onClick={(e) => {
                            e.stopPropagation();
                            onWake(data.id, star.id);
                        }}
                    >
                        <span className="c-star__glow" aria-hidden="true" />
                        <span className="c-star__core" aria-hidden="true" />
                        {awake && <span className="c-star__name">{star.name}</span>}
                    </button>
                );
            })}
        </div>
    );
});

export default Constellation;
