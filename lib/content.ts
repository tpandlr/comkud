export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/why-us", label: "Why Comkud" },
  { href: "/contact", label: "Contact" },
] as const;

export const companyAddress = "7557 Millennium Park, Zimbabwe";
export const tagline = "Precision analysis. Reliable results.";

export const services = [
  {
    icon: "biotech",
    title: "Laboratory Testing",
    summary: "Analysis of samples to verify quality, composition and compliance.",
    points: [
      "Chemical analysis of raw materials and finished products",
      "Quality control testing",
      "Clear, well-documented test reports",
    ],
  },
  {
    icon: "science",
    title: "Chemical Production & Supply",
    summary: "Chemical products matched to your application, with consistent quality and dependable supply.",
    points: [
      "Product guidance and safe-handling information",
      "Custom requirements on request",
    ],
  },
  {
    icon: "precision_manufacturing",
    title: "Equipment & Installation",
    summary: "Support for establishing and maintaining a working analytical environment.",
    points: [
      "Advice on and sourcing of laboratory equipment",
      "Installation and commissioning",
      "Staff familiarisation on equipment use",
    ],
  },
  {
    icon: "support_agent",
    title: "Technical Consulting",
    summary: "Experienced guidance to improve your testing, quality and compliance.",
    points: [
      "Laboratory set-up and workflow planning",
      "Test method selection and quality control practices",
      "Process and quality improvement reviews",
      "Training for technical teams",
    ],
  },
] as const;

export const valuePoints = [
  {
    icon: "check_circle",
    title: "Accurate",
    text: "Methodical testing you can base decisions on.",
  },
  {
    icon: "schedule",
    title: "Responsive",
    text: "Practical turnaround that respects your production schedule.",
  },
  {
    icon: "location_on",
    title: "Local, Capable",
    text: "Analytical expertise based in Zimbabwe, serving your operation directly.",
  },
] as const;

export const industries = [
  {
    icon: "landscape",
    title: "Mining",
    text: "Sample analysis and quality data to support operations and decision-making.",
  },
  {
    icon: "agriculture",
    title: "Agriculture",
    text: "Testing and chemical support for inputs, produce and soil/water quality.",
  },
  {
    icon: "factory",
    title: "Manufacturing",
    text: "Raw material and product quality control to keep output consistent.",
  },
  {
    icon: "restaurant",
    title: "Food Processing",
    text: "Analytical support for safety, quality and process consistency.",
  },
  {
    icon: "medication",
    title: "Pharmaceuticals",
    text: "Precise analysis and technical support in a quality-critical sector.",
  },
  {
    icon: "bolt",
    title: "Energy",
    text: "Chemical and analytical support for energy-related operations.",
  },
  {
    icon: "school",
    title: "Research & Education",
    text: "Reagents, equipment support and technical collaboration.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    icon: "forum",
    title: "Tell us your need",
    text: "Call, email or use the quote form.",
  },
  {
    number: "02",
    icon: "request_quote",
    title: "We scope and quote",
    text: "Clear scope, pricing and timelines.",
  },
  {
    number: "03",
    icon: "science",
    title: "We deliver",
    text: "Testing, supply or support carried out to agreed standards.",
  },
  {
    number: "04",
    icon: "description",
    title: "You receive results",
    text: "Documented outcomes, with follow-up advice if you need it.",
  },
] as const;

export const advantages = [
  {
    icon: "science",
    title: "Scientific rigour",
    text: "Structured, careful analytical practice.",
  },
  {
    icon: "account_tree",
    title: "Integrated offering",
    text: "Testing, chemicals, equipment and consulting from one partner.",
  },
  {
    icon: "handyman",
    title: "Practical focus",
    text: "Results and advice aimed at real operational decisions.",
  },
  {
    icon: "location_on",
    title: "Local presence",
    text: "Based in Zimbabwe, accessible and accountable to our clients.",
  },
  {
    icon: "chat",
    title: "Clear communication",
    text: "Plain-language reporting and straightforward quotes.",
  },
  {
    icon: "verified_user",
    title: "Commitment to safety and quality",
    text: "Safe practice for our people, clients and environment.",
  },
] as const;

export const whoWeAre = {
  title: "Who we are",
  paragraphs: [
    "Comkud Analytical Solutions is a Zimbabwean analytical and chemical solutions company based at 7557 Millennium Park. We exist to give businesses dependable scientific data and practical technical support, so they can operate with confidence, meet quality requirements and improve their processes.",
  ],
} as const;

export const missionVision = [
  {
    icon: "flag",
    label: "Our mission",
    text: "To deliver accurate laboratory analysis, quality chemical products and expert technical support that help our clients improve quality, efficiency and compliance, while building lasting relationships grounded in trust.",
  },
  {
    icon: "visibility",
    label: "Our vision",
    text: "To be a leading analytical and chemical solutions partner, recognised across Zimbabwe and beyond for scientific precision, integrity and innovation.",
  },
] as const;

export const commitments = [
  {
    icon: "straighten",
    title: "Precision",
    text: "We treat every sample and every result with care.",
  },
  {
    icon: "balance",
    title: "Integrity",
    text: "Honest reporting, whatever the outcome.",
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    text: "Continually improving methods and solutions.",
  },
  {
    icon: "handshake",
    title: "Service",
    text: "Your operational needs shape how we work.",
  },
  {
    icon: "health_and_safety",
    title: "Safety & Responsibility",
    text: "Safe practice for our people, clients and environment.",
  },
] as const;

export const heroSlides = [
  {
    src: "/images/hero-factory.jpg",
    alt: "Industrial machinery inside a factory",
    caption: "Factory operations",
  },
  {
    src: "/images/hero-plant.jpg",
    alt: "Manufacturing plant under a blue sky",
    caption: "Manufacturing plants",
  },
  {
    src: "/images/hero-environment.jpg",
    alt: "Industrial chimney over a forested landscape",
    caption: "Environment & emissions",
  },
  {
    src: "/images/hero-manufacturing.jpg",
    alt: "Aerial view of a manufacturing facility",
    caption: "Industrial production",
  },
] as const;

export const quotationEmail = "info@comkud.co.zw";
export const quotationHref = "/contact#quotation";
export const quotationLabel = "Request a Quote";

export const nextSteps = processSteps.map((step) => ({
  number: step.number.replace(/^0/, ""),
  title: step.title,
  text: step.text,
}));

export const equipmentPhotos = [
  {
    src: "/images/s360.jpg",
    alt: "S360 multi-gas analyser with mobile printer",
    caption: "S360",
  },
  {
    src: "/images/nha-6000.jpg",
    alt: "Nanhua NHA-6000 automotive emission analyser",
    caption: "EMA vehicle exhaust accredited",
  },
] as const;

export const fieldPhotos = [
  {
    src: "/images/field-engineer.jpg",
    alt: "Factory operator in a blue worksuit and hard hat",
    caption: "Plant operations",
  },
  {
    src: "/images/field-ppe.jpg",
    alt: "Production-line worker in hard hat and workwear",
    caption: "Manufacturing floor",
  },
  {
    src: "/images/field-sampling.jpg",
    alt: "Plant workers in worksuits on the factory line",
    caption: "Production support",
  },
] as const;
