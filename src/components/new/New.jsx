"use client";
import { FaqSection } from "../faq";

const DEMO_FAQS = [
  {
    question: "How do I get started with your services",
    answer:
      "You can contact us via our website, email, or phone. Our team will discuss your requirements, provide a proposal, and outline the development process...",
  },
  {
    question: "What types of websites do you develop?",
    answer:
      "We develop corporate websites, e-commerce platforms, blogs, portfolio sites, and custom web applications...",
  },
  {
    question: "Can you turn my website into an app?",
    answer:
      "Yes, we can create a mobile app version of your website with enhanced features..",
  },
  {
    question: "Do you provide custom solutions",
    answer:
      "Yes, all our services are tailored to meet your specific business needs and goals..",
  },
];

export function FaqSectionDemo() {
  return (
    <div className="w-full flex justify-center  ">
      <FaqSection
        title="Frequently Asked Questions"
        description="Everything you need to know about our platform"
        items={DEMO_FAQS}
        contactInfo={{
          title: "Still have questions?",
          description: "We're here to help you",
          buttonText: "Contact Support",
          onContact: () => console.log("Contact support clicked"),
        }}
      />
    </div>
  );
}
