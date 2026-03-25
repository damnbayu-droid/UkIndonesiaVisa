import {
  Navigation,
  Globe,
  Briefcase,
  Star,
  User,
  FileText,
  CreditCard,
} from 'lucide-react';

export const VISA_SERVICES = [
  {
    title: "B1 VOA / Extension",
    description: "30-day visa on arrival with extension options. Perfect for short visits and tourism.",
    link: "https://indonesianvisas.com/services/B1",
    icon: Navigation,
  },
  {
    title: "C1 Visit Visa",
    description: "Single entry visit visa for tourism purposes. Valid for 60 days with flexible dates.",
    link: "https://indonesianvisas.com/services/C1",
    icon: Globe,
  },
  {
    title: "C2 Business Visa",
    description: "Business visa for meetings and conferences. Includes multiple entry options.",
    link: "https://indonesianvisas.com/services/C2",
    icon: Briefcase,
  },
  {
    title: "C12 Pre-Investment Visa",
    description: "Pre-investment visa for business setup. Ideal for entrepreneurs and investors.",
    link: "https://indonesianvisas.com/services/C12",
    icon: Star,
  },
  {
    title: "D1 Tourist Visa",
    description: "60-day tourist visa (B211A) with extensions up to 180 days total stay.",
    link: "https://indonesianvisas.com/services/D1",
    icon: User,
  },
  {
    title: "D2 Business Visa",
    description: "Multiple entry business visa for professionals. Valid up to 12 months.",
    link: "https://indonesianvisas.com/services/D2",
    icon: FileText,
  },
  {
    title: "E33G Digital Nomad",
    description: "5-year digital nomad visa for remote workers. Live and work in Indonesia long-term.",
    link: "https://indonesianvisas.com/services/E33G",
    icon: Globe,
  },
  {
    title: "E28A Investment Kitas",
    description: "Investment-based residence permit. Long-term stay for investors.",
    link: "https://indonesianvisas.com/services/E28A",
    icon: CreditCard,
  },
] as const;
