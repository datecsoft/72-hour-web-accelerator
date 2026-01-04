import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap, Users, Brain, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Block72Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const includes = [
    { icon: Check, text: t('72h.item1') },
    { icon: Check, text: t('72h.item2') },
    { icon: Check, text: t('72h.item3') },
    { icon: Check, text: t('72h.item4') },
  ];

  const timeline = [
    { day: '1', label: t('72h.day1') },
    { day: '2', label: t('72h.day2') },
    { day: '3', label: t('72h.day3') },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-3xl" />
            <div className="absolute inset-[2px] bg-card rounded-[calc(1.5rem-2px)]" />

            <div className="relative p-8 md:p-12 lg:p-16">
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10"
                >
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Fast Delivery</span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {t('72h.title')}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {t('72h.subtitle')}
                </p>
              </div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-4 md:gap-8 mb-12"
              >
                {timeline.map((item, index) => (
                  <div key={item.day} className="flex items-center gap-2 md:gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-lg md:text-2xl font-bold text-primary-foreground">
                          {item.day}
                        </span>
                      </div>
                      <span className="text-xs md:text-sm text-muted-foreground mt-2 text-center">
                        {item.label}
                      </span>
                    </div>
                    {index < timeline.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-primary/50" />
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* What's Included */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="p-6 rounded-2xl bg-muted/50"
                >
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    {t('72h.includes')}
                  </h3>
                  <ul className="space-y-3">
                    {includes.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <item.icon className="w-4 h-4 text-primary shrink-0" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* For Who */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="p-6 rounded-2xl bg-muted/50"
                >
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    {t('72h.forWho')}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('72h.forWho.desc')}
                  </p>
                </motion.div>

                {/* Why Possible */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="p-6 rounded-2xl bg-muted/50"
                >
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    {t('72h.why')}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('72h.why.desc')}
                  </p>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="text-center mt-10"
              >
                <Button size="lg" asChild className="group">
                  <a href="#contact">
                    {t('72h.cta')}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Block72Hours;
