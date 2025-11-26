import { Suspense } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useSEO, generateBreadcrumbSchema } from '../../utils/seo';

const ServicosPage = () => {
  // SEO Configuration
  useSEO({
    title: 'Serviços São Paulo - Polimento Cristalização Limpeza Impermeabilização Pisos',
    description: 'Serviços especializados em São Paulo: polimento e cristalização de pisos, limpeza profissional, troca de rejunte, revitalização, impermeabilização e restauração de manchas. 24 anos de experiência. Orçamento grátis!',
    keywords: 'serviços polimento São Paulo, cristalização pisos, limpeza profissional, impermeabilização, restauração pisos',
    canonical: '/servicos',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateBreadcrumbSchema([
          { name: 'Início', url: '/' },
          { name: 'Serviços', url: '/servicos' }
        ]),
        {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'Service',
              position: 1,
              name: 'Limpeza Profissional',
              description: 'Revitaliza e aumenta a elegância dos seus ambientes, como estimula a sua durabilidade.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Warte Polimento'
              }
            },
            {
              '@type': 'Service',
              position: 2,
              name: 'Polimento e Cristalização',
              description: 'Serviços de polimento de pedras, porcelanato, cerâmica, concreto, Granitina e Marmorite.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Warte Polimento'
              }
            },
            {
              '@type': 'Service',
              position: 3,
              name: 'Troca de Rejunte',
              description: 'Remoção do rejunte velho e reaplicação de novo rejunte em pisos e paredes.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Warte Polimento'
              }
            },
            {
              '@type': 'Service',
              position: 4,
              name: 'Revitalização de Pisos',
              description: 'Processo realizado com água, força mecânica e produtos revitalizadores específicos.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Warte Polimento'
              }
            },
            {
              '@type': 'Service',
              position: 5,
              name: 'Impermeabilização',
              description: 'Proteção contra infiltrações e garantia de durabilidade dos pisos.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Warte Polimento'
              }
            },
            {
              '@type': 'Service',
              position: 6,
              name: 'Restauração de Manchas',
              description: 'Recuperação da cor e estética natural através do polimento restaurador.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Warte Polimento'
              }
            }
          ]
        }
      ]
    }
  });

  const services = [
    {
      icon: 'ri-sparkling-2-fill',
      title: 'Limpeza Profissional',
      description: 'Revitaliza e aumenta a elegância dos seus ambientes, como estimula a sua durabilidade. É indicado para todos os tipos de pisos externos e internos.',
      image: 'https://static.readdy.ai/image/e0c5e77842c26e0cfc24a07e507d4548/1963c74ec64a86bad8012e2d45823598.jpeg',
      link: '/servicos/limpeza-profissional',
      benefits: ['Remoção profunda de sujeira', 'Produtos biodegradáveis', 'Equipamentos especializados']
    },
    {
      icon: 'ri-contrast-drop-2-fill',
      title: 'Polimento e Cristalização',
      description: 'Prestamos serviços de polimento de pedras, porcelanato, cerâmica, concreto, Granitina e Marmorite. Utilizamos produtos biodegradáveis e máquinas especializadas.',
      image: 'https://readdy.ai/api/search-image?query=Floor%20polishing%20service%20with%20professional%20polishing%20machine%20creating%20shiny%20reflective%20marble%20surface%2C%20worker%20polishing%20granite%20floor%2C%20professional%20floor%20care%2C%20simple%20white%20background&width=800&height=600&seq=polimento-1&orientation=landscape',
      link: '/servicos/polimento-cristalizacao',
      benefits: ['Brilho intenso e duradouro', 'Proteção da superfície', 'Acabamento profissional']
    },
    {
      icon: 'ri-paint-brush-fill',
      title: 'Troca de Rejunte',
      description: 'Fazemos a remoção do rejunte velho e reaplicamos novo rejunte. Piso interno, externo e parede.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20worker%20applying%20new%20grout%20between%20ceramic%20tiles%2C%20tile%20renovation%20service%2C%20clean%20white%20tiles%20with%20fresh%20grout%20lines%2C%20professional%20tile%20maintenance%2C%20simple%20white%20background&width=800&height=600&seq=rejunte-1&orientation=landscape',
      link: '/servicos/troca-rejunte',
      benefits: ['Renovação completa', 'Rejunte de alta qualidade', 'Acabamento perfeito']
    },
    {
      icon: 'ri-magic-fill',
      title: 'Revitalização de Pisos',
      description: 'O processo é realizado com água, força mecânica/máquinas profissionais e produtos revitalizadores específicos de alta qualidade.',
      image: 'https://readdy.ai/api/search-image?query=Floor%20revitalization%20service%20showing%20before%20and%20after%20transformation%20of%20old%20worn%20floor%20becoming%20new%20and%20shiny%2C%20professional%20floor%20restoration%2C%20modern%20cleaning%20equipment%2C%20simple%20white%20background&width=800&height=600&seq=revit-1&orientation=landscape',
      link: '/servicos/revitalizacao',
      benefits: ['Recuperação total do piso', 'Aspecto de novo', 'Durabilidade prolongada']
    },
    {
      icon: 'ri-shield-check-fill',
      title: 'Impermeabilização',
      description: 'Crucial para proteger contra infiltrações e garantir durabilidade. Atua como barreira protetora contra líquidos e agentes nocivos.',
      image: 'https://readdy.ai/api/search-image?query=Waterproofing%20service%20application%20on%20floor%20surface%2C%20protective%20coating%20being%20applied%20to%20prevent%20water%20damage%2C%20professional%20waterproofing%20treatment%2C%20moisture%20protection%2C%20simple%20white%20background&width=800&height=600&seq=imper-1&orientation=landscape',
      link: '/servicos/impermeabilizacao',
      benefits: ['Proteção contra infiltrações', 'Prevenção de danos', 'Garantia de durabilidade']
    },
    {
      icon: 'ri-tools-fill',
      title: 'Restauração de Manchas',
      description: 'Um piso com desgaste ou manchado só recupera a sua cor e a sua estética natural através do processo de polimento restaurador.',
      image: 'https://readdy.ai/api/search-image?query=Stain%20removal%20and%20floor%20restoration%20service%2C%20professional%20worker%20removing%20stains%20from%20marble%20floor%2C%20floor%20repair%20and%20restoration%2C%20damaged%20floor%20becoming%20perfect%20again%2C%20simple%20white%20background&width=800&height=600&seq=rest-1&orientation=landscape',
      link: '/servicos/restauracao',
      benefits: ['Remoção de manchas difíceis', 'Restauração da cor original', 'Resultado profissional']
    },
  ];

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Nossos Serviços Especializados
                </h1>
                <p className="text-xl text-emerald-100 mb-8">
                  Oferecemos soluções completas em limpeza, polimento e manutenção de pisos com mais de 24 anos de experiência e excelência
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/5511985641271"
                    className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-whatsapp-fill text-xl"></i>
                    Solicitar Orçamento
                  </a>
                  <a
                    href="tel:+5511985641271"
                    className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-phone-fill text-xl"></i>
                    (11) 98564-1271
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-14 h-14 flex items-center justify-center bg-emerald-600 rounded-full mb-3">
                          <i className={`${service.icon} text-2xl text-white`}></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Benefícios:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <i className="ri-check-line text-emerald-600 mt-0.5"></i>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={service.link}
                        className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Saiba Mais
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Por Que Escolher a Warte Polimento?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Somos referência em Belo Horizonte com mais de duas décadas de experiência
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: 'ri-time-line',
                    title: '24+ Anos',
                    description: 'De experiência no mercado'
                  },
                  {
                    icon: 'ri-team-line',
                    title: 'Equipe Qualificada',
                    description: 'Profissionais treinados e certificados'
                  },
                  {
                    icon: 'ri-tools-line',
                    title: 'Equipamentos Modernos',
                    description: 'Tecnologia de ponta para melhor resultado'
                  },
                  {
                    icon: 'ri-leaf-line',
                    title: 'Produtos Ecológicos',
                    description: 'Biodegradáveis e seguros'
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-emerald-100 rounded-full mx-auto mb-4">
                      <i className={`${item.icon} text-4xl text-emerald-600`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-emerald-600">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para Transformar Seus Pisos?
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Entre em contato agora e solicite um orçamento gratuito sem compromisso
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/5511985641271"
                  className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-whatsapp-fill text-2xl"></i>
                  Falar no WhatsApp
                </a>
                <a
                  href="tel:+5511985641271"
                  className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-phone-fill text-xl"></i>
                  Ligar Agora
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </Suspense>
  );
};

export default ServicosPage;
