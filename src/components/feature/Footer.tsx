import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: 'Limpeza Profissional', path: '/servicos/limpeza-profissional' },
    { name: 'Polimento e Cristalização', path: '/servicos/polimento-cristalizacao' },
    { name: 'Troca de Rejunte', path: '/servicos/troca-rejunte' },
    { name: 'Revitalização de Pisos', path: '/servicos/revitalizacao' },
    { name: 'Impermeabilização', path: '/servicos/impermeabilizacao' },
  ];

  const menuLinks = [
    { name: 'Fale Conosco', path: '/contato' },
    { name: 'Política de Privacidade', path: '/politica-privacidade' },
    { name: 'Sobre a Empresa', path: '/quem-somos' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="https://static.readdy.ai/image/e0c5e77842c26e0cfc24a07e507d4548/3f31564d42cf84692ecc3116573b3fe4.png" 
                alt="Warte Polimento Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Mais de 24 anos de experiência em limpeza profissional, polimento, cristalização e recuperação de todos os tipos de pisos.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.path} className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-fill text-emerald-400 mt-1"></i>
                <span className="text-gray-400">
                  Rua Guilherme Valente Nº 600<br />
                  Jardim Vergueiro - CEP: 05818-320<br />
                  São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-fill text-emerald-400"></i>
                <a href="tel:+5511985641271" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  (11) 98564-1271
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-whatsapp-fill text-emerald-400"></i>
                <a href="https://wa.me/5511985641271" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-fill text-emerald-400"></i>
                <a href="mailto:contato@wartepolimento.com.br" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  contato@wartepolimento.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2025 Warte Polimento. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://criarsitedivulgar.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 text-sm hover:text-emerald-400 transition-colors"
            >
              Desenvolvido por: Criar Site Divulgar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
