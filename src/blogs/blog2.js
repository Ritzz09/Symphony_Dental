import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../components/Gallery/thankyou.webp";
import dentist from "../components/Gallery/dentist1.jpg";




// Inline SVG icons

const IconArrowRight = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" {...props}>
    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


// New Data for the "Bleeding Gums" blog post
const bleedingGumsContent = [
  {
    id: "common-causes",
    title: "Common Causes of Bleeding Gums",
    intro: "Understanding the root cause of your bleeding gums is the first step toward effective treatment and prevention.",
    points: [
      {
        heading: "Plaque Buildup (Gingivitis)",
        text: "The most common reason for bleeding gums is the accumulation of plaque, a sticky film of bacteria that forms on your teeth. If not removed, this plaque irritates the gum tissue, leading to an early, and often reversible, form of gum disease called gingivitis. Your gums may become red, swollen, tender, and bleed easily."
      },
      {
        heading: "Advanced Gum Disease (Periodontitis)",
        text: "When gingivitis is left untreated, it can progress to periodontitis. This is a more severe infection that affects the bone and tissues that support your teeth. It can lead to deep gum pockets, receding gums, tooth mobility, and eventually, tooth loss."
      },
      {
        heading: "Improper Brushing and Flossing",
        text: "Using a hard-bristled toothbrush or applying too much pressure can damage your delicate gum tissue. Likewise, infrequent flossing allows plaque to build up between teeth, causing inflammation and bleeding. The good news is that with the right technique, this can be corrected."
      },
      {
        heading: "Nutritional Deficiencies",
        text: "A lack of certain vitamins, particularly Vitamin C and Vitamin K, can affect the health of your gums and increase the tendency to bleed."
      },
      {
        heading: "Tobacco Use",
        text: "Smoking or using smokeless tobacco is a significant risk factor for gum disease. Tobacco restricts blood flow to the gums, masking the symptoms of inflammation while making the infection worse."
      },
      {
        heading: "Underlying Health Conditions",
        text: "Certain medical conditions and life stages can make you more susceptible to gum bleeding. These include diabetes, hormonal changes, blood disorders, and some medications."
      }
    ]
  },
  {
    id: "why-prompt-care-matters",
    title: "Why Prompt Care Matters",
    intro: "Ignoring bleeding gums is a serious mistake that can impact your health and well-being in multiple ways.",
    points: [
      {
        heading: "Preventing Tooth Loss",
        text: "Gum disease is a leading cause of tooth loss in adults. By addressing bleeding gums early, you can preserve the supporting bone and tissue around your teeth and avoid the need for complex and costly procedures like extractions or implants later."
      },
      {
        heading: "Protecting Your Overall Health",
        text: "The connection between your oral health and your general health is well-documented. Inflammation from gum disease has been linked to an increased risk of other serious health issues, including heart disease, diabetes complications, and respiratory infections."
      },
      {
        heading: "Improving Your Quality of Life",
        text: "Persistent bleeding, swollen gums, bad breath, and a receding gumline can affect your confidence, nutrition, and comfort. Taking action can restore your oral health and your self-esteem."
      }
    ]
  },
  {
    id: "what-to-do-now",
    title: "What to Do Now",
    intro: "If you're experiencing bleeding gums, don't wait. Here are some immediate steps you can take:",
    points: [
      {
        heading: "Re-evaluate Your Oral Hygiene",
        text: "Use a soft-bristled toothbrush and a gentle technique. Angle the bristles at a 45-degree angle to the gumline and brush in short, circular strokes."
      },
      {
        heading: "Clean Between Your Teeth",
        text: "Floss or use an interdental brush once a day to remove trapped food and plaque. If you notice bleeding when you first start, don't stop. This is a sign you are cleaning an inflamed area, and the bleeding should decrease within a week or two as your gums become healthier."
      },
      {
        heading: "Consider a Mouthwash",
        text: "An antiseptic mouthwash can be used short-term to help reduce bacteria, but it should be used as an adjunct to, not a replacement for, proper brushing and flossing."
      },
      {
        heading: "Focus on Your Diet",
        text: "A diet rich in fresh fruits, vegetables, and leafy greens (which are good sources of Vitamin C and K) can support gum health."
      },
      {
        heading: "Seek Professional Help",
        text: "If your gums continue to bleed for more than 7-10 days despite improving your home care routine, it's time to see a professional."
      }
    ]
  },
  {
    id: "when-to-seek-urgent-care",
    title: "When to Seek Urgent Care",
    intro: "Schedule an immediate appointment if you experience any of the following:",
    points: [
      { heading: "", text: "• Heavy or spontaneous bleeding" },
      { heading: "", text: "• Severe gum pain, pus, or swelling" },
      { heading: "", text: "• Loose teeth or a sudden bad taste in your mouth" },
      { heading: "", text: "• Uncontrolled bleeding, especially if you are on blood thinners" }
    ]
  },
  {
    id: "how-symphony-can-help",
    title: "How Symphony Dental Care Can Help",
    intro: "At Symphony Dental Care, we provide comprehensive, gentle care to get your gums back to a healthy state. Our approach includes:",
    points: [
      {
        heading: "Comprehensive Periodontal Exam",
        text: "A thorough examination to measure your gum health, identify any signs of disease, and create a personalized treatment plan."
      },
      {
        heading: "Professional Cleaning",
        text: "A deep cleaning to remove the plaque and tartar (calculus) that brushing alone cannot."
      },
      {
        heading: "Scaling and Root Planing",
        text: "A non-surgical deep cleaning that goes below the gumline to remove bacteria and smooth the tooth roots, helping gum tissue reattach."
      },
      {
        heading: "Personalized Home-Care Coaching",
        text: "We'll show you the right brushing and flossing techniques and recommend the best tools for your specific needs."
      },
      {
        heading: "Systemic Coordination",
        text: "We can also offer guidance on nutrition, tobacco cessation, and coordinate with your physician to ensure your oral health plan supports your overall health goals."
      }
    ]
  }
];

