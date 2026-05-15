import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, BookOpen, FlaskConical } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Experience — Falak Iftikhar" },
      { name: "description", content: "Academic background and professional experience of Falak Iftikhar." },
    ],
  }),
  component: About,
});

const experience = [
  {
    icon: BookOpen,
    role: "Coding & Implementation Instructor",
    org: "Govt. Graduate College",
    period: "1 Year — Present",
    desc: "Mentoring and teaching coding fundamentals, framework implementation, and software architecture to graduating students through hands-on practical lab sessions.",
  },
  {
    icon: FlaskConical,
    role: "Research Assistant",
    org: "Supervised AI Initiative",
    period: "Academic",
    desc: "Partnered with an academic supervisor to conduct research on 'AI Enhancement in Education Systems', exploring adaptive learning frameworks and data-driven methodologies to optimize student engagement.",
  },
];

function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <header className="mb-16">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-3">About</p>
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Background & Experience</h1>
      </header>

      <section className="mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Academic
        </h2>
        <div className="rounded-xl border border-border bg-card p-8 hover:border-accent transition-colors">
          <div className="flex items-start gap-5">
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-accent">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">
                BS in Computer Science
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                University of the Punjab · 2022 – 2026
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Built a strong foundation in Software Project Management, Software
                Architecture, and UI/UX design — combining engineering discipline with a
                user-first design mindset.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Experience
        </h2>
        <div className="relative space-y-6 md:pl-8 md:before:absolute md:before:left-2 md:before:top-2 md:before:bottom-2 md:before:w-px md:before:bg-border">
          {experience.map((e) => (
            <div key={e.role} className="relative">
              <div className="hidden md:block absolute -left-8 top-6 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
              <div className="rounded-xl border border-border bg-card p-7 hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-accent">
                    <e.icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-primary">{e.role}</h3>
                      <span className="text-xs font-medium text-muted-foreground">{e.period}</span>
                    </div>
                    <p className="text-sm text-accent font-medium mt-0.5">{e.org}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
