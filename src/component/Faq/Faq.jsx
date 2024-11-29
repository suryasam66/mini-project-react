import React, { useState } from "react";
import "../Faq/faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time from your account settings.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add additional details like company name or VAT number to your invoices.",
    },
    {
      question: "How does billing work?",
      answer: "We bill your account monthly or annually based on the plan you choose.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can update your email address from the account settings page.",
    },
  ];

  return (
    <div className="faq-container">
      <h1>Frequently asked questions</h1>
      <p>Everything you need to know about the product and billing.</p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
