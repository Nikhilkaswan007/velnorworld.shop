import React from "react";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="page-shell">
      <Hero />

      <section className="stats-strip" aria-label="Service benefits">
        <article>
          <strong>1,200+</strong>
          <span>Active Clients</span>
        </article>
        <article>
          <strong>10,000+</strong>
          <span>Completed Campaigns</span>
        </article>
        <article>
          <strong>$25</strong>
          <span>Entry package</span>
        </article>
        <article>
          <strong>50K</strong>
          <span>Largest follower plan</span>
        </article>
      </section>

      <Packages />

      <section className="process-section" id="process" aria-labelledby="process-title">
        <div className="section-heading centered-heading">
          <p className="eyebrow">Onboarding Process</p>
          <h2 id="process-title">How Social Promotion Works</h2>
          <p className="section-subtitle">
            Follow our straightforward four-step manual campaign onboarding pathway to launch your promotion safely and password-free.
          </p>
        </div>

        <div className="process-diagram-wrapper">
          {/* Step 1 */}
          <div className="process-flow-step">
            <div className="step-illustration-circle">
              <svg className="flow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
                <line x1="15" y1="3" x2="15" y2="21" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="3" y1="15" x2="21" y2="15" />
              </svg>
              <span className="flow-step-num">01</span>
            </div>
            <div className="flow-step-desc">
              <h3>Select Package</h3>
              <p>Choose Instagram, TikTok, or YouTube, then pick the exact promotion tier you need.</p>
            </div>
          </div>

          <div className="flow-connector" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="arrow-svg"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          </div>

          {/* Step 2 */}
          <div className="process-flow-step">
            <div className="step-illustration-circle">
              <svg className="flow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
              <span className="flow-step-num">02</span>
            </div>
            <div className="flow-step-desc">
              <h3>Secure Manual Payment</h3>
              <p>Scan the invoice QR code or use direct checkout links (Stripe, PayPal, or Crypto) to pay.</p>
            </div>
          </div>

          <div className="flow-connector" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="arrow-svg"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          </div>

          {/* Step 3 */}
          <div className="process-flow-step">
            <div className="step-illustration-circle">
              <svg className="flow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <span className="flow-step-num">03</span>
            </div>
            <div className="flow-step-desc">
              <h3>Take Screenshot</h3>
              <p>Capture a screenshot of your successful transaction receipt or invoice verification.</p>
            </div>
          </div>

          <div className="flow-connector" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="arrow-svg"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          </div>

          {/* Step 4 */}
          <div className="process-flow-step">
            <div className="step-illustration-circle">
              <svg className="flow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span className="flow-step-num">04</span>
            </div>
            <div className="flow-step-desc">
              <h3>Submit on WhatsApp</h3>
              <p>Send the receipt screenshot and account profile link directly to our WhatsApp support representative (or email backup).</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />

      <section className="contact-card" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Ready to start?</p>
          <h2 id="contact-title">Send your page details and target platform.</h2>
          <p>
            Include the package name, profile link, and any campaign notes so the order can be
            checked quickly.
          </p>
        </div>
        <a className="button button-primary" href="mailto:support@velnorworld.shop?subject=Package%20Order">
          Order by email
        </a>
      </section>
    </main>
  );
}
