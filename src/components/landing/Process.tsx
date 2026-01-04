import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Layout, Cpu, LineChart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Process = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: Target,
      number: '01',
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
    },
    {
      icon: Layout,
      number: '02',
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
    },
    {
      icon: Cpu,
      number: '03',
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
    },
    {
      icon: LineChart,
      number: '04',
      title: t('process.step4.title'),
      description: t('process.step4.desc'),
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('process.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block" />

            {/* Steps */}
            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-6 md:gap-8"
                >
                  {/* Icon */}
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    {/* Number Badge */}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
