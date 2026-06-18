import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { experiences as baseExperiences, events as baseEvents, categoryMeta as baseCategoryMeta, type Experience, type Event, type Category } from "@/lib/experiences";

export type Lang = "en" | "es";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "egt-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "en" || saved === "es") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) return { lang: "en" as Lang, setLang: () => {} };
  return ctx;
}

// ============ UI STRINGS ============
const STRINGS = {
  en: {
    "nav.adventure": "Adventure",
    "nav.culture": "Culture",
    "nav.hidden": "Hidden Guatemala",
    "nav.happening": "Happening Now",
    "nav.concierge": "Concierge",
    "nav.talkToLocal": "Talk to a Local",

    "footer.tagline": "A curated discovery platform for travelers who want to meet the real Guatemala — its people, its landscapes, its quiet rituals.",
    "footer.based": "Based in Antigua",
    "footer.explore": "Explore",
    "footer.help": "Help",
    "footer.localConcierge": "Local Concierge",
    "footer.forProviders": "For Providers",
    "footer.about": "About",
    "footer.copyright": "Curated in Guatemala.",
    "footer.madeWithCare": "Hecho con cariño · Made with care",

    "home.heroEyebrow": "A curated travel guide · Guatemala",
    "home.heroTitle1": "Start in Antigua.",
    "home.heroTitle2": "Explore the real Guatemala.",
    "home.heroSub": "Curated recommendations for travelers who want more than the usual tourist checklist.",
    "home.startExploring": "Start Exploring",
    "home.choosePathEyebrow": "Choose your path",
    "home.choosePathTitle": "Three doors into Guatemala.",
    "home.choosePathSub": "Every recommendation here is something we've experienced, vetted, and would send a friend to.",
    "home.exploreLabel": "Explore",
    "home.featuredEyebrow": "Featured experiences",
    "home.featuredTitle": "Editor's picks, this season.",
    "home.featuredSub": "One from each path. Hand-selected for what's happening right now.",
    "home.happeningEyebrow": "Happening now",
    "home.happeningTitle": "What's on, this month.",
    "home.viewAllEvents": "View all events →",
    "home.conciergeEyebrow": "Local concierge",
    "home.conciergeTitle1": "Need help planning?",
    "home.conciergeTitle2": "Talk to a local.",
    "home.conciergeBody": "Skip the spreadsheets and travel forums. Send us a message and a real person in Antigua will help you plan, point you to the right people, and answer the questions a guidebook can't.",
    "home.conciergeBullet1": "· Personalized recommendations from someone who lives here",
    "home.conciergeBullet2": "· Languages: English · Español · ",
    "home.frenchSoon": "Français (coming soon)",
    "home.conciergeBullet3": "· Free for travelers — we work with vetted local providers",
    "home.conciergeCta": "Talk to a Local Concierge",

    "adventure.title": "Volcanoes & wild country.",
    "adventure.intro": "Guatemala has 37 volcanoes, four of them active, and the kind of cloud forest you only get in this narrow band of Central America. These are the outdoor experiences we send people on — small groups, honest guides, real terrain.",
    "culture.title": "Coffee, cuisine & craft.",
    "culture.intro": "Twenty-two Mayan languages are still spoken here. The coffee is famous; the food deserves to be. These are the encounters that take you past the postcard — into kitchens, cooperatives, and family stories.",
    "hidden.title": "What most travelers miss.",
    "hidden.intro": "The soul of this project. Seasonal traditions, family invitations, places that don't show up on any list because the people who know them prefer to keep it that way. We share them because the right traveler — curious, respectful, slow — keeps them alive.",

    "happening.eyebrow": "Happening now",
    "happening.title1": "A curated calendar,",
    "happening.title2": "not a complete one.",
    "happening.sub": "Festivals, live music, artisan markets, and seasonal moments worth planning a trip around. We list only what we'd actually attend.",
    "happening.ctaEyebrow": "Something specific in mind?",
    "happening.ctaTitle": "We track more than we publish.",
    "happening.ctaBody": "If you're traveling on specific dates, ask our concierge what's happening. We often know about smaller community events that never make it online.",
    "happening.ctaButton": "Ask the Concierge",

    "concierge.eyebrow": "Local concierge",
    "concierge.title1": "Talk to someone",
    "concierge.title2": "who actually lives here.",
    "concierge.body": "Plan your Guatemala trip with a real person — not a chatbot, not a sales rep. Our concierge is based in Antigua and works directly with the families, guides, and providers behind every experience on this site.",
    "concierge.whatsapp": "Message us on WhatsApp",
    "concierge.replyMeta": "+502 1234 5678 · Replies within 24 hours · Free for travelers",
    "concierge.howEyebrow": "How we can help",
    "concierge.howTitle": "No itineraries. Just honest answers.",
    "concierge.help1Title": "Recommendations",
    "concierge.help1Body": "Based on what you actually want — not what's easy to sell.",
    "concierge.help2Title": "Planning support",
    "concierge.help2Body": "Sequencing, timing, what's realistic in one week vs two.",
    "concierge.help3Title": "Transportation guidance",
    "concierge.help3Body": "When to hire a driver, when the chicken bus is fine, when to fly.",
    "concierge.help4Title": "Local insights",
    "concierge.help4Body": "What's actually open, what's a tourist trap, what's worth the drive.",
    "concierge.langEyebrow": "Languages",
    "concierge.langTitle": "We speak your language.",
    "concierge.langAvailable": "Available",
    "concierge.langDisponible": "Disponible",
    "concierge.langSoon": "Coming soon",
    "concierge.readyTitle": "Ready when you are.",
    "concierge.readyBody": "Send a message. Tell us when you're coming and what you care about. We'll take it from there.",
    "concierge.startConv": "Start the conversation",

    "exp.story": "The story",
    "exp.whyEyebrow": "Why we recommend it",
    "exp.specialEyebrow": "What makes it special",
    "exp.essentials": "The essentials",
    "exp.location": "Location",
    "exp.duration": "Duration",
    "exp.priceRange": "Price range",
    "exp.contactProvider": "Contact Provider",
    "exp.contactAlert": "In the live product, this connects you to the experience provider.",
    "exp.talkConcierge": "Talk to a Local Concierge",
    "exp.disclaimer": "Experience GT is a discovery platform — we connect you with vetted local providers. We don't take bookings or payments directly.",
    "exp.keepExploring": "Keep exploring",
    "exp.moreIn": "More in",
    "exp.notFoundEyebrow": "Not found",
    "exp.notFoundTitle": "We couldn't find that experience.",
    "exp.backHome": "Back home",

    "notfound.title": "This trail doesn't exist.",
    "notfound.body": "The page you're looking for may have wandered off the map.",
    "notfound.cta": "Back to Antigua",

    "error.title": "Something went off-trail",
    "error.body": "Try again, or head back to the start.",
    "error.try": "Try again",
    "error.home": "Go home",

    "cat.adventure": "Adventure",
    "cat.culture": "Culture",
    "cat.hidden": "Hidden",
    "cat.hiddenFull": "Hidden Guatemala",
  },
  es: {
    "nav.adventure": "Aventura",
    "nav.culture": "Cultura",
    "nav.hidden": "Guatemala Oculta",
    "nav.happening": "En Curso",
    "nav.concierge": "Conserje",
    "nav.talkToLocal": "Habla con un Local",

    "footer.tagline": "Una plataforma curada de descubrimiento para viajeros que quieren conocer la Guatemala real — su gente, sus paisajes, sus rituales silenciosos.",
    "footer.based": "Con base en Antigua",
    "footer.explore": "Explora",
    "footer.help": "Ayuda",
    "footer.localConcierge": "Conserje Local",
    "footer.forProviders": "Para Proveedores",
    "footer.about": "Acerca",
    "footer.copyright": "Curado en Guatemala.",
    "footer.madeWithCare": "Hecho con cariño · Made with care",

    "home.heroEyebrow": "Una guía de viaje curada · Guatemala",
    "home.heroTitle1": "Comienza en Antigua.",
    "home.heroTitle2": "Explora la Guatemala real.",
    "home.heroSub": "Recomendaciones curadas para viajeros que quieren más que la lista turística habitual.",
    "home.startExploring": "Comenzar a Explorar",
    "home.choosePathEyebrow": "Elige tu camino",
    "home.choosePathTitle": "Tres puertas hacia Guatemala.",
    "home.choosePathSub": "Cada recomendación aquí es algo que hemos vivido, evaluado y enviaríamos a un amigo.",
    "home.exploreLabel": "Explorar",
    "home.featuredEyebrow": "Experiencias destacadas",
    "home.featuredTitle": "Selección del editor, esta temporada.",
    "home.featuredSub": "Una de cada camino. Elegidas para lo que pasa ahora mismo.",
    "home.happeningEyebrow": "En curso",
    "home.happeningTitle": "Lo que está pasando este mes.",
    "home.viewAllEvents": "Ver todos los eventos →",
    "home.conciergeEyebrow": "Conserje local",
    "home.conciergeTitle1": "¿Necesitas ayuda planeando?",
    "home.conciergeTitle2": "Habla con un local.",
    "home.conciergeBody": "Olvídate de las hojas de cálculo y los foros de viajes. Envíanos un mensaje y una persona real en Antigua te ayudará a planear, te conectará con la gente correcta y responderá las preguntas que una guía no puede.",
    "home.conciergeBullet1": "· Recomendaciones personalizadas de alguien que vive aquí",
    "home.conciergeBullet2": "· Idiomas: English · Español · ",
    "home.frenchSoon": "Français (próximamente)",
    "home.conciergeBullet3": "· Gratis para viajeros — trabajamos con proveedores locales verificados",
    "home.conciergeCta": "Habla con un Conserje Local",

    "adventure.title": "Volcanes y tierra salvaje.",
    "adventure.intro": "Guatemala tiene 37 volcanes, cuatro de ellos activos, y el tipo de bosque nuboso que solo encuentras en esta franja estrecha de Centroamérica. Estas son las experiencias al aire libre a las que enviamos viajeros — grupos pequeños, guías honestos, terreno real.",
    "culture.title": "Café, cocina y artesanía.",
    "culture.intro": "Aquí todavía se hablan veintidós idiomas mayas. El café es famoso; la comida lo merece también. Estos son los encuentros que te llevan más allá de la postal — a cocinas, cooperativas e historias de familia.",
    "hidden.title": "Lo que la mayoría se pierde.",
    "hidden.intro": "El alma de este proyecto. Tradiciones de temporada, invitaciones familiares, lugares que no aparecen en ninguna lista porque quienes los conocen prefieren mantenerlo así. Los compartimos porque el viajero correcto — curioso, respetuoso, pausado — los mantiene vivos.",

    "happening.eyebrow": "En curso",
    "happening.title1": "Un calendario curado,",
    "happening.title2": "no uno completo.",
    "happening.sub": "Festivales, música en vivo, mercados artesanales y momentos de temporada que valen un viaje. Solo listamos lo que nosotros mismos iríamos a ver.",
    "happening.ctaEyebrow": "¿Tienes algo específico en mente?",
    "happening.ctaTitle": "Seguimos más de lo que publicamos.",
    "happening.ctaBody": "Si viajas en fechas concretas, pregunta a nuestro conserje qué está pasando. A menudo conocemos eventos comunitarios pequeños que nunca llegan a internet.",
    "happening.ctaButton": "Preguntar al Conserje",

    "concierge.eyebrow": "Conserje local",
    "concierge.title1": "Habla con alguien",
    "concierge.title2": "que realmente vive aquí.",
    "concierge.body": "Planea tu viaje a Guatemala con una persona real — no un chatbot, no un vendedor. Nuestro conserje vive en Antigua y trabaja directamente con las familias, guías y proveedores detrás de cada experiencia en este sitio.",
    "concierge.whatsapp": "Escríbenos por WhatsApp",
    "concierge.replyMeta": "+502 1234 5678 · Respuesta en menos de 24 horas · Gratis para viajeros",
    "concierge.howEyebrow": "Cómo podemos ayudar",
    "concierge.howTitle": "Sin itinerarios. Solo respuestas honestas.",
    "concierge.help1Title": "Recomendaciones",
    "concierge.help1Body": "Basadas en lo que realmente quieres — no en lo que es fácil de vender.",
    "concierge.help2Title": "Apoyo de planificación",
    "concierge.help2Body": "Secuencia, tiempos, lo que es realista en una semana vs dos.",
    "concierge.help3Title": "Guía de transporte",
    "concierge.help3Body": "Cuándo contratar conductor, cuándo el bus es suficiente, cuándo volar.",
    "concierge.help4Title": "Perspectiva local",
    "concierge.help4Body": "Qué está realmente abierto, qué es trampa para turistas, qué vale la pena del viaje.",
    "concierge.langEyebrow": "Idiomas",
    "concierge.langTitle": "Hablamos tu idioma.",
    "concierge.langAvailable": "Disponible",
    "concierge.langDisponible": "Disponible",
    "concierge.langSoon": "Próximamente",
    "concierge.readyTitle": "Cuando estés listo.",
    "concierge.readyBody": "Envía un mensaje. Cuéntanos cuándo vienes y qué te interesa. Nosotros nos encargamos del resto.",
    "concierge.startConv": "Iniciar la conversación",

    "exp.story": "La historia",
    "exp.whyEyebrow": "Por qué la recomendamos",
    "exp.specialEyebrow": "Qué la hace especial",
    "exp.essentials": "Lo esencial",
    "exp.location": "Ubicación",
    "exp.duration": "Duración",
    "exp.priceRange": "Rango de precio",
    "exp.contactProvider": "Contactar al Proveedor",
    "exp.contactAlert": "En el producto en vivo, esto te conecta con el proveedor de la experiencia.",
    "exp.talkConcierge": "Habla con un Conserje Local",
    "exp.disclaimer": "Experience GT es una plataforma de descubrimiento — te conectamos con proveedores locales verificados. No tomamos reservas ni pagos directamente.",
    "exp.keepExploring": "Sigue explorando",
    "exp.moreIn": "Más en",
    "exp.notFoundEyebrow": "No encontrado",
    "exp.notFoundTitle": "No pudimos encontrar esa experiencia.",
    "exp.backHome": "Volver al inicio",

    "notfound.title": "Este sendero no existe.",
    "notfound.body": "La página que buscas tal vez se salió del mapa.",
    "notfound.cta": "Volver a Antigua",

    "error.title": "Algo se salió del camino",
    "error.body": "Intenta de nuevo, o vuelve al inicio.",
    "error.try": "Reintentar",
    "error.home": "Ir al inicio",

    "cat.adventure": "Aventura",
    "cat.culture": "Cultura",
    "cat.hidden": "Oculta",
    "cat.hiddenFull": "Guatemala Oculta",
  },
} as const;

