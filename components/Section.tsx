import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl border-t border-white/8 px-6 py-20">
      <Reveal>
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          {eyebrow}
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>

        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
            {description}
          </p>
        ) : null}

        {children ? <div className="mt-12">{children}</div> : null}
      </Reveal>
    </section>
  );
}