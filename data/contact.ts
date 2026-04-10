export type ContactLink = {
  label: string;
  href: string;
  value: string;
  external?: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/TahsifTajwar",
    value: "github.com/TahsifTajwar",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tahsif-tajwar/",
    value: "linkedin.com/in/tahsif-tajwar",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:tahsif.04@gmail.com",
    value: "tahsif.04@gmail.com",
  },
  {
    label: "Resume",
    href: "resume.pdf",
    value: "Open PDF",
    external: true,
  },
];