import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { coursework, skillGroups } from "@/data/skills";

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Relevant coursework and technical skills"
      description="A quick overview of the coursework and tools that have shaped how I build and think about software."
    >
      <div className="space-y-10">
        <Reveal>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Relevant Coursework
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <div className="border-t border-white/10 pt-5">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  {group.title}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}