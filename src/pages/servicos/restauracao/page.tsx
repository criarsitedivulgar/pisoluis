import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSEO, generateServiceSchema, generateBreadcrumbSchema } from '../../../utils/seo';

const RestauracaoPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // SEO Configuration
  useSEO({
    title: 'Restauração Manchas Pisos São Paulo - Recuperação Cor Estética',
    description: 'Restauração de manchas em pisos São Paulo: recupera cor e estética natural através do polimento restaurador. Remove manchas difíceis, desgaste e danos. Análise prévia e proteção duradoura.',
    keywords: 'restauração pisos São Paulo, remoção manchas pisos, polimento restaurador, recuperação pisos',
    canonical: '/servicos/restauracao',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateBreadcrumbSchema([
          { name: 'Início', url: '/' },
          { name: 'Serviços', url: '/servicos' },
          { name: 'Restauração de Manchas', url: '/servicos/restauracao' }
        ]),
        generateServiceSchema(
          'Restauração de Manchas em Pisos',
          'Um piso com desgaste ou manchado só recupera a sua cor e a sua estética natural através do processo de polimento restaurador.',
          '/servicos/restauracao'
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
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://readdy.ai/api/search-image?query=Professional%20floor%20restoration%20work%20in%20progress%20showing%20dramatic%20transformation%20from%20damaged%20to%20beautiful%20surface%20high%20quality%20photography&width=1200&height=600&seq=restauracao1&orientation=landscape)'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Restauração de Manchas</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Recupere a cor e estética natural do seu piso
            </p>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Restauração Profissional</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Há diversos fatores que influenciam no resultado: condições do piso ou causas como <strong>desgaste, falta de rejunte, uso de produtos ácidos, piso desnivelado ou instalações malfeitas</strong>.
                  </p>
                  <p>
                    Um piso com desgaste ou manchado só recupera a sua cor e a sua estética natural através do <strong>processo de polimento restaurador</strong>.
                  </p>
                  <p>
                    É preciso fazer análise prévia das fotos ou vídeos para decidir qual material utilizar. Após o polimento, aplicamos o produto que irá proteger o piso por longos períodos, facilitando a limpeza no dia a dia.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Stunning%20before%20and%20after%20floor%20restoration%20showing%20stained%20damaged%20marble%20transformed%20to%20pristine%20condition%20high%20quality%20photography&width=600&height=400&seq=restauracao2&orientation=landscape"
                  alt="Restauração de piso"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Galeria Antes e Depois */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resultados Reais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    before: 'https://readdy.ai/api/search-image?query=Severely%20stained%20and%20damaged%20marble%20floor%20with%20dark%20spots%20and%20discoloration%20in%20residential%20bathroom%20before%20restoration%20professional%20photography&width=400&height=300&seq=rest-antes1&orientation=landscape',
                    after: 'https://readdy.ai/api/search-image?query=Perfectly%20restored%20white%20marble%20floor%20with%20brilliant%20shine%20in%20elegant%20residential%20bathroom%20after%20professional%20restoration%20high%20quality%20photography&width=400&height=300&seq=rest-depois1&orientation=landscape',
                    title: 'Mármore Residencial'
                  },
                  {
                    before: 'https://readdy.ai/api/search-image?query=Worn%20scratched%20granite%20floor%20with%20dull%20appearance%20and%20visible%20damage%20in%20commercial%20lobby%20before%20restoration%20professional%20photography&width=400&height=300&seq=rest-antes2&orientation=landscape',
                    after: 'https://readdy.ai/api/search-image?query=Beautifully%20polished%20granite%20floor%20with%20mirror-like%20shine%20in%20modern%20commercial%20lobby%20after%20professional%20restoration%20high%20quality%20photography&width=400&height=300&seq=rest-depois2&orientation=landscape',
                    title: 'Granito Comercial'
                  },
                  {
                    before: 'https://readdy.ai/api/search-image?query=Old%20stained%20porcelain%20tile%20floor%20with%20grout%20problems%20and%20discoloration%20in%20kitchen%20before%20restoration%20professional%20photography&width=400&height=300&seq=rest-antes3&orientation=landscape',
                    after: 'https://readdy.ai/api/search-image?query=Sparkling%20clean%20porcelain%20tile%20floor%20with%20renewed%20grout%20in%20modern%20kitchen%20after%20professional%20restoration%20high%20quality%20photography&width=400&height=300&seq=rest-depois3&orientation=landscape',
                    title: 'Porcelanato Cozinha'
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2">
                      <div className="relative">
                        <img src={item.before} alt={`Antes - ${item.title}`} className="w-full h-48 sm:h-40 object-cover rounded-lg" />
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">ANTES</span>
                      </div>
                      <div className="relative">
                        <img src={item.after} alt={`Depois - ${item.title}`} className="w-full h-48 sm:h-40 object-cover rounded-lg" />
                        <span className="absolute top-2 left-2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded">DEPOIS</span>
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Processo */}
            <div className="bg-emerald-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nosso Processo de Restauração</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: '1', icon: 'ri-camera-fill', title: 'Análise', desc: 'Avaliação de fotos e vídeos' },
                  { step: '2', icon: 'ri-file-list-3-fill', title: 'Diagnóstico', desc: 'Definição dos materiais' },
                  { step: '3', icon: 'ri-tools-fill', title: 'Restauração', desc: 'Polimento restaurador' },
                  { step: '4', icon: 'ri-shield-check-fill', title: 'Proteção', desc: 'Aplicação de selante' },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-emerald-600 rounded-full mx-auto mb-4">
                      <i className={`${item.icon} text-2xl text-white`}></i>
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
            <h2 className="text-3xl font-bold text-white mb-4">Restaure Seu Piso</h2>
            <p className="text-emerald-100 mb-8">Envie fotos do seu piso para uma avaliação gratuita</p>
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

export default RestauracaoPage;
