import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { involvement } from "@/data/involvement";

export default function InvolvementSection() {
  return (
    <Section
      id="involvement"
      eyebrow="Involvement"
      title="Leadership and community"
      description="A few roles that helped me grow through organizing, collaboration, and community involvement."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {involvement.map((item, index) => (
          <Reveal key={`${item.title}-${item.organization}`} delay={index * 0.08}>
            <article className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                    {item.organization}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>

                <span className="whitespace-nowrap rounded-full border border-white/8 bg-black/20 px-3 py-1 text-xs text-zinc-300">
                  {item.period}
                </span>
              </div>

              <p className="mt-4 leading-7 text-zinc-300">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}