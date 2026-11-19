import { Bot, ShieldCheck, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-violet-100/70 via-background to-background">
      {/* Decorative background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-violet-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 left-1/4 size-72 rounded-full bg-indigo-200/30 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-14 pb-16 sm:px-6 lg:flex-row lg:items-center lg:pt-20">
        {/* Copy */}
        <div className="max-w-2xl flex-1">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Detect <span className="text-primary">Hallucinations</span>
            <br />
            in LLM Responses
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Check if an AI response is factually grounded or potentially hallucinated using our
            unified model trained on diverse datasets.
          </p>
        </div>

        {/* Decorative robot illustration */}
        <div
          aria-hidden
          className="relative hidden size-64 shrink-0 items-center justify-center self-end lg:flex"
        >
          <span className="absolute inset-4 rounded-full bg-gradient-to-br from-violet-200/90 to-violet-100/50 blur-xl" />
          <Bot className="relative size-32 text-violet-600" strokeWidth={1.25} />
          <span className="absolute right-2 bottom-4 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow-xl shadow-violet-500/40">
            <ShieldCheck className="size-8" />
          </span>
          <Sparkles className="absolute top-2 right-8 size-6 text-violet-400" />
        </div>
      </div>
    </section>
  );
}
