import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSEO, generateServiceSchema, generateBreadcrumbSchema } from '../../../utils/seo';

const RevitalizacaoPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // SEO Configuration
  useSEO({
    title: 'Revitalização Pisos São Paulo - Granitina Marmorite Concreto Vinílico',
    description: 'Revitalização de pisos em São Paulo: granitina, marmorite, concreto, vinílico, paviflex, laminados e marmoglass. Processo com água, máquinas profissionais e produtos revitalizadores de alta qualidade.',
    keywords: 'revitalização pisos São Paulo, revitalização granitina, revitalização marmorite, revitalização concreto',
    canonical: '/servicos/revitalizacao',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateBreadcrumbSchema([
          { name: 'Início', url: '/' },
          { name: 'Serviços', url: '/servicos' },
          { name: 'Revitalização de Pisos', url: '/servicos/revitalizacao' }
        ]),
        generateServiceSchema(
          'Revitalização de Pisos',
          'O processo é realizado com água, força mecânica/máquinas profissionais e produtos revitalizadores específicos de alta qualidade.',
          '/servicos/revitalizacao'
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
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://readdy.ai/api/search-image?query=Professional%20floor%20revitalization%20process%20with%20industrial%20machine%20restoring%20old%20worn%20floor%20to%20like-new%20condition%20high%20quality%20photography&width=1200&height=600&seq=revitalizacao1&orientation=landscape)'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Revitalização de Pisos</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Devolva a beleza e elegância original do seu piso
            </p>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">O Processo de Revitalização</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    O processo é realizado com <strong>água, força mecânica/máquinas profissionais e produtos revitalizadores específicos de alta qualidade</strong>.
                  </p>
                  <p>
                    A revitalização não só aumenta a elegância dos seus ambientes como estimula a sua durabilidade, prolongando a vida útil do piso.
                  </p>
                  <p>
                    Utilizamos técnicas avançadas que removem sujeiras profundas, manchas e desgastes sem agredir a superfície do piso.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Beautifully%20revitalized%20terrazzo%20floor%20with%20restored%20shine%20and%20color%20in%20elegant%20residential%20interior%20high%20quality%20photography&width=600&height=400&seq=revitalizacao2&orientation=landscape"
                  alt="Piso revitalizado"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Tipos de Pisos */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Indicado Para</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  'Granitina',
                  'Marmorites',
                  'Concreto',
                  'Pisos Vinílicos',
                  'Paviflex',
                  'Laminados',
                  'Marmoglass',
                  'Solarium',
                  'Porcelanato Amadeirado',
                  'Cerâmica',
                  'Pedras Naturais',
                  'Outros'
                ].map((tipo) => (
                  <div key={tipo} className="bg-emerald-50 p-4 rounded-lg text-center">
                    <i className="ri-checkbox-circle-fill text-emerald-600 text-2xl mb-2"></i>
                    <p className="font-semibold text-gray-800 text-sm">{tipo}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Antes e Depois */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resultados Comprovados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <img
                    src="https://readdy.ai/api/search-image?query=Old%20worn%20damaged%20vinyl%20floor%20with%20scratches%20and%20discoloration%20in%20need%20of%20restoration%20before%20treatment%20professional%20photography&width=600&height=400&seq=revitantes1&orientation=landscape"
                    alt="Antes da revitalização"
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                  <span className="absolute top-4 left-4 bg-red-500 text-white font-bold px-4 py-2 rounded-lg">
                    ANTES
                  </span>
                </div>
                <div className="relative">
                  <img
                    src="https://readdy.ai/api/search-image?query=Perfectly%20restored%20vinyl%20floor%20with%20brilliant%20shine%20and%20renewed%20color%20after%20professional%20revitalization%20treatment%20high%20quality%20photography&width=600&height=400&seq=revitdepois1&orientation=landscape"
                    alt="Depois da revitalização"
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                  <span className="absolute top-4 left-4 bg-emerald-500 text-white font-bold px-4 py-2 rounded-lg">
                    DEPOIS
                  </span>
                </div>
              </div>
            </div>

            {/* Benefícios */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefícios da Revitalização</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: 'ri-magic-fill', title: 'Restaura a Beleza', desc: 'Devolve a aparência original' },
                  { icon: 'ri-time-fill', title: 'Aumenta Durabilidade', desc: 'Prolonga a vida útil' },
                  { icon: 'ri-sparkling-2-fill', title: 'Brilho Intenso', desc: 'Superfície reluzente' },
                  { icon: 'ri-shield-check-fill', title: 'Proteção', desc: 'Prepara para impermeabilização' },
                  { icon: 'ri-leaf-fill', title: 'Ecológico', desc: 'Produtos biodegradáveis' },
                  { icon: 'ri-money-dollar-circle-fill', title: 'Economia', desc: 'Evita troca do piso' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start bg-white p-4 rounded-lg">
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
            <h2 className="text-3xl font-bold text-white mb-4">Revitalize Seu Piso</h2>
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

export default RevitalizacaoPage;
