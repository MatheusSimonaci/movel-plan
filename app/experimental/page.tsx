import { ExperimentalHero } from "@/components/experimental/ExperimentalHero";
import { ExperimentalPortfolioGrid } from "@/components/experimental/ExperimentalPortfolioGrid";
import { ExperimentalMotionStrip } from "@/components/experimental/ExperimentalMotionStrip";
import { ExperimentalContactCTA } from "@/components/experimental/ExperimentalContactCTA";

// PREA-310 experimental route — isolated from production /
// Design spec: PREA-309-EXPERIMENTAL-LAYOUT-PROPOSAL.md
export default function ExperimentalPage() {
  return (
    <main className="flex flex-col w-full bg-black min-h-screen">
      <ExperimentalHero />
      <ExperimentalPortfolioGrid />
      <ExperimentalMotionStrip />
      <ExperimentalContactCTA />
    </main>
  );
}
