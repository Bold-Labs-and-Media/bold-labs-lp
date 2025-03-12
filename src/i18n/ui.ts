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
    //Why Us section
    "why-us.side-title": "Porquê nós?",
    "why-us.title": "Por que escolher a Bold ",
    "why-us.marked-title": "Labs?",
    "why-us.subtitle":
      "Unimos expertise local, inovação e visão global para transformar marcas africanas em referências de mercado.",
    "why-us.list-item-1-title": "Conhecimento do Mercado",
    "why-us.list-item-1-description":
      "Compreendemos as nuances culturais e os desafios do mercado africano, criando estratégias autênticas e eficazes.",
    "why-us.list-item-2-title": "Inovação Personalizada",
    "why-us.list-item-2-description":
      "Desenvolvemos soluções criativas sob medida, destacando marcas africanas com abordagens únicas e estratégicas.",
    "why-us.list-item-3-title": "Conexão Global",
    "why-us.list-item-3-description":
      "Aliamos tendências globais à identidade local, posicionando marcas africanas no cenário internacional.",
    "why-us.list-item-4-title": "Impacto Real",
    "why-us.list-item-4-description":
      "Transformamos ideias em experiências memoráveis que impulsionam negócios e inspiram mercados.",
    // Portfolio section
    "portfolio.title-1": "Nossa",
    "portfolio.marked-title": "Criatividade",
    "portfolio.title-2": "em ação",
    "portfolio.side-title": "Portfolio",
    "portfolio.subtitle":
      "Projetos que transformam ideias em impacto. Explore as campanhas e estratégias que ajudaram marcas africanas a se destacarem.",
    // FAQ Section
    "faq.title": "Perguntas",
    "faq.marked-title": "Frequentes",
    "faq.side-title": "FAQ",
    "faq.subtitle":
      "Da estratégia à execução, criamos soluções inovadoras que elevam marcas africanas, conectando criatividade, tecnologia e impacto real.",
    "faq.question-1": "O que é a Bold Labs?",
    "faq.answer-1":
      "A Bold Labs é uma agência criativa especializada em branding, design, marketing digital e produção de conteúdo. Criamos experiências inovadoras para marcas que pretendem distinguir-se no mercado.",
    // Contact section
    "contact.title-text-1": "Inovar",
    "contact.title-text-2": "Inspirar",
    "contact.title-text-3": "Criar",
    "contact.subtitle":
      "Encontrar a voz certa para a sua marca pode ser um desafio. A Bold Labs transforma esse processo, conectando sua empresa a estratégias criativas e inovadoras que fazem a diferença.",
    "contact.button": "Contrate-nos",
    // Footer
    "footer.text": "Inovar. Inspirar. Criar",
    "footer.copy": "Copyright © {} Bold Labs. Todos os direitos reservados.",
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
    // Why Us Section
    "why-us.title": "Why choose Bold",
    "why-us.marked-title": "Labs",
    "why-us.subtitle":
      "We bring together local expertise, innovation, and global vision to transform African brands into market leaders.",
    "why-us.side-title": "Why Bold Labs?",
    "why-us.list-item-1-title": "Market Understanding",
    "why-us.list-item-1-description":
      "We understand the African market, its culture, and its challenges.",
    "why-us.list-item-2-title": "Custom Innovation",
    "why-us.list-item-2-description":
      "We tailor creative solutions to meet the specific needs of African brands.",
    "why-us.list-item-3-title": "Global Presence",
    "why-us.list-item-3-description":
      "Aliamos tendências globais à identidade local, posicionando marcas africanas no cenário internacional.",
    "why-us.list-item-4-title": "Real Impact",
    "why-us.list-item-4-description":
      "Transformamos ideias em experiências memoráveis que impulsionam negócios e inspiram mercados.",
    // FAQ Section
    "faq.title": "Frequent",
    "faq.marked-title": "Questions",
    "faq.subtitle":
      "From strategy to execution, we create innovative solutions that elevate African brands, connecting creativity, technology, and real impact.",
    "faq.question": "What is Bold Labs?",
    "faq.answer":
      "Bold Labs is a creative innovation laboratory, agency, and consulting firm specializing in empowering African brands to stand out globally through creativity and innovation.",
    // Contact section
    "contact.title-text-1": "Innovate",
    "contact.title-text-2": "Inspire",
    "contact.title-text-3": "Create",
    "contact.subtitle":
      "Finding the right voice for your brand can be a challenge. Bold Labs transforms this process, connecting your company to creative and innovative strategies that make a difference.",
    "contact.button": "Contact Us",
    // Footer
    "footer.text": "Innovate. Inspire. Create",
    "footer.copy": "Copyright © {} Bold Labs. All rights reserved.",
  },
} as const;
