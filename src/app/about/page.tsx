"use client";
import EterionMap from "./(container)/EterionMap";
import OurStory from "./(container)/OurStory";
import PhilosophyLogo from "./(container)/PhilosophyLogo";
import Statistic from "./(container)/Statistic";
import VisionMission from "./(container)/VisionMission";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const sections = document.querySelectorAll(".about-section");
    sections.forEach((section, idx) => {
      section.classList.add("opacity-0", "translate-y-8");
      setTimeout(() => {
        section.classList.add("transition-all", "duration-700", "ease-out");
        section.classList.remove("opacity-0", "translate-y-8");
      }, 200 + idx * 200);
    });
  }, []);
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#1a1440] via-[#2e1e5c] to-[#0e0d1b] px-2 sm:px-0 py-24 sm:py-32 overflow-x-hidden">
      <section className="about-section max-w-6xl mx-auto">
        <Statistic />
      </section>
      <div className="w-full flex justify-center my-12">
        <div className="h-1 w-32 bg-gradient-to-r from-accent via-white/30 to-primary rounded-full blur-sm opacity-70"></div>
      </div>
      <section className="about-section max-w-6xl mx-auto">
        <OurStory />
      </section>
      <div className="w-full flex justify-center my-12">
        <div className="h-1 w-32 bg-gradient-to-r from-primary via-white/30 to-accent rounded-full blur-sm opacity-70"></div>
      </div>
      <section className="about-section max-w-6xl mx-auto">
        <PhilosophyLogo />
      </section>
      <div className="w-full flex justify-center my-12">
        <div className="h-1 w-32 bg-gradient-to-r from-accent via-white/30 to-primary rounded-full blur-sm opacity-70"></div>
      </div>
      <section className="about-section max-w-6xl mx-auto">
        <VisionMission />
      </section>
      <div className="w-full flex justify-center my-12">
        <div className="h-1 w-32 bg-gradient-to-r from-primary via-white/30 to-accent rounded-full blur-sm opacity-70"></div>
      </div>
      <section className="about-section max-w-6xl mx-auto">
        <EterionMap />
      </section>
    </main>
  );
}
