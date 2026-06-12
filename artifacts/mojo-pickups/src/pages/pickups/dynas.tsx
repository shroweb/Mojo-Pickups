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

const products = getCategoryProducts("dynas");

export default function DynasPickups() {
  return (
    <div>
      <section className="py-28 md:py-36 bg-card border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/pickups" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Pickups
          </Link>
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-gold uppercase tracking-widest text-xs font-medium mb-4 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-gold" />Dyna Sonic Pickups
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              Dyna Sonic
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              The DeArmond-style Dyna Sonic — individually adjustable Alnico poles, bright and jangly, with a character that sits entirely outside the Fender or Gibson world. Open, clear, and completely addictive.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <ProductGrid products={products} category="dynas" />
        </div>
      </section>

      <section className="py-12 bg-card border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-semibold">Questions about Dyna Sonic compatibility?</p>
            <p className="text-muted-foreground text-sm mt-1">Email Marc with your guitar model and routing dimensions.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-medium text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
            Get Advice <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
