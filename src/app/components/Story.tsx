import { useColors } from "./ThemeContext";
import { useTranslation } from "../i18n/context";

export function Story() {
  const { FORE, DIM, LIME, BORDER } = useColors();
  const { t } = useTranslation();
  return (
    <section id="story" style={{ borderTop: `1px solid ${BORDER}` }} className="px-4 md:px-6 py-[80px] md:py-[120px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-20 lg:items-center">
        <div>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            {t("story.label")}
          </span>
          <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 5rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 20, lineHeight: 1, marginBottom: 0 }}>
            {t("story.heading").split(" ").map((word, i, arr) => (
              <span key={i}>
                {i === arr.length - 1 ? <span style={{ color: LIME }}>{word}</span> : word}{i < arr.length - 1 ? <br /> : ""}
              </span>
            ))}
          </h2>

        </div>
        <div>
          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 16, color: DIM, lineHeight: 1.75, marginBottom: 36 }}>
            {t("story.p1")}
          </p>
          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 16, color: DIM, lineHeight: 1.75, marginBottom: 36 }}>
            {t("story.p2")}
          </p>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              color: DIM,
              lineHeight: 1.8,
              padding: "20px 24px",
              border: `1px solid ${BORDER}`,
              borderRadius: 2,
            }}
          >
            <div style={{ color: LIME, marginBottom: 8 }}>
              {t("story.location")}
            </div>
            <div>{t("story.founded")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
