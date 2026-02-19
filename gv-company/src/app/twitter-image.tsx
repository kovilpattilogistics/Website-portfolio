import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GV&co™ — Branding & Digital Operations Studio, Bangalore";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#1A1916",
                    fontFamily: "sans-serif",
                    gap: 24,
                }}
            >
                {/* Logo — white on dark for Twitter */}
                <div
                    style={{
                        display: "flex",
                        fontSize: 144,
                        fontWeight: 900,
                        color: "#F4EFE8",
                        letterSpacing: "-3px",
                        lineHeight: 1,
                    }}
                >
                    GV&amp;co™
                </div>

                {/* Thin divider */}
                <div
                    style={{
                        width: 80,
                        height: 1,
                        backgroundColor: "#F4EFE8",
                        opacity: 0.3,
                    }}
                />

                {/* Tagline */}
                <div
                    style={{
                        display: "flex",
                        fontSize: 22,
                        fontWeight: 300,
                        color: "#A89E92",
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                    }}
                >
                    Branding &amp; Digital Operations · Bangalore
                </div>
            </div>
        ),
        size,
    );
}
