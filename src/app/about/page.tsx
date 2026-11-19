
import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Target,
  Workflow,
  Database,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Hallucination Detector",
  description:
    "Learn about our unified LLM hallucination detection research project.",
};

const features = [
  {
    icon: Brain,
    title: "AI-Powered Detection",
    description:
      "Uses a fine-tuned transformer model to identify potentially hallucinated information in AI-generated responses.",
  },
  {
    icon: Database,
    title: "Diverse Datasets",
    description:
      "Uses data from different datasets and tasks to help the model learn diverse hallucination patterns.",
  },
  {
    icon: Target,
    title: "Response-Level Analysis",
    description:
      "Analyzes an entire AI-generated response and predicts whether it is hallucinated or non-hallucinated.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable AI Research",
    description:
      "Aims to support the evaluation of AI-generated information and improve understanding of hallucination detection.",
  },
];

const steps = [
  {
    number: "01",
    title: "Enter a Response",
    description:
      "Paste an AI-generated response into the text area.",
  },
  {
    number: "02",
    title: "Analyze the Text",
    description:
      "The fine-tuned detection model processes the submitted response.",
  },
  {
    number: "03",
    title: "Get the Result",
    description:
      "The model predicts whether the response is hallucinated or non-hallucinated.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">

      {/* Page Heading */}
      <section className="mx-auto mb-12 max-w-3xl text-center">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
          <Brain className="size-8" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About Hallucination Detector
        </h1>

        <p className="mt-4 text-muted-foreground leading-7">
          Understanding AI-generated information is important.
          Our application aims to identify potentially false
          or unsupported information in responses generated
          by Large Language Models (LLMs).
        </p>
      </section>

      {/* Project Overview */}
      <Card className="mb-10 gap-3 border-violet-200 p-6 dark:border-violet-900 sm:p-8">
        <h2 className="text-xl font-bold">
          About the Project
        </h2>

        <p className="leading-7 text-muted-foreground">
          Large Language Models (LLMs) can generate human-like
          responses, but sometimes they produce information
          that is incorrect, misleading, or unsupported by
          available evidence. This problem is known as
          AI hallucination.
        </p>

        <p className="leading-7 text-muted-foreground">
          This project focuses on developing a Unified
          Response-Level Hallucination Detection Model.
          The model is trained using diverse LLM-generated
          responses from multiple datasets to learn different
          patterns of hallucination.
        </p>

        <p className="leading-7 text-muted-foreground">
          Users can submit an AI-generated response and
          receive a prediction indicating whether it is
          hallucinated or non-hallucinated.
        </p>
      </Card>

      {/* Research Objective */}
      <section className="mb-12">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950">
            <Target className="size-5" />
          </div>

          <h2 className="text-2xl font-bold">
            Research Objective
          </h2>
        </div>

        <Card className="gap-3 p-6 sm:p-8">
          <p className="leading-7 text-muted-foreground">
            The main objective of this research is to develop
            a hallucination detection model that can
            generalize across different datasets, tasks,
            and types of LLM-generated responses.
          </p>

          <div className="rounded-xl bg-violet-50 p-5 dark:bg-violet-950/40">
            <h3 className="mb-2 font-semibold text-violet-700 dark:text-violet-300">
              Our Research Question
            </h3>

            <p className="leading-7">
              How effectively can a hallucination detection
              model trained on diverse LLM-generated responses
              generalize to hallucinations in different
              generation settings and datasets?
            </p>
          </div>
        </Card>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="mb-5 text-2xl font-bold">
          Key Features
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="gap-3 p-6 transition-colors hover:border-violet-300"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
                  <Icon className="size-6" />
                </div>

                <h3 className="text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950">
            <Workflow className="size-5" />
          </div>

          <h2 className="text-2xl font-bold">
            How It Works
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.number} className="gap-3 p-6">
              <span className="text-3xl font-bold text-violet-600">
                {step.number}
              </span>

              <h3 className="font-semibold">
                {step.title}
              </h3>

              <p className="text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Important Note */}
      <Card className="gap-3 border-amber-200 bg-amber-50/50 p-6 dark:border-amber-900 dark:bg-amber-950/20">
        <div className="flex items-center gap-2">
          <Lightbulb className="size-5 text-amber-600" />
          <h2 className="font-semibold">
            Important Note
          </h2>
        </div>

        <p className="text-sm leading-6 text-muted-foreground">
          The model provides an automated prediction based
          on patterns learned during training. Its predictions
          are not a guarantee of factual correctness.
          Results should be interpreted as research-based
          indicators rather than absolute verification.
        </p>
      </Card>

      {/* Footer Text */}
      <p className="mt-10 text-center text-sm text-muted-foreground">
        A Unified Response-Level Hallucination Detection Model
        <br />
        Final Year Research Project
      </p>
    </main>
  );
}
