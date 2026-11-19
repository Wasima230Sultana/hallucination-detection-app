import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface PanelHeaderProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

/** Gradient icon + title + description — shared by the Analyze and Result panels. */
export function PanelHeader({ icon: Icon, title, description, className }: PanelHeaderProps) {
  return (
    <div className={cn("flex items-start gap-4", className)}>
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow-md shadow-violet-500/30">
        <Icon className="size-5" aria-hidden />
      </span>
      <div className="space-y-1">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}
