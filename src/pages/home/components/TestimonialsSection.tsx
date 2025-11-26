import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'São Paulo - SP',
      rating: 5,
      text: 'Excelente serviço! O Luis Carlos e sua equipe fizeram um trabalho impecável no polimento do meu piso de mármore. Ficou brilhando como novo. Super recomendo!',
    },
    {
      name: 'João Santos',
      location: 'São Paulo - SP',
      rating: 5,
      text: 'Profissionalismo e qualidade incomparáveis. Meu piso de porcelanato estava manchado e sem vida. Após o serviço da Warte Polimento, ficou perfeito. Muito satisfeito!',
    },
    {
      name: 'Ana Paula',
      location: 'São Paulo - SP',
      rating: 5,
      text: 'Contratei o serviço de impermeabilização e não me arrependo. A equipe é pontual, educada e o resultado superou minhas expectativas. Meu piso está protegido e lindo!',
    },
    {
      name: 'Carlos Eduardo',
      location: 'São Paulo - SP',
      rating: 5,
      text: 'Precisava de uma limpeza profunda após uma reforma. A Warte Polimento fez um trabalho excepcional. Removeram toda a sujeira e deixaram minha casa impecável. Recomendo!',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-emerald-400 font-semibold text-lg mb-3">Depoimentos</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Veja o que nossos clientes satisfeitos têm a dizer sobre nossos serviços
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <i key={i} className="ri-star-fill text-yellow-400 text-2xl"></i>
              ))}
            </div>
            <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed text-center">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
              <p className="text-gray-600">{testimonials[currentIndex].location}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 flex items-center justify-center bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors shadow-lg cursor-pointer"
            aria-label="Depoimento anterior"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 flex items-center justify-center bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors shadow-lg cursor-pointer"
            aria-label="Próximo depoimento"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  index === currentIndex ? 'bg-emerald-400 w-8' : 'bg-gray-600'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;