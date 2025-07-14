import LogoDisplay from "../../../components/about/LogoDisplay";
import SectionHeader from "@/components/about/SectionHeader";
import SlidingPhilosophyCards from "../../../components/about/SlidingPhilosophyCards";
import ColorPalette from "@/components/about/ColorPalette";
import Container from "@/components/commons/Container";

export default function PhilosophyLogo() {
  return (
    <Container className="relative overflow-hidden">
      <SectionHeader />
      <LogoDisplay />
      <SlidingPhilosophyCards />
      <ColorPalette />
    </Container>
  );
}
