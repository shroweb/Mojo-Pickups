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
    name: "Vintage PAF Humbucker",
    priceRange: "£125 – £250 per pickup",
    tagline: "The sound that defined rock and roll — true mismatched coils, wound the way Gibson originally did it.",
    details: [
      "Wound on automatic winder (as original Gibson process)",
      "True mismatched coils (authentic PAF character)",
      "Correct turns per layer",
      "Alnico 2 or Alnico 5 available",
      "Un-potted by default (potted on request)",
      "Double-cream, nickel, or zebra covers available",
    ],
    voicing: "The Vintage PAF has that elusive warmth and bloom that defines the sound of a late-50s Les Paul. The secret is in the mismatched coils — Marc winds them with the same controlled inconsistency that came off the original Gibson machines. Hum-cancelling but characterful, with a three-dimensional openness that modern humbuckers often lack.",
  },
  {
    name: "Firebird Humbucker",
    priceRange: "£125 – £200 per pickup",
    tagline: "The mini-humbucker bark and jangle of a 1960s Gibson Firebird.",
    details: [
      "Mini-humbucker format",
      "Correct Firebird specification",
      "Alnico magnets",
      "Wound to vintage spec",
      "Available for Firebird or humbucker-sized rings",
    ],
    voicing: "Brighter and more articulate than a full-size PAF, the Firebird humbucker has a distinctive bark and single-coil-like clarity that standard humbuckers cannot replicate. Used famously by Johnny Winter and Allen Collins.",
  },
];

export default function HumbuckerPickups() {
  return (
    <div>
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-hb-header">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/pickups" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors" data-testid="link-back-pickups">
            <ArrowLeft className="w-4 h-4" /> All Pickups
          </Link>
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-primary uppercase tracking-widest text-xs font-medium mb-4">
              Humbucker / PAF Pickups
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              Humbucker
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              To recreate the real vintage PAF sound, you need to wind the pickup the way Gibson originally did it — with correct turns per layer and true mismatched coils. That is exactly what Marc does.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Auto-Wound */}
      <section className="py-12 border-b border-white/5 bg-muted" data-testid="section-hb-winding-note">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h2 className="font-serif text-xl font-semibold mb-3">Why are PAF pickups wound on an automatic winder?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Most Mojo pickups are hand-wound. The exception is vintage-style Gibson humbuckers — and there is a specific technical reason. The authentic PAF character comes from the correct turns-per-layer ratio and the intentional mismatch between the two coils. This requires an automatic winder to achieve consistently. It is not a shortcut — it is the method Gibson used in Kalamazoo in the late 1950s. Hand-winding a PAF would produce a different and less authentic result.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-hb-pickups">
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

      <section className="py-12 bg-card border-t border-white/5" data-testid="section-hb-footer-cta">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-semibold">Custom humbucker specification?</p>
            <p className="text-muted-foreground text-sm mt-1">Marc can advise on Alnico grade, cover options, wiring, and potting.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-medium text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-hb-contact">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
