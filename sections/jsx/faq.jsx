import React from "react";
import "../css/faq.css";
//link
import { Link } from "react-router-dom";

export const FAQ = () => {
  const faqs = [
    {
      q: "How long do implants last?",
      a: "With proper care and maintenance, dental implants can last a lifetime. They're anchored in bone and built to endure. Regular checkups keep them strong."
    },
    {
      q: "Is whitening safe for sensitive teeth?",
      a: "We use advanced technology designed for sensitivity. Our team customizes each treatment to your needs. You'll see results without the discomfort."
    },
    {
      q: "What's involved in smile design?",
      a: "We start by listening to your vision. Digital imaging shows you the possibilities before we begin. Every adjustment serves your unique features and goals."
    },
    {
      q: "How often should I visit?",
      a: "Most patients benefit from checkups twice yearly. We'll create a schedule based on your specific needs. Prevention beats treatment every time."
    },
    {
      q: "Do you offer payment plans?",
      a: "Yes. We work with multiple financing options to make care accessible. Talk with our team about what works for your situation."
    }
  ];

  return (
    <div className="faq-main" id="faq">

      <div className="container faq-container">

        {/* TITLE */}
        <div className="faq-header">
          <h2>Questions</h2>
          <p>Everything you need to know before your first visit</p>
        </div>

        {/* FAQ LIST */}
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div key={index} className="faq-item">
              <h4>{item.q}</h4>
              <p>{item.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="faq-cta">
          <h3>Ready to talk?</h3>
          <p>Reach out and let's discuss your smile</p>
          <Link className="btn border" to="/book">Contact</Link>
        </div>

      </div>

    </div>
  );
};