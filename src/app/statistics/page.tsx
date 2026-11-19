
import type { Metadata } from "next";

import { Card } from "@/components/ui/card";
import {
  Activity,
  Brain,
  Database,
  FlaskConical,
  CheckCircle2,
  Clock,
  Target,
  ChartNoAxesCombined,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Statistics | Hallucination Detector",
  description: "Research progress and experiment overview.",
};

const experiments = [
 {
  name: "Experiment A",
  description:
    "RAGTruth + HaluEval-General → HaluEval-Dialogue",
  status: "Test Evaluated",

  validation: {
    accuracy: "75.77%",
    precision: "69.65%",
    recall: "66.50%",
    f1: "68.04%",
    rocAuc: "81.16%",
  },

  test: {
    accuracy: "49.91%",
    precision: "50.34%",
    recall: "1.50%",
    f1: "2.91%",
    rocAuc: "Not available",
  },

  confusionMatrix: {
    tn: 4914,
    fp: 74,
    fn: 4933,
    tp: 75,
  },

  bestCheckpoint: "checkpoint-6777",
},
  {
    name: "Experiment B",
    description: "Transformer-based fine-tuning",
    status: "Completed",
  },
  {
    name: "Experiment C",
    description: "Additional model experiment",
    status: "Completed",
  },
];

const researchStages = [
  {
    title: "Dataset Preparation",
    description: "Collecting, cleaning, and combining datasets.",
    status: "Completed",
  },
  {
    title: "Model Training",
    description: "Training and fine-tuning detection models.",
    status: "Completed",
  },
  {
    title: "Experiment Evaluation",
    description: "Evaluating models using classification metrics.",
    status: "Completed",
  },
  {
    title: "Cross-Dataset Evaluation",
    description: "Testing generalization across different datasets.",
    status: "In Progress",
  },
  {
    title: "Final Model Selection",
    description: "Selecting the best-performing model.",
    status: "Upcoming",
  },
];

const datasets = [
  "RAGTruth",
  "HaluEval-Dialogue",
  "HaluEval-General",
  "AuthenHallu",
  "FaithBench",
];

export default function StatisticsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">

      {/* Header */}
      <section className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400">
          <Activity className="size-4" />
          Research Overview
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Research Statistics & Progress
        </h1>

        <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
          Explore our research progress, model experiments,
          datasets, and evaluation process for developing
          a unified hallucination detection model.
        </p>
      </section>

      {/* Research Status */}
      <Card className="mb-8 gap-3 border-violet-200 bg-violet-50/50 p-5 dark:border-violet-900 dark:bg-violet-950/20 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">
              Current Research Status
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Model experiments are ongoing.
            </p>
          </div>

          <span className="rounded-full bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-700 dark:bg-violet-900 dark:text-violet-300">
            Research Ongoing
          </span>
        </div>
      </Card>

      {/* Overview Cards */}
      <section className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <OverviewCard
          icon={FlaskConical}
          title="Experiments"
          value="03"
          description="Experiments conducted"
        />

        <OverviewCard
          icon={Database}
          title="Datasets"
          value="05"
          description="Research datasets identified"
        />

        <OverviewCard
          icon={Brain}
          title="Final Model"
          value="Pending"
          description="Selection is in progress"
        />

        <OverviewCard
          icon={Target}
          title="Research Goal"
          value="01"
          description="Unified detection model"
        />

      </section>

      {/* Experiment Overview */}
      <section className="mb-12">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
            <FlaskConical className="size-5" />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Model Experiments
            </h2>
            <p className="text-sm text-muted-foreground">
              Overview of conducted experiments
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {experiments.map((experiment) => (
            <Card
              key={experiment.name}
              className="gap-4 p-5 transition-colors hover:border-violet-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
                  <Brain className="size-5" />
                </div>

                <span className="flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700 dark:bg-green-950 dark:text-green-400">
                  <CheckCircle2 className="size-3.5" />
                  {experiment.status}
                </span>
              </div>

              <div>
                <h3 className="font-semibold">
                  {experiment.name}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {experiment.description}
                </p>
              </div>

              <div className="border-t pt-3 text-xs text-muted-foreground">
                Results are under review
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Dataset Overview */}
      <section className="mb-12">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
            <Database className="size-5" />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Dataset Overview
            </h2>
            <p className="text-sm text-muted-foreground">
              Datasets identified for this research
            </p>
          </div>
        </div>

        <Card className="gap-4 p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">
              Research Datasets
            </h3>
            <span className="text-sm text-muted-foreground">
              {datasets.length} datasets
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {datasets.map((dataset) => (
              <div
                key={dataset}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
                  <Database className="size-4" />
                </div>

                <span className="text-sm font-medium">
                  {dataset}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            Dataset inclusion and evaluation are subject to
            the final experimental setup.
          </p>
        </Card>
      </section>

      {/* Research Workflow */}
      <section className="mb-12">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
            <ChartNoAxesCombined className="size-5" />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Research Progress
            </h2>
            <p className="text-sm text-muted-foreground">
              Stages of the research process
            </p>
          </div>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            {researchStages.map((stage, index) => {
              const completed = stage.status === "Completed";
              const inProgress = stage.status === "In Progress";

              return (
                <div key={stage.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full ${
                        completed
                          ? "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400"
                          : inProgress
                            ? "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {completed ? (
                        <CheckCircle2 className="size-5" />
                      ) : inProgress ? (
                        <Activity className="size-5" />
                      ) : (
                        <Clock className="size-5" />
                      )}
                    </div>

                    {index !== researchStages.length - 1 && (
                      <div className="mt-2 w-px flex-1 bg-border" />
                    )}
                  </div>

                  <div className="flex-1 pb-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-semibold">
                        {stage.title}
                      </h3>

                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          completed
                            ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400"
                            : inProgress
                              ? "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-400"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {stage.status}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </section>

      {/* Evaluation Metrics Preview */}
      <section>
        <Card className="gap-3 border-dashed p-6 sm:p-8">
          <div className="flex size-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
            <ChartNoAxesCombined className="size-6" />
          </div>

          <h2 className="text-xl font-bold">
            Final Model Evaluation
          </h2>

          <p className="max-w-2xl leading-7 text-muted-foreground">
            Accuracy, Precision, Recall, F1-score, ROC-AUC,
            and Confusion Matrix will be presented here after
            completing the experiments and selecting the
            final model.
          </p>

          <div className="flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400">
            <Clock className="size-4" />
            Awaiting final model selection
          </div>
        </Card>
      </section>

      {/* Footer */}
      <div className="mt-12 border-t pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          A Unified Response-Level Hallucination Detection Model
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Final Year Research Project
        </p>
      </div>

    </main>
  );
}

function OverviewCard({
  icon: Icon,
  title,
  value,
  description,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <Card className="gap-3 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {title}
        </p>

        <Icon className="size-5 text-violet-600 dark:text-violet-400" />
      </div>

      <h3 className="text-2xl font-bold">{value}</h3>

      <p className="text-xs text-muted-foreground">
        {description}
      </p>
    </Card>
  );
}
