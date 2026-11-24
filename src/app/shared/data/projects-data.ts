export interface Project {
    name: string;
    technologies: string[];
    descriptionKey: string;
    image: string;
    github: string;
    live: string;
}

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