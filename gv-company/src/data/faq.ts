export interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

export const faqItems: FAQItem[] = [
    {
        category: "General",
        question: "What exactly is DT&O (Digital Transformation & Operations)?",
        answer:
            "DT&O means using digital tools to make your business run more efficiently. In plain terms: instead of doing things manually (writing invoices by hand, tracking stock in a notebook, calling customers one by one), we set up systems that do these things automatically. The result is less time on admin work, fewer errors, and better visibility into your business.",
    },
    {
        category: "General",
        question: "Is GV and Company right for my business?",
        answer:
            "We work best with small and medium businesses in developing regions — retail shops, clinics, restaurants, salons, logistics companies, manufacturers, and service businesses. If you're spending too much time on manual work, struggling to look professional, or want to grow but feel held back by your current systems, we're a good fit.",
    },
    {
        category: "General",
        question: "Do I need to be tech-savvy to use your systems?",
        answer:
            "No. We design everything to be simple and practical. If you can use WhatsApp, you can use our systems. We also provide training for you and your staff, and we're available for support after launch.",
    },
    {
        category: "Process",
        question: "How does the process work?",
        answer:
            "We start with a free audit to understand your business and identify the biggest opportunities. Then we propose a plan with clear timelines and deliverables. Once approved, we design and build everything, train your team, and launch. After launch, we provide support to make sure everything runs smoothly.",
    },
    {
        category: "Process",
        question: "How long does a typical project take?",
        answer:
            "It depends on the scope. A brand identity + basic website takes 2–3 weeks. A full DT&O implementation with multiple automations takes 8–12 weeks. We give you a clear timeline upfront and stick to it.",
    },
    {
        category: "Process",
        question: "What do you need from me to get started?",
        answer:
            "We need to understand your business: what you sell, how you currently operate, what's working and what isn't. We'll ask you for this in our initial audit call. You don't need to prepare anything special — just be ready to talk about your business.",
    },
    {
        category: "Pricing",
        question: "How much does it cost?",
        answer:
            "We don't publish prices because every business is different. The cost depends on the scope of work, the number of automations, and the complexity of your operations. We give you a clear, fixed quote after the free audit — no hidden fees, no surprises.",
    },
    {
        category: "Pricing",
        question: "Is there an ongoing monthly fee?",
        answer:
            "Some of our services (like software subscriptions or ongoing support) have a monthly fee. Others are one-time projects. We'll be clear about this in your quote. We never lock you into anything without explaining the costs upfront.",
    },
    {
        category: "Technical",
        question: "What happens if something breaks or stops working?",
        answer:
            "All our projects include a support period after launch. During this time, we fix any issues at no extra cost. After the support period, we offer ongoing support packages. We're also available via WhatsApp for quick questions.",
    },
    {
        category: "Technical",
        question: "Do you work with businesses outside your region?",
        answer:
            "Yes. While we specialize in businesses in developing regions, we work with clients across different locations. Our process is designed to work remotely — most of our work is done online, with video calls for key discussions.",
    },
    {
        category: "Technical",
        question: "Will my data be safe?",
        answer:
            "Yes. We take data security seriously. All systems we build follow standard security practices. Your business data belongs to you — we never share it with third parties.",
    },
    {
        category: "General",
        question: "Can I start small and expand later?",
        answer:
            "Absolutely. Many of our clients start with a brand identity and website, then add automations as they see the value. Our systems are designed to grow with your business. You're never locked into a fixed scope.",
    },
];
