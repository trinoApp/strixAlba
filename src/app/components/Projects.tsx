import { useColors } from "./ThemeContext";

const PROJECTS = [
  { name: "Trino", desc: "High-performance query engine for distributed analytics across large datasets." },
  { name: "AI S2S Agent", desc: "Server-to-server AI agent system for automated cross-platform workflows." },
  { name: "Interactive Websites", desc: "Engaging, dynamic web experiences built for impact and performance." },
  { name: "BIKE VR", desc: "Immersive virtual reality training experience for cycling and rehabilitation." },
];

export function Projects() {
  const { DARK, CARD, FORE, DIM, LIME, BORDER } = useColors();
  return (
    <section id="projects" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 64 }}>
          <div>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              / Projects
            </span>
            <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 4rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1.05 }}>
              WHAT WE'VE BUILT
            </h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, backgroundColor: BORDER }}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              style={{ backgroundColor: DARK, padding: "44px 36px", transition: "background-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = CARD)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = DARK)}
            >
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, marginBottom: 20, opacity: 0.6 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, fontSize: 20, color: FORE, letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.2 }}>
                {p.name}
              </h3>
              <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 14, color: DIM, lineHeight: 1.7 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
