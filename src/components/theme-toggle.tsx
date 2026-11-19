"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

// Hydration-safe "are we on the client?" check (server always renders false).
const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

/** Pill-style light/dark toggle used in the navbar. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-16 shrink-0 items-center rounded-full border border-border bg-secondary p-1"
    >
      {/* Sliding knob behind the active icon */}
      <span
        aria-hidden
        className={cn(
          "absolute top-1 left-1 size-7 rounded-full bg-primary transition-transform",
          isDark && "translate-x-7",
        )}
      />
      <span className="relative flex size-7 items-center justify-center">
        <Sun
          className={cn("size-4", isDark ? "text-muted-foreground" : "text-primary-foreground")}
        />
      </span>
      <span className="relative flex size-7 items-center justify-center">
        <Moon
          className={cn("size-4", isDark ? "text-primary-foreground" : "text-muted-foreground")}
        />
      </span>
    </button>
  );
}
