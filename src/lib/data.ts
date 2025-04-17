import { ProjectData, ScreeningEvent, Testimonial, Sponsor, QuizResult } from '@/types';

export const PROJECT_DATA: ProjectData = {
  project: "BSY Web App - Bhaarat SaaS Yaatra",
  description: "A responsive, interactive, engaging, creatively modern web platform that showcases a powerful, inspiring documentary about entrepreneurs from remotest parts of India. It ties together all stakeholders involved in the screening, funding and distribution of the documentary. The platform serves students, supporters, screening partners, and sponsors with differentiated pathways and interactive storytelling.",
  keyPointers: [
    "Responsive website",
    "Tie together stakeholders: students, supporters, screening hosts, partners, sponsors",
    "Launch by early May",
    "Convey two key selling points: High-quality documentary + Massive distribution plan",
    "Use creatives, illustrations, depictions, workflows, charts"
  ],
  stakeholders: [
    {
      persona: "Students",
      description: "16-24 yo across India",
      examples: [
        "Harsh Varma (Chandigarh)",
        "Shubham (Dibrugarh)"
      ],
      reach: "100K Offline → 1M Online"
    },
    {
      persona: "Supporters",
      description: "Founders/Investors/Operators across the world, from Indian origin",
      examples: [
        "Lakshmi",
        "Jay Pandya",
        "Kishore Devarakonda"
      ],
      reach: "10K Offline → 100K Online"
    },
    {
      persona: "Hosting Partner - India",
      description: "An org that hosts the screening - College/Accelerator/Company",
      examples: [
        "Kochi Engineering College",
        "BITA",
        "Whatfix"
      ],
      reach: "1000"
    },
    {
      persona: "Hosting Partner - Global",
      description: "An org that hosts international screenings",
      examples: [
        "FUNDA",
        "TANA"
      ],
      reach: "100"
    },
    {
      persona: "Outreach Partners",
      description: "Massive distribution networks",
      examples: [
        "Indiaspora",
        "TeachForIndia",
        "InkTalks",
        "SaaSBoomi",
        "productFolks"
      ],
      reach: "50"
    },
    {
      persona: "Sponsors",
      description: "Govt/Private companies who support this cause",
      examples: [
        "Kerala Startup Mission",
        "Sprinto",
        "Passright",
        "Microsoft",
        "Google",
        "Amazon",
        "Perplexity"
      ],
      reach: "55"
    }
  ],
  personaFlows: {
    everyone: [
      "Glimpse of the Documentary - Trailer, Behind-the-scenes, Stories",
      "Overview of the Massive Distribution Plan - India + Global"
    ],
    students: [
      "Register for FREE screening",
      "Encourage social sharing post-registration"
    ],
    supporters: [
      "Register for screening via paid Crowdfunding Tiers"
    ],
    screeningPartners: [
      "Value Proposition",
      "Onboarding Workflow (host, confirm, report)"
    ],
    sponsors: [
      "Sponsor Value Proposition",
      "Contact Us Form"
    ]
  },
  pages: [
    {
      name: "Home",
      sections: [
        "Hero Banner - Inspire Millions Through AI",
        "WHY - India's untapped potential",
        "HOW - Documentary + Distribution",
        "Trailer Component",
        "Dynamic Distribution Map",
        "Live Screening Counter",
        "Stakeholder CTAs: Student, Partner, Supporter, Sponsor",
        "Moodboard Showcase: Maps, Quotes, Logos"
      ]
    },
    {
      name: "Documentary",
      sections: [
        "Trailer",
        "Behind-the-scenes Carousel",
        "Founder Stories",
        "Early Testimonials",
        "Press Highlights"
      ]
    },
    {
      name: "Screenings",
      sections: [
        "Free Student Registration Form",
        "Crowdfunding Tiers for Supporters",
        "Start a Screening Toolkit Download",
        "Live Map + Ticker",
        "Leaderboard"
      ]
    },
    {
      name: "Partners",
      sections: [
        "Host a Screening",
        "Outreach Partners",
        "Distribution Network",
        "Value Prop",
        "Submit Interest Form"
      ]
    },
    {
      name: "Sponsors",
      sections: [
        "Why Sponsor BSY",
        "Govt + Private Logos",
        "Contact Us Form"
      ]
    }
  ],
  features: [
    {
      name: "Find Your AI Superpower Quiz",
      type: "interactive-component",
      details: {
        description: "A 3–5 question personality quiz to help students discover which AI career path suits them (e.g., Builder, Designer, Researcher, Entrepreneur).",
        resultPage: "Match student to documentary founder with similar traits. Include shareable result card.",
        cta: [
          "Watch Documentary",
          "Attend a Screening"
        ]
      }
    },
    {
      name: "Dynamic Distribution Map",
      type: "map-component",
      details: {
        description: "India-centric heatmap showing student registration density with optional global toggle.",
        interactions: [
          "hover to reveal city stats",
          "filter by region/state/screening type"
        ]
      }
    },
    {
      name: "Wall of Inspiration",
      type: "ugc-component",
      details: {
        description: "Live-updating grid of quotes/photos from students or mentors who've watched the documentary.",
        userSubmission: true,
        moderation: "manual approval or moderation queue"
      }
    }
  ],
  integrationAndTech: {
    framework: "Next.js + TailwindCSS",
    deployment: "Vercel",
    forms: "Formspree or Airtable",
    map: "Mapbox or Leaflet",
    livestream: "YouTube Live or Twitch",
    UGC_moderation: "Manual or Firebase trigger",
    real_time: "Firebase or Socket.io for ticker & leaderboard",
    shareable_generator: "Canvas or dynamic image API"
  },
  goals: {
    launchBy: "Early May",
    impactTargets: {
      studentsOffline: 100000,
      studentsOnline: 1000000
    },
    sourceData: "https://docs.google.com/spreadsheets/d/1q8K8-ENYrEhKxl20B8XxDpl1eS0KFiM2tvwsdE_eUAs/edit?usp=sharing"
  }
};

