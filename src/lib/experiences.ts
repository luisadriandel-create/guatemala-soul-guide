import expCoffee from "@/assets/exp-coffee.jpg";
import expAtitlan from "@/assets/exp-atitlan.jpg";
import expMarket from "@/assets/exp-market.jpg";
import expAntigua from "@/assets/exp-antigua-street.jpg";
import expFood from "@/assets/exp-food.jpg";
import expTikal from "@/assets/exp-tikal.jpg";
import expSemuc from "@/assets/exp-semuc.jpg";
import catAdventure from "@/assets/cat-adventure.jpg";
import catCulture from "@/assets/cat-culture.jpg";
import catHidden from "@/assets/cat-hidden.jpg";

export type Category = "adventure" | "culture" | "hidden";

export type Experience = {
  slug: string;
  title: string;
  category: Category;
  location: string;
  duration: string;
  priceRange: string;
  short: string;
  image: string;
  story: string;
  whyWeRecommend: string;
  special: string[];
};

export const experiences: Experience[] = [
  {
    slug: "acatenango-overnight",
    title: "An Overnight on Acatenango",
    category: "adventure",
    location: "Acatenango Volcano · 1.5h from Antigua",
    duration: "2 days · 1 night",
    priceRange: "$95 – $160 USD",
    short: "Sleep above the clouds. Watch Fuego erupt at midnight.",
    image: catAdventure,
    story:
      "You begin in farmland, climb through cloud forest, and end somewhere quieter than you've ever been. Camp sits at 3,600m, facing Volcán de Fuego. Through the night, every twenty minutes or so, Fuego clears its throat — a low rumble, then a blossom of lava against the dark. Sunrise turns the entire valley pink.",
    whyWeRecommend:
      "It's the most photographed view in Guatemala — and for good reason. We work only with small guiding outfits that pay their porters fairly and limit group size to twelve.",
    special: [
      "Camp directly facing Volcán de Fuego",
      "Small-group guides from local communities",
      "Warm gear, hot dinner, and breakfast included by most operators",
    ],
  },
  {
    slug: "atitlan-villages-by-boat",
    title: "Lake Atitlán by Slow Boat",
    category: "adventure",
    location: "Lake Atitlán · Sololá",
    duration: "Full day",
    priceRange: "$40 – $90 USD",
    short: "Three volcanoes, twelve villages, one of the deepest lakes in the Americas.",
    image: expAtitlan,
    story:
      "Aldous Huxley called it the most beautiful lake in the world. Each village around it speaks a different Mayan dialect and keeps its own rhythm — San Juan's painters, Santiago's textile cooperatives, San Marcos at dawn. You move between them by lancha, the small public boats locals use.",
    whyWeRecommend:
      "We tell you which villages to actually spend time in, not just the ones on every itinerary. Go with a local guide and the day opens up.",
    special: ["Visit weaving cooperatives directly", "Lunch with a lake-side family", "Best months: November – April"],
  },
  {
    slug: "semuc-champey",
    title: "The Pools of Semuc Champey",
    category: "adventure",
    location: "Alta Verapaz · 8h from Antigua",
    duration: "3 days · 2 nights",
    priceRange: "$180 – $320 USD",
    short: "A natural limestone bridge over a hidden turquoise river.",
    image: expSemuc,
    story:
      "It takes effort to get there — that's the point. Semuc Champey sits in the cloud forests of Alta Verapaz, eight hours from Antigua over winding roads. The reward is a stepped chain of turquoise pools formed over a hidden river, surrounded by jungle so dense the light turns green.",
    whyWeRecommend:
      "We pair this with a stay at a small ecolodge that supports the surrounding Q'eqchi' communities.",
    special: ["Swim in the natural pools", "Candlelit cave river hike", "Stay at a community-run ecolodge"],
  },
  {
    slug: "antigua-coffee-finca",
    title: "Coffee, From Cherry to Cup",
    category: "culture",
    location: "Antigua Valley · 30min from town",
    duration: "Half day",
    priceRange: "$35 – $65 USD",
    short: "A morning on a working farm with a third-generation coffee family.",
    image: expCoffee,
    story:
      "Antigua's coffee grows in volcanic soil at altitude — the conditions are almost unfair. You spend a morning walking the rows, picking cherries, washing and pulping beans by hand. Then you cup what you picked, against beans from neighboring fincas. By lunch you'll taste coffee differently for the rest of your life.",
    whyWeRecommend:
      "Skip the bus-tour fincas. We send you to a small family farm where you sit with the people who grow the beans, not a tour script.",
    special: ["Hands-on harvest (Nov – Mar)", "Cupping session with the farmer", "Bag of single-origin beans to take home"],
  },
  {
    slug: "chichicastenango-market",
    title: "The Market at Chichicastenango",
    category: "culture",
    location: "Chichicastenango · K'iche' highlands",
    duration: "Full day",
    priceRange: "$45 – $80 USD",
    short: "Five centuries of textiles, copal smoke, and Mayan ceremony.",
    image: expMarket,
    story:
      "Thursdays and Sundays, the highland town of Chichicastenango becomes one of the oldest continuously operating markets in the Americas. Walk past textiles dyed with cochineal, masks for the next cofradía, copal smoke drifting from the steps of Santo Tomás. Bring time. Bring questions. Don't bargain hard — these are heirloom skills.",
    whyWeRecommend:
      "Go with a guide who reads K'iche'. The difference between tourist-market and real-market is one conversation.",
    special: ["Sunday or Thursday only", "Visit the Pascual Abaj ceremony site", "Lunch in a family comedor"],
  },
  {
    slug: "tortillas-with-doña-rosa",
    title: "Tortillas with Doña Rosa",
    category: "culture",
    location: "Santa María de Jesús",
    duration: "3 hours",
    priceRange: "$30 – $50 USD",
    short: "A cooking afternoon in a Kaqchikel home on the slopes of Volcán de Agua.",
    image: expFood,
    story:
      "Doña Rosa has been making tortillas since she was seven. You'll learn to nixtamalize corn the way it's been done for three thousand years, grind it on a stone metate, and shape tortillas by hand on a wood-fired comal. Then you eat — pepián, hand-made tortillas, fresh coffee from her hillside.",
    whyWeRecommend:
      "Rosa welcomes one small group at a time. The proceeds support her family directly. This is the kind of afternoon you'll remember years later.",
    special: ["Maximum 6 guests", "Vegetarian friendly", "Spanish-Kaqchikel translation provided"],
  },
  {
    slug: "wild-mushroom-foraging",
    title: "Wild Mushroom Foraging in Tecpán",
    category: "hidden",
    location: "Tecpán · Chimaltenango pine forests",
    duration: "Full day (seasonal)",
    priceRange: "$70 – $120 USD",
    short: "A few weeks each rainy season, the forest fills with edible mushrooms. The locals know exactly where.",
    image: catHidden,
    story:
      "From late June through September, after the first heavy rains, families from Tecpán head into the pine forests at dawn with baskets. They're looking for chanterelles, boletes, and a dozen species with Kaqchikel names you've never heard. You walk with them, learn to read the moss, and end the day cooking everything you've picked over an open fire.",
    whyWeRecommend:
      "This isn't a tour — it's an invitation into a seasonal tradition. We've spent years building trust with the family who hosts it. Only available a few weekends a year.",
    special: ["Seasonal — July to September only", "Includes traditional forest lunch", "Limited to 4 guests per outing"],
  },
  {
    slug: "tikal-sunrise",
    title: "Sunrise from Temple IV, Tikal",
    category: "hidden",
    location: "Tikal National Park · Petén",
    duration: "2 days · 1 night",
    priceRange: "$220 – $400 USD",
    short: "Watch the jungle wake from the top of a 1,300-year-old Mayan temple.",
    image: expTikal,
    story:
      "Before the gates officially open, with a special-access guide, you walk through dark jungle by flashlight to the base of Temple IV — the tallest in the Maya world. You climb in silence and wait. Mist boils up from the canopy. Howler monkeys start, then macaws. As the sun clears the horizon, the tops of Temples I, II, and III emerge from the jungle below you, exactly as they did fourteen centuries ago.",
    whyWeRecommend:
      "Most visitors do Tikal as a day trip. Stay overnight inside the park — you'll have the ruins almost to yourself at dawn and dusk.",
    special: ["Special pre-dawn access permit", "Stay inside the park boundary", "Wildlife-focused naturalist guide"],
  },
  {
    slug: "antigua-walking-architecture",
    title: "Antigua After Hours",
    category: "hidden",
    location: "Antigua Guatemala",
    duration: "2 hours",
    priceRange: "$25 – $40 USD",
    short: "A walking tour led by a local architect — the courtyards tourists never see.",
    image: expAntigua,
    story:
      "Antigua looks like a single beautiful city from the street. But behind almost every colonial door is a second city — courtyards, fountains, ruins from the 1773 earthquake, libraries hidden inside private homes. Walk it after sunset with someone who grew up here, and you start to understand why UNESCO drew a line around the whole town.",
    whyWeRecommend:
      "Our guide is an Antigua-born architect. He'll get you into three private courtyards you'd never find alone.",
    special: ["Evening light, fewer crowds", "Small group · max 8", "Includes a glass of Guatemalan wine to close"],
  },
];

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug);
}

