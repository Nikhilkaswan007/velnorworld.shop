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
              <p>Choose Instagram, TikTok, YouTube, or Facebook, then pick the exact promotion tier you need.</p>
            </div>
          </div>

          <div className="flow-connector" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="arrow-svg"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          </div>

          {/* Step 2 */}
          <div className="process-flow-step">
            <div className="step-illustration-circle">
              <svg className="flow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span className="flow-step-num">02</span>
            </div>
            <div className="flow-step-desc">
              <h3>Order on WhatsApp</h3>
              <p>Click "Order via WhatsApp" to launch the chat with your package specifications pre-loaded.</p>
            </div>
          </div>

          <div className="flow-connector" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="arrow-svg"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          </div>

          {/* Step 3 */}
          <div className="process-flow-step">
            <div className="step-illustration-circle">
              <svg className="flow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
              <span className="flow-step-num">03</span>
            </div>
            <div className="flow-step-desc">
              <h3>Select Payment Option</h3>
              <p>Chat with us to pick your preferred option: Stripe, PayPal, Cards, UPI, Cash App, or Crypto.</p>
            </div>
          </div>

          <div className="flow-connector" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="arrow-svg"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          </div>

          {/* Step 4 */}
          <div className="process-flow-step">
            <div className="step-illustration-circle">
              <svg className="flow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="flow-step-num">04</span>
            </div>
            <div className="flow-step-desc">
              <h3>Pay &amp; Launch Campaign</h3>
              <p>Complete payment, send the screenshot receipt in the chat, and your campaign starts within 24 hours.</p>
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
