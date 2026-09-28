export interface ExperienceItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  media: {
    type: "single" | "tabs";
    image?: string;
    video?: string;
    tabs?: {
      student: { image: string; video: string; title: string };
      admin: { image: string; video: string; title: string };
    };
  };
}

