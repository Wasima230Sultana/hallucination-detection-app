import type { Metadata } from "next";

import { Card } from "@/components/ui/card";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Card className="mx-auto max-w-2xl gap-2 px-6 py-8">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="text-muted-foreground">
          Placeholder — content for the About page is coming soon.
        </p>
      </Card>
    </div>
  );
}
