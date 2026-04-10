export type Project = {
  title: string;
  period: string;
  description: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Environment Assistant",
    period: "2025",
    description:
      "Built an on-device environment assistant on Raspberry Pi 5 that sampled temperature data, served live and recent readings through a Flask API, and integrated a local Llama model to answer questions using real sensor data.",
    stack: ["Raspberry Pi", "Python", "Flask", "Node.js", "Express", "llama.cpp"],
    link: "https://github.com/Saim-naushad/smart-env-companion",
  },
  {
    title: "PrereqPilot",
    period: "2026 - Present",
    description:
      "Building a course planning platform where students track completed and planned courses, manage saved plans, and visualize dependencies using a full-stack architecture with backend APIs and Supabase.",
    stack: ["Next.js", "React", "TypeScript", "FastAPI", "Supabase", "Tailwind CSS"],
    link: "https://github.com/nemaansari/PrereqPilot",
  },
  {
    title: "GrocerScope",
    period: "2025",
    description:
      "Built a grocery comparison web app that scrapes and aggregates prices across multiple Boston-area stores, helping users compare options faster with a guided interface and Gemini-assisted selection flow.",
    stack: ["Python", "Django", "Web Scraping", "Tailwind CSS", "Gemini API"],
    link: "https://devpost.com/software/grocerscope",
  },
  {
    title: "Campus Club Finder",
    period: "2025 - 2026",
    description:
      "Built a campus club discovery platform with searchable filters, club detail pages, and saved favorites for logged-in users, using Supabase for authentication and data storage and vercel for deployment of the website.",
    stack: ["Next.js", "TypeScript", "React", "Supabase", "Tailwind CSS", "Vercel"],
    link: "https://github.com/nealp/clubFinderApp",
  },
  {
  title: "Personal Portfolio",
  period: "2026",
  description:
    "Designed and built a personal portfolio using Next.js, focusing on clean layout, responsive design, and subtle motion. Currently improving the ui with more intuitive features. Deployed with Vercel using Git-based continuous deployment.",
  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Vercel",
  ],
  link: "https://tahsif.vercel.app",
},
  {
    title: "StudyBuddy AI",
    period: "2026",
    description:
      "Built an AI chat app with persistent per-user memory using Cloudflare Workers AI and Durable Objects, with a React interface deployed on Cloudflare Pages.",
    stack: ["Cloudflare Workers AI", "Durable Objects", "React", "TypeScript", "Cloudflare Pages"],
    link: "https://github.com/TahsifTajwar/cf_ai_studybuddy",
  },
];