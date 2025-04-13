import { TestimonialsSection } from "@/components/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Arjun Mehta",
      handle: "@arjunbiz",
      avatar:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b0?w=150&h=150&fit=crop&crop=face",
    },
    text: "From start to finish, the team delivered a seamless experience. Our website is not only visually stunning but also performs flawlessly.",
    href: "https://twitter.com/arjunbiz",
  },
  {
    author: {
      name: "Lisa Chen",
      handle: "@lisatech",
      avatar:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face",
    },
    text: "The mobile app exceeded our expectations! The UI/UX is sleek, and the performance is top-notch. Highly recommend their expertise.",
    href: "https://twitter.com/lisatech",
  },
  {
    author: {
      name: "Michael Carter",
      handle: "@michaelstartup",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face",
    },
    text: "Our SaaS platform is now scalable and secure, thanks to their development team. They delivered exactly what we needed on time!",
    href: "https://twitter.com/michaelstartup",
  },
  {
    author: {
      name: "Priya Sharma",
      handle: "@priyadigital",
      avatar:
        "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?w=150&h=150&fit=crop&crop=face",
    },
    text: "They took our vision and turned it into a reality. The custom web app they built has streamlined our operations beyond expectations.",
    href: "https://twitter.com/priyadigital",
  },
];

export default function TestiMonial() {
  return (
    <div className="h-[]">
      <TestimonialsSection
        title="Trusted by customers worldwide"
        description="Join businesses worldwide in transforming the future with our cutting-edge web, mobile, and AI-driven solutions."
        testimonials={testimonials}
      />
    </div>
  );
}
