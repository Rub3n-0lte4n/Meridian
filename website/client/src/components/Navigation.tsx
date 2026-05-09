/**
 * MERIDIAN — Navigation Component
 * Design: Fixed top nav, minimal, wordmark left, links right
 * Colors: Transparent → Bone on scroll, Obsidian text, Brass CTA
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHeroPage = location === "/" || location === "/enroll";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/program", label: "Program" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-[#F2EEE5] border-b border-[#E5E1D7]"
          : isHeroPage
          ? "bg-transparent"
          : "bg-[#F2EEE5] border-b border-[#E5E1D7]"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/manus-storage/meridian_logomark_b7417082.svg"
              alt="Meridian logomark"
              className="h-8 w-8"
            />
            <img
              src="/manus-storage/meridian_wordmark_fba2a4f3.svg"
              alt="Meridian"
              className={`h-5 transition-opacity duration-300 ${
                scrolled || !isHeroPage || menuOpen ? "opacity-100" : "opacity-0 lg:opacity-100"
              }`}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`meridian-eyebrow text-[11px] transition-colors duration-200 hover:text-[#C9A961] ${
                  location === link.href
                    ? "text-[#C9A961]"
                    : scrolled || !isHeroPage
                    ? "text-[#0B0C0E]"
                    : "text-[#F2EEE5]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/enroll"
              className="meridian-cta text-[11px] px-5 py-2.5 inline-block"
            >
              Enroll — $1,500
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-[#0B0C0E] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[#0B0C0E] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[#0B0C0E] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-64 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`meridian-eyebrow text-[11px] ${
                  location === link.href ? "text-[#C9A961]" : "text-[#0B0C0E]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/enroll"
              className="meridian-cta text-[11px] px-5 py-2.5 inline-block w-fit"
            >
              Enroll — $1,500
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
