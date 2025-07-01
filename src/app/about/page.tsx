import ComingSoon from "@/components/commons/ComingSoon";
import Container from "@/components/commons/Container";
import React from "react";
import Statistic from "./(container)/Statistic";
import OurStory from "./(container)/OurStory";
import PhilosophyLogo from "./(container)/PhilosophyLogo";
import VisionMission from "./(container)/VisionMission";
import EterionMap from "./(container)/EterionMap";

export default function About() {
  return (
    <Container as="main">

      {/* SECTION PAGE */}
      <Statistic />
      <OurStory />
      <PhilosophyLogo />
      <VisionMission />
      <EterionMap />
    </Container>
  );
}
