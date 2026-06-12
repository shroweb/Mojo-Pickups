import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [location] = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="https://www.mojopickups.co.uk/wp-content/uploads/2018/03/mojoweblogo.png"
              alt="Mojo Pickups"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/about", label: "About" },
              { href: "/pickups", label: "Pickups" },
              { href: "/process", label: "Process" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                  location.startsWith(link.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link 
              href="/pickups" 
              className="inline-flex items-center justify-center h-10 px-6 py-2 text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 border border-primary-border"
            >
              Shop Pickups
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col">
          <nav className="flex flex-col p-6 gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/pickups", label: "Shop Pickups" },
              { href: "/process", label: "The Process" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-2xl font-serif border-b border-white/10 pb-4 ${
                  location === link.href ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-white/5 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <img
                  src="https://www.mojopickups.co.uk/wp-content/uploads/2018/03/mojoweblogo.png"
                  alt="Mojo Pickups"
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Boutique, hand-wound guitar pickups. Made one at a time from scratch in Ripponden, West Yorkshire, UK.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/Mojopickups/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiFacebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.instagram.com/mojopickups" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiInstagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><Link href="/pickups/stratocaster" className="text-muted-foreground hover:text-primary text-sm transition-colors">Stratocaster</Link></li>
                <li><Link href="/pickups/telecaster" className="text-muted-foreground hover:text-primary text-sm transition-colors">Telecaster</Link></li>
                <li><Link href="/pickups/humbucker" className="text-muted-foreground hover:text-primary text-sm transition-colors">Humbucker / PAF</Link></li>
                <li><Link href="/pickups/p90" className="text-muted-foreground hover:text-primary text-sm transition-colors">P90</Link></li>
                <li><Link href="/pickups/gold-foil" className="text-muted-foreground hover:text-primary text-sm transition-colors">Gold Foil</Link></li>
                <li><Link href="/pickups/jazzmaster" className="text-muted-foreground hover:text-primary text-sm transition-colors">Jazzmaster & Jaguar</Link></li>
                <li><Link href="/pickups/cunife" className="text-muted-foreground hover:text-primary text-sm transition-colors">CuNiFe Wide Range</Link></li>
                <li><Link href="/pickups/mojotron" className="text-muted-foreground hover:text-primary text-sm transition-colors">Mojotron</Link></li>
                <li><Link href="/pickups/charlie-christian" className="text-muted-foreground hover:text-primary text-sm transition-colors">Charlie Christian</Link></li>
                <li><Link href="/pickups/dynas" className="text-muted-foreground hover:text-primary text-sm transition-colors">Dynas</Link></li>
                <li><Link href="/pickups/bass" className="text-muted-foreground hover:text-primary text-sm transition-colors">Bass</Link></li>
                <li><Link href="/pickups/lipstick" className="text-muted-foreground hover:text-primary text-sm transition-colors">Lipstick</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Marc</Link></li>
                <li><Link href="/process" className="text-muted-foreground hover:text-primary text-sm transition-colors">The Process</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold mb-6">Information</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>Build time: 40–45 working days</li>
                <li>All pickups made to order</li>
                <li>Prices ex-VAT</li>
                <li><a href="https://boutiqueguitarpickups.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">EU Dealer <ChevronRight className="w-3 h-3"/></a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Mojo Pickups Ltd (No. 08211987). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
