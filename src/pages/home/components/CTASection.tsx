const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full">
                <i className="ri-map-pin-fill text-3xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Nossa Localização</h3>
                <p className="text-emerald-100">Atendemos São Paulo e região</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-2xl mt-1"></i>
                <div>
                  <p className="font-semibold">Endereço:</p>
                  <p className="text-emerald-100">
                    Rua Guilherme Valente Nº 600<br />
                    Jardim Vergueiro - CEP: 05818-320<br />
                    São Paulo - SP
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-phone-fill text-2xl"></i>
                <div>
                  <p className="font-semibold">Telefone:</p>
                  <a href="tel:+5511985641271" className="text-emerald-100 hover:text-white transition-colors">
                    (11) 98564-1271
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-mail-fill text-2xl"></i>
                <div>
                  <p className="font-semibold">E-mail:</p>
                  <a href="mailto:contato@wartepolimento.com.br" className="text-emerald-100 hover:text-white transition-colors">
                    contato@wartepolimento.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-time-fill text-2xl"></i>
                <div>
                  <p className="font-semibold">Horário de Atendimento:</p>
                  <p className="text-emerald-100">Segunda a Sábado: 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pronto para Transformar Seus Pisos?
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Entre em contato conosco e solicite um orçamento sem compromisso. Nossa equipe está pronta para atender você!
            </p>
            <div className="space-y-4">
              <a
                href="https://wa.me/5511985641271?text=Olá! Gostaria de solicitar um orçamento para serviços de polimento e limpeza."
                className="flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-fill text-2xl"></i>
                Fale pelo WhatsApp
              </a>
              <a
                href="tel:+5511985641271"
                className="flex items-center justify-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-fill text-2xl"></i>
                Ligar Agora
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600">24+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">2000+</div>
                <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">100%</div>
                <div className="text-sm text-gray-600">Qualidade Garantida</div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8234567890123!2d-46.7456789!3d-23.6456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50f0c0f0c0c0%3A0x0!2sRua%20Guilherme%20Valente%2C%20600%20-%20Jardim%20Vergueiro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005818-320!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Warte Polimento - Rua Guilherme Valente Nº 600, Jardim Vergueiro, São Paulo"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CTASection;