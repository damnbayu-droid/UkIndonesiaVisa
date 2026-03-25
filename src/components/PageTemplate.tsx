import { Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { VisaSection } from '@/components/VisaSection';

interface PageTemplateProps {
  title: string;
  description: string;
  region: string;
}

export function PageTemplate({ title, description, region }: PageTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-white" aria-labelledby="hero-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight text-slate-800">
                {title}
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed uppercase tracking-widest font-bold">
                Professional Visa Services for {region}
              </p>
              <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-10 leading-relaxed text-slate-700">
                {description}
              </p>
            </div>

            {/* Visa Section */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-800">Popular Visas for {region}</h2>
              <p className="text-lg text-slate-600">Choose the best visa option for your visit to {region}.</p>
            </div>
            <VisaSection />

            {/* CTA Section */}
            <section className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl max-w-5xl mx-auto border border-slate-100 text-center relative overflow-hidden group mt-12">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 text-slate-800">
                  Ready to Visit {region}?
                </h2>
                <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-12 max-w-2xl mx-auto">
                  Get your Indonesian visa processed by professionals. Fast, reliable, and secure.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                  <a
                    href="https://indonesianvisas.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-900 text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-black text-lg md:text-xl hover:bg-amber-400 hover:text-slate-800 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(88,28,135,0.3)] inline-flex items-center justify-center gap-3 group"
                    aria-label="Redirect to Indonesian Visas official website"
                  >
                    <Globe className="w-6 h-6 animate-pulse" aria-hidden="true" />
                    Indonesian Visas
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                  </a>
                </div>
                <div className="mt-8 flex items-center justify-center gap-4 text-slate-400 text-sm font-medium">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> Secure Application</span>
                  <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> 24/7 Support</span>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <footer className="mt-auto bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">© 2026 UK Indonesia Visa™ - All Rights Reserved.</p>
          <a href="/sitemap" className="text-slate-400 hover:text-white transition-colors underline">Sitemap</a>
        </div>
      </footer>
    </div>
  );
}
