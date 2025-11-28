import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como funciona a garantia?",
    answer: "Oferecemos garantia de 24 horas em todos os produtos. Se houver qualquer problema com sua compra, basta entrar em contato conosco dentro deste período e faremos a reposição imediata.",
  },
  {
    question: "Qual a diferença entre contas antigas e farmadas?",
    answer: "Contas antigas são perfis reais com histórico de uso genuíno ao longo dos anos. Contas farmadas são perfis que foram preparados especificamente para uso profissional, com 1 ano de idade e sem histórico anterior.",
  },
  {
    question: "Como usar proxy?",
    answer: "Proxies residenciais garantem que sua conexão seja vista como legítima. Fornecemos instruções completas de configuração e suporte técnico para ajudá-lo a configurar corretamente.",
  },
  {
    question: "O que é uma BM (Business Manager)?",
    answer: "Business Manager é a plataforma do Facebook para gerenciar anúncios profissionalmente. Oferecemos BMs com diferentes limites de gastos diários já liberados.",
  },
  {
    question: "Como recebo meus produtos?",
    answer: "Todos os produtos são entregues digitalmente, imediatamente após a confirmação do pagamento. Você receberá as credenciais e instruções por e-mail ou WhatsApp.",
  },
  {
    question: "Vocês oferecem suporte?",
    answer: "Sim! Oferecemos suporte completo 24/7 via WhatsApp e Telegram para tirar dúvidas e auxiliar com qualquer questão.",
  },
  {
    question: "Os produtos são seguros?",
    answer: "Absolutamente. Trabalhamos apenas com contas autênticas e verificadas. Todas passam por rigoroso controle de qualidade antes da entrega.",
  },
  {
    question: "Posso comprar em quantidade?",
    answer: "Sim! Oferecemos descontos especiais para compras em quantidade. Entre em contato via WhatsApp para condições especiais.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Dúvidas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre nossos produtos e serviços
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border bg-card rounded-lg px-6 hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
