import type { NavigationItem } from "@/types/navigation";
import type { SiteContent } from "@/types/content";

export const siteContent = {
  title: "Portfolio Foundation",
  description: "Base reutilizável para portfólios profissionais.",
} satisfies SiteContent;

export const siteNavigation = [
  {
    href: "/",
    label: "Início",
  },
] satisfies NavigationItem[];
