import { ChartColumn, LoaderCircle, Search } from "lucide-react";

import { PanelHeader } from "@/components/home/panel-header";
import { Card } from "@/components/ui/card";

export type AnalysisStatus = "idle" | "analyzing" | "complete";

interface ResultCardProps {
  status: AnalysisStatus;
}

/** Output panel — shows placeholder, spinner, or result depending on status. */
export function ResultCard({ status }: ResultCardProps) {
  return (
    <Card className="relative overflow-hidden gap-5 border-violet-200 bg-violet-50/70 px-4 py-6 sm:px-6 md:px-8 dark:border-violet-400/20 dark:bg-violet-400/10">
      {/* Watermark magnifier */}
      <Search
        aria-hidden
        strokeWidth={1.5}
        className="absolute -right-8 -bottom-10 size-48 text-violet-300/40 dark:text-violet-300/15"
      />

      <PanelHeader
        icon={ChartColumn}
        title="Result"
        description="Your analysis result will appear here..."
        className="relative"
      />

      {status === "analyzing" && (
        <p className="relative flex items-center gap-2 text-sm font-medium text-primary">
          <LoaderCircle className="size-4 animate-spin" aria-hidden />
          Analyzing the response...
        </p>
      )}

      {status === "complete" && (
        <p className="relative rounded-lg border border-violet-200/70 bg-background/80 p-4 text-sm text-muted-foreground dark:border-violet-400/20">
          Analysis complete. No result source is connected yet — add your detection API call to
          display the verdict here.
        </p>
      )}
    </Card>
  );
}
