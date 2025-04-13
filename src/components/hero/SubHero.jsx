import { Hero } from "@/components/hero"

function SubHero() {
  return (
    <Hero
    title="A team that works for you."
    subtitle="Transform your workflow with intelligent automation. Simple, powerful, reliable."
    actions={[
      {
        label: "show works",
        href: "#",
        variant: "outline"
      },
      {
        label: "Contact us",
        href: "#",
        variant: "default"
      }
    ]}
    titleClassName="text-5xl md:text-6xl font-extrabold"
    subtitleClassName="text-lg md:text-xl max-w-[600px]"
    actionsClassName="mt-8"
  />
 
  );
}

export default SubHero;