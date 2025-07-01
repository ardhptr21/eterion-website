import LogoDisplay from "@/components/about/logo-display/LogoDisplay";
import SectionHeader from "@/components/commons/section-header-right/SectionHeaderRight";

export default function PhilosophyLogo() {
    return (
        <section>
            <SectionHeader
                title="Our Philosophy"
                subtitle="The Way Behind Eterion"
            />
            <LogoDisplay />
        </section>
    );
}