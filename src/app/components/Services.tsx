import { useColors } from "./ThemeContext";
import { useTranslation } from "../i18n/context";

export function Services() {
  const { DARK, CARD, FORE, DIM, LIME, BORDER } = useColors();
  const { t, dict } = useTranslation();
  const items = dict.services.items as { name: string; desc: string; tags: string[] }[];
  return (
    <section id="services" style={{ borderTop: `1px solid ${BORDER}` }} className="px-4 py-[80px] md:px-6 md:py-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-end mb-12 md:mb-[72px]">
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

        <div style={{ backgroundColor: BORDER }} className="grid grid-cols-1 md:grid-cols-3 gap-px">
          {items.map((s, i) => (
            <div
              key={i}
              style={{ backgroundColor: DARK, cursor: "default", transition: "background-color 0.2s" }}
              className="flex flex-col px-6 py-7 md:px-8 md:py-10"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = CARD)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = DARK)}
            >
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, marginBottom: 24, opacity: 0.8 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="min-h-10 md:min-h-14">
                <h3 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, color: FORE, letterSpacing: "-0.02em", whiteSpace: "pre-line", lineHeight: 1.3, margin: 0 }} className="text-base md:text-lg">
                  {s.name}
                </h3>
              </div>
              <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 13.5, color: DIM, lineHeight: 1.7, margin: "20px 0 28px", flex: 1 }}>
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: DIM, border: `1px solid ${BORDER}`, letterSpacing: "0.08em" }}
                    className="px-2 py-1"
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
