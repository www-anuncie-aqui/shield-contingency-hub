import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { toast } from "sonner";

export const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      return;
    }

    // ⚠️ ATENÇÃO: CONFIGURE SEU NÚMERO AQUI!
    // Formato: código do país (55) + DDD + número (sem espaços, traços ou parênteses)
    // Exemplo: "5511987654321" para (11) 98765-4321
    const phoneNumber = "5511999999999"; // ⚠️ SUBSTITUA PELO SEU NÚMERO REAL!
    
    // Verifica se o número ainda é o placeholder
    if (phoneNumber === "5511999999999") {
      toast.error("⚠️ Número do WhatsApp não configurado!", {
        description: "Configure seu número real no arquivo src/components/CartDrawer.tsx na linha 39",
        duration: 5000,
      });
      console.error("❌ ERRO: Configure o número do WhatsApp em src/components/CartDrawer.tsx");
      return;
    }

    const message = items
      .map(
        (item) =>
          `• ${item.title} - ${item.quantity}x - R$ ${(
            parseFloat(item.price.replace(",", ".")) * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");

    const whatsappMessage = encodeURIComponent(
      `🛒 *Pedido Shield Contingência*\n\n${message}\n\n💰 *Total: R$ ${totalPrice.toFixed(
        2
      )}*\n\nGostaria de finalizar esta compra!`
    );

    console.log("📱 Abrindo WhatsApp:", `https://wa.me/${phoneNumber}`);
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
    
    clearCart();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative border-primary/50 hover:border-primary hover:bg-primary/10"
        >
          <ShoppingCart className="h-5 w-5 text-primary" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground font-bold text-xs">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Meu Carrinho
          </SheetTitle>
          <SheetDescription>
            {totalItems > 0
              ? `${totalItems} ${totalItems === 1 ? "produto" : "produtos"} no carrinho`
              : "Seu carrinho está vazio"}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12 mt-6">
            <ShoppingCart className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <p className="text-lg text-muted-foreground mb-2">Carrinho vazio</p>
            <p className="text-sm text-muted-foreground">
              Adicione produtos para começar sua compra
            </p>
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100vh-8rem)] mt-6">
            <div className="flex-1 overflow-auto space-y-4 pr-2 pb-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-primary font-bold">
                      R$ {parseFloat(item.price.replace(",", ".")).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-destructive hover:text-destructive"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>

                    <div className="flex items-center gap-1 border border-border rounded-md">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 pb-2 space-y-4 bg-background">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-gradient text-2xl">
                  R$ {totalPrice.toFixed(2)}
                </span>
              </div>

              <Button
                onClick={handleCheckout}
                className="w-full bg-success hover:bg-success/90 text-success-foreground font-bold text-lg py-6 shadow-lg"
              >
                Finalizar Compra no WhatsApp
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
