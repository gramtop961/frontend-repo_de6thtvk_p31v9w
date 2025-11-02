import { useState } from 'react';
import { User, Lock } from 'lucide-react';

export default function AuthSection() {
  const [mode, setMode] = useState('login');

  return (
    <section id="auth" className="py-16 md:py-20 bg-white" aria-labelledby="auth-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 id="auth-heading" className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-950">
            Join Nivarana
          </h2>
          <p className="mt-3 text-emerald-900/80">
            Create an account to save your quiz results, personalized diet plans, and daily progress.
          </p>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-xl border border-emerald-100 bg-white shadow-sm p-6">
            <div className="flex items-center gap-2 text-sm">
              <button
                className={`px-3 py-1 rounded-md ${mode === 'login' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-800'}`}
                onClick={() => setMode('login')}
              >
                Log In
              </button>
              <button
                className={`px-3 py-1 rounded-md ${mode === 'signup' ? 'bg-amber-500 text-white' : 'bg-amber-50 text-amber-800'}`}
                onClick={() => setMode('signup')}
              >
                Sign Up
              </button>
            </div>

            <form className="mt-6 space-y-4">
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm text-emerald-900/80 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                    placeholder="e.g., Anaya Sharma"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm text-emerald-900/80 mb-1">Email</label>
                <div className="relative">
                  <User className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-emerald-700" />
                  <input
                    type="email"
                    className="w-full rounded-md border border-emerald-200 pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-emerald-900/80 mb-1">Password</label>
                <div className="relative">
                  <Lock className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-emerald-700" />
                  <input
                    type="password"
                    className="w-full rounded-md border border-emerald-200 pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <button
                type="button"
                className={`w-full rounded-md py-2 font-medium text-white ${mode === 'signup' ? 'bg-amber-500 hover:bg-amber-600' : 'bg-emerald-700 hover:bg-emerald-800'} transition-colors`}
              >
                {mode === 'signup' ? 'Create Account' : 'Log In'}
              </button>
            </form>
          </div>

          <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-6">
            <h3 className="text-lg font-semibold text-emerald-950">What you get</h3>
            <ul className="mt-3 space-y-2 text-emerald-900/80">
              <li>• Save your Prakriti profile and recommendations</li>
              <li>• Weekly AI-assisted meal plans and shopping lists</li>
              <li>• Progress dashboard with hydration and habit tracking</li>
              <li>• Seasonal tips for routines, herbs, and yoga</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
