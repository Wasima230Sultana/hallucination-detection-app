"use client";

import { useEffect, useRef, useState } from "react";

import { AnalyzeCard } from "@/components/home/analyze-card";
import { ResultCard, type AnalysisStatus } from "@/components/home/result-card";

/** Holds the shared state for the Analyze + Result panels. */
export function Analyzer() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<AnalysisStatus>("idle");
  const timerRef = useRef<number | null>(null);

  // Clean up the demo timer if the page unmounts.
  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  function handleAnalyze() {
    if (status === "analyzing" || text.trim().length === 0) return;

    setStatus("analyzing");

    // TODO: replace this demo timer with a real API call to the detection model.
    timerRef.current = window.setTimeout(() => setStatus("complete"), 900);
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
      <AnalyzeCard
        value={text}
        onChange={setText}
        onSubmit={handleAnalyze}
        isAnalyzing={status === "analyzing"}
      />
      <ResultCard status={status} />
    </div>
  );
}
