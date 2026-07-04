import { useState, useEffect, useCallback } from "react";
import { X, Play } from "lucide-react";
import { useColors } from "./ThemeContext";
import { useTranslation } from "../i18n/context";

const PROJECT_EMBEDS: Record<string, string> = {
  "Trino": "https://www.youtube.com/embed/Q4ahV4GJ4EM",
  "AI S2S Agent": "https://www.youtube.com/embed/oHsXkvvwNqw",
  "3D Websites": "https://www.youtube.com/embed/placeholder3",
  "BIKE VR": "https://drive.google.com/file/d/1-tUPvvCqNi6wuxPHShZEmtenxIyevOK6/preview",
};

function getThumbnailUrl(name: string): string | null {
  const url = PROJECT_EMBEDS[name];
  if (!url?.includes("youtube.com/embed")) return null;
  const id = url.split("/embed/")[1]?.split("?")[0];
  if (!id || id.startsWith("placeholder")) return null;
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

export function Projects() {
  const { DARK, CARD, FORE, DIM, LIME, BORDER } = useColors();
  const { t, dict } = useTranslation();
  const items = dict.projects.items as { name: string; desc: string }[];
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const closeModal = useCallback(() => setActiveVideo(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  return (
    <>
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
            {items.map((p, i) => {
              const embedUrl = PROJECT_EMBEDS[p.name];
              const thumbUrl = getThumbnailUrl(p.name);
              return (
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
                  <div
                    onClick={() => embedUrl && setActiveVideo(embedUrl)}
                    style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${BORDER}`, position: "relative", width: "100%", aspectRatio: "16 / 9", cursor: "pointer", borderRadius: 2, overflow: "hidden", userSelect: "none" }}
                  >
                    {thumbUrl ? (
                      <img
                        src={thumbUrl}
                        alt={p.name}
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${DARK}, ${CARD})` }} />
                    )}
                    <div
                      style={{
                        position: "absolute", inset: 0,
                        background: "rgba(0,0,0,0.3)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.5)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.3)")}
                    >
                      <div
                        style={{
                          width: 56, height: 56, borderRadius: "50%",
                          backgroundColor: LIME, display: "flex", alignItems: "center", justifyContent: "center",
                          transition: "transform 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      >
                        <Play size={24} fill={DARK} color={DARK} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {activeVideo && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24,
          }}
        >
          <button
            onClick={closeModal}
            aria-label="Close"
            style={{
              position: "absolute", top: 24, right: 24,
              width: 44, height: 44, borderRadius: "50%",
              border: `1px solid ${BORDER}`,
              background: "transparent",
              color: FORE, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <X size={20} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%", maxWidth: 1100,
              aspectRatio: "16/9",
              borderRadius: 8, overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <iframe
              src={activeVideo + (activeVideo.includes("youtube") ? "?autoplay=1" : "")}
              title="Video player"
              style={{ width: "100%", height: "100%", border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
