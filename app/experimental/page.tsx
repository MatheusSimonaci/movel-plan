import { HeroAtelier } from "@/components/sections/HeroAtelier";
import { PortfolioAtelier } from "@/components/sections/PortfolioAtelier";
import { ContactAtelier } from "@/components/sections/ContactAtelier";

export default function ExperimentalPage() {
  return (
    <main className="flex flex-col w-full">
      <HeroAtelier />
      <PortfolioAtelier />
      <ContactAtelier />
    </main>
  );
}
