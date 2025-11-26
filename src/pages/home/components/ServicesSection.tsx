
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: 'ri-sparkling-2-fill',
      title: 'Limpeza Profissional',
      description: 'Revitaliza e aumenta a elegância dos seus ambientes, como estimula a sua durabilidade. É indicado para todos os tipos de pisos externos e internos.',
      link: '/servicos/limpeza-profissional',
      cta: 'Faça aqui seu orçamento',
    },
    {
      icon: 'ri-contrast-drop-2-fill',
      title: 'Polimento e Cristalização',
      description: 'Prestamos serviços de polimento de pedras, porcelanato, cerâmica, concreto, Granitina e Marmorite. Utilizamos produtos biodegradáveis e máquinas especializadas.',
      link: '/servicos/polimento-cristalizacao',
      cta: 'Seu piso está sem brilho? Temos a solução!',
    },
    {
      icon: 'ri-paint-brush-fill',
      title: 'Troca de Rejunte',
      description: 'Fazemos a remoção do rejunte velho e reaplicamos novo rejunte. Piso interno, externo e parede.',
      link: '/servicos/troca-rejunte',
      cta: 'Solicite um orçamento',
    },
    {
      icon: 'ri-magic-fill',
      title: 'Revitalização de Pisos',
      description: 'O processo é realizado com água, força mecânica/máquinas profissionais e produtos revitalizadores específicos de alta qualidade.',
      link: '/servicos/revitalizacao',
      cta: 'Revitalize seu piso',
    },
    {
      icon: 'ri-shield-check-fill',
      title: 'Impermeabilização',
      description: 'Crucial para proteger contra infiltrações e garantir durabilidade. Atua como barreira protetora contra líquidos e agentes nocivos.',
      link: '/servicos/impermeabilizacao',
      cta: 'Proteja seu piso',
    },
    {
      icon: 'ri-tools-fill',
      title: 'Restauração de Manchas',
      description: 'Um piso com desgaste ou manchado só recupera a sua cor e a sua estética natural através do processo de polimento restaurador.',
      link: '/servicos/restauracao',
      cta: 'Restaure seu piso',
    },
  ];

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-emerald-600 font-semibold text-lg mb-3">Serviços</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serviços Principais
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços especializados em limpeza, polimento e manutenção de pisos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-600 transition-colors">
                <i className={`${service.icon} text-3xl text-emerald-600 group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded mb-4">
                <p className="text-sm font-semibold text-gray-800">{service.cta}</p>
              </div>
              <Link
                to={service.link}
                onClick={handleLinkClick}
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all cursor-pointer"
              >
                Saiba mais <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
