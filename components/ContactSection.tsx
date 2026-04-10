import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { contactLinks } from "@/data/contact";

export default function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s connect"
      description="You can find my work, resume, and contact details here."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {contactLinks.map((link, index) => (
          <Reveal key={link.label} delay={index * 0.08}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />
              </div>

              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  {link.label}
                </p>

                <div className="mt-3 flex items-center justify-between gap-4">
                  <p className="text-xl font-semibold text-white">{link.value}</p>
                  <span className="text-zinc-400 transition group-hover:text-white">
                    ↗
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}