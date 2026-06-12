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

const products = getCategoryProducts("p90");

export default function P90Pickups() {
  return (
    <div>
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-p90-header">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/pickups" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors" data-testid="link-back-pickups">
            <ArrowLeft className="w-4 h-4" /> All Pickups
          </Link>
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-gold uppercase tracking-widest text-xs font-medium mb-4 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-gold" />P90 Pickups
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              P90
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Vintage-voiced P90s loaded with Alnico bar magnets, scatter-wound to vintage specification, and potted in beeswax and paraffin. Available in both soapbar and dogear formats.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Format info */}
      <section className="border-b border-white/5 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 divide-x divide-white/5">
            <div className="p-8">
              <h3 className="font-serif text-base font-semibold mb-2 text-primary">Soapbar</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">The standard P90 format. Fits Les Paul, SG, and most Gibson-pattern instruments. Available in 49.2mm or 50mm pole spacing.</p>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-base font-semibold mb-2 text-primary">Dogear</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">The same pickup internals, dogear-mounted. Fits ES-330, ES-125, Casino, and most archtop and semi-hollow instruments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-p90-pickups">
        <div className="container mx-auto px-4 md:px-6">
          <ProductGrid products={products} category="p90" />
        </div>
      </section>

      <section className="py-12 bg-card border-t border-white/5" data-testid="section-p90-footer-cta">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-semibold">Not sure which P90 is right for you?</p>
            <p className="text-muted-foreground text-sm mt-1">Marc can advise on output, Alnico grade, and mounting options for your specific guitar.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-medium text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-p90-contact">
            Get Advice <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