export type StringKey = keyof typeof STRINGS["en"];

export function useT() {
  const { lang } = useLang();
  return (key: StringKey) => STRINGS[lang][key] ?? STRINGS.en[key];
}

// ============ TRANSLATED CONTENT ============
type ExpES = Pick<Experience, "title" | "location" | "duration" | "priceRange" | "short" | "story" | "whyWeRecommend" | "special">;

const EXPERIENCES_ES: Record<string, ExpES> = {
  "acatenango-overnight": {
    title: "Una Noche en Acatenango",
    location: "Volcán Acatenango · 1.5h desde Antigua",
    duration: "2 días · 1 noche",
    priceRange: "$95 – $160 USD",
    short: "Duerme sobre las nubes. Mira al Fuego erupcionar a medianoche.",
    story: "Empiezas entre cultivos, subes por el bosque nuboso y terminas en el lugar más silencioso en el que has estado. El campamento se sitúa a 3,600m frente al Volcán de Fuego. Durante la noche, cada veinte minutos más o menos, Fuego se aclara la garganta — un retumbo bajo, luego una flor de lava contra la oscuridad. El amanecer tiñe todo el valle de rosa.",
    whyWeRecommend: "Es la vista más fotografiada de Guatemala — con razón. Trabajamos solo con pequeñas empresas de guía que pagan justamente a sus porteadores y limitan el grupo a doce.",
    special: ["Campamento de frente al Volcán de Fuego", "Guías de comunidades locales en grupos pequeños", "Equipo de abrigo, cena caliente y desayuno incluidos con la mayoría de operadores"],
  },
  "atitlan-villages-by-boat": {
    title: "Lago de Atitlán en Lancha",
    location: "Lago de Atitlán · Sololá",
    duration: "Día completo",
    priceRange: "$40 – $90 USD",
    short: "Tres volcanes, doce pueblos, uno de los lagos más profundos de las Américas.",
    story: "Aldous Huxley lo llamó el lago más bello del mundo. Cada pueblo a su alrededor habla un dialecto maya distinto y mantiene su propio ritmo — los pintores de San Juan, las cooperativas textiles de Santiago, San Marcos al amanecer. Te mueves entre ellos en lancha, los pequeños botes públicos que usan los locales.",
    whyWeRecommend: "Te decimos en qué pueblos vale la pena quedarse, no solo los del itinerario típico. Ve con un guía local y el día se abre.",
    special: ["Visita cooperativas de tejido directamente", "Almuerzo con una familia a la orilla del lago", "Mejores meses: noviembre – abril"],
  },
  "semuc-champey": {
    title: "Las Pozas de Semuc Champey",
    location: "Alta Verapaz · 8h desde Antigua",
    duration: "3 días · 2 noches",
    priceRange: "$180 – $320 USD",
    short: "Un puente natural de piedra caliza sobre un río turquesa escondido.",
    story: "Cuesta llegar — ese es el punto. Semuc Champey está en los bosques nubosos de Alta Verapaz, a ocho horas de Antigua por caminos sinuosos. La recompensa es una cadena escalonada de pozas turquesas formadas sobre un río oculto, rodeada de selva tan densa que la luz se vuelve verde.",
    whyWeRecommend: "Lo combinamos con una estadía en un pequeño ecolodge que apoya a las comunidades Q'eqchi' del entorno.",
    special: ["Nada en las pozas naturales", "Caminata en cueva con velas por el río", "Hospedaje en ecolodge comunitario"],
  },
  "antigua-coffee-finca": {
    title: "Café, de la Cereza a la Taza",
    location: "Valle de Antigua · 30 min del centro",
    duration: "Media jornada",
    priceRange: "$35 – $65 USD",
    short: "Una mañana en una finca activa con una familia cafetalera de tercera generación.",
    story: "El café de Antigua crece en suelo volcánico a altura — las condiciones son casi injustas. Pasas una mañana caminando los surcos, recogiendo cerezas, lavando y despulpando granos a mano. Luego cataste lo que recogiste, frente a granos de fincas vecinas. Para el almuerzo, probarás el café distinto por el resto de tu vida.",
    whyWeRecommend: "Sáltate las fincas de tour en bus. Te enviamos a una pequeña finca familiar donde te sientas con quienes cultivan el grano, no con un guion turístico.",
    special: ["Cosecha práctica (nov – mar)", "Sesión de catación con el caficultor", "Bolsa de café de origen único para llevar"],
  },
  "chichicastenango-market": {
    title: "El Mercado de Chichicastenango",
    location: "Chichicastenango · Altiplano K'iche'",
    duration: "Día completo",
    priceRange: "$45 – $80 USD",
    short: "Cinco siglos de textiles, humo de copal y ceremonia maya.",
    story: "Jueves y domingos, el pueblo altiplano de Chichicastenango se convierte en uno de los mercados continuos más antiguos de las Américas. Camina entre textiles teñidos con cochinilla, máscaras para la siguiente cofradía, humo de copal subiendo por las gradas de Santo Tomás. Lleva tiempo. Lleva preguntas. No regatees mucho — son saberes heredados.",
    whyWeRecommend: "Ve con un guía que lea K'iche'. La diferencia entre mercado-turista y mercado-real es una conversación.",
    special: ["Solo domingos o jueves", "Visita al sitio ceremonial Pascual Abaj", "Almuerzo en un comedor familiar"],
  },
  "tortillas-with-doña-rosa": {
    title: "Tortillas con Doña Rosa",
    location: "Santa María de Jesús",
    duration: "3 horas",
    priceRange: "$30 – $50 USD",
    short: "Una tarde de cocina en un hogar Kaqchikel en las faldas del Volcán de Agua.",
    story: "Doña Rosa hace tortillas desde los siete años. Aprenderás a nixtamalizar el maíz como se ha hecho durante tres mil años, a molerlo en piedra de metate y a formar tortillas a mano sobre comal de leña. Luego comes — pepián, tortillas hechas a mano, café fresco de su ladera.",
    whyWeRecommend: "Rosa recibe un grupo pequeño a la vez. Lo recaudado apoya directamente a su familia. Es el tipo de tarde que recordarás años después.",
    special: ["Máximo 6 personas", "Apto para vegetarianos", "Traducción español-kaqchikel"],
  },
  "wild-mushroom-foraging": {
    title: "Recolección de Hongos Silvestres en Tecpán",
    location: "Tecpán · Bosques de pino, Chimaltenango",
    duration: "Día completo (de temporada)",
    priceRange: "$70 – $120 USD",
    short: "Unas pocas semanas al año, el bosque se llena de hongos comestibles. Los locales saben exactamente dónde.",
    story: "Desde finales de junio hasta septiembre, tras las primeras lluvias fuertes, familias de Tecpán salen a los bosques de pino al amanecer con canastos. Buscan chantarelas, boletes y una docena de especies con nombres en kaqchikel que nunca habías escuchado. Caminas con ellos, aprendes a leer el musgo, y terminas el día cocinando todo lo recogido al fuego abierto.",
    whyWeRecommend: "No es un tour — es una invitación a una tradición de temporada. Llevamos años construyendo confianza con la familia que la organiza. Solo disponible algunos fines de semana al año.",
    special: ["De temporada — solo julio a septiembre", "Incluye almuerzo tradicional en el bosque", "Limitado a 4 personas por salida"],
  },
  "tikal-sunrise": {
    title: "Amanecer desde el Templo IV, Tikal",
    location: "Parque Nacional Tikal · Petén",
    duration: "2 días · 1 noche",
    priceRange: "$220 – $400 USD",
    short: "Mira despertar la selva desde lo alto de un templo maya de 1,300 años.",
    story: "Antes de que abran las puertas oficiales, con un guía de acceso especial, caminas por la selva oscura con linterna hasta la base del Templo IV — el más alto del mundo maya. Subes en silencio y esperas. La neblina sube de la copa de los árboles. Empiezan los monos aulladores, luego las guacamayas. Cuando el sol cruza el horizonte, las cumbres de los Templos I, II y III emergen de la selva debajo de ti, igual que hace catorce siglos.",
    whyWeRecommend: "La mayoría hace Tikal en un día. Quédate dentro del parque — tendrás las ruinas casi para ti al amanecer y al atardecer.",
    special: ["Permiso especial de acceso pre-amanecer", "Hospedaje dentro del parque", "Guía naturalista enfocado en fauna"],
  },
  "antigua-walking-architecture": {
    title: "Antigua Después del Atardecer",
    location: "Antigua Guatemala",
    duration: "2 horas",
    priceRange: "$25 – $40 USD",
    short: "Recorrido a pie con un arquitecto local — los patios que los turistas no ven.",
    story: "Antigua parece una sola ciudad bella desde la calle. Pero detrás de casi cada puerta colonial hay una segunda ciudad — patios, fuentes, ruinas del terremoto de 1773, bibliotecas escondidas dentro de casas privadas. Camínala al caer la noche con alguien que creció aquí, y empezarás a entender por qué la UNESCO trazó una línea alrededor de toda la ciudad.",
    whyWeRecommend: "Nuestro guía es arquitecto nacido en Antigua. Te llevará a tres patios privados que nunca encontrarías por tu cuenta.",
    special: ["Luz de atardecer, menos multitudes", "Grupo pequeño · máx. 8", "Incluye una copa de vino guatemalteco al cierre"],
  },
};

