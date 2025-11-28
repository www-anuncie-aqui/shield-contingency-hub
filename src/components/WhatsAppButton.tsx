import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // IMPORTANTE: Substitua pelo número real do WhatsApp
    const phoneNumber = "5511999999999"; // Formato: código do país + DDD + número
    const message = encodeURIComponent("Olá! Vim do site Shield Contingência e gostaria de mais informações.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-success hover:bg-success/90 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow p-0"
      aria-label="Fale no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-success-foreground" />
    </Button>
  );
};
