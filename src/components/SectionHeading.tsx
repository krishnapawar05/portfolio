import React from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  heading: ReactNode;
  description?: string;
  rightElement?: ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  heading,
  description,
  rightElement,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className={`flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 ${className}`}
    >
      <div>
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
            {eyebrow}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight font-light mb-3">
          {heading}
        </h2>

        {/* Description */}
        {description && (
          <p className="text-muted text-sm md:text-base max-w-xl font-normal leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Optional right-aligned CTA or badge */}
      {rightElement && <div className="shrink-0">{rightElement}</div>}
    </motion.div>
  );
};
