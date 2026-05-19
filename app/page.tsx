import { HeroMovelPlan } from "@/components/sections/HeroMovelPlan";
import { PortfolioMovelPlan } from "@/components/sections/PortfolioMovelPlan";
import { Contact } from "@/components/sections/Contact";
import { movelPlanContent } from "@/lib/content/movel-plan";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-black min-h-screen">
      <HeroMovelPlan 
        content={movelPlanContent.hero} 
        videoUrl="/assets/movel-plan/DYPtgxORg-Q.mp4"
        fallbackImageUrl="/assets/movel-plan/DYPtgxORg-Q-poster.webp"
      />
      
      {/* V1 Portfolio-First: TrustStats, Differentiators, Process and Testimonials removed */}
      
      <PortfolioMovelPlan />
      
      <Contact />
    </main>
  );
}
