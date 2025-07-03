import LogoDisplay from "../../../components/about/LogoDisplay";
import SectionHeader from "@/components/about/SectionHeader";
import SlidingPhilosophyCards from "../../../components/about/SlidingPhilosophyCards";
import ColorPalette from "@/components/about/ColorPalette";

export default function PhilosophyLogo() {
    return (
        <section>
            <SectionHeader />
            <LogoDisplay />
            <SlidingPhilosophyCards />
            <ColorPalette />
        </section>
    );
}