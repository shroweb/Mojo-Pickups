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
    name: "51 P-Bass",
    priceRange: "From £90",
    tagline: "The original single-coil Precision Bass pickup — punchy, defined, and unmistakably vintage.",
    details: [
      "Single coil design",
      "1951 Precision Bass specification",
      "Alnico 5 rod magnets",
      "UK-wound in Ripponden",
      "Vintage-correct bobbin",
    ],
    voicing: "The original Precision Bass pickup before Leo Fender split it into the split-coil design we know today. A single wide coil that produces a punchy, defined bass tone with genuine vintage character — more open and present than the later split-coil, with a slight mid-range emphasis that cuts through a mix.",
    featured: true,
  },
  {
    name: "Split-Coil P-Bass",
    priceRange: "From £95",
    tagline: "The definitive bass pickup — vintage-correct split-coil Precision Bass tone.",
    details: [
      "Split-coil hum-cancelling",
      "Alnico 5 magnets",
      "Vintage-correct windings",
      "Four-string standard spacing",
      "Beeswax potted",
    ],
    voicing: "The sound that underpins more recordings than any other bass pickup in history. Deep, warm, and punchy with natural hum cancellation. Marc's split-coil P-Bass uses vintage-correct windings and Alnico 5 magnets to capture the essential tone of a late-50s Precision — the pickup that defined what bass guitar sounds like.",
  },
];

export default function BassPickups() {
  return (
    <div>
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-bass-header">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/pickups" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Pickups
          </Link>
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-primary uppercase tracking-widest text-xs font-medium mb-4">
              Bass Pickups
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              Bass
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Precision and vintage bass pickups wound to vintage-correct specification. The same obsessive attention to detail that goes into every Mojo guitar pickup — applied to bass.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" data-testid="section-bass-pickups">
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
                    <div className="flex flex-wrap items-start gap-4 mb-4">
                      <h2 className="font-serif text-2xl md:text-3xl font-bold">{pickup.name}</h2>
                      {pickup.featured && (
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium">
                          Most Popular
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
            <p className="font-serif text-xl font-semibold">Looking for a specific bass pickup?</p>
            <p className="text-muted-foreground text-sm mt-1">Marc can discuss winding options and voicings for your instrument.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-medium text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
            Get Advice <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
