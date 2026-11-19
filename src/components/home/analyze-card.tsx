import { Play, Search } from "lucide-react";

import { PanelHeader } from "@/components/home/panel-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export const MAX_CHARS = 2000;

interface AnalyzeCardProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isAnalyzing: boolean;
}

/** Input panel: textarea + character counter + submit button. */
export function AnalyzeCard({ value, onChange, onSubmit, isAnalyzing }: AnalyzeCardProps) {
  const isDisabled = isAnalyzing || value.trim().length === 0;

  return (
    <Card className="gap-5 px-4 py-6 sm:px-6 md:px-8">
      <PanelHeader
        icon={Search}
        title="Analyze a Response"
        description="Paste the LLM response below to check for hallucinations."
      />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
        className="flex flex-col gap-4"
      >
        <div>
          <Textarea
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Enter the LLM response here..."
            maxLength={MAX_CHARS}
            rows={7}
            aria-label="LLM response"
            className="min-h-44 resize-y"
          />
          <p className="mt-1.5 text-right text-sm text-muted-foreground tabular-nums">
            {value.length} / {MAX_CHARS}
          </p>
        </div>

        <div>
          <Button type="submit" size="lg" disabled={isDisabled} className="h-12 rounded-lg px-7">
            <Play className="size-4 fill-current" aria-hidden />
            {isAnalyzing ? "Analyzing..." : "Check for Hallucination"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
