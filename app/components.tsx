"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCarouselIndex } from "./carousel";
import { heroSlides, PHONE_DISPLAY, PHONE_TEL, services, siteImages, WHATSAPP_URL } from "./data";
import { Icon } from "./icons";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Billy Towing home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 44 44" role="img">
              <path d="M7 27h22l5-9h5v12h-4" />
              <path d="M10 27V14h16l4 13" />
              <circle cx="14" cy="31" r="4" />
              <circle cx="31" cy="31" r="4" />
            </svg>
          </span>
          <span className="brand-copy">
            <strong>BILLY TOWING</strong>
            <small>Est. 2023 · Harare</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="button button-primary button-compact" href={`tel:${PHONE_TEL}`}>
            <Icon name="phone" />
            <span>Call Now</span>
          </a>
          <a className="button button-outline button-compact" href="/contact#request">
            <Icon name="calendar" />
            <span>Book Now</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
              tabIndex={open ? 0 : -1}
            >
              <span>{item.label}</span>
              <Icon name="arrow" />
            </a>
          ))}
        </nav>
        <a className="mobile-phone" href={`tel:${PHONE_TEL}`} tabIndex={open ? 0 : -1}>
          Emergency line: {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid container">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="Billy Towing home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 44 44">
                <path d="M7 27h22l5-9h5v12h-4" />
                <path d="M10 27V14h16l4 13" />
                <circle cx="14" cy="31" r="4" />
                <circle cx="31" cy="31" r="4" />
              </svg>
            </span>
            <span className="brand-copy">
              <strong>BILLY TOWING</strong>
              <small>Est. 2023 · Harare</small>
            </span>
          </Link>
          <p>Calm, capable roadside support whenever Harare roads leave you stranded.</p>
        </div>

        <div>
          <p className="footer-title">Quick links</p>
          <div className="footer-links">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
        </div>

        <div>
          <p className="footer-title">Services</p>
          <div className="footer-links">
            <a href="/services">Emergency towing</a>
            <a href="/services">Flatbed transport</a>
            <a href="/services">Roadside assistance</a>
            <a href="/services">Specialist transport</a>
          </div>
        </div>

        <div>
          <p className="footer-title">Get help</p>
          <div className="footer-contact">
            <a href={`tel:${PHONE_TEL}`}><Icon name="phone" />{PHONE_DISPLAY}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="message" />WhatsApp us</a>
            <span><Icon name="pin" />Harare, Zimbabwe</span>
            <span><Icon name="clock" />Open 24 hours</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Billy Towing. All rights reserved.</span>
        <span>24/7 towing &amp; roadside assistance</span>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className={`fab-wrap ${open ? "open" : ""}`}>
      <div id="quick-actions-menu" className="fab-menu" aria-hidden={!open}>
        <a href={`tel:${PHONE_TEL}`} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}><span>Call Now</span><Icon name="phone" /></a>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}><span>WhatsApp</span><Icon name="message" /></a>
        <a href="/contact#request" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}><span>Book Now</span><Icon name="calendar" /></a>
      </div>
      <button
        type="button"
        className="fab-main"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close quick actions" : "Open quick actions"}
        aria-expanded={open}
        aria-controls="quick-actions-menu"
      >
        <Icon name={open ? "close" : "message"} />
      </button>
    </div>
  );
}

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [timerVersion, setTimerVersion] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(
      () => {
        timerRef.current = null;
        setActive((value) => getCarouselIndex(value, 1, heroSlides.length));
      },
      6000,
    );
    timerRef.current = timer;

    return () => {
      window.clearTimeout(timer);
      if (timerRef.current === timer) timerRef.current = null;
    };
  }, [active, timerVersion]);

  const cancelAutoAdvance = () => {
    if (timerRef.current === null) return;
    window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const resetAutoAdvance = () => {
    setTimerVersion((value) => value + 1);
  };

  const select = (index: number) => {
    cancelAutoAdvance();
    setActive(index);
    resetAutoAdvance();
  };

  const move = (direction: number) => {
    cancelAutoAdvance();
    setActive((value) => getCarouselIndex(value, direction, heroSlides.length));
    resetAutoAdvance();
  };

  return (
    <section className="hero-carousel" aria-label="Billy Towing emergency services">
      {heroSlides.map((slide, index) => (
        <article
          className={`hero-slide ${index === active ? "active" : ""}`}
          key={slide.title}
          aria-hidden={index !== active}
          inert={index !== active}
        >
          <img
            src={slide.image.src}
            alt={slide.image.alt}
            width={slide.image.width}
            height={slide.image.height}
            style={{ objectPosition: slide.image.position }}
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="hero-overlay" />
          <div className="hero-content container">
            <div className="hero-copy">
              <p className="eyebrow"><span />{slide.eyebrow}</p>
              <h1>{slide.title}</h1>
              <p className="hero-body">{slide.body}</p>
              <div className="hero-actions">
                <a className="button button-primary" href={`tel:${PHONE_TEL}`}>
                  <Icon name="phone" /> Call Now
                </a>
                <a className="text-link" href="/services">View our services <Icon name="arrow" /></a>
              </div>
            </div>
            <div className="hero-status">
              <span className="status-dot" />
              <div><small>Emergency line</small><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></div>
            </div>
          </div>
        </article>
      ))}

      <div
        className="carousel-controls container"
        onPointerDown={cancelAutoAdvance}
        onPointerCancel={resetAutoAdvance}
      >
        <div className="carousel-dots" role="tablist" aria-label="Choose slide">
          {heroSlides.map((slide, index) => (
            <button
              type="button"
              key={slide.title}
              className={index === active ? "active" : ""}
              onClick={() => select(index)}
              aria-label={`Show slide ${index + 1}: ${slide.title}`}
              aria-selected={index === active}
              role="tab"
            ><span /></button>
          ))}
        </div>
        <div className="carousel-arrows">
          <button type="button" onClick={() => move(-1)} aria-label="Previous slide"><Icon name="arrow" /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next slide"><Icon name="arrow" /></button>
        </div>
      </div>
    </section>
  );
}

