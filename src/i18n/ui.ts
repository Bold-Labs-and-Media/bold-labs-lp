export const languages = {
  en: "English",
  pt: "Português",
};

export const defaultLang = "pt";

type UI = Record<keyof typeof languages, Record<string, string>>;

export const ui: UI = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.testimonials": "Testimonials",
    "nav.language": "Language",
    "nav.contact": "Contact Us",
  },
  pt: {
    "nav.home": "Início",
    "nav.services": "Serviços",
    "nav.portfolio": "Portfólio",
    "nav.testimonials": "Depoimentos",
    "nav.language": "Idioma",
    "nav.contact": "Contacto",
  },
} as const;
