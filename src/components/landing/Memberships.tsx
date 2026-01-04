import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Rocket, TrendingUp, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Memberships = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const plans = [
    {
      icon: Rocket,
      title: t('memberships.launch.title'),
      subtitle: t('memberships.launch.for'),
      description: t('memberships.launch.desc'),
      features: [
        t('memberships.launch.item1'),
        t('memberships.launch.item2'),
        t('memberships.launch.item3'),
        t('memberships.launch.item4'),
      ],
      recommended: false,
    },
    {
      icon: TrendingUp,
      title: t('memberships.scale.title'),
      subtitle: t('memberships.scale.for'),
      description: t('memberships.scale.desc'),
      features: [
        t('memberships.scale.item1'),
        t('memberships.scale.item2'),
        t('memberships.scale.item3'),
        t('memberships.scale.item4'),
        t('memberships.scale.item5'),
      ],
      recommended: true,
    },
    {
      icon: Zap,
      title: t('memberships.accelerate.title'),
      subtitle: t('memberships.accelerate.for'),
      description: t('memberships.accelerate.desc'),
      features: [
        t('memberships.accelerate.item1'),
        t('memberships.accelerate.item2'),
        t('memberships.accelerate.item3'),
        t('memberships.accelerate.item4'),
        t('memberships.accelerate.item5'),
      ],
      recommended: false,
    },
  ];

  return (
    <section id="memberships" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('memberships.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('memberships.subtitle')}
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover-lift ${
                plan.recommended
                  ? 'bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 ring-offset-background'
                  : 'bg-card border border-border hover:border-primary/50'
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-card text-primary text-xs font-semibold rounded-full">
                  {t('memberships.recommended')}
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  plan.recommended ? 'bg-primary-foreground/20' : 'bg-primary/10'
                }`}
              >
                <plan.icon
                  className={`w-6 h-6 ${plan.recommended ? 'text-primary-foreground' : 'text-primary'}`}
                />
              </div>

              {/* Header */}
              <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
              <p
                className={`text-sm mb-4 ${
                  plan.recommended ? 'text-primary-foreground/80' : 'text-muted-foreground'
                }`}
              >
                {plan.subtitle}
              </p>
              <p
                className={`text-sm mb-6 ${
                  plan.recommended ? 'text-primary-foreground/90' : 'text-muted-foreground'
                }`}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        plan.recommended ? 'text-primary-foreground' : 'text-primary'
                      }`}
                    />
                    <span className={plan.recommended ? 'text-primary-foreground/90' : ''}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                variant={plan.recommended ? 'secondary' : 'default'}
                className="w-full"
              >
                <a href="#contact">{t('memberships.cta')}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;
