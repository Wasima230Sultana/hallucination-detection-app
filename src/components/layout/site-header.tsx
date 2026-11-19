"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, ChartColumn, House, Info } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home", icon: House },
  { href: "/about", label: "About", icon: Info },
  { href: "/statistics", label: "Statistics", icon: ChartColumn },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Brain className="size-8 text-primary" aria-hidden />
          <span className="text-lg font-bold sm:text-xl">
            Hallucination <span className="text-primary">Detector</span>
          </span>
        </Link>

        {/* Nav + theme toggle */}
        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="flex items-center gap-1" aria-label="Main">
            {NAV_LINKS.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                  )}
                >
                  <Icon className="size-4" aria-hidden />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
