import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Languages, Menu, X } from "lucide-react";
import { OwlGlyph } from "./OwlGlyph";
import { useColors, useTheme } from "./ThemeContext";
import { useTranslation } from "../i18n/context";
import { useIsMobile } from "./ui/use-mobile";

export function Nav() {
  const { theme, toggle } = useTheme();
  const { DARK, FORE, DIM, BORDER, LIME } = useColors();
  const { t, lang, setLang } = useTranslation();
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navClickRef = useRef(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    if (!menuOpen) return;
    navClickRef.current = false;
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (!navClickRef.current) window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
    <header
      className="fixed top-0 left-0 right-0 z-50 px-6"
      style={{
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
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col w-full relative">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="flex items-center gap-2.5 no-underline absolute left-1/2 -translate-x-1/2 whitespace-nowrap md:static md:translate-x-0"
          >
            <OwlGlyph size={isMobile ? 60 : 88} />
            <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 700, fontSize: isMobile ? 16 : 15, color: FORE, letterSpacing: "-0.02em" }}>
              {t("nav.brand")}
            </span>
          </a>

        <nav className="hidden md:flex items-center gap-9">
            {["services", "projects", "advantage", "steps", "story"].map((key) => (
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

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
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
              href="#contact"
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

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: DIM,
              padding: 4,
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        </div>

      </div>

    </header>
      {isMobile && menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 49,
            backgroundColor: theme === "dark" ? "rgba(9,9,15,0.98)" : "rgba(255,255,255,0.98)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          {["services", "projects", "advantage", "steps", "story"].map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => { navClickRef.current = true; setMenuOpen(false); }}
              style={{
                fontFamily: "Unbounded, sans-serif",
                fontWeight: 600,
                fontSize: 20,
                color: FORE,
                textDecoration: "none",
                transition: "color 0.15s",
                letterSpacing: "-0.02em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = LIME)}
              onMouseLeave={(e) => (e.currentTarget.style.color = FORE)}
            >
              {t(`nav.${key}`)}
            </a>
          ))}

          <div style={{ display: "flex", gap: 16, marginTop: 24, alignItems: "center" }}>
            <button
              onClick={(e) => { e.stopPropagation(); toggle(); }}
              style={{
                background: "none",
                border: `1px solid ${theme === "dark" ? "rgba(238,238,240,0.12)" : "rgba(0,0,0,0.10)"}`,
                borderRadius: 2,
                padding: "10px 10px",
                cursor: "pointer",
                color: DIM,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label={t("nav.toggleTheme")}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setLang(lang === "en" ? "fr" : "en"); }}
              style={{
                background: "none",
                border: `1px solid ${theme === "dark" ? "rgba(238,238,240,0.12)" : "rgba(0,0,0,0.10)"}`,
                borderRadius: 2,
                padding: "10px 12px",
                cursor: "pointer",
                color: DIM,
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
          </div>

          <a
            href="#contact"
            onClick={() => { navClickRef.current = true; setMenuOpen(false); }}
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              backgroundColor: LIME,
              color: DARK,
              padding: "12px 40px",
              borderRadius: 2,
              textDecoration: "none",
              marginTop: 16,
            }}
          >
            {t("nav.cta")}
          </a>
          </div>
        </div>
      )}
    </>
  );
}
