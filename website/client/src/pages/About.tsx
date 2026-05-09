/**
 * MERIDIAN — About Page
 * Design: Premium Editorial Magazine
 * Sections: Hero, Founder, Philosophy, Brand references, CTA
 */
import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

export default function About() {
  useReveal();

  return (
    <div className="min-h-screen bg-[#F2EEE5]">
      <Navigation />

      {/* ============================================================
          HERO — Editorial
          ============================================================ */}
      <section className="bg-[#F2EEE5] pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="container">
          <div className="max-w-4xl">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px] mb-5 reveal">
              THE MANDATE · THE BRAND
            </p>
            <h1
              className="text-[#0B0C0E] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6 reveal reveal-delay-1"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.05 }}
            >
              The House Style.
            </h1>
            <hr className="meridian-rule w-full mb-6 reveal reveal-delay-2" />
            <p className="meridian-body text-[#0B0C0E]/60 text-base lg:text-lg leading-relaxed max-w-xl reveal reveal-delay-3">
              How the brand looks, sounds, and behaves — from sales page hero to favicon.
              Meridian is not a course brand. It is a private equity fund that happens to teach.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOUNDER — Portrait + Story
          ============================================================ */}
      <section className="bg-[#E5E1D7] py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Portrait */}
            <div className="reveal">
              <div className="relative">
                <img
                  src="/manus-storage/founder_317bda4d.png"
                  alt="Meridian Founder"
                  className="w-full max-w-sm object-cover"
                  style={{ aspectRatio: "3/4", objectPosition: "center top" }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#E5E1D7] to-transparent" />
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <p className="meridian-eyebrow text-[#C9A961] text-[10px]">FOUNDER · MERIDIAN</p>
                <p
                  className="text-[#0B0C0E] text-xl"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 400 }}
                >
                  The Operator.
                </p>
              </div>
            </div>

            {/* Story */}
            <div className="reveal reveal-delay-2 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="meridian-eyebrow text-[#C9A961] text-[11px]">THE ORIGIN</p>
                <h2
                  className="text-[#0B0C0E] text-3xl sm:text-4xl"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: "-0.01em" }}
                >
                  Built from the inside.
                </h2>
                <hr className="meridian-rule w-16" />
                <p className="meridian-body text-[#0B0C0E]/60 text-base leading-relaxed">
                  Meridian was built by an operator, for operators. Not by a content creator
                  who discovered AI last year. The curriculum comes from real executive workflows —
                  the kind that get built when you're paid to think, not to produce.
                </p>
                <p className="meridian-body text-[#0B0C0E]/60 text-base leading-relaxed">
                  The problem isn't that executives don't know AI exists. It's that they
                  haven't built the reflex. Meridian is the six-week program that installs it.
                </p>
              </div>

              {/* Pull quote */}
              <div className="border-l-2 border-[#C9A961] pl-6 py-2">
                <p
                  className="text-[#0B0C0E] text-xl lg:text-2xl leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 300 }}
                >
                  "The MBA used to be the status object. AI fluency is becoming the new one.
                  We're not selling a course — we're selling the before/after identity shift."
                </p>
                <p className="meridian-mono text-[#C9A961] text-xs mt-3">— MERIDIAN FOUNDER</p>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  "Worked inside $180K+ executive environments",
                  "Built AI workflows before it was a content category",
                  "Designed for the operator who already knows AI is interesting",
                  "No guru energy. No Skool community. No countdown timers.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="meridian-mono text-[#C9A961] text-xs mt-0.5">—</span>
                    <p className="text-[#0B0C0E]/70 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PHILOSOPHY — Deep Meridian panel
          ============================================================ */}
      <section className="meridian-hero py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(242,238,229,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(242,238,229,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-3xl reveal flex flex-col gap-6">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px]">THE PHILOSOPHY</p>
            <h2
              className="text-[#F2EEE5] text-3xl sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 300 }}
            >
              The brand never shouts,
              <br />
              because it doesn't have to.
            </h2>
            <hr className="meridian-rule w-full opacity-30" />
            <p className="meridian-body text-[#F2EEE5]/70 text-base leading-relaxed max-w-lg">
              If something needs to be emphasized, the typography and the whitespace
              emphasize it. Quiet confidence. Institutional restraint. Zero theatrics.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
              {[
                { label: "STRIPE", desc: "Confident · whitespace · quiet typography" },
                { label: "LINEAR", desc: "Grid discipline · mono details · zero decoration" },
                { label: "A16Z", desc: "Editorial authority · serif pull quotes" },
                { label: "RAMP", desc: "Black backgrounds that feel expensive, not edgy" },
                { label: "A. LANGE & SÖHNE", desc: "Cold precision with warm metal" },
                { label: "ARC", desc: "Playful restraint" },
              ].map((ref) => (
                <div key={ref.label} className="flex flex-col gap-1 border border-[#F2EEE5]/10 p-4">
                  <p className="meridian-eyebrow text-[#C9A961] text-[9px]">{ref.label}</p>
                  <p className="text-[#F2EEE5]/60 text-xs leading-relaxed">{ref.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BRAND PRINCIPLES
          ============================================================ */}
      <section className="bg-[#F2EEE5] py-20 lg:py-28">
        <div className="container">
          <div className="reveal mb-12">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px] mb-4">WHAT WE REJECT</p>
            <h2
              className="text-[#0B0C0E] text-3xl sm:text-4xl"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: "-0.01em" }}
            >
              The aesthetic rejection list.
            </h2>
            <hr className="meridian-rule w-16 mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0B0C0E]/10">
            {[
              { item: "Gradient purple/pink backgrounds", reason: "Instant guru tell" },
              { item: "Stock people-at-laptops", reason: "Stops the perception of authorship" },
              { item: "Yellow highlighter type", reason: "Course-launcher reflex" },
              { item: "Drop shadows on everything", reason: "1998 PowerPoint" },
              { item: "Speech-cloud testimonials", reason: "Kajabi default" },
              { item: "Countdown timers", reason: "Panic, not premium" },
              { item: '"As seen on Forbes" badges', reason: "Borrowed authority is no authority" },
              { item: "Flaticon icon sets", reason: "If anyone can use it, no one should" },
            ].map((item, i) => (
              <div
                key={item.item}
                className={`bg-[#F2EEE5] p-6 flex flex-col gap-2 reveal reveal-delay-${Math.min(i % 4 + 1, 4)}`}
              >
                <p
                  className="text-[#0B0C0E] text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  {item.item}
                </p>
                <hr className="meridian-rule w-6" />
                <p className="meridian-mono text-[#0B0C0E]/40 text-xs">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="bg-[#0B0C0E] py-20 lg:py-28">
        <div className="container">
          <div className="max-w-2xl reveal flex flex-col gap-6">
            <p className="meridian-eyebrow text-[#C9A961] text-[11px]">THE INVITATION</p>
            <h2
              className="text-[#F2EEE5] text-3xl sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 300 }}
            >
              Bloomberg Terminal energy
              <br />
              meets a Hermès orange box.
            </h2>
            <hr className="meridian-rule w-16" />
            <p className="meridian-body text-[#F2EEE5]/60 text-base leading-relaxed max-w-md">
              The room is set. The system is built. The only question is whether
              you're ready to become the operator.
            </p>
            <Link href="/enroll" className="meridian-cta text-[11px] px-7 py-3.5 inline-block w-fit">
              Enroll Now — $1,500 →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
