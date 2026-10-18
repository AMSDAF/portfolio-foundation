import { ContentSection } from "@/components/content-section";
import { Hero } from "@/components/hero";
import { siteHero, siteSections } from "@/config/site";

export default function Home() {
  return (
    <>
      <Hero content={siteHero} />
      {siteSections.map((section) => (
        <ContentSection content={section} key={section.id} />
      ))}
    </>
  );
}
