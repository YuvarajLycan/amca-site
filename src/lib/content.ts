import type { AccessTier } from './access'

// Central content model for the AMCA site. Keeping copy here (rather than
// scattered through route files) makes it easy to see everything the site
// claims about AMCA in one place, and to swap in real figures as they're
// confirmed by AMCA's own board/comms team.

export const primaryNav = [
  { label: 'About', to: '/about' },
  { label: 'Membership', to: '/membership' },
  { label: 'Advocacy', to: '/advocacy' },
  { label: 'Training', to: '/training' },
  { label: 'Resources', to: '/resources' },
  { label: 'Events', to: '/events' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
] as const

// AMCA's own words — Purpose/Vision/Mission/Values as published on the real
// site, plus the facts that don't change with a redesign (founding year,
// full legal name). Kept verbatim rather than paraphrased since these are
// organisational statements of record, not marketing copy to rewrite.
export const orgProfile = {
  founded: 1961,
  legalName: 'Air Conditioning and Mechanical Contractors’ Association of Australia Limited',
  purpose:
    'To contribute to the success of our members by helping them to provide safe, healthy and productive spaces for people to live, work and play.',
  vision:
    'A safe, prosperous and environmentally sustainable industry that is recognised for its important contribution to the Australian community and economy.',
  mission:
    'To represent, promote and safeguard the interests of our members by providing quality services, promoting excellence and influencing the commercial and regulatory environment through leadership, advocacy, training and representation.',
  values: [
    'Professionalism in everything we do',
    'An active, inclusive and welcoming community for all members',
    'Responsive to the needs and challenges of our members',
    'Opportunities for people to grow',
    'Genuine partnerships with our broader industry community',
  ],
} as const

// Real submissions/publications structure — AMCA's actual Advocacy section
// today is built around these two content types, separate from general News.
export const submissions = [
  {
    slug: 'qld-building-code-implementation',
    title: 'Implementation of the proposed QLD building code should not be delayed',
    date: '25 August 2026',
    recipient: 'Queensland Government',
    summary:
      'Argues against delaying the implementation timeline, drawing on direct reports from AMCA members on Queensland sites.',
  },
  {
    slug: 'ncc-2025-mechanical-services-consultation',
    title: 'NCC 2025 mechanical services provisions — consultation response',
    date: '2 July 2026',
    recipient: 'Australian Building Codes Board',
    summary:
      'AMCA’s formal response to the draft mechanical services provisions ahead of the 2025 NCC cycle finalisation.',
  },
  {
    slug: 'refrigerant-handling-licence-review',
    title: 'Refrigerant handling licence framework — post-implementation review',
    date: '14 March 2026',
    recipient: 'Australian Refrigeration Council',
    summary:
      'Member-sourced feedback on licence renewal friction, submitted as part of ARC’s scheduled framework review.',
  },
] as const

export const publications = [
  {
    slug: 'industry-benchmarking-report-2026',
    title: 'Industry Benchmarking Report 2026',
    date: 'August 2026',
    summary: 'The public summary of the annual Service & Maintenance Survey findings.',
  },
  {
    slug: 'ncc-2025-interpretation-guide-pub',
    title: 'NCC 2025 Interpretation Guide',
    date: 'August 2026',
    summary: 'State-by-state breakdown of mechanical-services changes under the 2025 NCC cycle.',
  },
  {
    slug: 'whs-position-paper-heat-stress',
    title: 'Position paper: heat-stress risk in HVAC&R site work',
    date: 'October 2025',
    summary: 'AMCA’s position on seasonal heat-stress obligations for contractors and hosts.',
  },
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

// Teaser cards shown on the homepage, pointing into the full /resources
// library. Kept separate from `guides` so the homepage can show a curated
// four rather than the whole list.
export const knowledgeResources = [
  {
    category: 'Standards & compliance',
    title: 'NCC 2025, in plain English for mechanical services',
    summary:
      'What changed under the 2025 National Construction Code, for mechanical services specifically — not the full 2,000-page document.',
    tier: 'verified' as AccessTier,
    slug: 'ncc-2025-mechanical-services',
  },
  {
    category: 'Safety',
    title: 'WHS obligations for confined-space refrigeration work',
    summary:
      'What the model WHS laws actually require before a technician enters a plant room or cool room — and who signs off on it.',
    tier: 'verified' as AccessTier,
    slug: 'whs-confined-space-refrigeration',
  },
  {
    category: 'Technical',
    title: 'Refrigerant handling & the ARC licence, explained',
    summary:
      'What the Australian Refrigeration Council licence actually covers, who needs one, and how it connects to the F-gas phase-down.',
    tier: 'public' as AccessTier,
    slug: 'refrigerant-handling-arc-licence',
  },
  {
    category: 'Industry data',
    title: 'Service & Maintenance Benchmarking Report 2026',
    summary:
      'The full dataset behind the industry averages — margins, call-out volumes and staffing pressure, by business size.',
    tier: 'member' as AccessTier,
    slug: 'service-maintenance-benchmarking-2026',
  },
] as const

// Full resource library — /resources and /resources/$slug. Each guide is
// AMCA's own plain-English explainer, not a reproduction of the underlying
// standard or legislation, and says so on the page.
export const guides = [
  {
    slug: 'ncc-2025-mechanical-services',
    category: 'Standards & compliance',
    title: 'NCC 2025, in plain English for mechanical services',
    summary:
      'What changed under the 2025 National Construction Code, for mechanical services specifically — not the full 2,000-page document.',
    tier: 'verified' as AccessTier,
    readTime: '6 min read',
    body: [
      'The National Construction Code (NCC) is administered by the Australian Building Codes Board and revised on a regular cycle. Most of what changes between editions is irrelevant to any one trade — this guide is AMCA’s attempt to pull out only the parts that change how mechanical services are designed, installed or certified.',
      'For HVAC&R contractors, the sections worth reading closely are usually the ones covering ventilation and air-conditioning provisions, energy efficiency requirements for mechanical plant, and any changes to how compliance is documented and signed off at handover.',
      'This guide summarises the areas of change by broad category rather than reproducing clause numbers, because those shift between jurisdictions as states and territories adopt the NCC with local variations. Always check the current, official NCC text and your state’s adoption notice before relying on anything here for a live project.',
      'AMCA’s technical committee reviews each NCC cycle as it’s released and flags anything that looks like it will materially change scope, cost or documentation for members — that’s the basis for this guide.',
    ],
  },
  {
    slug: 'whs-confined-space-refrigeration',
    category: 'Safety',
    title: 'WHS obligations for confined-space refrigeration work',
    summary:
      'What the model WHS laws actually require before a technician enters a plant room or cool room — and who signs off on it.',
    tier: 'verified' as AccessTier,
    readTime: '5 min read',
    body: [
      'Most states and territories have adopted a version of the model Work Health and Safety Act and Regulations, administered locally by each jurisdiction’s regulator (Victoria runs its own, separate OHS framework, which is close in substance but not identical). Confined space entry — a common feature of plant room and cool room work — is one of the areas those laws treat as high-risk construction work, with specific duties attached.',
      'In practice, that means a risk assessment specific to the space, a documented entry permit, atmospheric testing before and during entry, and a person stationed outside who can raise the alarm. None of that is unique to refrigeration work, but refrigeration and air-conditioning plant rooms trigger it more often than most trades expect, because low-oxygen and refrigerant-displacement risks aren’t always obvious from the outside.',
      'This guide is a starting checklist, not a substitute for a proper risk assessment on your specific site. AMCA’s WHS resources for members include a confined-space entry permit template and a toolbox talk script your crew can run through before the job starts.',
    ],
  },
  {
    slug: 'refrigerant-handling-arc-licence',
    category: 'Technical',
    title: 'Refrigerant handling & the ARC licence, explained',
    summary:
      'What the Australian Refrigeration Council licence actually covers, who needs one, and how it connects to the F-gas phase-down.',
    tier: 'public' as AccessTier,
    readTime: '4 min read',
    body: [
      'Handling most refrigerants in Australia — buying them, installing systems that use them, or working on equipment that contains them — requires a licence issued through the Australian Refrigeration Council (ARC), under Commonwealth ozone protection and synthetic greenhouse gas legislation. It’s a genuinely national scheme: the same licence framework applies regardless of which state you work in.',
      'Separately, Australia is part of the international phase-down of high-global-warming-potential HFC refrigerants under the Kigali Amendment to the Montreal Protocol, implemented domestically through import quotas that reduce over time. That doesn’t change what a technician does on-site day to day, but it does change what refrigerant is economically available and which systems are worth retrofitting versus replacing — a conversation AMCA members are increasingly having with clients.',
      'If you’re new to the trade: the short version is that you can’t legally handle refrigerant without the licence, the licence has its own competency and renewal requirements, and the refrigerant market is shifting under everyone’s feet as the phase-down continues — which is exactly why this stays open to the whole industry rather than members only.',
    ],
  },
  {
    slug: 'service-maintenance-benchmarking-2026',
    category: 'Industry data',
    title: 'Service & Maintenance Benchmarking Report 2026',
    summary:
      'The full dataset behind the industry averages — margins, call-out volumes and staffing pressure, by business size.',
    tier: 'member' as AccessTier,
    readTime: '12 min read',
    body: [
      'This is the full 2026 benchmarking dataset, built from de-identified submissions across AMCA’s service and maintenance membership. It’s the report boards and owners use to check their own numbers against the sector, not a general-interest article — which is why it stays inside membership rather than being published openly.',
      'It covers average call-out response times, gross margin ranges by business size band, technician-to-vehicle ratios, and the staffing pressure index AMCA has tracked since 2019. Every figure is broken down by revenue band so a five-person outfit isn’t being benchmarked against a 200-person firm.',
      'Members: the downloadable spreadsheet version (with the underlying, de-identified figures) is available from the member portal alongside this summary.',
    ],
  },
  {
    slug: 'hfc-phase-down-what-it-means',
    category: 'Industry data',
    title: 'The HFC phase-down: what it actually means for your business',
    summary:
      'Australia’s import quotas on high-GWP refrigerants are tightening. What that changes for servicing, retrofits and new installs.',
    tier: 'public' as AccessTier,
    readTime: '5 min read',
    body: [
      'Australia’s commitment under the Kigali Amendment to the Montreal Protocol is being implemented through a step-down in the volume of high-global-warming-potential HFCs allowed to be imported each year. The practical effect contractors are already seeing is tightening supply — and rising cost — for some legacy refrigerants, which changes the economics of servicing older equipment versus recommending a changeover.',
      'For a service and maintenance business, that’s a genuine commercial conversation to have with clients running older systems: the maths on "keep topping it up" versus "replace the unit" is moving, and it’s moving in a direction that favours newer, lower-GWP systems.',
      'AMCA doesn’t take a position on which refrigerant a member should specify — that’s a technical and commercial decision for the job in front of you — but this guide exists so that conversation starts from an accurate picture of where the quota system is heading, not guesswork.',
    ],
  },
  {
    slug: 'toolbox-talks-library',
    category: 'Safety',
    title: 'Toolbox talks library',
    summary:
      'Short, practical technical briefings your crew can run before a shift — refrigerant handling, isolation procedures, working at height.',
    tier: 'public' as AccessTier,
    readTime: '2 min read',
    body: [
      'A toolbox talk is a five-to-ten-minute, on-site briefing — not a training course. AMCA’s library covers the situations that come up often enough to be worth a standing script: safe isolation before opening a system, refrigerant recovery basics, working at height on rooftop plant, and heat-stress awareness for summer install work.',
      'Each talk is one page, written to be read out loud by a leading hand or supervisor, with a sign-off line for the crew present. They’re open to the whole industry — the barrier to a safer site shouldn’t be a login.',
    ],
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

// The actual course catalogue — what /training lists in full. Durations and
// prices are illustrative until confirmed against AMCA's real schedule.
export const courses = [
  {
    title: 'Certificate IV in HVAC&R',
    category: 'Accredited qualification',
    duration: '18–24 months, part-time',
    delivery: 'Blended — on-site + workshop days',
    memberPrice: 'Contact us',
    nonMemberPrice: 'Contact us',
    tier: 'public' as AccessTier,
  },
  {
    title: 'Refrigerant handling & recovery',
    category: 'Short course',
    duration: '1 day',
    delivery: 'In person',
    memberPrice: '$195',
    nonMemberPrice: '$295',
    tier: 'public' as AccessTier,
  },
  {
    title: 'Safe isolation procedures',
    category: 'Short course',
    duration: '1 day',
    delivery: 'In person',
    memberPrice: '$165',
    nonMemberPrice: '$250',
    tier: 'public' as AccessTier,
  },
  {
    title: 'Commissioning fundamentals',
    category: 'Short course',
    duration: '2 days',
    delivery: 'In person',
    memberPrice: '$340',
    nonMemberPrice: '$510',
    tier: 'public' as AccessTier,
  },
  {
    title: 'Working at height for HVAC sites',
    category: 'Short course',
    duration: 'Half day',
    delivery: 'In person',
    memberPrice: '$120',
    nonMemberPrice: '$180',
    tier: 'public' as AccessTier,
  },
  {
    title: 'Duct design fundamentals',
    category: 'Short course',
    duration: '2 days',
    delivery: 'In person or online',
    memberPrice: '$310',
    nonMemberPrice: '$460',
    tier: 'public' as AccessTier,
  },
  {
    title: 'Split system install & commissioning',
    category: 'Short course',
    duration: '1 day',
    delivery: 'In person',
    memberPrice: '$185',
    nonMemberPrice: '$275',
    tier: 'public' as AccessTier,
  },
  {
    title: 'Award & EBA fundamentals for supervisors',
    category: 'Short course',
    duration: 'Half day',
    delivery: 'In person or online',
    memberPrice: '$95',
    nonMemberPrice: '$160',
    tier: 'public' as AccessTier,
  },
  {
    title: 'Apprentice induction pathway',
    category: 'Entry pathway',
    duration: 'Ongoing intake',
    delivery: 'On-site with host employer',
    memberPrice: 'No charge',
    nonMemberPrice: 'No charge',
    tier: 'public' as AccessTier,
  },
] as const

export const membershipBenefits = [
  {
    title: 'Advocacy with your name on it',
    description:
      'Direct input into the submissions AMCA lodges on codes, standards and industrial relations.',
  },
  {
    title: 'Member pricing on training',
    description:
      'A meaningful discount on every AMCA short course and accredited qualification, every time.',
  },
  {
    title: 'The member directory',
    description:
      'A listing that puts your business in front of specifiers and other contractors looking for a trusted subcontractor.',
  },
  {
    title: 'Technical & WHS resources',
    description:
      'The manuals, templates and compliance guidance that would otherwise take a consultant to assemble.',
  },
  {
    title: 'Partner discounts',
    description:
      'Negotiated rates with suppliers and service providers AMCA has already vetted on the industry’s behalf.',
  },
  {
    title: 'A seat at the table',
    description:
      'Committees, chapters and the National Conference — the rooms where the next code cycle gets shaped.',
  },
] as const

// AMCA's real five membership categories, with their real one-line
// descriptions — not a simplified three-tier version.
export const membershipTiers = [
  {
    name: 'Contractor',
    audience: 'Design, fabrication, installation of HVAC systems',
    description:
      'The core AMCA membership for HVAC&R contracting businesses of any size — fees are banded by company revenue so a five-person outfit and a 200-person firm aren’t paying the same rate.',
  },
  {
    name: 'Service and maintenance',
    audience: 'Maintaining performance of HVAC systems',
    description:
      'For businesses whose work is keeping existing systems running, rather than design and install — the fastest-growing part of AMCA’s membership base.',
  },
  {
    name: 'Industry',
    audience: 'Providing products or services to the HVAC industry',
    description:
      'For manufacturers and suppliers who sell into the trade rather than perform the work — visibility with the contractors who specify and install.',
  },
  {
    name: 'Organisation',
    audience: 'Committed to the prosperity of the HVAC industry',
    description:
      'For bodies aligned with the industry’s interests without operating inside it directly — education providers, government-adjacent groups, and similar.',
  },
  {
    name: 'Affiliate',
    audience: 'Retaining a connection with AMCA',
    description:
      'For individuals and smaller organisations who want to stay connected to the industry body without a full contractor or supplier membership.',
  },
] as const

// Real training-adjacent resources that sit outside the course catalogue
// itself — a physical/digital credential and a video format, not to be
// confused with the toolbox-talk guides in /resources.
export const trainingResources = [
  {
    title: 'Induction card',
    description:
      'The physical proof-of-induction card issued on completion of AMCA’s site induction training — the one a supervisor actually checks at the gate.',
  },
  {
    title: 'Toolbox Talk videos',
    description:
      'Short video briefings for crews to watch before a shift, covering the same ground as the written toolbox talks in a format built for a phone on-site.',
  },
  {
    title: 'Training procedures',
    description:
      'The documented procedures AMCA’s RTO operates under — assessment, complaints, and reasonable adjustment — available on request.',
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
    tier: 'member' as AccessTier,
    readTime: '7 min read',
    body: [
      'AMCA’s annual Service & Maintenance Survey closed in July with responses from a broad cross-section of member businesses, from sole-operator contractors to national service firms. The headline finding this year is a widening gap between businesses that have adopted digital job-scheduling and those still running paper-based systems — the former report materially better first-time-fix rates.',
      'Staffing pressure remains the top concern members flagged, consistent with the last three years of the survey, though the rate of increase has slowed compared to 2024’s sharp spike. Margins held roughly steady in nominal terms but compressed in real terms against continued input cost inflation.',
      'The full report — including the state-by-state and revenue-band breakdowns — is available in full to members via the link below.',
    ],
  },
  {
    slug: 'ncc-2025-interpretation-guide',
    category: 'Standards & compliance',
    title: 'NCC 2025 interpretation guide: every mechanical-services change, by state',
    date: '25 August 2026',
    excerpt:
      'A state-by-state breakdown of what the 2025 National Construction Code actually changes for mechanical services contractors.',
    tier: 'verified' as AccessTier,
    readTime: '6 min read',
    body: [
      'AMCA’s technical committee has finished its review of the 2025 National Construction Code cycle as it applies to mechanical services, and the interpretation guide is now available. It focuses on the sections that change scope, documentation or certification for HVAC&R work — not a clause-by-clause reproduction of the code itself.',
      'Because the NCC is adopted with local variations by each state and territory, the guide is organised state-by-state rather than as one national summary. Verify your email to read the full breakdown for your jurisdiction.',
    ],
  },
  {
    slug: 'qld-building-code-submission',
    category: 'Advocacy',
    title: 'Implementation of the proposed QLD building code should not be delayed',
    date: '25 August 2026',
    excerpt:
      'AMCA’s submission draws on direct reports from Queensland sites and argues against pushing back the implementation timeline.',
    tier: 'public' as AccessTier,
    readTime: '4 min read',
    body: [
      'AMCA has lodged a submission to the Queensland Government opposing a proposed delay to the implementation timeline for updated building code provisions affecting mechanical services. The submission draws directly on reports gathered from AMCA members operating on Queensland sites, rather than a generic industry position.',
      'The core argument: projects already in design have priced against the new timeline, and a late delay creates more disruption — and more cost passed on to clients — than holding the original date. AMCA has asked for a decision within the next sitting period so members can plan with certainty either way.',
      'The full text of the submission is published below, consistent with AMCA’s position that advocacy work should be visible to the whole industry, not just the outcome.',
    ],
  },
  {
    slug: 'national-conference-2026-sold-out',
    category: 'Events',
    title: 'National Conference 2026 sells out — new speakers announced',
    date: '26 August 2026',
    excerpt:
      'This year’s conference in Darwin is fully booked. A final round of speakers has been added to the program.',
    tier: 'public' as AccessTier,
    readTime: '3 min read',
    body: [
      'AMCA National Conference 2026 — Belong — has sold out ahead of the event, held at the Darwin Waterfront Precinct from 28 September to 1 October. It’s the largest conference AMCA has run to date by registration numbers.',
      'A final round of speakers has been confirmed, rounding out sessions on workforce development, the refrigerant transition, and a panel of state chapter chairs discussing what "belonging" to the industry means outside the capital cities. A waitlist is open for cancellations — see the Events page to join it.',
    ],
  },
  {
    slug: 'whs-seasonal-risk-note',
    category: 'Safety',
    title: 'Seasonal risk note: what higher-risk sites should review now',
    date: '27 August 2026',
    excerpt:
      'A practical checklist for hazard registers, site risk assessments and contractor induction content this season.',
    tier: 'public' as AccessTier,
    readTime: '3 min read',
    body: [
      'As temperatures rise heading into the warmer months, AMCA is reminding members operating in higher-risk environments to review three things before the season’s peak load hits: hazard registers (are they current, or copied from last year), site risk assessment processes for rooftop and confined-space work in heat, and contractor induction content covering heat-stress recognition.',
      'None of this is new guidance — it’s a prompt to actually re-open the documents rather than assume they still reflect this year’s crews and sites. AMCA’s confined-space and heat-stress toolbox talks are open to the whole industry; see the Resources page.',
    ],
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
  {
    title: 'Managing director / owner',
    focus: 'Cost, coverage and who else like my firm is already a member.',
  },
  {
    title: 'Operations / contracts manager',
    focus: 'Contract documentation, specialist handbooks, site diaries.',
  },
  {
    title: 'HR / industrial relations manager',
    focus: 'EBA negotiation support and award updates.',
  },
  {
    title: 'WHS / safety manager',
    focus: 'The manual, the toolbox talks, and what changed this quarter.',
  },
  {
    title: 'Training & L&D coordinator',
    focus: 'Dates, member rate, and enrolling several staff at once.',
  },
  {
    title: 'Refrigeration & A/C technician',
    focus: 'Find the right course on a phone, enrol, get the certificate.',
  },
] as const
