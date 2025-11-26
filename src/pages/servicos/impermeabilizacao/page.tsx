import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSEO, generateServiceSchema, generateBreadcrumbSchema } from '../../../utils/seo';

export default function ImpermeabilizacaoPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // SEO Configuration
  useSEO({
    title: 'Impermeabilização Pisos São Paulo - Proteção Infiltrações Manchas',
    description: 'Impermeabilização de pisos em São Paulo: proteção contra infiltrações, manchas e umidade. Barreira protetora que garante durabilidade, previne mofo e bolor. Aplicação em pisos novos e restaurados.',
    keywords: 'impermeabilização pisos São Paulo, proteção pisos, anti-manchas, proteção infiltração',
    canonical: '/servicos/impermeabilizacao',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateBreadcrumbSchema([
          { name: 'Início', url: '/' },
          { name: 'Serviços', url: '/servicos' },
          { name: 'Impermeabilização', url: '/servicos/impermeabilizacao' }
        ]),
        generateServiceSchema(
          'Impermeabilização de Pisos',
          'Crucial para proteger contra infiltrações e garantir durabilidade. Atua como barreira protetora contra líquidos e agentes nocivos.',
          '/servicos/impermeabilizacao'
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
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://readdy.ai/api/search-image?query=Professional%20applying%20waterproof%20sealant%20to%20stone%20floor%20with%20roller%20showing%20protective%20coating%20application%20high%20quality%20photography&width=1200&height=600&seq=impermeabilizacao1&orientation=landscape)'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Impermeabilização de Pisos</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Proteção completa contra infiltrações e manchas
            </p>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Por que Impermeabilizar?</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    A impermeabilização é <strong>crucial para proteger contra infiltrações e garantir durabilidade</strong>. Atua como barreira protetora contra líquidos e agentes nocivos, prevenindo mofo e bolor.
                  </p>
                  <p>
                    Este tratamento oferece <strong>proteção anti-manchas</strong>, evita deterioração e mantém o aspecto original do seu piso por muito mais tempo.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="font-semibold text-gray-800">
                      <i className="ri-information-fill text-yellow-500 mr-2"></i>
                      Importante: Deve ser aplicada em pisos secos (novos ou restaurados).
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Water%20droplets%20beading%20on%20waterproofed%20stone%20floor%20surface%20showing%20excellent%20moisture%20protection%20in%20modern%20interior%20high%20quality%20photography&width=600&height=400&seq=impermeabilizacao2&orientation=landscape"
                  alt="Piso impermeabilizado"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Benefícios */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefícios da Impermeabilização</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: 'ri-shield-check-fill', title: 'Proteção Anti-Manchas', desc: 'Barreira contra líquidos e sujeiras' },
                  { icon: 'ri-drop-fill', title: 'Evita Infiltrações', desc: 'Proteção contra umidade' },
                  { icon: 'ri-virus-fill', title: 'Previne Mofo e Bolor', desc: 'Ambiente mais saudável' },
                  { icon: 'ri-time-fill', title: 'Maior Durabilidade', desc: 'Prolonga a vida útil do piso' },
                  { icon: 'ri-brush-fill', title: 'Facilita Limpeza', desc: 'Manutenção mais simples' },
                  { icon: 'ri-sparkling-2-fill', title: 'Mantém Aspecto Original', desc: 'Preserva a beleza do piso' },
                ].map((item, index) => (
                  <div key={index} className="bg-emerald-50 p-6 rounded-xl text-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-emerald-600 rounded-full mx-auto mb-4">
                      <i className={`${item.icon} text-3xl text-white`}></i>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quando Aplicar */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quando Aplicar?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-emerald-600 mb-4 flex items-center gap-2">
                    <i className="ri-checkbox-circle-fill"></i>
                    Pisos Novos
                  </h3>
                  <p className="text-gray-600">
                    Ideal aplicar logo após a instalação para proteger desde o início e evitar manchas durante a obra.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-emerald-600 mb-4 flex items-center gap-2">
                    <i className="ri-checkbox-circle-fill"></i>
                    Pisos Restaurados
                  </h3>
                  <p className="text-gray-600">
                    Após o processo de polimento e cristalização, a impermeabilização sela e protege o resultado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-emerald-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Proteja Seu Piso</h2>
            <p className="text-emerald-100 mb-8">Solicite um orçamento para impermeabilização</p>
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
}
