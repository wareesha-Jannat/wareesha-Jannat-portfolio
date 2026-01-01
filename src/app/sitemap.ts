
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wareesha-jannat-portfolio.vercel.app",
      lastModified: new Date(),
    },
  ];
}
