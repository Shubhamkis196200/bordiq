export type NewsroomPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  featured?: boolean
}

export const seedFundingAnnouncement: NewsroomPost = {
  slug: 'seed-funding-announcement',
  title: 'Bordiq announces seed funding backed by ODRA VENTURE and RED QUEEN FUND',
  excerpt:
    'Bordiq has announced a seed round backed by ODRA VENTURE and RED QUEEN FUND, supporting the next phase of AI-assisted threat analysis, cloud delivery, and enterprise security operations.',
  date: 'MAY 5, 2026',
  category: 'COMPANY NEWS',
  readTime: '5 MIN READ',
  featured: true,
}

export const newsroomPosts: NewsroomPost[] = [
  seedFundingAnnouncement,
  {
    slug: 'cvss-2026-threat-landscape',
    title: 'The 2026 European Threat Landscape: What CISOs Need to Know',
    excerpt:
      'Nation-state actors are increasingly targeting Polish and Central European enterprises. Our threat research team analyzed 847 incidents from Q1 2026.',
    date: 'APRIL 2, 2026',
    category: 'THREAT RESEARCH',
    readTime: '8 MIN READ',
  },
  {
    slug: 'nis2-compliance-guide',
    title: 'NIS2 Compliance in 90 Days: The Practical Guide for Polish Enterprises',
    excerpt:
      "With NIS2 enforcement now active across the EU, Polish enterprises face significant new obligations. Here's how to achieve compliance without disrupting operations.",
    date: 'MARCH 28, 2026',
    category: 'COMPLIANCE',
    readTime: '12 MIN READ',
  },
  {
    slug: 'ai-soc-vs-traditional',
    title: "AI-Powered SOC vs. Traditional SIEM: The Numbers Don't Lie",
    excerpt:
      'We benchmarked BORDIQ SOC against three leading SIEM platforms across 200 real-world attack scenarios. The results were decisive.',
    date: 'MARCH 20, 2026',
    category: 'RESEARCH',
    readTime: '6 MIN READ',
  },
  {
    slug: 'zero-trust-implementation',
    title: "Zero Trust Is Not a Product - It's a Journey",
    excerpt:
      "Most organizations approach zero trust as a checkbox. Here's why that fails, and how to build a zero trust architecture that actually works.",
    date: 'MARCH 5, 2026',
    category: 'ARCHITECTURE',
    readTime: '10 MIN READ',
  },
]

export function getNewsroomPost(slug?: string) {
  return newsroomPosts.find((post) => post.slug === slug)
}
