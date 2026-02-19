export interface Service {
    slug: string;
    title: string;
    shortTitle: string;
    tagline: string;
    description: string;
    icon: string;
    features: string[];
    outcomes: string[];
    gradient: string;
}

export const services: Service[] = [
    {
        slug: "branding",
        title: "Branding & Identity",
        shortTitle: "Branding",
        tagline: "Look credible. Be remembered.",
        description:
            "A professional brand identity that makes your business look trustworthy and memorable — from your logo to your color palette, typography, and brand guidelines.",
        icon: "✦",
        features: [
            "Logo design (primary + variations)",
            "Brand color palette",
            "Typography system",
            "Brand guidelines document",
            "Business card & stationery design",
            "Social media profile assets",
            "WhatsApp Business profile setup",
        ],
        outcomes: [
            "Look professional from day one",
            "Build customer trust instantly",
            "Stand out from competitors",
            "Consistent identity across all touchpoints",
        ],
        gradient: "from-amber-900/30 to-bg",
    },
    {
        slug: "websites",
        title: "Websites & Commerce",
        shortTitle: "Websites",
        tagline: "Your business, online and working.",
        description:
            "Clean, fast, mobile-first websites that represent your brand professionally and convert visitors into customers — with optional e-commerce and online ordering.",
        icon: "◈",
        features: [
            "Mobile-first responsive design",
            "Up to 10 pages",
            "Contact form + WhatsApp integration",
            "Google Business Profile setup",
            "Basic SEO setup",
            "Optional: Online store / ordering",
            "Optional: Appointment booking",
        ],
        outcomes: [
            "Professional online presence",
            "Capture leads 24/7",
            "Rank in local search results",
            "Accept orders and bookings online",
        ],
        gradient: "from-blue-900/30 to-bg",
    },
    {
        slug: "automation",
        title: "Automation & Operations",
        shortTitle: "Automation",
        tagline: "Let the system do the work.",
        description:
            "Digital systems that automate your repetitive tasks — invoicing, inventory alerts, appointment reminders, customer follow-ups, and more. Built for how your business actually works.",
        icon: "⚙",
        features: [
            "Invoice automation (create + send via WhatsApp)",
            "Inventory management + low-stock alerts",
            "Appointment booking + reminders",
            "Customer follow-up sequences",
            "Order management + notifications",
            "Payment reminders",
            "Daily operations reports via WhatsApp",
        ],
        outcomes: [
            "Save 2–5 hours of admin work daily",
            "Reduce errors and missed tasks",
            "Keep customers informed automatically",
            "Make decisions based on real data",
        ],
        gradient: "from-green-900/30 to-bg",
    },
    {
        slug: "analytics",
        title: "Analytics & Insights",
        shortTitle: "Analytics",
        tagline: "Know your numbers. Grow with confidence.",
        description:
            "Simple, actionable dashboards and reports that give you the information you need to run and grow your business — without needing to be a data expert.",
        icon: "◎",
        features: [
            "Sales dashboard (daily, weekly, monthly)",
            "Top products / services report",
            "Customer repeat rate tracking",
            "Stock health overview",
            "Staff performance metrics",
            "Daily WhatsApp summary report",
            "Custom reports on request",
        ],
        outcomes: [
            "Understand your business at a glance",
            "Identify your best products and customers",
            "Spot problems before they become crises",
            "Make confident, data-backed decisions",
        ],
        gradient: "from-purple-900/30 to-bg",
    },
];

export const packages = [
    {
        name: "Starter",
        tagline: "Look professional from day one",
        description: "Perfect for new businesses or those ready to establish a credible presence.",
        includes: [
            "Professional logo + brand colors",
            "Brand guidelines document",
            "5-page mobile-first website",
            "Contact form + WhatsApp integration",
            "Google Business Profile setup",
            "Basic SEO setup",
        ],
        outcomes: [
            "Professional brand identity",
            "Online presence that builds trust",
            "Capture leads 24/7",
        ],
        timeline: "2–3 weeks",
        highlight: false,
    },
    {
        name: "Growth",
        tagline: "Brand + systems that save you time",
        description: "For established businesses ready to automate and grow.",
        includes: [
            "Everything in Starter",
            "Up to 10-page website with online ordering or booking",
            "2 automation workflows (e.g., invoicing + reminders)",
            "Inventory or appointment management system",
            "Daily WhatsApp summary report",
            "1 month of post-launch support",
        ],
        outcomes: [
            "Save 2–3 hours of admin daily",
            "Reduce no-shows and stockouts",
            "Professional customer communication",
        ],
        timeline: "4–6 weeks",
        highlight: true,
    },
    {
        name: "Scale",
        tagline: "Full digital transformation",
        description: "For businesses ready for complete DT&O — brand, web, systems, and ongoing support.",
        includes: [
            "Everything in Growth",
            "5+ automation workflows",
            "Full operations dashboard",
            "CRM or customer management",
            "Staff and role management",
            "3 months of ongoing support and optimization",
        ],
        outcomes: [
            "Save 4–6 hours of admin daily",
            "Full visibility into your business",
            "Systems that scale as you grow",
        ],
        timeline: "8–12 weeks",
        highlight: false,
    },
];
