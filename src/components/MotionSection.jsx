import { motion } from "framer-motion";

const MotionSection = ({ id, children, className = "", delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: false, amount: 0.4 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
