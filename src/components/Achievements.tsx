import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Landmark } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="bg-bg py-16 md:py-24 relative overflow-hidden border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="RECOGNITION"
          heading={
            <>
              Milestones &amp;{" "}
              <span className="font-display italic font-normal">achievements.</span>
            </>
          }
          description="Recognition received for innovative technology prototypes and competitive engineering."
        />

        {/* 2 Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PORTFOLIO_DATA.achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative p-8 sm:p-10 rounded-3xl bg-surface/40 hover:bg-surface border border-stroke transition-all duration-300 hover:border-stroke/80 hover:shadow-xl hover:shadow-black/20 flex flex-col justify-between"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#89AACC]/5 rounded-full blur-2xl group-hover:bg-[#89AACC]/15 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header Icon & Status Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-bg border border-stroke flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform duration-300">
                    {idx === 0 ? <Trophy className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                  </div>

                  {item.statusBadge && (
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/20">
                      {item.statusBadge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-light text-text-primary tracking-tight mb-3">
                  {item.title}
                </h3>

                {/* Context Description */}
                <p className="text-sm text-muted leading-relaxed font-normal mb-6">
                  {item.context}
                </p>
              </div>

              {/* Venue / Organizer pill */}
              <div className="pt-4 border-t border-stroke/40 flex items-center gap-2 text-xs font-mono text-[#89AACC]">
                <Landmark className="w-3.5 h-3.5" />
                <span>{item.venueOrOrganizer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
