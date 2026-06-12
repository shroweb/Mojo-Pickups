import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Award, Clock, MapPin, Wrench } from "lucide-react";
import heroPng from "@/assets/hero-pickup.png";
import benchPng from "@/assets/pickup-bench.png";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const pickupCategories = [
  { slug: "stratocaster", name: "Stratocaster", desc: "Hand-scatter-wound vintage Strat sets — from glassy 50s chime to punchy 60s bite.", img: "https://www.mojopickups.co.uk/wp-content/uploads/2015/07/Mojo-Pickups-60s-Strat-Ramon-Goose_S-e1504037141665-500x334.jpg" },
  { slug: "telecaster", name: "Telecaster", desc: "The authentic twang and grit of a '52 or '59 Telecaster, wound to blueprint accuracy.", img: "https://www.mojopickups.co.uk/wp-content/uploads/2015/07/Mojo-Broaadcater-Set-Clean-2026-500x366.jpg" },
  { slug: "humbucker", name: "Humbucker / PAF", desc: "True mismatched PAF coils wound on an automatic winder — the way Gibson originally did it.", img: "https://www.mojopickups.co.uk/wp-content/uploads/2016/03/Mojo-Pickups-Vintage-PAF-Ag-500x399.jpg" },
  { slug: "p90", name: "P90", desc: "Vintage-voiced soapbar and dogear P90s loaded with aged Alnico.", img: "https://www.mojopickups.co.uk/wp-content/uploads/2015/08/Mojo-Pickups-Nickel-P90s-500x351.jpg" },
  { slug: "gold-foil", name: "Gold Foil", desc: "Guyatone, DeArmond, Dynasonic, Teisco — lo-fi clarity and harmonic grit like nothing else.", img: "https://www.mojopickups.co.uk/wp-content/uploads/2015/08/Mojo-Pickups-Gold-Foils-500x333.jpg" },
  { slug: "jazzmaster", name: "Jazzmaster & Jaguar", desc: "Premium Alnico offset pickups wound to vintage specification.", img: "https://www.mojopickups.co.uk/wp-content/uploads/2017/10/Mojo-Pickups-Jazzmaster-500x333.jpg" },
  { slug: "cunife", name: "CuNiFe Wide Range", desc: "Seth Lover's Wide Range design built with genuine CuNiFe magnets — for Thinline and Deluxe Telecasters.", img: "https://www.mojopickups.co.uk/wp-content/uploads/2015/08/Mojo-Pickups-Wide-Range-Hum-500x336.jpg" },
  { slug: "mojotron", name: "Mojotron", desc: "Filtertron-style pickups — the chiming, twangy clarity of a vintage Gretsch done right.", img: "https://www.mojopickups.co.uk/wp-content/uploads/2017/10/Mojo-Pickups-MojoTron-Filte-500x381.jpg" },
  { slug: "charlie-christian", name: "Charlie Christian", desc: "The original blade single coil — warm, clear, and unmistakably jazzy.", img: "https://www.mojopickups.co.uk/wp-content/uploads/2016/09/Mojo-Pickups-Charlie-Christ-500x389.jpg" },
];

const testimonials = [
  {
    quote: "Beautifully handmade in the UK, competitively priced and they sound great.",
    source: "TDPRI Forum",
  },
  {
    quote: "No snake-oil — just a fantastic attention to detail and ears like a bat when it comes to nailing vintage tones.",
    source: "TheFretBoard",
  },
  {
    quote: "I have tried Seymour Duncan, Curtis Novak, Fender and DiMarzio. The Mojo is every bit as good. I really noticed an improvement in dynamics.",
    source: "Verified Customer",
  },
  {
    quote: "Warm, snappy, and quiet. Looks great, too.",
    source: "The Gear Page — on the Gold Foil humbucker",
  },
];

