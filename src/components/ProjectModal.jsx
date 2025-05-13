import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 30 },
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 500 : -500,
    opacity: 0,
    zIndex: 0,
  }),
};

const ProjectModal = ({ project, onClose }) => {
  const { title, detailDesc, techStack, image, link } = project;
  const [[currentIndex, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    // Kalkulasi index baru
    const newIndex =
      newDirection > 0
        ? (currentIndex + 1) % image.length
        : (currentIndex - 1 + image.length) % image.length;

    // Update state dengan index dan direction baru
    setPage([newIndex, newDirection]);
  };

  const hasLinks = link && Array.isArray(link) && link.length > 0;

  return (
    <motion.div
      className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50 mx-5"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-xl shadow-xl w-full max-w-5xl h-[90vh] overflow-y-auto relative"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center absolute top-2 right-2 bg-blue text-white hover:bg-darkBlue rounded-full shadow"
        >
          ✕
        </button>

        <h2 className="text-2xl text-darkBlue font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 mb-4">
          {/* Tombol kiri */}
          {image.length > 1 && (
            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 bg-blue text-white hover:bg-darkBlue p-2 rounded-full shadow z-10"
            >
              ◀
            </button>
          )}

          {/* Gambar dengan animasi */}
          <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.img
                key={currentIndex}
                src={image[currentIndex]}
                alt={`${title} ${currentIndex + 1}`}
                className="w-full max-h-[60vh] object-contain rounded absolute"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              />
            </AnimatePresence>
          </div>

          {/* Tombol kanan */}
          {image.length > 1 && (
            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 bg-blue text-white hover:bg-darkBlue p-2 rounded-full shadow z-10"
            >
              ▶
            </button>
          )}
        </div>

        {/* Indikator halaman */}
        {image.length > 1 && (
          <div className="flex justify-center gap-2 mb-4">
            {image.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage([idx, idx > currentIndex ? 1 : -1])}
                className={`w-2 h-2 rounded-full ${
                  idx === currentIndex ? "bg-darkBlue" : "bg-yellow"
                }`}
              />
            ))}
          </div>
        )}

        <p className="text-black text-justify mb-2">{detailDesc}</p>

        <div className="text-sm text-black mb-4">
          <div className="font-medium mb-1">Tech Stack:</div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-blue text-white px-3 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {hasLinks && (
          <div className="text-sm text-black mb-4">
            <div className="font-medium mb-1">Link:</div>
            <div className="flex flex-wrap gap-2">
              {link.map(({ label, url, icon }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue hover:bg-darkBlue text-white px-3 py-1 rounded-full text-xs font-medium transition-colors"
                >
                  {icon && <img src={icon} className="w-4 h-4" alt={label} />}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
