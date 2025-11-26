import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSEO, generateServiceSchema, generateBreadcrumbSchema } from '../../../utils/seo';

const PolimentoCristalizacaoPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // SEO Configuration
  useSEO({
    title: 'Polimento Cristalização Pisos São Paulo - Brilho Proteção Durabilidade',
    description: 'Polimento e cristalização de pisos em São Paulo: pedras, porcelanato, cerâmica, concreto, granitina e marmorite. Produtos biodegradáveis e máquinas especializadas. Brilho intenso e duradouro com proteção profissional.',
    keywords: 'polimento pisos São Paulo, cristalização mármore, vitrificação pisos, polimento granito',
    canonical: '/servicos/polimento-cristalizacao',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateBreadcrumbSchema([
          { name: 'Início', url: '/' },
          { name: 'Serviços', url: '/servicos' },
          { name: 'Polimento e Cristalização', url: '/servicos/polimento-cristalizacao' }
        ]),
        generateServiceSchema(
          'Polimento e Cristalização de Pisos',
          'Prestamos serviços de polimento de pedras, porcelanato, cerâmica, concreto, Granitina e Marmorite. Utilizamos produtos biodegradáveis e máquinas especializadas.',
          '/servicos/polimento-cristalizacao'
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
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://readdy.ai/api/search-image?query=Professional%20floor%20polishing%20machine%20creating%20mirror-like%20shine%20on%20marble%20floor%20in%20luxury%20interior%20space%20high%20quality%20photography&width=1200&height=600&seq=polimento1&orientation=landscape)'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Polimento e Cristalização</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Seu piso está sem brilho? Temos a solução!
            </p>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Polimento Profissional</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Prestamos serviços de polimento de <strong>pedras, porcelanato, cerâmica, concreto, Granitina e Marmorite</strong>. Utilizamos produtos biodegradáveis e máquinas especializadas.
                  </p>
                  <p>
                    No processo de polimento utilizamos abrasivos e máquinas profissionais que trabalham a base de água, garantindo um resultado impecável e sustentável.
                  </p>
                  <p>
                    O polimento remove riscos, manchas e desgastes, devolvendo o brilho natural e a beleza original do seu piso.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Stunning%20polished%20marble%20floor%20with%20mirror-like%20reflection%20in%20elegant%20modern%20interior%20showing%20professional%20polishing%20results%20high%20quality%20photography&width=600&height=400&seq=polimento2&orientation=landscape"
                  alt="Piso polido e cristalizado"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Cristalização */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <img
                  src="https://readdy.ai/api/search-image?query=Crystal%20clear%20vitrified%20floor%20surface%20with%20brilliant%20shine%20and%20glass-like%20finish%20in%20commercial%20building%20lobby%20high%20quality%20photography&width=600&height=400&seq=cristalizacao1&orientation=landscape"
                  alt="Piso cristalizado"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cristalização e Vitrificação</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    É possível recuperar e manter o brilho dos pisos em geral utilizando o método de <strong>cristalização e vitrificação</strong>.
                  </p>
                  <p>
                    O processo é uma ação mecânica e química que aumenta a durabilidade e o brilho do piso, criando uma camada protetora que facilita a limpeza diária.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="font-semibold text-gray-800">
                      <i className="ri-lightbulb-flash-fill text-yellow-500 mr-2"></i>
                      Recomendação: Faça a cristalização com a impermeabilização no tempo certo indicado para evitar manchas e manter a estética.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Processo */}
            <div className="bg-emerald-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nosso Processo</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: '1', title: 'Avaliação', desc: 'Análise do estado atual do piso' },
                  { step: '2', title: 'Preparação', desc: 'Limpeza profunda da superfície' },
                  { step: '3', title: 'Polimento', desc: 'Aplicação de abrasivos diamantados' },
                  { step: '4', title: 'Cristalização', desc: 'Vitrificação e proteção final' },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-emerald-600 rounded-full mx-auto mb-4 text-white text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-emerald-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Seu Piso Está Sem Brilho?</h2>
            <p className="text-emerald-100 mb-8">Temos a solução! Solicite seu orçamento agora</p>
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

export default PolimentoCristalizacaoPage;
