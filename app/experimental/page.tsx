import { ExperimentalHero } from "@/components/experimental/ExperimentalHero";
import { ExperimentalPortfolioGrid } from "@/components/experimental/ExperimentalPortfolioGrid";
import { ExperimentalProcessStrip } from "@/components/experimental/ExperimentalProcessStrip";
import { ExperimentalMotionStrip } from "@/components/experimental/ExperimentalMotionStrip";
import { ExperimentalTestimonialsStrip } from "@/components/experimental/ExperimentalTestimonialsStrip";
import { ExperimentalContactCTA } from "@/components/experimental/ExperimentalContactCTA";

// PREA-314 quality iteration — isolated from production /
// Design spec: PREA-309-EXPERIMENTAL-LAYOUT-PROPOSAL.md
export default function ExperimentalPage() {
  return (
    <main className="flex flex-col w-full bg-black min-h-screen">
      <ExperimentalHero />
      <ExperimentalPortfolioGrid />
      <ExperimentalProcessStrip />
      <ExperimentalMotionStrip />
      <ExperimentalTestimonialsStrip />
      <ExperimentalContactCTA />
    </main>
  );
}
