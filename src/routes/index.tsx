import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { submitLead } from "@/lib/leads.functions";
import {
  ArrowRight, ArrowDown, ArrowUp, Menu, X, Palette, Code2, Zap, Eye, Target,
  Mail, Phone, Globe, Sparkles, ChevronDown, Check, Send, Award, Heart, Rocket,
  Instagram, Linkedin, Facebook, Pause, Play, ChevronLeft, ChevronRight,
} from "lucide-react";
import pdanLogo from "@/assets/pdan-logo.png.asset.json";
import founderPhoto from "@/assets/portfolio/founder-olaniyi.png.asset.json";
import designBirthdayRhema from "@/assets/portfolio/design-birthday-rhema.png.asset.json";
import design60GreatGrace from "@/assets/portfolio/design-60-great-grace.png.asset.json";
import designHourDivine from "@/assets/portfolio/design-hour-divine-solution.png.asset.json";
import designUwasFashion from "@/assets/portfolio/design-uwas-fashion.png.asset.json";
import designIcfBirthday from "@/assets/portfolio/design-icf-birthday.png.asset.json";
import designHolyGhost from "@/assets/portfolio/design-praying-holy-ghost.png.asset.json";
import designSenHair from "@/assets/portfolio/design-sen-hair-care.png.asset.json";
import designMth102 from "@/assets/portfolio/design-mth102-tutorial.png.asset.json";
import webPdanProject from "@/assets/portfolio/web-pdan-project.png.asset.json";