const SocialShare = () => {
    useEffect(() => {
        // This effect runs only on the client-side
        const postUrl = encodeURIComponent(window.location.href);
        const postTitle = encodeURIComponent(document.title);

        const shareLinks = {
            fb: `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`,
            tw: `https://twitter.com/intent/tweet?url=${postUrl}&text=${postTitle}`,
            li: `https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}`,
            wa: `https://api.whatsapp.com/send?text=${postTitle}%20${postUrl}`,
            em: `mailto:?subject=${postTitle}&body=Check%20out%20this%20article:%20${postUrl}`
        };
        
        const setLink = (id, url) => {
            const el = document.getElementById(id);
            if (el) el.href = url;
        };

        setLink('share-fb', shareLinks.fb);
        setLink('share-tw', shareLinks.tw);
        setLink('share-li', shareLinks.li);
        setLink('share-wa', shareLinks.wa);
        setLink('share-em', shareLinks.em);

        const openPopup = (e) => {
            e.preventDefault();
            window.open(e.currentTarget.href, 'share-window', 'height=450,width=550,toolbar=0,menubar=0,location=0,scrollbars=1,resizable=1');
        };

        const popupButtons = document.querySelectorAll('.popup-share');
        popupButtons.forEach(button => button.addEventListener('click', openPopup));

        return () => {
            popupButtons.forEach(button => button.removeEventListener('click', openPopup));
        };
    }, []);

      return (
        <section className="content-card">
            <h3 className="cta-title" style={{ marginBottom: '15px' }}>Share this Article</h3>
            <div className="social-share-container">
                <a href="#" id="share-fb" className="social-share-button share-facebook popup-share"><i className="fab fa-facebook-f"></i> Share</a>
                <a href="#" id="share-tw" className="social-share-button share-twitter popup-share"><i className="fab fa-twitter"></i> Tweet</a>
                <a href="#" id="share-li" className="social-share-button share-linkedin popup-share"><i className="fab fa-linkedin-in"></i> Share</a>
                <a href="#" id="share-wa" className="social-share-button share-whatsapp" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> Share</a>
                <a href="#" id="share-em" className="social-share-button share-email"><i className="fas fa-envelope"></i> Email</a>
            </div>
        </section>
    );
};

