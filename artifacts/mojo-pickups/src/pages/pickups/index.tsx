import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

const categories = [
  {
    slug: "stratocaster",
    name: "Stratocaster",
    priceRange: "£75 – £240",
    tagline: "Vintage-correct Strat pickups in 50s, 60s, and Custom voicings.",
    specs: ["Hand-scatter-wound", "Alnico 3 & 5 magnets", "Nitro-dipped bobbins", "Punched flatwork"],
    img: "https://www.mojopickups.co.uk/wp-content/uploads/2015/07/Mojo-Pickups-60s-Strat-Ramon-Goose_S-e1504037141665-500x334.jpg",
  },
  {
    slug: "telecaster",
    name: "Telecaster",
    priceRange: "£90 – £180",
    tagline: "Faithful reproductions of '52 and '59 Telecaster tone.",
    specs: ["Alnico 3 magnets", "Copper baseplate", "Vintage wire gauges", "UK-made parts"],
    img: "https://www.mojopickups.co.uk/wp-content/uploads/2015/07/Mojo-Broaadcater-Set-Clean-2026-500x366.jpg",
  },
  {
    slug: "humbucker",
    name: "Humbucker / PAF",
    priceRange: "£125 – £250",
    tagline: "True mismatched PAF coils — wound the way Gibson originally did it.",
    specs: ["Auto-wound for authentic PAF character", "Mismatched coils", "Vintage PAF & Firebird", "Un-potted option"],
    img: "https://www.mojopickups.co.uk/wp-content/uploads/2016/03/Mojo-Pickups-Vintage-PAF-Ag-500x399.jpg",
  },
  {
    slug: "p90",
    name: "P90",
    priceRange: "£90 – £190",
    tagline: "Vintage-voiced soapbar and dogear P90s with real Alnico grit.",
    specs: ["Soapbar & Dogear", "Aged Alnico loaded", "Vintage wound", "Beeswax potted"],
    img: "https://www.mojopickups.co.uk/wp-content/uploads/2015/08/Mojo-Pickups-Nickel-P90s-500x351.jpg",
  },
  {
    slug: "gold-foil",
    name: "Gold Foil",
    priceRange: "£85 – £300",
    tagline: "Guyatone, DeArmond, Dynasonic, Teisco — the sound of 60s lo-fi clarity.",
    specs: ["Multiple designs", "Guyatone & Teisco styles", "DeArmond & Dynasonic", "Rowe DeArmond"],
    img: "https://www.mojopickups.co.uk/wp-content/uploads/2015/08/Mojo-Pickups-Gold-Foils-500x333.jpg",
  },
  {
    slug: "jazzmaster",
    name: "Jazzmaster & Jaguar",
    priceRange: "£90 – £270",
    tagline: "Premium Alnico offset pickups built to vintage specification.",
    specs: ["Vintage Alnico spec", "Offset voice & size", "Full sets available", "Made to order"],
    img: "https://www.mojopickups.co.uk/wp-content/uploads/2017/10/Mojo-Pickups-Jazzmaster-500x333.jpg",
  },
  {
    slug: "cunife",
    name: "CuNiFe Wide Range",
    priceRange: "From £150",
    tagline: "Seth Lover's Wide Range design built with genuine CuNiFe magnets for Thinline and Deluxe Telecasters.",
    specs: ["Copper-Nickel-Iron magnets", "True wide frequency range", "Tele Deluxe & Thinline spec", "UK-wound"],
    img: "https://www.mojopickups.co.uk/wp-content/uploads/2015/08/Mojo-Pickups-Wide-Range-Hum-500x336.jpg",
  },
  {
    slug: "mojotron",
    name: "Mojotron",
    priceRange: "From £90",
    tagline: "Filtertron-style pickups — the chiming, twangy clarity of a Gretsch done to vintage spec.",
    specs: ["Filtertron-style", "Gretsch-compatible spacing", "Alnico & ceramic options", "Vintage-correct dimensions"],
    img: "https://www.mojopickups.co.uk/wp-content/uploads/2017/10/Mojo-Pickups-MojoTron-Filte-500x381.jpg",
  },
  {
    slug: "charlie-christian",
    name: "Charlie Christian",
    priceRange: "From £120",
    tagline: "The original blade single coil — warm, clear, and unmistakably jazzy.",
    specs: ["Single blade coil", "ES-150 style", "Deep jazz warmth", "Steel blade magnet"],
    img: "https://www.mojopickups.co.uk/wp-content/uploads/2016/09/Mojo-Pickups-Charlie-Christ-500x389.jpg",
  },
  {
    slug: "dynas",
    name: "Dynas",
    priceRange: "From £110",
    tagline: "Dynasonic and HB-style Gretsch pickups — percussive, chimey, and completely unique.",
    specs: ["Dynasonic compatible", "Gretsch-fit dimensions", "Alnico blade magnets", "Clear, bright character"],
    img: "https://www.mojopickups.co.uk/wp-content/uploads/2019/03/Mojo-Pickups-HB-Dynasonic-600x457.jpg",
  },
  {
    slug: "bass",
    name: "Bass",
    priceRange: "From £90",
    tagline: "Precision and vintage bass pickups wound to vintage-correct specification.",
    specs: ["51-style P Bass", "Vintage wire gauges", "UK-made flatwork", "Alnico magnets"],
    img: "https://www.mojopickups.co.uk/wp-content/uploads/2015/08/Mojo-Pickups-51-P-Bass-500x353.jpg",
  },
  {
    slug: "lipstick",
    name: "Lipstick",
    priceRange: "From £85",
    tagline: "Danelectro-style lipstick tube pickups — glassy, ethereal, and unlike anything else.",
    specs: ["Lipstick tube housing", "Single coil", "Danelectro voicing", "Chrome finish"],
    img: "https://www.mojopickups.co.uk/wp-content/uploads/2015/08/Mojo-Pickups-Strat-Lipstick-500x333.jpg",
  },
];

