export interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  name?: string;
  width?: number;
  height?: number;
}

export interface HomepageData {
  heroSubtitle?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroPrimaryBtnText?: string;
  heroPrimaryBtnLink?: string;
  heroSecondaryBtnText?: string;
  heroSecondaryBtnLink?: string;
  heroBannerImage?: StrapiImage;
  heroScubaDiverImage?: StrapiImage;
  heroManufacturingImage?: StrapiImage;
  crisisLabel?: string;
  crisisTitle?: string;
  crisisBody?: string;
  crisisQuote?: string;
  crisisImage?: StrapiImage;
  crisisSecondaryBody?: string;
  problem1Title?: string;
  problem1Body?: string;
  problem2Title?: string;
  problem2Body?: string;
  problem3Title?: string;
  problem3Body?: string;
  solutionLabel?: string;
  solutionTitle?: string;
  solutionBody?: string;
  solutionImage?: StrapiImage;
  solutionProg1Emoji?: string;
  solutionProg1Title?: string;
  solutionProg1Body?: string;
  solutionProg2Emoji?: string;
  solutionProg2Title?: string;
  solutionProg2Body?: string;
  solutionProg3Emoji?: string;
  solutionProg3Title?: string;
  solutionProg3Body?: string;
  scienceLabel?: string;
  scienceTitle?: string;
  scienceBody?: string;
  scienceMetric1Value?: number;
  scienceMetric1Prefix?: string;
  scienceMetric1Suffix?: string;
  scienceMetric1Decimals?: number;
  scienceMetric1Desc?: string;
  scienceMetric2Value?: number;
  scienceMetric2Prefix?: string;
  scienceMetric2Suffix?: string;
  scienceMetric2Decimals?: number;
  scienceMetric2Desc?: string;
  scienceMetric3Value?: number;
  scienceMetric3Prefix?: string;
  scienceMetric3Suffix?: string;
  scienceMetric3Decimals?: number;
  scienceMetric3Desc?: string;
  teamLabel?: string;
  teamTitle?: string;
  teamBody?: string;
  teamImage?: StrapiImage;
  teamMembers?: TeamMember[];
  upenaLabel?: string;
  upenaTitle?: string;
  upenaBody?: string;
  upenaBtnText?: string;
  upenaBtnLink?: string;
  upenaImage?: StrapiImage;
  upenaMetric1Value?: string;
  upenaMetric1Unit?: string;
  upenaMetric1Label?: string;
  upenaMetric2Value?: string;
  upenaMetric2Unit?: string;
  upenaMetric2Label?: string;
  upenaMetric3Value?: string;
  upenaMetric3Unit?: string;
  upenaMetric3Label?: string;
  printedCanoesLabel?: string;
  printedCanoesTitle?: string;
  printedCanoesBody?: string;
  printedCanoesProductTag?: string;
  printedCanoesProductTitle?: string;
  printedCanoesProductImage?: StrapiImage;
  printedCanoesProductFeatures?: ProductFeature[];
  printedCanoesBtnText?: string;
  printedCanoesBtnLink?: string;
}

export interface ProductFeature {
  id: number;
  title: string;
  description: string;
  icon: 'settings' | 'feather' | 'tag' | 'info' | 'star' | 'shield';
}

