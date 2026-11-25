/**
 * Describes one project that is shown in the project list and in the overlay.
 */
export interface Project {
    /** Name of the project, e.g. "El Pollo Loco" */
    name: string;
    /** Technologies used in the project, e.g. ["HTML", "CSS"] */
    technologies: string[];
    /** Key of the project description in translations.ts */
    descriptionKey: string;
    /** Path to the screenshot, empty if there is none yet */
    image: string;
    /** Link to the GitHub repository */
    github: string;
    /** Link to the live version, empty if there is none yet */
    live: string;
}

/** All projects that are shown on the website, in display order. */
export const projectList: Project[] = [
    {
        name: "El Pollo Loco",
        technologies: ["HTML", "CSS", "JavaScript"],
        descriptionKey: "projectPolloLocoDescription",
        image: "/images/el-pollo-loco.webp",
        github: "https://github.com/SebaBuch/El-Pollo-Loco",
        live: "https://sebastianbuchholz.developerakademie.net/El%20Pollo%20Loco/"
    },
    {
        name: "Pokedex",
        technologies: ["HTML", "CSS", "JavaScript", "REST-API"],
        descriptionKey: "projectPokedexDescription",
        image: "/images/pokedex.webp",
        github: "https://github.com/SebaBuch/New-Pokedex",
        live: "https://sebastianbuchholz.developerakademie.net/pokedex2/"
    },
    {
        name: "BestellApp",
        technologies: ["HTML", "CSS", "JavaScript"],
        descriptionKey: "projectBestellAppDescription",
        image: "/images/bestell-app.webp",
        github: "https://github.com/SebaBuch/Bestell-App",
        live: "https://sebastianbuchholz.developerakademie.net/Bestell%20App/"
    }
];
