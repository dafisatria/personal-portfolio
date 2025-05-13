import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import SkillCard from "../components/SkillCard";
import skills from "../data/skills";

function SkillsSection() {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, {
    amount: 0.2,
    once: false,
  });

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.setAttribute(
        "data-section-visible",
        isInView ? "true" : "false"
      );
    }
  }, [isInView]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen px-6 py-8 md:py-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl text-darkBlue font-bold mb-7">
          Skills
        </h2>
        <div
          className={`space-y-7 transition-opacity duration-500 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {skills.map((group, i) => (
            <div key={i}>
              <h3 className="text-xl text-darkBlue font-semibold mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-7 justify-items-center">
                {group.items.map((skill, index) => (
                  <SkillCard
                    key={index}
                    {...skill}
                    delay={isInView ? index * 0.1 : 0}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
