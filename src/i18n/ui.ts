export const languages = {
  en: "English",
  pt: "Português",
};

export const defaultLang = "pt";

type UI = Record<keyof typeof languages, Record<string, string>>;

export const ui: UI = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.testimonials": "Testimonials",
    "nav.language": "Language",
    "nav.contact": "Contact Us",
    // Introduction section
  },
  pt: {
    // Navbar
    "nav.home": "Início",
    "nav.services": "Serviços",
    "nav.portfolio": "Portfólio",
    "nav.testimonials": "Depoimentos",
    "nav.language": "Idioma",
    "nav.contact": "Contacto",
    // Introduction section
    "introduction.title":
      "Bold Labs: Transformando Narrativas, Liderando a Inovação em África",
    "introduction.subtitle":
      "Construímos pontes entre a tradição e o futuro, capacitando marcas africanas a brilharem globalmente através de criatividade e inovação.",
  },
} as const;
