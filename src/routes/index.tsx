import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YUVA Visuals — From sketch to cinema" },
      {
        name: "description",
        content:
          "Enhanced architectural visualization. SketchUp interiors and exteriors upscaled into cinematic photoreal renders.",
      },
      { property: "og:title", content: "AV Visuals — From sketch to cinema" },
      {
        property: "og:description",
        content:
          "AI-enhanced architectural visualization. SketchUp interiors and exteriors upscaled into cinematic photoreal renders.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const C = {
  bg: "#F9F6F1",
  band: "#F0EDE6",
  ink: "#1A1A1A",
  sub: "#6B6457",
  accent: "#D97757",
  border: "#E3DDD0",
  footer: "#111111",
};

const serif = { fontFamily: "'Playfair Display', Georgia, serif" };
const sans = { fontFamily: "'Inter', system-ui, sans-serif" };

const IMG = {
  living:
    "/views/hf_20260612_054107_4053e485-47e7-441a-ae72-06d06943f820.png",
  bedroom:
    "/views/hf_20260430_115925_6cc0bc2d-2d43-4e5c-9d7a-c6363f2e580d.png",
  hillside:
    "/views/hf_20260427_055036_d82b386d-f59c-4bda-8f73-c874d27e28e9.png",
  kitchen:
    "/views/5.png",
  courtyard:
    "/views/hf_20260520_131755_de822b5c-e32e-48cb-a4ea-bb7c9425a8a4.png",
  coastal:
    "/views/hf_20260409_060056_73c287fc-f145-4bc8-ac5a-0f95921f8c49.png",
};

function Starburst({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        const x1 = 24 + Math.cos(a) * 7;
        const y1 = 24 + Math.sin(a) * 7;
        const x2 = 24 + Math.cos(a) * 21;
        const y2 = 24 + Math.sin(a) * 21;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={C.accent}
            strokeWidth={3}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function Monogram({ dark = false }: { dark?: boolean }) {
  return (
    <span
      style={{ ...serif, color: dark ? C.bg : C.ink }}
      className="text-2xl font-medium tracking-tight"
    >
      YUVA
    </span>
  );
}

const WORK = [
  { src: IMG.living, cap: "The Obsidian Lounge" },
  { src: IMG.kitchen, cap: "The Sage Kitchen" },
  { src: IMG.hillside, cap: "Earthy Dining Room" },
  { src: IMG.bedroom, cap: "The Peacock Lounge" },
  { src: IMG.courtyard, cap: "Tropical Terrace Balcony" },
  { src: IMG.coastal, cap: "The Marble Lobby" },
];

const SERVICES = [
  {
    title: "Interior upscaling",
    body: "Flat SketchUp interiors rebuilt as rich, photoreal environments — authentic materials, believable furniture, true-to-life light.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke={C.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 26v-8a3 3 0 0 1 3-3h0" />
        <path d="M6 26h28v4H6z" />
        <path d="M9 22h22a3 3 0 0 1 3 3v1" />
        <path d="M10 30v3M30 30v3" />
        <path d="M28 12h4v3" />
      </svg>
    ),
  },
  {
    title: "Exterior rendering",
    body: "SketchUp exteriors elevated with cinematic skies, atmosphere, landscaping and context that tell the story of the architecture.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke={C.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 32h28" />
        <path d="M10 32V16l8-6v22" />
        <path d="M18 32V10l12 8v14" />
        <path d="M24 22h2M24 27h2M13 21h2M13 26h2" />
      </svg>
    ),
  },
  {
    title: "Cinematic grading",
    body: "Artful color grading and mood crafting — golden hour, dusk, nocturne — bringing depth, atmosphere and emotion to every frame.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke={C.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="18" r="7" />
        <path d="M6 30h28" />
        <path d="M10 34h20" />
        <path d="M20 7v2M31 18h-2M11 18H9M27.8 10.2l-1.4 1.4M13.6 11.6l-1.4-1.4" />
      </svg>
    ),
  },
];

const PROCESS = [
  {
    n: "01",
    t: "Send your scene",
    b: "Export your SketchUp view a simple viewport screenshot or 2D export is all that's needed. Interiors, exteriors, any stage of the model.",
  },
  {
    n: "02",
    t: "Enhanced upscaling pass",
    b: "The scene is reconstructed with advanced tools: geometry preserved, materials, lighting and entourage built up around your design intent.",
  },
  {
    n: "03",
    t: "Cinematic grading",
    b: "Each frame is graded by hand mood, palette and atmosphere tuned like a film still, not a default render preset.",
  },
  {
    n: "04",
    t: "Delivery in 4K",
    b: "Final stills delivered in 4K within 48 hours, with one revision round included. Ready for client decks, marketing and planning.",
  },
];

