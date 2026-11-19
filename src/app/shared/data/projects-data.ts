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
        image: "",
        github: "https://github.com/SebaBuch",
        live: ""
    },
    {
        name: "Pokedex",
        technologies: ["HTML", "CSS", "JavaScript", "REST-API"],
        descriptionKey: "projectPokedexDescription",
        image: "",
        github: "https://github.com/SebaBuch",
        live: ""
    },
    {
        name: "BestellApp",
        technologies: ["HTML", "CSS", "JavaScript"],
        descriptionKey: "projectBestellAppDescription",
        image: "",
        github: "https://github.com/SebaBuch",
        live: ""
    }
]