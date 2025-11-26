import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import React Icons if using the library
// import 'remixicon/fonts/remixicon.css';

interface MenuItem {
  name: string;
  path: string;
  submenu?: MenuItem[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Quem Somos', path: '/quem-somos' },
    {
      name: 'Serviços',
      path: '/servicos',
      submenu: [
        { name: 'Limpeza Profissional', path: '/servicos/limpeza-profissional' },
        { name: 'Polimento e Cristalização', path: '/servicos/polimento-cristalizacao' },
        { name: 'Troca de Rejunte', path: '/servicos/troca-rejunte' },
        { name: 'Revitalização de Pisos', path: '/servicos/revitalizacao' },
        { name: 'Impermeabilização', path: '/servicos/impermeabilizacao' },
      ],
    },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Contato', path: '/contato' },
  ];

  // Cleanup dropdown state on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      setActiveDropdown(null);
    };
  }, []);

  // Check if a route is active
  const isActive = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleMenuToggle = () => {
    try {
      setIsMenuOpen(prev => !prev);
      // Close dropdown when closing mobile menu
      if (isMenuOpen) {
        setActiveDropdown(null);
      }
    } catch (error) {
      console.error('Error toggling menu:', error);
    }
  };

  const handleMenuItemClick = () => {
    try {
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error handling menu click:', error);
    }
  };

  const handleSubmenuClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <p className="hidden md:block">Mais de 24 anos de experiência em limpeza profissional</p>
          <div className="flex items-center gap-4">
            <a 
              href="tel:+5511985641271" 
              className="flex items-center gap-2 hover:text-emerald-200 transition-colors"
              aria-label="Telefone"
            >
              <i className="ri-phone-fill" aria-hidden="true"></i>
              <span>(11) 98564-1271</span>
            </a>
            <a 
              href="https://wa.me/5511985641271" 
              className="flex items-center gap-2 hover:text-emerald-200 transition-colors"
              aria-label="WhatsApp"
            >
              <i className="ri-whatsapp-fill" aria-hidden="true"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-emerald-600"
            aria-label="Warte Polimento - Início"
          >
            Warte Polimento
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 font-medium transition-colors hover:text-emerald-600 ${
                    isActive(item.path) ? 'text-emerald-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
                  )}
                </Link>
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[220px] border border-gray-100">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/5511985641271"
            className="hidden lg:flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors whitespace-nowrap"
            aria-label="Solicitar orçamento gratuito pelo WhatsApp"
          >
            <i className="ri-whatsapp-fill" aria-hidden="true"></i>
            Orçamento Grátis
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            <i 
              className={`text-2xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`} 
              aria-hidden="true"
            ></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            {menuItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  onClick={handleMenuItemClick}
                  className="block py-3 text-gray-700 font-medium hover:text-emerald-600"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={handleSubmenuClick}
                        className="block py-2 text-gray-600 hover:text-emerald-600"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://wa.me/5511985641271"
              className="mt-4 flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold whitespace-nowrap"
              aria-label="Solicitar orçamento gratuito pelo WhatsApp"
            >
              <i className="ri-whatsapp-fill" aria-hidden="true"></i>
              Orçamento Grátis
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
