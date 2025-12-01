import { ShoppingCart, Shield } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { CartDrawer } from "./CartDrawer";

export const Navbar = () => {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/#produtos", label: "Produtos" },
    { to: "/faq", label: "FAQ" },
    { to: "/suporte", label: "Suporte" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold hidden sm:inline">Shield Contingência</span>
            </NavLink>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  activeClassName="text-foreground font-semibold"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Cart Button */}
            <Button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Carrinho</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-around pb-3 border-t border-border/50 mt-2 pt-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors"
                activeClassName="text-primary font-bold"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
};
