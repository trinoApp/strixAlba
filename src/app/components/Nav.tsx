import { useState, useEffect } from "react";
import { Sun, Moon, Languages } from "lucide-react";
import { OwlGlyph } from "./OwlGlyph";
import { useColors, useTheme } from "./ThemeContext";
import { useTranslation } from "../i18n/context";

export function Nav() {
  const { theme, toggle } = useTheme();
  const { DARK, FORE, DIM, BORDER, LIME } = useColors();
  const { t, lang, setLang } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled
          ? theme === "dark"
            ? `1px solid rgba(238,238,240,0.12)`
            : `1px solid rgba(0,0,0,0.10)`
          : "1px solid transparent",
        backgroundColor: scrolled
          ? theme === "dark"
            ? "rgba(9,9,15,0.65)"
            : "rgba(255,255,255,0.75)"
          : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.15)" : "none",
        transition: "all 0.3s ease",
        padding: "0 24px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <OwlGlyph size={72} />
          <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, fontSize: 15, color: FORE, letterSpacing: "-0.02em" }}>
            {t("nav.brand")}
          </span>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="hidden md:flex">
          {["services", "projects", "advantage", "steps"].map((key) => (
            <a
              key={key}
              href={`#${key}`}
              style={{ fontFamily: "Outfit, sans-serif", fontWeight: 500, fontSize: 15, color: DIM, textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = FORE)}
              onMouseLeave={(e) => (e.currentTarget.style.color = DIM)}
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={toggle}
            style={{
              background: "none",
              border: `1px solid ${theme === "dark" ? "rgba(238,238,240,0.12)" : "rgba(0,0,0,0.10)"}`,
              borderRadius: 2,
              padding: "7px 7px",
              cursor: "pointer",
              color: DIM,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = FORE)}
            onMouseLeave={(e) => (e.currentTarget.style.color = DIM)}
            aria-label={t("nav.toggleTheme")}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            style={{
              background: "none",
              border: `1px solid ${theme === "dark" ? "rgba(238,238,240,0.12)" : "rgba(0,0,0,0.10)"}`,
              borderRadius: 2,
              padding: "7px 7px",
              cursor: "pointer",
              color: DIM,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              fontWeight: 600,
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = FORE)}
            onMouseLeave={(e) => (e.currentTarget.style.color = DIM)}
          >
            {lang === "en" ? "FR" : "EN"}
          </button>

        <a
          href="#story"
          style={{
            fontFamily: "Outfit, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            backgroundColor: LIME,
            color: DARK,
            padding: "9px 20px",
            borderRadius: 2,
            textDecoration: "none",
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {t("nav.cta")}
        </a>
        </div>
      </div>
    </header>
  );
}
