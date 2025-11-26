import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProblemsSection from './components/ProblemsSection';
import ServicesSection from './components/ServicesSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { Suspense } from 'react';
import { useSEO, generateLocalBusinessSchema } from '../../utils/seo';

const HomePage = () => {
  // SEO Configuration
  useSEO({
    title: 'Warte Polimento São Paulo - Polimento Cristalização Limpeza Pisos',
    description: 'Warte Polimento: 24 anos de experiência em limpeza profissional, polimento, cristalização e restauração de pisos em São Paulo. Atendemos residências, condomínios e empresas. Orçamento grátis!',
    keywords: 'polimento de pisos São Paulo, cristalização de mármore, limpeza profissional de pisos, restauração de pisos, impermeabilização, Warte Polimento',
    canonical: '/',
    schema: generateLocalBusinessSchema()
  });

  const portfolioImages = [
    'https://static.readdy.ai/image/e0c5e77842c26e0cfc24a07e507d4548/2357227144cc30e3a107caf514e1a216.jpeg',
    'https://readdy.ai/api/search-image?query=Professional%20floor%20polishing%20service%20showing%20beautiful%20shiny%20polished%20granite%20floor%20with%20mirror-like%20reflection%20in%20modern%20residential%20space%2C%20clean%20simple%20background%2C%20high%20quality%20finish%2C%20professional%20lighting&width=1200&height=800&seq=carousel2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Before%20and%20after%20floor%20restoration%20showing%20transformed%20porcelain%20tile%20floor%20with%20perfect%20shine%20and%20clean%20grout%20lines%2C%20professional%20cleaning%20result%2C%20simple%20clean%20background%2C%20high%20quality%20finish&width=1200&height=800&seq=carousel3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Beautifully%20restored%20ceramic%20floor%20with%20renewed%20grout%20lines%2C%20perfect%20shine%20and%20professional%20finish%20in%20commercial%20space%2C%20clean%20simple%20background%2C%20professional%20lighting%2C%20high%20quality%20result&width=1200&height=800&seq=carousel4&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Stunning%20polished%20marble%20floor%20with%20mirror-like%20reflection%20in%20luxury%20residential%20interior%2C%20perfect%20shine%20and%20professional%20finish%2C%20clean%20simple%20background%2C%20high%20quality%20lighting&width=1200&height=800&seq=carousel5&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Professional%20floor%20restoration%20showing%20revitalized%20granitina%20floor%20with%20perfect%20shine%20and%20smooth%20surface%2C%20clean%20simple%20background%2C%20high%20quality%20finish%2C%20professional%20lighting&width=1200&height=800&seq=carousel6&orientation=landscape',
  ];

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProblemsSection />
          <ServicesSection />
          <BenefitsSection />
          <TestimonialsSection />
          
          {/* Carrossel de Imagens */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Nossos Trabalhos
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Confira alguns dos resultados incríveis que entregamos aos nossos clientes
                </p>
              </div>
              
              <div className="relative overflow-hidden">
                <div className="flex gap-6 animate-scroll">
                  {[...portfolioImages, ...portfolioImages].map((image, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 w-80 h-64 rounded-lg overflow-hidden shadow-lg"
                    >
                      <img 
                        src={image}
                        alt={`Trabalho realizado ${index + 1}`}
                        className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center mt-12">
                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-colors whitespace-nowrap"
                >
                  Ver Portfólio Completo
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </section>
          
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Suspense>
  );
};

export default HomePage;