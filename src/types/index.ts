export type ProjectCategory = 
  | 'kitchen'
  | 'bathroom'
  | 'extension'
  | 'full_build'
  | 'tiling_painting'
  | 'solar_backup';

export interface ProjectTypeOption {
  id: ProjectCategory;
  name: string;
  tagline: string;
  baseRatePerSqm: number; // ZAR per m²
  minBudget: number; // ZAR min
  typicalDuration: string;
  defaultSqm: number;
  minSqm: number;
  maxSqm: number;
  stepSqm: number;
}

export type FinishGrade = 'standard' | 'luxury' | 'ultra';

export interface FinishGradeOption {
  id: FinishGrade;
  name: string;
  multiplier: number;
  description: string;
  materials: string;
}

export interface SuburbOption {
  name: string;
  region: string;
  travelTier: 'standard' | 'priority';
}

export interface BeforeAfterProject {
  id: string;
  title: string;
  suburb: string;
  category: ProjectCategory;
  investment: string;
  duration: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  beforeHighlights: string[];
  afterHighlights: string[];
  keySpecs: { label: string; value: string }[];
}

export interface ReviewItem {
  id: string;
  clientName: string;
  suburb: string;
  projectType: string;
  rating: number;
  date: string;
  investmentRange: string;
  reviewText: string;
  verifiedHomeowner: boolean;
  highlightPhrase: string;
}

export interface ServiceItem {
  id: ProjectCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  startingRate: string;
  typicalDuration: string;
  scopeList: string[];
  deliverables: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'concierge' | 'user';
  text: string;
  timestamp: string;
  suggestedActions?: { label: string; query: string }[];
}
