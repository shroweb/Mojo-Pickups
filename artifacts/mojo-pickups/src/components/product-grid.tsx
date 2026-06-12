import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

interface Props {
  products: Product[];
  category: string;
}

export function ProductGrid({ products, category }: Props) {
  if (products.length === 0) return null;

  return (
    <div className="grid sm:grid-cols-2 gap-px bg-border">
      {products.map((product, i) => (
        <motion.div
          key={product.slug}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-background"
        >
          <Link href={`/pickups/${category}/${product.slug}`} className="block overflow-hidden aspect-[4/3] group">
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </Link>

          <div className="p-8">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="font-serif text-2xl font-bold">{product.name}</h2>
              {product.featured && (
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium flex-shrink-0">
                  Best Seller
                </span>
              )}
            </div>
            <p className="font-serif text-xl font-bold text-primary mb-4">
              {product.price}{" "}
              <span className="text-xs font-normal text-muted-foreground">ex-VAT</span>
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {product.description[0]}
            </p>
            <ul className="space-y-1.5 mb-8">
              {product.specs.slice(0, 4).map((spec) => (
                <li key={spec} className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {spec}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 flex-wrap">
              <Link
                href={`/pickups/${category}/${product.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors"
              >
                View Product <ArrowRight className="w-3 h-3" />
              </Link>
              <a
                href={product.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-foreground text-sm font-medium uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
              >
                Buy Now <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
