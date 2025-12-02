import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FAQSection } from "@/components/FAQSection";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Shield, 
  Zap, 
  Lock, 
  CheckCircle2, 
  Star, 
  TrendingUp,
  FileCheck,
  Camera,
  Music,
  UserCheck,
  Server,
  Clock,
  BadgeCheck,
  DollarSign,
  TrendingUp as ChartUp,
  Infinity,
  PieChart,
  Flame,
  Crosshair,
  Car,
  Target,
  Cloud,
  MessageSquare,
  Twitter,
  Mail,
  Facebook,
  Send
} from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const handleAddToCart = (product: { id: string; title: string; price: string }) => {
    addItem(product);
  };

  const handleConsult = (productName: string) => {
    // ⚠️ ATENÇÃO: CONFIGURE SEU NÚMERO AQUI!
    // Formato: código do país (55) + DDD + número (sem espaços, traços ou parênteses)
    // Exemplo: "5511987654321" para (11) 98765-4321
    const phoneNumber = "5511933471413"; // ⚠️ SUBSTITUA PELO SEU NÚMERO REAL!
    
    toast.info(`Consultando ${productName}...`, {
      description: "Você será direcionado para o WhatsApp",
    });
    setTimeout(() => {
      const message = encodeURIComponent(`Olá! Gostaria de consultar: ${productName}`);
      console.log("📱 Abrindo WhatsApp:", `https://wa.me/${phoneNumber}`);
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    }, 1000);
  };

  const handleWhatsApp = () => {
    // ⚠️ ATENÇÃO: CONFIGURE SEU NÚMERO AQUI!
    // Formato: código do país (55) + DDD + número (sem espaços, traços ou parênteses)
    // Exemplo: "5511987654321" para (11) 98765-4321
    const phoneNumber = "5511933471413"; // ⚠️ SUBSTITUA PELO SEU NÚMERO REAL!
    
    const message = encodeURIComponent("Olá! Vim do site e gostaria de fazer um pedido.");
    console.log("📱 Abrindo WhatsApp:", `https://wa.me/${phoneNumber}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const accountProducts = [
    {
      id: "pagina-antiga",
      title: "Página Antiga",
      description: "Página do Facebook com histórico autêntico",
      price: "30,00",
      badge: "Popular",
      icon: FileCheck,
    },
    {
      id: "instagram",
      title: "Instagram Antigos e Novos",
      description: "Contas Instagram verificadas conforme necessidade",
      icon: Camera,
    },
    {
      id: "tiktok",
      title: "TikTok",
      description: "Contas TikTok - conferir disponíveis",
      icon: Music,
    },
    {
      id: "perfil-antigo",
      title: "Perfil Antigo Real",
      description: "Perfil real com histórico de anos",
      price: "150,00",
      badge: "Premium",
      icon: UserCheck,
    },
    {
      id: "proxy",
      title: "Proxy",
      description: "Proxy residencial de alta qualidade para múltiplas contas",
      price: "20,00",
      icon: Server,
    },
    {
      id: "perfil-farmado",
      title: "Perfil Farmado (1 ano, vazio)",
      description: "Perfil aquecido por 1 ano, pronto para uso",
      price: "40,00",
      icon: Clock,
    },
    {
      id: "perfil-verificado",
      title: "Perfil Verificado com documento",
      description: "Perfil com verificação de identidade completa",
      price: "130,00",
      badge: "Verificado",
      icon: BadgeCheck,
    },
    {
      id: "discord-2021-2022",
      title: "Contas Discord 2021/2022",
      description: "Contas Discord de alta qualidade com email incluso",
      price: "29,99",
      icon: MessageSquare,
    },
    {
      id: "twitter-x-2025",
      title: "Contas Twitter/X Novas 2025",
      description: "Contas Twitter/X de alta qualidade com email e 2FA",
      price: "35,00",
      badge: "Novo",
      icon: Twitter,
    },
    {
      id: "gmail-verificada",
      title: "Conta Gmail Verificada",
      description: "Conta Gmail verificada com acesso imediato",
      price: "10,00",
      icon: Mail,
    },
    {
      id: "facebook-bm-pagina",
      title: "Facebook + BM + Página Criada",
      description: "Pacote completo pronto para anunciar",
      price: "49,99",
      badge: "Completo",
      icon: Facebook,
    },
    {
      id: "telegram-tdata",
      title: "Contas Telegram TDATA Prontas",
      description: "Contas Telegram de alta qualidade prontas para uso",
      price: "19,99",
      icon: Send,
    },
  ];

  const bmProducts = [
    {
      id: "bm-300",
      title: "BM 300 de Limite",
      description: "Business Manager com limite de R$ 300/dia",
      price: "30,00",
      badge: "Mais Vendido",
      icon: DollarSign,
    },
    {
      id: "bm-1300",
      title: "BM 1.3k",
      description: "Business Manager com limite de R$ 1.300/dia",
      price: "300,00",
      badge: "Top",
      icon: ChartUp,
    },
    {
      id: "bm-ilimitada",
      title: "BM Ilimitada",
      description: "Business Manager sem limite de gasto diário",
      price: "350,00",
      badge: "Premium",
      icon: Infinity,
    },
    {
      id: "bm-gastos",
      title: "BMs com Gastos",
      description: "BMs com histórico de gastos - consultar disponibilidade",
      icon: PieChart,
    },
  ];

  const gameProducts = [
    {
      id: "free-fire",
      title: "Conta Free Fire",
      description: "Conta Free Fire com skins e diamantes",
      price: "80,00",
      icon: Flame,
    },
    {
      id: "fortnite",
      title: "Conta Fortnite",
      description: "Conta Fortnite com skins exclusivas",
      price: "120,00",
      icon: Crosshair,
    },
    {
      id: "gta-v",
      title: "GTA V Social Club",
      description: "Conta GTA V completa com alto nível",
      price: "150,00",
      icon: Car,
    },
    {
      id: "cod-mobile",
      title: "Call of Duty Mobile",
      description: "Conta COD Mobile com armas raras",
      price: "90,00",
      icon: Target,
    },
    {
      id: "steam",
      title: "Steam Nível Alto",
      description: "Conta Steam com nível elevado e jogos",
      price: "200,00",
      badge: "Premium",
      icon: Cloud,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
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
  onClick={() => {
    const section = document.getElementById("produtos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  <Zap className="w-5 h-5 mr-2" />
  Comprar Agora
</Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg px-8 py-6"
              onClick={handleWhatsApp}   
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
      <section id="produtos" className="py-20 px-4" className="scroll-mt-32>
        <div className="max-w-7xl mx-auto">
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

            {/* Category Filter Menu */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 sticky top-16 z-40 py-4 bg-background/95 backdrop-blur-md">
              <Button
                variant={activeCategory === "todos" ? "default" : "outline"}
                onClick={() => setActiveCategory("todos")}
                className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all"
              >
                <Shield className="w-4 h-4" />
                Todos
              </Button>
              <Button
                variant={activeCategory === "contas" ? "default" : "outline"}
                onClick={() => setActiveCategory("contas")}
                className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all"
              >
                <BadgeCheck className="w-4 h-4" />
                Contas & Perfis
              </Button>
              <Button
                variant={activeCategory === "bm" ? "default" : "outline"}
                onClick={() => setActiveCategory("bm")}
                className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all"
              >
                <DollarSign className="w-4 h-4" />
                Business Manager
              </Button>
              <Button
                variant={activeCategory === "jogos" ? "default" : "outline"}
                onClick={() => setActiveCategory("jogos")}
                className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all"
              >
                <Target className="w-4 h-4" />
                Jogos
              </Button>
            </div>
            
            {(activeCategory === "todos" || activeCategory === "contas") && (
              <>
                <h3 className="text-3xl font-bold mb-8 text-center">
                  Contas & Perfis <span className="text-primary">Profissionais</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                  {accountProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  badge={product.badge}
                  icon={product.icon}
                  onAddToCart={() =>
                    product.price
                      ? handleAddToCart({
                          id: product.id,
                          title: product.title,
                          price: product.price,
                        })
                      : undefined
                  }
                  onConsult={() => handleConsult(product.title)}
                />
              ))}
                </div>
              </>
            )}

            {(activeCategory === "todos" || activeCategory === "bm") && (
              <>
                <h3 className="text-3xl font-bold mb-8 text-center">
                  Business Manager <span className="text-primary">(BM)</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                  {bmProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  badge={product.badge}
                  icon={product.icon}
                  onAddToCart={() =>
                    product.price
                      ? handleAddToCart({
                          id: product.id,
                          title: product.title,
                          price: product.price,
                        })
                      : undefined
                  }
                  onConsult={() => handleConsult(product.title)}
                />
              ))}
                </div>
              </>
            )}

            {(activeCategory === "todos" || activeCategory === "jogos") && (
              <>
                <h3 className="text-3xl font-bold mb-8 text-center">
                  Contas de <span className="text-primary">Jogos</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {gameProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  badge={product.badge}
                  icon={product.icon}
                  onAddToCart={() =>
                    handleAddToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                    })
                  }
                  onConsult={() => handleConsult(product.title)}
                />
              ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <FAQSection />

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
