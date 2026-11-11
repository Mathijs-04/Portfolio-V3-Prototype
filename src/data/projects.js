// Projects, in the same order as the V1 portfolio. Names and subtitles are the official V1 ones.
// rarity: "legendary" | "epic" | "rare" | "common"

export const RARITIES = ["legendary", "epic", "rare", "common"];

export const projects = [
    {
        "slug": "portfolio",
        "name": "Portfolio",
        "tagline": "A showcase of my work and skills",
        "rarity": "common",
        "tech": [
            "React",
            "Tailwind"
        ],
        "images": [
            "projects/portfolio.webp",
            "projects/portfolio-2.webp",
            "projects/portfolio-3.webp",
            "projects/portfolio-4.webp"
        ],
        "lore": [
            "This portfolio website presents a selection of my projects, my professional experience and an overview of my skills. It is also a place where I experiment with modern web development techniques, and it continues to grow alongside my work.",
            "The site is a single-page application built with React and bundled with Vite. Navigation between pages is handled by React Router, and the design is styled with Tailwind CSS to keep the layout consistent across desktop and mobile devices.",
            "For motion and interactivity, I use Framer Motion for page and scroll animations, the typewriter-effect package for the animated text on the home page, and a custom image carousel with fullscreen viewing. Icons come from react-icons, and the code is checked with ESLint."
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/Portfolio",
                "kind": "code"
            }
        ]
    },
    {
        "slug": "warhammer-rule-assistant",
        "name": "Warhammer Rule Assistant",
        "tagline": "The ultimate rule assistant for Warhammer players",
        "rarity": "legendary",
        "tech": [
            "Laravel",
            "Vue",
            "Tailwind",
            "Python",
            "FastAPI",
            "OpenAI",
            "SQL"
        ],
        "images": [
            "projects/warhammer-rule-assistant.webp",
            "projects/warhammer-rule-assistant-2.webp",
            "projects/warhammer-rule-assistant-3.webp",
            "projects/warhammer-rule-assistant-4.webp",
            "projects/warhammer-rule-assistant-5.webp"
        ],
        "lore": [
            "Warhammer Rule Assistant is a tool for Warhammer players who want to spend more time fighting battles and less time searching through rulebooks. I have been working on this application for the past few months as part of my third-year school project. With this tool, users can answer rule-related questions within seconds instead of constantly pausing games to look up specific rules. The application contains vectorized Warhammer rules for both Age of Sigmar and 40,000. When a user asks a question, the relevant vector data is attached to the prompt and sent to an AI model, which generates an answer based on the official rules. Each answer includes a short explanation, a more detailed explanation, and the official source.",
            "The application also features a PDF viewer with official rulebooks, which are connected to answers through highlighted keywords. When a user clicks one of these keywords, they are sent to the correct rulebook and page where that rule is mentioned. Besides answering rules questions, this tool also helps players build ready-to-use armies. The Front-End was built with Vue.js and Tailwind, while the Python Back-End uses FastAPI to manage calls to OpenAI and retrieve vector data. Laravel acts as the bridge between the Front-End and Back-End. This project has been one of the most challenging, but also one of the most fun, projects I have worked on so far!"
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/PLE-MVP",
                "kind": "code"
            },
            {
                "label": "Promo Page",
                "href": "https://mathijs-04.github.io/PLE-Onepager/",
                "kind": "live"
            }
        ]
    },
    {
        "slug": "arcane-archive",
        "name": "The Arcane Archive",
        "tagline": "A web-based Dungeon Synth music player",
        "rarity": "legendary",
        "tech": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "images": [
            "projects/arcane-archive.webp",
            "projects/arcane-archive-2.webp",
            "projects/arcane-archive-3.webp"
        ],
        "lore": [
            "The Arcane Archive is a web-based Dungeon Synth music player. Dungeon Synth is a niche type of electronic music featuring fantasy-style ambient music. I really like this genre and the distinct visual style that comes with it. I liked the style so much that I decided to try my own hand at making a design with this style. I built this application for a design project for the User Experience Design Course at school. The biggest challenge of this project was translating this very distinct Dark Fantasy style to a simple webpage, but I think it turned out great. It features a couple of my favorite tracks, so go check it out!"
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/The-Arcane-Archive",
                "kind": "code"
            },
            {
                "label": "Visit",
                "href": "https://mathijs-04.github.io/The-Arcane-Archive/",
                "kind": "live"
            }
        ]
    },
    {
        "slug": "echoes-of-the-realm",
        "name": "Echoes of the Realm",
        "tagline": "A Fantasy Soundscape Generator",
        "rarity": "legendary",
        "tech": [
            "JavaScript",
            "Web Audio",
            "HTML",
            "CSS"
        ],
        "images": [
            "projects/echoes-of-the-realm.webp",
            "projects/echoes-of-the-realm-2.webp",
            "projects/echoes-of-the-realm-3.webp",
            "projects/echoes-of-the-realm-4.webp",
            "projects/echoes-of-the-realm-5.webp",
            "projects/echoes-of-the-realm-6.webp"
        ],
        "lore": [
            "Echoes of the Realm is a web-based Fantasy Soundscape Generator. Tired of endlessly searching YouTube for the perfect ambience to accompany your tabletop adventures, only to be interrupted by ads or forced to find a new playlist every time your party enters a different setting? Then Echoes of the Realm is exactly what you need! This simple online tool lets users pick a setting and adjust the danger level, from a cozy campfire to a dreadful dungeon. The sound never stops playing; it adjusts itself based on your needs.",
            "I made this project for a sound design course at school. It works as follows: the sound engine runs in the browser on the Web Audio API, blending about 34 looping beds and 45 one-shot effects into a continuous soundscape. Every clip carries a mood score from calm to intense. You choose one of six locations and a danger slider, and the selection follows that vibe with weighted randomness, so it feels right but never identical.",
            "One main ambient loop plus one or two layers form the bed, with slow crossfades when layers drift to new material every minute or two. One-shots are gated by location, mood, and simple context (day versus night beds, a storm already playing, and similar rules), and they fire more often as danger rises. Each event is placed at random as near, mid, or far using volume, pan, filtering, and reverb, while the overall wetness grows with danger so tense moments feel larger and more enclosed."
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/Echoes-of-the-Realm",
                "kind": "code"
            },
            {
                "label": "Visit",
                "href": "https://mathijs-04.github.io/Echoes-of-the-Realm/",
                "kind": "live"
            }
        ]
    },
    {
        "slug": "release-radar",
        "name": "Release Radar",
        "tagline": "Your personalized game release calendar",
        "rarity": "rare",
        "tech": [
            "React"
        ],
        "images": [
            "projects/release-radar.webp",
            "projects/release-radar-2.webp",
            "projects/release-radar-3.webp"
        ],
        "lore": [
            "Release Radar is your personalized game release calendar. I created this prototype to solve a problem I ran into myself: there are a lot of upcoming games I look forward to, but they all release at different times, on different platforms, and some don't even have a release date yet. I couldn't keep track of them all, so I built Release Radar.",
            "It's a simple React app hosted on GitHub Pages. You can add all of your anticipated game releases, along with extra information such as images and notes. Once your games are added, they are displayed in a timeline or agenda view. Existing listings can also be edited, for example when a game gets delayed.",
            "All data is stored in your browser's local storage, and you can export and import it as JSON, either as a backup or to transfer it to another device. This prototype is free to use and available through the link below!"
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/Release-Radar",
                "kind": "code"
            },
            {
                "label": "Visit",
                "href": "https://mathijs-04.github.io/Release-Radar/",
                "kind": "live"
            }
        ]
    },
    {
        "slug": "object-1",
        "name": "Object_1",
        "tagline": "An AI-driven 3D experiment",
        "rarity": "epic",
        "tech": [
            "React",
            "WebGL",
            "Claude Code"
        ],
        "images": [
            "projects/object1.webp",
            "projects/object1-2.webp",
            "projects/object1-3.webp",
            "projects/object1-4.webp"
        ],
        "lore": [
            "Object_1 is a digital art experiment involving 3D web design. It was made primarily using React and WebGL. I came up with this project when I wanted to experiment with Claude Code's ability to work with 3D on the web. The entire website was created using a single prompt in Claude Code. It features an abstract 3D object that evolves based on the user's scrolling interaction. It is not supposed to make any sense. Instead, it is designed to evoke a sense of wonder and mystery. Feel free to experience it yourself!"
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/Object_01",
                "kind": "code"
            },
            {
                "label": "Visit",
                "href": "https://mathijs-04.github.io/Object_01/",
                "kind": "live"
            }
        ]
    },
    {
        "slug": "mighty-models",
        "name": "Mighty Models",
        "tagline": "A Laravel website where users share their tabletop miniatures",
        "rarity": "rare",
        "tech": [
            "Laravel",
            "Tailwind",
            "SQL"
        ],
        "images": [
            "projects/mighty-models.webp",
            "projects/mighty-models-2.webp",
            "projects/mighty-models-3.webp"
        ],
        "lore": [
            "Mighty Models is a website for showcasing your miniature models to the world. This was the first ever Laravel project I worked on. It was also one of my first experiences with Tailwind. For data storage, I have used an SQLite database. On Mighty Models, you can view and like models from other users and upload your own models to the website. It also features a login system, a like system, and a post system. Users can delete and edit their own posts, and the admin has the authority to hide posts. Mighty Models is one of my favorite projects I have worked on, not only because I like the end result, but also because I have learned a lot about web development and frameworks during the process."
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/PRG5-Eindopdracht",
                "kind": "code"
            }
        ]
    },
    {
        "slug": "dungeon-defender",
        "name": "Dungeon Defender",
        "tagline": "A web-based game built with Excalibur.js",
        "rarity": "rare",
        "tech": [
            "Excalibur.js",
            "JavaScript"
        ],
        "images": [
            "projects/dungeon-defender.webp",
            "projects/dungeon-defender-2.webp",
            "projects/dungeon-defender-3.webp"
        ],
        "lore": [
            "Dungeon Defender is a 2D Arcade Game made with JavaScript in the gaming framework Excalibur.js. This was the first ever game I developed entirely by myself. In Dungeon Defender, the goal is to fight off as many enemies as possible and defend the dungeon. Defeating enemies gives you more points. When you are hit three times, the game ends and you will have to try again. Excalibur.js games run entirely in your browser, so no downloads are required."
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/Dungeon-Defender",
                "kind": "code"
            },
            {
                "label": "Play",
                "href": "https://mathijs-04.github.io/Dungeon-Defender/",
                "kind": "live"
            }
        ]
    },
    {
        "slug": "hosting-recommender",
        "name": "Hosting Recommender",
        "tagline": "A company website which recommends hosting packages",
        "rarity": "rare",
        "tech": [
            "Vue",
            "Python",
            "OpenAI",
            "Docker"
        ],
        "images": [
            "projects/hosting-recommender.webp",
            "projects/hosting-recommender-2.webp",
            "projects/hosting-recommender-3.webp",
            "projects/hosting-recommender-4.webp"
        ],
        "lore": [
            "Hosting Recommender is an internal company tool. This tool helps employees find the right hosting package for customers, based on a few simple questions. Based on the answers to these questions, the correct package is recommended, along with pricing and technical specifications. This tool was built in a single day as an experiment, but is now being used throughout the entire company. The Front-End was built using Vue.js, the Back-End uses Python. If users do not understand a question or have additional questions, they can ask the chatbot for help. This chatbot is powered using a model from OpenAI."
        ],
        "links": []
    },
    {
        "slug": "pimcore-converter",
        "name": "Pimcore Converter",
        "tagline": "A tool to import Excel data into Pimcore",
        "rarity": "epic",
        "tech": [
            "Vue",
            "Python",
            "FastAPI",
            "PHP",
            "OpenAI",
            "Docker"
        ],
        "images": [
            "projects/pimcore-converter.webp",
            "projects/pimcore-converter-2.webp",
            "projects/pimcore-converter-3.webp",
            "projects/pimcore-converter-4.webp"
        ],
        "lore": [
            "Pimcore Converter is a tool made for e-commerce teams using Pimcore. Pimcore is used to store large quantities of product data. Many companies still store this data in large Excel sheets. Converting these into Pimcore manually is a huge task, which is why I built this tool. You can enter your Pimcore credentials in this tool and upload your Excel data, either by uploading the file or providing a Google Drive Link. The Converter uses AI to sample the product data and make sure the correct folders, classes and items are created in Pimcore. Since it processes in batches, there is no limit to the size of the data you can convert. The Front-End was built using Vue.js, the Back-End uses Python, FastAPI, Symfony PHP and a model from OpenAI. This tool works together with a small Pimcore Bundle, which handles our request within your Pimcore Environment."
        ],
        "links": []
    },
    {
        "slug": "open-hiring",
        "name": "Open Hiring",
        "tagline": "A Laravel-based job listing platform for inclusive hiring",
        "rarity": "rare",
        "tech": [
            "Laravel",
            "Tailwind",
            "SQL"
        ],
        "images": [
            "projects/open-hiring.webp",
            "projects/open-hiring-2.webp",
            "projects/open-hiring-3.webp",
            "projects/open-hiring-4.webp",
            "projects/open-hiring-5.webp",
            "projects/open-hiring-6.webp"
        ],
        "lore": [
            "The Open Hiring Project was one of the most challenging, but also fun projects I have worked on so far. Open Hiring was developed for none other than digital agency iO Digital. iO gave us the challenge to work on an unconventional application platform for inclusive hiring. With Open Hiring, you skip the traditional application process and get to work right away. Our employer-focused version of the Open Hiring system was developed in just 15 days in a team of five students. The website uses Laravel, Tailwind, and SQLite, and features an extended login system, company pages system, vacancy posting system, an employee invite system, and lastly a vacancy overview. I enjoyed overcoming the challenges this project posed, and am thankful for getting to work on this project."
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/TLE1-Agency",
                "kind": "code"
            }
        ]
    },
    {
        "slug": "ai-travel-planner",
        "name": "AI Travel Planner",
        "tagline": "An AI-powered travel planning application",
        "rarity": "epic",
        "tech": [
            "Vue",
            "Python",
            "FastAPI",
            "Qdrant",
            "OpenAI",
            "Docker"
        ],
        "images": [
            "projects/ai-travel-planner.webp",
            "projects/ai-travel-planner-2.webp",
            "projects/ai-travel-planner-3.webp",
            "projects/ai-travel-planner-4.webp",
            "projects/ai-travel-planner-5.webp",
            "projects/ai-travel-planner-6.webp"
        ],
        "lore": [
            "This AI Travel Planner tool makes personalized travel plans to Kenya. The user gets asked a few questions about preferences, budget, transport, accommodation and duration of the trip. These answers get stored and are used to collect the correct data from the Qdrant Vector Database. These are integrated in the comprehensive system prompt, which includes all kinds of rules to make a correct travel plan. This vast prompt is sent to a model from OpenAI, which generates a travel plan based on the specifications. This plan is returned to the Front-End, where it is shown to the user. Here the user can interact with the plan, make small changes like changing accommodation and send it to their mail as confirmation. The Front-End uses Vue.js, while the Back-End consists of Python , FastAPI, a Qdrant Vector Database and calls to OpenAI. This was one of the most comprehensive and challenging projects I have worked on so far!"
        ],
        "links": []
    },
    {
        "slug": "blije-bij",
        "name": "De Blije Bij",
        "tagline": "The app for sustainable gardens",
        "rarity": "rare",
        "tech": [
            "React Native",
            "Express"
        ],
        "images": [
            "projects/tuin.webp",
            "projects/tuin-2.webp",
            "projects/tuin-3.webp",
            "projects/tuin-4.webp",
            "projects/tuin-5.webp",
            "projects/tuin-6.webp",
            "projects/tuin-7.webp"
        ],
        "lore": [
            "De Blije Bij is a sustainability-focused garden app built with React Native and Expo Go. The app helps users make their gardens more eco-friendly by offering sustainable advice based on the size, types of plants, amount of light and soil type of their garden. Users can design their own garden using our grid system, view statistics on the sustainability of their garden, and discover new plants in a built-in plant encyclopedia. All plant data is fetched through a custom-made Express API. The app was made for a school project about sustainable start-ups and was developed in a team of six students."
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/TLE-STARTUP",
                "kind": "code"
            }
        ]
    },
    {
        "slug": "fitness-finder",
        "name": "Fitness Finder",
        "tagline": "An app to help you find a gym",
        "rarity": "common",
        "tech": [
            "React Native"
        ],
        "images": [
            "projects/app.webp",
            "projects/app-2.webp",
            "projects/app-3.webp",
            "projects/app-4.webp"
        ],
        "lore": [
            "Fitness Finder is my very first native app and was made using React Native and Expo Go. Fitness Finder gives you an overview of gyms near your location, and helps you navigate to them. The app offers a list view of every single Basic-Fit in the Netherlands, and allows you to add them to your favorites list. When selecting a gym, it is shown on the map, and a compass guides you to the location. In the settings page, the user can switch to dark mode, or translate the app from English to either Dutch or German. This project was mostly intended to learn more about mobile development, and test out some cool features like biometric security, offline mode and user location."
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/PRG7",
                "kind": "code"
            }
        ]
    },
    {
        "slug": "unreal-engine-scene",
        "name": "Unreal Engine Scene",
        "tagline": "A cinematic scene in Unreal Engine 5.8",
        "rarity": "epic",
        "tech": [
            "Unreal Engine 5"
        ],
        "images": [
            "projects/unreal-engine-scene.webp",
            "projects/unreal-engine-scene-2.webp"
        ],
        "lore": [
            "This cinematic cave scene in Unreal Engine 5.8 was a short experiment for a 3D Design school course. With this project, I wanted to experiment with Unreal's lighting systems and its cinematography options. I also experimented with the Blueprint system to make a realistic-looking candle flame."
        ],
        "links": []
    },
    {
        "slug": "unreal-engine",
        "name": "Unreal Engine Landscape",
        "tagline": "A 3D landscape built in Unreal Engine 5",
        "rarity": "rare",
        "tech": [
            "Unreal Engine 5"
        ],
        "images": [
            "projects/unreal-engine.webp",
            "projects/unreal-engine-2.webp"
        ],
        "lore": [
            "This Unreal Engine 5 environment is my first ever project in Unreal Engine. I wanted to learn more about Unreal Engine 5 and 3D Development, so I created this fantasy environment with castles in it. While making this environment I experimented with various tools and techniques in Unreal Engine 5, like Nanite, Lumen, Landscaping, Modular Design, and the UE5 Blueprint system. During this project, I followed an Unreal Engine 5 Beginner Tutorial by Unreal Sensei. I was positively surprised by the number of possibilities UE5 has, and want to work on more of these projects in the future."
        ],
        "links": []
    },
    {
        "slug": "elder-scrolls-theme-player",
        "name": "The Elder Scrolls Theme Player",
        "tagline": "A music player for The Elder Scrolls",
        "rarity": "common",
        "tech": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "images": [
            "projects/theme-player.webp",
            "projects/theme-player-2.webp"
        ],
        "lore": [
            "The Elder Scrolls Music Player is a website that plays the main theme music from all major games in The Elder Scrolls series. It was created as part of a coding challenge where I had to build a website using AI in just 1 minute. That's right, this entire website was made from start to finish in under 60 seconds!"
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/Elder-Scrolls-Theme-Player",
                "kind": "code"
            },
            {
                "label": "Visit",
                "href": "https://mathijs-04.github.io/Elder-Scrolls-Theme-Player/",
                "kind": "live"
            }
        ]
    },
    {
        "slug": "adventurers-armory",
        "name": "The Adventurers Armory",
        "tagline": "A Fantasy Store Experience",
        "rarity": "epic",
        "tech": [
            "Vue"
        ],
        "images": [
            "projects/armory.webp",
            "projects/armory-2.webp",
            "projects/armory-3.webp"
        ],
        "lore": [
            "The Adventurers Armory is a digital Fantasy Store Experience. It was made in Vue.js as a fun hobby project. I came up with the idea of creating a fictional webshop for fun, which evolved into the project you are seeing right now. It features a loading screen, a landing page, a storefront with over 30 unique items and a detail page with unique descriptions for each item. The website also features an audio system with sound effects and different background tracks to listen to. It also includes a full-screen button which enables users to get the full experience."
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/The-Adventurers-Armory",
                "kind": "code"
            },
            {
                "label": "Visit",
                "href": "https://mathijs-04.github.io/The-Adventurers-Armory/",
                "kind": "live"
            }
        ]
    },
    {
        "slug": "dice-roller",
        "name": "WARHAMMER Dice Roller",
        "tagline": "An online dice rolling tool for wargaming enthusiasts",
        "rarity": "common",
        "tech": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "images": [
            "projects/dice-roller.webp",
            "projects/dice-roller-2.webp"
        ],
        "lore": [
            "WARHAMMER Dice Roller is a simple online tool to roll many dice at once. I was inspired to work on this small hobby project because of my own frustrations during the WARHAMMER Tabletop Game. When playing WARHAMMER, players have to roll a lot of dice, and it can be quite time-consuming. I wanted to ease the pain by creating a simple website to roll a lot of dice at once. By using the online WARHAMMER Dice Roller, you spend less time rolling dice, and more time conquering the world! This simple website was developed using HTML, CSS, and JavaScript, and works on both PC and Mobile."
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/Dice-Roller",
                "kind": "code"
            },
            {
                "label": "Visit",
                "href": "https://mathijs-04.github.io/Dice-Roller/",
                "kind": "live"
            }
        ]
    },
    {
        "slug": "portfolio-y1",
        "name": "Year 1 Portfolio",
        "tagline": "A collection of my first-year projects",
        "rarity": "common",
        "tech": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "images": [
            "projects/portfolio-y1.webp",
            "projects/portfolio-y1-2.webp",
            "projects/portfolio-y1-3.webp"
        ],
        "lore": [
            "This was my previous portfolio website, which I used before making my current one. This portfolio showcased most of my first-year projects and some of my second-year projects I had worked on. This website was made entirely in plain HTML, CSS, and JavaScript. One of the main reasons I decided to make a new portfolio was to challenge myself to build my portfolio using more advanced web development tools and techniques."
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/Jaar-1-Portfolio",
                "kind": "code"
            },
            {
                "label": "Visit",
                "href": "https://mathijs-04.github.io/Jaar-1-Portfolio/",
                "kind": "live"
            }
        ]
    },
    {
        "slug": "dnd-gpt",
        "name": "D&D-GPT",
        "tagline": "Your AI Dungeon Master",
        "rarity": "epic",
        "tech": [
            "React",
            "Express",
            "OpenAI"
        ],
        "images": [
            "projects/dnd-gpt.webp",
            "projects/dnd-gpt-2.webp"
        ],
        "lore": [
            "D&D-GPT is an AI Dungeon Master for Dungeons & Dragons 5e, powered by ChatGPT-3.5. During a school course on AI Large Language Models, I decided to create my own AI assistant. To align with my personal interests, I developed an assistant for Dungeons & Dragons. My AI has access to the entire D&D 5e ruleset and an API that fetches random monsters, enabling it to answer D&D-related questions and provide monster data on demand. User chat history is stored and can be reset with a single click. The Front-End was built using React, while the Back-End, which communicates with the OpenAI API, was developed with Express. During this project, I have learned a lot about how Large Language Models work, and how easy it is to experiment with them yourself."
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/PRG8-LLM",
                "kind": "code"
            }
        ]
    },
    {
        "slug": "game-collection",
        "name": "Full-Stack Game Collection",
        "tagline": "A MERN-stack collection with a dedicated Front- and Back-End",
        "rarity": "rare",
        "tech": [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind"
        ],
        "images": [
            "projects/game-collection.webp",
            "projects/game-collection-2.webp"
        ],
        "lore": [
            "The Full-Stack Game Collection is one of the latest projects I have worked on. The goal of this project was to learn more about the differences between Front-End and Back-End web development. This project uses React and Tailwind as the most important Front-End components. The Back-End consists of Node.js, MongoDB, and Express. By combining the Front-End and Back-End, I have created a website that stores data of popular video games. The game data is stored by the Back-End and retrieved and visualized by the Front-End. Even though the final product itself doesn't look too spectacular, I think this project was one of the most educational projects I have worked on so far."
        ],
        "links": [
            {
                "label": "Front-End Source",
                "href": "https://github.com/Mathijs-04/PRG6-Front-End",
                "kind": "code"
            },
            {
                "label": "Back-End Source",
                "href": "https://github.com/Mathijs-04/PRG6-Back-End",
                "kind": "code"
            }
        ]
    },
    {
        "slug": "sign-trail",
        "name": "SignTrail",
        "tagline": "An educational sign language game for students",
        "rarity": "legendary",
        "tech": [
            "React",
            "Tailwind",
            "SQL",
            "Neural Network",
            "Excalibur.js"
        ],
        "images": [
            "projects/sign-trail.webp",
            "projects/sign-trail-2.webp",
            "projects/sign-trail-3.webp",
            "projects/sign-trail-4.webp",
            "projects/sign-trail-5.webp",
            "projects/sign-trail-6.webp"
        ],
        "lore": [
            "SignTrail is an educational game made for students learning sign language. In our game, your goal is to help your snail reach the finish as fast as possible by doing the right sign language gestures. Our application features a difficulty system, personal scoreboard, gesture overview page and official school login, to make sure it is only accessible for actual students. During this project, we worked with a separate Front-End and Back-End team. I was part of the Front-End team, and was responsible for making our website and game. One of the biggest challenges during this project was combining two JavaScript frameworks, React & Excalibur.js, into a single product. It took some effort to get there, but in the end, we made it work!"
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/TLE2-Front-End",
                "kind": "code"
            }
        ]
    },
    {
        "slug": "schild-magie-zwaard",
        "name": "Schild, Magie, Zwaard",
        "tagline": "A web-based game powered by Neural Networks",
        "rarity": "epic",
        "tech": [
            "JavaScript",
            "Neural Network",
            "HTML",
            "CSS"
        ],
        "images": [
            "projects/smz.webp",
            "projects/smz-2.webp"
        ],
        "lore": [
            "Schild, Magie, Zwaard is a simple web-based game powered by a Neural Network. It is a variation of Rock, Paper, Scissors, created as an experiment in building my own AI model using Neural Networks. The project consists of a Front-End where players interact with the game and a Back-End that collects data, trains the model, and evaluates its performance. The game uses live hand-tracking via your webcam. The Neural Network analyzes gestures in real time to predict the player’s move, creating a competitive experience against the computer. Through this project, I have learned a lot about Neural Networks, including how to design, train, and deploy your very own Model."
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/PRG8-Interface",
                "kind": "code"
            },
            {
                "label": "Play",
                "href": "https://mathijs-04.github.io/PRG8-Interface/",
                "kind": "live"
            }
        ]
    },
    {
        "slug": "gobbo-quest",
        "name": "Gobbo Quest",
        "tagline": "A simple web-based RPG",
        "rarity": "common",
        "tech": [
            "MakeCode Arcade"
        ],
        "images": [
            "projects/gobbo-quest.webp",
            "projects/gobbo-quest-2.webp",
            "projects/gobbo-quest-3.webp"
        ],
        "lore": [
            "Gobbo Quest is a simple top-down arcade game made with MakeCode Arcade. This game was made in a few hours with three other students as an introduction to the game development course. Gobbo Quest is a short top-down dungeon crawler in which you have to explore a dungeon, slay enemies, and defeat the boss. Gobbo Quest works on both PC and mobile and runs in the browser. This project was a fun way to explore the basic concepts of game development."
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/Gobbo-Quest-V2",
                "kind": "code"
            },
            {
                "label": "Play",
                "href": "https://makecode.com/_2qvTbVe5JAd3",
                "kind": "live"
            }
        ]
    },
    {
        "slug": "flashcard-generator",
        "name": "Flashcard Generator",
        "tagline": "An AI-powered flashcard generator in Vue.js",
        "rarity": "rare",
        "tech": [
            "Vue",
            "Mistral-7B"
        ],
        "images": [
            "projects/flashcard-generator.webp",
            "projects/flashcard-generator-2.webp",
            "projects/flashcard-generator-3.webp"
        ],
        "lore": [
            "This simple application generates a flashcard-style question and answer based on a topic of your choice. This project was made using the Vue.js framework and HuggingFace's model Mistral-7B-Instruct-v0.2. I started this project to learn the basics of the Vue.js framework and experiment with running a LLM locally. The model I chose for this project is downloaded and cached in the user's browser and uses WebGPU to run. The more powerful your GPU, the faster the flashcards will be generated. Since the entire model needs to be downloaded locally, the first load takes a lot longer than usual. After that, the model is cached and will load much quicker. Since the model is running locally in your browser, none of the input data will be stored. Not all browsers support WebGPU, but it is supported by most popular browsers like Chrome, Edge, Firefox, and Safari. Since this is a relatively simple model and I haven't yet been able to make my prompt engineering watertight, the quality of the flashcard varies greatly based on the topic, and sometimes it outright refuses to generate one. You could also convince the model to break the rules and generate content other than flashcards, so I suggest you try and experiment a bit with it!"
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/Vue.js-Flashcards",
                "kind": "code"
            },
            {
                "label": "Visit",
                "href": "https://mathijs-04.github.io/Vue.js-Flashcards/",
                "kind": "live"
            }
        ]
    },
    {
        "slug": "exp-corp",
        "name": "EXPCorp.",
        "tagline": "A fictional company website specialized in VR experiences",
        "rarity": "common",
        "tech": [
            "React",
            "Tailwind",
            "SQL"
        ],
        "images": [
            "projects/exp-corp.webp",
            "projects/exp-corp-2.webp",
            "projects/exp-corp-3.webp",
            "projects/exp-corp-4.webp"
        ],
        "lore": [
            "EXPCorp. is a website for a fictional company that offers virtual experiences to the elderly. This concept was created based on a brainstorming session during which our team shared ideas about dystopian and utopian scenarios. We decided to work on a fictional scenario in which Virtual Reality takes over the world. Our next step was developing a website that suited that scenario, and EXPCorp. was born. EXPCorp. offers nine unique virtual experiences that can be used with or without a VR headset. The website also features a product page and an interactive question system to determine which VR gear suits you best. EXPCorp. was never intended to be a solution, but rather a means to make people think about the future of technology."
        ],
        "links": [
            {
                "label": "Source",
                "href": "https://github.com/Mathijs-04/TLE1-SPRINT3",
                "kind": "code"
            },
            {
                "label": "Visit",
                "href": "https://stud.hosted.hr.nl/1068031/TLE1-SPRINT3/index.php",
                "kind": "live"
            }
        ]
    }
];
