"use client";

import React, { useState } from "react";

type PlanId = "starter" | "growth" | "pro";
type Currency = "USD" | "EUR" | "GBP";

interface PlanDetails {
  id: PlanId;
  name: string;
  sub: string;
  desc: string;
  prices: Record<Currency, number>;
}

const PLANS: PlanDetails[] = [
  {
    id: "starter",
    name: "Starter",
    sub: "For testing a campaign safely",
    desc: "Entry promotion scope with weekly profile checks and starter campaign storage.",
    prices: { USD: 49, EUR: 45, GBP: 39 }
  },
  {
    id: "growth",
    name: "Growth",
    sub: "For active creators and brand pages",
    desc: "Expanded campaign scope, more saved campaign slots, and priority order review.",
    prices: { USD: 99, EUR: 90, GBP: 79 }
  },
  {
    id: "pro",
    name: "Pro",
    sub: "For agencies and repeat campaigns",
    desc: "Highest monthly scope with team-ready support, saved briefs, and priority scheduling.",
    prices: { USD: 179, EUR: 165, GBP: 145 }
  }
];

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£"
};

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>("growth");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    setShowCurrencyDropdown(false);
  };

  return (
    <section className="pricing-section" id="pricing" aria-labelledby="pricing-title">
      <div className="pricing-copy">
        <h2 id="pricing-title">Choose the monthly growth lane that fits your campaign.</h2>
        <p>
          Built for creators and small teams that want predictable promotion support without
          sorting through one-off add-ons every week.
        </p>
        <div className="value-list" aria-label="Plan value propositions">
          <div className="value-row">
            <span className="value-icon" aria-hidden="true">01</span>
            <span>Platform-ready Instagram and TikTok promotion</span>
          </div>
          <div className="value-row">
            <span className="value-icon" aria-hidden="true">02</span>
            <span>Post, story, and follower campaign coordination</span>
          </div>
          <div className="value-row">
            <span className="value-icon" aria-hidden="true">03</span>
            <span>No password required to start an order</span>
          </div>
        </div>
        <div className="proof-row">
          <div className="avatar-stack" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Used by 1,200+ creators, page owners, and small brands worldwide.</p>
        </div>
      </div>

      <div className="pricing-panel" aria-label="Subscription plans">
        <div className="plan-stack" role="radiogroup" aria-label="Growth plan options">
          {PLANS.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            return (
              <button
                key={plan.id}
                className={`plan-card ${isSelected ? "is-selected" : ""}`}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <span className="plan-top">
                  <span>
                    <strong>{plan.name}</strong>
                    <small>{plan.sub}</small>
                  </span>
                  <span className="radio-indicator" aria-hidden="true"></span>
                </span>
                <span className="plan-divider"></span>
                <span className="plan-price">
                  <strong>
                    {CURRENCY_SYMBOLS[currency]}
                    {plan.prices[currency]}
                  </strong>
                  <small>/month</small>
                </span>
                <span className="plan-summary">{plan.desc}</span>
              </button>
            );
          })}
        </div>

        <div className="pricing-footer">
          <div style={{ position: "relative" }}>
            <button 
              className="currency-select" 
              type="button"
              onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
            >
              {CURRENCY_SYMBOLS[currency]} {currency} <span className="chevron" aria-hidden="true"></span>
            </button>
            {showCurrencyDropdown && (
              <div 
                style={{
                  position: "absolute",
                  bottom: "calc(100% + 8px)",
                  left: 0,
                  display: "grid",
                  gap: "6px",
                  minWidth: "120px",
                  padding: "8px",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  background: "var(--bg-soft)",
                  boxShadow: "var(--shadow-lg)",
                  zIndex: 10
                }}
              >
                {(["USD", "EUR", "GBP"] as Currency[]).map((cur) => (
                  <button
                    key={cur}
                    type="button"
                    style={{
                      border: 0,
                      background: "transparent",
                      color: currency === cur ? "var(--brand-strong)" : "var(--body)",
                      fontWeight: currency === cur ? "bold" : "normal",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      textAlign: "left",
                      cursor: "pointer"
                    }}
                    onClick={() => handleCurrencyChange(cur)}
                  >
                    {CURRENCY_SYMBOLS[cur]} {cur}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="pricing-actions">
            <a className="button button-secondary" href="#faq">Terms <span aria-hidden="true">&rarr;</span></a>
            <a className="button button-primary" href="#contact">Checkout <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
