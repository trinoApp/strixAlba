import { ArrowUpRight } from "lucide-react";
import { HeroOwl } from "./HeroOwl";
import { useColors } from "./ThemeContext";
import { useTranslation } from "../i18n/context";

export function Hero() {
  const { LIME, DARK, FORE, DIM, BORDER } = useColors();
  const { t, lang } = useTranslation();
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 64 }}>
      <div style={{ position: "absolute", right: "-15%", top: "50%", transform: "translateY(-50%)", width: "90%", maxWidth: 1200, opacity: 1, pointerEvents: "none" }}>
        <HeroOwl />
      </div>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative" }}>
        <div style={{ maxWidth: 760 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <span style={{ width: 28, height: 1, backgroundColor: LIME, display: "inline-block" }} />
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {t("hero.eyebrow")}
            </span>
          </div>

          <h1 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: t("hero.headingSize"), lineHeight: 1, letterSpacing: "-0.03em", color: FORE, margin: "0 0 20px" }}>
            {t("hero.prefix") && <>{t("hero.prefix")} </>}<span style={{ color: LIME }}>{t("hero.owlWord")}</span> {t("hero.heading")}<br />
            {t("hero.heading2")}<br />
            <span style={{ color: LIME }}>{t("hero.highlight")}</span>
          </h1>
        </div>

        <div style={{ display: "flex", gap: 32, alignItems: "flex-start", width: "100%" }}>
          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: lang === "fr" ? "clamp(0.85rem, 1.2vw, 1rem)" : "clamp(1rem, 1.4vw, 1.2rem)", color: DIM, lineHeight: 1.7, maxWidth: 640 }}>
              {t("hero.sub")}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, flexShrink: 0, marginLeft: "auto", marginRight: 100 }}>
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "Outfit, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                backgroundColor: LIME,
                color: DARK,
                padding: "14px 28px",
                borderRadius: 2,
                textDecoration: "none",
              }}
            >
              {t("hero.cta")} <ArrowUpRight size={15} />
            </a>
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "Outfit, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                border: `1px solid ${BORDER}`,
                color: FORE,
                padding: "14px 28px",
                borderRadius: 2,
                textDecoration: "none",
              }}
            >
              {t("hero.link")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
