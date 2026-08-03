import {
  Activity,
  Baby,
  Brush,
  Crown,
  Gem,
  HeartPulse,
  Layers,
  ScanLine,
  Scissors,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const CLINIC = {
  name: "Mom's Smile Dental & Cosmetic Clinic",
  shortName: "Mom's Smile Dental",
  tagline: "Advanced dental & cosmetic care in Kalavakkam, OMR",
  phoneDisplay: "+91 98404 12345",
  phone: "+919840412345",
  whatsapp: "919840412345",
  email: "care@momssmiledental.in",
  addressLine1: "No. 12, OMR Main Road, Kalavakkam",
  addressLine2: "Chennai 603110, Tamil Nadu",
  mapsQuery: "Kalavakkam+OMR+Chennai",
  rating: 4.8,
  reviews: 53,
  hours: [
    { day: "Monday – Friday", time: "9:30 AM – 9:00 PM" },
    { day: "Saturday", time: "9:30 AM – 8:00 PM" },
    { day: "Sunday", time: "10:00 AM – 2:00 PM" },
    { day: "Emergency Care", time: "On call, 24×7" },
  ],
} as const;

export const whatsappLink = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(
  "Hi! I'd like to book an appointment at Mom's Smile Dental & Cosmetic Clinic.",
)}`;

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  benefits: string[];
  procedure: string[];
  time: string;
  recovery: string;
  candidates: string;
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    icon: Stethoscope,
    short:
      "Complete check-ups, fillings and preventive care that keep small problems from becoming expensive ones.",
    benefits: [
      "Early detection of decay and gum disease",
      "Tooth-coloured composite fillings",
      "Personalised home-care plan",
    ],
    procedure: [
      "Full-mouth examination and digital imaging",
      "Discussion of findings with clear pricing",
      "Same-day treatment where possible",
    ],
    time: "30 – 45 minutes",
    recovery: "None — resume your day immediately",
    candidates: "Everyone due for a six-monthly dental review.",
    faqs: [
      {
        q: "How often should I visit?",
        a: "Once every six months is ideal for most patients. We send a friendly reminder when you are due.",
      },
    ],
  },
  {
    slug: "dental-cleaning",
    title: "Dental Cleaning",
    icon: Sparkles,
    short:
      "Ultrasonic scaling and polishing that removes tartar, freshens breath and brightens your natural shade.",
    benefits: ["Healthier gums", "Reduced bad breath", "Removes coffee and tea stains"],
    procedure: [
      "Gentle ultrasonic scaling",
      "Air-polishing of stained surfaces",
      "Fluoride application",
    ],
    time: "30 minutes",
    recovery: "Mild sensitivity for a day at most",
    candidates: "Anyone with tartar build-up, bleeding gums or staining.",
    faqs: [
      {
        q: "Does scaling loosen teeth?",
        a: "No. Scaling removes the hardened deposits that actually cause looseness — teeth feel different only because they are finally clean.",
      },
    ],
  },
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    icon: Activity,
    short:
      "Single-sitting, virtually pain-free RCT using rotary endodontics and apex locators to save your natural tooth.",
    benefits: ["Saves the natural tooth", "Ends throbbing pain", "Often completed in one visit"],
    procedure: [
      "Digital X-ray and profound local anaesthesia",
      "Rotary cleaning and shaping of canals",
      "Sealing, followed by a protective crown",
    ],
    time: "45 – 75 minutes",
    recovery: "24 – 48 hours of mild tenderness",
    candidates: "Deep decay, severe sensitivity, abscess or a cracked painful tooth.",
    faqs: [
      {
        q: "Is a root canal painful?",
        a: "The procedure itself is done under anaesthesia and feels similar to a filling. Most patients say the relief is immediate.",
      },
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    icon: Gem,
    short:
      "Titanium implants that replace missing teeth with a permanent, natural-looking result you can bite into.",
    benefits: ["Feels like a natural tooth", "Preserves jawbone", "Lasts decades with care"],
    procedure: [
      "3D imaging and implant planning",
      "Precise placement of the implant fixture",
      "Healing period, then custom crown fitting",
    ],
    time: "60 minutes for placement",
    recovery: "3 – 5 days of soft diet; 3 – 4 months to integrate",
    candidates: "Adults with one or more missing teeth and healthy gums.",
    faqs: [
      {
        q: "How long do implants last?",
        a: "With good hygiene and regular reviews, implants routinely last 20 years or more — many last a lifetime.",
      },
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    icon: Smile,
    short:
      "Clinically supervised whitening that lifts several shades in a single appointment without harming enamel.",
    benefits: ["Visible results in one sitting", "Enamel-safe formulation", "Custom take-home kit"],
    procedure: [
      "Shade recording and gum protection",
      "Activated whitening gel in timed cycles",
      "Desensitising finish",
    ],
    time: "60 minutes",
    recovery: "Avoid staining foods for 24 hours",
    candidates: "Patients with dull, yellowed or stained natural teeth.",
    faqs: [
      {
        q: "Does teeth whitening hurt?",
        a: "No. Some patients feel brief cold sensitivity that settles within a day; we apply a desensitising gel to prevent it.",
      },
    ],
  },
  {
    slug: "smile-makeover",
    title: "Smile Makeover",
    icon: Brush,
    short:
      "A designed smile combining veneers, whitening and contouring — previewed digitally before we begin.",
    benefits: ["Digital smile preview", "Natural ceramic aesthetics", "Transforms facial harmony"],
    procedure: [
      "Photographs, scans and smile design",
      "Trial smile you can see and approve",
      "Ceramic veneers bonded and polished",
    ],
    time: "2 – 3 appointments",
    recovery: "Minimal — light sensitivity for a few days",
    candidates: "Chipped, gapped, discoloured or uneven front teeth.",
    faqs: [
      {
        q: "Will it look artificial?",
        a: "No. We design proportions around your face and approve the shade with you before anything is bonded.",
      },
    ],
  },
  {
    slug: "crowns-bridges",
    title: "Crowns & Bridges",
    icon: Crown,
    short:
      "Zirconia and E-max restorations that rebuild strength and blend seamlessly with neighbouring teeth.",
    benefits: ["Metal-free aesthetics", "Restores full chewing force", "Precision digital fit"],
    procedure: ["Tooth preparation and digital scan", "Temporary crown", "Final cementation"],
    time: "2 visits over one week",
    recovery: "None",
    candidates: "Root-treated, cracked, worn or missing teeth.",
    faqs: [
      {
        q: "Which crown material is best?",
        a: "Zirconia for back teeth strength, E-max for front-tooth translucency. We recommend based on the tooth, not the price.",
      },
    ],
  },
  {
    slug: "braces",
    title: "Braces",
    icon: Layers,
    short:
      "Metal and ceramic orthodontics that straighten crowded or protruding teeth with predictable results.",
    benefits: ["Corrects bite and crowding", "Ceramic option is discreet", "Improves long-term hygiene"],
    procedure: ["Orthodontic records and plan", "Bracket bonding", "Monthly adjustments"],
    time: "12 – 24 months",
    recovery: "Mild soreness after each adjustment",
    candidates: "Teenagers and adults with crowding, gaps or bite issues.",
    faqs: [
      {
        q: "Am I too old for braces?",
        a: "Not at all. A healthy adult mouth moves just as predictably — many of our orthodontic patients are over 30.",
      },
    ],
  },
  {
    slug: "clear-aligners",
    title: "Clear Aligners",
    icon: ScanLine,
    short:
      "Nearly invisible, removable aligners planned in 3D so you can see your final smile before you start.",
    benefits: ["Virtually invisible", "Removable for meals", "Fewer clinic visits"],
    procedure: ["Intraoral 3D scan", "Digital treatment simulation", "Aligner series delivered in stages"],
    time: "6 – 18 months",
    recovery: "None",
    candidates: "Mild to moderate crowding or spacing in adults and teens.",
    faqs: [
      {
        q: "How many hours a day must I wear them?",
        a: "22 hours daily. Consistency is the single biggest factor in finishing on schedule.",
      },
    ],
  },
  {
    slug: "kids-dentistry",
    title: "Kids Dentistry",
    icon: Baby,
    short:
      "Gentle, story-led paediatric care with sealants and fluoride that makes children look forward to visits.",
    benefits: ["Fear-free introduction to dentistry", "Preventive sealants", "Habit and diet guidance"],
    procedure: ["Tell-show-do familiarisation", "Cleaning and fluoride varnish", "Sealants where needed"],
    time: "20 – 30 minutes",
    recovery: "None",
    candidates: "Children from their first tooth through the teenage years.",
    faqs: [
      {
        q: "Do you treat children?",
        a: "Yes — from the first tooth onward. Our paediatric room is designed to keep young patients calm and curious.",
      },
    ],
  },
  {
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    icon: Scissors,
    short:
      "Simple and surgical extractions, including wisdom teeth, performed atraumatically for faster healing.",
    benefits: ["Painless under local anaesthesia", "Minimal bone loss", "Clear aftercare support"],
    procedure: ["X-ray assessment", "Atraumatic removal", "Socket care and review"],
    time: "20 – 45 minutes",
    recovery: "2 – 3 days",
    candidates: "Unrestorable, impacted or severely mobile teeth.",
    faqs: [
      {
        q: "Will I be in pain afterwards?",
        a: "Most patients manage comfortably with the prescribed medication for two days.",
      },
    ],
  },
  {
    slug: "dentures",
    title: "Dentures",
    icon: Wrench,
    short:
      "Comfortable complete and partial dentures — plus implant-supported options that never slip.",
    benefits: ["Restores chewing and speech", "Natural-looking teeth set-up", "Implant-retained upgrades"],
    procedure: ["Impressions and bite records", "Try-in for approval", "Final delivery and adjustments"],
    time: "3 – 4 visits",
    recovery: "1 – 2 weeks to adapt",
    candidates: "Patients missing most or all teeth in an arch.",
    faqs: [
      {
        q: "Can dentures be made stable?",
        a: "Yes. Two to four implants can lock a denture in place so it stays put while eating.",
      },
    ],
  },
  {
    slug: "emergency-dental-care",
    title: "Emergency Dental Care",
    icon: HeartPulse,
    short:
      "Same-day relief for severe pain, swelling, broken teeth and dental trauma — call us any hour.",
    benefits: ["Priority same-day slots", "24×7 phone triage", "Immediate pain control"],
    procedure: ["Phone triage and advice", "Emergency examination", "Pain relief and definitive plan"],
    time: "As soon as you arrive",
    recovery: "Depends on treatment",
    candidates: "Severe toothache, facial swelling, knocked-out or fractured teeth.",
    faqs: [
      {
        q: "What if a tooth is knocked out?",
        a: "Keep it in milk, do not scrub the root, and call us immediately — replanting within an hour has the best outcome.",
      },
    ],
  },
  {
    slug: "digital-x-rays",
    title: "Digital X-rays",
    icon: Syringe,
    short:
      "Low-radiation RVG and OPG imaging that shows you exactly what we see, on screen, in seconds.",
    benefits: ["Up to 80% less radiation", "Instant on-screen results", "Accurate treatment planning"],
    procedure: ["Sensor or panoramic capture", "Image reviewed together with you", "Stored in your records"],
    time: "5 minutes",
    recovery: "None",
    candidates: "Any patient needing diagnosis, implants or orthodontic planning.",
    faqs: [
      {
        q: "Is dental X-ray safe?",
        a: "Yes. A digital dental X-ray delivers a fraction of the radiation you receive on a short flight.",
      },
    ],
  },
];

export const TRUST_POINTS = [
  "Modern Equipment",
  "Experienced Dentists",
  "Pain-Free Dentistry",
  "Sterile Environment",
  "Affordable Pricing",
  "Emergency Care",
];

export const TESTIMONIALS = [
  {
    name: "Priya Ramesh",
    location: "Kelambakkam",
    quote:
      "I had put off my root canal for two years out of fear. It was over in one sitting and I genuinely felt nothing. The team explained every step before doing it.",
    treatment: "Root Canal Treatment",
  },
  {
    name: "Arun Kumar",
    location: "Siruseri",
    quote:
      "My implant looks exactly like the tooth I lost. Pricing was shared upfront with no surprises, which is rare. Worth the drive down OMR.",
    treatment: "Dental Implant",
  },
  {
    name: "Divya Shankar",
    location: "Thiruporur",
    quote:
      "They showed me a digital preview of my smile before starting. The final result matched it perfectly — I cannot stop smiling in photos now.",
    treatment: "Smile Makeover",
  },
  {
    name: "Karthik Venkatesan",
    location: "Navalur",
    quote:
      "Brought my six-year-old in terrified. She walked out asking when she could come back. That says everything about how they handle children.",
    treatment: "Kids Dentistry",
  },
  {
    name: "Meera Nair",
    location: "Kalavakkam",
    quote:
      "Called at 10 pm with a swollen jaw and they saw me first thing next morning. Clean clinic, honest advice, no unnecessary treatment pushed.",
    treatment: "Emergency Care",
  },
];

export const FAQS = [
  {
    q: "Does teeth whitening hurt?",
    a: "No. Professional whitening is comfortable for almost everyone. A small number of patients notice brief cold sensitivity for a day, which we prevent with a desensitising gel applied at the end of the session.",
  },
  {
    q: "How long does a root canal take?",
    a: "Most root canals are completed in a single 45 to 75 minute sitting using rotary endodontics. Complex molars or infected teeth may need a second short visit before the crown is placed.",
  },
  {
    q: "Do you treat children?",
    a: "Yes. We offer full paediatric dentistry from the first tooth — check-ups, fluoride, sealants, fillings and habit correction — in a calm, child-friendly setting.",
  },
  {
    q: "Do you accept UPI?",
    a: "We accept UPI, all major debit and credit cards, net banking and cash. Zero-cost EMI is available on treatments above ₹15,000.",
  },
  {
    q: "How long do implants last?",
    a: "With good oral hygiene and regular reviews, dental implants commonly last 20 years or more. The crown on top may need replacement after 10 to 15 years of function.",
  },
  {
    q: "Do I need an appointment or can I walk in?",
    a: "Appointments are recommended so you are seen without waiting, but we always keep emergency slots open for patients in pain.",
  },
];

export const JOURNEY = [
  {
    title: "Book Appointment",
    body: "Reserve a slot online, on WhatsApp or by phone. You will get a confirmation within minutes.",
  },
  {
    title: "Consultation",
    body: "A relaxed conversation about your concerns, medical history and what you want your smile to do for you.",
  },
  {
    title: "Diagnosis",
    body: "Digital X-rays and intraoral photos, reviewed on screen together with transparent, itemised pricing.",
  },
  {
    title: "Treatment",
    body: "Painless, precise care delivered on schedule by the specialist best suited to your case.",
  },
  {
    title: "Healthy Smile",
    body: "Aftercare guidance, review visits and reminders that keep your results looking their best for years.",
  },
];

export const WHY_US = [
  {
    title: "Highly Experienced Team",
    body: "Specialists in endodontics, implantology, orthodontics and paediatric dentistry under one roof.",
  },
  {
    title: "Latest Dental Technology",
    body: "Digital RVG and OPG imaging, rotary endodontics, intraoral scanning and painless anaesthesia delivery.",
  },
  {
    title: "Strict Sterilisation",
    body: "Class B autoclave cycles, single-use disposables and pouch-sealed instruments opened in front of you.",
  },
  {
    title: "Comfortable Environment",
    body: "Quiet operatories, ceiling entertainment and a lounge designed to take the edge off dental anxiety.",
  },
  {
    title: "Personalised Treatment Plans",
    body: "Options ranked by outcome, longevity and budget, so the decision always stays yours.",
  },
  {
    title: "Transparent Pricing",
    body: "Written estimates before treatment begins. No hidden add-ons, no upselling, EMI available.",
  },
  {
    title: "Convenient OMR Location",
    body: "On the Kalavakkam stretch of OMR with free parking — minutes from Siruseri, Navalur and Thiruporur.",
  },
  {
    title: "Emergency Appointments",
    body: "Same-day slots held back daily and 24×7 phone triage for patients in acute pain.",
  },
];

export const DOCTORS = [
  {
    name: "Dr. Anitha Raghavan",
    role: "Founder & Chief Dental Surgeon",
    creds: "BDS, MDS — Prosthodontics & Implantology",
    bio: "Sixteen years of restoring function and confidence, with a special interest in full-mouth rehabilitation and implant-supported smiles.",
  },
  {
    name: "Dr. Vignesh Balaji",
    role: "Endodontist",
    creds: "BDS, MDS — Conservative Dentistry & Endodontics",
    bio: "Single-sitting root canal specialist who has completed over 4,000 endodontic procedures using magnification and rotary systems.",
  },
  {
    name: "Dr. Shruthi Menon",
    role: "Orthodontist & Paediatric Lead",
    creds: "BDS, MDS — Orthodontics",
    bio: "Aligner and braces expert known for her patience with anxious children and her precise, face-driven treatment planning.",
  },
];