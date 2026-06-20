import React from "react";

export default function FAQ() {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      {/* Left column: heading + contact block */}
      <div className="faq-intro">
        <h2 id="faq-title">Before you order</h2>
        <p className="faq-lead">Everything you need to know about packages, platforms, and how the order process works.</p>

        <div className="faq-contact-block">
          <div className="faq-contact-group">
            <span className="faq-icon faq-icon-location" aria-hidden="true"></span>
            <address className="faq-address">Velnor World HQ<br/>Digital Services Division<br/>Remote-first, Global</address>
          </div>
          <div className="faq-contact-group">
            <span className="faq-icon faq-icon-info" aria-hidden="true"></span>
            <div>
              <span className="faq-contact-label">Support &amp; enquiries</span><br/>
              <a href="mailto:support@velnorworld.shop" className="faq-email-link">support@velnorworld.shop</a>
            </div>
          </div>
        </div>

        <a className="button button-secondary faq-cta" href="mailto:support@velnorworld.shop?subject=Question%20before%20order">
          <span className="faq-cta-icon" aria-hidden="true"></span>
          Ask a question
        </a>
      </div>

      {/* Right column: accordion items */}
      <div className="faq-accordion" role="list">
        <details className="faq-item" role="listitem">
          <summary className="faq-summary">
            <span className="faq-q-icon" aria-hidden="true">?</span>
            <span className="faq-question">Do I need to share my password?</span>
            <span className="faq-chevron" aria-hidden="true"></span>
          </summary>
          <div className="faq-answer">
            <p>No. We only need your public profile link and the package details to begin. Your login credentials are never required at any point in the process.</p>
          </div>
        </details>

        <details className="faq-item" role="listitem">
          <summary className="faq-summary">
            <span className="faq-q-icon" aria-hidden="true">?</span>
            <span className="faq-question">Which package is most popular?</span>
            <span className="faq-chevron" aria-hidden="true"></span>
          </summary>
          <div className="faq-answer">
            <p>The <a href="#packages" className="faq-inline-link">Instagram Growth Package at $45</a> is our most-ordered plan. It covers 10K followers, two permanent page posts, story promotion, and a story highlight — a solid combination for active pages.</p>
          </div>
        </details>

        <details className="faq-item" role="listitem">
          <summary className="faq-summary">
            <span className="faq-q-icon" aria-hidden="true">?</span>
            <span className="faq-question">Can I order a TikTok package?</span>
            <span className="faq-chevron" aria-hidden="true"></span>
          </summary>
          <div className="faq-answer">
            <p>Yes. TikTok packages start at $50 for the Starter plan (5K followers) and scale up to the $320 Ultimate plan with 50K followers and all-pages promotion. Select the TikTok tab in the <a href="#packages" className="faq-inline-link">packages section</a> to compare tiers side by side.</p>
          </div>
        </details>

        <details className="faq-item" role="listitem">
          <summary className="faq-summary">
            <span className="faq-q-icon" aria-hidden="true">?</span>
            <span className="faq-question">How long does delivery take?</span>
            <span className="faq-chevron" aria-hidden="true"></span>
          </summary>
          <div className="faq-answer">
            <p>Order review typically happens within 24 hours of receiving your profile link and campaign notes. Promotion then begins within the following business day once scope is confirmed.</p>
          </div>
        </details>

        <details className="faq-item" role="listitem">
          <summary className="faq-summary">
            <span className="faq-q-icon" aria-hidden="true">?</span>
            <span className="faq-question">Can I upgrade my plan later?</span>
            <span className="faq-chevron" aria-hidden="true"></span>
          </summary>
          <div className="faq-answer">
            <p>Absolutely. Simply send a new order email referencing your existing campaign and the upgraded package. The difference is handled as a separate order with the same fast review process.</p>
          </div>
        </details>
      </div>
    </section>
  );
}
