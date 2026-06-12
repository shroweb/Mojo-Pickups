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

const products = getCategoryProducts("cunife");

export default function CuNiFePickups() {
  return (
    <div>
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-cunife-header">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/pickups" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Pickups
          </Link>
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-gold uppercase tracking-widest text-xs font-medium mb-4 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-gold" />CuNiFe Wide Range
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              CuNiFe Wide Range
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Seth Lover designed the Wide Range humbucker to cover a broader frequency spectrum than any standard humbucker. Mojo builds it the right way — with genuine CuNiFe alloy magnets, not the cost-cut substitute Fender eventually used.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CuNiFe info strip */}
      <section className="border-b border-white/5 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 divide-x divide-white/5">
            <div className="p-8">
              <h3 className="font-serif text-base font-semibold mb-2 text-primary">What is CuNiFe?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Copper-Nickel-Iron is a magnet alloy with lower flux density than Alnico but a distinctive percussive snap and wide, detailed frequency response. Seth Lover specified it for the Wide Range humbucker in 1971. Most modern reproductions use Alnico or ceramic and miss the point entirely.</p>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-base font-semibold mb-2 text-primary">Compatibility</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">The Wide Range humbucker fits Telecaster Thinline (72 reissue), Telecaster Deluxe, and similar routing. The adjustable CuNiFe Strat fits any standard Strat route. Email Marc if you're unsure which fits your guitar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-cunife-pickups">
        <div className="container mx-auto px-4 md:px-6">
          <ProductGrid products={products} category="cunife" />
        </div>
      </section>

      <section className="py-12 bg-card border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-semibold">Not sure if CuNiFe is right for your guitar?</p>
            <p className="text-muted-foreground text-sm mt-1">Email Marc and describe your setup. He'll tell you honestly.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-medium text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
            Get Advice <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