function Index() {
  return (
    <div style={{ ...sans, backgroundColor: C.bg, color: C.ink }}>
      {/* NAV */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: "rgba(249,246,241,0.9)", backdropFilter: "blur(8px)", borderColor: C.border }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" aria-label="yuv">
            <Monogram />
          </a>
          <nav className="hidden items-center gap-8 text-sm md:flex" style={{ color: C.ink }}>
            <a href="#work" className="hover:opacity-60">Work</a>
            <a href="#process" className="hover:opacity-60">Process</a>
            <a href="#services" className="hover:opacity-60">Services</a>
            <a href="#about" className="hover:opacity-60">About</a>
          </nav>
          <a
            href="#contact"
            className="rounded px-4 py-2 text-sm font-medium"
            style={{ backgroundColor: C.ink, color: C.bg, borderRadius: 4 }}
          >
            Start a project
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="px-6 pt-24 pb-20 text-center md:pt-32 md:pb-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center">
            <Starburst size={40} />
          </div>
          <h1 style={serif} className="text-5xl leading-tight md:text-7xl">
            From sketch to cinema.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg" style={{ color: C.sub }}>
            Enhanced architectural visualization SketchUp interiors and
            exteriors reborn as cinematic renders.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#work"
              className="px-6 py-3 text-sm font-medium"
              style={{ backgroundColor: C.ink, color: C.bg, borderRadius: 4 }}
            >
              View portfolio
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm font-medium"
              style={{ border: `1px solid ${C.ink}`, color: C.ink, borderRadius: 4 }}
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER SLIDER */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 style={serif} className="text-3xl md:text-4xl">
              The transformation
            </h2>
            <p className="mt-3 text-base" style={{ color: C.sub }}>
              Drag between the raw SketchUp input and the finished cinematic frame.
            </p>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <h2 style={serif} className="mb-12 text-center text-3xl md:text-4xl">
            Selected work
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {WORK.map((w) => (
              <figure key={w.cap}>
                <div className="overflow-hidden" style={{ borderRadius: 6 }}>
                  <img
                    src={w.src}
                    alt={w.cap}
                    loading="lazy"
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    style={{ aspectRatio: "3 / 2" }}
                  />
                </div>
                <figcaption className="mt-3 text-sm" style={{ color: C.sub }}>
                  {w.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24 md:py-28" style={{ backgroundColor: C.band }}>
        <div className="mx-auto max-w-6xl">
          <h2 style={serif} className="mb-14 text-center text-3xl md:text-4xl">
            Services
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="text-center">
                <div className="mb-5 flex justify-center">{s.icon}</div>
                <h3 style={serif} className="text-xl">
                  {s.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed" style={{ color: C.sub }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 style={serif} className="mb-14 text-center text-3xl md:text-4xl">
            How it works
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.n}>
                <div style={{ ...serif, color: C.accent }} className="text-3xl">
                  {p.n}
                </div>
                <div
                  className="mt-3 mb-4 h-px w-10"
                  style={{ backgroundColor: C.accent }}
                />
                <h3 className="text-base font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: C.sub }}>
                  {p.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 md:py-28" style={{ backgroundColor: C.band }}>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <Starburst size={28} />
          </div>
          <h2 style={serif} className="text-3xl md:text-4xl">
            About YUVA Visuals
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: C.sub }}>
            YUVA Visuals sits at the intersection of architecture and film. Using
            advanced upscaling and editing tools, raw SketchUp working models
            are transformed into imagery with the depth, light and atmosphere of
            a cinema still without the cost or turnaround of traditional
            rendering pipelines. Every frame is composed, graded and finished by
            hand.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: C.sub }}>
            Trusted by architects, interior designers and property developers to
            make unbuilt spaces feel inevitable.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 text-center md:py-32">
        <div className="mx-auto max-w-2xl">
          <h2 style={serif} className="text-3xl md:text-5xl">
            Have a scene ready?
          </h2>
          <p className="mt-5 text-base" style={{ color: C.sub }}>
            Send a SketchUp export and receive a graded preview frame — see the
            transformation on your own project before committing.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:yuvartstudios@gmail.com"
              className="px-6 py-3 text-sm font-medium"
              style={{ backgroundColor: C.ink, color: C.bg, borderRadius: 4 }}
            >
              yuvartstudios@gmail.com
            </a>
            <a
              href="#work"
              className="px-6 py-3 text-sm font-medium"
              style={{ border: `1px solid ${C.ink}`, color: C.ink, borderRadius: 4 }}
            >
              Back to work
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: C.footer, color: "#A8A29A" }} className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Monogram dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Enhanced architectural visualization that turns your SketchUp
              scenes into cinematic stories.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs tracking-[0.16em]" style={{ color: "#6F6A62" }}>
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#work" className="hover:text-white">Work</a></li>
              <li><a href="#process" className="hover:text-white">Process</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs tracking-[0.16em]" style={{ color: "#6F6A62" }}>
              SERVICES
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Interior upscaling</li>
              <li>Exterior rendering</li>
              <li>Cinematic grading</li>
              <li>Custom solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs tracking-[0.16em]" style={{ color: "#6F6A62" }}>
              CONTACT
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@av-visuals.com" className="hover:text-white">
                  yuvartstudios@gmail.com
                </a>
              </li>
              <li>Available worldwide</li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-block px-5 py-2.5 text-sm font-medium"
              style={{ border: "1px solid #3A3A3A", color: "#F9F6F1", borderRadius: 4 }}
            >
              Start a project
            </a>
          </div>
        </div>
        <div
          className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t pt-8 text-xs"
          style={{ borderColor: "#2A2A2A", color: "#6F6A62" }}
        >
          <span>© 2026 YUVA Visuals. All rights reserved.</span>
          <span>From sketch to cinema.</span>
        </div>
      </footer>
    </div>
  );
}
