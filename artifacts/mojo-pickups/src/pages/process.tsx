import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import windingPng from "@/assets/process-winding.png";
import benchPng from "@/assets/pickup-bench.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const steps = [
  {
    number: "01",
    title: "Parts & Materials",
    body: [
      "What began as a small idea turned into a mission: to have custom parts made as close to the originals as possible. Wherever possible, everything used by Mojo is made in the United Kingdom.",
      "Most parts are produced exclusively for Mojo Pickups — vintage-correct in both shape and material. The screws are custom-made in the UK. The magnets are sourced and bevelled in-house. The bobbins are punched, not laser-cut.",
      "Marc's obsession with original spec means he is constantly searching for ways to improve the accuracy of his parts. If something doesn't look right under a magnifying glass, it doesn't go into a pickup.",
    ],
  },
  {
    number: "02",
    title: "Wire",
    body: [
      "Marc winds using Elektrosola wire from 38 to 45 AWG — one of the world's most respected wire manufacturers, producing to extremely tight tolerances.",
      "For pre-1964 Stratocaster pickups, Marc uses Heavy Formvar wire — thicker insulation that creates more space between the copper turns, producing the bright, glassy chime of the 50s and early-60s. The wire is colour-matched to original pre-CBS Fender wire.",
      "For post-1964 'grey bottom' era pickups, Marc switches to Plain Enamel wire, which has thinner insulation and allows more turns in the same coil space — producing a punchier, grittier mid-range.",
    ],
  },
  {
    number: "03",
    title: "Winding",
    body: [
      "Most Mojo pickups are hand-wound — scatter-wound by Marc at his winding bench in Ripponden. Scatter-winding is a technique that introduces random variation in the coil layers, contributing to the three-dimensional, complex sound associated with vintage pickups.",
      "The exception is vintage-style Gibson humbuckers. To recreate the authentic PAF character, these must be wound with the correct turns per layer and true mismatched coils — exactly the way Gibson wound them in Kalamazoo in the late 1950s. This requires an automatic winder. Hand-winding a PAF produces a different and less authentic result.",
    ],
  },
  {
    number: "04",
    title: "Flatwork & Bobbins",
    body: [
      "Marc was never happy with how modern laser-cut flatwork looked. The laser-cutting process changes the fibre density and leaves different edge characteristics to the original. So Marc had a press made — and he punches the flatwork himself, the same way Fender did in Fullerton.",
      "Each bobbin has its edges hand-rounded after punching. Then each bobbin is dipped in nitrocellulose lacquer — a time-consuming process that mirrors the exact manufacturing methods of the 1950s. It is one of those small details that makes a difference in ways that are hard to quantify but impossible to ignore.",
    ],
  },
  {
    number: "05",
    title: "Wax Potting",
    body: [
      "Marc runs three wax tanks at the workshop: two containing a blend of paraffin and beeswax (one clean, one black) and a third of 100% paraffin, provided specifically for the vegan guitarist.",
      "Vintage-style Gibson pickups are not potted unless the customer specifically requests it — potting changes the feel and response of the pickup in ways that are not always desirable for a vintage-voiced instrument.",
      "Vintage Fender pickups are only very lightly potted — keeping the integrity of the coil over time and allowing the pickup to breathe the way the originals did. Over-potting a Strat pickup kills the air and complexity that makes them special.",
    ],
  },
];

export default function Process() {
  return (
    <div>
      {/* Header */}
      <section className="relative py-32 md:py-40 overflow-hidden" data-testid="section-process-header">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${windingPng})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-primary uppercase tracking-widest text-xs font-medium mb-4">
              How It's Made
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              The Process
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Every aspect of a Mojo pickup is considered. From the wire gauge and magnet grade to the wax blend and bobbin edge finish — nothing is accidental, nothing is shortcut.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16" data-testid="section-process-steps">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="grid md:grid-cols-[120px_1fr] gap-8 py-16 border-b border-white/5 last:border-0"
                data-testid={`step-${step.number}`}
              >
                <div>
                  <span className="font-serif text-6xl font-bold text-white/8 leading-none">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">{step.title}</h2>
                  <div className="space-y-4">
                    {step.body.map((para, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Build time callout */}
      <section className="py-20 bg-card border-y border-white/5" data-testid="section-process-build-time">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary uppercase tracking-widest text-xs font-medium mb-4">Made to Order</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                40–45 working days.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every Mojo pickup is made when you order it. There is no stock, no warehouse, no box of pre-made pickups waiting to be shipped. When your order is placed, Marc puts it into the queue and builds it when it reaches the top.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                This is not a flaw in the model. It is the model. Building to order means every pickup gets the same attention. There is no incentive to rush, no pressure to cut corners. The current build time is 40–45 working days.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider hover:gap-3 transition-all"
                data-testid="link-process-contact"
              >
                Enquire About Your Pickup <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={benchPng}
                alt="Completed Mojo Pickups guitar pickups laid out on a workbench"
                className="w-full aspect-square object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" data-testid="section-process-cta">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Ready to order?</h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            All pickups are made to order. Contact Marc to discuss your requirements and he will advise the right specification for your guitar and playing style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pickups"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
              data-testid="link-process-shop"
            >
              Shop Pickups <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-foreground font-medium text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
              data-testid="link-process-contact-btn"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
