export interface GalleryEntry {
    slug: string;
    title: string;
    industry: string;
    bestFor: string;
    modules: string[];
    automations: string[];
    integrations: string[];
    timelineRange: string;
    description: string;
    gradient: string;
    accentColor: string;
}

export const galleryEntries: GalleryEntry[] = [
    {
        slug: "retail-store-system",
        title: "Retail Store Management System",
        industry: "Retail",
        bestFor: "Shop owners managing inventory, billing, and customer loyalty",
        modules: ["Inventory Management", "POS Billing", "Customer Loyalty", "Sales Reports", "Low-Stock Alerts"],
        automations: [
            "Auto-generate invoice and send to customer via WhatsApp",
            "Low-stock alert when items fall below threshold",
            "Daily sales summary sent to owner every evening",
            "Customer birthday offers sent automatically",
        ],
        integrations: ["WhatsApp Business", "Payment Gateway", "Accounting Software", "Barcode Scanner"],
        timelineRange: "3–5 weeks",
        description:
            "A complete retail management system that handles your inventory, billing, and customer relationships — all in one place. Reduce manual work and get clear visibility into your business every day.",
        gradient: "from-amber-900/40 via-orange-900/20 to-bg",
        accentColor: "#C9A84C",
    },
    {
        slug: "restaurant-ordering-system",
        title: "Restaurant & Café Ordering System",
        industry: "Restaurant",
        bestFor: "Restaurants and cafés wanting online orders, table management, and kitchen coordination",
        modules: ["Online Menu & Ordering", "Table Management", "Kitchen Display", "Delivery Tracking", "Revenue Dashboard"],
        automations: [
            "Order confirmation sent to customer via WhatsApp instantly",
            "Kitchen notified automatically when order is placed",
            "Daily revenue and top-selling items report",
            "Customer feedback request sent after delivery",
        ],
        integrations: ["WhatsApp Business", "Payment Gateway", "Delivery Partners", "Accounting Software"],
        timelineRange: "3–5 weeks",
        description:
            "From online orders to kitchen coordination and delivery tracking — a full restaurant system that reduces errors, speeds up service, and keeps customers coming back.",
        gradient: "from-red-900/30 via-rose-900/20 to-bg",
        accentColor: "#E8A87C",
    },
    {
        slug: "clinic-appointment-system",
        title: "Clinic & Healthcare Appointment System",
        industry: "Clinic",
        bestFor: "Clinics and healthcare providers managing appointments, patient records, and billing",
        modules: ["Online Appointment Booking", "Patient Records", "Doctor Schedule", "Billing & Receipts", "Reminder System"],
        automations: [
            "Appointment confirmation and reminder sent via WhatsApp",
            "Follow-up message sent 24 hours after visit",
            "Monthly patient visit summary for the doctor",
            "Invoice generated and sent automatically after consultation",
        ],
        integrations: ["WhatsApp Business", "Payment Gateway", "SMS Gateway", "Email"],
        timelineRange: "4–6 weeks",
        description:
            "A professional appointment and patient management system for clinics. Reduce no-shows with automated reminders, keep patient records organized, and handle billing without the paperwork.",
        gradient: "from-blue-900/30 via-cyan-900/20 to-bg",
        accentColor: "#7CB9E8",
    },
    {
        slug: "salon-booking-system",
        title: "Salon & Spa Booking System",
        industry: "Salon",
        bestFor: "Salons and spas that want online bookings, staff scheduling, and client management",
        modules: ["Online Booking", "Staff Scheduling", "Client History", "Service Menu", "Loyalty Points"],
        automations: [
            "Booking confirmation and reminder via WhatsApp",
            "Staff schedule update when new booking is made",
            "Loyalty points updated automatically after each visit",
            "Review request sent 2 hours after appointment",
        ],
        integrations: ["WhatsApp Business", "Payment Gateway", "Google Calendar", "Instagram"],
        timelineRange: "2–4 weeks",
        description:
            "A sleek booking and client management system for salons and spas. Let clients book online 24/7, reduce no-shows with reminders, and build loyalty with an automatic points system.",
        gradient: "from-purple-900/30 via-pink-900/20 to-bg",
        accentColor: "#C87CE8",
    },
    {
        slug: "logistics-tracking-system",
        title: "Logistics & Delivery Tracking System",
        industry: "Logistics",
        bestFor: "Logistics companies and delivery businesses needing real-time tracking and dispatch management",
        modules: ["Order Management", "Driver Tracking", "Dispatch Board", "Customer Notifications", "Delivery Reports"],
        automations: [
            "Customer notified via WhatsApp when order is dispatched",
            "Driver assigned automatically based on location and availability",
            "Delivery confirmation with photo sent to customer",
            "Daily dispatch summary report for operations team",
        ],
        integrations: ["WhatsApp Business", "Google Maps", "Payment Gateway", "Accounting Software"],
        timelineRange: "4–6 weeks",
        description:
            "A real-time logistics management system that tracks every delivery from dispatch to doorstep. Keep customers informed automatically and give your operations team full visibility.",
        gradient: "from-green-900/30 via-emerald-900/20 to-bg",
        accentColor: "#7CE8A8",
    },
    {
        slug: "warehouse-inventory-system",
        title: "Warehouse & Inventory Management System",
        industry: "Manufacturing",
        bestFor: "Manufacturers and distributors managing stock, receiving, and dispatch",
        modules: ["Stock Management", "Receiving & GRN", "Dispatch Management", "Supplier Management", "Stock Reports"],
        automations: [
            "Low-stock alert sent to purchase manager automatically",
            "GRN generated when goods are received",
            "Dispatch note sent to customer when order ships",
            "Weekly stock health report for management",
        ],
        integrations: ["WhatsApp Business", "Accounting Software", "Barcode Scanner", "Email"],
        timelineRange: "5–8 weeks",
        description:
            "A robust warehouse management system that gives you complete control over your stock. Know what you have, what's running low, and what's moving — without manual spreadsheets.",
        gradient: "from-slate-800/40 via-zinc-900/20 to-bg",
        accentColor: "#A8B8C8",
    },
    {
        slug: "education-lms-system",
        title: "Education & Training Management System",
        industry: "Education",
        bestFor: "Training institutes, coaching centers, and schools managing students and courses",
        modules: ["Student Enrollment", "Course Management", "Attendance Tracking", "Fee Collection", "Progress Reports"],
        automations: [
            "Fee reminder sent to parents via WhatsApp before due date",
            "Attendance report sent to parents weekly",
            "Course completion certificate generated automatically",
            "New batch announcement sent to all enrolled students",
        ],
        integrations: ["WhatsApp Business", "Payment Gateway", "Google Meet", "Email"],
        timelineRange: "4–6 weeks",
        description:
            "A complete student and course management system for training institutes and schools. Automate fee reminders, attendance tracking, and parent communication — all in one platform.",
        gradient: "from-indigo-900/30 via-blue-900/20 to-bg",
        accentColor: "#8A9EE8",
    },
    {
        slug: "real-estate-crm",
        title: "Real Estate CRM & Lead Management",
        industry: "Real Estate",
        bestFor: "Real estate agents and developers managing leads, properties, and follow-ups",
        modules: ["Lead Management", "Property Listings", "Follow-up Scheduler", "Site Visit Tracking", "Sales Pipeline"],
        automations: [
            "New lead gets instant WhatsApp message with property details",
            "Follow-up reminder sent to agent when lead goes cold",
            "Site visit confirmation and directions sent to prospect",
            "Monthly lead conversion report for management",
        ],
        integrations: ["WhatsApp Business", "Google Maps", "Email", "Facebook Ads"],
        timelineRange: "3–5 weeks",
        description:
            "A real estate CRM that ensures no lead falls through the cracks. Automate follow-ups, track your pipeline, and close more deals with less manual effort.",
        gradient: "from-yellow-900/30 via-amber-900/20 to-bg",
        accentColor: "#E8D07C",
    },
    {
        slug: "pharmacy-management-system",
        title: "Pharmacy Management System",
        industry: "Retail",
        bestFor: "Pharmacies managing medicine inventory, prescriptions, and billing",
        modules: ["Medicine Inventory", "Prescription Management", "Billing & Invoicing", "Expiry Alerts", "Supplier Orders"],
        automations: [
            "Expiry alert sent when medicines approach expiry date",
            "Reorder alert when stock falls below minimum level",
            "Invoice sent to customer via WhatsApp after purchase",
            "Monthly slow-moving stock report for owner",
        ],
        integrations: ["WhatsApp Business", "Payment Gateway", "Accounting Software", "Barcode Scanner"],
        timelineRange: "3–5 weeks",
        description:
            "A specialized pharmacy management system that handles medicine inventory, prescriptions, and billing. Never run out of critical medicines with automated reorder alerts.",
        gradient: "from-teal-900/30 via-cyan-900/20 to-bg",
        accentColor: "#7CE8D8",
    },
    {
        slug: "hotel-property-management",
        title: "Hotel & Guesthouse Property Management",
        industry: "Hospitality",
        bestFor: "Small hotels, guesthouses, and homestays managing bookings and operations",
        modules: ["Room Booking", "Check-in/Check-out", "Housekeeping", "Billing & Invoicing", "Occupancy Reports"],
        automations: [
            "Booking confirmation and check-in details sent via WhatsApp",
            "Housekeeping notified automatically when room is checked out",
            "Review request sent to guest after checkout",
            "Daily occupancy and revenue report for management",
        ],
        integrations: ["WhatsApp Business", "Payment Gateway", "Booking Platforms", "Accounting Software"],
        timelineRange: "4–6 weeks",
        description:
            "A complete property management system for small hotels and guesthouses. Manage bookings, housekeeping, and billing from one dashboard — and keep guests happy with automated communication.",
        gradient: "from-orange-900/30 via-amber-900/20 to-bg",
        accentColor: "#E8B87C",
    },
    {
        slug: "service-business-crm",
        title: "Service Business CRM & Job Management",
        industry: "Services",
        bestFor: "Plumbers, electricians, AC repair, and other service businesses managing jobs and technicians",
        modules: ["Job Booking", "Technician Assignment", "Job Tracking", "Invoice Generation", "Customer History"],
        automations: [
            "Job confirmation and technician details sent to customer via WhatsApp",
            "Technician notified when new job is assigned",
            "Invoice generated and sent after job completion",
            "Follow-up sent 7 days after service for repeat business",
        ],
        integrations: ["WhatsApp Business", "Payment Gateway", "Google Maps", "Accounting Software"],
        timelineRange: "2–4 weeks",
        description:
            "A job management system for service businesses. Book jobs, assign technicians, track progress, and send invoices — all automated. Spend less time on admin and more time on service.",
        gradient: "from-zinc-800/40 via-stone-900/20 to-bg",
        accentColor: "#C8B8A8",
    },
    {
        slug: "wholesale-distributor-system",
        title: "Wholesale & Distributor Management System",
        industry: "Manufacturing",
        bestFor: "Wholesalers and distributors managing orders, credit, and delivery to retailers",
        modules: ["Order Management", "Credit Management", "Route Planning", "Delivery Tracking", "Outstanding Reports"],
        automations: [
            "Order confirmation sent to retailer via WhatsApp",
            "Credit limit alert when retailer approaches limit",
            "Payment reminder sent automatically on due date",
            "Weekly outstanding balance report for accounts team",
        ],
        integrations: ["WhatsApp Business", "Payment Gateway", "Accounting Software", "GPS Tracking"],
        timelineRange: "5–8 weeks",
        description:
            "A wholesale distribution system that manages orders, credit, and deliveries across your retailer network. Reduce outstanding payments with automated reminders and get full visibility into your business.",
        gradient: "from-stone-800/40 via-neutral-900/20 to-bg",
        accentColor: "#B8A898",
    },
];

export const industries = [
    "All",
    "Retail",
    "Restaurant",
    "Clinic",
    "Salon",
    "Logistics",
    "Manufacturing",
    "Education",
    "Real Estate",
    "Hospitality",
    "Services",
];