export function SectionIntro({ eyebrow, title, body, align = "left" }: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-intro ${align === "center" ? "center" : ""}`}>
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

export function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-icon"><Icon name={service.icon as Parameters<typeof Icon>[0]["name"]} /></span>
        <span className="service-number">0{index + 1}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <a href="/contact#request">Request help <Icon name="arrow" /></a>
    </article>
  );
}

export function PageHero({ eyebrow, title, body, image, position = "center" }: {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  position?: string;
}) {
  return (
    <section className="page-hero">
      <img src={image} alt="" style={{ objectPosition: position }} />
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <p className="eyebrow"><span />{eyebrow}</p>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </section>
  );
}

export function CallToAction({ title = "Need help on the road right now?", body = "Tell us where you are and what happened. We’ll give you a clear next step." }: { title?: string; body?: string }) {
  return (
    <section className="cta-section">
      <div className="cta-glow" />
      <div className="container cta-inner">
        <div>
          <p className="eyebrow"><span />Available 24/7</p>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="cta-actions">
          <a className="button button-white" href={`tel:${PHONE_TEL}`}><Icon name="phone" />Call {PHONE_DISPLAY}</a>
          <a className="button button-outline-light" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="message" />WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export function GalleryGrid({ limit }: { limit?: number }) {
  const images = typeof limit === "number" ? siteImages.slice(0, limit) : siteImages;
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected((value) => value === null ? null : (value + 1) % images.length);
      if (event.key === "ArrowLeft") setSelected((value) => value === null ? null : (value - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, images.length]);

  return (
    <>
      <div className={`gallery-grid ${limit ? "gallery-teaser-grid" : ""}`}>
        {images.map((image, index) => (
          <button className="gallery-item" key={image.src} type="button" onClick={() => setSelected(index)}>
            <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />
            <span className="gallery-item-overlay"><span>View image</span><Icon name="plus" /></span>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer" onClick={() => setSelected(null)}>
          <button className="lightbox-close" type="button" onClick={() => setSelected(null)} aria-label="Close image viewer"><Icon name="close" /></button>
          <button className="lightbox-prev" type="button" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); setSelected((selected - 1 + images.length) % images.length); }}><Icon name="arrow" /></button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={images[selected].src} alt={images[selected].alt} />
            <figcaption>{images[selected].alt}</figcaption>
          </figure>
          <button className="lightbox-next" type="button" aria-label="Next image" onClick={(event) => { event.stopPropagation(); setSelected((selected + 1) % images.length); }}><Icon name="arrow" /></button>
        </div>
      )}
    </>
  );
}

export function BookingForm() {
  const [message, setMessage] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const text = [
      "Hello Billy Towing, I need assistance.",
      `Name: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      `Location: ${form.get("location")}`,
      `Vehicle: ${form.get("vehicle")}`,
      `Help needed: ${form.get("service")}`,
      `Details: ${form.get("details") || "Not provided"}`,
    ].join("\n");
    window.open(`https://wa.me/263774870729?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setMessage("Your request has been prepared in WhatsApp. Send the message there to contact our team.");
  };

  return (
    <form className="booking-form" onSubmit={submit}>
      <div className="form-grid">
        <label><span>Your name</span><input name="name" type="text" autoComplete="name" required placeholder="Full name" /></label>
        <label><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" required placeholder="e.g. 0774 870 729" /></label>
        <label><span>Your location</span><input name="location" type="text" required placeholder="Road, suburb or landmark" /></label>
        <label><span>Vehicle</span><input name="vehicle" type="text" required placeholder="Make and model" /></label>
        <label className="form-wide"><span>What help do you need?</span>
          <select name="service" required defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Emergency towing</option><option>Flatbed transport</option><option>Jump start</option>
            <option>Tyre assistance</option><option>Fuel delivery</option><option>Specialist transport</option>
          </select>
        </label>
        <label className="form-wide"><span>Anything else we should know?</span><textarea name="details" rows={4} placeholder="Tell us what happened and whether the vehicle is in a safe position." /></label>
      </div>
      <button className="button button-primary form-submit" type="submit"><Icon name="message" />Continue in WhatsApp</button>
      <p className="form-note">This form does not confirm a booking. Our team will respond on WhatsApp with availability and next steps.</p>
      {message && <p className="form-message" role="status">{message}</p>}
    </form>
  );
}
