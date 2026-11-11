import { projects } from "./projects.js";

/*
 * Skills as constellations drifting through the night sky.
 *
 * Each domain is a loose cluster of stars; its shape is generated from `seed`, so it is
 * irregular but the same on every visit. `at` is the starting position (% of the
 * viewport) and `drift` how far it wanders (vw / vh) over `seconds`, back and forth.
 *
 * level: 1-3, how bright the star burns. PLACEHOLDER values: set these yourself.
 * tech:  names matched against `tech` in projects.js for the "Seen in" list.
 * slugs: extra projects to list when the tech name doesn't appear on any card.
 * blurb: PLACEHOLDER copy, rewrite in your own words.
 */

export const constellations = [
    {
        id: "front-end",
        domain: "Front-End",
        seed: 11,
        at: { x: 12, y: 24 },
        drift: { x: 30, y: 10, seconds: 150, phase: 0.35 },
        stars: [
            { id: "html", name: "HTML", level: 3, tech: ["HTML"], blurb: "Where every page starts. Semantic, accessible markup is the parchment everything else is written on." },
            { id: "css", name: "CSS", level: 3, tech: ["CSS"], blurb: "From grid layouts to grain overlays and rough clip-paths: most of this portfolio's atmosphere is CSS." },
            { id: "javascript", name: "JavaScript", level: 3, tech: ["JavaScript"], blurb: "The language I reach for first, from browser games to a Web Audio soundscape engine." },
            { id: "react", name: "React", level: 3, tech: ["React"], blurb: "My main framework for interactive front-ends, including both versions of this portfolio." },
            { id: "vue", name: "Vue.js", level: 2, tech: ["Vue"], blurb: "Used for AI tools at work and the Warhammer Rule Assistant's front-end." },
            { id: "tailwind", name: "Tailwind", level: 2, tech: ["Tailwind"], blurb: "Utility-first styling for quick, consistent layouts across Laravel and React projects." },
            { id: "react-native", name: "React Native", level: 1, tech: ["React Native"], blurb: "Native mobile apps with Expo: a gym finder with a compass and a garden planner." },
        ],
    },
    {
        id: "back-end",
        domain: "Back-End",
        seed: 27,
        at: { x: 58, y: 15 },
        drift: { x: -26, y: 14, seconds: 170, phase: 0.6 },
        stars: [
            { id: "python", name: "Python", level: 2, tech: ["Python"], blurb: "The glue for my AI work: data pipelines, model calls and vector search." },
            { id: "fastapi", name: "FastAPI", level: 2, tech: ["FastAPI"], blurb: "Lightweight Python APIs that sit between Vue front-ends and AI models." },
            { id: "laravel", name: "Laravel", level: 2, tech: ["Laravel"], blurb: "Full-stack PHP: auth, posts and likes in Mighty Models, inclusive hiring in Open Hiring." },
            { id: "php", name: "PHP", level: 2, tech: ["PHP", "Laravel"], blurb: "The language under Laravel, and under a fair share of the web." },
            { id: "node", name: "Node.js", level: 2, tech: ["Node.js", "Express"], blurb: "JavaScript on the server, first learned building a MERN-stack collection." },
            { id: "express", name: "Express", level: 2, tech: ["Express"], blurb: "Minimal servers and REST APIs for React and React Native apps." },
            { id: "mongodb", name: "MongoDB", level: 1, tech: ["MongoDB"], blurb: "Document storage for the Full-Stack Game Collection." },
            { id: "sql", name: "SQL", level: 2, tech: ["SQL"], blurb: "Relational data in SQLite, MySQL and friends, mostly behind Laravel." },
        ],
    },
    {
        id: "ai",
        domain: "Artificial Intelligence",
        seed: 5,
        at: { x: 68, y: 48 },
        drift: { x: -34, y: -8, seconds: 190, phase: 0.15 },
        stars: [
            { id: "llm-apis", name: "LLM APIs", level: 3, tech: ["OpenAI"], blurb: "Building products on top of language models: rule assistants, travel planners and internal tools." },
            { id: "rag", name: "RAG & Vector Search", level: 2, tech: ["Qdrant"], slugs: ["warhammer-rule-assistant"], blurb: "Retrieval-augmented generation: answers grounded in real sources, with the source attached." },
            { id: "neural-networks", name: "Neural Networks", level: 2, tech: ["Neural Network"], blurb: "Collecting data, training and evaluating my own models, then putting them in a game." },
            { id: "computer-vision", name: "Hand Tracking", level: 1, slugs: ["schild-magie-zwaard", "sign-trail"], blurb: "Reading gestures live from a webcam, for a spell duel and a sign language game." },
            { id: "local-llms", name: "Local LLMs", level: 1, tech: ["Mistral-7B"], blurb: "Running a model entirely in the browser, no server required." },
            { id: "ai-dev", name: "AI-Assisted Development", level: 2, tech: ["Claude Code"], slugs: ["elder-scrolls-theme-player"], blurb: "Pairing with AI coding agents, from a one-prompt WebGL piece to this very portfolio." },
            { id: "prompting", name: "Prompt Engineering", level: 2, slugs: ["dnd-gpt", "ai-travel-planner", "hosting-recommender"], blurb: "System prompts with rules, guardrails and personality. Even an AI Dungeon Master needs boundaries." },
        ],
    },
    {
        id: "game-dev",
        domain: "Game Dev & 3D",
        seed: 43,
        at: { x: 6, y: 56 },
        drift: { x: 36, y: -14, seconds: 160, phase: 0.8 },
        stars: [
            { id: "unreal", name: "Unreal Engine 5", level: 2, tech: ["Unreal Engine 5"], blurb: "Landscapes with Nanite and Lumen, and a candlelit cinematic cave." },
            { id: "blueprints", name: "Blueprints", level: 1, slugs: ["unreal-engine", "unreal-engine-scene"], blurb: "Visual scripting in Unreal, down to a convincing candle flame." },
            { id: "game-design", name: "Game Design", level: 2, slugs: ["dungeon-defender", "gobbo-quest", "sign-trail", "schild-magie-zwaard"], blurb: "Loops, difficulty and feedback that make something worth playing twice." },
            { id: "lighting", name: "Lighting & Cinematics", level: 1, slugs: ["unreal-engine-scene"], blurb: "Mood through light: the cave scene was mostly an exercise in patience." },
            { id: "excalibur", name: "Excalibur.js", level: 2, tech: ["Excalibur.js"], blurb: "My browser game engine of choice, from Dungeon Defender to SignTrail." },
            { id: "webgl", name: "WebGL", level: 1, tech: ["WebGL"], blurb: "3D on the web, as in the scroll-driven Object_1." },
            { id: "makecode", name: "MakeCode Arcade", level: 1, tech: ["MakeCode Arcade"], blurb: "Where the goblin was born: my very first game jam." },
        ],
    },
    {
        id: "design",
        domain: "Design & Sound",
        seed: 71,
        at: { x: 40, y: 54 },
        drift: { x: 20, y: -20, seconds: 140, phase: 0.5 },
        stars: [
            { id: "figma", name: "Figma", level: 2, blurb: "Wireframes, mock-ups and design systems before a single line of code." },
            { id: "ui", name: "UI Design", level: 2, slugs: ["arcane-archive", "adventurers-armory", "portfolio"], blurb: "Distinct visual styles, like the dungeon synth look this whole portfolio grew from." },
            { id: "ux", name: "UX Design", level: 2, slugs: ["arcane-archive", "release-radar"], blurb: "Solving my own problems first, then making the solution feel obvious." },
            { id: "sound", name: "Sound Design", level: 2, tech: ["Web Audio"], slugs: ["adventurers-armory"], blurb: "Layered ambience, one-shots and reverb that grows with danger." },
            { id: "motion", name: "Motion & Atmosphere", level: 2, slugs: ["object-1", "arcane-archive"], blurb: "Fog, grain, tilt and timing: the details people feel before they notice them." },
        ],
    },
    {
        id: "tooling",
        domain: "Tooling",
        seed: 89,
        at: { x: 76, y: 24 },
        drift: { x: -14, y: 26, seconds: 180, phase: 0.25 },
        stars: [
            { id: "git", name: "Git & GitHub", level: 3, slugs: [], blurb: "Version control for everything, and the home of nearly every project in the collection." },
            { id: "pages", name: "GitHub Pages", level: 2, slugs: [], blurb: "Where most of my browser projects live, playable with a single link." },
            { id: "vite", name: "Vite", level: 2, slugs: ["portfolio", "release-radar"], blurb: "Fast dev servers and builds for React and Vue." },
            { id: "docker", name: "Docker", level: 2, tech: ["Docker"], blurb: "Containerised AI stacks, so the tool runs the same on every machine." },
            { id: "postman", name: "Postman", level: 1, blurb: "Poking APIs until they confess." },
        ],
    }
];

const ORDER = Object.fromEntries(projects.map((p, i) => [p.slug, i]));
const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));

/** Projects a skill shows up in, in the same order as the Projects page. */
export function projectsForStar(star) {
    const found = new Map();
    for (const p of projects) {
        if (star.tech?.some((t) => p.tech.includes(t))) found.set(p.slug, p);
    }
    for (const slug of star.slugs ?? []) if (bySlug[slug]) found.set(slug, bySlug[slug]);
    if (star.id === "git") projects.filter((p) => p.links.some((l) => l.kind === "code")).forEach((p) => found.set(p.slug, p));
    if (star.id === "pages") projects.filter((p) => p.links.some((l) => l.href.includes("github.io"))).forEach((p) => found.set(p.slug, p));
    return [...found.values()].sort((a, b) => ORDER[a.slug] - ORDER[b.slug]);
}
