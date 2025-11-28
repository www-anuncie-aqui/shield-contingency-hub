import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Lock, CheckCircle2, Star, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const handleBuy = (productName: string) => {
    toast.success(`Redirecionando para compra de ${productName}...`, {
      description: "Você será direcionado para o WhatsApp",
    });
    setTimeout(() => {
      window.open("https://wa.me/5511999999999", "_blank");
    }, 1000);
  };

  const handleConsult = (productName: string) => {
    toast.info(`Consultando disponibilidade de ${productName}...`);
    setTimeout(() => {
      window.open("https://wa.me/5511999999999", "_blank");
    }, 1000);
  };

  const accountProducts = [
    {
      title: "Página Antiga",
      description: "Página do Facebook com histórico autêntico",
      price: "30,00",
      badge: "Popular",
    },
    {
      title: "Instagram Antigos e Novos",
      description: "Contas Instagram verificadas conforme necessidade",
      badge: "Sob consulta",
    },
    {
      title: "TikTok",
      description: "Contas TikTok - conferir disponíveis",
      badge: "Consultar",
    },
    {
      title: "Perfil Antigo Real",
      description: "Perfil real com histórico de anos",
      price: "150,00",
      badge: "Premium",
    },
    {
      title: "Proxy",
      description: "Proxy residencial de alta qualidade para múltiplas contas",
      price: "20,00",
    },
    {
      title: "Perfil Farmado (1 ano, vazio)",
      description: "Perfil aquecido por 1 ano, pronto para uso",
      price: "40,00",
    },
    {
      title: "Perfil Verificado com documento",
      description: "Perfil com verificação de identidade completa",
      price: "130,00",
      badge: "Verificado",
    },
  ];

  const bmProducts = [
    {
      title: "BM 300 de Limite",
      description: "Business Manager com limite de R$ 300/dia",
      price: "30,00",
      badge: "Mais Vendido",
    },
    {
      title: "BM 1.3k",
      description: "Business Manager com limite de R$ 1.300/dia",
      price: "300,00",
      badge: "Top",
    },
    {
      title: "BM Ilimitada",
      description: "Business Manager sem limite de gasto diário",
      price: "350,00",
      badge: "Premium",
    },
    {
      title: "BMs com Gastos",
      description: "BMs com histórico de gastos - consultar disponibilidade",
      badge: "Sob Consulta",
    },
  ];

  const gameProducts = [
    {
      title: "Conta Free Fire",
      description: "Conta Free Fire com skins e diamantes",
      price: "80,00",
    },
    {
      title: "Conta Fortnite",
      description: "Conta Fortnite com skins exclusivas",
      price: "120,00",
    },
    {
      title: "GTA V Social Club",
      description: "Conta GTA V completa com alto nível",
      price: "150,00",
    },
    {
      title: "Call of Duty Mobile",
      description: "Conta COD Mobile com armas raras",
      price: "90,00",
    },
    {
      title: "Steam Nível Alto",
      description: "Conta Steam com nível elevado e jogos",
      price: "200,00",
      badge: "Premium",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">LOJA OFICIAL DE CONTINGÊNCIA</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Shield Contingência
            <br />
            <span className="text-gradient">Segurança & Privacidade</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A melhor estrutura para quem precisa de contas confiáveis, perfis antigos, BMs e muito mais.
            <span className="block mt-2 font-semibold text-foreground">
              Qualidade máxima com entrega imediata.
            </span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl"
              onClick={() => handleBuy("produto")}
            >
              <Zap className="w-5 h-5 mr-2" />
              Comprar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg px-8 py-6"
              onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
            >
              Falar no WhatsApp
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Zap, text: "Entrega Imediata" },
              { icon: Lock, text: "100% Seguro" },
              { icon: CheckCircle2, text: "Garantia 24h" },
              { icon: Star, text: "Qualidade Premium" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all"
              >
                <item.icon className="w-8 h-8 text-primary" />
                <span className="text-sm font-semibold text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Sections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Accounts & Profiles */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">VARIEDADE DE PRODUTOS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Escolha entre nossa seleção premium de{" "}
                <span className="text-gradient">contas, perfis,</span>
                <br />
                Business Managers e muito mais.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Button variant="outline" className="border-primary text-primary">
                🏠 Todas
              </Button>
              <Button variant="outline">👤 Contas & Perfis</Button>
              <Button variant="outline">💼 Business Manager</Button>
              <Button variant="outline">🎮 Jogos</Button>
            </div>

            <h3 className="text-3xl font-bold mb-8 text-center">
              Contas & Perfis <span className="text-primary">Profissionais</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
              {accountProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  badge={product.badge}
                  onBuy={() => handleBuy(product.title)}
                  onConsult={() => handleConsult(product.title)}
                />
              ))}
            </div>

            <h3 className="text-3xl font-bold mb-8 text-center">
              Business Manager <span className="text-primary">(BM)</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
              {bmProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  badge={product.badge}
                  onBuy={() => handleBuy(product.title)}
                  onConsult={() => handleConsult(product.title)}
                />
              ))}
            </div>

            <h3 className="text-3xl font-bold mb-8 text-center">
              Contas de <span className="text-primary">Jogos</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gameProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  badge={product.badge}
                  onBuy={() => handleBuy(product.title)}
                  onConsult={() => handleConsult(product.title)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Shield Contingência</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Produtos digitais entregues imediatamente após confirmação do pagamento
          </p>
          <div className="flex gap-4 justify-center items-center mb-6">
            <Lock className="w-5 h-5 text-primary" />
            <CheckCircle2 className="w-5 h-5 text-success" />
            <Zap className="w-5 h-5 text-accent" />
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Shield Contingência. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
