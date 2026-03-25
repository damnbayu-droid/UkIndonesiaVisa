import {
  Globe,
  RefreshCw,
  MessageCircle,
  CheckCircle2,
  Send,
  FileText,
  CreditCard,
  Star,
  Navigation,
  Briefcase,
  User,
  Clock,
  HeadphonesIcon as Headphones,
  ArrowRight,
  MapPin,
  Mail,
  Plane,
  Heart,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';

// Static data
const VISA_SERVICES = [
  {
    title: "B1 VOA / Extension",
    description: "30-day visa on arrival with extension options. Perfect for short visits and tourism.",
    link: "https://indonesianvisas.com/services/B1",
    icon: "Navigation",
  },
  {
    title: "C1 Visit Visa",
    description: "Single entry visit visa for tourism purposes. Valid for 60 days with flexible dates.",
    link: "https://indonesianvisas.com/services/C1",
    icon: "Globe",
  },
  {
    title: "C2 Business Visa",
    description: "Business visa for meetings and conferences. Includes multiple entry options.",
    link: "https://indonesianvisas.com/services/C2",
    icon: "Briefcase",
  },
  {
    title: "C12 Pre-Investment Visa",
    description: "Pre-investment visa for business setup. Ideal for entrepreneurs and investors.",
    link: "https://indonesianvisas.com/services/C12",
    icon: "Star",
  },
  {
    title: "D1 Tourist Visa",
    description: "60-day tourist visa (B211A) with extensions up to 180 days total stay.",
    link: "https://indonesianvisas.com/services/D1",
    icon: "User",
  },
  {
    title: "D2 Business Visa",
    description: "Multiple entry business visa for professionals. Valid up to 12 months.",
    link: "https://indonesianvisas.com/services/D2",
    icon: "FileText",
  },
  {
    title: "D12 Pre Investment",
    description: "Pre-investment visa for business setup. Ideal for entrepreneurs and investors.",
    link: "https://indonesianvisas.com/services/D12",
    icon: "Star",
  },
  {
    title: "E33G Digital Nomad",
    description: "5-year digital nomad visa for remote workers. Live and work in Indonesia long-term.",
    link: "https://indonesianvisas.com/services/E33G",
    icon: "Globe",
  },
  {
    title: "E28A Investment Kitas",
    description: "Investment-based residence permit. Long-term stay for investors.",
    link: "https://indonesianvisas.com/services/E28A",
    icon: "CreditCard",
  },
  {
    title: "Custom Visa",
    description: "Tailored visa solutions for unique cases. We handle special requirements.",
    link: "https://indonesianvisas.com/services",
    icon: "FileText",
  },
] as const;

const BENEFITS = [
  {
    title: "Fast Processing",
    description: "Express service available with same-day processing options for urgent applications",
    icon: "Clock",
  },
  {
    title: "99% Success Rate",
    description: "Proven track record with 10,000+ visas processed successfully worldwide",
    icon: "CheckCircle2",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock WhatsApp support for your peace of mind anytime, anywhere",
    icon: "Headphones",
  },
  {
    title: "97 Countries",
    description: "We serve applicants from 97 countries worldwide with local expertise",
    icon: "Globe",
  },
] as const;

const SOCIAL_LINKS = [
  { name: "Telegram", url: "https://t.me/IndonesianVisas", bg: "bg-slate-800" },
  { name: "Instagram", url: "https://instagram.com/balihelp.id", bg: "bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600" },
  { name: "TikTok", url: "https://www.tiktok.com/@balihelp.id", bg: "bg-black" },
  { name: "Facebook", url: "https://facebook.com/BaliHelp", bg: "bg-blue-600" },
  { name: "Twitter", url: "https://twitter.com/IndonesianVisas", bg: "bg-sky-500" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/bayu-damopolii-887ab883/", bg: "bg-blue-700" },
  { name: "YouTube", url: "https://youtube.com/@balihelp", bg: "bg-red-600" },
] as const;

const ICON_MAP = {
  Navigation,
  Globe,
  Briefcase,
  Star,
  User,
  FileText,
  CreditCard,
  Clock,
  CheckCircle2,
  Headphones,
} as const;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "UK Indonesia Visa",
    "url": "https://ukindonesiavisas.online",
    "description": "Professional United Kingdom to Indonesia visa services. Fast, reliable, and trusted by thousands for tourism, business, and investment visas.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ukindonesiavisas.online/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PT Indonesian Visas Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ukindonesiavisas.online/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-white" aria-labelledby="hero-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight text-slate-800">
                United Kingdom Indonesia Visa
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed uppercase tracking-widest font-bold">
                Gateway to Indonesian Visas
              </p>
              <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-10 leading-relaxed text-slate-700">
                Fast, reliable, and professional visa services for your Indonesian adventure from the United Kingdom. We serve 97 countries with expert support and dedicated customer service available 24/7.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
                <article className="p-5 md:p-6 rounded-2xl bg-white border-2 border-slate-200">
                  <div className="text-3xl md:text-4xl font-black mb-2 text-purple-900">16+</div>
                  <div className="text-xs md:text-sm font-bold text-slate-600">Years Experience</div>
                </article>
                <article className="p-5 md:p-6 rounded-2xl bg-white border-2 border-slate-200">
                  <div className="text-3xl md:text-4xl font-black mb-2 text-purple-900">10,000+</div>
                  <div className="text-xs md:text-sm font-bold text-slate-600">Visas Processed</div>
                </article>
                <article className="p-5 md:p-6 rounded-2xl bg-white border-2 border-slate-200">
                  <div className="text-3xl md:text-4xl font-black mb-2 text-purple-900">99%</div>
                  <div className="text-xs md:text-sm font-bold text-slate-600">Success Rate</div>
                </article>
              </div>
            </div>

            {/* CTA Section */}
            <section className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl max-w-5xl mx-auto border border-slate-100 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 text-slate-800">
                  Ready to Begin Your Application?
                </h2>
                <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-12 max-w-2xl mx-auto">
                  Join thousands of travelers who have successfully obtained their Indonesian visas through our professional platform.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                  <a
                    href="https://indonesianvisas.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-900 text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-black text-lg md:text-xl hover:bg-amber-400 hover:text-slate-800 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(88,28,135,0.3)] inline-flex items-center justify-center gap-3 group"
                    aria-label="Select your country and start visa application"
                  >
                    <Globe className="w-6 h-6 animate-pulse" aria-hidden="true" />
                    Select Your Country
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

        {/* Quick Links */}
        <section className="py-12 md:py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Send className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 text-slate-800" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-slate-800">Apply for a Visa</h3>
                <p className="text-base md:text-lg mb-5 md:mb-6 text-slate-600">
                  Get your Indonesian visa quickly and hassle-free. Professional support from start to finish. Start your application today and receive approval within 24-48 hours.
                </p>
                <a
                  href="https://indonesianvisas.com/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
                  aria-label="Apply now for Indonesian visa"
                >
                  Apply Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                </a>
              </article>
              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <RefreshCw className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 text-slate-800" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-slate-800">Extend Your Visa</h3>
                <p className="text-base md:text-lg mb-5 md:mb-6 text-slate-600">
                  Need more time in Indonesia? Extend your visa without leaving the country. Simple process with guaranteed approval. Stay up to 180 days.
                </p>
                <a
                  href="https://indonesianvisas.com/extend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-slate-800 border-2 border-slate-800 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:border-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
                  aria-label="Extend your Indonesian visa now"
                >
                  Extend Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Visa Services */}
        <section className="py-16 md:py-20 px-4 bg-white" aria-labelledby="services-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 id="services-title" className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">Our Visa Services</h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Choose the right visa type for your needs - from tourist to business and investment visas. Expert guidance for every visa category.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
              {VISA_SERVICES.map((service, index) => {
                const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP];
                return (
                  <article key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="text-slate-800 mb-4">{IconComponent && <IconComponent className="w-16 h-16" aria-hidden="true" />}</div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                    <p className="text-sm md:text-base text-slate-600 mb-6">{service.description}</p>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-slate-800 hover:text-purple-900 transition-colors"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
            </div>
            <div className="text-center">
              <a
                href="https://indonesianvisas.com/services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 text-white px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
                aria-label="View all Indonesian visa types available"
              >
                View All Visa Types <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Indonesia & United Kingdom Section */}
        <section className="py-16 md:py-20 px-4 bg-slate-50" aria-labelledby="relations-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 id="relations-title" className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">Indonesia & United Kingdom</h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Bridging two great nations with seamless visa services and cultural connections
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
              {/* Indonesia Info */}
              <article className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <Plane className="w-12 h-12 text-purple-900" aria-hidden="true" />
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800">About Indonesia</h3>
                </div>
                <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                  Indonesia is the world's largest archipelago nation, comprising over 17,000 islands with diverse cultures, stunning landscapes, and rich heritage. From the temples of Bali to the rainforests of Sumatra, Indonesia offers endless adventures.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  With a tropical climate year-round, vibrant cities, and world-class beaches, Indonesia has become one of the most popular destinations for travelers from the United Kingdom seeking adventure, relaxation, and cultural experiences.
                </p>
              </article>

              {/* United Kingdom Info */}
              <article className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <Globe className="w-12 h-12 text-purple-900" aria-hidden="true" />
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800">About United Kingdom</h3>
                </div>
                <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                  The United Kingdom, comprising England, Scotland, Wales, and Northern Ireland, is a nation with deep historical significance and global influence. British travelers have long been drawn to Indonesia's natural beauty and cultural richness.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  With strong diplomatic ties and increasing tourism between our nations, UK citizens can easily obtain Indonesian visas to experience everything from Bali's spiritual retreats to Komodo's unique wildlife, making it an ideal destination for British travelers.
                </p>
              </article>
            </div>

            {/* Connection Stats */}
            <section className="bg-gradient-to-br from-purple-900 to-purple-700 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Heart className="w-8 h-8 md:w-10 md:h-10" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold">Strong Connection Between Nations</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl md:text-4xl font-black mb-2">200,000+</div>
                  <div className="text-sm md:text-base font-semibold">UK Visitors to Indonesia Annually</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl md:text-4xl font-black mb-2">14+ Hours</div>
                  <div className="text-sm md:text-base font-semibold">Average Flight Duration</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl md:text-4xl font-black mb-2">Direct Flights</div>
                  <div className="text-sm md:text-base font-semibold">London to Bali & Jakarta</div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* UK-Indonesia Relations & Strategic Partnership */}
        <section className="py-16 md:py-20 px-4 bg-white" aria-labelledby="partnership-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 id="partnership-title" className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">UK Indonesia Strategic Partnership & Tourism Relations</h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto">
                Strengthening bilateral ties between the United Kingdom and Indonesia through strategic cooperation in tourism, trade, and cultural exchange
              </p>
            </div>

            {/* Diplomatic Relations Overview */}
            <article className="bg-gradient-to-br from-purple-50 to-white p-8 md:p-12 rounded-2xl md:rounded-3xl border-2 border-purple-100 mb-12">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <Globe className="w-10 h-10 md:w-12 md:h-12 text-purple-900" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Historical Diplomatic Relations</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                    The United Kingdom and Indonesia share a long-standing diplomatic relationship established in 1949, following Indonesia's independence. Both nations have maintained strong bilateral ties spanning over 75 years of cooperation in various sectors.
                  </p>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    This enduring partnership has evolved from traditional diplomatic exchanges to comprehensive strategic cooperation encompassing trade, investment, education, climate action, and tourism development.
                  </p>
                </div>
                <div>
                  <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                    British diplomatic presence in Indonesia includes the Embassy in Jakarta and consular offices across major cities, while Indonesia maintains its Embassy in London, facilitating seamless communication and cooperation between both nations.
                  </p>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    Regular high-level visits and strategic dialogues have strengthened bilateral relations, with both countries committed to enhancing mutual benefits through structured cooperation frameworks.
                  </p>
                </div>
              </div>
            </article>

            {/* Tourism & Visa Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
              <article className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-2 border-slate-100 hover:border-purple-300 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <Plane className="w-10 h-10 md:w-12 md:h-12 text-purple-900" aria-hidden="true" />
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">Tourism Cooperation</h3>
                </div>
                <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                  Tourism serves as a cornerstone of UK-Indonesia relations, with the United Kingdom consistently ranking among the top source markets for Indonesian tourism. Bali remains the most popular destination for British travelers, followed by Jakarta, Yogyakarta, and Lombok.
                </p>
                <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                  The Indonesian Ministry of Tourism and Creative Economy actively promotes Indonesia as a preferred destination for UK travelers through strategic marketing campaigns, participation in travel exhibitions like the World Travel Market London, and partnerships with UK-based travel operators.
                </p>
              </article>

              <article className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-2 border-slate-100 hover:border-purple-300 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <Star className="w-10 h-10 md:w-12 md:h-12 text-purple-900" aria-hidden="true" />
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">Visa Facilitation</h3>
                </div>
                <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                  Indonesia has significantly simplified visa procedures for UK citizens through Visa on Arrival (VOA) facilities and electronic visa systems, making travel more accessible. British passport holders can obtain visas upon arrival at major Indonesian airports or apply online before departure.
                </p>
                <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                  This visa facilitation policy reflects Indonesia's commitment to boosting tourism from the UK and other strategic markets. The streamlined process enables British tourists to plan their trips with greater convenience and flexibility.
                </p>
              </article>
            </div>

            {/* Partnership Areas */}
            <section className="bg-slate-50 p-8 md:p-12 rounded-2xl md:rounded-3xl border-2 border-slate-200 mb-12">
              <div className="flex items-center gap-4 mb-8 md:mb-10">
                <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-purple-900" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">UK Indonesia Strategic Partnership</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {[
                  { title: "Trade & Investment", desc: "The UK is one of Indonesia's largest investors in Europe, with significant British investments in infrastructure, energy, mining, and financial services." },
                  { title: "Education & Culture", desc: "Educational cooperation includes scholarship programs, university partnerships, and student exchanges between British and Indonesian institutions." },
                  { title: "Climate & Sustainability", desc: "Both nations are committed to forest conservation, renewable energy transition, and marine ecosystem protection initiatives." },
                  { title: "Innovation & Technology", desc: "Digital cooperation focuses on fintech, e-commerce, and smart city development to drive digital transformation." },
                ].map((item, idx) => (
                  <article key={idx} className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-slate-100">
                    <h4 className="text-lg md:text-xl font-bold mb-4 text-slate-800 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-purple-900 text-white flex items-center justify-center font-bold text-sm">{idx + 1}</span>
                      {item.title}
                    </h4>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed">{item.desc}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 px-4 bg-white" aria-labelledby="why-us-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 id="why-us-title" className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">Why Choose UK Indonesia Visa?</h2>
              <p className="text-lg md:text-xl text-slate-600">Your trusted partner for seamless Indonesian visa processing from the United Kingdom</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {BENEFITS.map((benefit, index) => {
                const IconComponent = ICON_MAP[benefit.icon as keyof typeof ICON_MAP];
                return (
                  <article key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="text-slate-800 mb-4">{IconComponent && <IconComponent className="w-20 h-20" aria-hidden="true" />}</div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">{benefit.title}</h3>
                    <p className="text-sm md:text-base text-slate-600">{benefit.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ & About */}
        <section className="py-16 md:py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Globe className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 text-slate-800" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">Frequently Asked Questions</h3>
                <p className="text-base md:text-lg mb-6 text-slate-600">
                  Find answers to common visa questions and requirements. Learn about processing times, required documents, and more.
                </p>
                <a
                  href="https://indonesianvisas.com/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
                  aria-label="Read frequent questions and answers"
                >
                  View FAQ <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </article>
              <article className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Send className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 text-slate-800" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">About Us</h3>
                <p className="text-base md:text-lg mb-6 text-slate-600">
                  Learn more about our team, mission, and commitment to providing exceptional visa services for Indonesia from the UK.
                </p>
                <a
                  href="https://indonesianvisas.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
                  aria-label="Learn more about our agency"
                >
                  Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20 px-4 bg-white" aria-labelledby="contact-title">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 id="contact-title" className="text-3xl md:text-4xl font-black mb-8 text-center text-slate-800">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <a
                  href="https://wa.me/61423854701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200 hover:border-purple-900 hover:shadow-md transition-all duration-300 block"
                  aria-label="Contact us via WhatsApp"
                >
                  <MessageCircle className="w-10 h-10 mb-4 text-slate-800" aria-hidden="true" />
                  <h3 className="text-lg font-bold mb-2 text-slate-800">WhatsApp</h3>
                  <p className="text-sm text-slate-600">+61 423 854 701</p>
                </a>
                <a
                  href="mailto:info@indonesianvisas.agency"
                  className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200 hover:border-purple-900 hover:shadow-md transition-all duration-300 block"
                  aria-label="Email us at info@indonesianvisas.agency"
                >
                  <Mail className="w-10 h-10 mb-4 text-slate-800" aria-hidden="true" />
                  <h3 className="text-lg font-bold mb-2 text-slate-800">Email</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-slate-600">info@indonesianvisas.agency</p>
                    <p className="text-sm text-slate-600">support@visas.agency</p>
                  </div>
                </a>
              </div>
              <article className="mt-6 bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
                <MapPin className="w-10 h-10 mb-4 text-slate-800" aria-hidden="true" />
                <h3 className="text-lg font-bold mb-2 text-slate-800">Office</h3>
                <p className="text-sm text-slate-600">Jl. Tibungsari No.11C, Bali, Indonesia</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 text-white">UK Indonesia Visa</h2>
              <p className="text-slate-300 text-base md:text-lg mb-4 md:mb-6">
                Professional United Kingdom to Indonesia visa services with 16+ years experience. Fast, reliable, and trusted by thousands from the UK and worldwide. <a href="/sitemap" className="text-amber-400 hover:text-amber-300 transition-colors underline font-bold">(sitemap)</a>
              </p>
            </div>
            <nav aria-label="Footer Quick Links">
              <h3 className="text-lg font-bold mb-4 md:mb-6 text-white">Quick Links</h3>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="https://indonesianvisas.com/apply" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Apply Now</a></li>
                <li><a href="https://indonesianvisas.com/extend" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Extend Visa</a></li>
                <li><a href="https://indonesianvisas.com/services" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="https://indonesianvisas.com/faq" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </nav>
            <nav aria-label="Footer Policies">
              <h3 className="text-lg font-bold mb-4 md:mb-6 text-white">Policies</h3>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="https://indonesianvisas.com/privacy" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="https://indonesianvisas.com/terms" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="https://indonesianvisas.com/refund" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Refund Policy</a></li>
                <li><a href="https://indonesianvisas.com/disclaimer" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <section className="border-t border-slate-700 pt-6 md:pt-8 mb-6 md:mb-8" aria-label="Social media profiles">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.bg} w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm hover:scale-110 transition-transform`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.name.charAt(0)}
                </a>
              ))}
            </div>
          </section>

          {/* Copyright */}
          <div className="border-t border-slate-600 pt-6 pb-4 text-center">
            <p className="text-slate-300 text-sm md:text-base mb-4 font-semibold">© 2026 UK Indonesia Visa™</p>
            <p className="text-slate-300 text-xs md:text-sm mb-4">Operated by PT Indonesian Visas Agency (Indonesia).</p>
            <p className="text-slate-300 text-xs md:text-sm mb-4">All Rights Reserved.</p>
            <div className="mb-4">
              <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-xs md:text-sm">
                <a href="https://bali.enterprises" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">bali.enterprises</a>
                <span className="text-slate-500">•</span>
                <a href="https://visas.agency" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">visas.agency</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