export function byCategory(category: Category) {
  return experiences.filter((e) => e.category === category);
}

export const categoryMeta: Record<Category, { title: string; tag: string; blurb: string; image: string; to: string }> = {
  adventure: {
    title: "Adventure",
    tag: "Volcanoes & Wild Country",
    blurb: "Volcanoes, cloud forests, hidden rivers, and the country's best high-altitude hikes.",
    image: catAdventure,
    to: "/adventure",
  },
  culture: {
    title: "Culture",
    tag: "Coffee, Cuisine & Craft",
    blurb: "Coffee fincas, family kitchens, weaving cooperatives, and the rituals that hold this country together.",
    image: catCulture,
    to: "/culture",
  },
  hidden: {
    title: "Hidden Guatemala",
    tag: "Rare & Seasonal",
    blurb: "Experiences most travelers never discover. Often seasonal. Always meaningful.",
    image: catHidden,
    to: "/hidden",
  },
};

export type Event = {
  title: string;
  date: string;
  location: string;
  kind: string;
  blurb: string;
};

export const events: Event[] = [
  {
    title: "Semana Santa Processions",
    date: "Holy Week · March – April",
    location: "Antigua Guatemala",
    kind: "Festival",
    blurb: "Antigua's cobblestones disappear under hand-dyed sawdust carpets. Said to be the most elaborate Easter processions in Latin America.",
  },
  {
    title: "Live Marimba at La Sala",
    date: "Every Friday · 8pm",
    location: "Antigua",
    kind: "Music",
    blurb: "A weekly residency from one of Guatemala's most respected marimba ensembles. Small room, no cover.",
  },
  {
    title: "Sumpango Giant Kite Festival",
    date: "November 1",
    location: "Sumpango, Sacatepéquez",
    kind: "Festival",
    blurb: "Day of the Dead, told through kites the size of buildings, hand-built by community teams over months.",
  },
  {
    title: "Mercado de Artesanos — Open Studio Sundays",
    date: "First Sunday of every month",
    location: "Antigua",
    kind: "Market",
    blurb: "Working artisans open their studios — ceramicists, jade carvers, leather workers — for one Sunday each month.",
  },
  {
    title: "Coffee Harvest Cupping Series",
    date: "December – February",
    location: "Antigua Valley",
    kind: "Tasting",
    blurb: "Three local roasters host weekly public cuppings during peak harvest. Fresh lots, no pretense.",
  },
];
