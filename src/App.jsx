import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AuthSection from './components/AuthSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-950">
      <Navbar />
      <main>
        <Hero />
        <Features />

        {/* Section anchors for future expansion */}
        <section id="quiz" className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-emerald-100 p-6 bg-emerald-50">
              <h3 className="text-2xl font-semibold">Prakriti Quiz</h3>
              <p className="mt-2 text-emerald-900/80">
                Discover your dosha. This section will host the interactive assessment that identifies your constitution (Vata, Pitta, Kapha) and guides you with gentle tips.
              </p>
            </div>
          </div>
        </section>

        <section id="planner" className="py-14 bg-gradient-to-b from-emerald-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-emerald-100 p-6 bg-white">
              <h3 className="text-2xl font-semibold">AI Diet Planner</h3>
              <p className="mt-2 text-emerald-900/80">
                Your personalized Ayurvedic meal plans will appear here. Tailored to your body type and season, with sattvic recipes and mindful timing.
              </p>
            </div>
          </div>
        </section>

        <section id="recipes" className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-emerald-100 p-6 bg-emerald-50">
              <h3 className="text-2xl font-semibold">Recipes & Remedies</h3>
              <p className="mt-2 text-emerald-900/80">
                Search calming recipes and gentle home remedies. Warm spices, digestive teas, and balancing meals, all in one place.
              </p>
            </div>
          </div>
        </section>

        <section id="lifestyle" className="py-14 bg-gradient-to-b from-emerald-50/40 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-emerald-100 p-6 bg-white">
              <h3 className="text-2xl font-semibold">Lifestyle & Yoga</h3>
              <p className="mt-2 text-emerald-900/80">
                Daily routines, breathwork, and seasonal guidance inspired by classical Ayurveda. Gentle movement, grounding rituals, and restorative rest.
              </p>
            </div>
          </div>
        </section>

        <section id="dashboard" className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-emerald-100 p-6 bg-emerald-50">
              <h3 className="text-2xl font-semibold">Dashboard</h3>
              <p className="mt-2 text-emerald-900/80">
                Hydration, meals, and progress charts will live here. A gentle, motivating overview of your journey.
              </p>
            </div>
          </div>
        </section>

        <AuthSection />
      </main>

      <footer className="border-t border-emerald-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-emerald-900/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Nivarana. Rooted in Ayurveda, crafted with care.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-emerald-900">Privacy</a>
            <a href="#" className="hover:text-emerald-900">Terms</a>
            <a href="#auth" className="hover:text-emerald-900">Account</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
