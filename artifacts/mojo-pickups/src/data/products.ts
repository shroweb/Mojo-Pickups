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
        "These are currently being wound with Heavy Formvar wire from a November 1958 spool of REA Magnet Wire Co. wire — original N.O.S. wire from a Fort Wayne, Indiana factory, wound the same month these pickups would originally have been made.",
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
  ],
  humbucker: [
    {
      slug: "vintage-paf",
      name: "Vintage PAF",
      price: "£125 – £250",
      category: "humbucker",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2016/03/Mojo-Pickups-Vintage-PAF-Ag.jpg`,
        `${BASE}/wp-content/uploads/2016/03/Mojo-Pickups-Vintage-PAF-Uncovered.jpg`,
        `${BASE}/wp-content/uploads/2016/03/Mojo-Pickups-Vintage-PAF-Chrome.jpg`,
      ],
      description: [
        "True vintage PAF tone requires mismatched coils — wound with slightly different turn counts on each bobbin, exactly the way Gibson's automatic winders produced them in the late 1950s. Marc replicates this using the same method: an automatic winder set to true PAF specs.",
        "Un-potted as standard (potting available on request). Alnico 2 or 4 magnets, vintage-correct bobbins, braided two-conductor wire. For the player who wants to know what a real PAF felt like to play.",
        "The secret to the PAF's elusive character is the controlled inconsistency of the original winding process. Marc's PAFs are wound to true vintage turn counts — not modern approximations. Covers available in nickel, chrome, double-cream, and zebra.",
      ],
      specs: [
        "Mismatched coil winding (automatic wound, as original)",
        "Alnico 2 or Alnico 4 magnets",
        "True vintage turn count",
        "Un-potted as standard",
        "Braided two-conductor wire",
        "Vintage-correct bobbins",
      ],
      options: [
        { name: "Position", values: ["Neck", "Bridge", "Set"] },
        { name: "Cover", values: ["Nickel", "Chrome", "Double Cream", "Zebra", "Uncovered"] },
        { name: "Alnico", values: ["Alnico 2", "Alnico 4"] },
      ],
      buyUrl: `${BASE}/product/vintage-paf-humbucker/`,
      buildTime: "40–45 working days",
    },
    {
      slug: "firebird",
      name: "Firebird Mini Humbucker",
      price: "£125 – £200",
      category: "humbucker",
      images: [
        `${BASE}/wp-content/uploads/2016/03/Mojo-Pickups-Firebird-Pickup.jpg`,
      ],
      description: [
        "The mini-humbucker bark and jangle of a 1960s Gibson Firebird. Brighter and more articulate than a full-size PAF, with a distinctive snap and single-coil-like clarity that standard humbuckers cannot replicate.",
        "Built to correct Firebird specification with Alnico magnets. Used famously by Johnny Winter and Allen Collins. Available for both original Firebird routing and standard humbucker-sized rings.",
      ],
      specs: [
        "Mini-humbucker format",
        "Alnico magnets",
        "Vintage Firebird specification",
        "Available for Firebird or standard ring mounting",
        "Braided two-conductor wire",
      ],
      options: [
        { name: "Position", values: ["Neck", "Bridge", "Set"] },
        { name: "Mount", values: ["Firebird Route", "Standard Ring"] },
      ],
      buyUrl: `${BASE}/product-category/humbuckers/`,
      buildTime: "40–45 working days",
    },
  ],
  p90: [
    {
      slug: "soapbar",
      name: "P90 Soapbar",
      price: "£100 – £200",
      category: "p90",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-Nickel-P90s-500x351.jpg`,
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-Black-P90s-500x333.jpg`,
      ],
      description: [
        "Vintage-voiced P90 soapbar pickups wound to genuine Alnico specification. The P90 sits between a single coil and a humbucker — fatter and grittier than a Strat, more open and rawer than a PAF. When it's right, it's right.",
        "Aged Alnico 5 bar magnets loaded, beeswax and paraffin potted. Punched flatwork. Available in standard 49.2mm or 50mm spacing for Les Paul and other Gibson-pattern instruments.",
        "Scatter-wound by hand in Ripponden. Cloth-covered hookup wire. Available in neck and bridge voicings, or as a matched set.",
      ],
      specs: [
        "Aged Alnico 5 bar magnets",
        "Hand scatter-wound",
        "Beeswax & paraffin potted",
        "Punched flatwork",
        "49.2mm or 50mm pole spacing",
        "Cloth hookup wire",
      ],
      options: [
        { name: "Position", values: ["Neck", "Bridge", "Set"] },
        { name: "Cover", values: ["Black", "White", "Cream", "Nickel", "Uncovered"] },
        { name: "Aged Magnets", values: ["Yes", "No"] },
      ],
      buyUrl: `${BASE}/product/p90-soapbar-butyrate/`,
      buildTime: "35–40 working days",
    },
    {
      slug: "dogear",
      name: "P90 Dogear",
      price: "£100 – £200",
      category: "p90",
      images: [
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-P90-Dogear.jpg`,
      ],
      description: [
        "Tonally identical to the soapbar — same vintage specification, same scatter-wind, same Alnico bar magnets. The dogear format fits Gibson ES-style, archtop, and some semi-hollow guitars.",
        "Rich, vocal, and cutting. Ideal for ES-330, ES-125, Casino, and similar semi-hollow and hollowbody instruments. Available in neck and bridge positions.",
      ],
      specs: [
        "Dogear mounting format",
        "Aged Alnico 5 bar magnets",
        "Hand scatter-wound",
        "Beeswax & paraffin potted",
        "Cloth hookup wire",
        "ES-style and archtop compatible",
      ],
      options: [
        { name: "Position", values: ["Neck", "Bridge", "Set"] },
        { name: "Cover", values: ["Black", "White", "Cream"] },
        { name: "Aged Magnets", values: ["Yes", "No"] },
      ],
      buyUrl: `${BASE}/product/p90-dogear/`,
      buildTime: "35–40 working days",
    },
  ],
  "gold-foil": [
    {
      slug: "guyatone",
      name: "Guyatone Gold Foil",
      price: "£85 – £300",
      category: "gold-foil",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-Gold-Foils.jpg`,
        `${BASE}/wp-content/uploads/2015/08/Mojo-Pickups-Gold-Foil-Single.jpg`,
      ],
      description: [
        "The Guyatone-style gold foil pickup — lo-fi clarity and harmonic grit unlike anything else on the market. Originally fitted to cheap Japanese guitars in the 1960s, the sound captured by Jack White, Ry Cooder and Beck is warm, punchy and airy all at once.",
        "Built to vintage spec, wound by hand in Ripponden. Multiple flavours available — Guyatone, Teisco, DeArmond and Rowe styles, each with their own distinct character.",
        "Available as neck, bridge, or matched sets. Gold foil construction with authentic cover profiles. Mounting options for most vintage Japanese and US offset-style guitars.",
      ],
      specs: [
        "Gold foil construction",
        "Multiple vintage styles (Guyatone, Teisco, DeArmond, Rowe)",
        "Hand-wound",
        "Various mounting options",
        "Neck, bridge, or matched sets",
      ],
      options: [
        { name: "Style", values: ["Guyatone", "Teisco", "DeArmond", "Rowe"] },
        { name: "Configuration", values: ["Neck", "Bridge", "Matched Set"] },
      ],
      buyUrl: `${BASE}/product-category/gold-foil/`,
      buildTime: "40–45 working days",
    },
  ],
  jazzmaster: [
    {
      slug: "jazzmaster",
      name: "Jazzmaster",
      price: "£90 – £270",
      category: "jazzmaster",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2017/10/Mojo-Pickups-Jazzmaster.jpg`,
        `${BASE}/wp-content/uploads/2017/10/Mojo-Pickups-Jazzmaster-Pair.jpg`,
      ],
      description: [
        "Premium Alnico offset pickups wound to vintage specification. The Jazzmaster pickup has a character all of its own — wider and flatter than a Strat pickup, producing a warmer, fuller sound with a more rounded attack.",
        "Available as sets or singles for Jazzmaster and Jaguar. Various Alnico grades available. Full sets include a rhythm and lead circuit compatible pair.",
        "Wound to authentic Fullerton-era specifications. Flatwork punched, not laser cut. Alnico 2 for warm rhythm circuit response; Alnico 5 for brighter, more present lead tones.",
      ],
      specs: [
        "Offset Jazzmaster/Jaguar dimensions",
        "Alnico 2 or 5 magnets",
        "Hand scatter-wound",
        "Vintage-correct flatwork",
        "Full sets or singles",
        "Cloth hookup wire",
      ],
      options: [
        { name: "Model", values: ["Jazzmaster", "Jaguar"] },
        { name: "Configuration", values: ["Full Set", "Neck Only", "Bridge Only"] },
        { name: "Alnico", values: ["Alnico 2", "Alnico 5"] },
      ],
      buyUrl: `${BASE}/product-category/jazzmaster-jaguar/`,
      buildTime: "40–45 working days",
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
        `${BASE}/wp-content/uploads/2016/03/Mojo-CuNiFe-Wide-Range-Pair.jpg`,
      ],
      description: [
        "Seth Lover's original Wide Range design — built with genuine CuNiFe (Copper-Nickel-Iron) alloy magnets. This is the spec Seth Lover actually intended when he designed the Wide Range humbucker in 1971 for Fender. Most reproductions miss this entirely, using Alnico or ceramic instead.",
        "CuNiFe magnets produce a frequency range that Alnico simply cannot replicate: crystalline highs, defined mids, and a percussive snap that players describe as 'hi-fi' — closer to a great single coil than a standard PAF.",
        "Compatible with Telecaster Thinline (72 reissue), Telecaster Deluxe, and any Wide Range humbucker routing. UK-wound in Ripponden. Available as neck, bridge, or matched set.",
      ],
      specs: [
        "Genuine CuNiFe (Copper-Nickel-Iron) alloy magnets",
        "Seth Lover Wide Range specification",
        "Telecaster Thinline & Deluxe compatible",
        "True wide frequency response",
        "UK-wound in Ripponden",
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
        `${BASE}/wp-content/uploads/2016/03/Mojo-CuNiFe-Strat.jpg`,
      ],
      description: [
        "The hi-fi magic of CuNiFe magnets in a vintage-correct Strat format with fully adjustable poles. All the vintage Stratocaster character you expect, plus the added harmonic depth and percussive snap unique to copper-nickel-iron magnets.",
        "Adjustable poles let you dial in precise string-to-string balance — something no flush-pole pickup can offer. Scatter-wound, punched flatwork, cloth-covered hookup wire.",
      ],
      specs: [
        "CuNiFe alloy magnets — fully adjustable",
        "Strat-compatible format",
        "42 AWG wire, scatter-wound",
        "Punched flatwork",
        "Complete string-to-string balance",
        "Cloth hookup wire",
      ],
      options: [
        { name: "Configuration", values: ["Set", "Set RWRP", "Single Neck", "Single Middle", "Single Bridge"] },
        { name: "Colour", values: ["White", "Black", "Cream"] },
      ],
      buyUrl: `${BASE}/product-category/cunife/`,
      buildTime: "40–45 working days",
    },
  ],
  mojotron: [
    {
      slug: "mojotron",
      name: "Mojotron",
      price: "£125 – £260",
      category: "mojotron",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-Mojotron-Pickups.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-Mojotron-Set.jpg`,
      ],
      description: [
        "The Mojotron is Mojo's take on the classic FilterTron-style humbucker — that sharp, jangly, slightly gritty twang associated with Gretsch guitars and the sound of rockabilly and early rock and roll. Clean and chimey on a clean amp; snarling and cutting when you push it.",
        "Built to authentic FilterTron specifications with the correct coil geometry and Alnico magnets. Available in standard FilterTron sizing for most Gretsch-style routing. Sets include matched neck and bridge units.",
      ],
      specs: [
        "FilterTron-style humbucker format",
        "Alnico magnets",
        "Hand-wound in Ripponden",
        "Gretsch-compatible routing",
        "Neck and bridge available",
        "Matched sets available",
      ],
      options: [
        { name: "Position", values: ["Neck", "Bridge", "Matched Set"] },
        { name: "Cover", values: ["Nickel", "Gold", "Chrome"] },
      ],
      buyUrl: `${BASE}/product/mojotron/`,
      buildTime: "40–45 working days",
    },
  ],
  "charlie-christian": [
    {
      slug: "charlie-christian",
      name: "Charlie Christian",
      price: "£100 – £200",
      category: "charlie-christian",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-Charlie-Christian-Pickup.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-Charlie-Christian-Pair.jpg`,
      ],
      description: [
        "The pickup that started it all — the Gibson ES-150 bar pickup used by Charlie Christian in the late 1930s and early 1940s. Warm, woody, and with a distinctive vocal midrange that makes every note sing on an archtop or hollowbody.",
        "Built to vintage ES-150 specification with a single blade magnet and hand-wound coil. Cloth-covered two-conductor wire. Mounting hardware included for standard Charlie Christian routing.",
        "The Charlie Christian pickup defined jazz guitar tone before the P90 or PAF existed. Marc's version is built from original measurements and produces that same throaty, round warmth.",
      ],
      specs: [
        "Vintage ES-150 specification",
        "Single blade magnet construction",
        "Hand-wound coil",
        "Cloth-covered two-conductor wire",
        "Archtop & hollowbody compatible",
        "Mounting hardware included",
      ],
      options: [
        { name: "Position", values: ["Neck", "Bridge"] },
        { name: "Cover", values: ["Nickel", "Chrome"] },
      ],
      buyUrl: `${BASE}/product/charlie-christian/`,
      buildTime: "40–45 working days",
    },
  ],
  dynas: [
    {
      slug: "dyna-sonic",
      name: "Dyna Sonic",
      price: "£100 – £200",
      category: "dynas",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-Dyna-Sonic-Pickups.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-Dyna-Sonic-Pair.jpg`,
      ],
      description: [
        "The Dyna Sonic — originally produced by DeArmond and fitted to Guild guitars in the 1950s — is one of the most unique-sounding pickups ever made. Individual adjustable poles, Alnico magnets, and a very particular bright, jangly tone that sits somewhere between a single coil and a DeArmond-style pickup.",
        "Marc's version is built to authentic vintage specification with individually adjustable Alnico pole pieces and hand-wound coils. The result is that unmistakable Dyna Sonic character: open, clear, slightly nasal, and completely addictive.",
      ],
      specs: [
        "Individually adjustable Alnico pole pieces",
        "Hand-wound coils",
        "DeArmond/Guild vintage specification",
        "Bright, jangly single-coil character",
        "Neck and bridge available",
        "Various mounting options",
      ],
      options: [
        { name: "Position", values: ["Neck", "Bridge", "Matched Set"] },
        { name: "Cover", values: ["Nickel", "Chrome", "Gold"] },
      ],
      buyUrl: `${BASE}/product-category/dynas/`,
      buildTime: "40–45 working days",
    },
  ],
  bass: [
    {
      slug: "precision",
      name: "Precision Bass",
      price: "£90 – £180",
      category: "bass",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-Precision-Bass-Pickup.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-Bass-Pickup-Pair.jpg`,
      ],
      description: [
        "Vintage-voiced split-coil Precision Bass pickups wound to pre-CBS specification. The P-Bass pickup is the foundation of recorded bass — from Motown to punk, that round, punchy fundamental is built into almost every great bass track ever made.",
        "Wound with 42 AWG Formvar or Plain Enamel wire depending on era specification. Alnico 5 magnets. Available in the correct split-coil format. Suitable for both 51-style single coil and split-coil P-Bass routing.",
      ],
      specs: [
        "Split-coil format (vintage P-Bass spec)",
        "Alnico 5 magnets",
        "42 AWG wire",
        "Cloth-covered hookup wire",
        "Pre-CBS era specification",
      ],
      options: [
        { name: "Era", values: ["51 Single Coil", "57 Split Coil", "62 Split Coil"] },
        { name: "Cover", values: ["Black", "White", "Cream"] },
      ],
      buyUrl: `${BASE}/product-category/bass/`,
      buildTime: "40–45 working days",
    },
    {
      slug: "jazz",
      name: "Jazz Bass",
      price: "£90 – £180",
      category: "bass",
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-Jazz-Bass-Pickup.jpg`,
      ],
      description: [
        "Vintage-spec Jazz Bass single-coil pickups wound to early-'60s Fender specification. The Jazz Bass pickup produces that characteristic glassy, scooped tone — tight lows, present upper mids, and a brightness that cuts through any mix.",
        "Wound with 42 AWG Plain Enamel wire. Alnico 5 magnets. Available as matched pairs in neck and bridge voicings (correct resistance differential between positions).",
      ],
      specs: [
        "Single-coil Jazz Bass format",
        "Alnico 5 magnets",
        "42 AWG Plain Enamel wire",
        "Vintage 60s specification",
        "Matched neck & bridge pairs",
        "Cloth hookup wire",
      ],
      options: [
        { name: "Configuration", values: ["Neck & Bridge Set", "Neck Only", "Bridge Only"] },
        { name: "Cover", values: ["Black", "White", "Cream"] },
      ],
      buyUrl: `${BASE}/product-category/bass/`,
      buildTime: "40–45 working days",
    },
  ],
  lipstick: [
    {
      slug: "lipstick",
      name: "Lipstick Tube",
      price: "£65 – £180",
      category: "lipstick",
      featured: true,
      images: [
        `${BASE}/wp-content/uploads/2015/07/Mojo-Lipstick-Tube-Pickup.jpg`,
        `${BASE}/wp-content/uploads/2015/07/Mojo-Lipstick-Pair.jpg`,
      ],
      description: [
        "Lipstick tube pickups built to authentic Danelectro specification — that thin, nasal, chimey tone used by Jimmy Page, David Gilmour, and Syd Barrett, among many others. The lipstick enclosure isn't just cosmetic: it shapes the magnetic field and contributes directly to the pickup's unique response.",
        "Available in various configurations for single-pickup and multi-pickup instruments. Neck, bridge, and middle positions available. The bridge lipstick runs slightly hotter for balance.",
      ],
      specs: [
        "Lipstick tube enclosure",
        "Alnico bar magnet",
        "Hand-wound coil",
        "Danelectro-compatible mounting",
        "Neck and bridge voicings",
        "Cloth hookup wire",
      ],
      options: [
        { name: "Position", values: ["Neck", "Bridge", "Middle", "Matched Set"] },
        { name: "Colour", values: ["Chrome", "Gold"] },
      ],
      buyUrl: `${BASE}/product-category/lipstick/`,
      buildTime: "40–45 working days",
    },
  ],
};

export function getProduct(category: string, slug: string): Product | undefined {
  return products[category]?.find((p) => p.slug === slug);
}

export function getCategoryProducts(category: string): Product[] {
  return products[category] ?? [];
}