const trustPoints = [
  { icon: Wrench, label: "Hand-wound", detail: "Every pickup wound individually — no production lines, no shortcuts." },
  { icon: MapPin, label: "UK Made", detail: "Made in Ripponden, West Yorkshire, using UK-sourced parts." },
  { icon: Clock, label: "Made to Order", detail: "40–45 working day build time. Each pickup is built when you order it." },
  { icon: Award, label: "Since 2009", detail: "Over 15 years of obsessive pickup craftsmanship." },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" data-testid="section-hero">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroPng})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-primary uppercase tracking-widest text-sm font-medium mb-6"
            >
              Ripponden, West Yorkshire — Est. 2009
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-5xl md:text-7xl font-serif font-bold leading-none mb-8 text-foreground"
            >
              The tone lives<br />
              <em className="not-italic text-primary">in the details.</em>
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
            >
              Boutique, hand-wound guitar pickups made one at a time in West Yorkshire. Every pickup is built from scratch — no shortcuts, no production lines. Just careful work and a genuine love for the craft.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/pickups"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
                data-testid="link-shop-pickups"
              >
                Shop Pickups <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-foreground font-medium text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
                data-testid="link-about"
              >
                About Marc
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="border-y border-white/5 bg-card" data-testid="section-trust">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
            {trustPoints.map((tp, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 md:p-10 gap-3">
                <tp.icon className="w-6 h-6 text-primary mb-1" />
                <p className="font-serif text-lg font-semibold text-foreground">{tp.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{tp.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 md:py-32" data-testid="section-about-snapshot">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={benchPng}
                alt="Mojo Pickups workshop bench with handwound guitar pickups"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="text-primary uppercase tracking-widest text-xs font-medium mb-4">One Man, One Mission</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Marc Ransley — pickup maker.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mojo Pickups is a one-man operation. Marc handles everything himself — from sourcing parts and winding coils to packing orders and the daily trip to the post office. When you contact Mojo, you're talking directly to the person who will wind your pickup.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Deep in the rolling hills of West Yorkshire, nestled between Leeds and Manchester, lies the village of Ripponden — home to one of the most precise boutique pickup brands in the world. Marc started winding pickups in 2009 to get the sounds he wanted but couldn't find on the market. Word spread fast.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider hover:gap-3 transition-all"
                data-testid="link-read-more-about"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pickup Range */}
      <section className="py-24 md:py-32 bg-card" data-testid="section-pickup-range">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-widest text-xs font-medium mb-4">The Range</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              A pickup for every voice.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From vintage-correct PAFs to rare gold foils and custom offsets — all made to order, all made in West Yorkshire.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {pickupCategories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={`/pickups/${cat.slug}`}
                  className="group block bg-background h-full hover:bg-card transition-colors"
                  data-testid={`card-pickup-category-${cat.slug}`}
                >
                  {cat.img && (
                    <div className="overflow-hidden aspect-[3/2]">
                      <img
                        src={cat.img}
                        alt={`Mojo Pickups ${cat.name}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-8 md:p-10">
                    <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{cat.desc}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-xs uppercase tracking-wider font-medium">
                      View Pickups <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/pickups"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-foreground font-medium text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
              data-testid="link-view-full-range"
            >
              View Full Range <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32" data-testid="section-testimonials">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-widest text-xs font-medium mb-4">Reviews</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              What players say.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card p-8 md:p-12"
                data-testid={`blockquote-testimonial-${i}`}
              >
                <p className="text-foreground font-serif text-lg md:text-xl leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="text-primary text-xs uppercase tracking-widest">
                  — {t.source}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-primary" data-testid="section-cta">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Ready to find your tone?
          </h2>
          <p className="text-primary-foreground/80 mb-10 max-w-lg mx-auto">
            All pickups are made to order. Current build time is 40–45 working days. Prices are ex-VAT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pickups"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-medium text-sm uppercase tracking-wider hover:bg-primary-foreground/90 transition-colors"
              data-testid="cta-link-shop"
            >
              Shop Pickups <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/40 text-primary-foreground font-medium text-sm uppercase tracking-wider hover:border-primary-foreground transition-colors"
              data-testid="cta-link-contact"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
