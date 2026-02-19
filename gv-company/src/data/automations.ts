export interface Automation {
    id: string;
    title: string;
    description: string;
    whyItMatters: string;
    industries: string[];
    icon: string;
    steps: string[];
}

export const automations: Automation[] = [
    {
        id: "invoice-automation",
        title: "E-Invoice Creation & Sending",
        description:
            "When a sale is completed or a service is delivered, the system automatically creates a professional invoice and sends it to the customer via WhatsApp or email — no manual work needed.",
        whyItMatters:
            "Manual invoicing takes 5–15 minutes per transaction. For a business doing 20+ transactions a day, that's hours of admin work. Automation brings this to near zero and ensures every customer gets a professional invoice every time.",
        industries: ["Retail", "Clinic", "Salon", "Services", "Logistics"],
        icon: "📄",
        steps: [
            "Sale or service is recorded in the system",
            "Invoice is automatically generated with all details",
            "Invoice sent to customer via WhatsApp or email instantly",
            "Invoice stored in the system for records and accounting",
        ],
    },
    {
        id: "order-payment-invoice",
        title: "Online Order + Payment + Invoice",
        description:
            "A customer places an order online, pays through the integrated payment gateway, and receives an automatic invoice — all without any manual intervention from your team.",
        whyItMatters:
            "This end-to-end automation eliminates the need for manual order processing, payment confirmation, and invoice creation. Your team is freed up to focus on fulfillment and service.",
        industries: ["Retail", "Restaurant", "Wholesale"],
        icon: "🛒",
        steps: [
            "Customer places order on your website or app",
            "Payment is processed through the payment gateway",
            "Order confirmation sent to customer via WhatsApp",
            "Invoice automatically generated and sent",
            "Order appears in your management dashboard",
        ],
    },
    {
        id: "inventory-alerts",
        title: "Inventory + Low-Stock Alerts",
        description:
            "The system tracks your inventory in real time. When any product falls below a set minimum quantity, an alert is automatically sent to the owner or purchase manager via WhatsApp.",
        whyItMatters:
            "Running out of stock means lost sales and frustrated customers. Manual stock checking is time-consuming and error-prone. Automated alerts ensure you always know what needs to be reordered — before it's too late.",
        industries: ["Retail", "Pharmacy", "Manufacturing", "Wholesale"],
        icon: "📦",
        steps: [
            "Every sale automatically updates stock levels",
            "System monitors stock against minimum thresholds",
            "Alert sent to owner/manager when stock falls below minimum",
            "Purchase order can be raised directly from the alert",
        ],
    },
    {
        id: "warehouse-tracking",
        title: "Warehouse Receiving & Dispatch Tracking",
        description:
            "When goods arrive at your warehouse, a Goods Receipt Note (GRN) is automatically generated. When goods are dispatched, a dispatch note is created and sent to the customer.",
        whyItMatters:
            "Manual warehouse documentation is slow and error-prone. Automated GRN and dispatch tracking gives you a complete, accurate record of everything that comes in and goes out — with no paperwork.",
        industries: ["Manufacturing", "Logistics", "Wholesale"],
        icon: "🏭",
        steps: [
            "Goods received at warehouse are scanned/entered",
            "GRN automatically generated and stock updated",
            "Dispatch order triggers automatic dispatch note",
            "Customer notified when goods are dispatched",
            "Complete receiving and dispatch history maintained",
        ],
    },
    {
        id: "appointment-reminders",
        title: "Appointment Booking + Reminders",
        description:
            "Customers book appointments online 24/7. They receive an instant confirmation via WhatsApp, and an automatic reminder is sent 24 hours before the appointment.",
        whyItMatters:
            "No-shows are a major revenue leak for service businesses. Automated reminders reduce no-shows by 40–60%. Online booking also captures appointments even when your staff is busy or your business is closed.",
        industries: ["Clinic", "Salon", "Services", "Education"],
        icon: "📅",
        steps: [
            "Customer books appointment online (24/7)",
            "Instant confirmation sent via WhatsApp",
            "Reminder sent 24 hours before appointment",
            "Staff notified of new bookings automatically",
            "No-show follow-up sent if appointment is missed",
        ],
    },
    {
        id: "customer-followup",
        title: "Customer Follow-Ups + Feedback Capture",
        description:
            "After a purchase or service, the system automatically sends a follow-up message to the customer — asking for feedback, offering a repeat purchase incentive, or simply checking in.",
        whyItMatters:
            "Repeat customers are 5x cheaper to retain than acquiring new ones. Automated follow-ups keep your business top-of-mind without any manual effort. Feedback helps you improve your service.",
        industries: ["Retail", "Clinic", "Salon", "Restaurant", "Services"],
        icon: "💬",
        steps: [
            "Purchase or service completion triggers follow-up",
            "Personalized message sent to customer via WhatsApp",
            "Feedback link or rating request included",
            "Positive feedback directed to Google/social review",
            "Negative feedback flagged for owner attention",
        ],
    },
    {
        id: "sales-dashboard",
        title: "Simple Dashboards (Sales, Customers, Stock)",
        description:
            "A clean, simple dashboard that shows you the numbers that matter: today's sales, top products, repeat customers, stock health, and pending orders — updated in real time.",
        whyItMatters:
            "Most small business owners make decisions based on gut feeling because they don't have easy access to data. A simple dashboard gives you the information you need to make better decisions — in 30 seconds, not 30 minutes.",
        industries: ["Retail", "Restaurant", "Clinic", "Logistics", "Manufacturing"],
        icon: "📊",
        steps: [
            "All transactions and activities feed into the dashboard",
            "Key metrics updated in real time",
            "Daily summary sent to owner via WhatsApp every evening",
            "Weekly and monthly reports available on demand",
            "Alerts for unusual patterns (sudden drop in sales, etc.)",
        ],
    },
];
