import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured work"
      description="A selection of projects that reflect my interests across full-stack development, systems, AI, and product-focused engineering."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => {
          const cardContent = (
            <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
              
              {/* Hover gradient */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  
                  {/* Title */}
                  <h3 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                    {project.link && (
                      <span className="text-zinc-400">↗</span>
                    )}
                  </h3>

                  {/* Period */}
                  <span className="whitespace-nowrap rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300">
                    {project.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 leading-7 text-zinc-300">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-200 transition group-hover:border-white/15"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );

          return (
            <Reveal key={project.title} delay={index * 0.08}>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  {cardContent}
                </a>
              ) : (
                cardContent
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}