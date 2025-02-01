"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "How do we serve food?",
    answer: "We serve food with the highest quality and hygiene standards. Our chefs use fresh ingredients to prepare delicious meals that are safely packed and delivered on time.",
  },
  {
    question: "How is our food quality?",
    answer: "Our food quality is top-notch, made with fresh and organic ingredients, ensuring a rich and flavorful experience for all our customers.",
  },
  {
    question: "How do we give home delivery?",
    answer: "We have a fast and efficient delivery system that ensures your food reaches you hot and fresh within the estimated delivery time.",
  },
  {
    question: "How can we get in touch with you?",
    answer: "You can contact us via phone, email, or visit our restaurant. We are always here to help!",
  },
  {
    question: "What will be delivered? And When?",
    answer: "Your selected meals will be delivered at your preferred time slot. We ensure timely and accurate deliveries.",
  },
  {
    question: "Is this restaurant open 24/7?",
    answer: "Our restaurant operates from 8 AM to 11 PM. However, our online ordering system is available 24/7 for scheduling your orders in advance.",
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Find answers to the most common questions about our services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-[1.02]"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-5 font-medium text-lg text-gray-900 hover:bg-gray-100 transition duration-300"
              >
                {faq.question}
                <span className="text-xl text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer Content (Collapsible) */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 p-5 border-t bg-gray-50" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
