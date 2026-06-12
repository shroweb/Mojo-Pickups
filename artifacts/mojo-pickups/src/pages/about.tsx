import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const marcPhoto = "https://www.mojopickups.co.uk/wp-content/uploads/2018/03/mojomarc.jpg";
const windingImg = "https://www.mojopickups.co.uk/wp-content/uploads/2017/10/Mojo-Pickups-Jazzmaster.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const processSteps = [
  {
    step: "01",
    title: "Parts & Materials",
    body: "What began as a small idea turned into a mission to have custom parts made as close to the originals as possible — and wherever possible, everything is made in the UK. Marc even has custom screws made locally. Most parts are produced exclusively for Mojo and are vintage-correct in both shape and material.",
  },
  {
    step: "02",
    title: "Winding",
    body: "Most pickups are hand-wound using Elektrosola wire from 38 to 45 AWG. The main exception is vintage-style Gibson pickups — to recreate the real vintage sound, these need to be wound with correct turns per layer and true PAF mismatched coils, so they are wound on an automatic winder, exactly the way Gibson originally did it.",
  },
  {
    step: "03",
    title: "Flatwork & Bobbins",
    body: "Marc was never happy with how modern laser-cut flatwork looked, so he had a press made and started punching them — the same way Fender originally did. The flatwork has the correct fibre density, and each bobbin has hand-rounded edges before being dipped in nitrocellulose lacquer.",
  },
  {
    step: "04",
    title: "Wax Potting",
    body: "Marc runs three wax tanks: two containing paraffin and beeswax blends (one clean, one black) and a third of 100% paraffin for the vegan guitarist. Vintage-style Gibson pickups are not potted unless specifically requested. Fender pickups are only very lightly potted, preserving the integrity of the coil over time.",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-card border-b border-white/5 overflow-hidden" data-testid="section-about-hero">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-gold uppercase tracking-widest text-xs font-medium mb-4">
              About Mojo Pickups
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              One man.<br />One standard.
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Mojo Pickups was born out of frustration — Marc Ransley couldn't find the pickups he was hearing in his head. So he learned to wind them himself. That was 2009. Word spread.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Marc's Story */}
      <section className="py-24 md:py-32" data-testid="section-marc-story">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={marcPhoto}
                alt="Marc Ransley playing guitar — the man behind Mojo Pickups"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Marc Ransley</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Marc Ransley has been making and repairing guitar pickups for many years, turning it into a full-time job around 2010. He handles everything himself — from sourcing parts and winding coils to packing orders and the daily trip to the post office.
                </p>
                <p>
                  Every pickup is made one at a time, the old-fashioned way. No shortcuts, no production lines — just careful work, attention to detail, and a genuine love for the craft. It's about getting the small things right, because that's where the tone lives.
                </p>
                <p>
                  Deep in the rolling green hills of West Yorkshire, nestling equidistantly between Leeds and Manchester, lies the village of Ripponden — home to the headquarters of one of the most imaginative and precise brands in the guitar pickup business.
                </p>
                <p>
                  If you're looking for a hand-wound custom pickup or honest advice, you'll be talking directly to the person who will actually wind your pickup. No sales scripts, no middlemen — just a straight conversation about what you play and the sound you're chasing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-card" data-testid="section-philosophy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gold uppercase tracking-widest text-xs font-medium mb-4">Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Getting the small things right.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Marc started Mojo Pickups with a simple premise: he had a vast collection of vintage guitars with incredible-sounding pickups, and he wanted to understand why they sounded that way. Then replicate it — exactly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                title: "Vintage Accuracy",
                body: "Marc blueprints his pickup designs from real vintage examples — museum-grade instruments and his own private collection. The goal isn't to capture a vintage tone; it's to build the same pickup.",
              },
              {
                title: "British Craft",
                body: "Wherever possible, every component is UK-made and produced exclusively for Mojo. The flatwork is punched. The screws are custom. Even the wire matches original colour and diameter specifications.",
              },
              {
                title: "Direct Access",
                body: "There is no sales team, no support desk, no product manager. When you email info@mojopickups.co.uk, Marc reads it. When you ask a question about tone, he answers it. It's that simple.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-background p-8 md:p-12"
              >
                <h3 className="font-serif text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 md:py-32" data-testid="section-process-overview">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold uppercase tracking-widest text-xs font-medium mb-4">How It's Done</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Mojo Process</h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Every aspect of a Mojo pickup is considered — from the wire gauge to the wax blend. Here is a brief overview of how each pickup is made. For the full deep-dive, visit The Process page.
              </p>
              <div className="space-y-10">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex gap-6"
                    data-testid={`step-process-${step.step}`}
                  >
                    <span className="font-serif text-4xl font-bold text-white/10 flex-shrink-0 leading-none">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12">
                <Link
                  href="/process"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider hover:gap-3 transition-all"
                  data-testid="link-full-process"
                >
                  Explore the Full Process <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="sticky top-28"
            >
              <img
                src={windingImg}
                alt="Mojo Pickups Jazzmaster hand-wound guitar pickups"
                className="w-full aspect-[3/4] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-white/5" data-testid="section-about-cta">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Talk to Marc directly.</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            No sales scripts. No wait times. Just a direct conversation about your guitar and the tone you're after.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
            data-testid="link-contact-cta"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
