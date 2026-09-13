import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Factory,
  Hammer,
  Landmark,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

type Service = {
  num: string;
  name: string;
  desc: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    num: "01",
    name: "Pre-Construction & Estimating",
    desc: "Feasibility studies, conceptual budgets, constructability reviews, and value engineering that de-risk your project before ground breaks.",
    icon: Landmark,
  },
  {
    num: "02",
    name: "Design-Build Delivery",
    desc: "A single contract and a single point of accountability. We integrate architecture, engineering, and construction under one roof.",
    icon: Building2,
  },
  {
    num: "03",
    name: "General Contracting",
    desc: "Full-scope construction management with rigorous scheduling, vetted trade partners, and transparent open-book reporting.",
    icon: Hammer,
  },
  {
    num: "04",
    name: "Industrial & Special Projects",
    desc: "Manufacturing plants, logistics facilities, and heavy infrastructure — built to specification, on schedule, with zero compromise on safety.",
    icon: Factory,
  },
];

type Project = {
  num: string;
  name: string;
  category: string;
  location: string;
  year: string;
  desc: string;
  stats: { value: string; label: string }[];
  tone: "light" | "dark";
};

const projects: Project[] = [
  {
    num: "P-01",
    name: "Halstead Logistics Hub",
    category: "Industrial",
    location: "Columbus, OH",
    year: "2025",
    desc: "A 420,000 sq ft cross-dock distribution facility engineered for 24/7 throughput, delivered two weeks ahead of schedule.",
    stats: [
      { value: "420k", label: "sq ft" },
      { value: "11 mo", label: "schedule" },
      { value: "0", label: "lost-time incidents" },
    ],
    tone: "light",
  },
  {
    num: "P-02",
    name: "Meridian Civic Center",
    category: "Civic",
    location: "Grand Rapids, MI",
    year: "2024",
    desc: "Public assembly hall and civic offices featuring a mass-timber long-span roof and full ADA-accessible retrofit.",
    stats: [
      { value: "68k", label: "sq ft" },
      { value: "14 mo", label: "schedule" },
      { value: "LEED", label: "Gold certified" },
    ],
    tone: "dark",
  },
  {
    num: "P-03",
    name: "Apex Manufacturing Plant",
    category: "Industrial",
    location: "Toledo, OH",
    year: "2023",
    desc: "Precision manufacturing floor with 12-inch reinforced slabs, 40-foot clear heights, and integrated process utilities.",
    stats: [
      { value: "185k", label: "sq ft" },
      { value: "16 mo", label: "schedule" },
      { value: "24/7", label: "operation" },
    ],
    tone: "light",
  },
  {
    num: "P-04",
    name: "Fifth & Main Offices",
    category: "Commercial",
    location: "Detroit, MI",
    year: "2022",
    desc: "Nine-story Class-A office development with ground-floor retail, completed within 1% of the original guaranteed maximum price.",
    stats: [
      { value: "9", label: "stories" },
      { value: "112k", label: "sq ft" },
      { value: "±1%", label: "GMP variance" },
    ],
    tone: "dark",
  },
];

