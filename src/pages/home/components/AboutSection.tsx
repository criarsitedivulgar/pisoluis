const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quem Somos
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A <strong>Warte Polimento</strong> é uma empresa especializada em limpeza profissional, 
              polimento, cristalização e recuperação de todos os tipos de pisos. Com mais de 
              <strong> 24 anos de experiência</strong> no mercado, atendemos residências, 
              condomínios, empresas e estabelecimentos comerciais em toda a região de São Paulo.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nossa equipe é formada por profissionais altamente qualificados e treinados, 
              utilizando equipamentos de última geração e produtos de alta qualidade para 
              garantir os melhores resultados.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Trabalhamos com <strong>compromisso, qualidade e pontualidade</strong>, sempre 
              buscando superar as expectativas dos nossos clientes e entregar um serviço 
              impecável que transforma completamente seus pisos.
            </p>
            <a
              href="/quem-somos"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-colors whitespace-nowrap"
            >
              Saiba Mais Sobre Nós
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>

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
                  src="https://readdy.ai/api/search-image?query=Professional%20floor%20polishing%20team%20working%20on%20beautiful%20shiny%20granite%20floor%20with%20modern%20equipment%20in%20residential%20space%2C%20workers%20in%20uniform%2C%20clean%20simple%20background%2C%20high%20quality%20professional%20service%2C%20natural%20lighting%20showing%20mirror-like%20reflection%20on%20polished%20surface&width=600&height=400&seq=about2&orientation=portrait"
                  alt="Equipe profissional trabalhando"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-lg overflow-hidden shadow-lg h-48">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20professional%20floor%20polishing%20equipment%20and%20tools%20on%20beautiful%20shiny%20polished%20floor%2C%20high%20quality%20machinery%2C%20clean%20simple%20background%2C%20professional%20service%20setup%2C%20natural%20lighting%20showing%20perfect%20floor%20finish&width=600&height=400&seq=about3&orientation=portrait"
                  alt="Equipamentos modernos de polimento"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-64">
                <img
                  src="https://readdy.ai/api/search-image?query=Beautiful%20restored%20marble%20floor%20with%20perfect%20mirror-like%20shine%20and%20reflection%20in%20luxury%20residential%20interior%2C%20professional%20polishing%20result%2C%20clean%20simple%20background%2C%20high%20quality%20finish%2C%20natural%20lighting%20showing%20impeccable%20surface&width=600&height=800&seq=about4&orientation=portrait"
                  alt="Resultado final do polimento"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;