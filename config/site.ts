export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Dzakiizza - Portfolio",
	description: "A personal website of Dzaki Izza",
	navItems: [
    {
      label: "About Me",
      href: "about",
    },
    {
      label: "Experience",
      href: "experience",
    },
    {
      label: "Project",
      href: "project",
    },
    {
      label: "Contact",
      href: "",
    }
	],
	links: {
		resume: "/resume.pdf",
		github: "https://github.com/dzakiizza",
		instagram: "https://twitter.com/getnextui",
		linkedin: "https://www.linkedin.com/in/dzaki-izza/",
	},
};
