import {
  ProjectTypeOption,
  FinishGradeOption,
  SuburbOption,
  BeforeAfterProject,
  ReviewItem,
  ServiceItem,
} from '../types';

export const COMPANY_INFO = {
  name: 'RoyalBLD Builders & Renovators',
  shortName: 'RoyalBLD',
  tagline: 'Luxury Residential Construction & Architectural Renovations',
  founder: 'Albert Zenda',
  founderRole: 'Founder & Managing Director (Master Builder)',
  experienceYears: 14,
  estYear: 2012,
  address: '369 Paul Kruger Street, Gezina / Capital Park, Pretoria, Gauteng 0084',
  city: 'Pretoria',
  province: 'Gauteng',
  country: 'South Africa',
  phones: {
    primary: '074 829 5759',
    secondary: '072 129 9257',
    landline: '087 551 0544',
    intlPrimary: '+27748295759',
  },
  email: 'royalbld1@gmail.com',
  website: 'https://royalbld.co.za',
  googleRating: 5.0,
  verifiedReviewsCount: 48,
  nhbrcCompliant: true,
  onSiteGuarantee: '100% Daily On-Site Supervision by Albert Zenda',
};

// Generates direct WhatsApp click URL with encoded message
export function createWhatsAppUrl(customMessage: string): string {
  const phone = '27748295759';
  const encoded = encodeURIComponent(customMessage.trim());
  return `https://wa.me/${phone}?text=${encoded}`;
}

export const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'bathroom',
    name: 'Luxury Bathroom Remodel',
    tagline: 'Spa-grade sanctuary, freestanding tubs, travertine tiling & concealed valves',
    baseRatePerSqm: 7500,
    minBudget: 45000,
    typicalDuration: '10 – 16 working days',
    defaultSqm: 12,
    minSqm: 6,
    maxSqm: 40,
    stepSqm: 1,
  },
  {
    id: 'kitchen',
    name: 'Custom Kitchen Renovation',
    tagline: 'Monolithic stone islands, soft-close architectural joinery & sculleries',
    baseRatePerSqm: 8500,
    minBudget: 65000,
    typicalDuration: '2 – 3 weeks',
    defaultSqm: 24,
    minSqm: 10,
    maxSqm: 80,
    stepSqm: 2,
  },
  {
    id: 'extension',
    name: 'Home Addition / Extension',
    tagline: 'Architectural wing additions, double-volume living rooms & outdoor patios',
    baseRatePerSqm: 12500,
    minBudget: 150000,
    typicalDuration: '6 – 12 weeks',
    defaultSqm: 45,
    minSqm: 15,
    maxSqm: 200,
    stepSqm: 5,
  },
  {
    id: 'full_build',
    name: 'Complete New Residential Build',
    tagline: 'Turnkey architectural construction from foundation to final occupancy certificate',
    baseRatePerSqm: 14500,
    minBudget: 850000,
    typicalDuration: '4 – 7 months',
    defaultSqm: 120,
    minSqm: 60,
    maxSqm: 600,
    stepSqm: 10,
  },
  {
    id: 'tiling_painting',
    name: 'Interior Tiling & Painting',
    tagline: 'Precision laser-leveled porcelain slabs & premium textured wall finishes',
    baseRatePerSqm: 1200,
    minBudget: 25000,
    typicalDuration: '5 – 10 days',
    defaultSqm: 65,
    minSqm: 20,
    maxSqm: 350,
    stepSqm: 5,
  },
  {
    id: 'solar_backup',
    name: 'Solar & Inverter Backup System',
    tagline: '5kVA to 16kVA Tier-1 Lithium battery & hybrid inverter solutions',
    baseRatePerSqm: 5200,
    minBudget: 68000,
    typicalDuration: '2 – 3 days',
    defaultSqm: 16,
    minSqm: 5,
    maxSqm: 32,
    stepSqm: 1,
  },
];

