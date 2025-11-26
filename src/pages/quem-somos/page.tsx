import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { useSEO, generateBreadcrumbSchema } from '../../utils/seo';

export default function QuemSomosPage() {
  // SEO Configuration
  useSEO({
    title: 'Quem Somos São Paulo - Warte Polimento História Missão Valores',
    description: 'Conheça a história da Warte Polimento: 24 anos de experiência em polimento e limpeza de pisos em São Paulo. Fundada em 2000, somos referência em qualidade e excelência. Nossa missão é conquistar e surpreender clientes com serviços profissionais.',
    keywords: 'Warte Polimento história, empresa polimento São Paulo, quem somos, missão visão valores',
    canonical: '/quem-somos',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateBreadcrumbSchema([
          { name: 'Início', url: '/' },
          { name: 'Quem Somos', url: '/quem-somos' }
        ]),
        {
          '@type': 'AboutPage',
          name: 'Quem Somos - Warte Polimento',
          description: 'Conheça a história da Warte Polimento: 24 anos de experiência em polimento e limpeza de pisos em São Paulo.',
          url: `${import.meta.env.VITE_SITE_URL || 'https://wartepolimento.com.br'}/quem-somos`
        }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Quem Somos</h1>
            <p className="text-xl text-emerald-100">Conheça a história da Warte Polimento</p>
          </div>
        </section>

        {/* História */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-lg h-64">
                    <img
                      src="https://static.readdy.ai/image/e0c5e77842c26e0cfc24a07e507d4548/2357227144cc30e3a107caf514e1a216.jpeg"
                      alt="Serviço de polimento profissional"
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg h-48">
                    <img
                      src="https://readdy.ai/api/search-image?query=Professional%20floor%20polishing%20team%20working%20on%20beautiful%20shiny%20granite%20floor%20with%20modern%20equipment%20in%20residential%20space%2C%20workers%20in%20uniform%2C%20clean%20simple%20background%2C%20high%20quality%20professional%20service%2C%20natural%20lighting%20showing%20mirror-like%20reflection%20on%20polished%20surface&width=600&height=400&seq=quemsomos2&orientation=portrait"
                      alt="Equipe profissional trabalhando"
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-lg overflow-hidden shadow-lg h-48">
                    <img
                      src="https://readdy.ai/api/search-image?query=Modern%20professional%20floor%20polishing%20equipment%20and%20tools%20on%20beautiful%20shiny%20polished%20floor%2C%20high%20quality%20machinery%2C%20clean%20simple%20background%2C%20professional%20service%20setup%2C%20natural%20lighting%20showing%20perfect%20floor%20finish&width=600&height=400&seq=quemsomos3&orientation=portrait"
                      alt="Equipamentos modernos de polimento"
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg h-64">
                    <img
                      src="https://readdy.ai/api/search-image?query=Beautiful%20restored%20marble%20floor%20with%20perfect%20mirror-like%20shine%20and%20reflection%20in%20luxury%20residential%20interior%2C%20professional%20polishing%20result%2C%20clean%20simple%20background%2C%20high%20quality%20finish%2C%20natural%20lighting%20showing%20impeccable%20surface&width=600&height=800&seq=quemsomos4&orientation=portrait"
                      alt="Resultado final do polimento"
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nossa História</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-emerald-600">No ano 2000, iniciamos a nossa jornada.</strong> Nascemos da necessidade de serviços de limpeza, polimento e impermeabilização de pisos.
                  </p>
                  <p>
                    Meu primeiro trabalho como terceirizado foi no grupo Carrefour Brasil, onde foi o início do meu aprendizado. Desde então, desenvolvemos técnicas e expertise que nos tornaram referência no mercado.
                  </p>
                  <p>
                    Ao longo de mais de <strong>24 anos de experiência</strong>, atendemos milhares de clientes satisfeitos, sempre com o compromisso de entregar qualidade e excelência em cada projeto.
                  </p>
                  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mt-6">
                    <p className="text-2xl font-bold text-emerald-600 mb-2">Fundador: Luis Carlos</p>
                    <p className="text-gray-700 italic">
                      "Oferecer serviços e entregar qualidade, esse é o nosso diferencial."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Missão, Visão e Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-emerald-100 rounded-full mx-auto mb-6">
                  <i className="ri-target-fill text-4xl text-emerald-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Conquistar e surpreender nossos clientes, agregando valor de maneira ampla e duradoura.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-emerald-100 rounded-full mx-auto mb-6">
                  <i className="ri-eye-fill text-4xl text-emerald-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sempre fazer melhor. Desta forma sabemos que iremos alcançar nossas metas e ser referência no mercado de serviços de limpeza profissional.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-emerald-100 rounded-full mx-auto mb-6">
                  <i className="ri-heart-fill text-4xl text-emerald-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
                <p className="text-gray-600 leading-relaxed">
                  Quanto maior a diversidade das partes, maior a vitalidade e a riqueza de um todo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Nossos Diferenciais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'ri-award-fill', title: '24+ Anos', desc: 'de experiência no mercado' },
                { icon: 'ri-team-fill', title: 'Equipe Especializada', desc: 'Profissionais treinados' },
                { icon: 'ri-leaf-fill', title: 'Produtos Biodegradáveis', desc: 'Respeito ao meio ambiente' },
                { icon: 'ri-tools-fill', title: 'Equipamentos Modernos', desc: 'Máquinas profissionais' },
              ].map((item, index) => (
                <div key={index} className="text-center p-6 bg-emerald-50 rounded-xl">
                  <div className="w-16 h-16 flex items-center justify-center bg-emerald-600 rounded-full mx-auto mb-4">
                    <i className={`${item.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-emerald-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Transformar seu Piso?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Entre em contato conosco e solicite seu orçamento gratuito
            </p>
            <a
              href="https://wa.me/5511985641271"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-fill text-2xl"></i>
              Fale Conosco
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
