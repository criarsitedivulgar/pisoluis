const ProblemsSection = () => {
  const problems = [
    {
      icon: 'ri-paint-fill',
      title: 'Restauração de Manchas',
      description: 'Há diversos fatores que influenciam no resultado, condições do piso ou causas (desgaste, falta de rejunte, uso de produtos ácidos, piso desnivelado ou instalações malfeitas).',
      solution: 'Um piso com desgaste ou manchado só recupera a sua cor e a sua estética natural através do processo de polimento restaurador.',
      process: 'É preciso fazer análise prévia das fotos ou vídeos para decidir qual material utilizar. Após o polimento, aplicamos o produto que irá proteger o piso por longos períodos.',
      beforeImage: 'https://readdy.ai/api/search-image?query=Damaged%20stained%20dirty%20marble%20floor%20with%20scratches%20and%20discoloration%20showing%20wear%20and%20tear%20in%20residential%20interior%20space%20before%20restoration%20treatment%20professional%20photography%20high%20quality&width=600&height=400&seq=before1&orientation=landscape',
      afterImage: 'https://readdy.ai/api/search-image?query=Beautiful%20polished%20shiny%20marble%20floor%20perfectly%20restored%20gleaming%20surface%20reflecting%20light%20in%20elegant%20residential%20interior%20after%20professional%20restoration%20treatment%20high%20quality%20photography&width=600&height=400&seq=after1&orientation=landscape',
    },
    {
      icon: 'ri-contrast-drop-2-fill',
      title: 'Cristalização e Vitrificação',
      description: 'É possível recuperar e manter o brilho dos pisos em geral utilizando o método de cristalização e vitrificação.',
      solution: 'O processo é uma ação mecânica e química que aumenta a durabilidade e o brilho.',
      process: 'Indico que faça a cristalização com a impermeabilização no tempo certo indicado para evitar manchas e manter a estética.',
      beforeImage: 'https://readdy.ai/api/search-image?query=Dull%20worn%20granite%20floor%20without%20shine%20looking%20old%20and%20tired%20in%20commercial%20space%20before%20crystallization%20treatment%20professional%20photography%20high%20quality&width=600&height=400&seq=before2&orientation=landscape',
      afterImage: 'https://readdy.ai/api/search-image?query=Brilliant%20shiny%20crystallized%20granite%20floor%20with%20mirror-like%20finish%20reflecting%20lights%20in%20modern%20commercial%20space%20after%20professional%20treatment%20high%20quality%20photography&width=600&height=400&seq=after2&orientation=landscape',
    },
    {
      icon: 'ri-shield-fill',
      title: 'Impermeabilização de Pisos',
      description: 'Crucial para proteger contra infiltrações e garantir durabilidade. Atua como barreira protetora contra líquidos e agentes nocivos, prevenindo mofo e bolor.',
      solution: 'Proteção anti-manchas, evita deterioração e mantém o aspecto original.',
      process: 'Deve ser aplicada em pisos secos (novos ou restaurados).',
      beforeImage: 'https://readdy.ai/api/search-image?query=Unprotected%20porous%20stone%20floor%20vulnerable%20to%20water%20damage%20and%20stains%20showing%20moisture%20absorption%20in%20outdoor%20patio%20area%20before%20waterproofing%20treatment%20professional%20photography&width=600&height=400&seq=before3&orientation=landscape',
      afterImage: 'https://readdy.ai/api/search-image?query=Protected%20waterproofed%20stone%20floor%20with%20water%20beading%20on%20surface%20showing%20excellent%20moisture%20resistance%20in%20beautiful%20outdoor%20patio%20after%20sealing%20treatment%20professional%20photography&width=600&height=400&seq=after3&orientation=landscape',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-emerald-600 font-semibold text-lg mb-3">Soluções de Problemas</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Restauração e Recuperação
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Soluções especializadas para os problemas mais comuns em pisos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-emerald-600 rounded-full mb-6 mx-auto">
                <i className={`${problem.icon} text-4xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{problem.title}</h3>
              
              {/* Before and After Images */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="relative">
                    <img 
                      src={problem.beforeImage} 
                      alt={`Antes - ${problem.title}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      ANTES
                    </span>
                  </div>
                  <div className="relative">
                    <img 
                      src={problem.afterImage} 
                      alt={`Depois - ${problem.title}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <span className="absolute top-2 left-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded">
                      DEPOIS
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <i className="ri-error-warning-fill text-red-500"></i>
                    Problema:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <i className="ri-lightbulb-flash-fill text-yellow-500"></i>
                    Solução:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <i className="ri-settings-3-fill text-emerald-600"></i>
                    Processo:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.process}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
