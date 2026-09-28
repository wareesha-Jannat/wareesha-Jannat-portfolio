import { ExperienceItem } from "./types";


const experiences: ExperienceItem[] = [
  {
    id: "nible-tech",
    badge: "Full-Stack Client Collaboration",
    title: "Collaborative Business Web Application",
    subtitle: "Nible Tech — Web Application Development",
    description:
      "Collaborated alongside a Senior Web Application Developer to build a high-performance business web application. Independently implemented core frontend and backend modules, admin dashboards, dynamic management tools, and production server deployments.",
    highlights: [
      "Built dynamic admin dashboard & content management workflows",
      "Developed responsive UI components & REST API integrations",
      "Deployed & managed application on Hostinger VPS using PM2",
      "Architected scalable code structure & database-driven workflows",
    ],
    techStack: [
      "Next.js",
      "MongoDB (Mongoose)",
      "REST APIs",
      "Tailwind CSS",
      "Hostinger VPS (PM2)",
    ],
    liveUrl: "https://nibletech.com",
    githubUrl: "https://github.com/wareesha-Jannat/nible-tech",
    media: {
      type: "single",
      image: "/images/nible-tech-project.PNG",
      video: "/videos/nible-tech-video.mp4",
    },
  },
  {
    id: "vqb",
    badge: "EdTech Exam System",
    title: "Virtual Question Bank",
    subtitle: "Exam Preparation & Analytics Platform",
    description:
      "An end-to-end exam preparation system enabling students to practice subject-wise questions, attempt timed practice exams, and analyze detailed performance stats. Includes multi-role dashboards and secure custom JWT authentication.",
    highlights: [
      "Designed separate Student and Admin interactive dashboards",
      "Built timed exam simulator & automated performance analytics",
      "Implemented custom JWT authentication for protected API routes",
      "Subject, topic & question bank management for administrators",
    ],
    techStack: [
      "Next.js",
      "Express.js",
      "MongoDB (Mongoose)",
      "Custom JWT Auth",
      "Tailwind CSS",
    ],
    liveUrl: "https://virtual-question-bank-frontend.vercel.app",
    githubUrl:
      "https://github.com/wareesha-Jannat/virtual-question-bank-frontend",
    media: {
      type: "tabs",
      tabs: {
        student: {
          image: "/images/VQB-Student.PNG",
          video: "/videos/VQB-Student-video.mp4",
          title: "Student Panel",
        },
        admin: {
          image: "/images/VQB-Admin.PNG",
          video: "/videos/VQB-Admin-video.mp4",
          title: "Admin Panel",
        },
      },
    },
  },
  {
    id: "boostme",
    badge: "Creator Economy Platform",
    title: "BoostMe",
    subtitle: "Creator Support & Community Contribution App",
    description:
      "A platform empowering content creators to showcase their work and receive community contributions. Features secure multi-provider authentication, creator profiles, contribution management dashboards, and payment processing.",
    highlights: [
      "Integrated NextAuth authentication & session management",
      "Built dynamic creator profile pages & contribution flows",
      "Implemented PayFast payment gateway integration (test env)",
      "Dashboard for content management & contribution stats",
    ],
    techStack: [
      "Next.js",
      "NextAuth.js",
      "MongoDB (Mongoose)",
      "PayFast API",
      "Tailwind CSS",
    ],
    liveUrl: "https://boostme-henna.vercel.app",
    githubUrl: "https://github.com/wareesha-Jannat/boostme",
    media: {
      type: "single",
      image: "/images/boostme.PNG",
      video: "/videos/boostme-video.mp4",
    },
  },
  {
    id: "echo",
    badge: "Full-Stack Social Platform",
    title: "Echo",
    subtitle: "Real-Time Social Network",
    description:
      "A full-stack social media platform featuring OAuth authentication, interactive posts, comments, follows, bookmarks, mood-tagged discovery, and daily question features powered by Prisma and PostgreSQL.",
    highlights: [
      "OAuth & session-based authentication system",
      "Real-time post interactions, comments & user follow system",
      "Mood-tagged post classification & discovery algorithm",
      "Prisma ORM with PostgreSQL relational database architecture",
    ],
    techStack: [
      "Next.js",
      "Prisma ORM",
      "PostgreSQL",
      "NextAuth.js",
      "Tailwind CSS",
    ],
    liveUrl: "https://echo-ashy.vercel.app/",
    githubUrl: "https://github.com/wareesha-Jannat/Echo",
    media: {
      type: "single",
      image: "/images/echo.webp",
      video: "/videos/echo-video.mp4",
    },
  },
];


export default experiences;
