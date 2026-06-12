import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const pickups = [
  {
    name: "CuNiFe Wide Range Humbucker",
    priceRange: "£150 – £260",
    tagline: "Seth Lover's original Wide Range design — built with genuine CuNiFe magnets for Thinline and Deluxe Telecasters.",
    details: [
      "Copper-Nickel-Iron (CuNiFe) alloy magnets",
      "Seth Lover Wide Range specification",
      "Telecaster Thinline & Deluxe compatible",
      "True wide frequency response",
      "UK-wound in Ripponden",
      "Available neck & bridge positions",
    ],
    voicing: "CuNiFe magnets produce a frequency range that Alnico simply cannot replicate. You get crystalline highs, defined mids, and a percussive snap that players often describe as 'hi-fi'. The Wide Range humbucker was designed by Seth Lover (the inventor of the PAF) specifically to cover a broader frequency range than a standard humbucker — Mojo's version uses the real magnet alloy, not the compromise version Fender later produced.",
  },
  {
    name: "CuNiFe Adjustable Stratocaster",
    priceRange: "£75 – £225",
    tagline: "The hi-fi magic of CuNiFe magnets in a vintage-correct Strat format with fully adjustable poles.",
    details: [
      "CuNiFe alloy magnets — fully adjustable",
      "Strat-compatible format",
      "42 AWG wire",
      "Full scatter-wind",
      "Punched flatwork",
      "Complete string-to-string balance",
    ],
    voicing: "CuNiFe in a Strat shell gives you all the vintage character of a classic Stratocaster pickup but with that added harmonic depth and percussive snap unique to copper-nickel-iron magnets. Adjustable poles let you dial in precise string-to-string balance — a detail no flush-pole pickup can offer.",
  },
];

export default function CuNiFePickups() {
  return (
    <div>
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-cunife-header">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/pickups" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Pickups
          </Link>
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-primary uppercase tracking-widest text-xs font-medium mb-4">
              CuNiFe Wide Range
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

      <section className="py-12 bg-background border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card border border-white/5">
              <h3 className="font-serif text-lg font-semibold mb-3 text-primary">What is CuNiFe?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Copper-Nickel-Iron is a magnet alloy with a unique magnetic character — lower flux density than Alnico but a distinctive percussive snap and wide, detailed frequency response. Seth Lover specified it for the Wide Range humbucker in 1971. Most modern reproductions use Alnico or ceramic and miss the point entirely.
              </p>
            </div>
            <div className="p-6 bg-card border border-white/5">
              <h3 className="font-serif text-lg font-semibold mb-3 text-primary">Compatibility</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The Wide Range humbucker is designed for Telecaster Thinline (72 reissue), Telecaster Deluxe, and similar routing. The adjustable CuNiFe Stratocaster fits any standard Strat pickup route. If you are unsure which fits your guitar, email Marc directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-cunife-pickups">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-px bg-border">
            {pickups.map((pickup, i) => (
              <motion.div
                key={pickup.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-background p-8 md:p-12"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">{pickup.name}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{pickup.tagline}</p>
                    <div className="mb-6">
                      <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Tone Character</h4>
                      <p className="text-sm leading-relaxed">{pickup.voicing}</p>
                    </div>
                  </div>
                  <div>
                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Price (ex-VAT)</p>
                      <p className="font-serif text-2xl font-bold text-primary">{pickup.priceRange}</p>
                    </div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Specifications</h4>
                    <ul className="space-y-2">
                      {pickup.details.map((detail) => (
                        <li key={detail} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors"
                      >
                        Enquire <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
