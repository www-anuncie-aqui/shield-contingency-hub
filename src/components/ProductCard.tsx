import { ShoppingCart, Shield, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price?: string;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  image?: string;
  onAddToCart: () => void;
  onConsult?: () => void;
}

export const ProductCard = ({
  id,
  title,
  description,
  price,
  badge,
  badgeVariant = "default",
  image,
  onAddToCart,
  onConsult,
}: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,86,255,0.3)]">
      {badge && (
        <Badge
          variant={badgeVariant}
          className="absolute top-4 left-4 z-10 font-bold uppercase text-xs bg-accent text-accent-foreground"
        >
          {badge}
        </Badge>
      )}
      
      <div className="aspect-video relative overflow-hidden bg-secondary/50">
        {image ? (
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <Shield className="w-16 h-16 text-primary/30" />
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{description}</p>

        {price ? (
          <div className="mb-4">
            <span className="text-sm text-muted-foreground">R$</span>
            <span className="text-3xl font-bold text-gradient ml-1">{price}</span>
          </div>
        ) : (
          <div className="mb-4">
            <span className="text-xl font-bold text-accent">Sob Consulta</span>
          </div>
        )}

        <div className="flex gap-2">
          {price ? (
            <Button
              onClick={onAddToCart}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold btn-glow"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Adicionar
            </Button>
          ) : (
            <Button
              onClick={onConsult}
              variant="outline"
              className="flex-1 border-success text-success hover:bg-success hover:text-success-foreground font-semibold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Consultar
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
