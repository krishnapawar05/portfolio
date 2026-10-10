import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Download, ArrowUpRight } from "lucide-react";
import { VideoBackground } from "./VideoBackground";
import { PORTFOLIO_DATA } from "../data/portfolio";

const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

interface HeroProps {
  isReady?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isReady = true }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement | null>(null);

  // Rotating roles cycling every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PORTFOLIO_DATA.personal.rotatingRoles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance
  useEffect(() => {
    if (!isReady || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.0, stagger: 0.1 },
        0.3
      );
    }, heroRef);

    return () => ctx.revert();
  }, [isReady]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const emailHref = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${PORTFOLIO_DATA.personal.emailSubject}`;

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden text-center px-4 pt-28 pb-16"
    >
      {/* Background Video */}
      <VideoBackground src={HLS_URL} overlayOpacity="bg-black/40" />

      {/* Subtle 3D Ambient Light Cone */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#4E85BF]/10 via-[#89AACC]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content (centered, z-10) */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto my-auto">
        {/* Eyebrow */}
        <div className="blur-in text-[10px] sm:text-xs text-muted uppercase tracking-[0.3em] mb-6 font-medium">
          {PORTFOLIO_DATA.personal.eyebrow}
        </div>

        {/* Main Heading: Krishna G. Pawar */}
        <h1 className="name-reveal text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          {PORTFOLIO_DATA.personal.name}
        </h1>

        {/* Professional Headline */}
        <div className="blur-in text-lg sm:text-xl md:text-2xl text-text-primary font-light mb-2">
          {PORTFOLIO_DATA.personal.headline}
        </div>

        {/* Concise subline */}
        <div className="blur-in text-xs sm:text-sm text-muted/80 font-mono tracking-wide mb-4">
          {PORTFOLIO_DATA.personal.subline}
        </div>

        {/* Rotating Role Badge */}
        <div className="blur-in mb-6 h-8 flex items-center justify-center">
          <span
            key={roleIndex}
            className="font-display italic text-text-primary/90 animate-role-fade-in inline-block text-xl sm:text-2xl md:text-3xl"
          >
            {PORTFOLIO_DATA.personal.rotatingRoles[roleIndex]}
          </span>
        </div>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-muted max-w-[520px] mb-10 leading-relaxed font-normal">
          {PORTFOLIO_DATA.personal.description}
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* Primary CTA: Explore My Work */}
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="relative group rounded-full text-xs sm:text-sm font-medium px-6 sm:px-7 py-3 sm:py-3.5 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden shadow-lg shadow-black/40"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 p-[2px]" />
            <span className="relative z-10 inline-flex items-center justify-center rounded-full bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary px-6 sm:px-7 py-3 sm:py-3.5 -m-6 -my-3 -sm:m-7 -sm:my-3.5 transition-colors duration-300">
              Explore My Work
            </span>
          </button>

          {/* Secondary CTA: Get Resume */}
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            download={PORTFOLIO_DATA.personal.resumeFilename}
            className="relative group rounded-full text-xs sm:text-sm font-medium px-5 sm:px-6 py-3 sm:py-3.5 transition-all duration-300 hover:scale-105 active:scale-95 border border-[#89AACC]/40 bg-[#4E85BF]/10 text-text-primary hover:bg-[#4E85BF]/20 inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-[#89AACC]" />
            <span>Get Resume</span>
          </a>

          {/* Tertiary CTA: Let's Connect */}
          <a
            href={emailHref}
            className="relative group rounded-full text-xs sm:text-sm font-medium px-5 sm:px-6 py-3 sm:py-3.5 transition-all duration-300 hover:scale-105 active:scale-95 border border-stroke bg-bg text-muted hover:text-text-primary hover:border-stroke/80 inline-flex items-center gap-1.5"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#89AACC]" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator (bottom-center) */}
      <div
        onClick={() => scrollToSection("projects")}
        className="relative z-10 flex flex-col items-center gap-3 cursor-pointer pt-6 pb-2 opacity-80 hover:opacity-100 transition-opacity"
        role="button"
        tabIndex={0}
        aria-label="Scroll down to projects"
      >
        <span className="text-[10px] text-muted uppercase tracking-[0.2em] font-medium">
          SCROLL
        </span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 accent-gradient animate-scroll-down rounded-full" />
        </div>
      </div>
    </section>
  );
};
