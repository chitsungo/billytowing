import { CallToAction, GalleryGrid, HeroCarousel, SectionIntro, ServiceCard } from "./components";
import { ADDRESS, MAP_COORDINATES, MAP_DIRECTIONS_URL, MAP_EMBED_URL, PHONE_TEL, services } from "./data";
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

      <section className="section border-y border-white/10 bg-[#002B5B]/10" aria-label="Billy Towing location">
        <div className="container grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch lg:gap-16">
          <div className="flex flex-col justify-center">
            <SectionIntro eyebrow="Our location" title="Based in Harare. Ready to respond." body="Find Billy Towing at the location below, or open Google Maps for directions directly from your current position." />
            <div className="mt-9 border-y border-white/15 py-6">
              <div className="grid grid-cols-[42px_1fr] items-center gap-4">
                <span className="flex h-[42px] w-[42px] items-center justify-center bg-[#002B5B]"><Icon name="pin" /></span>
                <div>
                  <p className="m-0 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#C9CDD2]">Billy Towing base</p>
                  <p className="mt-1 mb-0 font-semibold text-white">{ADDRESS}</p>
                  <p className="mt-1 mb-0 text-xs text-[#C9CDD2]">{MAP_COORDINATES}</p>
                </div>
              </div>
            </div>
            <a className="button button-primary mt-8 self-start" href={MAP_DIRECTIONS_URL} target="_blank" rel="noreferrer">
              Open in Google Maps <Icon name="arrow" />
            </a>
          </div>
          <div className="relative min-h-[380px] overflow-hidden border border-white/15 bg-[#0A0A0A] lg:min-h-[540px]">
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              src={MAP_EMBED_URL}
              title="Google Map showing Billy Towing in Harare"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute top-4 left-4 border border-white/15 bg-[#0A0A0A]/90 px-4 py-3 shadow-lg">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white">Harare location</span>
            </div>
          </div>
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

      <section className="section gallery-section sm:hidden">
        <div className="container">
          <div className="section-heading-row">
            <SectionIntro eyebrow="Recent work" title="Real recoveries. Real equipment." body="A look at Billy Towing vehicles and recent transport work across Harare." />
            <a className="text-link section-link" href="/gallery">View full gallery <Icon name="arrow" /></a>
          </div>
          <GalleryGrid limit={6} />
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
