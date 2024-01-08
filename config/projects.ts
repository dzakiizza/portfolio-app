export type ProjectConfigProps = {
  thumbnail: string;
  title: string;
  category: string;
  type: string;
  description: string;
  skills: string[];
  links: {
    visit?: string;
    detail?: string;
    github?: string;
  };
};

export const projectsConfig: ProjectConfigProps[] = [
  {
    thumbnail: "/feedloop_ai_project.png",
    title: "Feedloop AI",
    category: "Tech",
    type: "Works",
    description:
      "A Generative AI platform, providing enterprise-grade AI solutions to solve enterprises complex challenges, build and host your own AI application. It integrates seamlessly with your internal data sources, providing actionable insights to drive strategic business decisions.",
    skills: ["React", "Next Js", "Node Js", "TS", "Chakra UI"],
    links: {
      visit: "https://www.feedloop.ai/",
    },
  },
  {
    thumbnail: "/buatin_app_project.png",
    title: "Buatin App",
    category: "Tech",
    type: "Works",
    description:
      "Buatin.App is an application builder that allows you to create applications tailored to your business needs. Using No-Code Development Platform technology, the application can be developed in a quick and affordable way",
    skills: ["React", "Next Js", "TS", "Chakra UI"],
    links: {
      visit: "https://buatin.app/",
    },
  },
  {
    thumbnail: "/admin_app_project.png",
    title: "Admin App",
    category: "Tech",
    type: "Personal project",
    description:
      "A web app that can manage products that has been added and view items that are in the shopping carts",
    skills: ["React", "Next Js", "TS", "Chakra UI"],
    links: {
      visit: "https://admin-app-rho-one.vercel.app/",
      github: "https://github.com/dzakiizza/admin-app",
      detail:
        "https://dzakiizza.notion.site/Admin-App-Personal-Project-b69a9f8526f045209aa4980f15456c5d?pvs=4",
    },
  },
  {
    thumbnail: "/anime_app_project.png",
    title: "Anime App",
    category: "Tech",
    type: "Personal project",
    description:
      "A web app that showing list of anime and maintain a collection of preferred anime",
    skills: ["React", "Next Js", "Graph QL", "TS", "Chakra UI"],
    links: {
      visit: "https://anime-app-nu.vercel.app/",
      github: "https://github.com/dzakiizza/anime-app",
      detail:
        "https://dzakiizza.notion.site/Anime-App-Personal-Project-b946672d1e8c4fe880a0ead2065abc04?pvs=4",
    },
  },
  {
    thumbnail: "/vellas_project.png",
    title: "Vellas - Manage Travelers Budgets",
    category: "Design",
    type: "Works",
    description:
      "An iOS app that help group of travelers manage budgets, savings and expenses",
    skills: ["Figma", "HIG Design", "Research", "UI/UX"],
    links: {
      detail:
        "https://dzakiizza.notion.site/Vellas-Manage-Group-Travelers-Budgets-Savings-and-Expenses-Apple-Developer-Academy-11fe569e006a440ab5262f941700097c?pvs=4",
    },
  },
  {
    thumbnail: "/skeva_project.jpeg",
    title: "Skeva -  Simplify Floor Plan Sketch",
    category: "Design",
    type: "Works",
    description:
      "An iOS iPad app to make floor-plan sketching easier and neater for conventional house designers by providing a digital canvas, surveyor notes, augmented reality measurement, notation, project documentation.",
    skills: ["Figma", "HIG Design", "Research", "UI/UX"],
    links: {
      detail: "https://dzakiizza.notion.site/Skeva-Simplify-Floor-Plan-Sketch-Apple-Developer-Academy-5097c79bbb314650aa78d671611cc016?pvs=4"
    }
  },
  {
    thumbnail: "/pickapic_project.png",
    title: "Pickapic - Give it a shot",
    category: "Design",
    type: "Works",
    description:
      "An iOS app that guide online shop owners to take better product photography from lighting and angle as well as better way to organize those photos.",
    skills: ["Figma", "HIG Design", "Research", "UI/UX"],
    links: {
      detail: "https://dzakiizza.notion.site/Pickapic-Give-it-a-shot-Apple-Developer-Academy-7fd30fe6e8d946e396bad25dea842de5?pvs=4"
    }
  },
  {
    thumbnail: "/electricator_project.png",
    title: "Electricator - Manage your electricity",
    category: "Design",
    type: "Works",
    description:
      "An iOS app that helps build a habit of reducing the expense of electricity bills and estimating potential electricity bills.",
    skills: ["Figma", "HIG Design", "Research", "UI/UX"],
    links: {
      detail: "https://dzakiizza.notion.site/Electricator-Manage-your-electricity-usage-Apple-Developer-Academy-c9ff3bd8506e442f8955296af1eb1bcd?pvs=4"
    }
  },
  {
    thumbnail: "/spotify_project.png",
    title: "Spotify - Improving User Time Spent",
    category: "Design",
    type: "Personal project",
    description:
      "A test cases about how to improve user time spent listening on Spotofy",
    skills: ["Figma", "Research", "UI/UX"],
    links: {
      detail: "https://dzakiizza.notion.site/Improving-User-Time-Spent-Listening-on-Spotify-Test-Case-677a64ebb4684118b870d85feda881ed?pvs=4"
    }
  },
  {
    thumbnail: "/dashbox_project.png",
    title: "Dashbox - Improve Low Completiont",
    category: "Design",
    type: "Personal project",
    description:
      "A test cases about improve low completion rate by identifying issues in the current version of the Dashbox",
    skills: ["Figma", "Research", "UI/UX"],
    links: {
      detail: "https://dzakiizza.notion.site/Improve-Low-Completion-On-Dashbox-Test-case-c4ace70b5fe74e2da5ca407eaa00326b?pvs=4"
    }
  },
];
