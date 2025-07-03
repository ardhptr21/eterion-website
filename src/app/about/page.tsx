import EterionMap from "./(container)/EterionMap";
import OurStory from "./(container)/OurStory";
import PhilosophyLogo from "./(container)/PhilosophyLogo";
import Statistic from "./(container)/Statistic";
import VisionMission from "./(container)/VisionMission";

export default function About() {
  return (
    <main>
      <Statistic />
      <OurStory />
      <PhilosophyLogo />
      <VisionMission />
      <EterionMap />
    </main>
  );
}
