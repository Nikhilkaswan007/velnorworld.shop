"use client";

import React, { useState, useEffect } from "react";

export default function Hero() {
  const [followers, setFollowers] = useState(12480);

  useEffect(() => {
    const interval = setInterval(() => {
      setFollowers((prev) => {
        if (prev >= 19990) return 12480;
        return prev + Math.floor(Math.random() * 8) + 3;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-premium" id="top">
      {/* Morphing decorative blobs */}
      <div className="decor-blob blob-one" aria-hidden="true"></div>
      <div className="decor-blob blob-two" aria-hidden="true"></div>

      <div className="hero-grid">
        <div className="hero-left">
          <span className="premium-badge">Next-Gen Social Growth</span>
          <h1 id="page-title">
            Exponential growth. <span className="gradient-text">Simplified.</span>
          </h1>
          <p className="hero-desc">
            Vibrant, reliable, and organic promotion tiers for Instagram, TikTok, and YouTube.
            No passwords required. Choose your goal and start growing within 24 hours.
          </p>
          <div className="hero-actions">
            <a className="button button-primary neon-glow" href="#packages">
              Launch Calculator <span aria-hidden="true">&rarr;</span>
            </a>
            <a className="button button-secondary" href="#process">
              How it works
            </a>
          </div>
          <div className="hero-proof-micro">
            <span className="micro-glow-dot"></span>
            <span>Completed <strong>10,000+</strong> campaigns for <strong>1,200+</strong> active content creators and brands.</span>
          </div>
        </div>

        <div className="hero-right" aria-hidden="true">
          <div className="glass-panel terminal-card">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">live_growth_tracker.sh</span>
            </div>
            
            <div className="terminal-body">
              <div className="terminal-stat-row">
                <div>
                  <span className="stat-label">Active Promotion</span>
                  <strong className="stat-value text-glowing">
                    +{followers.toLocaleString()}
                  </strong>
                </div>
              </div>

              <div className="terminal-graph">
                <svg viewBox="0 0 300 120" className="terminal-svg">
                  <defs>
                    <linearGradient id="gradient-glow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--brand-strong)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="var(--brand-strong)" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="300" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  <line x1="0" y1="90" x2="300" y2="90" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  
                  {/* Area fill */}
                  <path
                    d="M 10 105 Q 50 85, 100 75 T 200 45 T 285 20 L 285 118 L 10 118 Z"
                    fill="url(#gradient-glow)"
                  />
                  
                  {/* Growth Line */}
                  <path
                    d="M 10 105 Q 50 85, 100 75 T 200 45 T 285 20"
                    fill="none"
                    stroke="var(--brand-strong)"
                    strokeWidth="3"
                    className="path-animate"
                  />
                </svg>
              </div>

              <div className="terminal-footer">
                <span className="footer-status">● Connection encrypted</span>
                <span className="footer-rate">12.4x scale rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
