export type Project = {
  title: string;
  period: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Environment Assistant",
    period: "2025",
    description:
      "Built an on-device environment assistant on Raspberry Pi 5 that sampled temperature data, served live and recent readings through a Flask API, and integrated a local Llama model to answer questions using real sensor data.",
    stack: ["Raspberry Pi", "Python", "Flask", "Node.js", "Express", "llama.cpp"],
  },
  {
    title: "PrereqPilot",
    period: "2026 - Present",
    description:
      "Building a course planning platform where students track completed and planned courses, manage saved plans, and visualize dependencies using a full-stack architecture with backend APIs and Supabase.",
    stack: ["Next.js", "React", "TypeScript", "FastAPI", "Supabase", "Tailwind CSS"],
  },
  {
    title: "GrocerScope",
    period: "2025",
    description:
      "Built a grocery comparison web app that scrapes and aggregates prices across multiple Boston-area stores, helping users compare options faster with a guided interface and Gemini-assisted selection flow.",
    stack: ["Python", "Django", "Web Scraping", "Tailwind CSS", "Gemini API"],
  },
  {
    title: "Campus Club Finder",
    period: "2025 - 2026",
    description:
      "Built a campus club discovery platform with searchable filters, club detail pages, and saved favorites for logged-in users, using Supabase for authentication and data storage and vercel for deployment of the website.",
    stack: ["Next.js", "TypeScript", "React", "Supabase", "Tailwind CSS", "Vercel"],
  },
  {
    title: "StudyBuddy AI",
    period: "2026",
    description:
      "Built an AI chat app with persistent per-user memory using Cloudflare Workers AI and Durable Objects, with a React interface deployed on Cloudflare Pages.",
    stack: ["Cloudflare Workers AI", "Durable Objects", "React", "TypeScript", "Cloudflare Pages"],
  },
];