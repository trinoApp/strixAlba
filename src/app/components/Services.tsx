import { useColors } from "./ThemeContext";
import { useTranslation } from "../i18n/context";

export function Services() {
  const { DARK, CARD, FORE, DIM, LIME, BORDER } = useColors();
  const { t, dict } = useTranslation();
  const items = dict.services.items as { name: string; desc: string; tags: string[] }[];
  return (
    <section id="services" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "end", marginBottom: 72 }}>
          <div>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {t("services.label")}
            </span>
            <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 4rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1.05 }}>
              {t("services.heading")}
            </h2>
          </div>
          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 16, color: DIM, lineHeight: 1.7, maxWidth: 440, alignSelf: "end" }}>
            {t("services.desc")}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, backgroundColor: BORDER }}>
          {items.map((s, i) => (
            <div
              key={i}
              style={{ backgroundColor: DARK, padding: "40px 32px", cursor: "default", display: "flex", flexDirection: "column", transition: "background-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = CARD)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = DARK)}
            >
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, marginBottom: 24, opacity: 0.8 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ minHeight: 56 }}>
                <h3 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, fontSize: 18, color: FORE, letterSpacing: "-0.02em", whiteSpace: "pre-line", lineHeight: 1.3, margin: 0 }}>
                  {s.name}
                </h3>
              </div>
              <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 13.5, color: DIM, lineHeight: 1.7, margin: "20px 0 28px", flex: 1 }}>
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
