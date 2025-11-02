import { Leaf, Bot, BookOpen, Sun, BarChart3 } from 'lucide-react';

const items = [
  {
    icon: Leaf,
    title: 'Prakriti Quiz',
    desc: 'Find your dominant dosha—Vata, Pitta, or Kapha—with a mindful interactive assessment.',
    href: '#quiz',
    accent: 'from-emerald-100 to-emerald-50',
  },
  {
    icon: Bot,
    title: 'AI Diet Planner',
    desc: 'Get a personalized Ayurvedic meal plan tuned to your body type and the current season.',
    href: '#planner',
    accent: 'from-amber-100 to-amber-50',
  },
  {
    icon: BookOpen,
    title: 'Recipes & Remedies',
    desc: 'Search sattvic recipes and gentle home remedies rooted in timeless Ayurvedic wisdom.',
    href: '#recipes',
    accent: 'from-lime-100 to-lime-50',
  },
  {
    icon: Sun,
    title: 'Lifestyle & Yoga',
    desc: 'Daily routines, breathwork, and yoga suggestions to harmonize mind, body, and spirit.',
    href: '#lifestyle',
    accent: 'from-orange-100 to-orange-50',
  },
  {
    icon: BarChart3,
    title: 'Progress Dashboard',
    desc: 'Track meals, hydration, and habits with gentle insights and calming visuals.',
    href: '#dashboard',
    accent: 'from-stone-100 to-stone-50',
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-emerald-50/50" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-950">
            Designed for calm, consistent wellbeing
          </h2>
          <p className="mt-3 text-emerald-900/80">
            Explore the key areas of Nivarana, each crafted to be informative, soothing, and easy to use.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc, href, accent }) => (
            <a
              key={title}
              href={href}
              className="group rounded-xl border border-emerald-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`h-24 w-full bg-gradient-to-r ${accent}`} />
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-emerald-950">{title}</h3>
                </div>
                <p className="mt-2 text-emerald-900/80 text-sm leading-relaxed">
                  {desc}
                </p>
                <span className="mt-3 inline-flex text-amber-700 font-medium group-hover:underline">Learn more →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