const stats = [
  { value: "32", label: "years building across the Midwest" },
  { value: "480+", label: "projects delivered to completion" },
  { value: "96%", label: "of clients return for their next build" },
  { value: "0.41", label: "EMR safety rating, well below industry avg" },
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-foreground/40" aria-hidden="true" />
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      {/* ─── Header ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-baseline gap-2.5">
            <span className="text-lg font-semibold tracking-tight">
              Meridian
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground sm:inline">
              Construct
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/auth" className="hidden md:block">
              <span className="inline-flex h-9 items-center justify-center rounded-sm bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Client Login
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="inline-flex size-9 items-center justify-center md:hidden"
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-border/70 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/auth"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex h-9 w-full items-center justify-center rounded-sm bg-primary text-sm font-medium text-primary-foreground"
              >
                Client Login
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        {/* ─── Hero ─────────────────────────────────────────────── */}
        <section className="border-b border-border/70">
          <div className="mx-auto max-w-6xl px-6 pb-24 pt-28 md:pb-32 md:pt-40">
            <Reveal>
              <Eyebrow label="General Contractor — Est. 1994" />
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-8 max-w-3xl text-4xl font-medium leading-[1.05] sm:text-5xl md:text-6xl">
                We build structures that outlast their blueprints.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Meridian Construct is a design-build general contractor
                delivering commercial, industrial, and civic projects across
                the Midwest — on schedule, on budget, and without surprises.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View past projects
                </a>
                <a
                  href="#services"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-foreground/20 px-7 text-sm font-medium text-foreground transition-colors hover:border-foreground/60"
                >
                  Explore services
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─── Stats ────────────────────────────────────────────── */}
        <section className="border-b border-border/70">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-2 divide-x divide-border/70 md:grid-cols-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.06}>
                  <div
                    className={`py-10 pr-6 md:py-14 ${i % 2 === 1 ? "pl-6" : ""} ${i >= 2 ? "border-t border-border/70 md:border-t-0" : ""}`}
                  >
                    <div className="text-3xl font-medium tracking-tight md:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-3 max-w-[16ch] text-xs leading-relaxed text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Services ─────────────────────────────────────────── */}
        <section id="services" className="scroll-mt-16 border-b border-border/70">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <Eyebrow label="Services" />
            </Reveal>
            <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Reveal delay={0.08}>
                <h2 className="max-w-lg text-3xl font-medium leading-tight sm:text-4xl">
                  Four disciplines. One accountable partner.
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  From first feasibility study to final punch list, every
                  service shares one standard: precision, transparency, and
                  craftsmanship that holds up for decades.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 border-t border-border/70">
              {services.map((service, i) => (
                <Reveal key={service.num} delay={i * 0.05}>
                  <div className="group grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-4 border-b border-border/70 py-10 transition-colors md:grid-cols-[80px_1fr_1fr_40px] md:items-center md:gap-x-10">
                    <span className="text-xs font-medium tracking-widest text-muted-foreground">
                      {service.num}
                    </span>
                    <div className="flex items-center gap-4">
                      <service.icon
                        className="size-5 shrink-0 text-foreground/70"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-lg font-medium sm:text-xl">
                        {service.name}
                      </h3>
                    </div>
                    <p className="col-span-2 text-sm leading-relaxed text-muted-foreground md:col-span-1">
                      {service.desc}
                    </p>
                    <ArrowUpRight
                      className="hidden size-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground md:block"
                      strokeWidth={1.5}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Past Projects ────────────────────────────────────── */}
        <section id="projects" className="scroll-mt-16 border-b border-border/70">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <Eyebrow label="Past Projects" />
            </Reveal>
            <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Reveal delay={0.08}>
                <h2 className="max-w-lg text-3xl font-medium leading-tight sm:text-4xl">
                  Selected work, 2022 — 2025.
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  A representative selection of recent deliveries. Every
                  project below was completed on time and within the agreed
                  budget envelope.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {projects.map((project, i) => {
                const isDark = project.tone === "dark";
                return (
                  <Reveal key={project.num} delay={(i % 2) * 0.08}>
                    <article
                      className={`group flex h-full flex-col border p-8 transition-colors duration-300 md:p-10 ${
                        isDark
                          ? "border-foreground bg-foreground text-background"
                          : "border-border bg-card hover:border-foreground/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-medium tracking-widest ${
                            isDark ? "text-background/60" : "text-muted-foreground"
                          }`}
                        >
                          {project.num} — {project.category}
                        </span>
                        <ArrowUpRight
                          className={`size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                            isDark ? "text-background/70" : "text-muted-foreground"
                          }`}
                          strokeWidth={1.5}
                        />
                      </div>

                      <h3 className="mt-8 text-2xl font-medium tracking-tight">
                        {project.name}
                      </h3>
                      <p
                        className={`mt-1 text-xs uppercase tracking-[0.16em] ${
                          isDark ? "text-background/50" : "text-muted-foreground"
                        }`}
                      >
                        {project.location} · {project.year}
                      </p>

                      <p
                        className={`mt-5 text-sm leading-relaxed ${
                          isDark ? "text-background/70" : "text-muted-foreground"
                        }`}
                      >
                        {project.desc}
                      </p>

                      <div
                        className={`mt-auto grid grid-cols-3 gap-4 border-t pt-6 ${
                          isDark
                            ? "mt-8 border-background/20"
                            : "mt-8 border-border"
                        }`}
                      >
                        {project.stats.map((stat) => (
                          <div key={stat.label}>
                            <div className="text-lg font-medium tracking-tight sm:text-xl">
                              {stat.value}
                            </div>
                            <div
                              className={`mt-1 text-[10px] uppercase tracking-[0.14em] ${
                                isDark
                                  ? "text-background/50"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── About / Approach ─────────────────────────────────── */}
        <section id="about" className="scroll-mt-16 border-b border-border/70">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-2 md:gap-20">
              <div>
                <Reveal>
                  <Eyebrow label="About Meridian" />
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="mt-8 text-3xl font-medium leading-tight sm:text-4xl">
                    Built on restraint. Finished with precision.
                  </h2>
                </Reveal>
                <Reveal delay={0.14}>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Since 1994, Meridian Construct has grown from a two-person
                    framing crew into a full-service general contractor — by
                    keeping one promise: say what it costs, then build it for
                    exactly that.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    We take on a limited number of projects each year. That
                    discipline keeps our principals on site, our schedules
                    honest, and our work uncompromised.
                  </p>
                </Reveal>
              </div>

              <div className="border-t border-border/70">
                {[
                  {
                    k: "Foundation",
                    v: "Founded 1994 · family-owned, second generation",
                  },
                  {
                    k: "Licensing",
                    v: "Fully bonded & insured · GC license #MI-447120",
                  },
                  {
                    k: "Coverage",
                    v: "Ohio, Michigan, Indiana, Illinois, Kentucky",
                  },
                  {
                    k: "Approach",
                    v: "Design-build · open-book GMP · integrated scheduling",
                  },
                ].map((row, i) => (
                  <Reveal key={row.k} delay={i * 0.05}>
                    <div className="grid grid-cols-[120px_1fr] gap-6 border-b border-border/70 py-5">
                      <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        {row.k}
                      </span>
                      <span className="text-sm text-foreground">{row.v}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Contact CTA ──────────────────────────────────────── */}
        <section id="contact" className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="border border-border bg-card p-8 md:p-16">
              <div className="grid gap-12 md:grid-cols-2 md:gap-20">
                <div>
                  <Reveal>
                    <Eyebrow label="Contact" />
                  </Reveal>
                  <Reveal delay={0.08}>
                    <h2 className="mt-8 text-3xl font-medium leading-tight sm:text-4xl">
                      Have a project in mind?
                    </h2>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                      Tell us about the site, the program, and the timeline.
                      We&apos;ll respond within one business day with next
                      steps — no obligation, no sales pressure.
                    </p>
                  </Reveal>
                </div>

                <Reveal delay={0.2}>
                  <div className="flex flex-col gap-6">
                    {[
                      { icon: Phone, label: "Call", value: "+1 (614) 555-0147" },
                      {
                        icon: Mail,
                        label: "Email",
                        value: "build@meridianconstruct.com",
                      },
                      {
                        icon: MapPin,
                        label: "Office",
                        value: "885 Foundry Row, Suite 300, Columbus, OH 43215",
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="flex size-10 shrink-0 items-center justify-center border border-border">
                          <item.icon className="size-4" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                            {item.label}
                          </div>
                          <div className="mt-1 text-sm font-medium">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.24}>
                <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-border pt-10">
                  <a
                    href="mailto:build@meridianconstruct.com"
                    className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Start a conversation
                  </a>
                  <span className="text-xs text-muted-foreground">
                    Typical response time: under 24 hours
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─────────────────────────────────────────────── */}
      <footer className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
            <div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-lg font-semibold tracking-tight">
                  Meridian
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  Construct
                </span>
              </div>
              <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
                Design-build general contractor serving commercial, industrial,
                and civic clients across the Midwest since 1994.
              </p>
            </div>

            <nav className="grid grid-cols-2 gap-x-16 gap-y-2 sm:grid-cols-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/auth"
                className="py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Client Login
              </Link>
            </nav>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row">
            <span>
              © {new Date().getFullYear()} Meridian Construct LLC. All rights
              reserved.
            </span>
            <span>GC License #MI-447120 · Equal Opportunity Employer</span>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
