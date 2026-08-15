import type { Metadata } from "next";
import { BookingForm, PageHero, SectionIntro } from "../components";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../data";
import { Icon } from "../icons";

export const metadata: Metadata = {
  title: "Contact & Request Help",
  description: "Call or WhatsApp Billy Towing for 24/7 towing and roadside assistance in Harare.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="We are ready 24/7" title="Stranded? Start with one call." body="Send your location and tell us what happened. We’ll help you choose the safest next step." image="/images/billy/fleet-night.webp" position="center 42%" />
      <section className="section contact-section">
        <div className="container contact-layout">
          <div className="contact-details">
            <SectionIntro eyebrow="Contact Billy Towing" title="Fastest help: call or WhatsApp." body="For an active roadside emergency, calling is the quickest way to reach the team." />
            <div className="contact-cards">
              <a href={`tel:${PHONE_TEL}`}><span><Icon name="phone" /></span><div><small>Emergency phone</small><strong>{PHONE_DISPLAY}</strong><p>Tap to call now</p></div><Icon name="arrow" /></a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><span><Icon name="message" /></span><div><small>WhatsApp</small><strong>Message our team</strong><p>Share photos and your location</p></div><Icon name="arrow" /></a>
            </div>
            <div className="contact-facts">
              <div><Icon name="clock" /><div><small>Hours</small><strong>Open 24 hours, every day</strong></div></div>
              <div><Icon name="pin" /><div><small>Based in</small><strong>Harare, Zimbabwe</strong></div></div>
              <div><Icon name="shield" /><div><small>Service</small><strong>Fully insured recovery</strong></div></div>
            </div>
          </div>
          <div className="request-panel" id="request">
            <p className="eyebrow"><span />Request assistance</p>
            <h2>Give us the essentials.</h2>
            <p>Complete the details below and we will prepare them as a WhatsApp message for you to send.</p>
            <BookingForm />
          </div>
        </div>
      </section>
      <section className="safety-note-section">
        <div className="container safety-note">
          <span><Icon name="shield" /></span>
          <div><h2>If your vehicle is in a dangerous position</h2><p>Move to a safe place away from traffic if you can do so safely, switch on your hazard lights and call us with your exact location.</p></div>
        </div>
      </section>
    </main>
  );
}

