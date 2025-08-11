import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../components/Gallery/thankyou.webp";

// Inline SVG icons (no external deps)
const IconX = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" {...props}>
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconCheck = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" {...props}>
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconArrowRight = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" {...props}>
    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Data
const myths = [
  {
    id: "sugar-only",
    title: "Myth #1: If my teeth don’t hurt, they’re fine.",
    bust:
      "No pain doesn’t always mean no problems.",
    desc :"This is one of the most dangerous myths. Many dental issues like cavities, gum disease, or infections don’t cause pain in the early stages. By the time you’re feeling discomfort, the problem may have already progressed. Around 60% of dental issues are symptom-free in early stages. (Source: American Dental Association) Regular dental check-ups help detect issues early, before they turn into painful and expensive procedures.",
    tip: "Rinse after snacks, limit sipping, and brush twice daily with fluoride toothpaste.",
  },
  {
    id: "hard-brush",
    title: "Myth #2: Brushing harder cleans better",
    bust:
      "Aggressive brushing can wear enamel and injure gums. It doesn't remove plaque more effectively than gentle, thorough technique.",
    tip: "Use a soft-bristle brush, 2 minutes, small circles, and light pressure.",
  },
  {
    id: "bleeding-normal",
    title: "Myth #3: Bleeding gums are normal",
    bust:
      "Bleeding is an early sign of gum inflammation (gingivitis), not something to ignore. Left untreated, it can progress to periodontal disease.",
    tip: "Improve flossing, brush the gumline, and see your dentist for a professional cleaning.",
  },
  {
    id: "whitening-damage",
    title: "Myth #4: Whitening permanently damages teeth",
    bust:
      "Professional whitening is safe when supervised. Temporary sensitivity is common but reversible. Enamel isn't permanently harmed.",
    tip: "Follow dentist guidance, use desensitizing toothpaste before/after.",
  },
  {
    id: "baby-teeth",
    title: "Myth #5: Baby teeth don't matter",
    bust:
      "Primary teeth guide jaw growth, speech, and nutrition. Decay can cause pain, infection, and affect developing permanent teeth.",
    tip: "Start dental visits by age 1 and brush as soon as the first tooth erupts.",
  },
  {
    id: "no-pain-no-visit",
    title: "Myth #6: If nothing hurts, no dentist needed",
    bust:
      "Many issues are painless until advanced. Routine checkups catch problems early—easier, cheaper, and less invasive to treat.",
    tip: "See your dentist every 6 months (or as recommended for your risk level).",
  },
  {
    id: "flossing-optional",
    title: "Myth #7: Flossing is optional",
    bust:
      "Toothbrushes can't reach between teeth where most cavities and gum disease start. Interdental cleaning is essential.",
    tip: "Use floss, soft picks, or water flossers daily—choose what you'll stick with.",
  },
  {
    id: "mouthwash-replaces",
    title: "Myth #8: Mouthwash replaces brushing",
    bust:
      "Mouthwash can freshen breath and reduce bacteria, but it can't remove plaque biofilm like mechanical brushing and flossing.",
    tip: "Use mouthwash as an adjunct—not a replacement—for daily brushing and flossing.",
  },
  {
    id: "fruit-healthy",
    title: "Myth #9: Fruit juices and sparkling waters are harmless",
    bust:
      "Many are acidic and can erode enamel over time, even without sugar. Frequent sipping increases risk.",
    tip: "Keep acidic drinks with meals, use a straw, and rinse with water afterward.",
  },
  {
    id: "aging-teeth",
    title: "Myth #10: Tooth loss is inevitable with age",
    bust:
      "With good hygiene, diet, and regular care, teeth can last a lifetime. Age alone doesn't cause tooth loss—disease does.",
    tip: "Prioritize prevention: fluoride, cleanings, nightguards if you grind, and timely treatment.",
  },
];

function upsertMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id, json) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(json);
}

