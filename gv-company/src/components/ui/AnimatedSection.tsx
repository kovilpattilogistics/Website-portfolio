"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "none";
}

export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 30 : 0,
            x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{
                duration: 0.9,
                delay,
                ease: [0.16, 1, 0.3, 1], // Luxury cubic-bezier
            }}
        >
            {children}
        </motion.div>
    );
}
