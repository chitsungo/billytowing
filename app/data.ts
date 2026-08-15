export const PHONE_DISPLAY = "+263 774 870 729";
export const PHONE_TEL = "+263774870729";
export const WHATSAPP_URL =
  "https://wa.me/263774870729?text=Hello%20Billy%20Towing%2C%20I%20need%20roadside%20assistance.";

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: "recovery" | "transport" | "fleet" | "team";
  position?: string;
};

// First-build source. The final database loader only needs to return this shape,
// allowing the UI to move to hosted image URLs without structural changes.
export const siteImages: SiteImage[] = [
  {
    src: "/images/billy/flatbed.webp",
    alt: "Billy Towing Isuzu flatbed recovery truck in Harare",
    width: 1080,
    height: 608,
    category: "fleet",
    position: "center 58%",
  },
  {
    src: "/images/billy/recovery-black-suv.webp",
    alt: "Billy Towing recovering a black SUV",
    width: 1080,
    height: 608,
    category: "recovery",
    position: "center 54%",
  },
  {
    src: "/images/billy/night-recovery.webp",
    alt: "Billy Towing trucks responding at night",
    width: 1280,
    height: 720,
    category: "fleet",
    position: "center 55%",
  },
  {
    src: "/images/billy/double-cab-recovery.webp",
    alt: "Billy Towing transporting a double-cab vehicle",
    width: 1200,
    height: 675,
    category: "recovery",
    position: "center 58%",
  },
  {
    src: "/images/billy/team.webp",
    alt: "Billy Towing local recovery team in Harare",
    width: 1080,
    height: 810,
    category: "team",
    position: "center 58%",
  },
  {
    src: "/images/billy/tractor-transport.webp",
    alt: "Billy Towing transporting tractors on a flatbed",
    width: 1200,
    height: 658,
    category: "transport",
  },
  {
    src: "/images/billy/fleet-day.webp",
    alt: "Two Billy Towing recovery vehicles during the day",
    width: 720,
    height: 1280,
    category: "fleet",
  },
  {
    src: "/images/billy/fleet-night.webp",
    alt: "Billy Towing emergency truck with lights on at night",
    width: 608,
    height: 1080,
    category: "fleet",
  },
  {
    src: "/images/billy/landcruiser-recovery.webp",
    alt: "Four-wheel-drive vehicle secured on a Billy Towing flatbed",
    width: 608,
    height: 1080,
    category: "recovery",
  },
  {
    src: "/images/billy/red-pickup-recovery.webp",
    alt: "Red pickup being recovered by Billy Towing",
    width: 1080,
    height: 608,
    category: "recovery",
  },
  {
    src: "/images/billy/roadside-tow.webp",
    alt: "Billy Towing attending a roadside recovery",
    width: 608,
    height: 1080,
    category: "recovery",
  },
  {
    src: "/images/billy/convoy.webp",
    alt: "Billy Towing recovery convoy on a Harare road",
    width: 1200,
    height: 675,
    category: "fleet",
  },
  {
    src: "/images/billy/isuzu-front.webp",
    alt: "Front view of a Billy Towing Isuzu recovery truck",
    width: 1080,
    height: 608,
    category: "fleet",
  },
  {
    src: "/images/billy/mercedes-recovery-1.webp",
    alt: "White Mercedes secured on a Billy Towing flatbed",
    width: 608,
    height: 1080,
    category: "recovery",
  },
  {
    src: "/images/billy/mercedes-recovery-2.webp",
    alt: "Vehicle transport completed by Billy Towing",
    width: 608,
    height: 1080,
    category: "transport",
  },
  {
    src: "/images/billy/emergency-night.webp",
    alt: "Emergency roadside response at night",
    width: 608,
    height: 1080,
    category: "recovery",
  },
  {
    src: "/images/billy/on-road-1.webp",
    alt: "Billy Towing flatbed ready on the road",
    width: 608,
    height: 1080,
    category: "fleet",
  },
  {
    src: "/images/billy/on-road-2.webp",
    alt: "Billy Towing truck positioned for safe recovery",
    width: 608,
    height: 1080,
    category: "fleet",
  },
  {
    src: "/images/billy/caravan-transport.webp",
    alt: "Caravan transported on a Billy Towing flatbed",
    width: 1080,
    height: 608,
    category: "transport",
  },
  {
    src: "/images/billy/forklift-transport.webp",
    alt: "Forklift transported by Billy Towing",
    width: 608,
    height: 1080,
    category: "transport",
  },
  {
    src: "/images/billy/isuzu-transport.webp",
    alt: "Isuzu vehicle carried on a Billy Towing flatbed",
    width: 608,
    height: 1080,
    category: "transport",
  },
];

export const heroSlides = [
  {
    image: siteImages[0],
    eyebrow: "Harare roadside response",
    title: "24/7 Emergency Towing",
    body: "Stranded? Stay where you are. Our local team is ready to respond day or night.",
  },
  {
    image: siteImages[1],
    eyebrow: "Careful recovery",
    title: "Fast. Safe. Under Control.",
    body: "Professional loading, secure transport and careful handling from pickup to drop-off.",
  },
  {
    image: siteImages[2],
    eyebrow: "Always on call",
    title: "Help Does Not Keep Office Hours",
    body: "When the road stops you, one call gets an experienced recovery team moving.",
  },
  {
    image: siteImages[3],
    eyebrow: "Vehicles of all sizes",
    title: "The Right Truck for the Job",
    body: "Flatbed recovery for cars, SUVs, pickups and specialist vehicle transport.",
  },
  {
    image: siteImages[4],
    eyebrow: "Local and dependable",
    title: "A Professional Harare Team",
    body: "Calm communication, capable equipment and a clear plan when you need help most.",
  },
];

export const services = [
  {
    icon: "tow",
    title: "Emergency Towing",
    description:
      "Rapid 24/7 response for breakdowns, accident recovery and vehicles that cannot be driven safely.",
  },
  {
    icon: "flatbed",
    title: "Flatbed Transport",
    description:
      "Secure, low-contact transport for cars, SUVs, pickups, luxury vehicles and non-running vehicles.",
  },
  {
    icon: "battery",
    title: "Jump Starts",
    description:
      "Safe battery assistance to help get your vehicle moving again when it will not start.",
  },
  {
    icon: "wheel",
    title: "Tyre Assistance",
    description:
      "Roadside help with a flat tyre when you have a usable spare and need a capable hand.",
  },
  {
    icon: "fuel",
    title: "Fuel Delivery",
    description:
      "Emergency fuel support when an empty tank leaves you stranded in or around Harare.",
  },
  {
    icon: "transport",
    title: "Specialist Transport",
    description:
      "Planned movement of caravans, forklifts, tractors and other equipment requiring a flatbed.",
  },
];

