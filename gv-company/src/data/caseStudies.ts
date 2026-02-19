export interface CaseStudy {
    slug: string;
    title: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
    services: string[];
    timelineRange: string;
    gradient: string;
    testimonial?: {
        quote: string;
        name: string;
        role: string;
    };
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "retail-chain-digital-transformation",
        title: "How a 3-Branch Retail Chain Cut Admin Time by 60%",
        client: "Multi-Branch Retail Store (Placeholder)",
        industry: "Retail",
        challenge:
            "A retail chain with 3 branches was managing inventory, billing, and supplier orders manually across all locations. The owner spent 4+ hours daily on admin tasks, stockouts were frequent, and there was no visibility into which branch was performing best.",
        solution:
            "We implemented a centralized inventory and billing system across all 3 branches, with automated low-stock alerts, daily sales reports via WhatsApp, and a simple dashboard showing performance by branch. We also redesigned their brand identity and built a professional website.",
        results: [
            "Admin time reduced from 4 hours/day to 90 minutes/day",
            "Stockouts reduced by 80% in the first month",
            "Owner gets daily performance summary on WhatsApp every evening",
            "Professional brand identity increased walk-in customers by 25%",
        ],
        services: ["Branding & Identity", "Inventory Management", "Automation", "Analytics Dashboard"],
        timelineRange: "6–8 weeks",
        gradient: "from-amber-900/40 via-orange-900/20 to-bg",
        testimonial: {
            quote:
                "Before GV and Company, I was drowning in paperwork. Now I know exactly what's happening in all 3 shops from my phone. The system paid for itself in the first month.",
            name: "Business Owner",
            role: "Retail Chain, South India (Placeholder)",
        },
    },
    {
        slug: "clinic-appointment-automation",
        title: "Clinic Reduces No-Shows by 65% with Automated Reminders",
        client: "General Practice Clinic (Placeholder)",
        industry: "Clinic",
        challenge:
            "A busy general practice clinic was losing significant revenue to no-shows — nearly 30% of appointments went unfilled. Receptionists spent hours calling patients to confirm appointments, and patient records were kept in physical files.",
        solution:
            "We built an online appointment booking system with automated WhatsApp confirmations and reminders. Patient records were digitized, and billing was automated with invoices sent directly to patients. We also created a professional brand identity and website.",
        results: [
            "No-show rate dropped from 30% to 8% within 6 weeks",
            "Receptionist time on phone calls reduced by 70%",
            "Patient records now searchable and accessible in seconds",
            "Professional website increased new patient inquiries by 40%",
        ],
        services: ["Branding & Identity", "Website", "Appointment System", "Automation"],
        timelineRange: "5–7 weeks",
        gradient: "from-blue-900/30 via-cyan-900/20 to-bg",
        testimonial: {
            quote:
                "The automated reminders alone saved us so much time and revenue. Patients appreciate the professional communication, and our staff can focus on patient care instead of phone calls.",
            name: "Clinic Administrator",
            role: "General Practice Clinic (Placeholder)",
        },
    },
    {
        slug: "logistics-company-operations",
        title: "Logistics Company Gains Full Visibility with Real-Time Tracking",
        client: "Regional Logistics Company (Placeholder)",
        industry: "Logistics",
        challenge:
            "A regional logistics company with 15 delivery drivers had no real-time visibility into deliveries. Customers called constantly asking for updates, drivers were assigned manually, and there was no data on delivery performance.",
        solution:
            "We implemented a real-time delivery tracking system with automated customer notifications via WhatsApp at each stage (dispatched, out for delivery, delivered). Driver assignment was automated based on route, and management got a daily operations dashboard.",
        results: [
            "Customer 'where is my order' calls reduced by 85%",
            "Delivery confirmation rate improved to 98%",
            "Management gets daily performance dashboard automatically",
            "Professional brand identity and website increased B2B inquiries",
        ],
        services: ["Branding & Identity", "Website", "Logistics System", "Automation", "Analytics"],
        timelineRange: "7–9 weeks",
        gradient: "from-green-900/30 via-emerald-900/20 to-bg",
        testimonial: {
            quote:
                "Our customers used to call us 10–15 times a day asking for updates. Now they get automatic WhatsApp messages at every stage. Our team can focus on operations instead of answering phones.",
            name: "Operations Manager",
            role: "Regional Logistics Company (Placeholder)",
        },
    },
];
