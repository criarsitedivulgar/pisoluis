const BenefitsSection = () => {
  const benefits = [
    {
      icon: 'ri-leaf-fill',
      title: 'Menos uso de produtos de limpeza',
      description: 'Pisos tratados e impermeabilizados requerem menos produtos químicos para manutenção',
    },
    {
      icon: 'ri-home-smile-fill',
      title: 'Ambiente limpo',
      description: 'Superfícies protegidas mantêm a limpeza por mais tempo',
    },
    {
      icon: 'ri-shield-check-fill',
      title: 'Livre e protegido de poluição química',
      description: 'Proteção contra agentes nocivos e produtos químicos agressivos',
    },
    {
      icon: 'ri-time-fill',
      title: 'Maior durabilidade',
      description: 'Tratamentos profissionais prolongam a vida útil dos seus pisos',
    },
    {
      icon: 'ri-star-fill',
      title: 'Referência no segmento',
      description: 'Somos reconhecidos pela qualidade e excelência dos nossos serviços',
    },
    {
      icon: 'ri-money-dollar-circle-fill',
      title: 'Economia a longo prazo',
      description: 'Investimento que se paga com a redução de manutenções futuras',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-emerald-600 font-semibold text-lg mb-3">Benefícios</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefícios de um Piso Limpo e Protegido
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Descubra as vantagens de manter seus pisos com tratamento profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-all group"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-emerald-100 rounded-full flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                <i className={`${benefit.icon} text-2xl text-emerald-600 group-hover:text-white transition-colors`}></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Somos Referência Neste Segmento
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Com mais de 24 anos de experiência, oferecemos serviços de qualidade superior que transformam e protegem seus pisos
          </p>
          <a
            href="https://wa.me/5511985641271"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-fill text-2xl"></i>
            Solicite seu Orçamento Grátis
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
