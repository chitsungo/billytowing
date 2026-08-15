import type { Metadata } from "next";
import { CallToAction, PageHero, SectionIntro } from "../components";
import { ADDRESS } from "../data";
import { Icon } from "../icons";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Billy Towing, a professional local towing and vehicle recovery company serving Harare since 2023.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Harare born · Established 2023"
        title="Local knowledge. Professional recovery."
        body="Billy Towing was built to give Harare motorists a dependable call to make when the road does not go to plan."
        image="/images/billy/team.webp"
        position="center 50%"
      />
      <section className="section">
        <div className="container about-intro-grid">
          <div><SectionIntro eyebrow="Our story" title="Built around one simple promise: show up ready." /></div>
          <div className="about-prose">
            <p>Since 2023, Billy Towing has provided emergency towing, roadside assistance and vehicle transport across Harare. We understand that the person calling us is often dealing with uncertainty, inconvenience or a vehicle in an unsafe position.</p>
            <p>That is why our service starts with calm communication. We establish where you are, understand the vehicle and situation, then send equipment suited to the job. From loading to delivery, the focus stays on safety, care and a professional experience.</p>
          </div>
        </div>
      </section>
      <section className="section values-section">
        <div className="container">
          <SectionIntro eyebrow="What guides us" title="Strong equipment. Straightforward service." align="center" />
          <div className="values-grid">
            <article><span><Icon name="clock" /></span><h3>Reliable</h3><p>Available 24 hours, with honest communication from dispatch to delivery.</p></article>
            <article><span><Icon name="shield" /></span><h3>Careful</h3><p>Secure loading and controlled transport that respects your vehicle.</p></article>
            <article><span><Icon name="check" /></span><h3>Professional</h3><p>A capable team, clean process and clear expectations from the first call.</p></article>
            <article><span><Icon name="pin" /></span><h3>Local</h3><p>Based at {ADDRESS} and familiar with Harare roads, suburbs and surrounding routes.</p></article>
          </div>
        </div>
      </section>
      <section className="section fleet-story-section">
        <div className="container fleet-story-grid">
          <div className="fleet-story-copy">
            <SectionIntro eyebrow="Ready for the job" title="From everyday vehicles to specialist loads." body="Our work includes accident and breakdown recovery, planned flatbed transport and movement of larger loads such as caravans, forklifts and tractors." />
            <a className="text-link" href="/gallery">See our recent work <Icon name="arrow" /></a>
          </div>
          <div className="fleet-collage">
            <img src="/images/billy/tractor-transport.webp" alt="Tractors transported by Billy Towing" />
            <img src="/images/billy/caravan-transport.webp" alt="Caravan transported by Billy Towing" />
          </div>
        </div>
      </section>
      <CallToAction />
    </main>
  );
}
