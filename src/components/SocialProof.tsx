import React from "react";

export default function SocialProof() {
  return (
    <section className="social-proof-section" id="social-proof" aria-labelledby="sp-title">
      {/* Left column: heading + stats + social row */}
      <div className="sp-left">
        <h2 id="sp-title">Numbers that speak for the work.</h2>
        <p className="sp-lead">Every stat below comes from live campaign data across Instagram and TikTok. No estimates — just what the packages actually deliver.</p>

        <div className="sp-stat-list" aria-label="Key performance statistics">
          <div className="sp-stat-entry">
            <span className="sp-stat-icon" aria-hidden="true">&#9650;</span>
            <div className="sp-stat-text">
              <strong className="sp-stat-headline">500+ successful projects</strong>
              <p className="sp-stat-desc">Campaigns completed across Instagram and TikTok since launch, spanning creators, brands, and small businesses in over 30 countries.</p>
            </div>
          </div>
          <div className="sp-stat-entry">
            <span className="sp-stat-icon sp-icon-alt" aria-hidden="true">&#128101;</span>
            <div className="sp-stat-text">
              <strong className="sp-stat-headline">1,200+ active clients</strong>
              <p className="sp-stat-desc">Page owners and creators who have placed at least one order and returned for a follow-up campaign within 90 days.</p>
            </div>
          </div>
          <div className="sp-stat-entry">
            <span className="sp-stat-icon sp-icon-green" aria-hidden="true">&#10003;</span>
            <div className="sp-stat-text">
              <strong className="sp-stat-headline">24h average review time</strong>
              <p className="sp-stat-desc">From order submission to promotion start — our fastest packages are confirmed and running within one business day.</p>
            </div>
          </div>
        </div>

        <div className="sp-social-row">
          <div className="avatar-stack" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="sp-social-caption">Join <strong>1,200+</strong> satisfied clients growing their reach today.</p>
        </div>
      </div>

      {/* Right column: illustration */}
      <div className="sp-right" aria-hidden="true">
        <div className="sp-illustration-bg"></div>
        <div className="sp-illustration-scene">
          {/* Floating accent shapes */}
          <div className="sp-shape sp-shape-circle"></div>
          <div className="sp-shape sp-shape-ring"></div>
          {/* Central stats card */}
          <div className="sp-visual-card">
            <div className="sp-vc-header">
              <span className="sp-vc-dot"></span>
              <span className="sp-vc-dot sp-vc-dot-alt"></span>
              <span className="sp-vc-title">Campaign overview</span>
            </div>
            <div className="sp-vc-body">
              <div className="sp-vc-row">
                <span className="sp-vc-label">Followers gained</span>
                <span className="sp-vc-value">+10,240</span>
              </div>
              <div className="sp-vc-bar-wrap"><div className="sp-vc-bar" style={{ width: "82%" }}></div></div>
              <div className="sp-vc-row sp-vc-row-mt">
                <span className="sp-vc-label">Story views</span>
                <span className="sp-vc-value">+54K</span>
              </div>
              <div className="sp-vc-bar-wrap"><div className="sp-vc-bar sp-vc-bar-teal" style={{ width: "68%" }}></div></div>
              <div className="sp-vc-row sp-vc-row-mt">
                <span className="sp-vc-label">Post reach</span>
                <span className="sp-vc-value">+29K</span>
              </div>
              <div className="sp-vc-bar-wrap"><div className="sp-vc-bar sp-vc-bar-purple" style={{ width: "55%" }}></div></div>
            </div>
            <div className="sp-vc-footer">
              <span className="sp-vc-badge">&#9650; 38% vs last month</span>
            </div>
          </div>
          {/* Secondary mini card */}
          <div className="sp-mini-card">
            <span className="sp-mini-icon">&#127775;</span>
            <div>
              <strong>4.9 / 5</strong>
              <span>Avg. satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