const AuthorBox = ({ authorImage, authorName, authorTitle, socialLinks, bio, specialties, appointmentLink }) => {
    return (
        <div className="new-author-card" aria-labelledby="author-title">
            <div className="author-image-wrapper">
                <img src={authorImage} alt={authorName} className="author-image-circle" />
            </div>
            <div className="author-details-wrapper">
                <span className="author-written-by">Written By</span>
                <h3 id="author-title" className="new-author-name">{authorName}</h3>
                <div className="author-social-links">
                    {socialLinks.twitter && <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" title="Twitter"><i className="fab fa-twitter"></i></a>}
                    {socialLinks.facebook && <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook-f"></i></a>}
                    {socialLinks.youtube && <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" title="YouTube"><i className="fab fa-youtube"></i></a>}
                    {socialLinks.instagram && <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram"></i></a>}
                </div>
                <p className="author-text">
                    <strong>{authorTitle}</strong>. {bio}
                </p>
                <p className="author-specialties">
                    <strong>Specialties:</strong> {specialties}
                </p>
                <a href={appointmentLink} className="book-appointment-btn">BOOK AN APPOINTMENT</a>
            </div>
        </div>
    );
};


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


export default function Blog2({
  heroSrc = img,
  publisherName = "Dental Insights",
  authorName = "Dr. Sailee Kalyankar, MDS",
  basePath = "/blog/bleeding-gums-causes-risks",
}) {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const articleRef = useRef(null);
  const progressRef = useRef(null);
  const cardsRef = useRef([]);


  // SEO + JSON-LD
  useEffect(() => {
    const CANONICAL = `https://www.symphonydentalcare.in${basePath}`;
    const TITLE = "Are Bleeding Gums Normal? Causes & Treatment Explained";
    const DESCRIPTION = "Bleeding gums are not normal. See what causes them and get expert care from Dr. Sailee Kalyankar at Symphony Dental Care in Khar West, Mumbai.";
    const OG_IMAGE = "https://www.symphonydentalcare.in/static/media/thankyou.0d462809be764adabcd4.webp"; // Use the same image or update if needed

    const prevTitle = document.title;
    document.title = TITLE;

    upsertLink("canonical", CANONICAL);
    upsertMeta("name", "description", DESCRIPTION);

    // Open Graph
    upsertMeta("property", "og:title", TITLE);
    upsertMeta("property", "og:description", DESCRIPTION);
    upsertMeta("property", "og:type", "article");
    upsertMeta("property", "og:url", CANONICAL);
    upsertMeta("property", "og:image", OG_IMAGE);
    upsertMeta("property", "og:site_name", "Symphony Dental Care");

    // Twitter
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", TITLE);
    upsertMeta("name", "twitter:description", DESCRIPTION);
    upsertMeta("name", "twitter:image", OG_IMAGE);

    // BlogPosting JSON-LD
    const blogPostingLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": CANONICAL,
      },
      headline: TITLE,
      description: DESCRIPTION,
      image: OG_IMAGE,
      author: {
        "@type": "Person",
        name: "Dr. Sailee Kalyankar",
        url: "https://www.symphonydentalcare.in/#about_dentist",
      },
      publisher: {
        "@type": "Organization",
        name: "Symphony Dental Care",
        logo: {
          "@type": "ImageObject",
          url: "https://www.symphonydentalcare.in/static/media/logo.985b454d2bce33c9fce9.png",
        },
      },
      datePublished: "2025-09-08", // Updated to current date
    };

    // FAQ JSON-LD based on sections
    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: bleedingGumsContent.map((s) => ({
        "@type": "Question",
        name: s.title,
        acceptedAnswer: { "@type": "Answer", text: s.bust },
      })),
    };

    upsertJsonLd("ld-blogposting", blogPostingLd);
    upsertJsonLd("ld-faq", faqLd);

    // Cleanup function
    return () => {
      document.title = prevTitle;
      const linkEl = document.querySelector('link[rel="canonical"]');
      if (linkEl) linkEl.remove();
      const metaEls = document.querySelectorAll('meta[name="description"], meta[property^="og:"], meta[name^="twitter:"]');
      metaEls.forEach(el => el.remove());
      const blogLdEl = document.getElementById("ld-blogposting");
      if (blogLdEl) blogLdEl.remove();
      const faqLdEl = document.getElementById("ld-faq");
      if (faqLdEl) faqLdEl.remove();
    };
  }, [basePath]);


  // GSAP animations
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Intro stagger
      gsap.from(".hero-seq", { opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: "power2.out" });

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

  const onMouseMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <style>{`
       
      `}</style>


      <div ref={rootRef}>
        {/* Reading progress */}
        <div ref={progressRef} className="progress-bar" aria-hidden="true" />

        {/* Hero */}
        <header ref={heroRef} onMouseMove={onMouseMove} className="hero spotlight" aria-label="Article header">
          <div className="hero-bg">
            <img ref={heroImgRef} src={heroSrc} alt="Smiling person with healthy gums" className="hero-img" loading="eager" decoding="async" />
            <div className="hero-overlay" />
          </div>

          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-seq hero-title">
                Are Bleeding Gums Normal? Causes, Risks, and When to See a Dentist
              </h1>
              <p className="hero-seq hero-description">
                The short and simple answer is no, healthy gums do not bleed.   <br/><br/>
                Have you ever noticed a little blood when you brush or floss? It might seem like no big deal, but bleeding gums are an early warning sign of bigger oral health problems. In India, where gum disease affects a majority of the population, ignoring it can lead to tooth loss and impact your overall health.
              <br/>Bleeding gums during brushing or flossing are a sign of inflammation, acting as a clear warning from your body. In India, this is a particularly urgent issue, as gum disease is a major public health concern. According to the Indian Dental Association, periodontal disease affects the majority of Indians, with a prevalence of 89.2% in the 35-44 year-old age group alone. It's also a leading cause of adult tooth loss.
              </p>
              <div className="hero-seq hero-actions">
                <a href="#common-causes" className="hover-scale btn-primary">
                  Read article <IconArrowRight className="ml-2" />
                </a>
                <a href="/#contact" className="story-link btn-secondary">
                  Book An Appointment
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
         <main className="main-content">
          <article id="article-content" ref={articleRef} className="article">
            {bleedingGumsContent.map((section, idx) => (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => { cardsRef.current[idx] = el; }}
                className="content-card"
              >
                <h2 className="section-title">{section.title}</h2>
                <p className="section-intro">{section.intro}</p>
                <div className="points-container">
                  {section.points.map((point, pIndex) => (
                    <div key={pIndex} className="point-item">
                      <h3 className="point-heading">{point.heading}</h3>
                      {point.text && <p className="point-text">{point.text}</p>}
                    </div>
                  ))}
                </div>
              </section>
            ))}
             <section id="disclaimer" className="sidebar-card">
                <p>This article provides general information and is not a substitute for a clinical examination, diagnosis, or personalized treatment plan. Always seek in-person dental advice for your specific symptoms or concerns.</p>
            </section>

            <SocialShare />
          </article>

          <aside className="sidebar">
            <div className="sidebar-card">
              <h2 className="sidebar-title">Contents</h2>
              <nav className="sidebar-nav">
                <ol>
                  {bleedingGumsContent.map((s) => (
                    <li key={s.id}><a href={`#${s.id}`} className="story-link">{s.title}</a></li>
                  ))}
                </ol>
              </nav>
            </div>
            <div className="sidebar-card">
              <h3 className="cta-title">Don't Wait, Take Action</h3>
              <p className="cta-text"><strong>Book an Appointment today</strong> by calling <strong >+91 7678045993</strong> or messaging us on WhatsApp to schedule a gentle periodontal assessment at <strong>Symphony Dental</strong> Care in Khar West, Mumbai.</p>
              <div className="cta-button">
                <a href="/#contact" className="btn-blue">Book an Appointment</a>
              </div>
            </div>
          </aside>
        </main>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 40px' }}>
          <AuthorBox
            authorImage={dentist} // <-- CUSTOMIZE: Add author's image URL
            authorName="Dr. Sailee Kalyankar"
            authorTitle="MDS — Founder, Symphony Dental Care (Khar/Bandra)"
             socialLinks={{
                twitter: "https://x.com/Symphony2025",      // <-- CUSTOMIZE: Add Twitter profile URL
                facebook: "https://www.facebook.com/SymphonyDentalCareKharWest/",     // <-- CUSTOMIZE: Add Facebook profile URL
                youtube: "https://www.youtube.com/@SymphonyDentalCare",     // <-- CUSTOMIZE: Add youtube profile URL
                instagram: "https://www.instagram.com/symphonydentalcare",    // <-- CUSTOMIZE: Add Instagram profile URL
            }}
            bio="Dr. Sailee is a Root Canal Specialist and an expert in Conservative Dentistry with over 8 years of experience. Known for her microscopic RCT expertise, gentle techniques, and focus on pain-free dental care, she leads a skilled team that offers everything from routine checkups to full mouth rehabilitation."
            specialties="Periodontal Care, Painless Root Canals, Dental Implants, Cosmetic Dentistry."
            appointmentLink="/#contact" // <-- CUSTOMIZE: Link for appointment button
          />
        </div>

        {/* <div className="author-card" aria-labelledby="author-title">
            <h3 id="author-title" className="author-title">Author</h3>
            <p className="author-name">
              Dr. Sailee Kalyankar, MDS — Founder, Symphony Dental Care (Khar/Bandra)
            </p>
            <p className="author-text">
              Dr. Sailee is a Root Canal Specialist and an expert in Conservative Dentistry with over 8 years of experience. Known for her microscopic RCT expertise, gentle techniques, and focus on pain-free dental care, she leads a skilled team that offers everything from routine checkups to full mouth rehabilitation.
            </p>
            <p className="author-specialties">
              Specialties: Periodontal Care, Painless Root Canals, Dental Implants, Cosmetic Dentistry.
            </p>
        </div> */}
      </div>
    </>
  );
}
