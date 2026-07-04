import { useColors } from "./ThemeContext";

const SERVICES = [
  {
    num: "01",
    name: "Web\nApps",
    desc: "Fast, scalable web applications built for real-world usage. Smooth UX, strong performance, and systems that handle growth without friction.",
    tags: ["React", "Next.js", "Node", "Python"],
  },
  {
    num: "02",
    name: "Mobile\nApps",
    desc: "Native and cross-platform apps for iOS and Android. Clean interfaces, reliable performance, and seamless user experiences across devices.",
    tags: ["iOS", "Android", "Flutter", "React Native"],
  },
  {
    num: "03",
    name: "Backend\nSystems",
    desc: "Reliable infrastructure that powers your product. APIs, microservices, and real-time systems designed for stability and scale.",
    tags: ["APIs", "Microservices", "Real-time", "Cloud"],
  },
  {
    num: "04",
    name: "CRM /\nERP",
    desc: "Custom business systems shaped around your workflows. Less complexity, more control, and tools that actually match how your team operates.",
    tags: ["Workflows", "Automation", "Enterprise"],
  },
  {
    num: "05",
    name: "AI\nIntegrations",
    desc: "Intelligence embedded directly into your product. Automation, assistants, and decision systems that reduce manual work and unlock efficiency.",
    tags: ["LLMs", "Agents", "Automation", "RAG"],
  },
  {
    num: "06",
    name: "XR / 3D /\nImmersive",
    desc: "Spatial and interactive experiences across web and XR. Product visualization, training, and storytelling that increases engagement and understanding.",
    tags: ["VR", "AR", "3D Web", "Interactive"],
  },
];

export function Services() {
  const { DARK, CARD, FORE, DIM, LIME, BORDER } = useColors();
  return (
    <section id="services" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "end", marginBottom: 72 }}>
          <div>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              / Services
            </span>
            <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 4rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1.05 }}>
              WHAT WE DO
            </h2>
          </div>
          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 16, color: DIM, lineHeight: 1.7, maxWidth: 440, alignSelf: "end" }}>
            Every discipline under one roof. No outsourcing, no handoffs — just one team that owns the full product end-to-end.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, backgroundColor: BORDER }}>
          {SERVICES.map((s) => (
            <div
              key={s.num}
              style={{ backgroundColor: DARK, padding: "40px 32px", cursor: "default", transition: "background-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = CARD)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = DARK)}
            >
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, marginBottom: 24, opacity: 0.8 }}>
                {s.num}
              </div>
              <h3 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, fontSize: 18, color: FORE, letterSpacing: "-0.02em", whiteSpace: "pre-line", marginBottom: 20, lineHeight: 1.3 }}>
                {s.name}
              </h3>
              <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 13.5, color: DIM, lineHeight: 1.7, marginBottom: 28 }}>
                {s.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: DIM, border: `1px solid ${BORDER}`, padding: "4px 8px", letterSpacing: "0.08em" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
