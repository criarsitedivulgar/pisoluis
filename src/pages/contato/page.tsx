import { Suspense, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { useSEO, generateBreadcrumbSchema, generateFAQSchema } from '../../utils/seo';

const ContatoPage = () => {
  // SEO Configuration
  useSEO({
    title: 'Contato São Paulo - Warte Polimento Orçamento Grátis Telefone WhatsApp',
    description: 'Entre em contato com a Warte Polimento em São Paulo: (11) 98564-1271. Orçamento grátis para polimento, limpeza, cristalização e restauração de pisos. Atendimento de segunda a sexta das 8h às 18h.',
    keywords: 'contato Warte Polimento, orçamento polimento São Paulo, telefone polimento, WhatsApp polimento',
    canonical: '/contato',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateBreadcrumbSchema([
          { name: 'Início', url: '/' },
          { name: 'Contato', url: '/contato' }
        ]),
        generateFAQSchema([
          {
            question: 'Como funciona o orçamento?',
            answer: 'O orçamento é totalmente gratuito e sem compromisso. Entre em contato conosco e agende uma visita para avaliarmos o serviço necessário.'
          },
          {
            question: 'Qual a área de atendimento?',
            answer: 'Atendemos São Paulo e toda a região metropolitana. Consulte-nos para verificar disponibilidade em sua região.'
          },
          {
            question: 'Quanto tempo leva o serviço?',
            answer: 'O tempo varia de acordo com o tipo de serviço e área a ser trabalhada. Durante o orçamento, informamos o prazo estimado.'
          },
          {
            question: 'Os produtos são seguros?',
            answer: 'Sim! Utilizamos apenas produtos biodegradáveis e seguros para sua família e pets.'
          }
        ]),
        {
          '@type': 'ContactPage',
          name: 'Contato - Warte Polimento',
          description: 'Entre em contato com a Warte Polimento para solicitar orçamento gratuito',
          url: `${import.meta.env.VITE_SITE_URL || 'https://wartepolimento.com.br'}/contato`
        }
      ]
    }
  });

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.telefone || !formData.mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // Criar mensagem para WhatsApp
    const mensagemWhatsApp = `
*Nova Solicitação de Contato*

*Nome:* ${formData.nome}
*Email:* ${formData.email || 'Não informado'}
*Telefone:* ${formData.telefone}
*Serviço de Interesse:* ${formData.servico || 'Não especificado'}

*Mensagem:*
${formData.mensagem}
    `.trim();

    // Codificar mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagemWhatsApp);
    
    // Abrir WhatsApp
    window.open(`https://wa.me/5511985641271?text=${mensagemCodificada}`, '_blank');
    
    // Limpar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      servico: '',
      mensagem: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                  Entre em Contato
                </h1>
                <p className="text-xl text-emerald-100">
                  Estamos prontos para atender você e transformar seus pisos. Solicite um orçamento gratuito!
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Solicite seu Orçamento
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefone/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="(11) 98564-1271"
                      />
                    </div>

                    <div>
                      <label htmlFor="servico" className="block text-sm font-semibold text-gray-700 mb-2">
                        Serviço de Interesse
                      </label>
                      <select
                        id="servico"
                        name="servico"
                        value={formData.servico}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all text-sm cursor-pointer"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="Limpeza Profissional">Limpeza Profissional</option>
                        <option value="Polimento e Cristalização">Polimento e Cristalização</option>
                        <option value="Troca de Rejunte">Troca de Rejunte</option>
                        <option value="Revitalização de Pisos">Revitalização de Pisos</option>
                        <option value="Impermeabilização">Impermeabilização</option>
                        <option value="Restauração de Manchas">Restauração de Manchas</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                        rows={5}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all resize-none text-sm"
                        placeholder="Descreva o serviço que você precisa..."
                      ></textarea>
                      <p className="text-xs text-gray-500 mt-1">
                        Máximo de 500 caracteres ({formData.mensagem.length}/500)
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-whatsapp-fill text-xl"></i>
                      Enviar via WhatsApp
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      * Campos obrigatórios
                    </p>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Informações de Contato
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-full flex-shrink-0">
                          <i className="ri-phone-fill text-xl text-emerald-600"></i>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                          <a href="tel:+5511985641271" className="text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer">
                            (11) 98564-1271
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-full flex-shrink-0">
                          <i className="ri-whatsapp-fill text-xl text-emerald-600"></i>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                          <a href="https://wa.me/5511985641271" className="text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer">
                            (11) 98564-1271
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-full flex-shrink-0">
                          <i className="ri-map-pin-fill text-xl text-emerald-600"></i>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Localização</h3>
                          <p className="text-gray-600">
                            Rua Guilherme Valente Nº 600<br />
                            Jardim Vergueiro - CEP: 05818-320<br />
                            São Paulo - SP
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-full flex-shrink-0">
                          <i className="ri-time-fill text-xl text-emerald-600"></i>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Horário de Atendimento</h3>
                          <p className="text-gray-600">
                            Segunda a Sexta: 8h às 18h<br />
                            Sábado: 8h às 12h
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact Buttons */}
                  <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                    <h3 className="font-bold text-gray-900 mb-4">Contato Rápido</h3>
                    <div className="space-y-3">
                      <a
                        href="https://wa.me/5511985641271"
                        className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        <i className="ri-whatsapp-fill text-xl"></i>
                        Chamar no WhatsApp
                      </a>
                      <a
                        href="tel:+5511985641271"
                        className="w-full inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        <i className="ri-phone-fill text-xl"></i>
                        Ligar Agora
                      </a>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8234567890123!2d-46.7456789!3d-23.6456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50f0c0f0c0c0%3A0x0!2sRua%20Guilherme%20Valente%2C%20600%20-%20Jardim%20Vergueiro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005818-320!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização Warte Polimento - Rua Guilherme Valente Nº 600, Jardim Vergueiro, São Paulo"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Perguntas Frequentes
              </h2>
              <div className="space-y-6">
                {[
                  {
                    question: 'Como funciona o orçamento?',
                    answer: 'O orçamento é totalmente gratuito e sem compromisso. Entre em contato conosco e agende uma visita para avaliarmos o serviço necessário.'
                  },
                  {
                    question: 'Qual a área de atendimento?',
                    answer: 'Atendemos São Paulo e toda a região metropolitana. Consulte-nos para verificar disponibilidade em sua região.'
                  },
                  {
                    question: 'Quanto tempo leva o serviço?',
                    answer: 'O tempo varia de acordo com o tipo de serviço e área a ser trabalhada. Durante o orçamento, informamos o prazo estimado.'
                  },
                  {
                    question: 'Os produtos são seguros?',
                    answer: 'Sim! Utilizamos apenas produtos biodegradáveis e seguros para sua família e pets.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                      <i className="ri-question-line text-emerald-600 mt-1"></i>
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 pl-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Suspense>
  );
};

export default ContatoPage;
