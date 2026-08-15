import type { Metadata } from "next";
import { CallToAction, GalleryGrid, PageHero, SectionIntro } from "../components";

export const metadata: Metadata = {
  title: "Recovery Gallery",
  description: "See real Billy Towing trucks, roadside recoveries and vehicle transport work across Harare.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero eyebrow="Real work across Harare" title="Our trucks. Our team. Our recoveries." body="Every image below comes from real Billy Towing operations and vehicle transport work." image="/images/billy/convoy.webp" position="center 58%" />
      <section className="section">
        <div className="container">
          <SectionIntro eyebrow="Work gallery" title="Prepared for more than one kind of recovery." body="Select any image for a closer look." />
          <GalleryGrid />
        </div>
      </section>
      <CallToAction />
    </main>
  );
}

