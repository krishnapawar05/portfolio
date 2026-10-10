import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-bg py-16 md:py-24 relative overflow-hidden border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="EXPERIENCE"
          heading={
            <>
              Where I&apos;ve{" "}
              <span className="font-display italic font-normal">built and learned.</span>
            </>
          }
          description="Practical internship and structured training where I applied engineering fundamentals to real software modules."
        />

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-stroke/60 space-y-12 sm:space-y-16">
          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-[#89AACC] group-hover:scale-125 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#89AACC] m-auto mt-0.5" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-surface/40 hover:bg-surface border border-stroke transition-all duration-300 hover:border-stroke/80 hover:shadow-xl hover:shadow-black/20">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-text-primary tracking-tight">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[#89AACC] font-mono mt-0.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{item.organization}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted">
                    <span className="inline-flex items-center gap-1.5 bg-bg px-3 py-1 rounded-full border border-stroke">
                      <Calendar className="w-3 h-3 text-[#89AACC]" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-bg px-3 py-1 rounded-full border border-stroke">
                      <MapPin className="w-3 h-3 text-[#89AACC]" />
                      {item.locationOrFormat}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-primary/90 leading-relaxed font-normal mb-6">
                  {item.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2.5 mb-6">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted">
                      <CheckCircle2 className="w-4 h-4 text-[#89AACC] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-stroke/40">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted bg-bg px-2.5 py-1 rounded-full border border-stroke"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
