import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, MessageCircle, Mail, Clock, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Suporte = () => {
  const handleWhatsAppSupport = () => {
    // ⚠️ ATENÇÃO: CONFIGURE SEU NÚMERO AQUI!
    const phoneNumber = "5511999999999";
    const message = encodeURIComponent("Olá! Preciso de suporte.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleEmailSupport = () => {
    toast.info("Entre em contato", {
      description: "suporte@shieldcontingencia.com",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">ESTAMOS AQUI PARA AJUDAR</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Central de <span className="text-gradient">Suporte</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa equipe está pronta para resolver suas dúvidas e garantir a melhor experiência
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 border-border bg-card hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">
                    Atendimento rápido e direto via WhatsApp
                  </p>
                  <Button
                    onClick={handleWhatsAppSupport}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Abrir WhatsApp
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">E-mail</h3>
                  <p className="text-muted-foreground mb-4">
                    Envie sua mensagem e retornaremos em breve
                  </p>
                  <Button
                    onClick={handleEmailSupport}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    Ver E-mail
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 border-border bg-card/50">
            <h2 className="text-2xl font-bold mb-6 text-center">Horário de Atendimento</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Segunda a Sexta</h3>
                <p className="text-muted-foreground">9h às 18h</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Sábado</h3>
                <p className="text-muted-foreground">9h às 14h</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                <h3 className="font-bold mb-2">Domingo</h3>
                <p className="text-muted-foreground">Fechado</p>
              </div>
            </div>
          </Card>

          <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 rounded-full bg-primary/20">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Garantia de Satisfação</h3>
                <p className="text-muted-foreground">
                  Todos os produtos possuem garantia de 24 horas. Estamos comprometidos com sua satisfação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default Suporte;
