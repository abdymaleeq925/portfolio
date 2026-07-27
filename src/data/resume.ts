import type { IconType } from "react-icons";
import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import movease from "../assets/movease_layout.png";
import drive from "../assets/drive_layout.png";
import fortouristic from "../assets/fortouristic_layout.png";
import blog from "../assets/blog_layout.png";

export interface NavLinksProps {
  id: string;
  label: string;
}

interface TechStackProps {
  name: string;
  slug: string;
  source: "devicon" | "simple-icons";
}

export interface PetProjectsProps {
  title: string;
  description: string;
  tags: string[];
  img: string;
  href: string;
}

export interface ExperienceProps {
  period: string;
  position: string;
  companyName: string;
  achievements: string[];
}

export interface ContactsProps {
  icon: IconType;
  title: string;
  href: string;
}

export const navLinks: NavLinksProps[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

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
    title: "Movease",
    description:
      "This Movie App lets users browse trending movies, search titles, and explore content using the TMDB API. It features a responsive layout and a sleek, modern design via TailwindCSS.",
    tags: ["React + Vite", "Appwrite", "TailwindCSS"],
    img: movease,
    href: "https://movease-eight.vercel.app",
  },
  {
    title: "Dr.Ive",
    description:
      "A storage management and file sharing platform that lets users effortlessly upload, organize, and share files. Built with the latest Next.js 15 and the Appwrite Node SDK, utilizing advanced features for seamless file management.",
    tags: ["Next.js 15", "Appwrite", "TailwindCSS", "ShadCN", "TypeScript"],
    img: drive,
    href: "https://drive-wheat.vercel.app",
  },
  {
    title: "Fortouristic",
    description:
      "A modern travel agency platform with an admin dashboard and public site. Generate AI-powered trip itineraries based on country, travel style, interests, group type, and budget — and book trips with ease.",
    tags: ["React 19 + Vite", "Tailwind CSS", "React Router v7", "Syncfusion"],
    img: fortouristic,
    href: "https://fortouristic.vercel.app/",
  },
  {
    title: "FutureTech Blog",
    description:
      "A full-stack blogging platform dedicated to artificial intelligence and modern technologies with JWT auth, nested comments, videos, books and real-time interactions",
    tags: ["React + Vite", "RTK Query", "MongoDB", "Node.js"],
    img: blog,
    href: "https://blog-4wsh.onrender.com/",
  },
];

export const experience: ExperienceProps[] = [
  {
    period: "November 2025 - May 2026",
    position: "Frontend Developer",
    companyName: "Akatosphere",
    achievements: [
      "Optimized platform-wide user authorization by reducing validation time to sub-2s, engineering a Unified Auth & SSO System for 6 core services using TypeScript and shared cookies.",
      "Automated complex bonus distributions across the entire user base by developing a scalable Referral & Reward Module integrated with React deep-link tracking.",
      "Streamlined client data workflows by building an interactive Customer Dashboard in React for real-time management of bonus balances and dynamic coupon generation.",
      "Maintained a 1.5s UI response time under peak loads of 10k concurrent requests by implementing frontend optimization, brute-force security, and GDPR compliance standards.",
    ],
  },
  {
    period: "September 2025 - November 2025",
    position: "Frontend Developer",
    companyName: "Tivali Club",
    achievements: [
      "Boosted application loading speed by 15% by engineering high-performance custom UI solutions to replace 30% of bloated third-party libraries in a Next.js environment.",
      "Accelerated feature delivery time by 25% by modernizing application architecture with Zustand global state management and strict data validation via Zod.",
      "Expanded international market reach by 40% and raised user engagement by 20% through localized interaction modules powered by React and multi-language support.",
    ],
  },
  {
    period: "January 2025 - May 2025",
    position: "Frontend Developer",
    companyName: "Vision Core",
    achievements: [
      "Enhanced codebase maintainability and page rendering speed by 40% through a comprehensive core architecture refactoring using React best practices and TypeScript.",
      "Reduced UI code duplication by 40% by creating a reusable, ARIA-compliant component library driven by a custom useModal hook in React.",
      "Accelerated global accessibility and site load speed across mobile devices by developing responsive mobile-first layouts integrated with instant i18next localization rendering.",
    ],
  },
  {
    period: "July 2024 - November 2024",
    position: "Frontend Developer",
    companyName: "Dara Solutions",
    achievements: [
      "Improved internal platform efficiency and operational speed by designing 5+ educational modules integrated with structured data flows via RESTful APIs and React.",
      "Boosted frontend application stability and reduced production downtime by identifying and resolving 30+ critical bugs within the core React and Redux codebase.",
    ],
  },
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
