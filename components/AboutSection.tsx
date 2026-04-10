import Image from "next/image";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export default function AboutSection() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/me.jpg"
                alt="Tahsif"
                width={700}
                height={850}
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />
            </div>

            <div className="mt-5 px-1">
              <p className="text-lg leading-8 text-zinc-300">
                I like building things that are actually useful. Most of the time
                I’m working on full-stack projects, but I also enjoy digging into
                backend systems and figuring out how everything connects.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex h-full flex-col justify-between gap-6">
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                What I’m focused on
              </p>

              <p className="mt-4 text-base leading-8 text-zinc-300">
                Lately I’ve been getting more into cloud, deployment, and how
                systems actually run in the real world. Not just building things,
                but understanding what happens after.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                How I work
              </p>

              <p className="mt-4 text-base leading-8 text-zinc-300">
                I use AI a lot when I’m building or learning, but I don’t just
                take answers and move on. I like digging into things until I
                actually understand why they work. I’m also the kind of person
                who won’t really drop something until it’s working properly.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                Outside of coding
              </p>

              <p className="mt-4 text-base leading-8 text-zinc-300">
                Outside of coding, I’m into sports, video games, and anime.
                I like going on adventures with friends too, whether that means
                hiking, random drives, or long road trips.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}