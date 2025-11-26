import { Suspense } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { useSEO, generateBreadcrumbSchema } from '../../utils/seo';

const PortfolioPage = () => {
  // SEO Configuration
  useSEO({
    title: 'Portfólio São Paulo - Trabalhos Realizados Polimento Limpeza Pisos',
    description: 'Confira nosso portfólio de trabalhos realizados em São Paulo: polimento de granito e mármore, cristalização, limpeza profissional, troca de rejunte e impermeabilização. Mais de 24 anos transformando pisos com qualidade e excelência.',
    keywords: 'portfólio polimento São Paulo, trabalhos realizados, antes e depois pisos, galeria serviços',
    canonical: '/portfolio',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateBreadcrumbSchema([
          { name: 'Início', url: '/' },
          { name: 'Portfólio', url: '/portfolio' }
        ]),
        {
          '@type': 'CollectionPage',
          name: 'Portfólio - Warte Polimento',
          description: 'Galeria de trabalhos realizados pela Warte Polimento em São Paulo',
          url: `${import.meta.env.VITE_SITE_URL || 'https://wartepolimento.com.br'}/portfolio`
        }
      ]
    }
  });

  const portfolioImages = [
    {
      id: 1,
      url: 'https://static.readdy.ai/image/e0c5e77842c26e0cfc24a07e507d4548/2357227144cc30e3a107caf514e1a216.jpeg',
      title: 'Polimento de Granito',
      description: 'Resultado impecável em piso de granito'
    },
    {
      id: 2,
      url: 'https://readdy.ai/api/search-image?query=Professional%20floor%20polishing%20service%20showing%20beautiful%20shiny%20polished%20granite%20floor%20with%20mirror-like%20reflection%20in%20modern%20residential%20space%2C%20clean%20simple%20background%2C%20high%20quality%20finish%2C%20professional%20lighting&width=800&height=600&seq=portfolio2&orientation=landscape',
      title: 'Cristalização de Mármore',
      description: 'Brilho e proteção duradoura'
    },
    {
      id: 3,
      url: 'https://readdy.ai/api/search-image?query=Before%20and%20after%20floor%20restoration%20showing%20transformed%20porcelain%20tile%20floor%20with%20perfect%20shine%20and%20clean%20grout%20lines%2C%20professional%20cleaning%20result%2C%20simple%20clean%20background%2C%20high%20quality%20finish&width=800&height=600&seq=portfolio3&orientation=landscape',
      title: 'Limpeza Profissional',
      description: 'Revitalização completa de porcelanato'
    },
    {
      id: 4,
      url: 'https://readdy.ai/api/search-image?query=Beautifully%20restored%20ceramic%20floor%20with%20renewed%20grout%20lines%2C%20perfect%20shine%20and%20professional%20finish%20in%20commercial%20space%2C%20clean%20simple%20background%2C%20professional%20lighting%2C%20high%20quality%20result&width=800&height=600&seq=portfolio4&orientation=landscape',
      title: 'Troca de Rejunte',
      description: 'Renovação completa de cerâmica'
    },
    {
      id: 5,
      url: 'https://readdy.ai/api/search-image?query=Professional%20floor%20waterproofing%20service%20showing%20protected%20shiny%20floor%20surface%20with%20water%20beading%20effect%2C%20clean%20simple%20background%2C%20high%20quality%20finish%2C%20professional%20result&width=800&height=600&seq=portfolio5&orientation=landscape',
      title: 'Impermeabilização',
      description: 'Proteção e durabilidade garantida'
    },
    {
      id: 6,
      url: 'https://readdy.ai/api/search-image?query=Stunning%20polished%20marble%20floor%20with%20mirror-like%20reflection%20in%20luxury%20residential%20interior%2C%20perfect%20shine%20and%20professional%20finish%2C%20clean%20simple%20background%2C%20high%20quality%20lighting&width=800&height=600&seq=portfolio6&orientation=landscape',
      title: 'Polimento de Mármore',
      description: 'Elegância e sofisticação'
    },
    {
      id: 7,
      url: 'https://readdy.ai/api/search-image?query=Professional%20floor%20restoration%20showing%20revitalized%20granitina%20floor%20with%20perfect%20shine%20and%20smooth%20surface%2C%20clean%20simple%20background%2C%20high%20quality%20finish%2C%20professional%20lighting&width=800&height=600&seq=portfolio7&orientation=landscape',
      title: 'Revitalização de Granitina',
      description: 'Como novo novamente'
    },
    {
      id: 8,
      url: 'https://readdy.ai/api/search-image?query=Beautiful%20polished%20porcelain%20floor%20with%20perfect%20shine%20and%20clean%20surface%20in%20modern%20commercial%20space%2C%20professional%20finish%2C%20clean%20simple%20background%2C%20high%20quality%20result&width=800&height=600&seq=portfolio8&orientation=landscape',
      title: 'Polimento de Porcelanato',
      description: 'Acabamento profissional'
    },
    {
      id: 9,
      url: 'https://readdy.ai/api/search-image?query=Professional%20floor%20cleaning%20service%20showing%20spotless%20shiny%20floor%20with%20perfect%20reflection%20in%20residential%20space%2C%20clean%20simple%20background%2C%20high%20quality%20finish%2C%20professional%20result&width=800&height=600&seq=portfolio9&orientation=landscape',
      title: 'Limpeza Pós-Obra',
      description: 'Resultado impecável'
    }
  ];

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nosso Portfólio
              </h1>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                Confira alguns dos nossos trabalhos realizados com excelência e dedicação. 
                Mais de 24 anos transformando pisos em São Paulo.
              </p>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioImages.map((image) => (
                  <div 
                    key={image.id}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-600">
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-emerald-600 text-white py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quer um resultado como esses?
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Entre em contato conosco e solicite um orçamento gratuito!
              </p>
              <a
                href="https://wa.me/5511985641271?text=Olá! Vi o portfólio e gostaria de solicitar um orçamento."
                className="inline-flex items-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors whitespace-nowrap"
              >
                <i className="ri-whatsapp-fill text-2xl"></i>
                Solicitar Orçamento Grátis
              </a>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Suspense>
  );
};

export default PortfolioPage;
