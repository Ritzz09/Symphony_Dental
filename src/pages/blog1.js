import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backgroundImage from "../components/Gallery/thankyou.webp";
import {
  MdClose,
  MdCheckCircle,
  MdPhone,
  MdWhatsapp,
  MdLocalHospital,
  MdMenuBook,
} from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const mythsData = [
  {
    id: 1,
    myth: "If my teeth don't hurt, they're fine.",
    truth: "No pain doesn't always mean no problems.",
    descriptionShort:
      "Many dental issues like cavities, gum disease, or infections don't cause pain in the early stages... By the time you feel discomfort, the problem may have progressed.",
    descriptionLong:
      "This is one of the most dangerous myths. Many dental issues like cavities, gum disease, or infections don't cause pain in the early stages. By the time you're feeling discomfort, the problem may have already progressed. Around 60% of dental issues are symptom-free in early stages. Regular dental check-ups help detect issues early, before they turn into painful and expensive procedures.",
    tip: "Visit your dentist every 6 months, even if everything feels okay.",
  },
  {
    id: 2,
    myth: "Brushing harder makes your teeth cleaner.",
    truth: "Aggressive brushing can do more harm than good.",
    descriptionShort:
      "Brushing too hard can wear down enamel and damage your gums, leading to sensitivity and gum recession. Technique matters more than force.",
    descriptionLong:
      "Scrubbing your teeth like you're cleaning a dirty pan? Please stop! Brushing too hard can wear down enamel and damage your gums, leading to sensitivity and gum recession. The key is not pressure, but technique.",
    tip: "Use a soft-bristled toothbrush, and brush gently in circular motions for two minutes.",
  },
  {
    id: 3,
    myth: "Sugar is the main cause of cavities.",
    truth: "Sugar is a factor, but not the only one.",
    descriptionShort:
      "Sugar feeds bacteria that produce acid eroding enamel. Frequency matters more than quantity of sugar.",
    descriptionLong:
      "Yes, sugar feeds the bacteria in your mouth, which then produce acid that erodes enamel. But it's how often you consume sugar and your oral hygiene habits that matter more. Snacking on sweets throughout the day is more damaging than eating a dessert and brushing afterward.",
    tip: "Rinse your mouth or brush after consuming sugary foods, and try to limit frequent snacking.",
  },
  {
    id: 4,
    myth: "Flossing isn't necessary if you brush well.",
    truth: "Flossing cleans where your brush can't reach.",
    descriptionShort:
      "Toothbrushes don't clean between teeth; floss reaches where plaque and debris hide.",
    descriptionLong:
      "No matter how well you brush, your toothbrush can't reach between your teeth. That's where plaque and food debris love to hide. Skipping floss can lead to gum disease and cavities in those hidden spots.",
    tip: "Make flossing a part of your nightly routine, it only takes 1-2 minutes!",
  },
  {
    id: 5,
    myth: "Whitening toothpaste will make my teeth super white.",
    truth: "Most whitening toothpastes only remove surface stains.",
    descriptionShort:
      "Whitening toothpaste removes minor stains but won't change the natural tooth color significantly.",
    descriptionLong:
      "Whitening toothpaste can help remove minor stains from coffee or tea, but they won't dramatically change the color of your teeth. For noticeable results, professional whitening treatments are the way to go.",
    tip:
      "Talk to your dentist about safe and effective whitening options tailored to your needs.",
  },
  {
    id: 6,
    myth: "Baby teeth don't matter, they'll fall out anyway.",
    truth: "Healthy baby teeth are crucial for lifelong oral health.",
    descriptionShort:
      "Neglecting baby teeth can cause pain, infections, and affect permanent teeth alignment.",
    descriptionLong:
      "Neglecting baby teeth can lead to pain, infections, and problems with permanent teeth. They hold space for adult teeth and help with speech and chewing. Early dental care sets the foundation for healthy habits and smiles in the future.",
    tip:
      "Start dental check-ups as early as age 1, and encourage brushing habits from the start.",
  },
  {
    id: 7,
    myth: "Dental treatments are always painful.",
    truth: "Modern dentistry is surprisingly comfortable.",
    descriptionShort:
      "Advances in technology and care make dental visits comfortable and anxiety-free.",
    descriptionLong:
      "Gone are the days of painful, noisy drills and terrifying visits. With advancements in technology, numbing techniques, and patient-centered care, most procedures today are comfortable and anxiety-free. At our clinic, we go the extra mile to make sure you feel calm and cared for and might even play some music to help you relax.",
    tip:
      "If you have dental anxiety, don't be afraid to talk to your dentist. A good team will always work to make you feel safe and comfortable.",
  },
  {
    id: 8,
    myth: "If I have bad breath, it means I'm not brushing enough.",
    truth: "Bad breath can have many causes, not just poor brushing.",
    descriptionShort:
      "Chronic bad breath may stem from dry mouth, gum disease, foods, or medical conditions.",
    descriptionLong:
      "While brushing and flossing are essential, chronic bad breath (halitosis) can also stem from dry mouth, gum disease, certain foods, or medical conditions. Sometimes, it's not about brushing more but addressing the root cause.",
    tip: "Stay hydrated, clean your tongue daily, and see your dentist if bad breath persists.",
  },
  {
    id: 9,
    myth: "It's normal for gums to bleed when brushing.",
    truth: "Bleeding gums are a warning sign.",
    descriptionShort:
      "Healthy gums should not bleed on brushing or flossing; bleeding may indicate gum disease.",
    descriptionLong:
      "Healthy gums should not bleed when you brush or floss. If they do, it could be an early sign of gingivitis or gum disease and ignoring it can lead to serious oral health problems down the line.",
    tip:
      "Don't stop brushing — instead, see your dentist for an exam and improve your flossing routine.",
  },
  {
    id: 10,
    myth: "All dental procedures are expensive.",
    truth: "Preventive care is affordable and saves money long-term.",
    descriptionShort:
      "Routine cleanings and check-ups are affordable and prevent costly treatments later.",
    descriptionLong:
      "While some treatments can be costly, routine cleanings, check-ups, and early interventions are much more affordable and can prevent the need for complex (and pricey) procedures later. Prevention truly is cheaper than cure!",
    tip:
      "Invest in preventive care and discuss flexible payment plans with your dental office.",
  },
];

