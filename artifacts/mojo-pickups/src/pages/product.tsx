import React from "react";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, ShoppingCart } from "lucide-react";
import { getProduct } from "@/data/products";

const CATEGORY_LABELS: Record<string, string> = {
  stratocaster: "Stratocaster",
  telecaster: "Telecaster",
  humbucker: "Humbucker / PAF",
  p90: "P90",
  "gold-foil": "Gold Foil",
  jazzmaster: "Jazzmaster & Jaguar",
  cunife: "CuNiFe Wide Range",
  mojotron: "Mojotron",
  "charlie-christian": "Charlie Christian",
  dynas: "Dynas",
  bass: "Bass",
  lipstick: "Lipstick",
};

export default function ProductPage() {
  const params = useParams<{ category: string; product: string }>();
  const product = getProduct(params.category, params.product);
  const [activeImg, setActiveImg] = React.useState(0);

  if (!product) {
    return (
      <div className="py-40 text-center">
        <p className="text-muted-foreground mb-6">Product not found.</p>
        <Link href="/pickups" className="text-primary hover:underline text-sm uppercase tracking-wider">
          ← All Pickups
        </Link>
      </div>
    );
  }

  const categoryLabel = CATEGORY_LABELS[params.category] ?? params.category;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-white/5 bg-card">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/pickups" className="hover:text-primary transition-colors">Pickups</Link>
          <span>/</span>
          <Link href={`/pickups/${params.category}`} className="hover:text-primary transition-colors">{categoryLabel}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card aspect-[4/3] overflow-hidden mb-3">
                <img
                  key={activeImg}
                  src={product.images[activeImg]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2 flex-wrap">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`w-16 h-16 overflow-hidden border-2 transition-colors flex-shrink-0 ${
                        activeImg === i ? "border-primary" : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href={`/pickups/${params.category}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> {categoryLabel} Pickups
              </Link>

              <p className="text-gold uppercase tracking-widest text-xs font-medium mb-3 flex items-center gap-2">
                <span className="inline-block w-4 h-px bg-gold" />
                {categoryLabel}
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4">
                {product.name}
              </h1>
              <p className="font-serif text-3xl font-bold text-primary mb-2">{product.price}</p>
              <p className="text-xs text-muted-foreground mb-8">ex-VAT · {product.buildTime ?? "40–45 working days"} build time</p>

              {/* Options */}
              {product.options && product.options.length > 0 && (
                <div className="mb-8 space-y-4 border-y border-white/5 py-6">
                  {product.options.map((opt) => (
                    <div key={opt.name} className="flex items-start gap-4">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground w-28 flex-shrink-0 pt-0.5">{opt.name}</span>
                      <div className="flex flex-wrap gap-2">
                        {opt.values.map((val) => (
                          <span key={val} className="px-3 py-1 border border-white/10 text-xs text-muted-foreground">
                            {val}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Buy Button */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={product.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors rounded-none"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Buy on Mojo Pickups
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-foreground font-medium text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
                >
                  Ask Marc a Question
                </Link>
              </div>

              {/* Specs */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Specifications</h3>
                <ul className="space-y-2">
                  {product.specs.map((spec) => (
                    <li key={spec} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-2" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-card border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl font-bold mb-8">About This Pickup</h2>
            <div className="space-y-5">
              {product.description.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-semibold">Ready to order?</p>
            <p className="text-muted-foreground text-sm mt-1">Select options and buy directly on the Mojo Pickups store.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={product.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors rounded-none"
            >
              Buy Now <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href={`/pickups/${params.category}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-foreground font-medium text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
            >
              More {categoryLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
