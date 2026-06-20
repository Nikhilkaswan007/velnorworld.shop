"use client";

import React, { useState } from "react";

type Platform = "instagram" | "tiktok" | "youtube" | "facebook";

interface Package {
  name: string;
  price: string;
  countLabel: string;
  features: string[];
}

const PACKAGES: Record<Exclude<Platform, "youtube">, Package[]> = {
  instagram: [
    {
      name: "Starter Package",
      price: "$25",
      countLabel: "5,000 Followers",
      features: ["4K-5K Followers", "1 Page Permanent Post", "Story Promotion"],
    },
    {
      name: "Growth Package",
      price: "$45",
      countLabel: "10,000 Followers",
      features: ["10K Followers", "2 Pages Permanent Post", "Story Promotion", "Story Highlight"],
    },
    {
      name: "Premium Package",
      price: "$80",
      countLabel: "20,000 Followers",
      features: ["20K Followers", "3 Pages Permanent Post", "Story Promotion", "Story Highlight"],
    },
    {
      name: "Ultimate Package",
      price: "$150",
      countLabel: "50,000 Followers",
      features: [
        "50K Followers",
        "All Pages Promotion",
        "Permanent Posts",
        "Story Promotion",
        "Story Highlight",
        "Priority Support",
      ],
    },
  ],
  tiktok: [
    {
      name: "Starter Package",
      price: "$50",
      countLabel: "5,000 Followers",
      features: ["5K new Followers", "1 Page Permanent Post", "Story Promotion"],
    },
    {
      name: "Growth Package",
      price: "$95",
      countLabel: "10,000 Followers",
      features: ["10K Followers", "2 Pages Permanent Post", "Story Promotion", "Story Highlight"],
    },
    {
      name: "Premium Package",
      price: "$180",
      countLabel: "20,000 Followers",
      features: ["20K Followers", "3 Pages Permanent Post", "Story Promotion", "Story Highlight"],
    },
    {
      name: "Ultimate Package",
      price: "$320",
      countLabel: "50,000 Followers",
      features: [
        "50K Followers",
        "All Pages Promotion",
        "Permanent Posts",
        "Story Promotion",
        "Story Highlight",
      ],
    },
  ],
  facebook: [
    {
      name: "Starter Package",
      price: "$30",
      countLabel: "5,000 Followers",
      features: ["5K new Followers", "1 Page Permanent Post", "Story Promotion"],
    },
    {
      name: "Growth Package",
      price: "$50",
      countLabel: "10,000 Followers",
      features: ["10K Followers", "2 Pages Permanent Post", "Story Promotion", "Story Highlight"],
    },
    {
      name: "Premium Package",
      price: "$95",
      countLabel: "20,000 Followers",
      features: ["20K Followers", "3 Pages Permanent Post", "Story Promotion", "Story Highlight"],
    },
    {
      name: "Ultimate Package",
      price: "$175",
      countLabel: "50,000 Followers",
      features: [
        "50K Followers",
        "All Pages Promotion",
        "Permanent Posts",
        "Story Promotion",
        "Story Highlight",
      ],
    },
  ],
};

// SVG Icons
const InstagramIcon = () => (
  <svg className="tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TikTokIcon = () => (
  <svg className="tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const YouTubeIcon = () => (
  <svg className="tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
  </svg>
);

