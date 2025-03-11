// icons
import { CalDotComIcon } from "@/components/ui/icons";
import { BsLinkedin as LinkedinIcon } from "react-icons/bs";
// import { FiCodepen as CodepenIcon } from "react-icons/fi";
import { BsGithub as GithubIcon } from "react-icons/bs";
import {
  BsTwitterX as TwitterXIcon,
  BsDiscord as DiscordIcon,
} from "react-icons/bs";
import { BsInstagram as InstagramIcon } from "react-icons/bs";

// navigation
export const LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

// social media
export const SOCIAL_LINKS = [
  {
    title: "Cal.com",
    icon: CalDotComIcon,
    href: "https://cal.com/sahilverma.dev",
  },
  {
    title: "Discord",
    icon: DiscordIcon,
    href: "https://discord.com/users/669542427454996490",
  },
  {
    title: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/sahil-verma-970b9920a/",
  },
  // {
  //   title: "CodePen",
  //   icon: CodepenIcon,
  //   href: "https://codepen.io/sahilpro/",
  // },
  {
    title: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/sahilverma-dev",
  },
  {
    title: "Twitter 𝕏",
    icon: TwitterXIcon,
    href: "https://www.twitter.com/sahilverma_dev/",
  },
  {
    title: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/sahilverma.dev/",
  },
];

// skills
export const SKILLS = [
  {
    title: "Languages",
    stacks: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "Dart"],
  },
  {
    title: "Frontend Frameworks",
    stacks: ["React JS", "Next.js"],
  },
  {
    title: "React Ecosystems",
    stacks: [
      "React Testing Library",
      "Framer Motion",
      "Motion",
      "Jest",
      "React Router Dom",
      "Tanstack Query",
      "Zustand",
      "Redux",
      "Axios",
      "React Hook Form",
      "Radix UI",
      "Headless UI",
      "Zod",
    ],
  },
  {
    title: "Components Libraries",
    stacks: [
      "Shadcn UI",
      "Material UI",
      "Mantine UI",
      "Chakra UI",
      "React Native Paper",
      "Tama GUI",
    ],
  },
  {
    title: "CSS Styling",
    stacks: [
      "Tailwind CSS",
      "Emotion",
      "Styled Components",
      "CSS Modules",
      "SASS",
      "Bootstrap",
    ],
  },
  {
    title: "Cross-Platform",
    stacks: ["React Native", "Expo", "Flutter"],
  },
  {
    title: "Backend",
    stacks: [
      "Node.js",
      "Bun",
      "Socket.io",
      "Express.js",
      "Mongoose",
      "Prisma",
      "Drizzle",
    ],
  },
  {
    title: "Databases/BASS/CMS",
    stacks: [
      "MongoDB",
      "PostgreSQL",
      "SQLite",
      "Redis",
      "Firebase/Firestore",
      "Supabase",
      "Appwrite",
      "Sanity.IO",
      "Payload CMS",
    ],
  },
  {
    title: "Other Technologies",
    stacks: [
      "WebRTC",
      "WebSockets",
      "Socket.io",
      "Cloudinary",
      "Vercel",
      "Netlify",
    ],
  },
  {
    title: "Other Tools",
    stacks: ["VS Code", "Git", "GitHub", "Eslint", "Figma"],
  },
];
