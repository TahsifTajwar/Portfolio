import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="What I’ve worked on"
      description="A mix of internship, research, and team-based engineering experience that has shaped how I build software and collaborate with others."
    >
      <div className="space-y-6">
        {experiences.map((item, index) => (
          <Reveal key={`${item.role}-${item.organization}`} delay={index * 0.08}>
            <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.06]">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.04] via-transparent to-transparent" />
              </div>

              <div className="relative z-10 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-zinc-300">{item.organization}</p>
                </div>

                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300">
                  {item.period}
                </span>
              </div>

              <p className="relative z-10 mt-5 max-w-3xl leading-7 text-zinc-300">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}