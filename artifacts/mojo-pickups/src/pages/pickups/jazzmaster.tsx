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
    name: "Jazzmaster — Vintage Spec",
    priceRange: "£90 – £240",
    tagline: "Premium Alnico Jazzmaster pickups built to vintage specification — wide, fat, and unmistakably offset.",
    details: [
      "Wide Alnico 5 magnets",
      "Correct vintage aperture",
      "Hand-wound to vintage spec",
      "Full sets available",
      "Available as singles",
    ],
    voicing: "The vintage Jazzmaster pickup has a wide magnetic field that captures a thick, warm, full-bodied tone — darker than a Strat but with a unique floating quality. There is a richness in the low mids and a smooth treble response that makes them exceptionally musical for jazz, indie, and alternative playing.",
  },
  {
    name: "Jaguar — Vintage Spec",
    priceRange: "£90 – £200",
    tagline: "Vintage-correct Jaguar singles — narrower aperture than the Jazzmaster, brighter and more cutting.",
    details: [
      "Alnico 5 magnets",
      "Jaguar-correct shorter aperture",
      "Hand-wound to vintage spec",
      "Full sets available",
      "Vintage Fender spec wire",
    ],
    voicing: "The Jaguar pickup has a narrower aperture than the Jazzmaster, which gives it a brighter, more focused sound with a quicker attack. Still characteristically offset — with that full, warm low end — but with more presence and cut in the upper mids. Excellent for surf, post-punk, and indie rock.",
  },
];

export default function JazzmasterPickups() {
  return (
    <div>
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-jm-header">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/pickups" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors" data-testid="link-back-pickups">
            <ArrowLeft className="w-4 h-4" /> All Pickups
          </Link>
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-primary uppercase tracking-widest text-xs font-medium mb-4">
              Jazzmaster & Jaguar Pickups
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              Jazzmaster<br />&amp; Jaguar
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Premium Alnico offset pickups built to vintage Fender specification. Wide, musical, and full-bodied — made for guitars that deserve more than a generic replacement.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" data-testid="section-jm-pickups">
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

      <section className="py-12 bg-card border-t border-white/5" data-testid="section-jm-footer-cta">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-semibold">Custom offset pickup spec?</p>
            <p className="text-muted-foreground text-sm mt-1">Marc can advise on output, Alnico grade, and vintage voicing options.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-medium text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-jm-contact">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
