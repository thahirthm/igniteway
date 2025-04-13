import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Empowering Businesses",
      description:
        "We build tools and solutions that help businesses innovate and scale effortlessly.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Seamless User Experience",
      description:
        "Our solutions are designed with simplicity and efficiency, making complex tasks easier.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Transparent & Fair Pricing",
      description:
        "No hidden fees, no surprises—just clear and competitive pricing that fits your needs.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Reliable Infrastructure",
      description: "With a commitment to uptime, we ensure uninterrupted performance for our clients.",
      icon: <IconCloud />,
    },
    {
      title: "Scalable & Secure Architecture",
      description: "Built with modern multi-tenant architecture to provide flexibility and security.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Dedicated 24/7 Support",
      description:
        "Our expert team is always available to assist you, ensuring smooth operations round the clock.",
      icon: <IconHelp />,
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "We stand by our services. If you're not satisfied, we'll work tirelessly to meet your expectations.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Driven by Passion",
      description: "We are a team of thinkers, builders, and dreamers, committed to making a difference.",
      icon: <IconHeart />,
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}
const Feature = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 transition-transform duration-200 hover:scale-105",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {/* ICON - Always White */}
      <div className="mb-4 relative z-10 px-10 text-white">
        {icon}
      </div>
      {/* TITLE - Always White */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-200 origin-center" />
        <span className="inline-block text-white">
          {title}
        </span>
      </div>
      {/* DESCRIPTION - Always White */}
      <p className="text-sm text-white max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
