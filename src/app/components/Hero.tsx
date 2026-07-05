import { ArrowUpRight } from "lucide-react";
import { HeroOwl } from "./HeroOwl";
import { useColors } from "./ThemeContext";
import { useTranslation } from "../i18n/context";
import { useIsMobile } from "./ui/use-mobile";

export function Hero() {
  const { LIME, DARK, FORE, DIM, BORDER } = useColors();
  const { t, lang } = useTranslation();
  const isMobile = useIsMobile();
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="hidden md:block absolute pointer-events-none" style={{ right: "-15%", top: "50%", transform: "translateY(-50%)", width: "90%", maxWidth: 1200 }}>
        <HeroOwl />
      </div>
      <div className="max-w-7xl mx-auto w-full relative px-4 md:px-6">
        <div style={{ maxWidth: 760 }} className="relative">
          <div className="block md:hidden absolute pointer-events-none" style={{ right: "-10%", top: 0, width: "60%", maxWidth: 300 }}>
            <HeroOwl />
          </div>
          <div className="flex items-center gap-2 mb-5">
            <span style={{ width: 28, height: 1, backgroundColor: LIME, display: "inline-block" }} />
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {t("hero.eyebrow")}
            </span>
          </div>

          <h1 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: isMobile ? "clamp(2.2rem, 10vw, 3.3rem)" : t("hero.headingSize"), color: FORE, letterSpacing: "-0.03em", lineHeight: 1, margin: isMobile ? "0 100px 20px 0" : "0 0 20px", position: "relative" }}>
            {t("hero.prefix") && <>{t("hero.prefix")} </>}<span style={{ color: LIME }}>{t("hero.owlWord")}</span> {t("hero.heading")}<br />
            {t("hero.heading2")}<br />
            <span style={{ color: LIME }}>{t("hero.highlight")}</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch md:items-start w-full">
          <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: lang === "fr" ? "clamp(0.85rem, 1.2vw, 1rem)" : "clamp(1rem, 1.4vw, 1.2rem)", color: DIM, lineHeight: 1.7, maxWidth: 640 }}>
              {t("hero.sub")}
            </p>
            <div className="flex flex-col md:flex-row gap-3 shrink-0 ml-0 md:ml-auto mr-0 md:mr-[100px]">
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                fontFamily: "Outfit, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                backgroundColor: LIME,
                color: DARK,
                borderRadius: 2,
                textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              className="px-7 py-4 md:px-7 md:py-3.5"
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(170,255,0,0.3)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              {t("hero.cta")} <ArrowUpRight size={15} />
            </a>
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                fontFamily: "Outfit, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                border: `1px solid ${BORDER}`,
                color: FORE,
                borderRadius: 2,
                textDecoration: "none",
                transition: "transform 0.2s, border-color 0.2s, color 0.2s",
              }}
              className="px-7 py-4 md:px-7 md:py-3.5"
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.borderColor = LIME; e.currentTarget.style.color = LIME; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = FORE; }}
            >
              {t("hero.link")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}