const EVENTS_ES: Record<string, Pick<Event, "title" | "date" | "location" | "kind" | "blurb">> = {
  "Semana Santa Processions": {
    title: "Procesiones de Semana Santa",
    date: "Semana Santa · marzo – abril",
    location: "Antigua Guatemala",
    kind: "Festival",
    blurb: "Los adoquines de Antigua desaparecen bajo alfombras de aserrín teñidas a mano. Se dice que son las procesiones de Pascua más elaboradas de América Latina.",
  },
  "Live Marimba at La Sala": {
    title: "Marimba en Vivo en La Sala",
    date: "Cada viernes · 8pm",
    location: "Antigua",
    kind: "Música",
    blurb: "Residencia semanal de uno de los ensambles de marimba más respetados de Guatemala. Sala pequeña, sin cover.",
  },
  "Sumpango Giant Kite Festival": {
    title: "Festival de Barriletes Gigantes de Sumpango",
    date: "1 de noviembre",
    location: "Sumpango, Sacatepéquez",
    kind: "Festival",
    blurb: "El Día de los Muertos contado a través de barriletes del tamaño de edificios, hechos a mano por equipos comunitarios durante meses.",
  },
  "Mercado de Artesanos — Open Studio Sundays": {
    title: "Mercado de Artesanos — Domingos de Taller Abierto",
    date: "Primer domingo de cada mes",
    location: "Antigua",
    kind: "Mercado",
    blurb: "Artesanos en activo abren sus talleres — ceramistas, talladores de jade, marroquineros — un domingo al mes.",
  },
  "Coffee Harvest Cupping Series": {
    title: "Serie de Cataciones de Cosecha",
    date: "Diciembre – febrero",
    location: "Valle de Antigua",
    kind: "Degustación",
    blurb: "Tres tostadores locales organizan cataciones públicas semanales durante el pico de cosecha. Lotes frescos, sin pretensión.",
  },
};

