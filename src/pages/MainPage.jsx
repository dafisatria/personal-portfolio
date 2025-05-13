import React from "react";
import SkillsSection from "./SkillsSection";
import Footer from "../components/Footer";
import ProjectsSection from "./ProjectsSection";
import HomeSection from "./HomeSection";

function MainPage() {
  return (
    <>
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default MainPage;