// Progress Bar Component (with percentage)
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div style={styles.progressBarContainer}>
      <div style={{ ...styles.progressBar, width: `${progress}%` }} />
      <div style={styles.progressText}>{Math.round(progress)}%</div>
    </div>
  );
};

// Floating Particles Component
const FloatingParticles = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const particles = [];
    const colors = [
      "rgba(52, 152, 219, 0.6)",
      "rgba(46, 204, 113, 0.6)",
      "rgba(155, 89, 182, 0.6)",
      "rgba(231, 76, 60, 0.6)",
    ];

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      const size = Math.random() * 6 + 2;
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
      `;
      particlesRef.current.appendChild(particle);
      particles.push(particle);
    }

    particles.forEach((particle, i) => {
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      gsap.to(particle, {
        y: "-=200",
        x: `+=${Math.random() * 300 - 150}`,
        rotation: 360,
        duration: Math.random() * 15 + 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1,
      });
    });

    return () => {
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  return <div ref={particlesRef} style={styles.particlesContainer} />;
};

// Enhanced Side Navigation (hidden on mobile)
const SideNav = ({ myths }) => {
  const [activeId, setActiveId] = useState(null);
  const [isVisible, setIsVisible] = useState(window.innerWidth > 768);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sections = myths.map((m) => document.getElementById(`section-${m.id}`));
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = null;
      sections.forEach((section) => {
        if (section && section.offsetTop <= scrollPos) {
          current = section.id;
        }
      });
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    if (navRef.current && isVisible) {
      gsap.fromTo(
        navRef.current.children,
        { x: -50, opacity: 0, scale: 0 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 2,
          ease: "back.out(1.7)",
        }
      );
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [myths, isVisible]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isVisible) return null;

  return (
    <nav
      ref={navRef}
      aria-label="Section navigation"
      style={styles.sideNav}
      role="navigation"
    >
      {myths.map(({ id }, index) => (
        <button
          key={id}
          onClick={() => scrollToSection(`section-${id}`)}
          style={{
            ...styles.sideNavButton,
            ...(activeId === `section-${id}` ? styles.sideNavActive : {}),
          }}
          onMouseEnter={(e) => {
            gsap.to(e.target, {
              scale: 1.3,
              rotationY: 180,
              boxShadow: "0 8px 25px rgba(52, 152, 219, 0.6)",
              duration: 0.3,
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.target, {
              scale: 1,
              rotationY: 0,
              boxShadow: "0 4px 15px rgba(52, 152, 219, 0.3)",
              duration: 0.3,
            });
          }}
          aria-current={activeId === `section-${id}` ? "true" : undefined}
          aria-label={`Navigate to myth ${index + 1}`}
          title={`Go to Myth ${index + 1}`}
          type="button"
        >
          {index + 1}
        </button>
      ))}
    </nav>
  );
};

// Back to Top Button
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      if (visible) {
        gsap.to(buttonRef.current, {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
      } else {
        gsap.to(buttonRef.current, {
          scale: 0,
          opacity: 0,
          rotation: 180,
          duration: 0.3,
        });
      }
    }
  }, [visible]);

  const scrollTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

 
};

// Header Stats Component
const HeaderStats = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-item",
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          delay: 2.5,
          ease: "back.out(1.7)",
        }
      );
    }, statsRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: <MdLocalHospital />, number: "3.5B", label: "People with oral diseases" },
    { icon: <MdMenuBook />, number: "10", label: "Myths busted today" },
    { icon: <MdCheckCircle />, number: "100%", label: "Evidence-based facts" },
  ];

  return (
    <div ref={statsRef} style={styles.statsContainer}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="stat-item"
          style={styles.statItem}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              y: -10,
              scale: 1.1,
              boxShadow: "0 15px 35px rgba(52, 152, 219, 0.4)",
              duration: 0.3,
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              y: 0,
              scale: 1,
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              duration: 0.3,
            });
          }}
          tabIndex={0}
          role="group"
          aria-label={`${stat.number} - ${stat.label}`}
        >
          <div style={styles.statIcon}>{stat.icon}</div>
          <div style={styles.statNumber}>{stat.number}</div>
          <div style={styles.statLabel}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

const DentalMythsBlog = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const headerCtx = gsap.context(() => {
      const tl = gsap.timeline();

      // Enhanced header animations
      tl.fromTo(
        headerRef.current.querySelector("h1"),
        { autoAlpha: 0, y: 80, scale: 0.8 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 2, ease: "power3.out" }
      )
        .fromTo(
          headerRef.current.querySelector("p.subtitle"),
          { autoAlpha: 0, x: -60, rotationX: 45 },
          { autoAlpha: 1, x: 0, rotationX: 0, duration: 1.5, ease: "power3.out" },
          "-=1.2"
        )
        .fromTo(
          headerRef.current.querySelector("p.disc"),
          { autoAlpha: 0, y: 40, scale: 0.9 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1.3, ease: "power3.out" },
          "-=1"
        );
    }, headerRef);

    const ctx = gsap.context(() => {
      // Enhanced section animations with mobile adjustments
      gsap.utils.toArray(".section").forEach((section, index) => {
        const isMobile = window.innerWidth <= 768;
        const fromY = isMobile ? 50 : index % 4 < 2 ? 100 : -100;

        gsap.fromTo(
          section,
          { autoAlpha: 0, y: fromY, scale: 0.8 },
          {
            duration: 1,
            autoAlpha: 1,
            y: 0,
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: isMobile ? "top 85%" : "top 75%",
              toggleActions: "play none none reverse",
              scrub: false,
            },
          }
        );
      });

      // Enhanced badge hover animations
          }, containerRef);

    return () => {
      headerCtx.revert();
      ctx.revert();
    };
  }, []);

  return (
    <>
      <ProgressBar />
      <FloatingParticles />
      <SideNav myths={mythsData} />
    
      <div style={styles.whole}>
        <div style={styles.pageOverlay} />
        <div ref={containerRef} style={styles.page}>
          <header ref={headerRef} style={styles.header}>
            <h1 style={styles.title}>
              Top 10 Dental Myths Busted by a Dentist
            </h1>
            <p className="subtitle" style={styles.subtitle}>
              What do you think you know vs What's actually true! ✨
            </p>

            <HeaderStats />

            <p className="disc" style={styles.disc}>
              We all grow up hearing a lot about dental care, from parents,
              friends, or even social media. But how much of it is actually
              true? As dental professionals, we come across a surprising number
              of myths and misconceptions every day. Some may seem harmless, but
              believing them can lead to poor oral health in the long run.
              <br />
              According to the World Health Organization (WHO), nearly 3.5
              billion people worldwide suffer from oral diseases — and much of
              this is preventable with the right care and knowledge.
              <br />
              <br />
              Let's bust some of the most common dental myths once and for all!
              🦷
            </p>
          </header>

          {mythsData.map(({ id, myth, truth, descriptionLong, tip }, index) => (
            <section
              key={id}
              className="section"
              id={`section-${id}`}
              style={{
                ...styles.section,
                flexDirection: "column",
                textAlign: "center",
              }}
              aria-labelledby={`myth-title-${id}`}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                  duration: 0.4,
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  y: 0,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  duration: 0.4,
                });
              }}
            >
              
              <div
                style={{
                  ...styles.textContainer,
                  maxWidth: "100%",
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <h3
                  id={`myth-title-${id}`}
                  style={{
                    ...styles.mythTitle,
                    color: "#ff6b6b",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "1rem",
                    justifyContent: "center",
                    flexWrap: "nowrap", // Allow wrapping on narrow screens
                    fontWeight: "700",
                    whiteSpace: "normal", // prevent cutoff
                    maxWidth: "90vw",
                    margin: "0 auto",
                  }}
                >
                  <MdClose aria-hidden="true" size={28} />
                  {myth}
                </h3>
                <h3
                  style={{
                    ...styles.truthTitle,
                    color: "#2ecc71",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "1rem",
                    justifyContent: "center",
                    flexWrap: "nowrap", // Allow wrapping on narrow screens
                    fontWeight: "700",
                    whiteSpace: "normal",
                    maxWidth: "90vw",
                    margin: "0 auto",
                  }}
                >
                  <MdCheckCircle aria-hidden="true" size={28} />
                  {truth}
                </h3>
                <p
                  style={{
                    marginTop: "1rem",
                    lineHeight: 1.6,
                    fontSize: "1.1rem",
                    maxWidth: "90vw",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {descriptionLong}
                </p>
                <p
                  style={{
                    ...styles.tip,
                    color: "#d3f9d8",
                    marginTop: "1.5rem",
                    maxWidth: "90vw",
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                  }}
                >
                  <strong>💡 Tip:</strong> {tip}
                </p>
              </div>
            </section>
          ))}

          <footer style={styles.footer} role="contentinfo">
            <div style={styles.footerContent}>
              <p style={styles.footerText}>
                🦷 Empower your smile with knowledge. Visit Symphony Dental Care
                for expert advice.
              </p>
              <p
                style={{
                  fontStyle: "italic",
                  marginTop: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                Author: Dr. Sailee Kalyankar, MDS - Founder – Symphony Dental
                Care, Khar/Bandra
              </p>
              <div style={styles.footerIcons}>
                <MdPhone size={24} style={styles.footerIcon} />
                <MdWhatsapp size={24} style={styles.footerIcon} />
                <MdLocalHospital size={24} style={styles.footerIcon} />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

const styles = {
  progressBarContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "6px",
    backgroundColor: "rgba(255,255,255,0.1)",
    zIndex: 10001,
    backdropFilter: "blur(10px)",
  },
  progressBar: {
    height: "100%",
    background:
      "linear-gradient(90deg, #3498DB, #2ecc71, #e74c3c, #f39c12)",
    backgroundSize: "200% 100%",
    animation: "gradientShift 3s ease infinite",
    transition: "width 0.3s ease",
    boxShadow: "0 2px 10px rgba(52, 152, 219, 0.5)",
  },
  progressText: {
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
  },
  particlesContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 1,
  },
  whole: {
    position: "relative",
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
    overflowX: "hidden",
    zIndex: 0,
  },
  pageOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.85)",
    backdropFilter: "blur(2px)",
    zIndex: 0,
    pointerEvents: "none",
  },
  page: {
    maxWidth: 900,
    margin: "0 auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#fff",
    padding: "0 1rem",
    position: "relative",
    zIndex: 2,
    paddingBottom: window.innerWidth <= 768 ? "6rem" : "0",
    boxSizing: "border-box",
  },
  header: {
    textAlign: "center",
    marginBottom: "clamp(2rem, 5vw, 4rem)",
    padding: "2rem 0",
  },
  title: {
    fontSize: "clamp(2rem, 6vw, 3.8rem)",
    background:
      "linear-gradient(45deg, #1559a0 0%, #6372ff 50%, #2ecc71 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
    display: "inline-block",
    marginBottom: "1rem",
    textShadow: "0 0 30px rgba(52, 152, 219, 0.5)",
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: "clamp(1rem, 4vw, 1.8rem)",
    color: "#0071A4",
    fontStyle: "italic",
    marginBottom: "2rem",
    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
  },
  disc: {
    fontSize: "clamp(1rem, 3vw, 1.3rem)",
    color: "white",
    maxWidth: "800px",
    margin: "auto",
    lineHeight: "1.8",
    textShadow: "0 2px 5px rgba(0,0,0,0.3)",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    margin: "2rem 0 3rem",
    flexWrap: "wrap",
  },
  statItem: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: "1.5rem",
    borderRadius: "15px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.2)",
    cursor: "pointer",
    minWidth: "120px",
  },
  statIcon: {
    fontSize: "2rem",
    color: "#3498DB",
    marginBottom: "0.5rem",
  },
  statNumber: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#2ecc71",
    marginBottom: "0.3rem",
  },
  statLabel: {
    fontSize: "0.9rem",
    color: "#bbb",
  },
  section: {
    display: "flex",
    alignItems: "center",
    padding: "3rem 2rem",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    marginBottom: "4rem",
    position: "relative",
    overflow: "hidden",
    zIndex: 100,
    backgroundColor: "rgba(0, 59, 81, 0.95)",
    border: "2px solid rgba(255,255,255,0.1)",
    transition: "all 0.4s ease",
    backdropFilter: "blur(10px)",
    flexDirection: "column",
    textAlign: "center",
  },
  textContainer: {
    maxWidth: "100%",
    position: "relative",
    zIndex: 3,
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 0,
  },
  numberBadge: {
    position: "absolute",
    top: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    marginBottom: "1rem",
    backgroundColor: "#3498DB",
    color: "white",
    borderRadius: "50%",
    width: "4rem",
    height: "4rem",
    fontSize: "1.8rem",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 15px rgba(52, 152, 219, 0.7)",
    cursor: "default",
    userSelect: "none",
    transition: "all 0.3s ease",
    zIndex: 4,
    border: "3px solid rgba(255,255,255,0.2)",
    pointerEvents: "none",
  },
  mythTitle: {
    fontSize: "clamp(1rem, 4vw, 1.8rem)",
    marginBottom: "1rem",
    fontWeight: "700",
  },
  truthTitle: {
    fontSize: "clamp(1rem, 4vw, 1.8rem)",
    marginBottom: "1.5rem",
    fontWeight: "700",
  },
  tip: {
    fontWeight: "bold",
    paddingLeft: "1rem",
    borderLeft: "5px solid #27AE60",
    fontSize: "clamp(0.95rem, 3vw, 1.1rem)",
    backgroundColor: "rgba(39, 174, 96, 0.1)",
    padding: "1rem 1.5rem",
    borderRadius: "8px",
    marginTop: "1.5rem",
    backdropFilter: "blur(5px)",
    maxWidth: "90vw",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
  },
  footer: {
    marginTop: "6rem",
    textAlign: "center",
    fontSize: "clamp(1rem, 3vw, 1.1rem)",
    padding: window.innerWidth <= 768 ? "3rem 1rem 5rem 1rem" : "3rem 2rem 3rem 2rem",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    boxSizing: "border-box",
  },
  footerContent: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  footerText: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  footerIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1.5rem",
  },
  footerIcon: {
    cursor: "pointer",
    transition: "all 0.3s ease",
    color: "#3498DB",
  },
  sideNav: {
    position: "fixed",
    top: "15%",
    left: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    zIndex: 10000,
  },
  sideNavButton: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "3px solid #3498DB",
    background: "rgba(255,255,255,0.1)",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "#3498DB",
    outline: "none",
    transition: "all 0.3s ease",
    userSelect: "none",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 15px rgba(52, 152, 219, 0.3)",
  },
  sideNavActive: {
    backgroundColor: "#3498DB",
    color: "white",
    boxShadow: "0 0 25px #3498DB",
    scale: "1.15",
  },
  backToTopButton: {
    position: "fixed",
    bottom: window.innerWidth <= 768 ? "20px" : "30px",
    right: window.innerWidth <= 768 ? "20px" : "30px",
    padding: "1rem",
    fontSize: "1.5rem",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#3498DB",
    color: "white",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    zIndex: 10000,
    userSelect: "none",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    scale: 0,
    opacity: 0,
  },
};

// Add CSS keyframes for animated gradient and responsive adjustments
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @media (max-width: 768px) {
    .section {
      padding: 2rem 1rem !important;
      margin-bottom: 3rem !important;
    }
    .tip {
      max-width: 90vw !important;
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default DentalMythsBlog;