export const FINISH_GRADES: FinishGradeOption[] = [
  {
    id: 'standard',
    name: 'Executive Grade',
    multiplier: 1.0,
    description: 'High-durability quartz surfaces, SABS certified hardware, and quality imported porcelain.',
    materials: 'Quartz counters, porcelain 600x1200mm, Blum hardware, matt black fittings.',
  },
  {
    id: 'luxury',
    name: 'Luxury Executive',
    multiplier: 1.35,
    description: 'Engineered Caesarstone / granite, custom fluted carpentry, brushed bronze fixtures, and warm LED cove lighting.',
    materials: 'Caesarstone/Neolith, large format 1200x2400mm slabs, brushed brass Hansgrohe, integrated lighting.',
  },
  {
    id: 'ultra',
    name: 'Ultra-High End Architectural',
    multiplier: 1.85,
    description: 'Bookmatched natural marble slabs, bespoke floor-to-ceiling architectural joinery, automated smart controls, and museum-grade finishes.',
    materials: 'Natural Calacatta marble, solid oak detailing, Axor/Gessi tapware, concealed architectural profiles.',
  },
];

export const PRETORIA_SUBURBS: SuburbOption[] = [
  { name: 'Waterkloof Ridge', region: 'Pretoria East', travelTier: 'priority' },
  { name: 'Waterkloof & Waterkloof Park', region: 'Pretoria East', travelTier: 'priority' },
  { name: 'Lynnwood & Lynnwood Glen', region: 'Pretoria East', travelTier: 'priority' },
  { name: 'Silver Lakes Golf Estate', region: 'Pretoria East', travelTier: 'priority' },
  { name: 'Brooklyn & Nieuw Muckleneuk', region: 'Pretoria East', travelTier: 'priority' },
  { name: 'Midstream Estate', region: 'Centurion', travelTier: 'priority' },
  { name: 'Heritage Hill & Irene', region: 'Centurion', travelTier: 'priority' },
  { name: 'Mooikloof Equestrian Estate', region: 'Pretoria East', travelTier: 'priority' },
  { name: 'Faerie Glen & Garsfontein', region: 'Pretoria East', travelTier: 'standard' },
  { name: 'Montana Park & Doornpoort', region: 'Pretoria North', travelTier: 'standard' },
  { name: 'Pretoria Central & Gezina', region: 'Pretoria Central', travelTier: 'standard' },
  { name: 'Menlyn Maine & Menlyn', region: 'Pretoria East', travelTier: 'priority' },
];

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: 'waterkloof',
    title: 'Waterkloof Ridge Villa Remodel',
    suburb: 'Waterkloof Ridge, Pretoria East',
    category: 'extension',
    investment: 'R 480,000',
    duration: '7 Weeks',
    description:
      'Complete reconfiguration of a closed-off 1990s Mediterranean layout into a breathtaking light-flooded architectural pavilion. Removed three load-bearing walls, installed recessed steel RSJ beams, and unified the living area with 3-meter stacking glass portals onto the landscaped terrace.',
    beforeImg: '/images/waterkloof_villa_before.jpg',
    afterImg: '/images/waterkloof_villa_after.jpg',
    beforeHighlights: [
      'Heavy dark arches and compartmentalized small rooms',
      'Cracked terracotta floor tiles with uneven sub-screed',
      'Inadequate natural lighting and poor outdoor connectivity',
      'Aged electrical conduits and surface plumbing',
    ],
    afterHighlights: [
      'Seamless double-volume open plan with exposed steel structure',
      'Polished aggregate concrete with underfloor hydronic heating',
      'Custom acoustic slatted oak ceiling with recessed warm LEDs',
      'Full architectural glazing opening onto garden infinity terrace',
    ],
    keySpecs: [
      { label: 'Scope', value: 'Structural Demolition & Open-Plan Build' },
      { label: 'Floor Area', value: '185 m² Reconfigured' },
      { label: 'Finishes', value: 'Natural Oak, Steel RSJ, Concrete' },
      { label: 'Supervisor', value: 'Albert Zenda (On-site daily)' },
    ],
  },
  {
    id: 'midstream',
    title: 'Midstream Estate Chef Kitchen & Scullery',
    suburb: 'Midstream Estate, Centurion',
    category: 'kitchen',
    investment: 'R 175,000',
    duration: '16 Days',
    description:
      'Replacement of builder-spec laminate cabinetry with an executive chef kitchen centered around a 3.8-meter quartzite waterfall island, hidden walk-in pantry/scullery, and integrated German appliances.',
    beforeImg: '/images/midstream_kitchen_before.jpg',
    afterImg: '/images/midstream_kitchen_after.jpg',
    beforeHighlights: [
      'Dated cherry-wood melamine cabinets with peeling edge strips',
      'Constricted U-shape blocking natural foot traffic to the patio',
      'Low fluorescent bulkhead ceiling with uneven lighting',
      'Exposed microwave, kettle, and dish rack clutter',
    ],
    afterHighlights: [
      '3.8m monolithic Cristallo Quartzite waterfall center island',
      'Anti-fingerprint matte charcoal cabinetry with fluted warm timber',
      'Concealed pocket doors revealing fully plumbed prep scullery',
      'Warm architectural cove LED lighting with CRI 95 rendering',
    ],
    keySpecs: [
      { label: 'Scope', value: 'Full Gut & Custom Cabinetry Fit-Out' },
      { label: 'Surface', value: 'Cristallo Quartzite & Oak Veneer' },
      { label: 'Hardware', value: 'Blum Legrabox & Tip-On Blumotion' },
      { label: 'Turnaround', value: 'Handed over 2 days ahead of schedule' },
    ],
  },
  {
    id: 'silverlakes',
    title: 'Silver Lakes Double En-Suite Sanctuary',
    suburb: 'Silver Lakes Golf Estate, Pretoria East',
    category: 'bathroom',
    investment: 'R 115,000',
    duration: '12 Days',
    description:
      'Transformation of a cramped 1990s corner-tub en-suite into a five-star hotel standard wellness retreat. Features a monolithic matte stone soaking tub, dual rainfall showers with linear concealed drainage, and backlit mirror joinery.',
    beforeImg: '/images/silverlakes_bathroom_before.jpg',
    afterImg: '/images/silverlakes_bathroom_after.jpg',
    beforeHighlights: [
      'Bulky beige acrylic corner jet-bath consuming 45% of room space',
      'Damp buildup behind deteriorating shower grout lines',
      'Exposed pipework and dated brass tapware',
      'Small high window with poor airflow and natural light',
    ],
    afterHighlights: [
      'Freestanding composite stone bath beneath oversized skylight',
      'Bookmatched Italian travertine wall cladding (1200x2400mm)',
      'Dual walk-in frameless glass showers with brushed bronze mixer',
      'Floating fluted walnut double vanity with concealed wall spouts',
    ],
    keySpecs: [
      { label: 'Waterproofing', value: 'Dual-coat Sika Cemflex certified' },
      { label: 'Tiles', value: 'Large format Travertine slabs' },
      { label: 'Plumbing', value: 'Hansgrohe thermostatic concealed mixers' },
      { label: 'Delivery', value: 'Zero punch-list defects at handover' },
    ],
  },
  {
    id: 'brooklyn',
    title: 'Brooklyn Master Bedroom Suite & Balcony Addition',
    suburb: 'Brooklyn, Pretoria East',
    category: 'extension',
    investment: 'R 385,000',
    duration: '9 Weeks',
    description:
      'Second-storey cantilevered extension adding an executive master wing with walk-in dressing room and private cantilevered balcony overlooking mature Jacaranda trees.',
    beforeImg: '/images/waterkloof_villa_before.jpg',
    afterImg: '/images/brooklyn_suite_after.jpg',
    beforeHighlights: [
      'Flat unutilized roof terrace prone to water ponding and leaks',
      'Standard bedroom with limited wardrobe space',
      'No elevated view of the Pretoria garden and tree canopy',
      'Outdated electrical and thermal insulation',
    ],
    afterHighlights: [
      'Reinforced concrete cantilever slab with structural engineer sign-off',
      'High-ceilinged suite with floor-to-ceiling double-glazed stacking doors',
      'Natural herringbone timber floor with perimeter ambient cove lighting',
      'Private suspended balcony with frameless structural balustrade',
    ],
    keySpecs: [
      { label: 'Engineering', value: 'SANS 10400 & Structural Engineer signed' },
      { label: 'Added Area', value: '62 m² Enclosed + 18 m² Balcony' },
      { label: 'Thermal Spec', value: 'Double-glazed Low-E + Isover ceiling batts' },
      { label: 'Sign-off', value: 'Tshwane Municipality Occupancy Certificate' },
    ],
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'full_build',
    title: 'Luxury Home Renovations & Remodeling',
    shortDesc: 'Turnkey architectural transformations that modernize dated estates into high-value contemporary masterpieces.',
    fullDesc:
      'We reimagine luxury residential properties across Pretoria East and Centurion. From removing structural load-bearing walls and installing recessed steel beams to complete spatial redesigns, RoyalBLD manages every trade in-house under Albert Zenda’s direct oversight.',
    startingRate: 'From R 180,000',
    typicalDuration: '4 – 10 weeks',
    scopeList: [
      'Structural engineering review & wall removals',
      'Complete electrical reticulation & smart lighting',
      'Open-plan reconfiguration & screed leveling',
      'Custom ceiling bulkheads & shadowline cornices',
    ],
    deliverables: [
      'Full architectural drawings & 3D mockups',
      'Structural engineer sign-off certificate',
      'Electrical Certificate of Compliance (COC)',
      '12-Month Workmanship Warranty',
    ],
  },
  {
    id: 'kitchen',
    title: 'Designer Kitchen Remodeling',
    shortDesc: 'Showcase culinary spaces combining monolithic quartz islands, fluted carpentry, and concealed butler sculleries.',
    fullDesc:
      'Your kitchen is the centerpiece of your home. We fabricate custom architectural cabinetry with precision laser edging, premium Blum soft-close mechanics, and integrated appliances that merge aesthetic grace with chef-grade functionality.',
    startingRate: 'From R 65,000',
    typicalDuration: '2 – 3 weeks',
    scopeList: [
      'Custom 3D CAD kitchen layouts & ergonomics',
      'Quartz, Granite & Porcelain waterfall countertops',
      'Concealed prep sculleries & pantry joinery',
      'Under-cabinet and toe-kick warm LED channel lighting',
    ],
    deliverables: [
      'High-grade moisture resistant board substrates',
      'Blum motion-damped hinges & drawer slides',
      'Plumbing & Gas installation certificates',
      'Turnaround in as fast as 14 working days',
    ],
  },
  {
    id: 'bathroom',
    title: 'Spa-Grade Bathroom Suites',
    shortDesc: 'Curated wellness sanctuaries with freestanding stone baths, frameless glass, and precision travertine tiling.',
    fullDesc:
      'We craft hotel-inspired master en-suites designed for serenity and rejuvenation. We prioritize uncompromising multi-stage tanking waterproofing, large-format tile alignment with zero lippage, and concealed thermostatic plumbing.',
    startingRate: 'From R 45,000',
    typicalDuration: '10 – 16 days',
    scopeList: [
      'Certified multi-coat waterproofing membrane',
      'Large-format Italian porcelain & travertine tiling',
      'Walk-in curbless showers with linear drains',
      'Floating vanity units with stone basins & wall spouts',
    ],
    deliverables: [
      'Waterproofing certificate with 5-year guarantee',
      'Hansgrohe / Grohe concealed mixer fixtures',
      'Toughened frameless glass balustrades & enclosures',
      'Zero-defect snag-free final handover',
    ],
  },
  {
    id: 'extension',
    title: 'Architectural Additions & Extensions',
    shortDesc: 'Seamless structural additions that blend invisibly with your home’s existing architecture and expand living space.',
    fullDesc:
      'Whether adding a master suite, enclosing a double-volume patio, or building a second storey, RoyalBLD delivers structurally sound, municipality-compliant additions designed to elevate your lifestyle and add substantial property equity.',
    startingRate: 'From R 150,000',
    typicalDuration: '6 – 12 weeks',
    scopeList: [
      'Foundations, underpinning & reinforced brickwork',
      'Roof trusses, waterproofing & architectural tiling',
      'Aluminum folding-stacking door installations',
      'Municipal plan submission & engineering inspection',
    ],
    deliverables: [
      'NHBRC registered project compliance',
      'Engineer foundation & slab inspection certificates',
      'Pretoria City Council approval documentation',
      'Seamless exterior texture & paint blending',
    ],
  },
  {
    id: 'tiling_painting',
    title: 'Precision Tiling & Specialist Finishes',
    shortDesc: 'Laser-calibrated floor slab installations, micro-cement screeds, and premium exterior weatherproofing.',
    fullDesc:
      'True luxury lives in millimeter precision. Our master tilers specialize in oversized porcelain tiles (up to 1200x2400mm) without lippage, and our finishing painters apply high-durability acrylic coatings and micro-textured screeds.',
    startingRate: 'From R 25,000',
    typicalDuration: '5 – 10 days',
    scopeList: [
      'Self-leveling floor compound substrate prep',
      'Precision mitering for clean 45° tile edges',
      'Stain-resistant epoxy grout application',
      'Multi-coat washable interior & UV-stable exterior paint',
    ],
    deliverables: [
      'Flatness tolerance within ±1mm over 2 meters',
      'Zero tile hollow spots guaranteed',
      'Dulux / Plascon premium spec coatings',
      'Clean daily cleanup and site masking',
    ],
  },
  {
    id: 'solar_backup',
    title: 'Solar Backup & Executive Fit-Outs',
    shortDesc: 'Integrated hybrid inverter solutions and executive home office conversions for uninterrupted luxury living.',
    fullDesc:
      'Protect your home against load-shedding and power interruptions with quiet, seamlessly integrated battery backup installations paired with high-efficiency Tier-1 solar arrays, installed by certified master electricians.',
    startingRate: 'From R 68,000',
    typicalDuration: '2 – 3 days',
    scopeList: [
      'Deye / Sunsynk Tier-1 hybrid inverters (5kVA - 16kVA)',
      'Lithium Iron Phosphate (LiFePO4) battery banks',
      'Essential and non-essential load distribution split',
      'Automatic changeover switches and surge protection',
    ],
    deliverables: [
      'Department of Labour certified Electrical COC',
      '10-Year inverter and battery manufacturer warranty',
      'Real-time smartphone monitoring app setup',
      'Neat architectural cable containment',
    ],
  },
];

