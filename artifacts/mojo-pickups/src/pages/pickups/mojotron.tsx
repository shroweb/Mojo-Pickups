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
    name: "Mojotron Standard",
    priceRange: "From £90",
    tagline: "Filtertron-style hum-cancelling pickup — the chimey, spanky clarity of a vintage Gretsch.",
    details: [
      "Filtertron-style dual coil",
      "Gretsch-compatible dimensions",
      "Alnico magnets",
      "Hum-cancelling",
      "Adjustable pole pieces",
      "Various heights available",
    ],
    voicing: "The Filtertron is one of the most distinctive pickup designs in electric guitar history — a hum-cancelling pickup that doesn't sound like a humbucker. Clear, chimey, with a percussive twang and a tight low end that sits perfectly in a band mix. The Mojotron is Marc's interpretation of the classic Filtertron voicing.",
  },
  {
    name: "Mojotron High-Wind",
    priceRange: "From £95",
    tagline: "A warmer, fuller Filtertron — more output, more body, without losing the chime.",
    details: [
      "Higher-wind coils for more output",
      "Fuller, warmer low-mid response",
      "Filtertron-compatible dimensions",
      "Alnico magnets",
      "Hum-cancelling",
    ],
    voicing: "If the standard Mojotron is the clean Gretsch tone, the High-Wind version pushes things a little harder. More body, more sustain, and a mid-range warmth that suits rock and blues players who want the Filtertron character but with a bit more grunt.",
  },
];

export default function MojotronPickups() {
  return (
    <div>
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-mojotron-header">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/pickups" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Pickups
          </Link>
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-primary uppercase tracking-widest text-xs font-medium mb-4">
              Mojotron Pickups
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              Mojotron
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Filtertron-style pickups made to vintage specification. Chimey, twangy, hum-cancelling — the unmistakable sound of a Gretsch, built the way it should be.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" data-testid="section-mojotron-pickups">
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
            <p className="font-serif text-xl font-semibold">Fitting a Mojotron to your guitar?</p>
            <p className="text-muted-foreground text-sm mt-1">Marc can advise on routing, height, and spacing for your specific instrument.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-medium text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
            Get Advice <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
