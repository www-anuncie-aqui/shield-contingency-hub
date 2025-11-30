import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // ⚠️ ATENÇÃO: CONFIGURE SEU NÚMERO AQUI!
    // Formato: código do país (55) + DDD + número (sem espaços, traços ou parênteses)
    // Exemplo: "5511987654321" para (11) 98765-4321
    const phoneNumber = "5511999999999"; // ⚠️ SUBSTITUA PELO SEU NÚMERO REAL!
    
    const message = encodeURIComponent("Olá! Vim do site Shield Contingência e gostaria de mais informações.");
    console.log("📱 Abrindo WhatsApp:", `https://wa.me/${phoneNumber}`);
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
