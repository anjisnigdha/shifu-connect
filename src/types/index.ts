export type Stakeholder = {
  persona: string;
  description: string;
  examples: string[];
  reach: string;
};

export type PersonaFlows = {
  everyone: string[];
  students: string[];
  supporters: string[];
  screeningPartners: string[];
  sponsors: string[];
};

export type Page = {
  name: string;
  sections: string[];
};

export type Feature = {
  name: string;
  type: string;
  details: {
    description: string;
    [key: string]: string | string[] | boolean | Record<string, string>;
  };
};

export type ProjectData = {
  project: string;
  description: string;
  keyPointers: string[];
  stakeholders: Stakeholder[];
  personaFlows: PersonaFlows;
  pages: Page[];
  features: Feature[];
  integrationAndTech: {
    [key: string]: string;
  };
  goals: {
    launchBy: string;
    impactTargets: {
      studentsOffline: number;
      studentsOnline: number;
    };
    sourceData: string;
  };
};

export type ScreeningEvent = {
  id: string;
  location: string;
  date: string;
  hostType: 'college' | 'accelerator' | 'company' | 'international';
  attendees: number;
  host: string;
  region: string;
  state?: string;
  country: string;
  coordinates: [number, number]; // [longitude, latitude]
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  organization?: string;
  quote: string;
  image?: string;
  location?: string;
};

export type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze';

export type Sponsor = {
  id: string;
  name: string;
  logo: string;
  tier: SponsorTier;
  website?: string;
};

export type AISuperpower = 'Builder' | 'Designer' | 'Researcher' | 'Entrepreneur';

export type QuizResult = {
  superpower: AISuperpower;
  description: string;
  matchedFounder: string;
  founderStory: string;
  founderImage?: string;
}; 