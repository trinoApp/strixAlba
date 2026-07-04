import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export type Theme = "dark" | "light";

export type Colors = {
  LIME: string;
  DARK: string;
  FORE: string;
  DIM: string;
  CARD: string;
  BORDER: string;
};

const DARK_COLORS: Colors = {
  LIME: "#C8FF00",
  DARK: "#09090F",
  FORE: "#EEEEF0",
  DIM: "#6A6A7E",
  CARD: "#111118",
  BORDER: "rgba(238,238,240,0.07)",
};

const LIGHT_COLORS: Colors = {
  LIME: "#A0D800",
  DARK: "#FFFFFF",
  FORE: "#111118",
  DIM: "#8A8A9E",
  CARD: "#F2F2F5",
  BORDER: "rgba(0,0,0,0.08)",
};

type ThemeCtx = {
  theme: Theme;
  toggle: () => void;
  colors: Colors;
};

const Ctx = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch {}
    return "dark";
  });

  const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  useEffect(() => {
    try { localStorage.setItem("theme", theme); } catch {}
    document.documentElement.setAttribute("data-theme", theme);
    if (document.body) {
      document.body.style.backgroundColor = colors.DARK;
      document.body.style.color = colors.FORE;
    }
  }, [theme, colors]);

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);

  return <Ctx.Provider value={{ theme, toggle, colors }}>{children}</Ctx.Provider>;
}

export function useColors(): Colors {
  const ctx = useContext(Ctx);
  if (!ctx) return DARK_COLORS;
  return ctx.colors;
}

export function useTheme(): ThemeCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
