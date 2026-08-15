import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  name:
    | "phone"
    | "message"
    | "mail"
    | "instagram"
    | "calendar"
    | "menu"
    | "close"
    | "arrow"
    | "chevron"
    | "tow"
    | "flatbed"
    | "battery"
    | "wheel"
    | "fuel"
    | "transport"
    | "clock"
    | "shield"
    | "pin"
    | "check"
    | "plus";
};

export function Icon({ name, ...props }: IconProps) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconProps["name"], React.ReactNode> = {
    phone: <><path d="M7.2 3.5 9.4 8 7.7 9.7c1.4 3 3.1 4.7 6.1 6.1l1.7-1.7 4.5 2.2v3c0 .7-.6 1.2-1.2 1.2C10.3 20.1 3.9 13.7 3.5 5.2 3.5 4.6 4 4 4.7 4Z" /></>,
    message: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" /><path d="M8.5 9.2c.7 2.7 2 4 4.7 4.7" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m5 5 14 14M19 5 5 19" /></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>,
    chevron: <><path d="m8 10 4 4 4-4" /></>,
    tow: <><path d="M3 15h12l2-5h3l1 5v4h-2M5 19H3v-4l2-6h8l2 6" /><circle cx="7" cy="19" r="2" /><circle cx="17" cy="19" r="2" /><path d="M7 9V6h5l3 3" /></>,
    flatbed: <><path d="M3 16h12l3-5h3v6h-2M5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3 12h12l-2-4H6Z" /></>,
    battery: <><rect x="4" y="7" width="16" height="12" rx="2" /><path d="M9 4h6M8 13h3M15 10v6M12 13h6" /></>,
    wheel: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="m12 9 3-4M9 13l-5 1M14 14l3 4" /></>,
    fuel: <><path d="M6 21V4h8v17M4 21h12M7 8h6M14 7h2l3 3v7a1.5 1.5 0 0 0 3 0v-5l-2-2" /></>,
    transport: <><path d="M3 16h12l3-5h3v6h-2M5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 12h10V7H4Z" /><path d="M7 9h4" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    shield: <><path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6Z" /><path d="m9 12 2 2 4-4" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
  };

  return <svg {...common} {...props}>{paths[name]}</svg>;
}