export const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    clientName: 'Dr. Johan van der Merwe',
    suburb: 'Waterkloof Ridge, Pretoria East',
    projectType: 'Villa Renovation & Kitchen Remodel',
    rating: 5,
    date: 'February 2026',
    investmentRange: 'R 650,000',
    reviewText:
      'Albert Zenda is a rare breed in Pretoria construction: he was literally on our site at 07:00 every single morning. We completely gutted our ground floor, removed two load-bearing walls, and built a bespoke chef kitchen. Handed over on the exact date promised, with zero cost surprises.',
    verifiedHomeowner: true,
    highlightPhrase: 'Albert was on site at 07:00 every morning without fail.',
  },
  {
    id: 'rev-2',
    clientName: 'Thabo & Naledi Mokoena',
    suburb: 'Midstream Estate, Centurion',
    projectType: 'Designer Kitchen & Butler Scullery',
    rating: 5,
    date: 'January 2026',
    investmentRange: 'R 180,000',
    reviewText:
      'We had heard horror stories about contractors in estates, but RoyalBLD adhered strictly to Midstream HOA construction rules, kept the site spotlessly clean, and finished our kitchen in 16 days. The quartzite island waterfall is an absolute showstopper. Highly recommended!',
    verifiedHomeowner: true,
    highlightPhrase: 'Adhered strictly to estate rules and finished in 16 days.',
  },
  {
    id: 'rev-3',
    clientName: 'Liezel & Gerhard Botha',
    suburb: 'Silver Lakes Golf Estate, Pretoria East',
    projectType: 'Double En-Suite Bathroom Renovation',
    rating: 5,
    date: 'March 2026',
    investmentRange: 'R 125,000',
    reviewText:
      'The tiling precision is unbelievable. Large format travertine tiles with immaculate 45-degree miters and perfect slope toward the concealed drain. Albert sent WhatsApp video updates every evening showing progress. That level of transparency gave us complete peace of mind.',
    verifiedHomeowner: true,
    highlightPhrase: 'Daily WhatsApp video updates gave us complete peace of mind.',
  },
  {
    id: 'rev-4',
    clientName: 'Marcus Kensington',
    suburb: 'Brooklyn, Pretoria East',
    projectType: 'Second-Storey Master Wing Addition',
    rating: 5,
    date: 'December 2025',
    investmentRange: 'R 420,000',
    reviewText:
      'RoyalBLD handled our 60m² bedroom addition. What impressed me most was Albert’s structural discipline. He coordinated directly with the municipal engineer, handled inspections seamlessly, and prevented water intrusion during summer rains. Truly a master builder.',
    verifiedHomeowner: true,
    highlightPhrase: 'Master builder discipline with seamless municipal sign-off.',
  },
  {
    id: 'rev-5',
    clientName: 'Col. Pieter Snyman (Ret.)',
    suburb: 'Montana Park, Pretoria',
    projectType: 'Whole House Tiling & Exterior Weatherproofing',
    rating: 5,
    date: 'November 2025',
    investmentRange: 'R 95,000',
    reviewText:
      'Solid, honest pricing and skilled tradesmen. Albert’s team retiled our entire 220m² home and re-plastered our exterior perimeter walls. Every worker was polite, uniform, and focused. RoyalBLD is the only contractor I will allow on my property.',
    verifiedHomeowner: true,
    highlightPhrase: 'Solid, honest pricing and skilled tradesmen you can trust.',
  },
  {
    id: 'rev-6',
    clientName: 'Claire & Simon Du Preez',
    suburb: 'Lynnwood, Pretoria East',
    projectType: 'En-Suite Bathroom & Walk-In Closet',
    rating: 5,
    date: 'October 2025',
    investmentRange: 'R 140,000',
    reviewText:
      'The craftsmanship on our bathroom vanity and custom closets exceeded expectations. Albert caught an alignment flaw that we had not even noticed and had his carpenter rebuild it before we could even ask. That is true accountability.',
    verifiedHomeowner: true,
    highlightPhrase: 'Caught an alignment flaw and fixed it before we even noticed.',
  },
];