// Mock Screening Events for the map
export const MOCK_SCREENINGS: ScreeningEvent[] = [
  {
    id: "1",
    location: "Delhi",
    date: "2025-05-10",
    hostType: "college",
    attendees: 350,
    host: "Delhi Technical University",
    region: "North",
    state: "Delhi",
    country: "India",
    coordinates: [77.1025, 28.7041]
  },
  {
    id: "2",
    location: "Mumbai",
    date: "2025-05-12",
    hostType: "company",
    attendees: 120,
    host: "TechStartup Hub",
    region: "West",
    state: "Maharashtra",
    country: "India",
    coordinates: [72.8777, 19.0760]
  },
  {
    id: "3",
    location: "Bangalore",
    date: "2025-05-15",
    hostType: "accelerator",
    attendees: 200,
    host: "SaaS Accelerator",
    region: "South",
    state: "Karnataka",
    country: "India",
    coordinates: [77.5946, 12.9716]
  },
  {
    id: "4",
    location: "Kochi",
    date: "2025-05-18",
    hostType: "college",
    attendees: 300,
    host: "Kochi Engineering College",
    region: "South",
    state: "Kerala",
    country: "India",
    coordinates: [76.2673, 9.9312]
  },
  {
    id: "5",
    location: "San Francisco",
    date: "2025-05-20",
    hostType: "international",
    attendees: 80,
    host: "FUNDA",
    region: "International",
    country: "USA",
    coordinates: [-122.4194, 37.7749]
  },
  {
    id: "6",
    location: "Singapore",
    date: "2025-05-22",
    hostType: "international",
    attendees: 65,
    host: "Singapore Indian Chamber",
    region: "International",
    country: "Singapore",
    coordinates: [103.8198, 1.3521]
  }
];

