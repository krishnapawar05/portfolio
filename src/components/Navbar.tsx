import React, { useState, useEffect } from "react";
import { ArrowUpRight, Download, Menu, X, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", target: "home" },
    { name: "Projects", target: "projects" },
    { name: "About", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Experience", target: "experience" },
    { name: "Contact", target: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = ["home", "projects", "about", "skills", "experience", "achievements", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id === "achievements" ? "experience" : id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setActiveSection(target);
    setMobileMenuOpen(false);
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const emailHref = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${PORTFOLIO_DATA.personal.emailSubject}`;

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none"
      >
        <div
          className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-3 rounded-full backdrop-blur-xl border border-white/10 bg-surface/90 px-2 sm:px-3 py-1.5 sm:py-2 transition-all duration-300 max-w-full ${
            scrolled
              ? "shadow-xl shadow-black/60 border-stroke/80 bg-surface/95"
              : "shadow-md shadow-black/20"
          }`}
        >
          {/* Logo Monogram: KP */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "home")}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center p-[1.5px] transition-transform duration-300 hover:scale-110 cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-[#89AACC] outline-none"
            aria-label="Krishna G. Pawar Home"
          >
            <div
              className={`absolute inset-0 rounded-full transition-all duration-500 ${
                logoHovered
                  ? "bg-gradient-to-l from-[#89AACC] to-[#4E85BF] rotate-180"
                  : "bg-gradient-to-r from-[#89AACC] to-[#4E85BF]"
              }`}
            />
            <div className="relative w-full h-full bg-bg rounded-full flex items-center justify-center">
              <span className="font-display italic text-xs sm:text-[13px] text-text-primary leading-none select-none">
                {PORTFOLIO_DATA.personal.monogram}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="w-px h-4 bg-stroke mx-1 shrink-0" />
            {navLinks.map((link) => {
              const isActive = activeSection === link.target;
              return (
                <a
                  key={link.name}
                  href={`#${link.target}`}
                  onClick={(e) => handleLinkClick(e, link.target)}
                  className={`text-xs xl:text-sm rounded-full px-3 py-1.5 transition-all duration-200 cursor-pointer font-medium whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#89AACC] outline-none ${
                    isActive
                      ? "text-text-primary bg-stroke/70 shadow-sm"
                      : "text-muted hover:text-text-primary hover:bg-stroke/40"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action Group: Get Resume, Socials, Say Hi */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="hidden sm:block w-px h-4 bg-stroke mx-0.5 shrink-0" />

            {/* Quick Social Icons (Desktop) */}
            <div className="hidden md:flex items-center gap-1">
              <a
                href={PORTFOLIO_DATA.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-7 h-7 rounded-full flex items-center justify-center text-muted hover:text-text-primary hover:bg-stroke/40 transition-colors focus-visible:ring-2 focus-visible:ring-[#89AACC] outline-none"
              >
                <GithubIcon size={14} />
              </a>
              <a
                href={PORTFOLIO_DATA.socials[1].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-7 h-7 rounded-full flex items-center justify-center text-muted hover:text-text-primary hover:bg-stroke/40 transition-colors focus-visible:ring-2 focus-visible:ring-[#89AACC] outline-none"
              >
                <LinkedinIcon size={14} />
              </a>
            </div>

            {/* Primary Get Resume Button */}
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download={PORTFOLIO_DATA.personal.resumeFilename}
              aria-label="Download Krishna G. Pawar's Resume (PDF)"
              className="relative group rounded-full text-xs font-medium px-3 sm:px-3.5 py-1.5 inline-flex items-center gap-1.5 transition-all duration-300 hover:scale-105 active:scale-95 bg-[#4E85BF]/15 border border-[#89AACC]/40 text-[#89AACC] hover:bg-[#4E85BF]/25 hover:text-white shrink-0 focus-visible:ring-2 focus-visible:ring-[#89AACC] outline-none"
            >
              <Download className="w-3 h-3 transition-transform duration-200 group-hover:-translate-y-0.5" />
              <span>Get Resume</span>
            </a>

            {/* "Say hi" CTA button invoking email compose */}
            <a
              href={emailHref}
              aria-label="Say hi — Email Krishna G. Pawar"
              className="relative group rounded-full text-xs px-3 sm:px-3.5 py-1.5 inline-flex items-center justify-center transition-all duration-200 active:scale-95 shrink-0 focus-visible:ring-2 focus-visible:ring-[#89AACC] outline-none"
            >
              <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[0.5px]" />
              <span className="relative z-10 inline-flex items-center gap-1 bg-surface rounded-full px-2.5 py-0.5 text-text-primary font-medium border border-stroke/60 group-hover:border-transparent">
                <span>Say hi</span>
                <ArrowUpRight className="w-3 h-3 text-[#89AACC] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-text-primary hover:bg-stroke/40 transition-colors focus-visible:ring-2 focus-visible:ring-[#89AACC] outline-none ml-0.5"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Accessible Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-2xl flex flex-col justify-start pt-24 px-6 animate-in fade-in duration-200 lg:hidden"
        >
          <div className="flex flex-col gap-2 max-w-sm mx-auto w-full">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted mb-2 px-3">
              Navigation
            </span>

            {navLinks.map((link) => {
              const isActive = activeSection === link.target;
              return (
                <a
                  key={link.name}
                  href={`#${link.target}`}
                  onClick={(e) => handleLinkClick(e, link.target)}
                  className={`text-base py-3 px-4 rounded-2xl font-medium transition-colors ${
                    isActive
                      ? "text-text-primary bg-stroke/60 border border-stroke"
                      : "text-muted hover:text-text-primary hover:bg-surface/60"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="h-px bg-stroke/60 my-4" />

            <div className="flex flex-col gap-3">
              {/* Mobile Get Resume */}
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download={PORTFOLIO_DATA.personal.resumeFilename}
                className="w-full py-3.5 px-4 rounded-2xl accent-gradient text-white text-sm font-medium flex items-center justify-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              {/* Mobile Say hi */}
              <a
                href={emailHref}
                className="w-full py-3.5 px-4 rounded-2xl bg-surface border border-stroke text-text-primary text-sm font-medium flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#89AACC]" />
                <span>Say hi ({PORTFOLIO_DATA.personal.email})</span>
              </a>

              {/* Mobile Socials */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href={PORTFOLIO_DATA.socials[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-surface border border-stroke text-muted hover:text-text-primary"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={PORTFOLIO_DATA.socials[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-surface border border-stroke text-muted hover:text-text-primary"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
