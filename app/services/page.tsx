import type { Metadata } from "next";
import { CallToAction, PageHero, SectionIntro, ServiceCard } from "../components";
import { ADDRESS, MAP_DIRECTIONS_URL, services } from "../data";
import { Icon } from "../icons";

export const metadata: Metadata = {
  title: "Towing & Roadside Services",
  description: "Emergency towing, flatbed recovery, jump starts, tyre assistance, fuel delivery and specialist transport in Harare.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Available day and night"
        title="Roadside help built around your situation."
        body="Tell us what happened, where you are and what you are driving. We’ll send the right recovery vehicle and keep the process clear."
        image="/images/billy/night-recovery.webp"
        position="center 56%"
      />
      <section className="section">
        <div className="container">
          <SectionIntro eyebrow="Our services" title="Professional recovery from road to destination." body="Urgent roadside response and planned vehicle transport, handled with capable equipment and careful loading." />
          <div className="service-grid service-grid-page">
            {services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
          </div>
        </div>
      </section>
      <section className="section process-section">
        <div className="container process-layout">
          <div>
            <SectionIntro eyebrow="What happens next" title="Three clear steps to get you moving." body="You do not need to diagnose the problem. Give us the essentials and we will guide the recovery." />
            <img className="process-image" src="/images/billy/double-cab-recovery.webp" alt="Vehicle securely loaded onto a Billy Towing flatbed" />
          </div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Call or WhatsApp</h3><p>Share your location, vehicle and what has happened. Photos can help us assess the situation quickly.</p></div></li>
            <li><span>02</span><div><h3>We dispatch the right truck</h3><p>We confirm the plan and send suitable recovery equipment to your location.</p></div></li>
            <li><span>03</span><div><h3>Safe recovery and delivery</h3><p>Your vehicle is loaded securely and moved to the agreed destination.</p></div></li>
          </ol>
        </div>
      </section>
      <section className="section coverage-section">
        <div className="container coverage-grid">
          <div className="coverage-icon"><Icon name="pin" /></div>
          <div><p className="eyebrow"><span />Service area</p><h2>Harare and surrounding areas.</h2></div>
          <p>Based at <a href={MAP_DIRECTIONS_URL} target="_blank" rel="noreferrer">{ADDRESS}</a>. Not sure whether we can reach you? Call with your location and we will confirm availability.</p>
        </div>
      </section>
      <CallToAction title="Tell us what happened. We’ll handle the recovery." />
    </main>
  );
}
