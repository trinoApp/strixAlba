import { useColors } from "./ThemeContext";

const MEMBERS = [
  { name: "Ahmed Amine Kefi", role: "Backend Engineer / Systems Architect", bio: "Specialized in large-scale backend systems and distributed architectures." },
  { name: "Allaa Eddine Mastouri", role: "Full-Stack Developer", bio: "Builds end-to-end web applications with focus on performance and scalability." },
  { name: "Mohamed Islem Ben Jaballah", role: "XR / Immersive Experiences Engineer", bio: "Focused on VR and immersive 3D applications, bridging real-time graphics and interaction systems." },
  { name: "Houssem Rihani", role: "Junior Developer", bio: "Supports full-stack development and assists in feature implementation and maintenance." },
  { name: "Mohamed Ben Abdallah", role: "CRM / ERP Developer", bio: "Develops custom business systems tailored for operations, workflows, and enterprise needs." },
];

export function Team() {
  const { CARD, DARK, FORE, DIM, LIME, BORDER } = useColors();
  return (
    <section style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}`, backgroundColor: CARD }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            / Team
          </span>
          <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 4rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1.05 }}>
            THE FLIGHT CREW
          </h2>
          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 15, color: DIM, marginTop: 16, maxWidth: 500, marginInline: "auto", lineHeight: 1.7 }}>
            A small, senior team. No egos, no bureaucracy — just engineers who love building.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 1, backgroundColor: BORDER }}>
          {MEMBERS.map((m) => (
            <div
              key={m.name}
              style={{ backgroundColor: DARK, display: "grid", gridTemplateColumns: "320px 1fr", gap: 32, alignItems: "center", padding: "28px 32px" }} className="flex-col sm:grid"
            >
              <div>
                <div style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 600, fontSize: 15, color: FORE, letterSpacing: "-0.02em", marginBottom: 4 }}>
                  {m.name}
                </div>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: LIME, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.7 }}>
                  {m.role}
                </div>
              </div>
              <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 14, color: DIM, lineHeight: 1.7, margin: 0 }}>
                {m.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
