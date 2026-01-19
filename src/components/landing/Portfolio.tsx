import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import pastorImg from '@/assets/hero-bg-pastor.jpg';

const Portfolio = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      name: 'Falcon Maintenance',
      category: 'Corporate Website',
      description: t('portfolio.falcon.desc'),
      url: 'https://www.falconmaintenance.net/',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    },
    {
      name: 'ManPredict',
      category: 'SaaS Platform',
      description: t('portfolio.manpredict.desc'),
      url: 'https://manpredict.com/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    },
    {
      name: 'DatecSoft',
      category: 'Technology',
      description: t('portfolio.datecsoft.desc'),
      url: 'https://datecsoft.com/',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    },
    {
      name: 'StarkMedia',
      category: 'Digital Agency',
      description: t('portfolio.starkmedia.desc'),
      url: 'https://starkmedia.pe/',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop',
    },
    {
      name: 'FELICAJ',
      category: 'Event Portal',
      description: t('portfolio.felicaj.desc'),
      url: 'https://felicaj.pe/',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
    },
    {
      name: 'Pastor Alemán Cajamarca',
      category: 'Community',
      description: t('portfolio.pastoral.desc'),
      url: 'https://pastoralemancaxamarca.com/',
      image: pastorImg,
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Decoration */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/10 rounded-2xl transition-all duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
