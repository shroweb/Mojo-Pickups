import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const pickups = [
  {
    name: "50s Stratocaster",
    priceRange: "£75 – £240",
    tagline: "The glassy, warm chime of a pre-CBS Strat. Flush Alnico 3 poles and Heavy Formvar wire.",
    details: [
      "Alnico 3, flush pole magnets",
      "42 AWG Heavy Formvar wire (matched to pre-CBS colour)",
      "Punched flatwork — not laser-cut",
      "Hand-rounded bobbin edges, nitro-dipped",
      "Black Bee wax pot",
      "Typical resistance: N 5.4kΩ / M 5.6kΩ / B 6.0kΩ",
    ],
    voicing: "Soft highs, warm mids, smooth bottom end. Blues, roots rock, vintage country. Less aggressive than 60s pickups — the pickup that taught a generation to play.",
  },
  {
    name: "60s Stratocaster",
    priceRange: "£75 – £225",
    tagline: "Punchier, tighter, brighter — the Strat sound of the early-60s black-bottom era.",
    details: [
      "Alnico 5, bevelled magnets (0.187″, bevelled in-house)",
      "42 AWG Heavy Formvar wire",
      "Punched flatwork, hand-rounded edges",
      "Nitrocellulose lacquer dip",
      "Lightly wax-potted",
      "Typical resistance: N 5.6kΩ / M 5.8kΩ / B 6.2kΩ",
    ],
    voicing: "Punchier attack, faster response, tighter bass, brighter highs, slight mid-scoop. Perfect for soul, surf, and early rock and roll.",
  },
  {
    name: "Mojo Special Stratocaster",
    priceRange: "£75 – £225",
    tagline: "The best-selling Mojo Strat set. Early-60s voiced neck and middle, Vintage Hot bridge.",
    details: [
      "Early-60s voiced neck and middle",
      "Vintage Hot overwound bridge (more mid-range authority)",
      "Alnico 5 bevelled magnets",
      "42 AWG Heavy Formvar wire",
      "Punched flatwork, nitro-dipped",
      "Beeswax and paraffin potted",
    ],
    voicing: "Captures the quintessential early-60s black-bottom soul while adding authority in the bridge. The Mojo Special is the most versatile set in the range — and the most popular for good reason.",
    featured: true,
  },
  {
    name: "CuNiFe Adjustable Stratocaster",
    priceRange: "£75 – £225",
    tagline: "The hi-fi magic of 70s CuNiFe magnets in a vintage-correct Strat format.",
    details: [
      "Copper-Nickel-Iron (CuNiFe) magnets",
      "Fully adjustable pole pieces",
      "Wide frequency range and percussive snap",
      "42 AWG wire",
      "Full scatter-wind",
    ],
    voicing: "CuNiFe offers a unique harmonic depth that Alnico simply cannot replicate — percussive snap, incredible frequency range, and a three-dimensional quality that players describe as hi-fi. Adjustable poles give complete string-to-string balance.",
  },
  {
    name: "Broadcaster Bridge (Strat size)",
    priceRange: "£75",
    tagline: "A Broadcaster-voiced bridge in a Strat form factor — magnetic baseplate, Alnico 3.",
    details: [
      "Alnico 3, non-staggered",
      "43 AWG Plain Enamel wire",
      "Magnetic steel baseplate",
      "Vintage spaced",
    ],
    voicing: "The twang and clarity of a Broadcaster bridge, but in a Strat shell. Used as a Strat bridge or a Tele-Strat hybrid setup. The baseplate adds warmth and sustain that plain Strat bridges lack.",
  },
];

export default function StratocasterPickups() {
  return (
    <div>
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-strat-header">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/pickups" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors" data-testid="link-back-pickups">
            <ArrowLeft className="w-4 h-4" /> All Pickups
          </Link>
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-primary uppercase tracking-widest text-xs font-medium mb-4">
              Stratocaster Pickups
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

      {/* Wire Detail */}
      <section className="py-12 bg-background border-b border-white/5" data-testid="section-strat-wire">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card border border-white/5">
              <h3 className="font-serif text-lg font-semibold mb-3 text-primary">Pre-1964 — Heavy Formvar</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Thicker insulation creates more space between the copper winds, resulting in the glassy, airy 50s chime. Marc has the wire colour-matched to original pre-CBS Fender wire. Used on 50s and early-60s voiced pickups.
              </p>
            </div>
            <div className="p-6 bg-card border border-white/5">
              <h3 className="font-serif text-lg font-semibold mb-3 text-primary">Post-1964 — Plain Enamel</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Thinner insulation allows more turns in the same coil space. The result is a punchier, slightly grittier mid-range — the sound of the grey-bottom era. Used on late-60s and hotter-voiced pickups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pickup List */}
      <section className="py-16" data-testid="section-strat-pickups">
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
                data-testid={`section-pickup-${i}`}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex flex-wrap items-start gap-4 mb-4">
                      <h2 className="font-serif text-2xl md:text-3xl font-bold">{pickup.name}</h2>
                      {pickup.featured && (
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium">
                          Best Seller
                        </span>
                      )}
                    </div>
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
                        data-testid={`link-enquire-${i}`}
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

      <section className="py-12 bg-card border-t border-white/5" data-testid="section-strat-footer-cta">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-semibold">Not sure which Strat pickup is right for you?</p>
            <p className="text-muted-foreground text-sm mt-1">Email Marc and describe what you play. He'll tell you honestly.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-medium text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-strat-contact">
            Get Advice <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
