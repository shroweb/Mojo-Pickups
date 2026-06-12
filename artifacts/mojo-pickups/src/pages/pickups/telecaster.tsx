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
    name: "'52 Telecaster",
    priceRange: "£90 – £180",
    tagline: "The blueprint Tele. Alnico 3, copper baseplate, non-staggered magnets, vintage wire gauges.",
    details: [
      "Alnico 3, non-staggered magnets",
      "42 AWG bridge / 43 AWG neck",
      "Copper baseplate (bridge)",
      "Vintage correct bobbins",
      "Neck: ~7kΩ / Bridge: ~7.3kΩ",
    ],
    voicing: "The raw, cutting brightness of a 1952 Broadcaster or Nocaster. The copper baseplate on the bridge adds warmth that tempers the snap without killing the twang. Ideal for country, honky-tonk, blues, and vintage rock.",
  },
  {
    name: "'59 Telecaster",
    priceRange: "£90 – £180",
    tagline: "The transitional Tele tone — warmer and more complex than the '52, still authentically vintage.",
    details: [
      "Alnico 5 magnets",
      "Slightly different wind for later-50s voice",
      "Copper baseplate (bridge)",
      "UK-made bobbins and flatwork",
    ],
    voicing: "As Fender refined the Telecaster through the late 50s, the tone evolved — slightly warmer highs, fuller mids, with the neck pickup becoming sweeter and more polished. The '59 captures that transitional moment.",
  },
  {
    name: "Esquire Bridge",
    priceRange: "£90",
    tagline: "The single-pickup original — Alnico 3, copper baseplate, brighter and more aggressive.",
    details: [
      "Alnico 3, non-staggered",
      "43 AWG Plain Enamel wire",
      "Copper baseplate",
      "Bright, biting character",
    ],
    voicing: "The Esquire bridge is the most aggressive Telecaster bridge sound Mojo makes — designed for a guitar that only has one pickup, so it needs to do everything. Bright, punchy, and unmistakably Telecaster.",
  },
];

export default function TelecasterPickups() {
  return (
    <div>
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-tele-header">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/pickups" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors" data-testid="link-back-pickups">
            <ArrowLeft className="w-4 h-4" /> All Pickups
          </Link>
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-primary uppercase tracking-widest text-xs font-medium mb-4">
              Telecaster Pickups
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              Telecaster
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Faithful reproductions of the most iconic Telecaster tones ever recorded — built from blueprints taken from real vintage examples, with UK-made parts and vintage-correct wire.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" data-testid="section-tele-pickups">
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
                    <ul className="space-y-2 mb-6">
                      {pickup.details.map((detail) => (
                        <li key={detail} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors"
                      data-testid={`link-enquire-${i}`}
                    >
                      Enquire <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-card border-t border-white/5" data-testid="section-tele-footer-cta">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-semibold">Custom Telecaster winding?</p>
            <p className="text-muted-foreground text-sm mt-1">Marc will discuss your specific requirements and advise the best specification.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-medium text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-tele-contact">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