// Mock Testimonials
export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Ravi Kumar",
    role: "Student",
    organization: "IIT Madras",
    quote: "The documentary was truly inspiring. It showed me how AI can be leveraged to solve real problems in rural India.",
    image: "/testimonials/student1.jpg",
    location: "Chennai"
  },
  {
    id: "2",
    name: "Ananya Sharma",
    role: "Aspiring Entrepreneur",
    organization: "Delhi University",
    quote: "BSY opened my eyes to the untapped potential in smaller Indian cities. I'm now working on my own AI startup idea!",
    image: "/testimonials/student2.jpg",
    location: "Delhi"
  },
  {
    id: "3",
    name: "Jay Pandya",
    role: "Investor",
    organization: "Venture Capital Firm",
    quote: "The quality of entrepreneurs featured in this documentary is outstanding. It's changing the narrative about Indian innovation.",
    image: "/testimonials/supporter1.jpg",
    location: "New York"
  },
  {
    id: "4",
    name: "Dr. Meera Patel",
    role: "Screening Host",
    organization: "Ahmedabad Technical Institute",
    quote: "Our students were hugely motivated after the screening. We've already had 5 new AI project proposals!",
    image: "/testimonials/host1.jpg",
    location: "Ahmedabad"
  }
];

// Mock Sponsors
export const MOCK_SPONSORS: Sponsor[] = [
  {
    id: "1",
    name: "Kerala Startup Mission",
    logo: "/sponsors/ksm.png",
    tier: "platinum",
    website: "https://startupmission.kerala.gov.in/"
  },
  {
    id: "2",
    name: "Google",
    logo: "/sponsors/google.png",
    tier: "gold",
    website: "https://google.com"
  },
  {
    id: "3",
    name: "Microsoft",
    logo: "/sponsors/microsoft.png",
    tier: "gold",
    website: "https://microsoft.com"
  },
  {
    id: "4",
    name: "Sprinto",
    logo: "/sponsors/sprinto.png",
    tier: "silver",
    website: "https://sprinto.com"
  },
  {
    id: "5",
    name: "Passright",
    logo: "/sponsors/passright.png",
    tier: "silver",
    website: "https://passright.com"
  }
];

// AI Superpower Quiz Results
export const QUIZ_RESULTS: Record<string, QuizResult> = {
  Builder: {
    superpower: "Builder",
    description: "You're a natural builder who loves creating AI solutions from the ground up. Your technical skills and implementation focus make you perfect for developing AI applications.",
    matchedFounder: "Rakesh Sharma",
    founderStory: "Rakesh built an AI-powered irrigation system that's now used by farmers across rural Punjab, improving crop yields by 30%.",
    founderImage: "/founders/builder.jpg"
  },
  Designer: {
    superpower: "Designer",
    description: "You excel at designing human-centered AI experiences. Your empathy and creativity help make complex AI systems accessible to everyone.",
    matchedFounder: "Priya Desai",
    founderStory: "Priya designed an intuitive AI interface for healthcare workers in remote villages, enabling them to diagnose common illnesses with 90% accuracy.",
    founderImage: "/founders/designer.jpg"
  },
  Researcher: {
    superpower: "Researcher",
    description: "Your analytical mind and curiosity make you an excellent AI researcher. You love exploring new algorithms and finding breakthrough applications.",
    matchedFounder: "Arjun Mehta",
    founderStory: "Arjun's research into regional language processing led to an AI translator now helping thousands of rural students access educational content.",
    founderImage: "/founders/researcher.jpg"
  },
  Entrepreneur: {
    superpower: "Entrepreneur",
    description: "You have the vision and drive to bring AI innovations to market. Your business acumen helps transform ideas into impactful ventures.",
    matchedFounder: "Meera Reddy",
    founderStory: "Meera founded an AI startup that helps artisans from remote villages sell their crafts globally, increasing their income by 5x.",
    founderImage: "/founders/entrepreneur.jpg"
  }
}; 