import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SkillCard = ({ icon, name, level, delay = 0 }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col items-center justify-center p-2 w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 bg-white rounded-xl shadow-lg shadow-darkYellow"
    >
      <img src={icon} alt={name} className="w-12 h-12 mb-2" />
      <h3 className="text-sm md:text-base font-semibold text-center text-darkBlue">
        {name}
      </h3>
      <p className="text-xs md:text-sm text-black mt-1">{level}</p>
    </motion.div>
  );
};

export default SkillCard;
