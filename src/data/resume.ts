import type { IconType } from "react-icons";
import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import movease from "../assets/movease_layout.png";
import drive from "../assets/drive_layout.png";
import fortouristic from "../assets/fortouristic_layout.png";
import blog from "../assets/blog_layout.png";

interface TechStackProps {
  name: string;
  slug: string;
  source: "devicon" | "simple-icons";
}

export interface PetProjectsProps {
  id: string;
  title?: string,
  description?: string,
  tags: string[];
  img: string;
  href: string;
}

export interface ExperienceProps {
  id: string;
  period?: string;
  position?: string;
  companyName?: string;
  achievements?: string[];
}

export interface ContactsProps {
  icon: IconType;
  title: string;
  href: string;
}

export const techStack: TechStackProps[] = [
  // devicon
  { name: "VS Code", slug: "vscode/vscode-original", source: "devicon" },
  {
    name: "IntelliJ IDEA",
    slug: "intellij/intellij-original",
    source: "devicon",
  },
  {
    name: "TypeScript",
    slug: "typescript/typescript-original",
    source: "devicon",
  },
  { name: "Next.js", slug: "nextjs/nextjs-original", source: "devicon" },
  {
    name: "JavaScript",
    slug: "javascript/javascript-original",
    source: "devicon",
  },
  { name: "React", slug: "react/react-original", source: "devicon" },
  { name: "Redux", slug: "redux/redux-original", source: "devicon" },
  { name: "Postman", slug: "postman/postman-original", source: "devicon" },
  { name: "HTML5", slug: "html5/html5-original", source: "devicon" },
  { name: "CSS3", slug: "css3/css3-original", source: "devicon" },
  {
    name: "Material UI",
    slug: "materialui/materialui-original",
    source: "devicon",
  },
  { name: "Sass", slug: "sass/sass-original", source: "devicon" },
  {
    name: "Tailwind CSS",
    slug: "tailwindcss/tailwindcss-original",
    source: "devicon",
  },
  {
    name: "Ant Design",
    slug: "antdesign/antdesign-original",
    source: "devicon",
  },
  { name: "MongoDB", slug: "mongodb/mongodb-original", source: "devicon" },
  { name: "Node.js", slug: "nodejs/nodejs-original", source: "devicon" },
  { name: "Express", slug: "express/express-original", source: "devicon" },
  { name: "Git", slug: "git/git-original", source: "devicon" },
  { name: "jQuery", slug: "jquery/jquery-original", source: "devicon" },
  { name: "Vite", slug: "vitejs/vitejs-original", source: "devicon" },
  { name: "Webpack", slug: "webpack/webpack-original", source: "devicon" },
  { name: "Jest", slug: "jest/jest-plain", source: "devicon" },

  // simple-icons
  {
    name: "React Testing Library",
    slug: "testinglibrary",
    source: "simple-icons",
  },
  { name: "Zod", slug: "zod", source: "simple-icons" },
  { name: "i18next", slug: "i18next", source: "simple-icons" },
  { name: "shadcn/ui", slug: "shadcnui", source: "simple-icons" },
  { name: "Radix UI", slug: "radixui", source: "simple-icons" },
  { name: "Swiper", slug: "swiper", source: "simple-icons" },
  { name: "Formik", slug: "formik", source: "simple-icons" },
  { name: "Sanity", slug: "sanity", source: "simple-icons" },
  { name: "Appwrite", slug: "appwrite", source: "simple-icons" },
  { name: "TanStack Query", slug: "tanstack", source: "simple-icons" },
  { name: "Payload CMS", slug: "payloadcms", source: "simple-icons" },
  { name: "Stripe", slug: "stripe", source: "simple-icons" },
];

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const SIMPLE_ICONS_BASE = "https://cdn.simpleicons.org";

export const getIconUrl = ({ slug, source }: TechStackProps): string =>
  source === "devicon"
    ? `${DEVICON_BASE}/${slug}.svg`
    : `${SIMPLE_ICONS_BASE}/${slug}`;

export const petprojects: PetProjectsProps[] = [
  {
    id: "movease",
    tags: ["React + Vite", "Appwrite", "TailwindCSS"],
    img: movease,
    href: "https://movease-eight.vercel.app",
  },
  {
    id: "drive",
    tags: ["Next.js 15", "Appwrite", "TailwindCSS", "ShadCN", "TypeScript"],
    img: drive,
    href: "https://drive-wheat.vercel.app",
  },
  {
    id: "fortouristic",
    tags: ["React 19 + Vite", "Tailwind CSS", "React Router v7", "Syncfusion"],
    img: fortouristic,
    href: "https://fortouristic.vercel.app/",
  },
  {
    id: "blog",
    tags: ["React + Vite", "RTK Query", "MongoDB", "Node.js"],
    img: blog,
    href: "https://blog-4wsh.onrender.com/",
  },
];

export const experience: ExperienceProps[] = [
  { id: "akatosphere" },
  { id: "tivali-club" },
  { id: "vision-core" },
  { id: "dara-solutions" },
];

export const contacts: ContactsProps[] = [
  {
    icon: SiGmail,
    title: "Email",
    href: "mailto:abdymalikbatyrkulov@gmail.com",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/abdymalik-batyrkulov",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    href: "https://www.github.com/abdymaleeq925",
  },
  {
    icon: FaTelegram,
    title: "Telegram",
    href: "https://www.t.me/naintufaiv55",
  },
];