const CATEGORY_META_ES: Record<Category, { title: string; tag: string; blurb: string }> = {
  adventure: {
    title: "Aventura",
    tag: "Volcanes y Tierra Salvaje",
    blurb: "Volcanes, bosques nubosos, ríos escondidos y las mejores caminatas de altura del país.",
  },
  culture: {
    title: "Cultura",
    tag: "Café, Cocina y Artesanía",
    blurb: "Fincas de café, cocinas familiares, cooperativas de tejido y los rituales que sostienen a este país.",
  },
  hidden: {
    title: "Guatemala Oculta",
    tag: "Raras y de Temporada",
    blurb: "Experiencias que la mayoría de viajeros nunca descubre. A menudo de temporada. Siempre significativas.",
  },
};

// ============ HOOKS ============
export function useExperiences(): Experience[] {
  const { lang } = useLang();
  if (lang === "en") return baseExperiences;
  return baseExperiences.map((e) => {
    const es = EXPERIENCES_ES[e.slug];
    return es ? { ...e, ...es } : e;
  });
}

export function useExperience(slug: string): Experience | undefined {
  return useExperiences().find((e) => e.slug === slug);
}

export function useByCategory(category: Category): Experience[] {
  return useExperiences().filter((e) => e.category === category);
}

export function useEvents(): Event[] {
  const { lang } = useLang();
  if (lang === "en") return baseEvents;
  return baseEvents.map((ev) => EVENTS_ES[ev.title] ? { ...ev, ...EVENTS_ES[ev.title] } : ev);
}

export function useCategoryMeta() {
  const { lang } = useLang();
  return (cat: Category) => {
    const base = baseCategoryMeta[cat];
    if (lang === "en") return base;
    return { ...base, ...CATEGORY_META_ES[cat] };
  };
}
