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

const products = getCategoryProducts("stratocaster");

export default function StratocasterPickups() {
  return (
    <div>
      {/* Header */}
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-strat-header">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/pickups" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Pickups
          </Link>
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-gold uppercase tracking-widest text-xs font-medium mb-4 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-gold" />Stratocaster Pickups
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              Stratocaster
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Hand-scatter-wound Strat pickups built to vintage blueprint accuracy. Pre-CBS-correct wire, punched flatwork, and bevelled Alnico magnets — made the way Fender did it in California, sixty years ago.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Wire info strip */}
      <section className="border-b border-white/5 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 divide-x divide-white/5">
            <div className="p-8">
              <h3 className="font-serif text-base font-semibold mb-2 text-primary">Pre-1964 — Heavy Formvar</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Thicker insulation creates more space between winds — the glassy, airy 50s chime. Wire colour-matched to original pre-CBS Fender specification.</p>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-base font-semibold mb-2 text-primary">Post-1964 — Plain Enamel</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Thinner insulation allows more turns — punchier, grittier mid-range. The sound of the grey-bottom era and later CBS-era Strats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16" data-testid="section-strat-products">
        <div className="container mx-auto px-4 md:px-6">
          <ProductGrid products={products} category="stratocaster" />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-card border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-semibold">Not sure which Strat pickup is right for you?</p>
            <p className="text-muted-foreground text-sm mt-1">Email Marc and describe what you play. He'll advise you directly.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-medium text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
            Get Advice <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
