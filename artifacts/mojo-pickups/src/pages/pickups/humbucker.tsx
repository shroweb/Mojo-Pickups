import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCategoryProducts } from "@/data/products";
import { ProductGrid } from "@/components/product-grid";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const products = getCategoryProducts("humbucker");

export default function HumbuckerPickups() {
  return (
    <div>
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-hb-header">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/pickups" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors" data-testid="link-back-pickups">
            <ArrowLeft className="w-4 h-4" /> All Pickups
          </Link>
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-gold uppercase tracking-widest text-xs font-medium mb-4 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-gold" />Humbucker / PAF Pickups
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              Humbucker
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              To recreate the real vintage PAF sound, you need to wind the pickup the way Gibson originally did it — with correct turns per layer and true mismatched coils. That is exactly what Marc does.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Auto-Wound */}
      <section className="border-b border-white/5 bg-background" data-testid="section-hb-winding-note">
        <div className="container mx-auto px-4 md:px-6 p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="font-serif text-xl font-semibold mb-3 text-primary">Why are PAF pickups wound on an automatic winder?</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Most Mojo pickups are hand-wound. The exception is vintage-style Gibson humbuckers — and there is a specific technical reason. The authentic PAF character comes from the correct turns-per-layer ratio and the intentional mismatch between the two coils. This requires an automatic winder to achieve consistently. It is not a shortcut — it is the method Gibson used in Kalamazoo in the late 1950s.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-hb-pickups">
        <div className="container mx-auto px-4 md:px-6">
          <ProductGrid products={products} category="humbucker" />
        </div>
      </section>

      <section className="py-12 bg-card border-t border-white/5" data-testid="section-hb-footer-cta">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-semibold">Custom humbucker specification?</p>
            <p className="text-muted-foreground text-sm mt-1">Marc can advise on Alnico grade, cover options, wiring, and potting.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-medium text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-hb-contact">
            Get Advice <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
