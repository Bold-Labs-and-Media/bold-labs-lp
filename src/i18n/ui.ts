export const languages = {
  en: "English",
  pt: "Português",
};

export const defaultLang = "pt";

type UI = Record<keyof typeof languages, Record<string, string>>;

export const ui: UI = {
  pt: {
    // Navbar
    "nav.home": "Início",
    "nav.services": "Serviços",
    "nav.portfolio": "Portfólio",
    "nav.testimonials": "Depoimentos",
    "nav.language": "Idioma",
    "nav.contact": "Contacto",
    // Hero section
    "hero.marked-title": "A ponte",
    "hero.title": "Entre",
    "hero.small-title": "e o futuro do mercado",
    "hero.subtitle":
      "A Bold Labs é um laboratório de inovação criativa, agência e consultoria especializada em capacitar marcas africanas a destacarem-se.",
    // Introduction section
    "introduction.title":
      "Bold Labs: Transformando Narrativas, Liderando a Inovação em África",
    "introduction.subtitle":
      "Construímos pontes entre a tradição e o futuro, capacitando marcas africanas a brilharem globalmente através de criatividade e inovação.",
    // Services section
    "services.title": "Nossos",
    "services.marked-title": "Serviços",
    "services.subtitle":
      "Da estratégia à execução, criamos soluções inovadoras que elevam marcas africanas, conectando criatividade, tecnologia e impacto real.",
    "services.side-title": "O que fazemos",
    "services.1": "Posicionamento de Marca",
    "services.2": "Estrategia e Gestão de Imagem",
    "services.3": "Capacitação e Consultoria",
    "services.link-card-black-description":
      "Já imaginou como uma marca se torna inesquecível?",
    "services.link-card-black-link": "Veja",
    "services.link-card-primary-description":
      "Precisa de uma equipe criativa para dar vida à sua marca? A Bold Labs faz acontecer!",
    "services.link-card-primary-link": "Conheça",
    // Contact section
    "contact.title-text-1": "Inovar",
    "contact.title-text-2": "Inspirar",
    "contact.title-text-3": "Criar",
    "contact.subtitle":
      "Encontrar a voz certa para a sua marca pode ser um desafio. A Bold Labs transforma esse processo, conectando sua empresa a estratégias criativas e inovadoras que fazem a diferença.",
    "contact.button": "Contrate-nos",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.testimonials": "Testimonials",
    "nav.language": "Language",
    "nav.contact": "Contact Us",
    // Hero section
    "hero.marked-title": "The bridge",
    "hero.title": "Between",
    "hero.small-title": "And the Future of the Market",
    "hero.subtitle":
      "Bold Labs is a creative innovation laboratory, agency, and consulting firm specializing in empowering African brands to stand out globally through creativity and innovation.",
    // Introduction section
    "introduction.title":
      "Bold Labs: Transforming Narratives, Leading Innovation in Africa",
    "introduction.subtitle":
      "We build bridges between tradition and the future, empowering African brands to shine globally through creativity and innovation.",
    // Services section
    "services.title": "Our",
    "services.marked-title": "Services",
    "services.subtitle":
      "From strategy to execution, we create innovative solutions that elevate African brands, connecting creativity, technology, and real impact.",
    "services.side-title": "What we do",
    "services.1": "Brand Positioning",
    "services.2": "Strategy and Image Management",
    "services.3": "Training and Consulting",
    "services.link-card-black-description":
      "Have you ever imagined how a brand can become unforgettable?",
    "services.link-card-black-link": "See",
    "services.link-card-primary-description":
      "Do you need a creative team to give life to your brand? Bold Labs makes it happen!",
    "services.link-card-primary-link": "Learn",
    // Contact section
    "contact.title-text-1": "Innovate",
    "contact.title-text-2": "Inspire",
    "contact.title-text-3": "Create",
    "contact.subtitle":
      "Finding the right voice for your brand can be a challenge. Bold Labs transforms this process, connecting your company to creative and innovative strategies that make a difference.",
    "contact.button": "Contact Us",
  },
} as const;
