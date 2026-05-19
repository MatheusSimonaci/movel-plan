import { HeroMovelPlan } from "@/components/sections/HeroMovelPlan";
import { TrustStats, Differentiators } from "@/components/sections/TrustAndFeatures";
import { PortfolioMovelPlan } from "@/components/sections/PortfolioMovelPlan";
import { Process } from "@/components/sections/Process";
import { Testimonials, Contact } from "@/components/sections/Contact";
import { movelPlanContent } from "@/lib/content/movel-plan";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-black min-h-screen">
      <HeroMovelPlan 
        content={movelPlanContent.hero} 
        fallbackImageUrl="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
      />
      <TrustStats stats={movelPlanContent.trustStats} />
      <Differentiators items={movelPlanContent.differentiators} />
      <PortfolioMovelPlan />
      <Process steps={movelPlanContent.process} />
      <Testimonials />
      <Contact />
    </main>
  );
}
