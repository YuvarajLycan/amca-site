// Central content model for the AMCA site. Keeping copy here (rather than
// scattered through route files) makes it easy to see everything the site
// claims about AMCA in one place, and to swap in real figures as they're
// confirmed by AMCA's own board/comms team.

export const primaryNav = [
  { label: 'About', to: '/about' },
  { label: 'Membership', to: '/membership' },
  { label: 'Training', to: '/training' },
  { label: 'Events', to: '/events' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
] as const

export const impactStats = [
  {
    value: '1,000+',
    label: 'Member businesses',
    detail: 'Contractors, manufacturers and suppliers across every state and territory.',
  },
  {
    value: '60+',
    label: 'Years representing HVAC&R',
    detail: 'Advocating for the industry since the early 1960s.',
  },
  {
    value: '1',
    label: 'National RTO',
    detail: 'RTO 5139 — accredited training built specifically for the trade.',
  },
  {
    value: '8',
    label: 'States & territories',
    detail: 'A genuinely national voice, from local chapters to Canberra.',
  },
] as const

export const pillars = [
  {
    key: 'represent',
    title: 'We represent the industry',
    description:
      'AMCA is the voice HVAC&R contractors send to code committees, regulators and government — turning site-level experience into submissions that change how the industry is allowed to work.',
    cta: { label: 'See our advocacy', to: '/about' },
  },
  {
    key: 'train',
    title: 'We build the workforce',
    description:
      'From apprentice inductions to Certificate IV and short courses, AMCA training is run by people who install and service the systems it teaches — not a generic RTO bolting HVAC onto its catalogue.',
    cta: { label: 'Browse training', to: '/training' },
  },
  {
    key: 'connect',
    title: 'We connect the trade',
    description:
      'A member directory, a national conference, and state-based events that turn "the industry" into people you actually know — the ones you call when a job needs a second opinion.',
    cta: { label: 'Explore membership', to: '/membership' },
  },
] as const

export const knowledgeResources = [
  {
    category: 'Standards & compliance',
    title: 'NCC 2025 interpretation guide',
    summary:
      'What changed under the 2025 National Construction Code, broken down by state and territory, for mechanical services specifically.',
    access: 'Member resource',
  },
  {
    category: 'Safety',
    title: 'WHS hazard & induction toolkit',
    summary:
      'Site risk assessment templates, toolbox talk scripts and contractor induction content, kept current as guidance changes.',
    access: 'Member resource',
  },
  {
    category: 'Technical',
    title: 'Toolbox talks library',
    summary:
      'Short, practical technical briefings your crew can actually use on-site — refrigerant handling, isolation procedures, working at height.',
    access: 'Open to industry',
  },
  {
    category: 'Advocacy',
    title: 'Submissions & position papers',
    summary:
      'Every formal submission AMCA has lodged with government and standards bodies, published in full — see the reasoning, not just the outcome.',
    access: 'Open to industry',
  },
] as const

export const trainingCategories = [
  {
    title: 'Certificate IV in HVAC&R',
    description:
      'The core trade qualification, delivered by people who still spend time on tools — not just in a classroom.',
    meta: 'Nationally accredited · RTO 5139',
  },
  {
    title: 'Short courses',
    description:
      'Refrigerant handling, isolation procedures, commissioning, and other focused sessions you can book by the day.',
    meta: 'Priced per course · member discount applies',
  },
  {
    title: 'Apprenticeships & student pathways',
    description:
      'Information for apprentices, group training organisations and the employers who host them.',
    meta: 'Entry pathway',
  },
  {
    title: 'RTO compliance & training policy',
    description:
      'How AMCA training is governed, audited and kept aligned with the units it teaches to.',
    meta: 'Reference',
  },
] as const

export const membershipBenefits = [
  {
    title: 'Advocacy with your name on it',
    description: 'Direct input into the submissions AMCA lodges on codes, standards and industrial relations.',
  },
  {
    title: 'Member pricing on training',
    description: 'A meaningful discount on every AMCA short course and accredited qualification, every time.',
  },
  {
    title: 'The member directory',
    description: 'A listing that puts your business in front of specifiers and other contractors looking for a trusted subcontractor.',
  },
  {
    title: 'Technical & WHS resources',
    description: 'The manuals, templates and compliance guidance that would otherwise take a consultant to assemble.',
  },
  {
    title: 'Partner discounts',
    description: 'Negotiated rates with suppliers and service providers AMCA has already vetted on the industry’s behalf.',
  },
  {
    title: 'A seat at the table',
    description: 'Committees, chapters and the National Conference — the rooms where the next code cycle gets shaped.',
  },
] as const

export const membershipTiers = [
  {
    name: 'Contractor',
    audience: 'Installation, service & maintenance businesses',
    description:
      'The core AMCA membership for HVAC&R contracting businesses of any size — fees are banded by company revenue so a five-person outfit and a 200-person firm aren’t paying the same rate.',
  },
  {
    name: 'Supplier & manufacturer',
    audience: 'Product, equipment & service suppliers to the trade',
    description:
      'For businesses that sell into the industry rather than perform the work — visibility with the contractors who specify and install.',
  },
  {
    name: 'Affiliate',
    audience: 'Educators, consultants & industry adjacents',
    description:
      'For organisations aligned with the industry’s goals without being a contractor or supplier themselves.',
  },
] as const

export const newsItems = [
  {
    slug: 'service-maintenance-survey-2026',
    category: 'Industry benchmarking',
    title: 'Service & Maintenance Survey 2026: what changed across the sector',
    date: '2 September 2026',
    excerpt:
      'The 2026 benchmarking report is out, tracking margins, call-out volumes and staffing pressure across service and maintenance businesses nationally.',
    access: 'Member resource',
  },
  {
    slug: 'ncc-2025-interpretation-guide',
    category: 'Standards & compliance',
    title: 'NCC 2025 interpretation guide: every mechanical-services change, by state',
    date: '25 August 2026',
    excerpt:
      'A state-by-state breakdown of what the 2025 National Construction Code actually changes for mechanical services contractors.',
    access: 'Member resource',
  },
  {
    slug: 'qld-building-code-submission',
    category: 'Advocacy',
    title: 'Implementation of the proposed QLD building code should not be delayed',
    date: '25 August 2026',
    excerpt:
      'AMCA’s submission draws on direct reports from Queensland sites and argues against pushing back the implementation timeline.',
    access: 'Open to industry',
  },
  {
    slug: 'national-conference-2026-sold-out',
    category: 'Events',
    title: 'National Conference 2026 sells out — new speakers announced',
    date: '26 August 2026',
    excerpt:
      'This year’s conference in Darwin is fully booked. A final round of speakers has been added to the program.',
    access: 'Open to industry',
  },
  {
    slug: 'whs-seasonal-risk-note',
    category: 'Safety',
    title: 'Seasonal risk note: what higher-risk sites should review now',
    date: '27 August 2026',
    excerpt:
      'A practical checklist for hazard registers, site risk assessments and contractor induction content this season.',
    access: 'Open to industry',
  },
] as const

export const events = [
  {
    title: 'AMCA National Conference 2026 — Belong',
    date: '28 Sep – 1 Oct 2026',
    location: 'Darwin Waterfront Precinct, NT',
    description:
      'The industry’s biggest gathering, built around belonging — to a place, a community, and an industry that’s stronger together.',
    status: 'Sold out',
  },
  {
    title: 'State briefing series — WA, SA, QLD',
    date: 'Ongoing, quarterly',
    location: 'State chapters',
    description:
      'Short, regional sessions on code changes, WHS updates and local advocacy priorities, run by your state chapter.',
    status: 'Bookings open',
  },
] as const

export const roles = [
  { title: 'Managing director / owner', focus: 'Cost, coverage and who else like my firm is already a member.' },
  { title: 'Operations / contracts manager', focus: 'Contract documentation, specialist handbooks, site diaries.' },
  { title: 'HR / industrial relations manager', focus: 'EBA negotiation support and award updates.' },
  { title: 'WHS / safety manager', focus: 'The manual, the toolbox talks, and what changed this quarter.' },
  { title: 'Training & L&D coordinator', focus: 'Dates, member rate, and enrolling several staff at once.' },
  { title: 'Refrigeration & A/C technician', focus: 'Find the right course on a phone, enrol, get the certificate.' },
] as const
