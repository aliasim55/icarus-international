import {
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  PackageSearch,
  RadioTower,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Products", href: "/products" },
  { label: "Partners", href: "/#partners" },
  { label: "Contact Us", href: "/#contact" },
];

export const heroSlides = [
  {
    title: "Icarus International",
    kicker: "Support without delay",
    text: "World-class Parts, logistics, and Maintenance coordination for operators who need reliable solutions on tight timelines.",
    image: asset("assets/main-slider/1.jpg"),
    action: "View Capabilities",
    href: "/capabilities",
  },
  {
    title: "Keep Every Aircraft Mission Ready",
    kicker: "AOG and operational support",
    text: "From sourcing critical components to coordinating overhaul work, our team helps reduce downtime and restore confidence in the fleet.",
    image: asset("assets/main-slider/2.jpg"),
    action: "Contact Us",
    href: "/#contact",
  },
  {
    title: "Experience Shared Across the Supply Chain",
    kicker: "Consulting, Parts, and Procurement",
    text: "We work with customers and supplier networks to create dependable support programs.",
    image: asset("assets/main-slider/3.jpg"),
    action: "Start a Request",
    href: "#quote",
  },
];

export const aboutHighlights = [
  {
    title: "Global Clients",
    text: "A responsive network built for airlines, private operators, maintenance teams, and mission-critical programs.",
    icon: Globe2,
  },
  {
    title: "Ready Infrastructure",
    text: "Around-the-clock coordination for urgent requirements, planned procurement, and long-lead material searches.",
    icon: CheckCircle2,
  },
  {
    title: "Quality Policy",
    text: "Documented sourcing, dependable service, and a practical commitment to delivering the right part at the right time.",
    icon: ShieldCheck,
  },
  {
    title: "24 Hour AOG Orders",
    text: "Rapid response for grounded aircraft with priority routing, stock checks, and supplier escalation.",
    icon: Wrench,
  },
];

export const services = [
  {
    title: "Supply-Chain Management",
    text: "Forecasting, sourcing, vendor coordination, and delivery planning for operators who need resilient aviation logistics.",
    detail:
      "Supply-chain management is central to Icarus International. We coordinate sourcing, vendor follow-up, stock visibility, logistics timing, and documentation so operators can keep assets in service with fewer interruptions.",
    points: [
      "Forecasted requirements and stock checks",
      "Vendor coordination and quote management",
      "AOG escalation and delivery planning",
    ],
    image: asset("assets/resource/featured-image-2.jpg"),
    slug: "supply-chain-management",
    icon: Truck,
  },
  {
    title: "Backward and Forward Integration",
    text: "Integrated support across OEM, distributor, repair, and end-user channels for civil, military, and rotary platforms.",
    detail:
      "Our integration support connects customer requirements with practical supplier and repair channels. The goal is a stronger procurement path from initial requirement through purchase, shipment, installation, and future replenishment.",
    points: [
      "Civil, military, and rotary-wing support",
      "OEM, distributor, and repair-channel routing",
      "Long-term requirement planning",
    ],
    image: asset("assets/resource/featured-image-1.jpg"),
    slug: "backward-forward-integration",
    icon: Boxes,
  },
  {
    title: "Repair and Overhaul",
    text: "Repair coordination for engines, avionics, components, and parts through approved service channels.",
    detail:
      "We help route repair and overhaul requirements to appropriate service channels, keeping attention on turnaround time, technical fit, cost control, and the paperwork operators need to release aircraft back into service.",
    points: [
      "Engine, avionics, component, and part repairs",
      "Authorized repair-channel coordination",
      "Turnaround and downtime reduction support",
    ],
    image: asset("assets/resource/featured-image-4.jpg"),
    slug: "repair-overhaul",
    icon: Wrench,
  },
  {
    title: "Consulting",
    text: "Practical market insight, supplier mapping, and requirement analysis to strengthen aviation purchasing decisions.",
    detail:
      "Icarus International shares aviation procurement experience with customers and suppliers through practical consulting, detailed requirement review, and supplier-market guidance.",
    points: [
      "Requirement and product-fit analysis",
      "Supplier and market opportunity review",
      "Procurement process guidance",
    ],
    image: asset("assets/resource/featured-image-3.jpg"),
    slug: "consulting",
    icon: ClipboardCheck,
  },
];

export const repairPlatforms = [
  "Regional Aircraft",
  "Business Aircraft",
  "Rotorwing Aircraft",
];

export const repairAccessories = [
  "Pre-Coolers",
  "Fuel Boost Pumps",
  "Oil Pumps",
  "Heat Exchangers",
  "Air Cycling Machines",
  "Oil Coolers",
  "Cooling Turbines",
  "Lube Oil Scavenge Pumps",
  "Fuel Heaters",
  "Valves",
  "Linear Actuators",
  "Rotary Actuators",
];

export const componentColumns = [
  "Repair Management & Logistics",
  "ACM's",
  "Fuel Heaters",
  "Heat Exchangers",
  "Oil Coolers & Regs",
  "Oil Tanks",
  "Refrig Packs & ECS Systems",
  "Scavenge Pumps (Lube/Oil)",
  "Valves",
  "Water Separators",
  "Fans",
  "Linear/Rotary Actuators",
];

