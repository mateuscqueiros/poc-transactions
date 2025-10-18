import { motion } from "framer-motion";

export type MotionDivProps = {
  key: string;
  direction: number;
  children: React.ReactNode;
};

export function MotionDiv({ key, direction, children }: MotionDivProps) {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
