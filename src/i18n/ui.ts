// Central UI string dictionary for the site.
// English is the default locale (served at /), Spanish lives under /es/.

export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
  en: {
    // Meta
    "meta.defaultTitle": "Andres Soler | Web Developer",
    "meta.defaultDescription":
      "Creative Web Developer & Marketing Specialist based in Bogotá, Colombia. Explore my portfolio and skills.",
    "meta.home.title": "Andres Soler | Web Developer",
    "meta.projects.title": "Projects | Andres Soler",
    "meta.about.title": "About me | Andres Soler",
    "meta.contact.title": "Contact | Andres Soler",

    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.socials": "Socials",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "nav.switchLanguage": "Cambiar a español",

    // Hero / Presentation
    "hero.line1": "Hello, my",
    "hero.line2": "name is",
    "hero.subtitle1": "Creative Web Developer",
    "hero.subtitle2": "based in Bogotá, Colombia.",
    "hero.badge.developer": "Developer",
    "hero.badge.designer": "Designer",
    "hero.badge.polyglot": "Polyglot",
    "hero.resume": "Resume",
    "hero.cvFile": "/HvTmpEnglish.pdf",

    // Introduction cards
    "intro.fullstack.title": "Full Stack",
    "intro.fullstack.text":
      "I am proficient in both front-end and back-end technologies.",
    "intro.selftaught.title": "Self-taught",
    "intro.selftaught.text":
      "During college, I taught myself programming. I find satisfaction in designing well-structured information.",
    "intro.languages.title": "Language proficiency",
    "intro.languages.text":
      "I am currently fluent in Spanish, English, and German, and I am eager to learn more languages.",
    "intro.softskills.title": "Soft-skills",
    "intro.softskills.text":
      "I bring empathy and a team-focused approach, and I thrive in new and challenging environments.",

    // Skills
    "skills.title": "What I work with",

    // Projects
    "projects.latest": "Latest projects",
    "projects.viewAll": "View all my projects here",
    "projects.technologiesUsed": "Technologies Used:",
    "projects.title": "Projects",
    "projects.aria": "My projects",
    "projects.technologies": "Technologies:",

    // Experience
    "experience.title": "Work Experience",
    "experience.present": "Present",
    "experience.location.Remote": "Remote",
    "experience.location.Onsite": "Onsite",
    "experience.location.Hybrid": "Hybrid",

    // About page
    "about.title": "About me",
    "about.intro":
      "Thanks for stopping by. Read below to learn more about myself and my background.",
    "about.background": "Background",
    "about.background.text":
      "I am a 28-year-old software developer currently residing in Bogotá, Colombia. I hold a Bachelor's degree in Philology with a focus on German, graduated in 2021. Additionally, I possess several programming certifications. My expertise lies in German language and cultural knowledge, complemented by a strong background in design, marketing and programming, acquired through my recent professional experiences.",
    "about.education": "Education",
    "about.education.text": "Universidad Nacional de Colombia",
    "about.skills": "Skills",
    "about.skills.text":
      "I possess programming skills in both front-end and back-end languages. Furthermore, I am proficient in design applications for creating websites and web applications. My soft skills include teamwork, self-motivated learning, empathy, versatility, and assertive communication.",

    // Contact page
    "contact.title": "Contact",
    "contact.description":
      "Get in Touch with me. I'm always open to discussing new projects, collaboration opportunities, or simply sharing insights. Whether you have a challenging idea or just want to say hello, I'd love to hear from you. You can connect with me through the channels below:",
    "contact.continue":
      "Alternatively, please feel free to use the contact form provided below. I look forward to connecting with you!",
    "contact.honeypot": "Don't fill this out if you're human:",
    "contact.name": "Name",
    "contact.name.placeholder": "Your name",
    "contact.email": "Email",
    "contact.email.placeholder": "you@email.com",
    "contact.message": "Message",
    "contact.message.placeholder": "Tell me about your project...",
    "contact.submit": "Submit",
    "contact.success": "Thank you! Your message has been sent.",
    "contact.error": "Error: Could not send message. Please try again.",
    "contact.network":
      "A network error occurred. Please check your connection.",

    // Footer
    "footer.copyright": "Created in Bogota, Colombia",
    "footer.built1": "Built with love using",
    "footer.built2": "Look at some of my projects on",
  },
  es: {
    // Meta
    "meta.defaultTitle": "Andres Soler | Desarrollador Web",
    "meta.defaultDescription":
      "Desarrollador web creativo y especialista en marketing con base en Bogotá, Colombia. Explora mi portafolio y mis habilidades.",
    "meta.home.title": "Andres Soler | Desarrollador Web",
    "meta.projects.title": "Proyectos | Andres Soler",
    "meta.about.title": "Sobre mí | Andres Soler",
    "meta.contact.title": "Contacto | Andres Soler",

    // Navigation
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.socials": "Redes",
    "nav.openMenu": "Abrir menú",
    "nav.closeMenu": "Cerrar menú",
    "nav.switchLanguage": "Switch to English",

    // Hero / Presentation
    "hero.line1": "Hola, mi",
    "hero.line2": "nombre es",
    "hero.subtitle1": "Desarrollador web creativo",
    "hero.subtitle2": "residente en Bogotá, Colombia.",
    "hero.badge.developer": "Desarrollador",
    "hero.badge.designer": "Diseñador",
    "hero.badge.polyglot": "Políglota",
    "hero.resume": "Hoja de vida",
    "hero.cvFile": "/HvTmpSpanish.pdf",

    // Introduction cards
    "intro.fullstack.title": "Full Stack",
    "intro.fullstack.text":
      "Domino tecnologías tanto de front-end como de back-end.",
    "intro.selftaught.title": "Autodidacta",
    "intro.selftaught.text":
      "Durante la universidad aprendí programación por mi cuenta. Disfruto diseñar información bien estructurada.",
    "intro.languages.title": "Dominio de idiomas",
    "intro.languages.text":
      "Hablo con fluidez español, inglés y alemán, y tengo muchas ganas de aprender más idiomas.",
    "intro.softskills.title": "Habilidades blandas",
    "intro.softskills.text":
      "Aporto empatía y un enfoque de trabajo en equipo, y prospero en entornos nuevos y desafiantes.",

    // Skills
    "skills.title": "Tecnologías que uso",

    // Projects
    "projects.latest": "Proyectos recientes",
    "projects.viewAll": "Mira todos mis proyectos aquí",
    "projects.technologiesUsed": "Tecnologías usadas:",
    "projects.title": "Proyectos",
    "projects.aria": "Mis proyectos",
    "projects.technologies": "Tecnologías:",

    // Experience
    "experience.title": "Experiencia laboral",
    "experience.present": "Actualidad",
    "experience.location.Remote": "Remoto",
    "experience.location.Onsite": "Presencial",
    "experience.location.Hybrid": "Híbrido",

    // About page
    "about.title": "Sobre mí",
    "about.intro":
      "Gracias por tu visita. Sigue leyendo para conocer más sobre mí y mi trayectoria.",
    "about.background": "Trayectoria",
    "about.background.text":
      "Soy un desarrollador de software de 28 años radicado en Bogotá, Colombia. Soy Filólogo con énfasis en alemán, graduado en 2021, y cuento con varias certificaciones en programación. Mi experiencia combina el dominio del idioma y la cultura alemana con una sólida base en diseño, marketing y programación, adquirida en mis experiencias profesionales recientes.",
    "about.education": "Educación",
    "about.education.text": "Universidad Nacional de Colombia",
    "about.skills": "Habilidades",
    "about.skills.text":
      "Tengo habilidades de programación tanto en lenguajes de front-end como de back-end. Además, manejo aplicaciones de diseño para crear sitios y aplicaciones web. Entre mis habilidades blandas están el trabajo en equipo, el aprendizaje autónomo, la empatía, la versatilidad y la comunicación asertiva.",

    // Contact page
    "contact.title": "Contacto",
    "contact.description":
      "Ponte en contacto conmigo. Siempre estoy abierto a hablar de nuevos proyectos, oportunidades de colaboración o simplemente compartir ideas. Si tienes una idea desafiante o solo quieres saludar, me encantaría saber de ti. Puedes conectar conmigo a través de estos canales:",
    "contact.continue":
      "También puedes usar el formulario de contacto a continuación. ¡Espero saber de ti pronto!",
    "contact.honeypot": "No llenes este campo si eres humano:",
    "contact.name": "Nombre",
    "contact.name.placeholder": "Tu nombre",
    "contact.email": "Correo electrónico",
    "contact.email.placeholder": "tu@correo.com",
    "contact.message": "Mensaje",
    "contact.message.placeholder": "Cuéntame sobre tu proyecto...",
    "contact.submit": "Enviar",
    "contact.success": "¡Gracias! Tu mensaje ha sido enviado.",
    "contact.error": "Error: No se pudo enviar el mensaje. Inténtalo de nuevo.",
    "contact.network": "Ocurrió un error de red. Verifica tu conexión.",

    // Footer
    "footer.copyright": "Creado en Bogotá, Colombia",
    "footer.built1": "Hecho con amor usando",
    "footer.built2": "Mira algunos de mis proyectos en",
  },
} as const;
