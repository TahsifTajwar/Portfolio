import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[88vh] max-w-6xl items-center px-6 py-20"
    >
      <div className="grid w-full items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
              UMass Amherst · Computer Science · Rising Senior
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              B.S. in Computer Science
              <br />
              at UMass Amherst
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
              GPA 3.83, Dean’s List all semesters, with expected graduation in
              December 2026. I’m also considering UMass’s 4+1 pathway, with a
              possible master’s completion in December 2027 depending on role
              timing and fit.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full border border-white px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-white hover:text-white"
              >
                Resume
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 lg:mt-10">
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Academic Snapshot
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-zinc-500">School</p>
                <p className="mt-1 text-lg text-zinc-200">
                  University of Massachusetts Amherst
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Degree</p>
                <p className="mt-1 text-lg text-zinc-200">
                  B.S. in Computer Science
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-zinc-500">GPA</p>
                  <p className="mt-1 text-lg text-zinc-200">3.83</p>
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Status</p>
                  <p className="mt-1 text-lg text-zinc-200">Rising Senior</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Timeline</p>
                <p className="mt-1 text-lg text-zinc-200">
                  Sep 2023 – Dec 2026
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}