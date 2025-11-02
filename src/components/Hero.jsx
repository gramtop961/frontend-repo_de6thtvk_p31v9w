import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient wash to blend with brand colors - does not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/70 via-amber-50/40 to-white/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-24 pb-20 md:pt-28 md:pb-28 lg:pt-32 lg:pb-36 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-sm mb-4">
              Ayurveda · Balance · Wellness
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-emerald-950">
              Nivarana: Ayurvedic Diet Management System
            </h1>
            <p className="mt-4 text-emerald-900/80 text-lg leading-relaxed max-w-xl">
              Discover your unique constitution and nourish it with personalized, seasonally-aligned meals, rituals, and yoga. Calm, earthy, and crafted for everyday balance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#quiz"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-amber-500 text-white shadow-sm hover:bg-amber-600 transition-colors"
              >
                Start My Ayurvedic Journey
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#planner"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-700 text-white shadow-sm hover:bg-emerald-800 transition-colors"
              >
                Try AI Diet Planner
              </a>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
