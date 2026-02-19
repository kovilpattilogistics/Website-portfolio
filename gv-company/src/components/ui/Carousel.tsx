"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface CarouselProps {
    items: React.ReactNode[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    className?: string;
}

export default function Carousel({
    items,
    autoPlay = true,
    autoPlayInterval = 5000,
    className = "",
}: CarouselProps) {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [userInteracted, setUserInteracted] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const prefersReducedMotion =
        typeof window !== "undefined"
            ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
            : false;

    const shouldAutoPlay = autoPlay && !prefersReducedMotion && !userInteracted && !isPaused;

    const goTo = useCallback(
        (index: number) => {
            setCurrent((index + items.length) % items.length);
        },
        [items.length]
    );

    const goNext = useCallback(() => {
        setUserInteracted(true);
        goTo(current + 1);
    }, [current, goTo]);

    const goPrev = useCallback(() => {
        setUserInteracted(true);
        goTo(current - 1);
    }, [current, goTo]);

    // Auto-play
    useEffect(() => {
        if (shouldAutoPlay) {
            intervalRef.current = setInterval(() => {
                setCurrent((prev) => (prev + 1) % items.length);
            }, autoPlayInterval);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [shouldAutoPlay, autoPlayInterval, items.length]);

    // Keyboard navigation
    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                goPrev();
            } else if (e.key === "ArrowRight") {
                goNext();
            }
        },
        [goNext, goPrev]
    );

    return (
        <div
            className={`relative ${className}`}
            role="region"
            aria-label="Gallery carousel"
            aria-roledescription="carousel"
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            {/* Slides */}
            <div className="overflow-hidden rounded-2xl">
                <div
                    className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                    aria-live="polite"
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0"
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`Slide ${index + 1} of ${items.length}`}
                            aria-hidden={index !== current}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-6">
                {/* Dots */}
                <div className="flex gap-2" role="tablist" aria-label="Carousel navigation">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            role="tab"
                            aria-selected={index === current}
                            aria-label={`Go to slide ${index + 1}`}
                            onClick={() => {
                                setUserInteracted(true);
                                goTo(index);
                            }}
                            className={`h-1 rounded-full transition-all duration-300 ${index === current
                                    ? "w-8 bg-gold"
                                    : "w-2 bg-muted-2 hover:bg-muted"
                                }`}
                        />
                    ))}
                </div>

                {/* Prev/Next + Pause */}
                <div className="flex items-center gap-2">
                    {autoPlay && !prefersReducedMotion && (
                        <button
                            onClick={() => {
                                setIsPaused(!isPaused);
                                setUserInteracted(true);
                            }}
                            aria-label={isPaused || userInteracted ? "Resume auto-play" : "Pause auto-play"}
                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-gold hover:border-gold/40 transition-colors text-xs"
                        >
                            {isPaused || userInteracted ? "▶" : "⏸"}
                        </button>
                    )}
                    <button
                        onClick={goPrev}
                        aria-label="Previous slide"
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-gold hover:border-gold/40 transition-colors"
                    >
                        ←
                    </button>
                    <button
                        onClick={goNext}
                        aria-label="Next slide"
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-gold hover:border-gold/40 transition-colors"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
}
