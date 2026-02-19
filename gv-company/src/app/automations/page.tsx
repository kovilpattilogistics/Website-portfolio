import AutomationsGrid from "@/components/home/AutomationsGrid";
import TemplateCarousel from "@/components/home/TemplateCarousel";

export default function AutomationsPage() {
    return (
        <main className="bg-stone-950 min-h-screen pt-20">
            <div className="container-luxury px-6 py-20 text-center">
                <h1 className="font-heading text-display-xl text-white mb-6">Built for Speed.</h1>
                <p className="text-stone-400 text-xl max-w-2xl mx-auto mb-16">
                    See the actual tools we deploy to run your business on autopilot.
                </p>
            </div>
            <AutomationsGrid />
            <TemplateCarousel />
        </main>
    );
}