import webEcommerce from "@/assets/portfolio/web-ecommerce.jpg";
import webAgency from "@/assets/portfolio/web-agency.jpg";
import testimonial1 from "@/assets/testimonials/testimonial-20260707-135105.png.asset.json";
import testimonial2 from "@/assets/testimonials/testimonial-20260707-135508.png.asset.json";
import testimonial3 from "@/assets/testimonials/testimonial-20260707-135440.png.asset.json";
import testimonial4 from "@/assets/testimonials/testimonial-20260707-135323.png.asset.json";
import testimonial5 from "@/assets/testimonials/testimonial-20260707-135242.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--cccea24d-a3df-4380-a383-2db220c80a5a.lovable.app/og.jpg" },
    ],
  }),
  component: Home,
});

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#process", label: "Process" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Portfolio />
      <About />
      <WhyUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-elevated" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <img
              src= "https://id-preview--cccea24d-a3df-4380-a383-2db220c80a5a.lovable.app/__l5e/assets-v1/2e1a6bdf-e735-4cdb-ac59-f984096257c2/pdan-logo.png"
              alt="P. Dan Creative Media logo"
              className="h-9 w-9 object-contain drop-shadow-[0_0_12px_oklch(0.65_0.22_255/0.45)] transition-transform duration-500 group-hover:scale-110"
            />
            <span className="font-display text-sm font-semibold tracking-tight">
              P. Dan <span className="text-muted-foreground">Creative Media</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-neon transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex btn-neon btn-neon-hover text-sm !py-2 !px-5">
            Contact Us <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full glass"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-3xl p-6 flex flex-col gap-4 animate-fade-up">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-lg">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-neon btn-neon-hover justify-center">
              Contact Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="top" ref={ref} className="relative pt-36 pb-24 md:pt-44 md:pb-32 noise-overlay">
      <div className="absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-20 -left-24 h-96 w-96 rounded-full bg-neon-teal/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-neon-purple/25 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto max-w-4xl px-5 text-center flex flex-col items-center">
        <motion.div style={{ y }} className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1.5 text-xs text-muted-foreground mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-neon-teal" />
            Design + Frontend engineering, under one roof
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight"
          >
            We Design Visuals That{" "}
            <span className="text-gradient-neon">Stop the Scroll.</span>{" "}
            We Build Websites That{" "}
            <span className="text-gradient-neon">Close the Deal.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-7 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            High-impact graphic design meets flawless, responsive frontend development.
            We give your business the stunning digital presence it deserves to turn casual visitors into paying clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-9 flex flex-wrap justify-center items-center gap-4"
          >
            <a href="#contact" className="btn-neon btn-neon-hover">
              Let's Build Your Project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#work" className="inline-flex items-center gap-2 text-sm font-medium text-foreground group">
              View Our Portfolio
              <span className="grid h-9 w-9 place-items-center rounded-full border border-border group-hover:border-neon-teal group-hover:bg-neon-teal/10 transition-all">
                <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </a>
          </motion.div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { k: "100%", v: "Responsive" },
              { k: "Pixel", v: "Perfect" },
              { k: "Global", v: "Remote" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



/* ---------- SECTION HEADER HELPER ---------- */
function SectionHeader({ eyebrow, title, subtitle, center }: { eyebrow?: string; title: React.ReactNode; subtitle?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1.5 text-xs text-muted-foreground mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-teal shadow-glow-teal" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}

/* ---------- PROBLEM ---------- */
function Problem() {
  const items = [
    { title: "The Design Dilemma", body: "If your marketing graphics look generic, outdated, or DIY, potential clients will scroll right past you without a single second thought." },
    { title: "The Web Frustration", body: "If your website is slow, looks awkward on mobile screens, or feels clunky, visitors click the 'back' button in seconds—straight into the arms of your competitors." },
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="The Hook"
          title={<>Is Your Digital Presence <span className="text-gradient-neon">Costing You Customers?</span></>}
          subtitle="You're incredibly good at what you do, but your current digital footprint might not be showing it. In the competitive digital landscape, you face two primary roadblocks:"
        />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-border glass p-8 md:p-10 overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-neon-purple/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="font-mono text-xs text-muted-foreground mb-4">0{i + 1} / 02</div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">{it.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{it.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 rounded-3xl border border-neon-teal/20 bg-gradient-to-r from-neon-teal/5 via-transparent to-neon-purple/5 p-8 md:p-10"
        >
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="text-neon-teal font-semibold">The Reality —</span>{" "}
            In the digital space, you don't just compete on the quality of your service; you compete on{" "}
            <span className="text-gradient-neon font-semibold">perception</span>. If your presentation looks amateur, your brand gets treated—and paid—like an amateur.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- SOLUTION ---------- */
function Solution() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionHeader
            eyebrow="The Solution"
            title={<>The Intersection of <span className="text-gradient-neon">Stunning Art</span> & <span className="text-gradient-neon">Flawless Code</span></>}
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              At P. Dan Creative Media, we eliminate the friction of building a modern brand. Typically, businesses are forced to hire an independent designer who doesn't understand code, and then find a developer who doesn't understand visual aesthetics. The vision gets lost in translation.
            </p>
            <p>
              We solve that. We bring visual strategy and technical frontend engineering under one professional roof. We craft digital experiences that don't just look breathtaking—they load instantly, adapt perfectly to every device, and drive real business growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
const SERVICES = [
  {
    icon: Palette,
    tag: "01 — Graphic Design",
    title: "Eye-Catching Graphic Design",
    tagline: "Stop the scroll and capture attention instantly.",
    body: "Great design isn't just about aesthetics; it's about visual strategy. We produce striking, high-impact designs that communicate your brand values instantly, command digital attention, and leave an indelible impression on your ideal target audience.",
    caps: [
      "Comprehensive Brand Identity & Logo Design",
      "High-Converting Social Media Kits & Graphics",
      "Marketing, Promotional & Digital Collateral",
      "Custom Digital Illustrative & Vector Assets",
    ],
  },
  {
    icon: Code2,
    tag: "02 — Frontend Development",
    title: "Frontend Web Development",
    tagline: "High-performance, pixel-perfect layouts engineered for engagement.",
    body: "A beautiful design deserves a powerful technical engine. We build highly responsive, lightning-fast, and deeply intuitive frontend layouts. From smooth interactions to pixel-perfect mobile optimization, we ensure your user experience is absolutely seamless.",
    caps: [
      "100% Responsive & Mobile-First Implementation",
      "Custom Landing Pages, Portfolios & Business Sites",
      "Clean, Semantic, Lightweight, and Valid Code",
      "Smooth UI/UX Animation & Micro-interactions",
    ],
  },
];

function Services() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Deep-Dive Services"
          title={<>Two disciplines. <span className="text-gradient-neon">One relentless standard.</span></>}
          subtitle="Clearly defined competencies, benefit-driven, built to move real business metrics."
        />
        <div className="mt-14 space-y-5">
          {SERVICES.map((s, i) => {
            const isOpen = open === i;
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onMouseEnter={() => setOpen(i)}
                onClick={() => setOpen(i)}
                className={`group relative rounded-3xl border overflow-hidden cursor-pointer transition-all duration-500 ${
                  isOpen ? "border-neon-teal/40 bg-surface-elevated shadow-glow-teal" : "border-border glass hover:border-white/15"
                }`}
              >
                <div className="p-8 md:p-10">
                  <div className="grid md:grid-cols-[auto_1fr_auto] items-start gap-6 md:gap-10">
                    <div className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl transition-all duration-500 ${
                      isOpen ? "bg-gradient-neon text-primary-foreground" : "bg-surface-elevated text-neon-teal"
                    }`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-xs text-muted-foreground mb-2">{s.tag}</div>
                      <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{s.title}</h3>
                      <p className={`mt-2 text-sm md:text-base transition-colors ${isOpen ? "text-neon-teal" : "text-muted-foreground"}`}>
                        {s.tagline}
                      </p>
                    </div>
                    <div className={`hidden md:grid h-12 w-12 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                      isOpen ? "border-neon-teal bg-neon-teal/10 rotate-180" : "border-border"
                    }`}>
                      <ChevronDown className="h-5 w-5" />
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 mt-8 border-t border-border grid md:grid-cols-[1fr_1fr] gap-8">
                      <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                      <ul className="space-y-3">
                        {s.caps.map((c) => (
                          <li key={c} className="flex items-start gap-3">
                            <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-neon">
                              <Check className="h-3 w-3 text-primary-foreground" />
                            </span>
                            <span className="text-foreground/90">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- PORTFOLIO ---------- */
type Cat = "all" | "design" | "web";
const PROJECTS = [
  { img: "/portfolio/web-pdan-project.png", title: "P.Dan Creative Media — Portfolio Site", tag: "Web Development", cat: "web" as const, span: "md:col-span-2" },
  { img: "/portfolio/design-uwas-fashion.png", title: "Uwa's Fashion Hub — Brand Flyer", tag: "Graphic Design", cat: "design" as const, span: "" },
  { img: "/portfolio/design-60-great-grace.png", title: "60 Years of Great Grace — Invite", tag: "Event Design", cat: "design" as const, span: "" },
  { img: "/portfolio/design-hour-of-divine-solution.png", title: "Hour of Divine Solution — Poster", tag: "Church Media", cat: "design" as const, span: "" },
  { img: "/portfolio/web-agency.jpg", title: "Creative Agency Portfolio", tag: "Web Development", cat: "web" as const, span: "" },
  
  { img: "/portfolio/design-praying-holy-ghost.png", title: "Praying in the Holy Ghost — Flyer", tag: "Church Media", cat: "design" as const, span: "" },
  { img: "/portfolio/design-sen-hair-care.png", title: "Sen Hair Care — Product Ad", tag: "Product Design", cat: "design" as const, span: "" },
  { img: "/portfolio/design-mth102-tutorial.png", title: "MTH 102 Tutorial — Campus Flyer", tag: "Educational Design", cat: "design" as const, span: "" },
  { img: "/portfolio/web-ecommerce.jpg", title: "Fashion E-commerce Landing", tag: "Web Development", cat: "web" as const, span: "" },
  { img: "/portfolio/design-icf-birthday.png", title: "ICF Excos Birthday — Portrait Flyer", tag: "Graphic Design", cat: "design" as const, span: "" },
  { img: "/portfolio/design-birthday-rhema.png", title: "Rhema Youth Birthday — Social Post", tag: "Social Media Design", cat: "design" as const, span: "" },

  { img: "/portfolio/logo.png", title: "Faith In Medicine Logo", tag: "Logo Design", cat: "design" as const, span: "" },
  { img: "/portfolio/kea-honey.png", title: "Honey Promotion Flyer", tag: "product design", cat: "design" as const, span: "" },
  { img: "/portfolio/cac_rhema_center_web.png", title: "Church Website", tag: "Web Development", cat: "web" as const, span: "" },
  { img: "/portfolio/political campaign flyer.jpg", title: "Campaign Flyer", tag: "graphic design", cat: "design" as const, span: "" },
  { img: "/portfolio/call-to-bar.jpg", title: "Jotter Cover Design", tag: "graphic design", cat: "design" as const, span: "" },
  { img: "/portfolio/faith_in_medicine.png", title: "A Christian Community Website", tag: "Web Development", cat: "web" as const, span: "md:col-span-2" },
];

function Portfolio() {
  const [cat, setCat] = useState<Cat>("all");
  const filters: { id: Cat; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "design", label: "Graphic Design Assets" },
    { id: "web", label: "Web Development Architecture" },
  ];
  const shown = PROJECTS.filter((p) => cat === "all" || p.cat === cat);

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeader
            eyebrow="Selected Work"
            title={<>Our Work Speaks <span className="text-gradient-neon">Louder Than Words.</span></>}
          />
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const active = cat === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setCat(f.id)}
                  className={`rounded-full border px-4 py-2 text-sm transition-all ${
                    active
                      ? "border-transparent bg-gradient-neon text-primary-foreground shadow-glow-teal"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-white/25"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="mt-12 grid md:grid-cols-3 gap-5">
          {shown.map((p, i) => (
            <motion.a
              layout
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-surface aspect-[4/5] ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-mono mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-teal" /> {p.tag}
                </div>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-display text-xl md:text-2xl font-semibold">{p.title}</h3>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-neon text-primary-foreground -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- ABOUT / FOUNDER ---------- */
function About() {
  const values = [
    { icon: Heart, title: "Passion", body: "We treat every project as if our own name were on the storefront — because in a sense, it is." },
    { icon: Award, title: "Craft", body: "Pixel-perfect execution. Zero shortcuts. Every gradient, glyph, and interaction is intentional." },
    { icon: Rocket, title: "Growth", body: "We build for outcomes — not applause. Every asset is engineered to move a business metric." },
  ];
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-24 h-96 w-96 rounded-full bg-neon-teal/15 blur-[130px]" />
        <div className="absolute bottom-10 -right-24 h-96 w-96 rounded-full bg-neon-purple/15 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="About Us"
          title={<>The studio behind the <span className="text-gradient-neon">pixels & the code.</span></>}
          subtitle="P. Dan Creative Media is a boutique visual & frontend studio helping ambitious individuals, brands, and organizations show up online with the polish, clarity, and confidence they deserve — through music, design, and digital experiences that convert."
        />

        {/* Founder block */}
        <div className="mt-16 grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-neon opacity-30 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-border glass shadow-elevated">
              <img
                src= "/portfolio/founder-olaniyi.png"
                alt="Olaniyi Oluwasolafunmi Daniel — Founder of P. Dan Creative Media"
                loading="lazy"
                width={720}
                height={720}
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background via-background/70 to-transparent">
                <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-mono">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-teal shadow-glow-teal" /> Founder & Creative Director
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 text-xs animate-float hidden sm:block">
              <div className="text-neon-teal font-semibold">Design × Code</div>
              <div className="text-muted-foreground">Under one roof</div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="min-w-0"
          >
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">Meet the Founder</div>
            <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              Olaniyi{" "}
              <span className="text-gradient-neon">Oluwasolafunmi Daniel</span>
            </h3>
            <div className="mt-6 space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Olaniyi Oluwasolafunmi Daniel is the founder and creative mind behind <span className="text-foreground font-medium">P. Dan Creative Media</span> — a young, obsessively detail-driven creative with a rare blend of artistic instinct and technical fluency.
              </p>
              <p>
                What started as a personal love for design and music quickly grew into a full-service studio helping brands, ministries, small businesses, and event organizers translate their vision into scroll-stopping visuals and high-performing websites. From polished social media graphics and event flyers to fully responsive, production-ready web experiences, every project is crafted with the same standard: <span className="text-foreground italic">make it look world-class, make it work flawlessly.</span>
              </p>
              <p>
                He believes creativity should never just decorate — it should <span className="text-foreground font-medium">communicate, convert, and leave a lasting impression</span>. That belief sits at the heart of every asset that leaves this studio.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Graphic Design", "Frontend Development", "Brand Identity", "Music"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-surface-elevated/60 px-4 py-1.5 text-sm text-foreground">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-neon btn-neon-hover text-sm !py-2.5 !px-5">
                Work with Daniel <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#work" className="btn-ghost-neon btn-ghost-neon-hover text-sm !py-2.5 !px-5">
                See recent work <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-20 grid md:grid-cols-3 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-3xl border border-border glass p-8 overflow-hidden hover:border-neon-teal/40 transition-all duration-500"
              >
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-neon opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-surface-elevated text-neon-teal mb-5 group-hover:bg-gradient-neon group-hover:text-primary-foreground transition-all duration-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-display text-xl font-semibold mb-2">{v.title}</h4>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{v.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const items = [
    { icon: Zap, title: "Speed & Absolute Responsiveness", body: "Over 50% of global web traffic originates from mobile devices. We build utilizing a strict mobile-first engineering approach, ensuring your site loads quickly and looks breathtaking on everything from compact smartphones to 4K desktop setups." },
    { icon: Eye, title: "Visual-First Engineering Strategy", body: "Because our team possesses mastery over both graphic aesthetics and frontend development, your final website won't feel like a rigid, generic template. We build fluid, engaging layouts customized around your brand's unique soul." },
    { icon: Target, title: "Conversion-Focused Architecture", body: "Every line of custom code we execute and every pixel asset we create serves a precise strategic objective: to guide your visitor seamlessly through a designed funnel toward taking high-value actions." },
  ];
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Why Us"
          title={<>Why forward-thinking brands <span className="text-gradient-neon">partner with us.</span></>}
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-3xl border border-border glass p-8 overflow-hidden hover:border-neon-teal/40 transition-all duration-500"
              >
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-neon opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700" />
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-surface-elevated text-neon-teal mb-6 group-hover:bg-gradient-neon group-hover:text-primary-foreground transition-all duration-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-3 leading-tight">{it.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{it.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
const STEPS = [
  { n: "01", title: "Discovery & Strategy", body: "We begin with an in-depth consultation to map out your long-term vision, core audience target demographics, and definitive commercial goals. This forms our strategic execution roadmap." },
  { n: "02", title: "High-Fidelity Design Mockups", body: "The creative phase ignites. We produce striking visual concepts, brand styles, and initial layout interfaces for your direct evaluation, collaborative feedback, and final approval." },
  { n: "03", title: "Frontend Engineering & Coding", body: "Upon design sign-off, we translate static masterpieces into clean, fast, and fully responsive code architectures optimized for peak performance." },
  { n: "04", title: "QA, Testing & Launch", body: "We stringently test every link, interactive element, and responsive transition layout across multiple modern browsers and devices, launching your brand flawlessly into the digital space." },
];

function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Our Process"
          title={<>From Blueprint to Launch in <span className="text-gradient-neon">4 Simple Steps.</span></>}
        />
        <div className="mt-16 relative">
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2" />
          <div className="space-y-16 md:space-y-24">
            {STEPS.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className="relative grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className={`${right ? "md:order-2 md:pl-16" : "md:pr-16 md:text-right"} pl-20 md:pl-0`}>
                    <div className="font-display text-6xl md:text-7xl font-bold text-gradient-neon leading-none mb-3">
                      {s.n}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                  </div>
                  <div className={`hidden md:block ${right ? "md:order-1" : ""}`} />
                  <span className="absolute left-8 md:left-1/2 top-6 md:top-1/2 h-4 w-4 rounded-full bg-gradient-neon shadow-glow-teal ring-4 ring-background -translate-x-1/2 md:-translate-y-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const WHATSAPP_NUMBER = "2348120427703"; // 08120427703 in intl format
  const saveLead = useServerFn(submitLead);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const projectType = String(data.get("projectType") || "").trim();
    const message = String(data.get("message") || "").trim();

    setSubmitting(true);
    setErrorMsg(null);

    // Store the lead in the Google Sheet (server-side, secure)
    try {
      await saveLead({ data: { name, email, projectType, message } });
    } catch (err) {
      console.error("Failed to save lead:", err);
      setErrorMsg("We couldn't save your details, but you can still message us on WhatsApp.");
    }

    // Compose WhatsApp DM with the lead details pre-filled
    const waMessage =
      `Hi P. Dan Creative Media 👋%0A%0A` +
      `*New project enquiry*%0A` +
      `• Name: ${encodeURIComponent(name)}%0A` +
      `• Email: ${encodeURIComponent(email)}%0A` +
      `• Project Type: ${encodeURIComponent(projectType)}%0A%0A` +
      `*Project Vision:*%0A${encodeURIComponent(message)}`;

    setSent(true);
    setSubmitting(false);

    // Open WhatsApp DM
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`, "_blank", "noopener,noreferrer");
    setTimeout(() => setSent(false), 4500);
  };


  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-neon-purple/20 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-neon-teal/20 blur-[140px]" />
      </div>
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          center
          eyebrow="Let's Collaborate"
          title={<>Ready to <span className="text-gradient-neon">Transform Your Digital Presence?</span></>}
          subtitle="Don't let another day pass by operating a digital brand that fails to do justice to the quality of your real-world work. Let's engineer something extraordinary."
        />

        <div className="mt-14 grid lg:grid-cols-[1.15fr_1fr] gap-6">
          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border glass p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" placeholder="Jane Doe" required />
              <Field label="Email Address" name="email" type="email" placeholder="jane@brand.com" required />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Project Type</label>
              <div className="relative">
                <select
                  name="projectType"
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-xl bg-surface-elevated border border-border px-4 py-3 text-foreground focus:outline-none focus:border-neon-teal transition-colors"
                >
                  <option value="" disabled>Select project type…</option>
                  <option>Graphic Design</option>
                  <option>Web Development</option>
                  <option>Comprehensive Package</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Tell Us About Your Project Vision</label>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={1200}
                placeholder="Share the goals, timeline, and anything else we should know…"
                className="w-full rounded-xl bg-surface-elevated border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon-teal transition-colors resize-none"
              />
            </div>
            <button type="submit" disabled={submitting} className="btn-neon btn-neon-hover w-full sm:w-auto disabled:opacity-70">
              {sent ? (<>Opening WhatsApp <Check className="h-4 w-4" /></>) : submitting ? (<>Sending…</>) : (<>Send & Chat on WhatsApp <Send className="h-4 w-4" /></>)}
            </button>
            <p className="text-xs text-muted-foreground">
              Your details are saved securely, then WhatsApp opens so we can chat instantly.
            </p>
            {errorMsg && (
              <p className="text-xs text-destructive">{errorMsg}</p>
            )}
          </motion.form>

          {/* Direct */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-border bg-gradient-to-br from-surface-elevated to-surface p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">Direct Channels</div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">Prefer direct immediate contact?</h3>
              <p className="text-muted-foreground">Reach our enterprise directly via our primary secure business channels.</p>
            </div>
            <div className="mt-8 space-y-3">
              <ContactCard icon={Mail} label="Business Email" value="pdancreativemedia@gmail.com" href="mailto:pdancreativemedia@gmail.com" />
              <ContactCard icon={Phone} label="Phone / WhatsApp" value="08120427703" href="https://wa.me/2348120427703" />
              <ContactCard icon={Globe} label="Availability" value="Open for global, remote mandates" />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={200}
        className="w-full rounded-xl bg-surface-elevated border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon-teal transition-colors"
      />
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const inner = (
    <div className="group flex items-center gap-4 rounded-2xl border border-border bg-background/40 p-4 hover:border-neon-teal/40 hover:bg-background/60 transition-all">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-neon text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-foreground font-medium">{value}</div>
      </div>
      {href && (
        <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-neon-teal group-hover:translate-x-0.5 transition-all" />
      )}
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative border-t border-border py-10 mt-10">
      <div className="mx-auto max-w-7xl px-5 flex flex-col items-center gap-6 text-sm">
        <div className="flex items-center gap-4">
          <SocialIcon href="https://www.instagram.com/pdancreativemedia?igsh=OWV2aXRxczNlMnU5" label="Instagram" icon={Instagram} />
          <SocialIcon href="https://www.linkedin.com/in/olaniyi-oluwasolafunmi-965206378?utm_source=share_via&utm_content=profile&utm_medium=member_android" label="LinkedIn" icon={Linkedin} />
          <SocialIcon href="https://www.facebook.com/share/1EF7RhLUkm/" label="Facebook" icon={Facebook} />
          <SocialIcon href="https://vm.tiktok.com/ZS9M5aoB97ekB-ZeQLr/" label="TikTok" icon={TikTokIcon} />
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={pdanLogo.url} alt="P. Dan Creative Media" className="h-8 w-8 object-contain" />
            <div className="text-muted-foreground">© 2026 P. Dan Creative Media. All rights reserved.</div>
          </div>
          <div className="text-muted-foreground italic">
            Hand-crafted with <span className="text-neon-teal">pixel-perfect code</span> and <span className="text-neon-purple">beautiful design</span>.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- BACK TO TOP ---------- */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8, pointerEvents: visible ? "auto" : "none" }}
      transition={{ duration: 0.25 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-neon text-primary-foreground shadow-glow-teal hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
}

/* ---------- SOCIAL ICON ---------- */
function SocialIcon({ href, label, icon: Icon }: { href: string; label: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group grid h-11 w-11 place-items-center rounded-full border border-border bg-surface-elevated text-foreground hover:border-neon-teal/60 hover:text-neon-teal hover:-translate-y-0.5 transition-all"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

/* ---------- TESTIMONIALS ---------- */
const TESTIMONIALS = [
  { img: "/testimonials/Testimonial  (1).png", quote: "You're now pro on what you do now my Son. God bless you 🙏", author: "Client — WhatsApp" },
  { img: "/testimonials/Testimonial  (4).png", quote: "I am really glad to have patronised you 😊. Right from the first draft, I have seen things I got satisfied with and the final design is just so amazing 🤩! The timely delivery and competency is also really impressive 👍!", author: "Client — WhatsApp" },
  { img: "/testimonials/Testimonial  (3).png", quote: "Thank you so much for your consistency and commitment. I really appreciate you.", author: "Client — WhatsApp" },
  { img: "/testimonials/Testimonial  (5).png", quote: "So efficient and fast 🤗🤗. Thank you so much 👍", author: "Client — WhatsApp" },
  { img: "/testimonials/Testimonial  (4).png", quote: "Waoow, you too much! They are very good.", author: "Client — WhatsApp" },
];

function Testimonials() {
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(0);
  const [sideCount, setSideCount] = useState(2);
  const total = TESTIMONIALS.length;
  const hoveringRef = useRef(false);

  // Responsive: 0 sides on <640, 1 on <1024, 2 on larger
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setSideCount(w < 640 ? 0 : w < 1024 ? 1 : 2);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // Auto-advance every 5s
  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      if (!hoveringRef.current) setIndex((i) => (i + 1) % total);
    }, 5000);
    return () => window.clearInterval(id);
  }, [playing, total]);

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  // Shortest signed circular distance from index -> i (so wrapping stays smooth).
  const circularOffset = (i: number) => {
    let d = i - index;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">Testimonials</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              What our <span className="text-gradient-neon">customers say</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">Real screenshots. Real words from clients we've served.</p>
          </div>
          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause testimonials" : "Play testimonials"}
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border bg-surface-elevated hover:border-neon-teal/60 hover:text-neon-teal transition-all"
          >
            {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className="relative mx-auto max-w-7xl px-5"
        onMouseEnter={() => { hoveringRef.current = true; }}
        onMouseLeave={() => { hoveringRef.current = false; }}
      >
        <div className="relative h-[520px] sm:h-[560px] md:h-[600px] flex items-center justify-center [perspective:1400px]">
          {TESTIMONIALS.map((t, i) => {
            const o = circularOffset(i);
            const abs = Math.abs(o);
            const visible = abs <= sideCount;
            const isCenter = o === 0;
            const translateX = o * (sideCount === 0 ? 0 : 62); // %
            const scale = isCenter ? 1 : abs === 1 ? 0.72 : abs === 2 ? 0.55 : 0.4;
            const opacity = !visible ? 0 : isCenter ? 1 : abs === 1 ? 0.5 : 0.25;
            const blur = isCenter ? 0 : abs === 1 ? 2 : 4;
            const rotateY = o * -8;
            const z = 100 - abs;

            return (
              <figure
                key={i}
                onClick={() => visible && !isCenter && setIndex(i)}
                aria-hidden={!isCenter}
                className={`absolute top-1/2 left-1/2 w-[280px] sm:w-[340px] md:w-[380px] rounded-3xl border border-border bg-gradient-to-br from-surface-elevated to-surface p-4 shadow-elevated ${visible && !isCenter ? "cursor-pointer" : ""}`}
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                  opacity,
                  filter: `blur(${blur}px)`,
                  zIndex: z,
                  pointerEvents: visible ? "auto" : "none",
                  transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease, filter 700ms ease",
                  willChange: "transform, opacity, filter",
                }}
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-background">
                  <img src={t.img} alt={`Customer review ${i + 1}`} className="w-full h-auto object-cover" loading="lazy" />
                </div>
                <figcaption className="mt-4 px-2 pb-2">
                  <p className="text-sm text-foreground/90 leading-relaxed line-clamp-3">"{t.quote}"</p>
                  <div className="mt-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">{t.author}</div>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Manual controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="grid h-12 w-12 place-items-center rounded-full border border-border bg-surface-elevated hover:border-neon-teal/60 hover:text-neon-teal transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-gradient-neon" : "w-2 bg-border hover:bg-muted-foreground"}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="grid h-12 w-12 place-items-center rounded-full border border-border bg-surface-elevated hover:border-neon-teal/60 hover:text-neon-teal transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
