import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSEO, generateServiceSchema, generateBreadcrumbSchema } from '../../../utils/seo';

const TrocaRejuntePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // SEO Configuration
  useSEO({
    title: 'Troca Rejunte São Paulo - Renovação Pisos Paredes Internos Externos',
    description: 'Troca de rejunte em São Paulo: remoção do rejunte velho e aplicação de novo rejunte em pisos internos, externos e paredes. Renovação completa com rejunte de alta qualidade e acabamento perfeito.',
    keywords: 'troca rejunte São Paulo, renovação rejunte, rejunte pisos, rejunte paredes',
    canonical: '/servicos/troca-rejunte',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateBreadcrumbSchema([
          { name: 'Início', url: '/' },
          { name: 'Serviços', url: '/servicos' },
          { name: 'Troca de Rejunte', url: '/servicos/troca-rejunte' }
        ]),
        generateServiceSchema(
          'Troca de Rejunte',
          'Fazemos a remoção do rejunte velho e reaplicamos novo rejunte. Piso interno, externo e parede.',
          '/servicos/troca-rejunte'
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
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://readdy.ai/api/search-image?query=Professional%20worker%20applying%20new%20grout%20between%20floor%20tiles%20with%20precision%20tools%20in%20modern%20bathroom%20renovation%20high%20quality%20photography&width=1200&height=600&seq=rejunte1&orientation=landscape)'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Troca de Rejunte</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Renovação completa do rejunte para pisos internos, externos e paredes
            </p>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Serviço de Troca de Rejunte</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Fazemos a <strong>remoção do rejunte velho e reaplicamos novo rejunte</strong>. Atendemos piso interno, externo e parede.
                  </p>
                  <p>
                    O rejunte deteriorado não é apenas um problema estético - ele pode causar infiltrações, acúmulo de sujeira e proliferação de fungos e bactérias.
                  </p>
                  <p>
                    Nossa equipe utiliza ferramentas especializadas para remover o rejunte antigo sem danificar as peças, aplicando um novo rejunte de alta qualidade e durabilidade.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Clean%20white%20grout%20lines%20between%20ceramic%20tiles%20showing%20perfect%20renovation%20work%20in%20modern%20kitchen%20floor%20high%20quality%20photography&width=600&height=400&seq=rejunte2&orientation=landscape"
                  alt="Rejunte renovado"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Aplicações */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Onde Aplicamos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: 'ri-home-4-fill', title: 'Pisos Internos', desc: 'Cozinhas, banheiros, salas e quartos' },
                  { icon: 'ri-sun-fill', title: 'Pisos Externos', desc: 'Varandas, garagens e áreas de lazer' },
                  { icon: 'ri-layout-grid-fill', title: 'Paredes', desc: 'Azulejos de banheiros e cozinhas' },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-8 rounded-xl text-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-emerald-600 rounded-full mx-auto mb-6">
                      <i className={`${item.icon} text-4xl text-white`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefícios */}
            <div className="bg-emerald-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefícios da Troca de Rejunte</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: 'ri-shield-check-fill', title: 'Proteção contra infiltrações' },
                  { icon: 'ri-sparkling-2-fill', title: 'Aparência renovada' },
                  { icon: 'ri-virus-fill', title: 'Elimina fungos e bactérias' },
                  { icon: 'ri-time-fill', title: 'Maior durabilidade do piso' },
                  { icon: 'ri-brush-fill', title: 'Facilita a limpeza diária' },
                  { icon: 'ri-home-smile-fill', title: 'Valoriza o imóvel' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg">
                    <i className={`${item.icon} text-2xl text-emerald-600`}></i>
                    <span className="font-semibold text-gray-800">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-emerald-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Solicite um Orçamento</h2>
            <p className="text-emerald-100 mb-8">Renove o rejunte do seu piso com profissionais especializados</p>
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

export default TrocaRejuntePage;
