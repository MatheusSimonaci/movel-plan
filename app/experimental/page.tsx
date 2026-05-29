import dynamic from "next/dynamic";
import { ExperimentalHero } from "@/components/experimental/ExperimentalHero";

// Below-fold components are code-split via next/dynamic to defer JS evaluation
// and reduce initial main-thread blocking time (TBT) on mobile.
const ExperimentalPortfolioGrid = dynamic(() =>
  import("@/components/experimental/ExperimentalPortfolioGrid").then(
    (m) => m.ExperimentalPortfolioGrid
  )
);
const ExperimentalProcessStrip = dynamic(() =>
  import("@/components/experimental/ExperimentalProcessStrip").then(
    (m) => m.ExperimentalProcessStrip
  )
);
const ExperimentalMotionStrip = dynamic(() =>
  import("@/components/experimental/ExperimentalMotionStrip").then(
    (m) => m.ExperimentalMotionStrip
  )
);
const ExperimentalTestimonialsStrip = dynamic(() =>
  import("@/components/experimental/ExperimentalTestimonialsStrip").then(
    (m) => m.ExperimentalTestimonialsStrip
  )
);
const ExperimentalContactCTA = dynamic(() =>
  import("@/components/experimental/ExperimentalContactCTA").then(
    (m) => m.ExperimentalContactCTA
  )
);

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