const FacebookIcon = () => (
  <svg className="tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const WHATSAPP_NUMBER = "918000362479"; // Refined target WhatsApp number

export default function Packages() {
  const [platform, setPlatform] = useState<Platform>("instagram");
  const [packageIndex, setPackageIndex] = useState<number>(1); // Desktop slider packageIndex
  const [showComparison, setShowComparison] = useState<boolean>(false); // Mobile comparison matrix toggle

  // Desktop slider graph parameters
  const graphPaths = [
    "M 10 100 Q 80 92, 150 82 T 290 75",
    "M 10 100 Q 80 82, 150 68 T 290 52",
    "M 10 100 Q 80 65, 150 48 T 290 28",
    "M 10 100 Q 80 45, 150 25 T 290 10"
  ];

  const graphFills = [
    "M 10 100 Q 80 92, 150 82 T 290 75 L 290 115 L 10 115 Z",
    "M 10 100 Q 80 82, 150 68 T 290 52 L 290 115 L 10 115 Z",
    "M 10 100 Q 80 65, 150 48 T 290 28 L 290 115 L 10 115 Z",
    "M 10 100 Q 80 45, 150 25 T 290 10 L 290 115 L 10 115 Z"
  ];

  const handlePlatformChange = (p: Platform) => {
    setPlatform(p);
    setPackageIndex(1); // Reset slider on change
    setShowComparison(false); // Reset comparison table toggle
  };

  const getWhatsAppLink = (pkg: Package) => {
    const text = encodeURIComponent(
      `Hello Velnor World!\n\nI want to order the *${platform.toUpperCase()} ${pkg.name}* for *${pkg.price}* (${pkg.countLabel}).\n\nPlease let me know the available payment methods so I can complete my order!`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  const getCustomYouTubeWhatsAppLink = () => {
    const text = encodeURIComponent(
      "Hello Velnor World!\n\nI want to inquire about a custom *YouTube Promotion Package*.\n\nChannel details:\n- Target Subscribers/Views:\n- Estimated Budget:"
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  // Helper selectors
  const hasGrid = platform !== "youtube";
  const currentDesktopPkg = hasGrid ? PACKAGES[platform as Exclude<Platform, "youtube">][packageIndex] : null;

  // Custom YouTube Card Component (rendered by both mobile/desktop viewports)
  const YouTubeCustomCard = () => (
    <div className="youtube-custom-container">
      <div className="glass-panel youtube-custom-card">
        <div className="badge youtube-badge">Tailored Strategy</div>
        <h3>Custom YouTube Campaigns</h3>
        <p className="yt-description">
          YouTube promotion is specialized around subscriber targets, high-retention video views, and dedicated watch-time objectives. Let us craft a custom proposal suited specifically to your channel's niche.
        </p>
        <div className="yt-grid-specs">
          <article className="yt-spec-card">
            <strong>Views &amp; Retention</strong>
            <span>High watch-time optimization</span>
          </article>
          <article className="yt-spec-card">
            <strong>Subscriber Growth</strong>
            <span>Targeted organic audience pull</span>
          </article>
          <article className="yt-spec-card">
            <strong>Dedicated Support</strong>
            <span>Direct 1-on-1 campaign coordinator</span>
          </article>
        </div>
        <a
          className="button button-primary neon-glow yt-btn"
          href={getCustomYouTubeWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consult on WhatsApp
        </a>
      </div>
    </div>
  );

  return (
    <section className="packages-section" id="packages" aria-labelledby="packages-title">
      <div className="section-heading centered-heading">
        <p className="eyebrow">Promotion Packages</p>
        <h2 id="packages-title">Select Your Platform</h2>
        <p className="section-subtitle">
          Choose Instagram, TikTok, YouTube, or Facebook. Follow manual invoice gateways, then submit your payment screenshot on WhatsApp to launch promotion.
        </p>
      </div>

      {/* Common Selector Tabs (clean glowing buttons) */}
      <div className="calculator-tabs glass-panel" role="tablist" aria-label="Platform select tabs">
        <button
          className={`calc-tab ${platform === "instagram" ? "is-active instagram" : ""}`}
          type="button"
          role="tab"
          aria-selected={platform === "instagram"}
          onClick={() => handlePlatformChange("instagram")}
        >
          <InstagramIcon />
          <span>Instagram</span>
        </button>
        <button
          className={`calc-tab ${platform === "tiktok" ? "is-active tiktok" : ""}`}
          type="button"
          role="tab"
          aria-selected={platform === "tiktok"}
          onClick={() => handlePlatformChange("tiktok")}
        >
          <TikTokIcon />
          <span>TikTok</span>
        </button>
        <button
          className={`calc-tab ${platform === "youtube" ? "is-active youtube" : ""}`}
          type="button"
          role="tab"
          aria-selected={platform === "youtube"}
          onClick={() => handlePlatformChange("youtube")}
        >
          <YouTubeIcon />
          <span>YouTube</span>
        </button>
        <button
          className={`calc-tab ${platform === "facebook" ? "is-active facebook" : ""}`}
          type="button"
          role="tab"
          aria-selected={platform === "facebook"}
          onClick={() => handlePlatformChange("facebook")}
        >
          <FacebookIcon />
          <span>Facebook</span>
        </button>
      </div>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 1. DESKTOP VIEWPORT: Range Slider Configurator & Interactive SVG Graph */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <div className="hide-on-mobile">
        {hasGrid && currentDesktopPkg ? (
          <div className="calculator-widget-container">
            <div className="calc-main-grid">
              {/* Left pane: Slider selections */}
              <div className="glass-panel calc-control-pane">
                <div className="pane-header">
                  <h3>Configure Reach</h3>
                  <span className="step-badge">Step 02</span>
                </div>
                
                <div className="slider-wrapper">
                  {/* Grid of package selection buttons */}
                  <div className="package-select-buttons">
                    {PACKAGES[platform as Exclude<Platform, "youtube">].map((pkg, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`package-select-btn ${packageIndex === idx ? "is-selected" : ""}`}
                        onClick={() => setPackageIndex(idx)}
                      >
                        <span className="btn-pkg-name">{pkg.name.split(" ")[0]}</span>
                        <span className="btn-pkg-count">{pkg.countLabel.split(" ")[0]}</span>
                        <strong className="btn-pkg-price">{pkg.price}</strong>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="package-features-block">
                  <h4>Inclusions</h4>
                  <ul className="package-list">
                    {currentDesktopPkg.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <a
                  className="button button-primary neon-glow checkout-btn"
                  href={getWhatsAppLink(currentDesktopPkg)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order via WhatsApp
                </a>
              </div>

              {/* Right pane: dynamic SVG graph rendering */}
              <div className="glass-panel calc-visualizer-pane">
                <div className="pane-header">
                  <h3>Growth Projection</h3>
                  <span className="live-status">LIVE GRAPHING</span>
                </div>

                <div className="visualizer-canvas">
                  <svg viewBox="0 0 300 120" className="visualizer-svg">
                    <defs>
                      <linearGradient id="glow-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--brand-strong)" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="var(--brand-strong)" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Grid lines */}
                    <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.04)" />
                    <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.04)" />
                    <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(255,255,255,0.04)" />
                    
                    {/* Area fill */}
                    <path d={graphFills[packageIndex]} fill="url(#glow-grad)" className="path-transition" />
                    
                    {/* Animated Neon curve path */}
                    <path
                      d={graphPaths[packageIndex]}
                      fill="none"
                      stroke="var(--brand-strong)"
                      strokeWidth="3.5"
                      className="path-transition glowing-line"
                    />
                  </svg>

                  <div className="projection-stats">
                    <div className="p-stat">
                      <span>Est. Target</span>
                      <strong>{currentDesktopPkg.countLabel.split(" ")[0]}</strong>
                    </div>
                    <div className="p-stat">
                      <span>Campaign Tiers</span>
                      <strong>{packageIndex + 1} / 4</strong>
                    </div>
                    <div className="p-stat">
                      <span>Est. Launch</span>
                      <strong>&lt; 24 hrs</strong>
                    </div>
                  </div>

                  <div className="visualizer-details">
                    <div className="v-detail-row">
                      <span className="v-detail-icon" aria-hidden="true">🔒</span>
                      <div className="v-detail-content">
                        <strong>TOS Compliant &amp; Secure</strong>
                        <p>100% password-free promotion. Campaigns comply fully with platform safety rules.</p>
                      </div>
                    </div>
                    <div className="v-detail-row">
                      <span className="v-detail-icon" aria-hidden="true">⚡</span>
                      <div className="v-detail-content">
                        <strong>Organic Growth Velocity</strong>
                        <p>Followers and reach scale gradually mimicking real user interactions.</p>
                      </div>
                    </div>
                    <div className="v-detail-row">
                      <span className="v-detail-icon" aria-hidden="true">🛡️</span>
                      <div className="v-detail-content">
                        <strong>Permanent Campaign Shoutouts</strong>
                        <p>Shoutouts remain permanent, providing long-term value and retention.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <YouTubeCustomCard />
        )}
      </div>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 2. MOBILE VIEWPORT: Classic grid of cards & matrix comparison table */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <div className="hide-on-desktop">
        {hasGrid ? (
          <div className="packages-container">
            <div className="package-classic-grid">
              {PACKAGES[platform as Exclude<Platform, "youtube">].map((pkg, idx) => (
                <article key={idx} className="package-card glass-panel relative-card">
                  <div className="classic-card-header">
                    <h3>{pkg.name}</h3>
                    <span className="classic-count">{pkg.countLabel}</span>
                    <div className="classic-price-row">
                      <strong className="classic-price">{pkg.price}</strong>
                      <span className="classic-sub">/ one-off</span>
                    </div>
                  </div>

                  <div className="classic-divider"></div>

                  <ul className="package-list">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>

                  <a
                    className="button button-primary neon-glow classic-checkout-btn"
                    href={getWhatsAppLink(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order via WhatsApp
                  </a>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <YouTubeCustomCard />
        )}
      </div>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 2.5 COMMON FOR BOTH VIEWPORTS: Matrix Comparison Table */}
      {/* ───────────────────────────────────────────────────────────────── */}
      {hasGrid && (
        <div className="packages-container comparison-desktop-mobile-wrapper">
          {/* Matrix comparison table trigger */}
          <div className="comparison-toggle-row">
            <button
              className="button button-secondary compare-toggle-btn"
              onClick={() => setShowComparison(!showComparison)}
            >
              {showComparison ? "Hide Detailed Comparison" : "Compare Packages & Features"}
            </button>
          </div>

          {/* Matrix table expandable panel */}
          {showComparison && (
            <div className="comparison-table-wrapper glass-panel">
              <table className="comparison-matrix">
                <thead>
                  <tr>
                    <th>Features Included</th>
                    <th>Starter</th>
                    <th>Growth</th>
                    <th>Premium</th>
                    <th>Ultimate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Target Followers</td>
                    <td>4K - 5K</td>
                    <td>10K</td>
                    <td>20K</td>
                    <td>50K</td>
                  </tr>
                  <tr>
                    <td>Permanent Posts</td>
                    <td>1 Post</td>
                    <td>2 Posts</td>
                    <td>3 Posts</td>
                    <td>All Pages</td>
                  </tr>
                  <tr>
                    <td>Story Promotion</td>
                    <td className="check-cell">✓</td>
                    <td className="check-cell">✓</td>
                    <td className="check-cell">✓</td>
                    <td className="check-cell">✓</td>
                  </tr>
                  <tr>
                    <td>Story Highlights</td>
                    <td className="cross-cell">✕</td>
                    <td className="check-cell">✓</td>
                    <td className="check-cell">✓</td>
                    <td className="check-cell">✓</td>
                  </tr>
                  <tr>
                    <td>Priority Support</td>
                    <td className="cross-cell">✕</td>
                    <td className="cross-cell">✕</td>
                    <td className="cross-cell">✕</td>
                    <td className="check-cell">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 3. COMMON: Accepted Payment Platforms (Static Badges) */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <div style={{ marginTop: "40px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <p className="eyebrow" style={{ marginBottom: "0" }}>Supported Payment Channels</p>
        <div className="payment-gateways-row" style={{ marginTop: "0" }}>
          <span className="gateway-badge stripe">Stripe</span>
          <span className="gateway-badge paypal">PayPal</span>
          <span className="gateway-badge card">Credit Card</span>
          <span className="gateway-badge cashapp">Cash App</span>
          <span className="gateway-badge upi">UPI / Net Banking</span>
          <span className="gateway-badge crypto">Crypto Accepted</span>
        </div>
      </div>
    </section>
  );
}
