import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.memberships': 'Membresías',
    'nav.methodology': 'Metodología',
    'nav.contact': 'Contacto',
    'nav.schedule': 'Agendar Sesión',

    // Hero
    'hero.badge': 'Potenciado por AI',
    'hero.title': 'Tu página web en',
    'hero.title.highlight': '72 horas',
    'hero.subtitle': 'Diseño, desarrollo y estrategia digital con tecnología de punta. Transformamos ideas en experiencias digitales que generan resultados.',
    'hero.cta.primary': 'Comienza Ahora',
    'hero.cta.secondary': 'Ver Portafolio',

    // 72 Hours Block
    '72h.title': 'Tu Web Lista en 72 Horas',
    '72h.subtitle': 'No es magia, es metodología + tecnología + experiencia',
    '72h.includes': 'Qué incluye',
    '72h.item1': 'Diseño UI/UX personalizado',
    '72h.item2': 'Desarrollo responsive',
    '72h.item3': 'SEO básico configurado',
    '72h.item4': 'Despliegue y hosting incluido',
    '72h.forWho': 'Para quién',
    '72h.forWho.desc': 'Startups, lanzamientos, MVPs, emprendedores que necesitan presencia digital rápida y profesional.',
    '72h.why': 'Por qué es posible',
    '72h.why.desc': 'Combinamos IA generativa, sistemas probados y un equipo experto para entregar calidad en tiempo récord.',
    '72h.day1': 'Estrategia + Diseño',
    '72h.day2': 'Desarrollo',
    '72h.day3': 'Despliegue + Entrega',
    '72h.cta': 'Agenda tu sesión estratégica',

    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones digitales completas para hacer crecer tu negocio',
    'services.web.title': 'Desarrollo Web',
    'services.web.desc': 'Sitios web rápidos, escalables y optimizados para conversión. Tecnología moderna para resultados modernos.',
    'services.branding.title': 'Branding & Identidad',
    'services.branding.desc': 'Construimos marcas memorables que conectan con tu audiencia y se diferencian en el mercado.',
    'services.content.title': 'Creación de Contenido',
    'services.content.desc': 'Narrativas que enganchan, educan y convierten. Contenido estratégico para cada etapa del funnel.',
    'services.aiContent.title': 'Contenido con IA',
    'services.aiContent.desc': 'Producción escalable sin sacrificar calidad. Automatización inteligente para contenido consistente.',
    'services.aiMarketing.title': 'Marketing con IA',
    'services.aiMarketing.desc': 'Optimización predictiva, segmentación avanzada y automatización que multiplica resultados.',
    'services.strategy.title': 'Estrategia Digital',
    'services.strategy.desc': 'Consultoría experta para definir el camino correcto. Diagnóstico, roadmap y acompañamiento.',

    // Portfolio
    'portfolio.title': 'Portafolio',
    'portfolio.subtitle': 'Proyectos que hablan por sí mismos',
    'portfolio.view': 'Ver proyecto',
    'portfolio.falcon.desc': 'Sitio corporativo para empresa de mantenimiento industrial en USA',
    'portfolio.manpredict.desc': 'Plataforma SaaS de gestión de activos y mantenimiento predictivo',
    'portfolio.datecsoft.desc': 'Soluciones de inteligencia operacional y transformación digital',
    'portfolio.starkmedia.desc': 'Agencia de producción audiovisual y marketing digital',
    'portfolio.felicaj.desc': 'Portal oficial de la Feria del Libro de Cajamarca',
    'portfolio.pastoral.desc': 'Sitio web para comunidad del Perro Pastor Alemán en Cajamarca',

    // Memberships
    'memberships.title': 'Planes de Crecimiento',
    'memberships.subtitle': 'Planes diseñados para cada etapa de tu negocio',
    'memberships.launch.title': 'Launch',
    'memberships.launch.for': 'Para Startups',
    'memberships.launch.desc': 'Tu presencia digital profesional desde cero',
    'memberships.launch.item1': 'Sitio web profesional',
    'memberships.launch.item2': 'Branding básico',
    'memberships.launch.item3': 'SEO inicial',
    'memberships.launch.item4': 'Soporte por email',
    'memberships.scale.title': 'Scale',
    'memberships.scale.for': 'Para empresas en crecimiento',
    'memberships.scale.desc': 'Sistemas para escalar tu operación digital',
    'memberships.scale.item1': 'Todo de Launch',
    'memberships.scale.item2': 'CRM integrado',
    'memberships.scale.item3': 'Estrategia de contenido',
    'memberships.scale.item4': 'Optimización de conversión',
    'memberships.scale.item5': 'Reportes mensuales',
    'memberships.accelerate.title': 'Accelerate',
    'memberships.accelerate.for': 'Para empresas consolidadas',
    'memberships.accelerate.desc': 'Máximo crecimiento con IA y automatización',
    'memberships.accelerate.item1': 'Todo de Scale',
    'memberships.accelerate.item2': 'Marketing con IA',
    'memberships.accelerate.item3': 'Campañas de Ads',
    'memberships.accelerate.item4': 'Automatización avanzada',
    'memberships.accelerate.item5': 'Consultoría estratégica',
    'memberships.recommended': 'Recomendado',
    'memberships.cta': 'Comenzar',

    // Process
    'process.title': 'Cómo Trabajamos',
    'process.subtitle': 'Metodología probada para resultados consistentes',
    'process.step1.title': 'Estrategia',
    'process.step1.desc': 'Diagnóstico profundo y definición de objetivos claros',
    'process.step2.title': 'Diseño del Sistema',
    'process.step2.desc': 'Arquitectura digital adaptada a tus necesidades',
    'process.step3.title': 'Ejecución con IA',
    'process.step3.desc': 'Implementación acelerada con tecnología de punta',
    'process.step4.title': 'Optimización',
    'process.step4.desc': 'Mejora continua basada en datos reales',

    // Why Us
    'why.title': 'Por Qué DatecSoft Marketing',
    'why.subtitle': 'Lo que nos hace diferentes',
    'why.tech.title': 'ADN Técnico',
    'why.tech.desc': 'Equipo con background en ingeniería y desarrollo de software',
    'why.ai.title': 'Mentalidad AI-First',
    'why.ai.desc': 'Integramos IA en cada proceso para maximizar eficiencia',
    'why.strategic.title': 'Pensamiento Estratégico',
    'why.strategic.desc': 'No solo ejecutamos, diseñamos sistemas de crecimiento',
    'why.modern.title': 'Ejecución Moderna',
    'why.modern.desc': 'Metodologías ágiles y herramientas de última generación',
    'why.results.title': 'Resultados Reales',
    'why.results.desc': 'Métricas claras y ROI demostrable en cada proyecto',

    // Contact
    'contact.title': 'Construyamos tu sistema de crecimiento',
    'contact.subtitle': 'No solo marketing, un ecosistema digital que genera resultados',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.company': 'Empresa',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.success': '¡Mensaje enviado! Te contactaremos pronto.',

    // Footer
    'footer.tagline': 'Transformando negocios con tecnología y estrategia digital',
    'footer.rights': 'Todos los derechos reservados',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.memberships': 'Memberships',
    'nav.methodology': 'Methodology',
    'nav.contact': 'Contact',
    'nav.schedule': 'Schedule Session',

    // Hero
    'hero.badge': 'AI-Powered Growth',
    'hero.title': 'Your website in',
    'hero.title.highlight': '72 hours',
    'hero.subtitle': 'Design, development, and digital strategy with cutting-edge technology. We transform ideas into digital experiences that deliver results.',
    'hero.cta.primary': 'Get Started',
    'hero.cta.secondary': 'View Portfolio',

    // 72 Hours Block
    '72h.title': 'Your Website Ready in 72 Hours',
    '72h.subtitle': "It's not magic, it's methodology + technology + expertise",
    '72h.includes': "What's included",
    '72h.item1': 'Custom UI/UX design',
    '72h.item2': 'Responsive development',
    '72h.item3': 'Basic SEO configured',
    '72h.item4': 'Deploy and hosting included',
    '72h.forWho': 'Who is it for',
    '72h.forWho.desc': 'Startups, launches, MVPs, entrepreneurs who need fast and professional digital presence.',
    '72h.why': 'Why is it possible',
    '72h.why.desc': 'We combine generative AI, proven systems, and an expert team to deliver quality in record time.',
    '72h.day1': 'Strategy + Design',
    '72h.day2': 'Development',
    '72h.day3': 'Deploy + Delivery',
    '72h.cta': 'Schedule your strategic session',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Complete digital solutions to grow your business',
    'services.web.title': 'Web Development',
    'services.web.desc': 'Fast, scalable websites optimized for conversion. Modern technology for modern results.',
    'services.branding.title': 'Branding & Identity',
    'services.branding.desc': 'We build memorable brands that connect with your audience and stand out in the market.',
    'services.content.title': 'Content Creation',
    'services.content.desc': 'Narratives that engage, educate, and convert. Strategic content for every funnel stage.',
    'services.aiContent.title': 'AI Content',
    'services.aiContent.desc': 'Scalable production without sacrificing quality. Intelligent automation for consistent content.',
    'services.aiMarketing.title': 'AI Marketing',
    'services.aiMarketing.desc': 'Predictive optimization, advanced segmentation, and automation that multiplies results.',
    'services.strategy.title': 'Digital Strategy',
    'services.strategy.desc': 'Expert consulting to define the right path. Diagnosis, roadmap, and guidance.',

    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Projects that speak for themselves',
    'portfolio.view': 'View project',
    'portfolio.falcon.desc': 'Corporate website for industrial maintenance company in USA',
    'portfolio.manpredict.desc': 'SaaS platform for asset management and predictive maintenance',
    'portfolio.datecsoft.desc': 'Operational intelligence and digital transformation solutions',
    'portfolio.starkmedia.desc': 'Audiovisual production and digital marketing agency',
    'portfolio.felicaj.desc': 'Official portal for the Cajamarca Book Fair',
    'portfolio.pastoral.desc': 'Website for German Shepherd Dogs Community in Cajamarca',

    // Memberships
    'memberships.title': 'Partner Grow Memberships',
    'memberships.subtitle': 'Plans designed for every stage of your business',
    'memberships.launch.title': 'Launch',
    'memberships.launch.for': 'For Startups',
    'memberships.launch.desc': 'Your professional digital presence from scratch',
    'memberships.launch.item1': 'Professional website',
    'memberships.launch.item2': 'Basic branding',
    'memberships.launch.item3': 'Initial SEO',
    'memberships.launch.item4': 'Email support',
    'memberships.scale.title': 'Scale',
    'memberships.scale.for': 'For growing companies',
    'memberships.scale.desc': 'Systems to scale your digital operation',
    'memberships.scale.item1': 'Everything in Launch',
    'memberships.scale.item2': 'Integrated CRM',
    'memberships.scale.item3': 'Content strategy',
    'memberships.scale.item4': 'Conversion optimization',
    'memberships.scale.item5': 'Monthly reports',
    'memberships.accelerate.title': 'Accelerate',
    'memberships.accelerate.for': 'For established companies',
    'memberships.accelerate.desc': 'Maximum growth with AI and automation',
    'memberships.accelerate.item1': 'Everything in Scale',
    'memberships.accelerate.item2': 'AI Marketing',
    'memberships.accelerate.item3': 'Ad campaigns',
    'memberships.accelerate.item4': 'Advanced automation',
    'memberships.accelerate.item5': 'Strategic consulting',
    'memberships.recommended': 'Recommended',
    'memberships.cta': 'Get Started',

    // Process
    'process.title': 'How We Work',
    'process.subtitle': 'Proven methodology for consistent results',
    'process.step1.title': 'Strategy',
    'process.step1.desc': 'Deep diagnosis and clear goal definition',
    'process.step2.title': 'System Design',
    'process.step2.desc': 'Digital architecture tailored to your needs',
    'process.step3.title': 'AI Execution',
    'process.step3.desc': 'Accelerated implementation with cutting-edge technology',
    'process.step4.title': 'Optimization',
    'process.step4.desc': 'Continuous improvement based on real data',

    // Why Us
    'why.title': 'Why DatecSoft Marketing',
    'why.subtitle': 'What makes us different',
    'why.tech.title': 'Technical DNA',
    'why.tech.desc': 'Team with engineering and software development background',
    'why.ai.title': 'AI-First Mindset',
    'why.ai.desc': 'We integrate AI into every process to maximize efficiency',
    'why.strategic.title': 'Strategic Thinking',
    'why.strategic.desc': "We don't just execute, we design growth systems",
    'why.modern.title': 'Modern Execution',
    'why.modern.desc': 'Agile methodologies and cutting-edge tools',
    'why.results.title': 'Real Results',
    'why.results.desc': 'Clear metrics and demonstrable ROI in every project',

    // Contact
    'contact.title': "Let's build your growth system",
    'contact.subtitle': 'Not just marketing, a digital ecosystem that delivers results',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.company': 'Company',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent! We will contact you soon.',

    // Footer
    'footer.tagline': 'Transforming businesses with technology and digital strategy',
    'footer.rights': 'All rights reserved',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
