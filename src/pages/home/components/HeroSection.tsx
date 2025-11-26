const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://public.readdy.ai/ai/video_res/cabd5a2a-543a-4c43-b02c-9d90ea96edeb.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Logo */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="https://static.readdy.ai/image/e0c5e77842c26e0cfc24a07e507d4548/3f31564d42cf84692ecc3116573b3fe4.png" 
              alt="Warte Polimento Logo" 
              className="w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-emerald-400 text-lg md:text-xl font-semibold mb-4 animate-fade-in">
              Com mais de 24 anos de experiência na área de limpeza profissional
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Bem-vindo à <span className="text-emerald-400">Warte Polimento</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Nossas operações estão fortemente concentradas em limpeza profissional, polimento, cristalização, recuperação, tratamento e manutenção de todos os tipos de pisos.
            </p>
            <div className="bg-emerald-600 text-white py-4 px-6 rounded-lg inline-block mb-8">
              <p className="text-xl md:text-2xl font-bold">
                Seu piso está manchado? <span className="text-yellow-300">Temos a solução para você!</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href="https://wa.me/5511985641271"
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-fill text-2xl"></i>
                Faça seu Orçamento
              </a>
              <a
                href="#servicos"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;