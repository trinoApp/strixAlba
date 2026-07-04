import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import en from "./en.json";
import fr from "./fr.json";

type Lang = "en" | "fr";
type Dict = typeof en;

const dicts: Record<Lang, Dict> = { en, fr };

function get(obj: Dict, path: string): unknown {
  return path.split(".").reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) return (acc as Record<string, unknown>)[key];
    return undefined;
  }, obj as unknown);
}

type LangContext = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string; dict: Dict };

const Ctx = createContext<LangContext | null>(null);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = useCallback(
    (key: string): string => {
      const val = get(dicts[lang], key);
      return typeof val === "string" ? val : key;
    },
    [lang],
  );

  return <Ctx.Provider value={{ lang, setLang, t, dict: dicts[lang] }}>{children}</Ctx.Provider>;
}

export function useTranslation() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTranslation must be used within TranslationProvider");
  return ctx;
}
