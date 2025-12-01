import { Navbar } from "@/components/Navbar";
import { FAQSection } from "@/components/FAQSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Shield } from "lucide-react";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">PERGUNTAS FREQUENTES</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tire suas <span className="text-gradient">dúvidas</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Encontre respostas para as perguntas mais comuns sobre nossos produtos e serviços
            </p>
          </div>

          <FAQSection />
        </div>
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default FAQ;
