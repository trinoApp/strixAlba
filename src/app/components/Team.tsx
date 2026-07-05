import { Linkedin, FileText } from "lucide-react";
import { useColors } from "./ThemeContext";
import { useTranslation } from "../i18n/context";

const IMG_MAP: Record<string, string> = {
  "Ahmed Amine Kefi": "ahmed.png",
  "Alaa Eddine Mastouri": "alaa.png",
  "Mohamed Islem Ben Jaballah": "islem.png",
  "Houssem Rihani": "houssem.png",
  "Mohamed Ben Abdallah": "hama.png",
  "Wassim Ben Guirat": "wassim.png",
};

const LINKEDIN_MAP: Record<string, string> = {
  "Alaa Eddine Mastouri": "https://www.linkedin.com/in/alaa-eddine-mastouri/",
  "Ahmed Amine Kefi": "https://www.linkedin.com/in/ahmed-amine-kefi-9a75a9224/",
  "Houssem Rihani": "https://www.linkedin.com/in/rihani-houssem/",
  "Mohamed Islem Ben Jaballah": "https://www.linkedin.com/in/mohamed-islem-ben-jaballah-183500208/",
  "Wassim Ben Guirat": "https://www.linkedin.com/in/wassim-ben-guirat-9435701a6/",
  "Mohamed Ben Abdallah": "https://www.linkedin.com/in/mohamed-ben-abdallah-03ba961a1/",
};

const CV_MAP: Record<string, string> = {
  "Ahmed Amine Kefi": "Ahmed_Amine_Kefi_CV.pdf",
  "Alaa Eddine Mastouri": "Alaa_Eddine_Mastouri_CV.pdf",
  "Mohamed Islem Ben Jaballah": "Mohammed_Islem_Ben_Jaballah_CV.pdf",
  "Houssem Rihani": "Houssem_Rihani_CV.pdf",
  "Mohamed Ben Abdallah": "Mohammed_Ben_Abdallah_CV.pdf",
  "Wassim Ben Guirat": "Wassim_Ben_Guirat_CV.pdf",
};

export function Team() {
  const { CARD, DARK, FORE, DIM, LIME, BORDER } = useColors();
  const { t, dict } = useTranslation();
  const members = dict.team.members as { name: string; role: string; bio: string }[];
  return (
    <section style={{ borderTop: `1px solid ${BORDER}`, backgroundColor: CARD }} className="px-6 py-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-[72px]">
          <div>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: LIME, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {t("team.label")}
            </span>
            <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 4rem)", color: FORE, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1.05 }}>
              {t("team.heading")}
            </h2>
            <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 15, color: DIM, marginTop: 16, maxWidth: 500, lineHeight: 1.7 }}>
              {t("team.desc")}
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: BORDER }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
          {members.map((m, i) => (
            <div
              key={i}
              style={{ backgroundColor: DARK, transition: "background-color 0.2s" }}
              className="flex flex-col items-center text-center px-8 py-9"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = CARD)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = DARK)}
            >
              <div style={{ width: 96, height: 96, borderRadius: "50%", overflow: "hidden", marginBottom: 24, flexShrink: 0, border: `2px solid ${LIME}`, backgroundColor: "#fff" }}>
                <img src={`assets/images/${IMG_MAP[m.name] || ""}`} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 600, fontSize: 15, color: FORE, letterSpacing: "-0.02em", marginBottom: 4 }}>
                {m.name}
              </div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: LIME, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.7, marginBottom: 16 }}>
                {m.role}
              </div>
              <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, fontSize: 14, color: DIM, lineHeight: 1.7, margin: "0 0 16px" }}>
                {m.bio}
              </p>
              <div className="flex gap-4 mt-auto">
                <a
                  href={`assets/cvs/${CV_MAP[m.name]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "Outfit, sans-serif", fontSize: 12, color: DIM, textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = LIME)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = DIM)}
                >
                  <FileText size={14} />
                  CV
                </a>
                <a
                  href={LINKEDIN_MAP[m.name]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "Outfit, sans-serif", fontSize: 12, color: DIM, textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = LIME)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = DIM)}
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
