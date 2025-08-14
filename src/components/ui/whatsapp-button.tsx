import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "123456789"; // Replace with actual phone number
  const message = "Hola! Me interesa conocer más sobre sus pantallas LED y letreros luminosos.";
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
    >
      <MessageCircle size={24} className="group-hover:animate-pulse" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </button>
  );
};