export const FAQS = [
  {
    question: 'How do you guarantee project costs will not escalate midway?',
    answer:
      'At RoyalBLD, Albert Zenda personally conducts an in-depth on-site structural audit before issuing your fixed-price contract. We produce itemized Bills of Quantities (BOQ) with guaranteed material specs. Unless you request an explicit change of scope or finish material, your final invoice matches your contracted quote to the cent.',
  },
  {
    question: 'Is Albert Zenda really on site every day?',
    answer:
      'Yes. Unlike commercial sales contractors who sign a contract and sub-contract to unsupervised crews, Albert Zenda’s core philosophy is physical on-site presence. He personally manages and inspects leveling, waterproofing membranes, structural tie-ins, and finishes daily.',
  },
  {
    question: 'Do you work inside gated estates like Midstream and Silver Lakes?',
    answer:
      'Yes. A significant portion of our work is inside high-security gated estates in Pretoria East and Centurion (Midstream, Heritage Hill, Silver Lakes, Mooikloof). We comply with all estate HOA rules, contractor deposits, delivery time windows, and safety protocols.',
  },
  {
    question: 'How long does a typical kitchen or bathroom renovation take?',
    answer:
      'A luxury bathroom renovation typically takes 10 to 16 working days, including multi-stage tanking and tile curing. A custom kitchen renovation is typically completed in 2 to 3 weeks. Before starting, you receive an exact milestone calendar.',
  },
  {
    question: 'What warranties and guarantees does RoyalBLD provide?',
    answer:
      'All structural construction comes with our 5-year structural guarantee and NHBRC compliance. Waterproofing includes a certified 5-year warranty, and all general craftsmanship carries an unconditional 12-month defect-liability warranty.',
  },
];
