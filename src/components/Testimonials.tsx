"use client";

import React, { useRef, useEffect } from "react";

const TESTIMONIALS_DATA = [
  {
    title: "Game-changer for my brand page",
    quote: "I started with the Instagram Growth Package and hit 10K followers within the campaign window. Story views doubled overnight — the scope was exactly what was promised, and the order process was dead simple.",
    author: "Sofia Reyes",
    info: "Lifestyle Creator · 42K followers",
    avatarClass: "ta-1"
  },
  {
    title: "Exactly the scale we needed",
    quote: "We ordered the TikTok Starter package for a product launch campaign. The follower lift was visible in analytics the same week, and the team flagged a small issue before promotion even started — great attention to detail.",
    author: "Marcus Chen",
    info: "E-commerce Brand · DTC Founder",
    avatarClass: "ta-2"
  },
  {
    title: "Highly recommended for creators",
    quote: "Testing a new channel is hard, but Velnor World gave me the initial push I needed. Hit the partner threshold faster and organic views started picking up. Excellent service!",
    author: "Emma Watson",
    info: "Fashion Vlogger · 15K subs",
    avatarClass: "ta-1"
  },
  {
    title: "Fast delivery, secure process",
    quote: "No passwords required meant I could scale securely. The WhatsApp payment invoice confirmation was super quick. Sent screenshot, and promotion started within hours.",
    author: "Alex Rivera",
    info: "Tech Reviewer · 80K views",
    avatarClass: "ta-2"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isPressedRef = useRef(false);
  const startYRef = useRef(0);
  const scrollTopRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let scrollPos = container.scrollTop;

    // Handle scroll events to sync manual scroll wheel actions
    const handleScroll = () => {
      const currentScroll = container.scrollTop;
      const halfHeight = container.scrollHeight / 2;
      
      if (halfHeight > 0) {
        if (currentScroll >= halfHeight) {
          container.scrollTop = currentScroll - halfHeight;
          scrollPos = currentScroll - halfHeight;
          return;
        } else if (currentScroll < 0) {
          container.scrollTop = currentScroll + halfHeight;
          scrollPos = currentScroll + halfHeight;
          return;
        }
      }
      
      if (Math.abs(currentScroll - scrollPos) > 1.5) {
        scrollPos = currentScroll;
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    const scroll = () => {
      // Only auto-scroll if the user is NOT dragging
      if (!isPressedRef.current) {
        const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
        
        // Base normal speeds and hovered crawl speeds (slowed down, not stopped)
        const normalSpeed = isMobile ? 0.22 : 0.38;
        const hoverSpeed = isMobile ? 0.08 : 0.12;
        
        const speed = isHoveredRef.current ? hoverSpeed : normalSpeed;
        scrollPos += speed;
        
        const halfHeight = container.scrollHeight / 2;
        if (halfHeight > 0) {
          if (scrollPos >= halfHeight) {
            scrollPos -= halfHeight;
          } else if (scrollPos < 0) {
            scrollPos += halfHeight;
          }
        }
        container.scrollTop = scrollPos;
      } else {
        // Synchronize scrollPos with manual dragging
        scrollPos = container.scrollTop;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isPressedRef.current = true;
    startYRef.current = e.pageY - containerRef.current!.offsetTop;
    scrollTopRef.current = containerRef.current!.scrollTop;
    containerRef.current!.style.cursor = "grabbing";
    containerRef.current!.style.userSelect = "none";
  };

  const handleMouseLeave = () => {
    isPressedRef.current = false;
    isHoveredRef.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    isPressedRef.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
      containerRef.current!.style.removeProperty("user-select");
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPressedRef.current) return;
    e.preventDefault();
    const y = e.pageY - containerRef.current!.offsetTop;
    const walk = (y - startYRef.current) * 1.5; // Drag sensitivity
    containerRef.current!.scrollTop = scrollTopRef.current - walk;
  };

  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-title">
      {/* Left column: heading + social proof */}
      <div className="testimonials-intro">
        <p className="eyebrow">Social Proof</p>
        <h2 id="testimonials-title">Real results from creators and brands.</h2>
        <p className="testimonials-lead">Thousands of page owners and small businesses have grown their reach with our promotion packages. Here&apos;s what a few of them had to say.</p>
        <div className="testimonials-proof-row">
          <div className="avatar-stack" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="testimonials-proof-caption">Trusted by <strong>1,200+</strong> creators and brands worldwide.</p>
        </div>
      </div>

      {/* Vertical divider */}
      <div className="testimonials-divider" aria-hidden="true"></div>

      {/* Right column: vertical marquee testimonials track */}
      <div
        ref={containerRef}
        className="testimonials-cards-col"
        aria-label="Customer testimonials"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: "grab" }}
      >
        <div className="testimonials-vertical-track">
          {/* First set */}
          {TESTIMONIALS_DATA.map((t, idx) => (
            <article key={`set1-${idx}`} className="testimonial-card">
              <strong className="testimonial-title">{t.title}</strong>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <span className={`testimonial-avatar ${t.avatarClass}`} aria-hidden="true"></span>
                <div className="testimonial-author-text">
                  <strong>{t.author}</strong>
                  <span>{t.info}</span>
                </div>
              </div>
            </article>
          ))}
          {/* Second set for infinite loop vertical mapping */}
          {TESTIMONIALS_DATA.map((t, idx) => (
            <article key={`set2-${idx}`} className="testimonial-card">
              <strong className="testimonial-title">{t.title}</strong>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <span className={`testimonial-avatar ${t.avatarClass}`} aria-hidden="true"></span>
                <div className="testimonial-author-text">
                  <strong>{t.author}</strong>
                  <span>{t.info}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
