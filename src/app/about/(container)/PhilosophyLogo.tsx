import LogoDisplay from "@/components/about/logo-display/LogoDisplay";
import SectionHeader from "@/components/about/section-header/SectionHeader";
import SlidingPhilosophyCards from "@/components/about/sliding-philosophy-cards/SlidingPhilosophyCards";
import ColorPalette from "@/components/about/color-palette/ColorPalette";

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