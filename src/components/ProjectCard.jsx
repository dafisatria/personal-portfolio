import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProjectCard = ({
  title,
  description,
  techStack,
  image,
  delay = 0,
  onView,
}) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay }}
      className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 hover:shadow-lg hover:shadow-darkYellow transition-all duration-300 flex flex-col h-full min-h-[350px]"
    >
      {image?.[0] && (
        <img src={image[0]} alt={title} className="w-full h-48 object-cover" />
      )}

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-darkBlue mb-2">{title}</h3>
        <p className="text-black mb-2">{description}</p>
        <div className="text-xs text-blue mb-3">
          {techStack.join(" • ")}
        </div>
        <div className="mt-auto pt-2">
          <button
            onClick={onView}
            className="inline-block text-sm text-blue hover:text-darkBlue font-medium"
          >
            View Project →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
