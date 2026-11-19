"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/** Wraps the app with class-based dark mode (`.dark` on <html>). */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
