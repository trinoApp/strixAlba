import { useColors } from "./ThemeContext";
import { useTranslation } from "../i18n/context";

const PROJECT_EMBEDS: Record<string, string> = {
  "Trino": "https://www.youtube.com/embed/Q4ahV4GJ4EM",
  "AI S2S Agent": "https://www.youtube.com/embed/oHsXkvvwNqw",
  "3d Websites": "https://www.youtube.com/embed/placeholder3",
  "BIKE VR": "https://drive.google.com/file/d/1-tUPvvCqNi6wuxPHShZEmtenxIyevOK6/preview",
};

export function Projects() {
  const { DARK, CARD, FORE, DIM, LIME, BORDER } = useColors();
  const { t, dict } = useTranslation();
  const items = dict.projects.items as { name: string; desc: string }[];
  return (
    <section id="projects" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 64 }}>
          <div>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {t("projects.label")}
            </span>
            <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 4rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1.05 }}>
              {t("projects.heading")}
            </h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, backgroundColor: BORDER }}>
          {items.map((p, i) => (
            <div
              key={i}
              style={{ backgroundColor: DARK, padding: "44px 36px", display: "flex", flexDirection: "column", transition: "background-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = CARD)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = DARK)}
            >
              <div style={{ paddingBottom: 20, borderBottom: `1px solid ${BORDER}`, marginBottom: 20 }}>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, opacity: 0.6 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <h3 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, fontSize: 20, color: FORE, letterSpacing: "-0.02em", paddingBottom: 16, borderBottom: `1px solid ${BORDER}`, marginBottom: 16, lineHeight: 1.2 }}>
                {p.name}
              </h3>
              <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 14, color: DIM, lineHeight: 1.7, flex: 1 }}>
                {p.desc}
              </p>
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${BORDER}`, position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                <iframe
                  src={PROJECT_EMBEDS[p.name] || ""}
                  title={p.name}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: 2 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
