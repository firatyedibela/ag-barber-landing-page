import { motion } from 'motion/react';

type StatusIndicatorProps = {
  color: string;
  shadow: string;
  text: string;
};

export const StatusIndicator = ({
  color,
  shadow,
  text,
}: StatusIndicatorProps) => {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      viewport={{ once: true }}
      className="flex items-center gap-2"
    >
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color, boxShadow: shadow }}
      ></div>
      <span style={{ color }}>{text}</span>
    </motion.div>
  );
};
