import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wrench, Brain, Target, Zap, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyUs = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const differentiators = [
    {
      icon: Wrench,
      title: t('why.tech.title'),
      description: t('why.tech.desc'),
    },
    {
      icon: Brain,
      title: t('why.ai.title'),
      description: t('why.ai.desc'),
    },
    {
      icon: Target,
      title: t('why.strategic.title'),
      description: t('why.strategic.desc'),
    },
    {
      icon: Zap,
      title: t('why.modern.title'),
      description: t('why.modern.desc'),
    },
    {
      icon: TrendingUp,
      title: t('why.results.title'),
      description: t('why.results.desc'),
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('why.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('why.subtitle')}
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
