import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSEO, generateServiceSchema, generateBreadcrumbSchema } from '../../../utils/seo';

const LimpezaProfissionalPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // SEO Configuration
  useSEO({
    title: 'Limpeza Profissional Pisos São Paulo - Revitalização Durabilidade',
    description: 'Limpeza profissional de pisos em São Paulo: revitaliza e aumenta a elegância dos ambientes, estimula durabilidade. Indicado para porcelanato, cerâmica, mármore, granito, granitina e todos os tipos de pisos. Produtos biodegradáveis e equipamentos especializados.',
    keywords: 'limpeza profissional pisos São Paulo, limpeza porcelanato, limpeza mármore, limpeza granito',
    canonical: '/servicos/limpeza-profissional',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateBreadcrumbSchema([
          { name: 'Início', url: '/' },
          { name: 'Serviços', url: '/servicos' },
          { name: 'Limpeza Profissional', url: '/servicos/limpeza-profissional' }
        ]),
        generateServiceSchema(
          'Limpeza Profissional de Pisos',
          'Revitaliza e aumenta a elegância dos seus ambientes, como estimula a sua durabilidade. É indicado para todos os tipos de pisos externos e internos.',
          '/servicos/limpeza-profissional'
        )
      ]
    }
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section 
          className="relative py-32 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://readdy.ai/api/search-image?query=Professional%20cleaning%20team%20using%20industrial%20floor%20cleaning%20machine%20in%20large%20commercial%20space%20with%20shiny%20clean%20floors%20modern%20equipment%20high%20quality%20photography&width=1200&height=600&seq=limpeza1&orientation=landscape)'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Limpeza Profissional</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Revitaliza e aumenta a elegância dos seus ambientes, estimulando a durabilidade dos pisos
            </p>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">O que é Limpeza Profissional?</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    A limpeza profissional de pisos é um serviço especializado que vai muito além da limpeza convencional. Utilizamos equipamentos industriais e produtos específicos para cada tipo de superfície.
                  </p>
                  <p>
                    Este serviço <strong>revitaliza e aumenta a elegância dos seus ambientes</strong>, como estimula a sua durabilidade. É indicado para todos os tipos de pisos externos e internos.
                  </p>
                  <p>
                    Nosso processo remove sujeiras profundas, manchas e resíduos que a limpeza comum não consegue eliminar, devolvendo a beleza original do seu piso.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Before%20and%20after%20comparison%20of%20professional%20floor%20cleaning%20showing%20dirty%20floor%20transformed%20to%20sparkling%20clean%20surface%20in%20residential%20home%20high%20quality%20photography&width=600&height=400&seq=limpeza2&orientation=landscape"
                  alt="Resultado da limpeza profissional"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Tipos de Pisos */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Indicado para Todos os Tipos de Pisos</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {['Porcelanato', 'Cerâmica', 'Mármore', 'Granito', 'Granitina', 'Marmorite', 'Concreto', 'Vinílico', 'Laminado', 'Paviflex', 'Marmoglass', 'Amadeirado'].map((tipo) => (
                  <div key={tipo} className="bg-emerald-50 p-4 rounded-lg text-center">
                    <i className="ri-checkbox-circle-fill text-emerald-600 text-2xl mb-2"></i>
                    <p className="font-semibold text-gray-800">{tipo}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefícios */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefícios da Limpeza Profissional</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: 'ri-sparkling-2-fill', title: 'Brilho Intenso', desc: 'Devolve o brilho original do piso' },
                  { icon: 'ri-shield-check-fill', title: 'Proteção', desc: 'Prepara o piso para impermeabilização' },
                  { icon: 'ri-time-fill', title: 'Durabilidade', desc: 'Aumenta a vida útil do piso' },
                  { icon: 'ri-leaf-fill', title: 'Produtos Biodegradáveis', desc: 'Respeito ao meio ambiente' },
                  { icon: 'ri-home-smile-fill', title: 'Ambiente Saudável', desc: 'Remove bactérias e fungos' },
                  { icon: 'ri-money-dollar-circle-fill', title: 'Economia', desc: 'Reduz custos de manutenção' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 flex items-center justify-center bg-emerald-600 rounded-full flex-shrink-0">
                      <i className={`${item.icon} text-xl text-white`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-emerald-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Faça Aqui Seu Orçamento</h2>
            <p className="text-emerald-100 mb-8">Solicite uma avaliação gratuita e transforme seu ambiente</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511985641271"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-fill text-2xl"></i>
                WhatsApp
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-all whitespace-nowrap cursor-pointer"
              >
                <i className="ri-arrow-left-line"></i>
                Voltar ao Início
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LimpezaProfissionalPage;
