import { Heart } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-4 py-6 text-center text-sm text-muted-foreground sm:flex-row sm:gap-6 sm:px-6">
        <p>
          A Unified Response-Level Hallucination Detection Model
          <span className="mx-2" aria-hidden>
            •
          </span>
          Research Project
          <span className="mx-2" aria-hidden>
            •
          </span>
          2026
        </p>
        <span className="hidden h-4 w-px bg-border sm:block" aria-hidden />
        <p className="flex items-center gap-1.5">
          <Heart className="size-4 fill-primary text-primary" aria-hidden />
          Built with Research &amp; Passion
        </p>
      </div>
    </footer>
  );
}
