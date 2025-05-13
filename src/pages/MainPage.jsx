import React from "react";
import { Helmet } from "react-helmet-async";
import SkillsSection from "./SkillsSection";
import Footer from "../components/Footer";
import ProjectsSection from "./ProjectsSection";
import HomeSection from "./HomeSection";

function MainPage() {
  return (
    <>
      <Helmet>
        <title>Main Page | Hanief Dafi Satria</title>
      </Helmet>
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default MainPage;
