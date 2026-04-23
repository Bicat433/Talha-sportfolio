import { motion } from "framer-motion";

export default function HorizonLine({ className = "" }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent origin-left ${className}`}
    />
  );
}