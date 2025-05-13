import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import projects from "../data/projects";

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-8 md:py-16"
    >
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl text-darkBlue font-bold">Projects</h2>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-darkBlue px-4 py-2 text-sm font-medium transition-transform hover:scale-105"
          >
            Browse More
            <span className="text-lg">→</span>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              delay={index * 0.1}
              onView={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProjectsSection;
