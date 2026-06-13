const BASE = "https://www.mojopickups.co.uk";

export interface ProductOption {
  name: string;
  values: string[];
}

export interface Product {
  slug: string;
  name: string;
  price: string;
  sku?: string;
  category: string;
  images: string[];
  description: string[];
  specs: string[];
  options?: ProductOption[];
  buyUrl: string;
  buildTime?: string;
  featured?: boolean;
}

export const products: Record<string, Product[]> = {
  stratocaster: [
    {
      slug: "50s",
      name: "50s Stratocaster",
      price: "£75 – £240",
      sku: "Mojostrat101",
      category: "stratocaster",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-50s-Strat1.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-50s-strat-aged.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-50s-strat-aged2.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-50s-Strat.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-50s-strat-3.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-Strat-Covers.jpg`,
      ],
      description: [
        "Hand-wound Pre-CBS Stratocaster pickups cloned from Marc's own 1950s vintage collection. These use 0.195″ Alnico 3 magnets — the lower magnetic pull allows your strings to vibrate more freely, producing the transparent, woody tone that made the '50s Strat sound so good.",
        "Wound with 42 AWG Heavy Formvar wire using a hand scatter-wind technique. The flatwork is traditionally punched — not laser cut — and each bobbin has hand-rounded edges before being dipped in nitrocellulose lacquer, just like Fender originally did.",
        "Light wax-potting in a Black Bee and paraffin wax blend keeps microphonic feedback under control without killing the pickup's natural response. Cloth-covered hookup wire throughout.",
      ],
      specs: [
        "Neck: 5.4kΩ",
        "Middle: 5.6kΩ (RWRP available)",
        "Bridge: 6.0kΩ",
        "0.195″ Alnico 3 magnets",
        "42 AWG Heavy Formvar wire",
        "Punched flatwork, nitro-dipped bobbins",
        "Cloth-covered hookup wire",
        "Black Bee & paraffin wax potting",
      ],
      options: [
        { name: "Colour", values: ["White", "Black", "Cream", "Aged White"] },
        { name: "Configuration", values: ["Set", "Set RWRP", "Single Neck", "Single Middle", "Single Bridge"] },
        { name: "Aged Magnets", values: ["Yes", "No"] },
      ],
      buyUrl: `${BASE}/product/50s_stratocaster/`,
      buildTime: "35–40 working days",
    },
    {
      slug: "60s",
      name: "60s Stratocaster",
      price: "£75 – £240",
      category: "stratocaster",
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-60s-strat-2-700x495.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-60s-Strat-aged-3-700x508.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-60s-strat-aged-2-700x467.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-60s-strat-aged-700x441.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-60s-strat-3-700x517.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-60s-Strat-700x470.jpg`,
      ],
      description: [
        "Since 2011, Marc's mission has been singular: to replicate the ghost in the machine found only in the most coveted vintage Fender instruments. These pickups are cloned directly from examples in his private vintage collection.",
        "0.187″ Alnico 5 magnets, hand-bevelled in-house. Wound with 42 AWG Heavy Formvar wire, scatter-wound by hand to mirror the authentic Fullerton construction. Traditionally punched flatwork with nitrocellulose lacquer-finished bobbins.",
        "Wound hotter than the 50s set for a little more bite and presence — the sound of a slab-body Strat at its peak. Potted in Black Bee & paraffin wax blend. Cloth-covered lead wire.",
      ],
      specs: [
        "Neck: 5.8kΩ",
        "Middle: 6.0kΩ (RWRP available)",
        "Bridge: 6.4kΩ",
        "0.187″ Alnico 5 magnets",
        "42 AWG Heavy Formvar wire",
        "Punched flatwork, nitro-dipped bobbins",
        "Cloth-covered hookup wire",
        "Black Bee & paraffin wax potting",
      ],
      options: [
        { name: "Colour", values: ["White", "Black", "Cream", "Parchment"] },
        { name: "Configuration", values: ["Set", "Set RWRP", "Single Neck", "Single Middle", "Single Bridge"] },
        { name: "Aged Magnets", values: ["Yes", "No"] },
      ],
      buyUrl: `${BASE}/product/60s-stratocaster/`,
      buildTime: "40–45 working days",
    },
    {
      slug: "54-nos",
      name: "54 Stratocaster N.O.S Heavy Formvar",
      price: "£500",
      sku: "54STNOS",
      category: "stratocaster",
      images: [
        `${BASE}/wp-content/uploads/2023/11/59-NOS-3-700x462.jpg`,
        `${BASE}/wp-content/uploads/2023/11/NOS-59-Strat-700x533.jpg`,
        `${BASE}/wp-content/uploads/2023/11/NOS-59-Strat-2-700x484.jpg`,
        `${BASE}/wp-content/uploads/2023/11/nos-59-strat-3-700x543.jpg`,
        `${BASE}/wp-content/uploads/2023/11/59-NOS-Strat-2-700x537.jpg`,
        `${BASE}/wp-content/uploads/2023/11/59-NOS-Strat-1-700x564.jpg`,
      ],
      description: [
        "These are wound with Heavy Formvar wire from a November 1958 spool of REA Magnet Wire Co. — original N.O.S. wire from a Fort Wayne, Indiana factory, wound the same month these pickups would originally have been made.",
        "Cloned from vintage-correct 0.195″ Alnico 3 magnets, bevelled in-house. Bobbins are punched not laser cut, have rounded edges and are dipped in nitrocellulose lacquer. The result is the glassy, woody tone of a pre-CBS '54-era Stratocaster — transparent, open, and impossible to replicate with modern materials.",
        "Sold in sets only. Wax potted in black bee and paraffin wax. Cloth-covered hookup wire. Comes with mounting screws and rubbers.",
      ],
      specs: [
        "Neck: 5.4kΩ",
        "Middle: 5.6kΩ",
        "Bridge: 6.0kΩ",
        "N.O.S REA Magnet Wire (Nov 1958)",
        "0.195″ Alnico 3 magnets",
        "Punched flatwork, nitro-dipped bobbins",
        "Sold in sets only",
        "Cloth-covered hookup wire",
      ],
      options: [
        { name: "Colour", values: ["White", "Black", "Cream", "Parchment"] },
      ],
      buyUrl: `${BASE}/product/54-stratocaster-n-o-s-heavy-formvar/`,
      buildTime: "25–30 working days",
    },
    {
      slug: "59-nos",
      name: "59 Stratocaster N.O.S Heavy Formvar",
      price: "£500",
      sku: "59STNOS",
      category: "stratocaster",
      images: [
        `${BASE}/wp-content/uploads/2023/11/NOS-59-Strat-500x381.jpg`,
        `${BASE}/wp-content/uploads/2023/11/59-NOS-3-500x330.jpg`,
      ],
      description: [
        "These are wound with Heavy Formvar wire from a November 1958 spool of REA Magnet Wire Co. wire — original N.O.S. wire from a Fort Wayne, Indiana factory, wound the same month these pickups would originally have been made.",
        "Cloned from vintage-correct 0.188″ Alnico 5 magnets, bevelled in-house. Bobbins are punched not laser cut, have rounded edges and are dipped in nitrocellulose lacquer, just like Fender did back in the day.",
        "Sold in sets only. Wax potted in black bee and paraffin wax to reduce microphonic feedback. Cloth-covered hookup wire. Comes with mounting screws and rubbers.",
      ],
      specs: [
        "Neck: 5.8kΩ (2.34H)",
        "Middle: 6.0kΩ (2.35H)",
        "Bridge: 6.2kΩ (2.54H)",
        "N.O.S REA Magnet Wire (Nov 1958)",
        "0.188″ Alnico 5 magnets",
        "Punched flatwork, nitro-dipped bobbins",
        "Sold in sets only",
        "Cloth-covered hookup wire",
      ],
      options: [
        { name: "Colour", values: ["White", "Black", "Cream", "Parchment"] },
      ],
      buyUrl: `${BASE}/product/1959-strat-nos/`,
      buildTime: "25–30 working days",
    },
    {
      slug: "mojo-special",
      name: "Mojo Special Stratocaster",
      price: "£75 – £225",
      category: "stratocaster",
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-Pickups-60s-Strat-Ramon-Goose_S-e1504037141665.jpg`,
      ],
      description: [
        "Marc's own voiced Stratocaster set — not a copy of any specific vintage year, but his own interpretation of what a Strat pickup should sound like. Alnico 5 magnets with a slightly hotter wind than the vintage specs.",
        "Punched flatwork, nitrocellulose-dipped bobbins. Hand scatter-wound. Beeswax and paraffin potting. Cloth-covered hookup wire.",
      ],
      specs: [
        "Alnico 5 magnets",
        "Hand scatter-wound",
        "Punched flatwork",
        "Nitro-dipped bobbins",
        "Cloth hookup wire",
      ],
      options: [
        { name: "Colour", values: ["White", "Black", "Cream", "Parchment"] },
        { name: "Configuration", values: ["Set", "Set RWRP", "Single Neck", "Single Middle", "Single Bridge"] },
        { name: "Aged Magnets", values: ["Yes", "No"] },
      ],
      buyUrl: `${BASE}/product/mojo-special-stratocaster/`,
      buildTime: "35–40 working days",
    },
    {
      slug: "mojo-special-metal",
      name: "Mojo Special Stratocaster – Metal Covers",
      price: "£80 – £240",
      category: "stratocaster",
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-Strat-Covers.jpg`,
      ],
      description: [
        "The Mojo Special Stratocaster voiced pickup set, fitted with nickel silver metal covers. The cover adds a subtle warmth and smooths out the very top end — a tonal difference some players prefer, especially for rhythm playing.",
        "Same hand scatter-wound Alnico 5 construction as the standard Mojo Special. Available in nickel or chrome covers.",
      ],
      specs: [
        "Alnico 5 magnets",
        "Hand scatter-wound",
        "Nickel or chrome metal covers",
        "Punched flatwork",
        "Cloth hookup wire",
      ],
      options: [
        { name: "Cover", values: ["Nickel", "Chrome"] },
        { name: "Configuration", values: ["Set", "Set RWRP", "Single Neck", "Single Middle", "Single Bridge"] },
      ],
      buyUrl: `${BASE}/product/mojo-special-stratocaster-metal-covers/`,
      buildTime: "35–40 working days",
    },
    {
      slug: "cunife-strat",
      name: "CuNiFe Adjustable Stratocaster",
      price: "£75 – £225",
      category: "stratocaster",
      images: [
        `${BASE}/wp-content/uploads/2023/04/Cunife-Strat.jpg`,
        `${BASE}/wp-content/uploads/2023/04/Cunife-Strat-2.jpg`,
        `${BASE}/wp-content/uploads/2023/06/Cunife-Stratocaster-Plastic.jpg`,
      ],
      description: [
        "CuNiFe (Copper-Nickel-Iron) magnets in a vintage-correct Strat format with fully adjustable pole pieces. The CuNiFe alloy extends the frequency range beyond what Alnico can produce — a percussive, hi-fi snap with crystalline clarity.",
        "Wound with 43 AWG wire to compensate for CuNiFe's magnetic properties. Adjustable poles allow precise string-to-string balance. Includes magnetic steel baseplate.",
      ],
      specs: [
        "Neck: 8.5kΩ",
        "Middle: 9.0kΩ",
        "Bridge: 10.5kΩ",
        "CuNiFe (Copper-Nickel-Iron) magnets",
        "43 AWG wire",
        "Fully adjustable pole pieces",
        "Magnetic steel baseplate included",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Set RWRP", "Single Neck", "Single Middle", "Single Bridge"] },
        { name: "Cover", values: ["Open Nickel", "Aged White", "Black", "Cream", "White"] },
      ],
      buyUrl: `${BASE}/product/cunife-strat/`,
      buildTime: "30–35 working days",
    },
    {
      slug: "strat-broadcaster",
      name: "Strat Sized Broadcaster Bridge",
      price: "£75",
      category: "stratocaster",
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-Broaadcater-Set-Clean-2026-700x512.jpg`,
      ],
      description: [
        "A Broadcaster-voiced bridge pickup in a standard Stratocaster single-coil format. Flush Alnico 3 magnets and a 43 AWG wind — the raw, punchy Broadcaster character in a Strat-compatible package.",
        "For players who want Telecaster Broadcaster twang from a Stratocaster bridge rout. Pairs well with standard Strat neck and middle pickups.",
      ],
      specs: [
        "Strat single-coil format",
        "Flush Alnico 3 magnets",
        "43 AWG wire",
        "Vintage Broadcaster voice",
        "Cloth hookup wire",
      ],
      options: [
        { name: "Aged", values: ["Yes", "No"] },
      ],
      buyUrl: `${BASE}/product/broadcaster-strat/`,
      buildTime: "30–35 working days",
    },
    {
      slug: "strat-gold-foil",
      name: "Strat Sized Gold Foil",
      price: "£85 – £255",
      category: "stratocaster",
      images: [
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-Gold-Foils.jpg`,
      ],
      description: [
        "A Strat-format gold foil pickup — the lo-fi clarity and harmonic character of vintage Japanese foil pickups in a drop-in Stratocaster format. Neck, bridge, and middle positions available as singles or matched sets.",
        "44 AWG wire, ceramic magnets. That bright, lively, delightfully characterful tone — the original Danelectro/Teisco sound, made to fit your Strat without modification.",
      ],
      specs: [
        "Strat single-coil format",
        "Gold foil construction",
        "44 AWG wire",
        "Ceramic magnets",
        "Neck, middle, bridge available",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Single Neck", "Single Middle", "Single Bridge"] },
        { name: "Foil", values: ["Gold", "Silver"] },
      ],
      buyUrl: `${BASE}/product/strat-sized-gold-foil/`,
      buildTime: "30–35 working days",
    },
  ],

  telecaster: [
    {
      slug: "52",
      name: "52 Telecaster",
      price: "£90 – £190",
      category: "telecaster",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-Aged-52-Tele-Set2.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-Tele-Neck.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-Aged-52-Tele-Set.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-aged-52-Tele-Neck.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-52-Aged-Bridge2.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-52-Telecaster-set2.jpg`,
      ],
      description: [
        "If you are chasing the unmistakable snap, clarity, and raw character of an original early-'50s Blackguard Telecaster, this hand-wound set is built for you. Every detail has been engineered to capture the dynamic response that defined the first generation of solid-body electric guitars.",
        "The bridge pickup is wound with 42 AWG wire to approximately 7.3kΩ, producing a cutting, percussive twang. It features a UK-made copper-plated steel baseplate manufactured to the correct 1.2mm vintage thickness — essential for the harmonic richness and punchy attack associated with vintage recordings.",
        "The neck pickup is wound with 43 AWG wire to around 7.0kΩ, offering warm lows and clear, soulful mids. The perfect counterpoint to the bridge — woody, articulate, ideal for blues, jazz, or country rhythm.",
      ],
      specs: [
        "Bridge: ~7.3kΩ, 42 AWG",
        "Neck: ~7.0kΩ, 43 AWG",
        "Alnico 5 magnets",
        "UK-made copper-plated steel baseplate (1.2mm)",
        "Punched flatwork",
        "Vintage string wrap",
        "Cloth-covered hookup wire",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Set RWRP", "Single Neck", "Single Bridge"] },
        { name: "Aged", values: ["Yes", "No"] },
      ],
      buyUrl: `${BASE}/product/50s-telecaster-2/`,
      buildTime: "35–40 working days",
    },
    {
      slug: "broadcaster",
      name: "Broadcaster",
      price: "£90 – £190",
      category: "telecaster",
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-Broaadcater-Set-Clean-2026-700x512.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-Aged-Esquire-Broadcaster-Bridge-700x504.jpg`,
        `${BASE}/wp-content/uploads/2026/03/Mojo-Tele-Raised-Rings-around-magnets-700x608.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-Aged-Broadcaster-Set-2-700x586.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-Aged-Broadcaster-Set-1-700x513.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-Broaadcater-Bridge-Clean-2026-700x525.jpg`,
      ],
      description: [
        "Hand-wound, scatter-wound vintage-spec Broadcaster pickups built the old-school way. Flush Alnico 3 magnets for a smooth, balanced tone — the voice of the guitar before the Telecaster existed.",
        "Wound with 43 AWG wire for a lively, open response. Vintage-spaced pole pieces, black string wrap, punched flatwork bobbins with raised rings. UK-made 1.5mm zinc-plated baseplate on the bridge. Cloth-covered hookup wire throughout.",
      ],
      specs: [
        "Neck: ~7.0kΩ",
        "Bridge: ~10kΩ",
        "Flush Alnico 3 magnets",
        "43 AWG wire",
        "UK-made 1.5mm zinc-plated bridge baseplate",
        "Punched flatwork with raised rings",
        "Cloth-covered hookup wire",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Set RWRP", "Single Neck", "Single Bridge"] },
        { name: "Aged", values: ["Yes", "No"] },
      ],
      buyUrl: `${BASE}/product/broadcaster/`,
      buildTime: "30–35 working days",
    },
    {
      slug: "59",
      name: "59 Telecaster",
      price: "£90 – £190",
      category: "telecaster",
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-59-tele-set-aged2-500x383.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-59-Tele-Set-500x330.jpg`,
      ],
      description: [
        "The 1959 Telecaster sits at a pivotal point in Fender history — the transition from the raw, percussive Blackguard era toward the smoother, more refined sound of the early '60s. Marc's version captures this transitional character: punchy enough for twang, warm enough for everything else.",
        "Hand scatter-wound to vintage spec. Alnico 5 magnets, punched flatwork, cloth-covered hookup wire.",
      ],
      specs: [
        "Alnico 5 magnets",
        "Hand scatter-wound",
        "Punched flatwork",
        "Cloth hookup wire",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Set RWRP", "Single Neck", "Single Bridge"] },
        { name: "Aged", values: ["Yes", "No"] },
      ],
      buyUrl: `${BASE}/product/59-telecaster/`,
      buildTime: "35–40 working days",
    },
    {
      slug: "68",
      name: "68 Telecaster",
      price: "£90 – £190",
      category: "telecaster",
      images: [
        `${BASE}/wp-content/uploads/2026/01/1968-telecaster-Pickup-set.jpg`,
        `${BASE}/wp-content/uploads/2026/01/Mojo-1968-Neck-Telecaster-cover.jpg`,
        `${BASE}/wp-content/uploads/2026/01/1968-Aged-Tele-set.jpg`,
        `${BASE}/wp-content/uploads/2026/01/1968-Tele-pickup-set.jpg`,
        `${BASE}/wp-content/uploads/2026/01/1968-Telecaster-Bridge-Pickup-Aged-1.jpg`,
      ],
      description: [
        "Piano-like lows, a glassy top end, and responsive dynamics — this is the Telecaster sound of the late CBS era. Hand scatter-wound to 1968 specification with staggered Alnico 5 magnets and a UK-made cloned neck cover.",
        "Bridge and neck both wound to ~6.5kΩ with 42/43 AWG wire. White string coil wrap, copper-plated baseplate, punched fibre flatwork. Cloth-covered hookup wire throughout.",
      ],
      specs: [
        "Bridge: ~6.5kΩ, 42 AWG",
        "Neck: ~6.5kΩ, 43 AWG",
        "Staggered Alnico 5 magnets",
        "UK-made 1968-clone neck cover",
        "Copper-plated baseplate",
        "White string coil wrap",
        "Punched fibre flatwork",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Set RWRP", "Single Neck", "Single Bridge"] },
        { name: "Aged", values: ["Yes", "No"] },
      ],
      buyUrl: `${BASE}/product/68-telecaster/`,
      buildTime: "30–35 working days",
    },
    {
      slug: "esquire",
      name: "Esquire Bridge",
      price: "£90 – £95",
      category: "telecaster",
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-Aged-Esquire-Broadcaster-Bridge-2-700x516.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-Broaadcater-Bridge-Clean-2026-700x525.jpg`,
        `${BASE}/wp-content/uploads/2026/03/Mojo-Tele-Raised-Rings-around-magnets-700x608.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-Aged-Esquire-Broadcaster-Bridge-3-700x478.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-Aged-Esquire-Broadcaster-Bridge-700x504.jpg`,
      ],
      description: [
        "The Esquire bridge is the most aggressive Telecaster bridge sound Mojo makes — designed for a guitar that only has one pickup, so it needs to do everything. Bright, punchy, and unmistakably Telecaster.",
        "43 AWG wire, flush Alnico 3 magnets, UK-made 1.5mm zinc-plated baseplate. Available in vintage (~8kΩ) or modern (~12kΩ) output spec.",
      ],
      specs: [
        "Vintage spec: ~8kΩ",
        "Modern spec: ~12kΩ",
        "Flush Alnico 3 magnets",
        "43 AWG wire",
        "UK-made 1.5mm zinc-plated baseplate",
        "Cloth-covered hookup wire",
      ],
      options: [
        { name: "Spec", values: ["Vintage (~8K)", "Modern (~12K)"] },
        { name: "Aged", values: ["Yes", "No"] },
      ],
      buyUrl: `${BASE}/product/esquire/`,
      buildTime: "30–35 working days",
    },
    {
      slug: "special",
      name: "Telecaster Special",
      price: "£90 – £180",
      category: "telecaster",
      sku: "Mojotele01-1",
      images: [
        `${BASE}/wp-content/uploads/2017/10/Mojo-Pickups-52-Tele-Set-768x542.jpg`,
        `${BASE}/wp-content/uploads/2017/10/Mojo-Pickups-52-Tele-Set.jpg`,
      ],
      description: [
        "More output than the standard vintage sets — these hand-wound pickups feature 42 AWG wire and non-staggered Alnico 5 magnets with a hotter specification. Used in Patrick James Eggle OZ guitars.",
        "Neck: 6kΩ, Bridge: 8.5kΩ. Vintage-spaced poles, white string wrap, copper-plated baseplate, punched flatwork, cloth-covered hookup wire.",
      ],
      specs: [
        "Neck: 6kΩ, 42 AWG",
        "Bridge: 8.5kΩ, 42 AWG",
        "Non-staggered Alnico 5 magnets",
        "Copper-plated baseplate",
        "Punched flatwork",
        "Cloth hookup wire",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Set RWRP", "Single Neck", "Single Bridge"] },
      ],
      buyUrl: `${BASE}/product/telecaster-special/`,
      buildTime: "30–35 working days",
    },
    {
      slug: "49-watkins",
      name: "'49 Watkins Prototype",
      price: "£90 – £95",
      category: "telecaster",
      sku: "MojoES01-1",
      images: [
        `${BASE}/wp-content/uploads/2025/12/Watkins-Prototype-700x469.jpg`,
        `${BASE}/wp-content/uploads/2025/12/Watkins-Prototype-2-700x493.jpg`,
        `${BASE}/wp-content/uploads/2025/12/Aged-Watkins-Prototype-3-700x467.jpg`,
        `${BASE}/wp-content/uploads/2025/12/Aged-Watkins-Prototype-2-700x467.jpg`,
        `${BASE}/wp-content/uploads/2025/12/Aged-Watkins-Prototype-700x467.jpg`,
      ],
      description: [
        "A recreation of the 1949 Roy Watkins prototype — the pre-Telecaster bridge pickup that predates the Fender commercial design. Alnico III magnets, 8.1kΩ output, black protection winding.",
        "Note: this design omits an elevator baseplate, so a separate bridge grounding wire is required. Available clean or aged.",
      ],
      specs: [
        "Output: 8.1kΩ",
        "Alnico III magnets",
        "43 AWG wire",
        "Black protection winding",
        "No elevator baseplate (separate ground required)",
      ],
      options: [
        { name: "Finish", values: ["Clean", "Aged"] },
      ],
      buyUrl: `${BASE}/product/49-watkins-prototype/`,
      buildTime: "30–35 working days",
    },
  ],

  humbucker: [
    {
      slug: "paf-59",
      name: "PAF – Vintage 59",
      price: "£120 – £270",
      category: "humbucker",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2020/09/Mojo-Cover-PAF.jpg`,
        `${BASE}/wp-content/uploads/2020/09/Mojo-PAF-Base.jpg`,
        `${BASE}/wp-content/uploads/2020/09/Mojo-PAF-Cover.jpg`,
        `${BASE}/wp-content/uploads/2020/09/Mojo-Bone-Cream-Black-PAF.jpg`,
        `${BASE}/wp-content/uploads/2020/09/Mojo-Bone-PAF.jpg`,
        `${BASE}/wp-content/uploads/2020/09/Mojo-Cream-PAF.jpg`,
        `${BASE}/wp-content/uploads/2020/09/Mojo-Black-PAF.jpg`,
        `${BASE}/wp-content/uploads/2020/09/Mojo-Zebra-PAF.jpg`,
      ],
      description: [
        "Sweet, open vintage clarity with the right amount of punch — this is the PAF as it existed in 1959. Machine-wound on an automatic winder to replicate the correct turns-per-layer ratio and controlled coil mismatch that define the original Gibson sound.",
        "UK-manufactured covers reverse-engineered from original specimens. USA-made butyrate bobbins. Elektrisola 42 AWG wire. Custom Alnico 5 magnets formulated from measurements taken from vintage examples. Nickel silver baseplate and hardware.",
        "Neck: 7.3kΩ, Bridge: 8.3kΩ. Un-potted as standard. Available in nickel cover, aged nickel, double-black, double bone white, and zebra.",
      ],
      specs: [
        "Neck: 7.3kΩ",
        "Bridge: 8.3kΩ",
        "Machine-wound to PAF spec (as original Gibson)",
        "Controlled coil mismatch",
        "Alnico 5 magnets (vintage-formula)",
        "USA-made butyrate bobbins",
        "UK-made nickel silver covers",
        "Un-potted as standard",
      ],
      options: [
        { name: "Position", values: ["Set", "Neck", "Bridge"] },
        { name: "Colour", values: ["Nickel Cover", "Aged Nickel", "Double Black", "Double Bone White", "Zebra"] },
      ],
      buyUrl: `${BASE}/product/paf-vintage-59/`,
      buildTime: "25–30 working days",
    },
    {
      slug: "paf-57-58",
      name: "PAF – Vintage 57-58 Low Wind",
      price: "£120 – £270",
      category: "humbucker",
      images: [
        `${BASE}/wp-content/uploads/2018/03/Mojo-Pickups-Vintage-PAF-768x511.jpg`,
        `${BASE}/wp-content/uploads/2018/03/Mojo-Pickups-Vintage-PAF.jpg`,
        `${BASE}/wp-content/uploads/2018/03/Mojo-Pickups-PAF-Cover-768x537.jpg`,
        `${BASE}/wp-content/uploads/2018/03/Mojo-Pickups-PAF-Cover.jpg`,
      ],
      description: [
        "The earlier, lower-output PAF specification — the late-1957 and early-1958 sound, before Gibson settled into the heavier wind of the definitive '59. Brighter and more articulate, with dynamic responsiveness that suits both clean and driven tones.",
        "Neck: 7.0kΩ, Bridge: 7.7kΩ. USA-made butyrate bobbins, 42 AWG plain enamel wire, Alnico 5 magnets cloned from vintage examples. UK-made nickel silver covers and baseplates. Maple spacer, braided two-strand hookup wire.",
      ],
      specs: [
        "Neck: 7.0kΩ",
        "Bridge: 7.7kΩ",
        "42 AWG plain enamel wire",
        "Alnico 5 magnets (vintage-formula)",
        "USA-made butyrate bobbins",
        "UK-made nickel silver covers",
        "Braided two-strand hookup wire",
        "Un-potted as standard",
      ],
      options: [
        { name: "Position", values: ["Set", "Neck", "Bridge"] },
        { name: "Colour", values: ["Nickel Cover", "Aged Nickel", "Double Black", "Double Bone White", "Zebra"] },
      ],
      buyUrl: `${BASE}/product/paf-vintage-59-low/`,
      buildTime: "25–30 working days",
    },
    {
      slug: "paf-59-high",
      name: "PAF – Vintage 59 High Wind",
      price: "£120 – £270",
      category: "humbucker",
      images: [
        `${BASE}/wp-content/uploads/2020/09/Mojo-Cover-PAF.jpg`,
        `${BASE}/wp-content/uploads/2020/09/Mojo-PAF-Base.jpg`,
      ],
      description: [
        "The PAF at its most powerful — wound higher for more output, more warmth, and a thicker midrange. The high-wind specification suits players who want the character of a PAF but need more presence at moderate gain settings.",
        "Same construction as the Vintage 59: machine-wound to correct turns-per-layer, controlled coil mismatch, Alnico 5 magnets, USA butyrate bobbins. Just more of it.",
      ],
      specs: [
        "Higher output than standard Vintage 59",
        "Machine-wound to PAF spec",
        "Alnico 5 magnets",
        "USA-made butyrate bobbins",
        "UK-made nickel silver covers",
        "Un-potted as standard",
      ],
      options: [
        { name: "Position", values: ["Set", "Neck", "Bridge"] },
        { name: "Colour", values: ["Nickel Cover", "Aged Nickel", "Double Black", "Double Bone White", "Zebra"] },
      ],
      buyUrl: `${BASE}/product/paf-vintage-59-high-wind/`,
      buildTime: "25–30 working days",
    },
    {
      slug: "paf-nos",
      name: "PAF – Vintage N.O.S Wire",
      price: "£660 – £720",
      category: "humbucker",
      images: [
        `${BASE}/wp-content/uploads/2016/03/Mojo-Pickups-Vintage-PAF-Ag.jpg`,
      ],
      description: [
        "Wound with genuine N.O.S. (New Old Stock) vintage wire — original pre-1960 magnet wire from surviving factory spools. This is as close as it is physically possible to get to a real late-1950s PAF without buying an original.",
        "Everything else matches the Vintage 59 specification: machine-wound to correct turns-per-layer, Alnico 5 magnets, USA butyrate bobbins, UK nickel silver covers. The N.O.S. wire is the difference that cannot be replicated any other way.",
      ],
      specs: [
        "Genuine N.O.S. vintage magnet wire",
        "Machine-wound to PAF spec",
        "Alnico 5 magnets",
        "USA-made butyrate bobbins",
        "UK-made nickel silver covers",
        "Un-potted as standard",
      ],
      options: [
        { name: "Position", values: ["Set", "Neck", "Bridge"] },
        { name: "Colour", values: ["Nickel Cover", "Double Black", "Zebra"] },
      ],
      buyUrl: `${BASE}/product/paf-vintage-n-o-s-wire/`,
      buildTime: "25–30 working days",
    },
  ],

  p90: [
    {
      slug: "soapbar",
      name: "P90 Soapbar 49.2mm",
      price: "£100 – £200",
      category: "p90",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-Black-P90s.jpg`,
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-Nickel-P90s-500x351.jpg`,
      ],
      description: [
        "That classic 50s P90 growl, just with a little more soul. Hand scatter-wound with 42 AWG plain enamel wire on 49.2mm custom-spaced bobbins. Vintage butyrate covers exclusive to Mojo, or UK-made nickel silver covers — your choice.",
        "Neck: ~7.5kΩ, Bridge: ~8.5kΩ. Alnico 3 or Alnico 5 available. The P90 sits between a single-coil and a humbucker — fatter and grittier than a Strat, more open and rawer than a PAF.",
      ],
      specs: [
        "Neck: ~7.5kΩ",
        "Bridge: ~8.5kΩ",
        "42 AWG plain enamel wire",
        "49.2mm custom bobbin spacing",
        "Alnico 3 or Alnico 5 magnets",
        "Vintage butyrate or nickel cover options",
        "Hand scatter-wound",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Set RWRP", "Single Neck", "Single Bridge"] },
        { name: "Cover", values: ["Black", "Cream", "Nickel"] },
        { name: "Alnico", values: ["Alnico 3", "Alnico 5"] },
      ],
      buyUrl: `${BASE}/product/p90-soapbar-butyrate/`,
      buildTime: "30–35 working days",
    },
    {
      slug: "dogear",
      name: "P90 Dogear",
      price: "£80",
      category: "p90",
      images: [
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-Nickel-P90s-500x351.jpg`,
      ],
      description: [
        "The standard P90 internals in a dogear format for Gibson ES-style, archtop, and semi-hollow instruments. Tonally identical to the soapbar — same vintage specification, same scatter-wind, same Alnico bar magnets.",
        "Fits ES-330, ES-125, Casino, and similar hollowbody instruments. Rich, vocal, and cutting. Neck and bridge positions available.",
      ],
      specs: [
        "Dogear mounting format",
        "Alnico bar magnets",
        "Hand scatter-wound",
        "Cloth hookup wire",
        "ES-style compatible",
      ],
      options: [
        { name: "Position", values: ["Neck", "Bridge"] },
        { name: "Cover", values: ["Black", "White", "Cream"] },
      ],
      buyUrl: `${BASE}/product/p90-dogear/`,
      buildTime: "30–35 working days",
    },
    {
      slug: "es330",
      name: "P90 ES330 / Casino",
      price: "£90 – £180",
      category: "p90",
      images: [
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-Black-P90s-500x333.jpg`,
      ],
      description: [
        "P90 pickups specifically voiced and dimensioned for the ES-330 and Epiphone Casino. The ES-330 and Casino are fully hollow — not semi-hollow — so the pickup needs to handle more acoustic resonance without feedback.",
        "Set available with neck and bridge voicings. Scatter-wound, Alnico magnets, potted for feedback resistance.",
      ],
      specs: [
        "ES-330 / Casino specific dimensions",
        "Scatter-wound",
        "Alnico magnets",
        "Wax potted",
        "Neck and bridge available",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Single Neck", "Single Bridge"] },
        { name: "Cover", values: ["Black", "White", "Cream"] },
      ],
      buyUrl: `${BASE}/product/p90-escasino/`,
      buildTime: "30–35 working days",
    },
  ],

  "gold-foil": [
    {
      slug: "teisco",
      name: "Teisco Gold Foil",
      price: "£100 – £200",
      category: "gold-foil",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-Gold-Foils.jpg`,
      ],
      description: [
        "The classic Teisco-style gold foil pickup — 44 AWG wire, ceramic magnets, bright, lively and delightfully characterful. The original sound of 1960s Japanese guitars that turned heads again when Jack White, Ry Cooder and Beck made it famous.",
        "Neck: 6.1kΩ, Bridge: 7kΩ. Routing: 86.5 × 32mm. Available as gold or silver foil finish, in neck, bridge, or matched sets.",
      ],
      specs: [
        "Neck: 6.1kΩ",
        "Bridge: 7.0kΩ",
        "44 AWG wire",
        "Ceramic magnets",
        "Routing: 86.5 × 32mm",
        "Height: 12mm",
        "Gold or silver foil finish",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Single Neck", "Single Middle", "Single Bridge"] },
        { name: "Foil", values: ["Gold", "Silver"] },
      ],
      buyUrl: `${BASE}/product/gold-foil-teisco-2/`,
      buildTime: "30–35 working days",
    },
    {
      slug: "dual-foil",
      name: "Dual Foil Humbucker Gold Foil",
      price: "£150 – £300",
      category: "gold-foil",
      images: [
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-Gold-Foils.jpg`,
      ],
      description: [
        "Two gold foil coils in a humbucker format — hum-cancelling with all the bright, lively character of a single gold foil. Available in standard humbucker (PAF), Jazzmaster, Wide Range, and Filtertron sizes.",
        "The dual foil delivers a genuinely unique sound: the mid-scoop and openness of a gold foil, but full and hum-free. Works in any instrument routed for a standard humbucker.",
      ],
      specs: [
        "Dual foil hum-cancelling construction",
        "Standard humbucker (PAF) format",
        "Ceramic magnets",
        "Gold or silver foil",
        "Various sizes available",
      ],
      options: [
        { name: "Size", values: ["Humbucker (PAF)", "Jazzmaster", "Wide Range", "Filtertron"] },
        { name: "Foil", values: ["Gold", "Silver"] },
      ],
      buyUrl: `${BASE}/product/dual-foil-humbucker-gold-foil/`,
      buildTime: "35–40 working days",
    },
    {
      slug: "strat-gold-foil",
      name: "Strat Sized Gold Foil",
      price: "£85 – £255",
      category: "gold-foil",
      images: [
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-Gold-Foils.jpg`,
      ],
      description: [
        "Gold foil character in a drop-in Stratocaster format. 44 AWG wire, ceramic magnets, available as neck, middle, bridge singles or matched sets in gold or silver foil.",
        "The Strat Sized Gold Foil is a direct replacement for any standard single-coil Strat pickup. No routing or modification required.",
      ],
      specs: [
        "Strat single-coil format",
        "44 AWG wire, ceramic magnets",
        "Gold or silver foil finish",
        "Direct Strat replacement",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Single Neck", "Single Middle", "Single Bridge"] },
        { name: "Foil", values: ["Gold", "Silver"] },
      ],
      buyUrl: `${BASE}/product/strat-sized-gold-foil/`,
      buildTime: "30–35 working days",
    },
  ],

  jazzmaster: [
    {
      slug: "jazzmaster-58-64",
      name: "Jazzmaster (58–64)",
      price: "£90 – £180",
      category: "jazzmaster",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2017/10/Mojo-Pickups-Jazzmaster.jpg`,
        `${BASE}/wp-content/uploads/2026/04/Mojo-Pickups-Pre-CBS-Jazzmaster-700x574.webp`,
        `${BASE}/wp-content/uploads/2026/04/Mojo-Pickups-Jazzmaster-punched-flatwork-and-laqcuer-dipped-700x712.webp`,
        `${BASE}/wp-content/uploads/2026/04/Mojo-Jazzmaster-Covers-700x795.webp`,
        `${BASE}/wp-content/uploads/2026/04/Mojo-Pickups-Jazzmaster-Plain-Enamel-700x655.webp`,
        `${BASE}/wp-content/uploads/2026/04/Mojo-Pickups-Jazzmaster-Cover-colours-700x525.webp`,
        `${BASE}/wp-content/uploads/2026/04/Mojo-Punched-Jazzmaster-Flatwork-700x668.webp`,
      ],
      description: [
        "The original Jazzmaster pickup set recreated to full Fullerton-era specification — punchy lows, complex mids, and articulate treble response. Wider and flatter geometry than a Strat pickup, producing that characteristic warm, rounded attack.",
        "42 AWG plain enamel wire, Alnico 5 magnets, punched Forbon fibre flatwork, lacquer-dipped bobbins. Neck: 8.3kΩ, Bridge: 8.7kΩ. Pot recommendations: 1Meg for vintage chime, 500k for a smoother response.",
        "Available for Jazzmaster and Jaguar. Full sets include rhythm and lead circuit compatible pair.",
      ],
      specs: [
        "Neck: 8.3kΩ",
        "Bridge: 8.7kΩ",
        "42 AWG plain enamel wire",
        "Alnico 5 magnets",
        "Punched Forbon fibre flatwork",
        "Lacquer-dipped bobbins",
        "Wide/flat coil geometry",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Single Neck", "Single Bridge"] },
        { name: "Colour", values: ["Black", "Aged White", "White"] },
      ],
      buyUrl: `${BASE}/product/jazzmaster-58-64/`,
      buildTime: "30–35 working days",
    },
    {
      slug: "jazzmaster-metal",
      name: "Jazzmaster With Metal Cover",
      price: "£100 – £200",
      category: "jazzmaster",
      images: [
        `${BASE}/wp-content/uploads/2017/10/Mojo-Pickups-Jazzmaster-768x512.jpg`,
      ],
      description: [
        "The standard Jazzmaster (58–64) voicing, fitted with nickel metal covers. The cover adds a subtle warmth and slightly tames the high end — preferred by many players for its look and tonal character.",
        "Same hand-wound construction, same specs as the standard Jazzmaster. Available as full set or individual positions.",
      ],
      specs: [
        "Neck: 8.3kΩ",
        "Bridge: 8.7kΩ",
        "Nickel metal covers",
        "42 AWG plain enamel wire",
        "Alnico 5 magnets",
        "Punched flatwork",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Single Neck", "Single Bridge"] },
        { name: "Cover", values: ["Nickel", "Open Nickel"] },
      ],
      buyUrl: `${BASE}/product/jazzmaster-nickel-covers/`,
      buildTime: "30–35 working days",
    },
  ],

  cunife: [
    {
      slug: "wide-range",
      name: "CuNiFe Wide Range Humbucker",
      price: "£150 – £260",
      category: "cunife",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2016/03/Mojo-CuNiFe-Wide-Range.jpg`,
      ],
      description: [
        "Seth Lover's original Wide Range design — built with genuine CuNiFe (Copper-Nickel-Iron) alloy magnets. This is the spec Seth Lover actually intended when he designed the Wide Range humbucker in 1971 for Fender. Most reproductions miss this entirely, using Alnico or ceramic instead.",
        "CuNiFe magnets produce a frequency range that Alnico simply cannot replicate: crystalline highs, defined mids, and a percussive snap that players describe as 'hi-fi' — closer to a great single coil than a standard PAF.",
        "Compatible with Telecaster Thinline (72 reissue), Telecaster Deluxe, and any Wide Range humbucker routing. UK-wound in Ripponden.",
      ],
      specs: [
        "Genuine CuNiFe (Copper-Nickel-Iron) alloy magnets",
        "Seth Lover Wide Range specification",
        "Telecaster Thinline & Deluxe compatible",
        "True wide frequency response",
        "Neck & bridge positions available",
      ],
      options: [
        { name: "Position", values: ["Neck", "Bridge", "Matched Set"] },
        { name: "Cover", values: ["Nickel", "Chrome"] },
      ],
      buyUrl: `${BASE}/product-category/cunife/`,
      buildTime: "40–45 working days",
    },
    {
      slug: "cunife-strat",
      name: "CuNiFe Adjustable Stratocaster",
      price: "£75 – £225",
      category: "cunife",
      images: [
        `${BASE}/wp-content/uploads/2023/04/Cunife-Strat.jpg`,
        `${BASE}/wp-content/uploads/2023/04/Cunife-Strat-2.jpg`,
        `${BASE}/wp-content/uploads/2023/06/Cunife-Stratocaster-Plastic.jpg`,
      ],
      description: [
        "CuNiFe magnets in a vintage-correct Strat format with fully adjustable pole pieces. All the vintage Stratocaster character you expect, plus the added harmonic depth and percussive snap unique to copper-nickel-iron magnets.",
        "Neck: 8.5kΩ, Middle: 9.0kΩ, Bridge: 10.5kΩ. Wound with 43 AWG wire to compensate for CuNiFe's magnetic properties. Magnetic steel baseplate included.",
      ],
      specs: [
        "Neck: 8.5kΩ",
        "Middle: 9.0kΩ",
        "Bridge: 10.5kΩ",
        "CuNiFe alloy magnets — fully adjustable",
        "43 AWG wire",
        "Magnetic steel baseplate",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Set RWRP", "Single Neck", "Single Middle", "Single Bridge"] },
        { name: "Cover", values: ["Open Nickel", "Aged White", "Black", "Cream", "White"] },
      ],
      buyUrl: `${BASE}/product/cunife-strat/`,
      buildTime: "30–35 working days",
    },
  ],

  mojotron: [
    {
      slug: "mojotron",
      name: "Mojotron® – Filtertron® Sized",
      price: "£110 – £240",
      category: "mojotron",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2017/10/Mojo-Pickups-MojoTron-Filte.jpg`,
        `${BASE}/wp-content/uploads/2025/10/Gold-Mojotron-Filtertron.jpg`,
        `${BASE}/wp-content/uploads/2025/10/Black-Mojotron-Filtertron.jpg`,
      ],
      description: [
        "Bright, punchy, and unmistakably twangy — the Mojotron captures vintage Filtertron® tone with hand-wound construction. 42 AWG wire, 1/4-inch Alnico 5 bar magnets, fully wax-potted. Ideal for country, rockabilly, and garage rock.",
        "Bridge: 5kΩ / 2.25H (focused, aggressive). Neck: 4.2kΩ / 1.52H (warm, woody). Nickel silver covers. Drop-in fit for La Cabronita® routes and most Gretsch-compatible routing.",
      ],
      specs: [
        "Bridge: 5kΩ / 2.25H",
        "Neck: 4.2kΩ / 1.52H",
        "42 AWG wire",
        "¼-inch Alnico 5 bar magnets",
        "Fully wax-potted",
        "Nickel silver covers",
        "Gretsch / La Cabronita compatible",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Single Neck", "Single Bridge"] },
        { name: "Cover", values: ["Nickel", "Gold", "Black"] },
      ],
      buyUrl: `${BASE}/product/mojotron/`,
      buildTime: "30–35 working days",
    },
  ],

  "charlie-christian": [
    {
      slug: "charlie-christian",
      name: "Charlie Christian 38awg",
      price: "£110",
      category: "charlie-christian",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2016/09/Mojo-Pickups-Charlie-Christ.jpg`,
      ],
      description: [
        "A thick-yet-articulate electric-acoustic voice — the biggest, boldest single-coil sound available. The Charlie Christian pickup defined jazz guitar tone before the P90 or PAF existed. Marc's version is built from original measurements with a black and white acrylic top, radiused steel blade, and vintage-correct 38 AWG wire.",
        "Neck: 3.2kΩ (silky, woody, harmonically rich). Middle: 3.2kΩ (balanced sparkle and depth). Bridge: 3.6kΩ (extra bite and presence). Alnico 5 magnets. Footprint: 85mm × 28mm.",
      ],
      specs: [
        "Neck: 3.2kΩ",
        "Middle: 3.2kΩ",
        "Bridge: 3.6kΩ",
        "38 AWG vintage-correct wire",
        "Alnico 5 magnets",
        "Radiused steel blade",
        "Footprint: 85mm × 28mm, Height: 24mm",
        "Traditional cloth hookup wire",
      ],
      options: [
        { name: "Position", values: ["Neck", "Middle", "Bridge"] },
      ],
      buyUrl: `${BASE}/product/charlie-christian/`,
      buildTime: "30–35 working days",
    },
  ],

  dynas: [
    {
      slug: "dyna-sonic",
      name: "Dyna Sonic",
      price: "£110 – £220",
      category: "dynas",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-Dyna-Sonic-Pickups.jpg`,
      ],
      description: [
        "The DeArmond-style Dyna Sonic — individually adjustable Alnico pole pieces, bright and jangly, with a character that sits entirely outside the Fender or Gibson world. Originally produced by DeArmond and fitted to Guild guitars in the 1950s.",
        "Open, clear, and completely addictive. Available in standard adjustable format and in various housing sizes including humbucker (PAF), Firebird, and Filtertron formats.",
      ],
      specs: [
        "Individually adjustable Alnico pole pieces",
        "Hand-wound coils",
        "DeArmond/Guild vintage specification",
        "Bright, jangly single-coil character",
        "Multiple housing sizes available",
      ],
      options: [
        { name: "Position", values: ["Neck", "Bridge", "Matched Set"] },
        { name: "Cover", values: ["Nickel", "Chrome", "Gold"] },
      ],
      buyUrl: `${BASE}/product-category/dynasonic/`,
      buildTime: "40–45 working days",
    },
    {
      slug: "dyna-humbucker",
      name: "Humbucker Sized Dyna",
      price: "£110 – £220",
      category: "dynas",
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-Dyna-Sonic-Pickups.jpg`,
      ],
      description: [
        "The Dyna Sonic character in a standard humbucker (PAF) format. Drop-in replacement for any Les Paul or humbucker-routed guitar, with the bright, jangly, articulate voice of the classic Dyna.",
        "Available with standard nickel cover, 'Jetson' cover, aged white top, or tortoise top. Neck and bridge positions available.",
      ],
      specs: [
        "Humbucker (PAF) format",
        "Dyna Sonic voice",
        "Adjustable Alnico poles",
        "Multiple top options",
        "Drop-in humbucker replacement",
      ],
      options: [
        { name: "Position", values: ["Neck", "Bridge", "Matched Set"] },
        { name: "Top", values: ["Standard Nickel", "Jetson Cover", "Aged White", "Tortoise"] },
      ],
      buyUrl: `${BASE}/product/humbucker-dyna/`,
      buildTime: "40–45 working days",
    },
  ],

  bass: [
    {
      slug: "58-p-bass",
      name: "58 P Bass",
      price: "£130",
      category: "bass",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2023/04/Mojo-Pickups-P-Bass-700x482.jpg`,
        `${BASE}/wp-content/uploads/2023/04/Mojo-Pickups-P-Bass.jpg`,
      ],
      description: [
        "A hand-wound tribute to the 1958 Precision Bass — the pickup that defined recorded bass tone. Scatter-wound 42 AWG plain enamel wire across opposing split coils for hum-cancellation, delivering muscular low-end with controlled midrange and smooth highs.",
        "Whisper-quiet but loud in character. DC resistance ~10kΩ. Alnico V magnets, hand-bevelled. Vintage cloth push-back lead wire. Classic black covers included.",
      ],
      specs: [
        "DC Resistance: ~10kΩ",
        "42 AWG plain enamel wire",
        "Alnico V magnets (hand-bevelled)",
        "Split-coil hum-cancelling",
        "Hand scatter-wound",
        "Wax potted",
        "Vintage cloth push-back lead wire",
      ],
      buyUrl: `${BASE}/product/p-bass/`,
      buildTime: "30–35 working days",
    },
    {
      slug: "51-p-bass",
      name: "'51 P Bass",
      price: "£85",
      category: "bass",
      images: [
        `${BASE}/wp-content/uploads/2023/04/Mojo-Pickups-P-Bass-700x482.jpg`,
      ],
      description: [
        "The original single-coil Precision Bass pickup — the 1951 spec before the split-coil design. Bright and punchy, with a Telecaster-like character that no split-coil P-Bass can replicate.",
        "Hand-wound, Alnico magnets. Compatible with original '51-style and reissue P-Bass routing.",
      ],
      specs: [
        "Single-coil format (pre-split-coil)",
        "Alnico magnets",
        "Hand-wound",
        "1951 Precision Bass spec",
      ],
      buyUrl: `${BASE}/product/51bass/`,
      buildTime: "30–35 working days",
    },
    {
      slug: "bass-vi",
      name: "Bass VI",
      price: "£80 – £240",
      category: "bass",
      images: [
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-Gold-Foils.jpg`,
      ],
      description: [
        "Pickups for the Bass VI — Fender's six-string baritone bass. Available in various styles to match the original single-coil and gold foil configurations used across different Bass VI production years.",
        "Neck, middle, and bridge positions available. Various voicings to match '61 through late-'60s specifications.",
      ],
      specs: [
        "Bass VI specific format",
        "Neck, middle, bridge available",
        "Various era specifications",
        "Hand-wound",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Single Neck", "Single Middle", "Single Bridge"] },
      ],
      buyUrl: `${BASE}/product/bass-vi-6/`,
      buildTime: "35–40 working days",
    },
  ],

  lipstick: [
    {
      slug: "lipstick-strat",
      name: "Lipstick Strat Sized",
      price: "£70",
      category: "lipstick",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-Strat-Lipstick-1024x683.jpg`,
      ],
      description: [
        "Hand-wound lipstick tube pickups for Stratocaster — 42 AWG wire wound directly around custom Alnico 6 magnets, following the original Danelectro blueprint. Percussive, hollow chime and high-end shimmer. A drop-in replacement for standard Strat single-coils.",
        "Neck: 3.6kΩ, Middle: 3.8kΩ, Bridge: 4.2kΩ. Nickel-plated covers. No-bobbin construction, just like the originals.",
      ],
      specs: [
        "Neck: 3.6kΩ",
        "Middle: 3.8kΩ",
        "Bridge: 4.2kΩ",
        "42 AWG wire",
        "Custom Alnico 6 magnets",
        "No-bobbin construction",
        "Nickel-plated covers",
        "Drop-in Strat replacement",
      ],
      options: [
        { name: "Position", values: ["Single Neck", "Single Middle", "Single Bridge"] },
      ],
      buyUrl: `${BASE}/product/lipstick-strat-sized/`,
      buildTime: "30–35 working days",
    },
    {
      slug: "lipstick-humbucker",
      name: "Lipstick Humbucker",
      price: "£150",
      category: "lipstick",
      images: [
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-Strat-Lipstick-1024x683.jpg`,
      ],
      description: [
        "Two lipstick tube coils in a hum-cancelling humbucker format. All the lipstick chime and character, without the single-coil hum. For any humbucker-routed guitar.",
        "Custom Alnico 6 magnets. 42 AWG wire. Nickel-plated covers.",
      ],
      specs: [
        "Dual lipstick tube coils",
        "Humbucker format",
        "Hum-cancelling",
        "Custom Alnico 6 magnets",
        "Nickel-plated covers",
      ],
      buyUrl: `${BASE}/product/lipstick-humbucker/`,
      buildTime: "35–40 working days",
    },
  ],
};

export function getProduct(category: string, slug: string): Product | undefined {
  return products[category]?.find((p) => p.slug === slug);
}

export function getCategoryProducts(category: string): Product[] {
  return products[category] ?? [];
}
