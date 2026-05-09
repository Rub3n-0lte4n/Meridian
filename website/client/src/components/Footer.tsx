/**
 * MERIDIAN — Footer Component
 * Design: Minimal editorial footer, Deep Meridian background
 * Brass eyebrows, Bone text, hairline rule at top
 */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F45] text-[#F2EEE5]">
      <div className="container py-16 lg:py-20">
        {/* Top rule */}
        <div className="meridian-rule mb-12 opacity-20" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src="/manus-storage/meridian_logomark_b7417082.svg"
                alt="Meridian logomark"
                className="h-8 w-8"
              />
              <img
                src="/manus-storage/meridian_wordmark_fba2a4f3.svg"
                alt="Meridian"
                className="h-5 brightness-0 invert"
              />
            </div>
            <p className="meridian-body text-[#F2EEE5]/70 text-sm leading-relaxed max-w-xs">
              The AI Operator System. Six weeks. Nine modules. One identity shift.
            </p>
            <p className="meridian-mono text-[#C9A961] text-xs">
              $1,500 · 06.WK · 09.MOD
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <p className="meridian-eyebrow text-[#C9A961] text-[10px]">Navigation</p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/program", label: "Program" },
                { href: "/about", label: "About" },
                { href: "/enroll", label: "Enroll" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#F2EEE5]/70 text-sm hover:text-[#C9A961] transition-colors duration-200 font-light"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-5">
            <p className="meridian-eyebrow text-[#C9A961] text-[10px]">Ready to operate?</p>
            <p
              className="meridian-pullquote text-[#F2EEE5] text-2xl lg:text-3xl leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 300 }}
            >
              You're not behind on AI. You're behind on leverage.
            </p>
            <Link
              href="/enroll"
              className="meridian-cta text-[11px] px-6 py-3 inline-block w-fit"
            >
              Enroll Now →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="meridian-rule mt-12 mb-6 opacity-20" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="meridian-mono text-[#F2EEE5]/40 text-xs">
            © MMXXVI MERIDIAN · THE AI OPERATOR SYSTEM
          </p>
          <p className="meridian-mono text-[#F2EEE5]/40 text-xs">
            BRAND DESIGN STUDIO · MMXXVI
          </p>
        </div>
      </div>
    </footer>
  );
}
