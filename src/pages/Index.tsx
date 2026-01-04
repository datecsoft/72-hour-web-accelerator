import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Block72Hours from '@/components/landing/Block72Hours';
import Services from '@/components/landing/Services';
import Portfolio from '@/components/landing/Portfolio';
import Memberships from '@/components/landing/Memberships';
import Process from '@/components/landing/Process';
import WhyUs from '@/components/landing/WhyUs';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Block72Hours />
          <Services />
          <Portfolio />
          <Memberships />
          <Process />
          <WhyUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
