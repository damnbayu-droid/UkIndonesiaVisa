import { ArrowRight } from 'lucide-react';
import { VISA_SERVICES } from '@/lib/visa-data';

export function VisaSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
      {VISA_SERVICES.map((service, index) => {
        const IconComponent = service.icon;
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
  );
}
