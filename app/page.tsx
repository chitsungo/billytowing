import { CallToAction, HeroCarousel, SectionIntro, ServiceCard } from "./components";
import { PHONE_TEL, services } from "./data";
import { Icon } from "./icons";

const trustItems = [
  { icon: "clock", label: "24/7 response" },
  { icon: "flatbed", label: "Flatbed available" },
  { icon: "shield", label: "Fully insured" },
  { icon: "pin", label: "Local Harare team" },
] as const;

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <section className="trust-bar" aria-label="Why motorists trust Billy Towing">
        <div className="container trust-grid">
          {trustItems.map((item) => (
            <div key={item.label}><Icon name={item.icon} /><span>{item.label}</span></div>
          ))}
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-heading-row">
            <SectionIntro eyebrow="Roadside solutions" title="The help you need, when you need it." body="From a simple roadside problem to full vehicle recovery, we arrive prepared and handle the situation professionally." />
            <a className="text-link section-link" href="/services">Explore all services <Icon name="arrow" /></a>
          </div>
          <div className="service-grid">
            {services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container why-grid">
          <div className="why-image-wrap">
            <img src="/images/billy/recovery-black-suv.webp" alt="Billy Towing team recovering a black SUV" />
            <div className="why-image-card"><strong>24/7</strong><span>Emergency response</span></div>
          </div>
          <div className="why-copy">
            <SectionIntro eyebrow="Why Billy Towing" title="A steady hand in a stressful moment." body="Breakdowns are disruptive. Our job is to make the next part simple: clear communication, the right equipment and safe vehicle handling." />
            <div className="benefit-list">
              <div><span><Icon name="check" /></span><div><h3>Fast local response</h3><p>A Harare-based team that knows the roads, routes and common recovery points.</p></div></div>
              <div><span><Icon name="check" /></span><div><h3>Professional equipment</h3><p>Flatbed capability and secure loading methods for careful, controlled transport.</p></div></div>
              <div><span><Icon name="check" /></span><div><h3>Clear from the first call</h3><p>Tell us where you are and what happened. We’ll explain the next step before we move.</p></div></div>
            </div>
            <a className="button button-outline" href={`tel:${PHONE_TEL}`}><Icon name="phone" />Speak to the team</a>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
