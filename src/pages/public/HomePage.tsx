import { Hero } from "@/components/home/Hero";
import { PortalGrid } from "@/components/home/PortalGrid";
import { FeatureChecklist } from "@/components/home/FeatureChecklist";
import { StatsBar } from "@/components/home/StatsBar";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PortalGrid />
      <FeatureChecklist />
      <StatsBar />
      <CtaBanner />
    </>
  );
}