export default function Pickups() {
  return (
    <div>
      {/* Header */}
      <section className="py-28 md:py-36 bg-card border-b border-white/5" data-testid="section-pickups-header">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p custom={0} variants={fadeUp} className="text-primary uppercase tracking-widest text-xs font-medium mb-4">
              The Range
            </motion.p>
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
              Shop Pickups
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Every pickup is hand-wound to order in Ripponden, West Yorkshire. Current build time is 40–45 working days. All prices are excluding VAT.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16" data-testid="section-pickup-categories">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {categories.map((cat, i) => (
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
                  className="group block bg-background hover:bg-card transition-all h-full border-l-4 border-transparent hover:border-primary"
                  data-testid={`card-pickup-${cat.slug}`}
                >
                  {cat.img && (
                    <div className="overflow-hidden aspect-[4/3]">
                      <img
                        src={cat.img}
                        alt={`Mojo Pickups ${cat.name}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h2 className="font-serif text-2xl font-bold group-hover:text-primary transition-colors">
                      {cat.name}
                    </h2>
                    <span className="text-primary text-sm font-medium whitespace-nowrap">{cat.priceRange}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{cat.tagline}</p>
                  <ul className="space-y-1 mb-8">
                    {cat.specs.map((spec) => (
                      <li key={spec} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-primary text-xs uppercase tracking-wider font-medium">
                    View {cat.name} <ArrowRight className="w-3 h-3" />
                  </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="py-16 bg-card border-y border-white/5" data-testid="section-ordering-info">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="font-serif text-lg font-semibold mb-2">Made to Order</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every pickup is wound when you order it. Current build time is 40–45 working days.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold mb-2">Prices ex-VAT</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All prices shown are excluding VAT. UK customers add 20%.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold mb-2">Talk to Marc</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Not sure which pickup is right for you? Email{" "}
                <a href="mailto:info@mojopickups.co.uk" className="text-primary hover:underline">
                  info@mojopickups.co.uk
                </a>{" "}
                and Marc will advise you directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