export interface TeamMember {
  id: number;
  initials: string;
  role: string;
  name: string;
  bio: string;
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const USE_STRAPI = process.env.NEXT_PUBLIC_USE_STRAPI === 'true';

export const staticHomepageData: HomepageData = {
  heroSubtitle: 'Reef restoration meets ocean technology',
  heroTitle: 'Restoring Hawaiʻi reefs\nwith culture and science',
  heroDescription:
    'Hui Nehu builds community-led conservation programs, sustainable fishing tools, and reef-safe ocean products for Hawaiʻi.',
  heroPrimaryBtnText: 'Support the mission',
  heroPrimaryBtnLink: '#ask',
  heroSecondaryBtnText: 'Explore products',
  heroSecondaryBtnLink: '/products',
  heroBannerImage: {
    id: 1,
    url: '/banner.png',
    alternativeText: 'Hawaiian coastline and reef water',
  },
  heroScubaDiverImage: {
    id: 2,
    url: '/scuba_diver.png',
    alternativeText: 'Diver inspecting reef habitat',
  },
  heroManufacturingImage: {
    id: 3,
    url: '/3dprinted.png',
    alternativeText: 'Large format additive manufacturing',
  },
  crisisLabel: 'The challenge',
  crisisTitle: 'Reefs need practical\nlocal solutions',
  crisisBody:
    'Coastal communities are facing declining reef health, rising gear costs, and fewer pathways for young people to enter ocean stewardship.',
  crisisSecondaryBody:
    'Hui Nehu connects restoration science with products and training that can be built, maintained, and taught locally.',
  crisisQuote:
    'When conservation creates livelihoods, communities can protect reefs for generations.',
  crisisImage: {
    id: 4,
    url: '/reef_split.png',
    alternativeText: 'Split view of reef ecosystem',
  },
  problem1Title: 'Fragmented programs',
  problem1Body:
    'Conservation, education, and product development often move separately instead of reinforcing each other.',
  problem2Title: 'High equipment costs',
  problem2Body:
    'Island communities need durable ocean tools that are affordable to repair and produce locally.',
  problem3Title: 'Limited funding pathways',
  problem3Body:
    'Restoration work needs repeatable support models with clear, measurable impact.',
  solutionLabel: 'Our model',
  solutionTitle: 'Build the tools,\nteach the practice',
  solutionBody:
    'We combine marine science, Hawaiian resource management, and modern manufacturing to create scalable reef stewardship programs.',
  solutionImage: {
    id: 5,
    url: '/ahupuaa_restoration.png',
    alternativeText: 'Ahupuaa restoration landscape',
  },
  solutionProg1Emoji: '01',
  solutionProg1Title: 'Reef restoration',
  solutionProg1Body:
    'Community monitoring, habitat repair, and clear reporting around reef health indicators.',
  solutionProg2Emoji: '02',
  solutionProg2Title: 'Sustainable gear',
  solutionProg2Body:
    'Hoop nets, canoes, and vessel concepts designed for selective harvest and lower waste.',
  solutionProg3Emoji: '03',
  solutionProg3Title: 'Local manufacturing',
  solutionProg3Body:
    'Large-format additive manufacturing shortens production timelines and supports island jobs.',
  scienceLabel: 'Measured outcomes',
  scienceTitle: 'Data-backed ocean stewardship',
  scienceBody:
    'Our programs track restoration progress, product adoption, and community participation so partners can see how funding turns into field work.',
  scienceMetric1Value: 72,
  scienceMetric1Suffix: ' hr',
  scienceMetric1Desc: 'target production window for printed canoe shells',
  scienceMetric2Value: 3,
  scienceMetric2Suffix: 'x',
  scienceMetric2Desc: 'integrated program pillars: reef, gear, education',
  scienceMetric3Value: 750,
  scienceMetric3Prefix: '$',
  scienceMetric3Suffix: 'K',
  scienceMetric3Desc: 'current philanthropic funding goal',
  teamLabel: 'The team',
  teamTitle: 'Practitioners, builders, and scientists',
  teamBody:
    'Hui Nehu brings together marine conservation, Hawaiian cultural knowledge, product design, and community education.',
  teamImage: {
    id: 6,
    url: '/team_stewards.png',
    alternativeText: 'Hui Nehu stewardship team',
  },
  teamMembers: [
    {
      id: 1,
      initials: 'HN',
      name: 'Hui Nehu Team',
      role: 'Ocean stewardship',
      bio: 'Program leads coordinating reef restoration, education, and sustainable product development.',
    },
    {
      id: 2,
      initials: 'CS',
      name: 'Community Stewards',
      role: 'Field partners',
      bio: 'Local practitioners helping shape tools and training around real coastal needs.',
    },
    {
      id: 3,
      initials: 'PD',
      name: 'Product Designers',
      role: 'Ocean technology',
      bio: 'Designing durable hoop nets, printed canoes, and low-waste marine tools for island use.',
    },
    {
      id: 4,
      initials: 'SC',
      name: 'Science Advisors',
      role: 'Reef research',
      bio: 'Guiding restoration metrics, reef monitoring, and partner reporting with practical field data.',
    },
  ],
  upenaLabel: 'ʻUpena initiative',
  upenaTitle: 'Selective fishing gear for working waters',
  upenaBody:
    'Modern hoop net systems support traditional practice while improving durability, safety, and reef-sensitive harvest methods.',
  upenaBtnText: 'View product line',
  upenaBtnLink: '/products#upena',
  upenaImage: {
    id: 7,
    url: '/upena_net.png',
    alternativeText: 'Upena hoop net product',
  },
  upenaMetric1Value: '3',
  upenaMetric1Unit: 'models',
  upenaMetric1Label: 'planned net systems',
  upenaMetric2Value: '18',
  upenaMetric2Unit: 'ft',
  upenaMetric2Label: 'commercial bag depth',
  upenaMetric3Value: '100',
  upenaMetric3Unit: '%',
  upenaMetric3Label: 'reef-conscious design',
  printedCanoesLabel: '3D printed waʻa',
  printedCanoesTitle: 'Fast, lower-waste Hawaiian canoe production',
  printedCanoesBody:
    'Large-format additive manufacturing helps produce custom outrigger canoes in days instead of months using recycled PETG and bio-composite materials.',
  printedCanoesProductTag: 'Featured product',
  printedCanoesProductTitle: 'The Opal OC-1',
  printedCanoesProductImage: {
    id: 8,
    url: '/printed_canoe.png',
    alternativeText: 'Printed outrigger canoe',
  },
  printedCanoesProductFeatures: [
    {
      id: 1,
      title: 'Iridescent finish',
      description: 'Marine-grade proprietary coating',
      icon: 'settings',
    },
    {
      id: 2,
      title: 'Lightweight and durable',
      description: 'Recycled PETG bio-composites',
      icon: 'feather',
    },
    {
      id: 3,
      title: 'Price: $4,200',
      description: 'Built to order in 72-96 hours',
      icon: 'tag',
    },
  ],
  printedCanoesBtnText: 'Configure your waʻa',
  printedCanoesBtnLink: '/products#canoes',
};

export function getStrapiMediaUrl(media: StrapiImage | undefined | null): string | null {
  if (!media || !media.url) return null;
  if (media.url.startsWith('http') || media.url.startsWith('https')) {
    return media.url;
  }
  if (media.url.startsWith('/')) {
    return media.url;
  }
  return STRAPI_URL ? `${STRAPI_URL}${media.url}` : media.url;
}

export async function fetchHomepageData(): Promise<HomepageData> {
  if (!STRAPI_URL || !USE_STRAPI) {
    return staticHomepageData;
  }

  try {
    const res = await fetch(`${STRAPI_URL}/api/homepage?populate=*`, {
      cache: 'no-store', // ensures we fetch fresh data on every request
    });
    if (!res.ok) {
      console.warn('Failed to fetch homepage data from Strapi:', res.statusText);
      return staticHomepageData;
    }
    const json = await res.json();
    return json.data || staticHomepageData;
  } catch (error) {
    console.error('Error fetching homepage data from Strapi:', error);
    return staticHomepageData;
  }
}
