import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Sparkles, Eye } from "lucide-react";
import type { Project } from "../data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onOpenModal,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 3D Perspective Tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7; // max 7 deg
    const rotateY = ((x - centerX) / centerX) * 7;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="perspective-1000 h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onOpenModal(project)}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        }}
        className="group relative h-full flex flex-col justify-between overflow-hidden bg-surface/50 hover:bg-surface/80 border border-stroke hover:border-[#89AACC]/40 rounded-3xl transition-colors duration-300 shadow-xl shadow-black/30 cursor-pointer focus-within:ring-2 focus-within:ring-[#89AACC] outline-none"
      >
        {/* Specular lighting sheen overlay based on tilt */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: isHovered
              ? `radial-gradient(circle at ${50 + tilt.y * 3}% ${
                  50 - tilt.x * 3
                }%, rgba(137, 170, 204, 0.12), transparent 70%)`
              : "none",
          }}
        />

        {/* Card Header & 16:9 Image Container */}
        <div>
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg/80 border-b border-stroke/60">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Halftone / scanline overlay */}
            <div
              className="absolute inset-0 halftone-overlay opacity-15 mix-blend-multiply pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, #000 1.2px, transparent 1.2px)",
                backgroundSize: "4px 4px",
              }}
            />

            {/* Gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Top Badges overlay */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between gap-2 flex-wrap">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#89AACC] px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                {project.category}
              </span>

              {project.badge && (
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-amber-300 px-3 py-1 rounded-full bg-amber-950/60 backdrop-blur-md border border-amber-500/30">
                  <Award className="w-3 h-3" />
                  {project.badge}
                </span>
              )}
            </div>

            {project.statusBadge && (
              <div className="absolute bottom-3 right-4 z-10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/80 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  {project.statusBadge}
                </span>
              </div>
            )}
          </div>

          {/* Card Text Content */}
          <div className="p-6 sm:p-7 flex flex-col gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-light text-text-primary tracking-tight group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-[#89AACC]/80 font-mono mt-0.5">
                {project.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal line-clamp-3">
              {project.description}
            </p>

            {/* Technologies Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] sm:text-[11px] font-mono text-muted/90 bg-bg/80 px-2.5 py-1 rounded-full border border-stroke/70"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="text-[10px] font-mono text-muted/60 px-2 py-1">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom-anchored Action Row */}
        <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-stroke/40 mt-4 pt-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(project);
            }}
            className="relative group/btn inline-flex items-center gap-1.5 text-xs font-medium text-text-primary hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#89AACC] outline-none rounded-full px-3 py-1.5 bg-bg border border-stroke hover:border-[#89AACC]/50"
            aria-label={`View details of ${project.title}`}
          >
            <Eye className="w-3.5 h-3.5 text-[#89AACC]" />
            <span>Explore Project</span>
          </button>

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-xs font-mono text-[#89AACC] hover:text-white transition-colors py-1 px-2.5 rounded-full hover:bg-stroke/40"
              aria-label={`Open live demo for ${project.title}`}
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {!project.liveDemoUrl && (
            <span className="text-[11px] font-mono text-muted/50 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#89AACC]/40" />
              Verified Architecture
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
