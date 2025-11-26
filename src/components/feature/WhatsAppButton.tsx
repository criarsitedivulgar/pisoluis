import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    "Qualidade garantida há mais de 24 anos! 🏆",
    "Orçamento grátis e sem compromisso! 💰",
    "Especialistas em todos os tipos de piso! ✨"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Message Bubble */}
      <div className="bg-white shadow-lg rounded-lg px-4 py-3 max-w-xs animate-fade-in">
        <p className="text-sm text-gray-800 font-medium">{messages[currentMessage]}</p>
      </div>
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5511985641271?text=Olá! Gostaria de solicitar um orçamento."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 cursor-pointer"
        aria-label="Contato via WhatsApp"
      >
        <i className="ri-whatsapp-fill text-3xl"></i>
      </a>
    </div>
  );
};

export default WhatsAppButton;
