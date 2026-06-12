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
    name: "Guyatone Gold Foil",
    priceRange: "£85 – £160",
    tagline: "The Japanese 60s lo-fi king. Warm, complex, and hauntingly beautiful.",
    details: ["Guyatone specification", "Correct bobbin and cover dimensions", "Alnico magnets", "Lightly wax potted"],
    voicing: "The Guyatone gold foil was the pickup of choice for countless Japanese catalogue guitars of the 1960s — and for good reason. Clear, harmonically rich, slightly compressed, and utterly unlike anything else. A favourite of slide players and experimentalists.",
  },
  {
    name: "DeArmond Gold Foil",
    priceRange: "£100 – £200",
    tagline: "American lo-fi clarity — the sound of countless Harmony and Kay guitars.",
    details: ["DeArmond specification", "Adjustable poles on some variants", "Alnico or ceramic available", "US-voiced character"],
    voicing: "The DeArmond design sits slightly brighter and more aggressive than the Guyatone — clearer, more present, with an almost acoustic transparency. Favoured by blues and surf players for decades.",
  },
  {
    name: "Dynasonic Gold Foil",
    priceRange: "£120 – £240",
    tagline: "The Gretsch Dynasonic — jangle, sparkle, and a three-dimensional open quality.",
    details: ["Dynasonic specification", "Adjustable individual pole pieces", "Alnico magnets", "Correct cover dimensions"],
    voicing: "The Dynasonic is one of the great pickups of the 20th century — used by Chet Atkins, Bo Diddley, and Brian Setzer. Sparkling highs, a scooped mid, and incredible responsiveness. More complex and three-dimensional than a standard single-coil.",
  },
  {
    name: "Teisco Gold Foil",
    priceRange: "£85 – £150",
    tagline: "The cult Japanese foil with a lo-fi character and addictive midrange honk.",
    details: ["Teisco specification", "Correct cover and bobbin", "Vintage Japanese voice", "Available in multiple sizes"],
    voicing: "Teisco foils have a thick, throaty midrange with a strange, addictive compression. Less refined than the DeArmond or Dynasonic — but that's exactly the point. Used by Jack White and countless indie and alternative players.",
  },
  {
    name: "Rowe DeArmond Gold Foil",
    priceRange: "£100 – £200",
    tagline: "The Rowe Industries variant — subtly different character to the standard DeArmond.",
    details: ["Rowe DeArmond specification", "Correct construction", "Alnico loaded", "Available as singles or sets"],
    voicing: "The Rowe Industries version of the DeArmond design has a slightly warmer, fuller character than the standard variant — less abrasive in the upper mids, with more depth in the low end. Excellent for neck positions.",
  },
];

export default function GoldFoilPickups() {
  return (
    <div>
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-gf-header">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/pickups" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors" data-testid="link-back-pickups">
            <ArrowLeft className="w-4 h-4" /> All Pickups
          </Link>
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-primary uppercase tracking-widest text-xs font-medium mb-4">
              Gold Foil Pickups
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              Gold Foil
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              The iconic catalogue guitar pickups of the 1960s — Japanese and American designs with a lo-fi clarity and harmonic grit that modern pickups simply cannot replicate. Mojo offers some of the most complete gold foil reproductions in the world.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro callout */}
      <section className="py-10 bg-muted border-b border-white/5" data-testid="section-gf-intro">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            Gold foil pickups were originally fitted to budget Japanese and American catalogue guitars in the late 1950s and 1960s. Despite their inexpensive origins, they produce some of the most characterful tones in electric guitar history. Marc has spent years sourcing correct dimensions, materials, and magnet specifications to rebuild these rare pickups authentically.
          </p>
        </div>
      </section>

      <section className="py-16" data-testid="section-gf-pickups">
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

      <section className="py-12 bg-card border-t border-white/5" data-testid="section-gf-footer-cta">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-semibold">Not sure which foil fits your guitar?</p>
            <p className="text-muted-foreground text-sm mt-1">Marc can identify the correct spec from photos or model information.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-medium text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-gf-contact">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