const allCapabilities = componentColumns.map(() => true);
const withoutFans = componentColumns.map((column) => column !== "Fans");

export const capabilityMatrix = [
  {
    group: "Commercial Air Frames",
    rows: [
      {
        type: "Airbus",
        models: "A319, A320, A321, A330, A340",
        capabilities: allCapabilities,
      },
      { type: "ATR", models: "42 & 72", capabilities: withoutFans },
      {
        type: "Cessna",
        models: "Citation / TurboProps",
        capabilities: withoutFans,
      },
      { type: "Dassault", models: "Falcon Jet", capabilities: withoutFans },
      { type: "Fokker", models: "F28, F50 & F100", capabilities: withoutFans },
      { type: "Raytheon", models: "B1900", capabilities: withoutFans },
      { type: "Raytheon", models: "Beech, Hawker", capabilities: withoutFans },
      { type: "SAAB", models: "340 / 2000", capabilities: withoutFans },
    ],
  },
  {
    group: "Engine OEM",
    rows: [
      {
        type: "Allied Signal (Garrett)",
        models: "TPE331",
        capabilities: withoutFans,
      },
      {
        type: "Allison - Rolls Royce",
        models: "T-56",
        capabilities: withoutFans,
      },
      {
        type: "Pratt & Whitney",
        models: "PW4000, PT6, JT8D, PW100",
        capabilities: allCapabilities,
      },
    ],
  },
  {
    group: "Helicopters",
    rows: [
      {
        type: "Allied Signal (Garrett)",
        models: "TPE331",
        capabilities: withoutFans,
      },
    ],
  },
];

export const products = [
  {
    title: "Parts and Components",
    text: "Hard-to-find airframe spares, engine components, electrical items, consumables, and stocked line items for active fleets.",
    detail:
      "Icarus International sources and supplies hard-to-find aircraft parts and components, including airframe spares, engine components, electrical items, aviation chemicals, consumables, and stocked line items for active fleets.",
    points: [
      "Airframe spare parts and components",
      "Engine, electrical, and avionics components",
      "Consumables and aviation chemicals",
    ],
    image: asset("assets/resource/blog-image-1.jpg"),
    slug: "parts-components",
    icon: PackageSearch,
  },
  {
    title: "Avionics",
    text: "Modern avionics components, mission equipment, and tailored sourcing support for diverse fleet requirements.",
    detail:
      "We support avionics sourcing for fleet-specific needs, helping identify suitable components, replacement options, mission equipment, and practical routes for urgent or planned requirements.",
    points: [
      "Navigation and communication components",
      "Fleet-specific avionics sourcing",
      "Replacement and upgrade support",
    ],
    image: asset("assets/resource/blog-image-2.jpg"),
    slug: "avionics",
    icon: RadioTower,
  },
  {
    title: "Ground Support Equipment",
    text: "Handling equipment, test and measuring tools, wheels, brakes, and support equipment from established manufacturers.",
    detail:
      "Ground support equipment coverage includes handling equipment, test and measuring tools, wheels, brakes, conveyor support, and other operational equipment from established aviation manufacturers.",
    points: [
      "Ground handling and support equipment",
      "Measuring and testing equipment",
      "Wheels, brakes, and operational support items",
    ],
    image: asset("assets/resource/blog-image-3.jpg"),
    slug: "ground-support-equipment",
    icon: Wrench,
  },
];

export const galleryImages = [
  asset("assets/gallery/footer-gallery-thumb-1.jpg"),
  asset("assets/gallery/footer-gallery-thumb-2.jpg"),
  asset("assets/gallery/footer-gallery-thumb-3.jpg"),
  asset("assets/gallery/footer-gallery-thumb-4.jpg"),
  asset("assets/gallery/footer-gallery-thumb-5.jpg"),
  asset("assets/gallery/footer-gallery-thumb-6.jpg"),
];

export const partnerLogos = [
  { name: "Schweizer", image: asset("assets/partners/schweizer.png") },
  { name: "Etemme", image: asset("assets/partners/etemne.png") },
  { name: "Enstrom Helicopter Corporation", image: asset("assets/partners/enstrom.png") },
  { name: "Thiot Ingenierie", image: asset("assets/partners/thiot.png") },
  { name: "Airbus", image: asset("assets/partners/airbus.png") },
  { name: "Cogsdill", image: asset("assets/partners/cogsdill.png") },
  { name: "Paradigm Parachute & Defense", image: asset("assets/partners/paradigm.png") },
  { name: "Aviation partner", image: asset("assets/partners/gold-wing.png") },
  { name: "Aviation component partner", image: asset("assets/partners/red-black-r.png") },
  { name: "Robbi", image: asset("assets/partners/robbi.png") },
  { name: "Motor Sich", image: asset("assets/partners/motor-sich.png") },
  { name: "APS Aviation", image: asset("assets/partners/aps.png") },
];