export default function Blog({
  heroSrc = img,
  publisherName = "Dental Insights",
  authorName = "Dr. Jane Smith, DDS",
  basePath = "/blog/dental-myths-busted",
}) {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const articleRef = useRef(null);
  const progressRef = useRef(null);
  const cardsRef = useRef([]);

  const canonical = useMemo(() => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}${basePath}`;
    }
    return `https://example.com${basePath}`;
  }, [basePath]);

  // Spotlight mouse position
  const onMouseMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  // SEO + JSON-LD
  useEffect(() => {
    const title = "Top 10 Dental Myths busted by a Dentist";
    const description =
      "What do you think you know vs What’s actually true!";
    document.title = title;
    upsertMeta("name", "description", description);
    upsertLink("canonical", canonical);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "article");
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", heroSrc);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", heroSrc);

    const articleLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      image: [heroSrc],
      author: { "@type": "Person", name: authorName },
      publisher: {
        "@type": "Organization",
        name: publisherName,
        logo: {
          "@type": "ImageObject",
          url:
            typeof window !== "undefined"
              ? `${window.location.origin}/favicon.ico`
              : "/favicon.ico",
        },
      },
      datePublished: new Date().toISOString(),
      description,
      mainEntityOfPage: canonical,
    };

    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: myths.map((m) => ({
        "@type": "Question",
        name: m.title.replace(/Myth #\\d+:\\s*/, ""),
        acceptedAnswer: { "@type": "Answer", text: m.bust },
      })),
    };

    upsertJsonLd("ld-article", articleLd);
    upsertJsonLd("ld-faq", faqLd);
  }, [authorName, publisherName, canonical, heroSrc]);

  // GSAP animations
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Intro stagger
      gsap.from(".hero-seq", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Parallax hero image
      if (heroRef.current && heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Card reveal
      cardsRef.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Reading progress
      if (progressRef.current && articleRef.current) {
        gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left center" });
        ScrollTrigger.create({
          trigger: articleRef.current,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            gsap.to(progressRef.current, { scaleX: self.progress, ease: "none", overwrite: true });
          },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          line-height: 1.6;
          color: #374151;
          background-color: #ffffff;
        }

        @media (prefers-color-scheme: dark) {
          body {
            color: #f3f4f6;
            background-color: #0f0f0f;
          }
        }

        /* Progress Bar */
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 4px;
          background-color: rgba(59, 130, 246, 0.8);
          z-index: 50;
          width: 100%;
          transform-origin: left center;
          transform: scaleX(0);
        }

        @media (prefers-color-scheme: dark) {
          .progress-bar {
            background-color: rgba(96, 165, 250, 0.8);
          }
        }

        /* Spotlight Effect */
        .spotlight {
          position: relative;
          isolation: isolate;
        }

        .spotlight::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background: radial-gradient(600px circle at var(--x, 50%) var(--y, 50%),
            hsl(210 100% 60% / 0.18), transparent 40%);
          transition: background 150ms ease-out;
        }

        /* Story Link Underline Effect */
        .story-link {
          position: relative;
          display: inline-block;
          text-decoration: none;
        }

        .story-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 2px;
          width: 100%;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: 100% 50%;
          transition: transform 0.3s ease;
        }

        .story-link:hover::after {
          transform: scaleX(1);
          transform-origin: 0% 50%;
        }

        /* Hover Scale Effect */
        .hover-scale {
          transition: transform 0.2s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero Section */
        .hero {
          position: relative;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: -10;
          overflow: hidden;
        }

        .hero-img {
          width: 100%;
          height: 46vh;
          object-fit: cover;
        }

        @media (min-width: 640px) {
          .hero-img {
            height: 65vh;
          }
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, 
            rgba(0, 0, 0, 0.1) 0%, 
            rgba(0, 0, 0, 0.1) 50%, 
            rgba(0, 0, 0, 0) 100%);
        }

        @media (prefers-color-scheme: dark) {
          .hero-overlay {
            background: linear-gradient(to bottom, 
              rgba(0, 0, 0, 0.2) 0%, 
              rgba(0, 0, 0, 0.3) 50%, 
              rgba(0, 0, 0, 0.7) 100%);
          }
        }

        .hero-content {
          padding: 40px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .hero-content {
            padding: 56px 24px;
          }
        }

        @media (min-width: 1024px) {
          .hero-content {
            padding: 80px 24px;
          }
        }

        .hero-text {
          max-width: 768px;
          color: white;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.8);
        }

        .hero-title {
          margin-top: 12px;
          font-size: 30px;
          font-weight: 600;
          line-height: 1.1;
        }

        @media (min-width: 640px) {
          .hero-title {
            font-size: 36px;
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 48px;
          }
        }

        .hero-description {
          margin-top: 16px;
          max-width: 512px;
          color: rgba(255, 255, 255, 0.85);
        }

        .hero-actions {
          margin-top: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* Buttons */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.9);
          color: #111827;
          font-weight: 500;
          text-decoration: none;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }

        .btn-primary:hover {
          background-color: white;
          transform: scale(1.05);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .btn-secondary:hover {
          color: white;
        }

        .btn-blue {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          border-radius: 8px;
          background-color: #2563eb;
          color: white;
          font-weight: 500;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }

        .btn-blue:hover {
          background-color: #1d4ed8;
        }

        /* Main Content */
        .main-content {
          max-width: 90%;
          margin: 0 auto;
          padding: 40px 24px;
          display: grid;
          gap: 40px;
        }

        @media (min-width: 1024px) {
          .main-content {
            padding: 64px 24px;
            grid-template-columns: 1fr 320px;
          }
        }

        /* Article */
        .article {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Myth Cards */
        .myth-card {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          background-color: white;
          padding: 24px;
        }

        @media (prefers-color-scheme: dark) {
          .myth-card {
            border-color: rgba(255, 255, 255, 0.1);
            background-color: #171717;
          }
        }

        .myth-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .myth-icon-x {
          margin-top: 4px;
          color: #ef4444;
        }

        @media (prefers-color-scheme: dark) {
          .myth-icon-x {
            color: #f87171;
          }
        }

        .myth-title {
          font-size: 20px;
          font-weight: 600;
        }

        @media (min-width: 640px) {
          .myth-title {
            font-size: 24px;
          }
        }

        .myth-content {
          margin-top: 12px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .myth-icon-check {
          margin-top: 4px;
          color: #059669;
        }

        @media (prefers-color-scheme: dark) {
          .myth-icon-check {
            color: #34d399;
          }
        }

        .myth-text {
          font-size: 16px;
          color: #1f2937;
        }

        @media (prefers-color-scheme: dark) {
          .myth-text {
            color: #e5e7eb;
          }
        }

        .myth-tip {
          margin-top: 12px;
          font-size: 14px;
          color: #6b7280;
        }

        @media (prefers-color-scheme: dark) {
          .myth-tip {
            color: #9ca3af;
          }
        }

        /* Prevention Section */
        .prevention-section {
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          background-color: white;
          padding: 24px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        @media (prefers-color-scheme: dark) {
          .prevention-section {
            border-color: rgba(255, 255, 255, 0.1);
            background-color: #171717;
          }
        }

        .prevention-title {
          font-size: 24px;
          font-weight: 600;
        }

        .prevention-list {
          margin-top: 12px;
          display: grid;
          gap: 8px;
          color: #4b5563;
          list-style: none;
        }

        @media (prefers-color-scheme: dark) {
          .prevention-list {
            color: #d1d5db;
          }
        }

        .prevention-list li {
          position: relative;
          padding-left: 16px;
        }

        .prevention-list li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #2563eb;
          font-weight: bold;
        }

        /* Sidebar */
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        @media (min-width: 1024px) {
          .sidebar {
            position: sticky;
            top: 80px;
            height: max-content;
          }
        }

        .sidebar-card {
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          background-color: white;
          padding: 24px;
        }

        @media (prefers-color-scheme: dark) {
          .sidebar-card {
            border-color: rgba(255, 255, 255, 0.1);
            background-color: #171717;
          }
        }

        .sidebar-title {
          font-size: 20px;
          font-weight: 600;
        }

        .sidebar-nav {
          margin-top: 12px;
        }

        .sidebar-nav ol {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 14px;
          list-style: none;
        }

        .sidebar-nav a {
          color: rgba(31, 41, 55, 0.8);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .sidebar-nav a:hover {
          color: #111827;
        }

        @media (prefers-color-scheme: dark) {
          .sidebar-nav a {
            color: rgba(243, 244, 246, 0.8);
          }

          .sidebar-nav a:hover {
            color: white;
          }
        }

        .cta-title {
          font-size: 18px;
          font-weight: 600;
        }

        .cta-text {
          margin-top: 8px;
          font-size: 14px;
          color: #6b7280;
        }

        @media (prefers-color-scheme: dark) {
          .cta-text {
            color: #9ca3af;
          }
        }

        .cta-button {
          margin-top: 12px;
        }

        /* Utilities */
        .ml-2 {
          margin-left: 8px;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>

      <div ref={rootRef}>
        {/* Reading progress */}
        <div
          ref={progressRef}
          className="progress-bar"
          aria-hidden="true"
        />

        {/* Hero */}
        <header
          ref={heroRef}
          onMouseMove={onMouseMove}
          className="hero spotlight"
          aria-label="Article header"
        >
          <div className="hero-bg">
            <img
              ref={heroImgRef}
              src={heroSrc}
              alt="Smiling dentist in modern clinic with clean dental aesthetic"
              className="hero-img"
              loading="eager"
              decoding="async"
            />
            <div className="hero-overlay" />
          </div>

          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-seq hero-badge">
                What do you think you know vs What’s
actually true!
              </p>
              <h1 className="hero-seq hero-title">
                Top 10 Dental Myths busted by a Dentist
              </h1>
              <p className="hero-seq hero-description">
               We all grow up hearing a lot about dental care, from parents,
friends, or even social media. But how much of it is actually
true? As dental professionals, we come across a surprising
number of myths and misconceptions every day. Some may
seem harmless, but believing them can lead to poor oral health
in the long run.
According to the World Health Organization (WHO), nearly
3.5 billion people worldwide suffer from oral diseases — and
much of this is preventable with the right care and knowledge.
Let’s bust some of the most common dental myths once and
for all!
              </p>
              <div className="hero-seq hero-actions">
                <a href="#myths" className="hover-scale btn-primary">
                  Read article <IconArrowRight className="ml-2" />
                </a>
                <a href="#prevention" className="story-link btn-secondary">
                  Prevention tips
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="main-content">
          <article id="myths" ref={articleRef} className="article">
            {myths.map((m, idx) => (
              <div
                key={m.id}
                id={m.id}
                ref={(el) => { cardsRef.current[idx] = el; }}
                className="myth-card"
              >
                <div className="myth-header">
                  <div className="myth-icon-x" aria-hidden="true">
                    <IconX width={24} height={24} />
                  </div>
                  <h2 className="myth-title">{m.title}</h2>
                </div>
                <div className="myth-content">
                  <div className="myth-icon-check" aria-hidden="true">
                    <IconCheck width={20} height={20} />
                  </div>
                  <p className="myth-text">{m.bust}</p>
           
                </div>
                 <p className="myth-text">{m.desc}</p>
                {m.tip && (
                  <p className="myth-tip">
                    Tip: {m.tip}
                  </p>
                )}
              </div>
            ))}

            <section id="prevention" className="prevention-section">
              <h2 className="prevention-title">Simple prevention framework</h2>
              <ul className="prevention-list">
                <li>Brush 2x/day with fluoride · 2 minutes · soft bristles</li>
                <li>Clean between daily (floss, picks, or water flosser)</li>
                <li>Limit frequent snacking and acidic sipping</li>
                <li>Dental checkups and cleanings every 6 months</li>
              </ul>
            </section>
          </article>

          <aside className="sidebar">
            <div className="sidebar-card">
              <h2 className="sidebar-title">Contents</h2>
              <nav className="sidebar-nav">
                <ol>
                  {myths.map((m) => (
                    <li key={m.id}>
                      <a href={`#${m.id}`} className="story-link">
                        {m.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
            <div className="sidebar-card">
              <h3 className="cta-title">Need personalized advice?</h3>
              <p className="cta-text">
                Book a checkup to build a prevention plan that fits your lifestyle.
              </p>
              <div className="cta-button">
                <a href="#" className="btn-blue">
                  Book a checkup
                </a>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}