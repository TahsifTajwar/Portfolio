export type Experience = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Undergraduate Research Volunteer",
    organization: "University of Massachusetts Amherst",
    period: "June 2025 - August 2025",
    description:
      "Worked on practical software and research-oriented problem solving, contributing technical implementation and collaborative development in an academic setting.",
  },
  {
    role: "Software Engineering Intern",
    organization: "Prime Bank PLC",
    period: "June 2024 - August 2024",
    description:
      "Built a LangChain RAG chatbot over internal PDF documents, improved text extraction quality and retrieval relevance, and helped make internal document search faster and more useful.",
  },
  {
    role: "Software Engineer",
    organization: "CodeCollab UMass",
    period: "December 2025 - Present",
    description:
      "Worked in a team of five on a campus-wide student project, helped shape the technical direction, participated in code reviews, and supported teammates through one-on-one mentoring.",
  },
]; 