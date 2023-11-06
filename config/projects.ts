export type ProjectConfigProps = {
  thumbnail: string;
  title: string;
  category: string;
  type: string;
  description: string;
  skills: string[];
};

export const projectsConfig: ProjectConfigProps[] = [
  {
    thumbnail: "/feedloop_ai_project.png",
    title: "Feedloop AI",
    category: "Tech",
    type: "Works",
    description:
      "Generative AI platform, providing enterprise-grade AI solutions to solve enterprises complex challenges",
    skills: ["React", "Next Js", "Node Js", "TS", "Chakra UI"],
  },
  {
    thumbnail: "/buatin_app_project.png",
    title: "Buatin App",
    category: "Tech",
    type: "Works",
    description:
      "A marketing website for advertaising Feedloop low code platform services and products",
    skills: ["React", "Next Js", "TS", "Chakra UI"],
  },
  {
    thumbnail: "/admin_app_project.png",
    title: "Admin App",
    category: "Tech",
    type: "Personal project",
    description:
      "A web app that can manage products that has been added and view items that are in the shopping carts",
    skills: ["React", "Next Js", "TS", "Chakra UI"],
  },
  {
    thumbnail: "/anime_app_project.png",
    title: "Anime App",
    category: "Tech",
    type: "Personal project",
    description:
      "A web app that showing list of anime and maintain a collection of preferred anime",
    skills: ["React", "Next Js", "Graph QL", "TS", "Chakra UI"],
  },
  {
    thumbnail: "/vellas_project.png",
    title: "Vellas - Manage Travelers Budgets",
    category: "Design",
    type: "Works",
    description:
      "iOS app that help group of travelers manage budgets, savings and expenses",
    skills: ["Figma", "HIG Design", "Research", "UI/UX"],
  },
  {
    thumbnail: "/skeva_project.jpeg",
    title: "Skeva -  Simplify Floor Plan Sketch",
    category: "Design",
    type: "Works",
    description:
      "iPadOS app that user to simplify floor plan sketching",
    skills: ["Figma", "HIG Design", "Research", "UI/UX"],
  },
  {
    thumbnail: "/pickapic_project.png",
    title: "Pickapic - Give it a shot",
    category: "Design",
    type: "Works",
    description:
      "iOS app that guide online shop owners to take better product photography",
    skills: ["Figma", "HIG Design", "Research", "UI/UX"],
  },
  {
    thumbnail: "/electricator_project.png",
    title: "Electricator - Manage your electricity",
    category: "Design",
    type: "Works",
    description:
      "iOS app that helps build a habit of reducing the expense of electricity bills",
    skills: ["Figma", "HIG Design", "Research", "UI/UX"],
  },
  {
    thumbnail: "/spotify_project.png",
    title: "Spotify - Improving User Time Spent",
    category: "Design",
    type: "Personal project",
    description:
      "A test cases about how to improve user time spent listening on Spotofy",
    skills: ["Figma", "Research", "UI/UX"],
  },
  {
    thumbnail: "/dashbox_project.png",
    title: "Dashbox - Improve Low Completiont",
    category: "Design",
    type: "Personal project",
    description:
      "A test cases about improve low completion rate by identifying issues in the current version of the Dashbox",
    skills: ["Figma", "Research", "UI/UX"],
  },
];
