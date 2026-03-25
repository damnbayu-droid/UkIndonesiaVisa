import { Navbar } from '@/components/Navbar';
import { Home, MapPin, FileText, Globe } from 'lucide-react';

export const metadata = {
  title: "Sitemap | UK Indonesia Visa",
  description: "Navigate through our professional Indonesian visa services from the United Kingdom. Find regional categories and general information.",
};

const SITEMAP_CLUSTERS = [
  {
    title: "Main Pages",
    icon: Home,
    links: [
      { name: "Home", href: "/" },
      { name: "Apply for Visa", href: "https://indonesianvisas.com/apply" },
      { name: "Extend Visa", href: "https://indonesianvisas.com/extend" },
      { name: "Visa Services", href: "https://indonesianvisas.com/services" },
      { name: "FAQ", href: "https://indonesianvisas.com/faq" },
      { name: "About Us", href: "https://indonesianvisas.com/about" },
    ],
  },
  {
    title: "Regional Visa Pages (New Cluster)",
    icon: MapPin,
    links: [
      { name: "Visa Indonesia", href: "/visa-indonesia" },
      { name: "Visa Bali", href: "/visa-bali" },
      { name: "Visa Jakarta", href: "/visa-jakarta" },
      { name: "Visa Lombok", href: "/visa-lombok" },
      { name: "Visa Surabaya", href: "/visa-surabaya" },
      { name: "Visa Jogja", href: "/visa-jogja" },
    ],
  },
  {
    title: "Policies",
    icon: FileText,
    links: [
      { name: "Privacy Policy", href: "https://indonesianvisas.com/privacy" },
      { name: "Terms of Service", href: "https://indonesianvisas.com/terms" },
      { name: "Refund Policy", href: "https://indonesianvisas.com/refund" },
      { name: "Disclaimer", href: "https://indonesianvisas.com/disclaimer" },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-slate-800">Sitemap</h1>
            <p className="text-lg text-slate-600">Explore all pages and services provided by UK Indonesia Visa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SITEMAP_CLUSTERS.map((cluster, index) => (
              <section key={index} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <cluster.icon className="w-8 h-8 text-purple-900" />
                  <h2 className="text-2xl font-bold text-slate-800">{cluster.title}</h2>
                </div>
                <ul className="space-y-4">
                  {cluster.links.map((link, idx) => (
                    <li key={idx}>
                      <a 
                        href={link.href} 
                        className="text-slate-600 hover:text-purple-900 hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-purple-900 transition-colors"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-auto bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2026 UK Indonesia Visa™ - All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
