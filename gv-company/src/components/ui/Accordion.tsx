"use client";

import { useState } from "react";

interface AccordionItem {
    question: string;
    answer: string;
    category?: string;
}

interface AccordionProps {
    items: AccordionItem[];
    className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className={`space-y-3 ${className}`}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="card-luxury overflow-hidden"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left group"
                        aria-expanded={openIndex === index}
                        aria-controls={`accordion-answer-${index}`}
                        id={`accordion-question-${index}`}
                    >
                        <span className="font-medium text-text group-hover:text-gold transition-colors pr-4 text-sm md:text-base">
                            {item.question}
                        </span>
                        <span
                            className={`text-gold flex-shrink-0 transition-transform duration-300 text-lg ${openIndex === index ? "rotate-45" : ""
                                }`}
                            aria-hidden="true"
                        >
                            +
                        </span>
                    </button>
                    <div
                        id={`accordion-answer-${index}`}
                        role="region"
                        aria-labelledby={`accordion-question-${index}`}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"
                            }`}
                    >
                        <div className="px-6 pb-6 text-muted text-sm leading-relaxed border-t border-border pt-4">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
