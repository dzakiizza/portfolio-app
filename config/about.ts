import { ContentProps } from "@/components/carousel";
import { AiFillHtml5, AiFillDatabase, AiFillGithub } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoFigma,
  BiTestTube,
  BiBarChart,
} from "react-icons/bi";
import { SiNextdotjs, SiPostgresql, SiVercel, SiTableau } from "react-icons/si";

export const aboutSkillConfig = {
  desc: "“Dzaki is a bachelor of Information System at BINUS University since February 2022. A Software engineer that highly passionate and interest in technology but also have interest in product design. Experienced in software development process from the concept or problem statement through development and deliver the end product as solution. Capable to work effectively with a different roles and team in dynamic environment. An eager learner who dedicated to improve and maintain tools, also learn new things to maximize productivity so that could get a better result or performance of product.“",
  skill_list: [
    {
      icon: AiFillHtml5,
      label: "HTML5",
    },
    {
      icon: BiLogoCss3,
      label: "CSS3",
    },
    {
      icon: BiLogoJavascript,
      label: "Javascript",
    },
    {
      icon: BiLogoTypescript,
      label: "Typescript",
    },
    {
      icon: BiLogoReact,
      label: "React Js",
    },
    {
      icon: SiNextdotjs,
      label: "Next Js",
    },
    {
      icon: BiLogoNodejs,
      label: "Node Js",
    },
    {
      icon: SiPostgresql,
      label: "PostgreSQL",
    },
    {
      icon: AiFillDatabase,
      label: "Database",
    },
    {
      icon: BiLogoFigma,
      label: "Figma",
    },
    {
      icon: BiTestTube,
      label: "Unit Test",
    },
    {
      icon: AiFillGithub,
      label: "Git",
    },
    {
      icon: SiVercel,
      label: "Vercel",
    },
    {
      icon: SiTableau,
      label: "Tableau",
    },
    {
      icon: BiBarChart,
      label: "Power BI",
    },
  ],
};

export const aboutEduConfig: ContentProps[] = [
  {
    title: "Bina Nusantara University - Jakarta",
    subtitle: "Bachelor of Information System",
    period: "(09/2022 - 11/2023)",
    status: "GPA 3.68 / 4.00",
    desc: "My Cumulative GPA 3.68 out of 4.00, major in Business Intelligence. As an IS student, technology is my domain to explore such as programming, database system, data mining, project management and application design.",
  },
  {
    title: "SYNRGY Academy",
    subtitle: "Fullstack Scholarship Awardee & iOS Engineering",
    period: "(12/2021 - 06/2022)",
    desc: "I had the chance to join a software engineering bootcamp. In there, I had the opportunity to learn and develop a web application from Frontend to the Backend engineering. I also had a chance to learn and develop mobile application (iOS).",
  },
  {
    title: "Apple Developer Academy",
    subtitle: "Project Management,  UI/UX Design & iOS Tech ",
    period: "(02/2021 - 12/2021)",
    desc: "I was selected as one of the students from 200 national participants to prepare as a world-class developer by learning iOS Development, Product Design, Product Management, and Business Development.",
  },
];
