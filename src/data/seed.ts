/**
 * Seed content for Sent Ones Denton.
 *
 * Every record carries a `status`:
 *   confirmed – confirmed Denton content
 *   shared    – shared Sent Ones material, pending approval for Denton use
 *   proposed  – proposed local copy, pending client review
 *
 * Fictional sample content lives in ./demo.ts, never here. See docs/CONTENT_STATUS.md.
 * When Sanity is connected this file becomes the fallback and the import source.
 */
import type {
  Author,
  CoachingOption,
  Event,
  Homepage,
  MediaItem,
  MtcProgram,
  Opportunity,
  Post,
  ResourceGroup,
  Rhythm,
  SiteSettings,
} from '../lib/types';

const SENTONES = 'https://www.sentones.com';
const UPLOADS = `${SENTONES}/wp-content/uploads/2025/02`;
const yt = (id: string) => `https://youtu.be/${id}`;

export const siteSettings: SiteSettings = {
  name: 'Sent Ones Denton',
  shortName: 'Sent Ones',
  locationLabel: 'Denton',
  tagline: 'Discover your calling. Develop your skills. Deploy with purpose.',
  description:
    'Sent Ones Denton helps everyday believers in Denton, Texas discover their calling, develop disciple-making skills, and deploy to the mission field at home and abroad.',
  nav: [
    { label: 'Rhythms & Events', href: '/events/' },
    { label: 'MTC', href: '/mtc/' },
    { label: 'Deployment', href: '/deployment-opportunities/' },
    { label: 'Resources', href: '/resources/' },
    { label: 'Media', href: '/media/' },
    { label: 'Blog', href: '/blog/' },
  ],
  headerCta: { label: 'Start here', href: '/#next-step' },
  contactEmail: 'info@sentonesdenton.org', // forwards to the ministry Gmail (Cloudflare Email Routing, set up 2026-10-17)
  contactPhone: null, // pending: public Denton phone (optional)
  nationalSite: { label: 'sentones.com', href: SENTONES, external: true },
  // Client rule (2026-10-16): only Denton's own channels. Supplied by the client on 2026-10-16.
  social: [
    { network: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/sentonesdenton/' },
    { network: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/people/Sent-Ones-Denton/61588302547374/' },
  ],
  nationalMediaLinks: [
    { label: 'The Sent Ones Podcast', href: `${SENTONES}/the-sent-ones-podcast/`, external: true },
    { label: 'Unleash the Priest', href: `${SENTONES}/unleash-the-priest/`, external: true },
    { label: 'Conversations with Coworkers', href: `${SENTONES}/conversations-with-coworkers/`, external: true },
    { label: 'Sent Ones: the documentary', href: `${SENTONES}/doc/`, external: true },
    { label: 'The Sent Ones blog', href: `${SENTONES}/blog/`, external: true },
  ],
  footerNote: 'Sent Ones Denton is a local expression of Sent Ones. Brand and shared resources used with permission.',
  disclaimer:
    'The views and opinions expressed in each article are those of the individual author and do not necessarily reflect the official position of Sent Ones as a whole, its editors, other contributors, or affiliated organizations.',
};

export const homepage: Homepage = {
  hero: {
    kicker: 'Sent Ones · Denton, Texas',
    headline: '*Lost people matter to God,* and so they must matter to us',
    lead: 'A community in Denton helping everyday believers discover their calling, develop disciple-making skills, and deploy to the harvest, across the street and across the world.',
    primaryCta: { label: 'Find your next step', href: '#next-step' },
    secondaryCta: { label: 'See upcoming events', href: '/events/' },
    image: {
      src: 'hero-prayer-circle',
      alt: 'A circle of people with bowed heads holding hands in prayer outside a building',
      credit: 'Frame from the Sent Ones trailer',
    },
  },
  intro: {
    title: 'Sent to Denton. Sent from Denton.',
    body: [
      'Denton is a university city, a commuter city, and a crossroads for North Texas. Every neighborhood, campus and workplace here is a mission field, and so is every nation the people of Denton can reach.',
      'Sent Ones Denton exists to make disciples who make disciples, start simple churches, and go wherever God sends them.',
    ],
  },
  scripture: { quote: 'As the Father has sent me, so I am sending you.', reference: 'John 20:21' },
  pillars: [
    {
      key: 'discover',
      eyebrow: 'Step one',
      titleLines: ['Discover', 'your', 'calling'],
      body: 'Why has God placed you in Denton at this specific moment in time? We believe it is because He has a unique and beautiful plan to use your life to build His kingdom. Start with a conversation, a few honest questions, and resources that help you hear His call clearly.',
      cta: { label: 'Explore calling & coaching', href: '/resources/#coaching' },
      secondaryLinks: [{ label: 'Read stories from the field', href: '/blog/' }],
      image: {
        src: 'friends-on-wall',
        alt: 'Four friends sitting together on a low stone wall, talking',
        credit: 'Frame from the Sent Ones trailer',
      },
    },
    {
      key: 'develop',
      eyebrow: 'Step two',
      titleLines: ['Develop', 'your', 'skills'],
      body: 'Many believers have a burning passion for the Lord but struggle to know what to do with it. Through local trainings, a residential Missions Training Center, and a library of practical tools, we give away kingdom skills for following the Word and the Spirit of God.',
      cta: { label: 'See trainings & events', href: '/events/' },
      secondaryLinks: [
        { label: 'Missions Training Center', href: '/mtc/' },
        { label: 'Training resources', href: '/resources/' },
      ],
      image: {
        src: 'training-whiteboard',
        alt: 'A trainer teaching a small group with diagrams drawn on a whiteboard',
        credit: 'Frame from the Sent Ones trailer',
      },
    },
    {
      key: 'deploy',
      eyebrow: 'Step three',
      titleLines: ['Deploy', 'with', 'purpose'],
      body: 'The mission field is all around us. Whether you are called to a Denton neighborhood, a Texas city, or an unreached people group overseas, we want to help you go prepared, supported and fruitful.',
      cta: { label: 'Deployment opportunities', href: '/deployment-opportunities/' },
      image: {
        src: 'dirt-road',
        alt: 'A long red dirt road stretching toward the horizon with people walking along it',
        credit: 'Frame from the Sent Ones trailer',
      },
    },
  ],
  // Client (2026-10-16): keep the Sent Ones trailer here "for now". The Denton "Compelled" video lives on the Media page.
  video: {
    title: 'Who are the Sent Ones?',
    description: 'One minute on why we go, from the Sent Ones trailer.',
    src: '/video/sent-ones-trailer-720.mp4',
    poster: '/video/sent-ones-trailer-poster.jpg',
    duration: '1:05',
  },
  mtcTeaser: {
    eyebrow: 'Missions Training Center',
    title: 'Learn to live like a missionary, right here in Denton',
    body: 'A residential missions training immersion for Great Commission Christians who are looking to be developed and deployed to a priority people or place. This residency blends hands-on ministry, mentored training, and community rhythms to help develop missional leaders who can catalyze and sustain gospel movements locally and globally.',
    cta: { label: 'About the MTC', href: '/mtc/' },
    image: {
      src: 'bible-study',
      alt: 'People reading open Bibles together in a small group',
      credit: 'Frame from the Sent Ones trailer',
    },
  },
  values: {
    title: 'We are…',
    intro: 'What drives Sent Ones, in Denton and everywhere.',
    items: [
      {
        title: "Compelled by the Father's heart",
        body: "Compelled by the Father's heart for His Kingdom to come and will be done on earth as it is in Heaven. As the Lord of the harvest, He desires to reap a harvest among all peoples on earth. We, along with every Jesus follower, are sent to labor in His harvest. Therefore, we faithfully labor to expand His kingdom among every people and place as we anticipate Jesus' second coming to bring judgment and restoration to all things.",
      },
      {
        title: 'Christ-centered',
        body: 'We are Christ-centered, being reliant on His word as recorded in the Scriptures (John 15:1-16; 2 Tim. 3:16-17), empowered by His Spirit (John 14:23-26), and committed to His mission, bearing witness to all nations (Luke 24:46-49; Acts 20:24).',
      },
      {
        title: 'Obedient to the Great Commission',
        body: "We believe the ultimate model for obedience to Jesus' Great Commission is fully embodied in the pattern of ministry as shown by Jesus and His disciples in the New Testament. We desire local ownership of this core pattern of Jesus' Kingdom work among the people and places where a church foundation exists and where one does not exist.",
      },
      {
        title: 'Focused on gaps',
        body: 'We acknowledge the global scope of God\'s vision, and desire His Kingdom to be expanded throughout all the earth until He decides the work is done. With this scope in mind, we intentionally target the "gaps" where the gospel does not have a sustainable presence of local disciples and churches. We trust God\'s sovereignty and timing in the completion of His mission and the second coming of Christ. We simply and faithfully obey His mandates until the Father decides His vision is complete on the earth.',
      },
    ],
  },
  quote: {
    text: 'The Great Commission is not an option to be considered; it is a command to be obeyed.',
    attribution: 'Hudson Taylor',
  },
  finalCta: {
    title: 'Ready for your next step?',
    body: 'Come to a training, ask about the Missions Training Center, or tell us where God is stirring you. We would love to help you find the right next step.',
    primary: { label: 'Upcoming events', href: '/events/' },
    secondary: { label: 'Ask a question', href: '/resources/#questions' },
  },
};

/**
 * MTC singleton. Every unconfirmed Denton fact is null so the page renders honest
 * "to be announced" states. Sample values for layout review live in demo.ts.
 */
export const mtc: MtcProgram = {
  title: 'Missions Training Center',
  kicker: 'Residential missions training in Denton',
  intro:
    'Learn to live the life of a missionary in a local context by participating in rhythms of activities that will prepare you for a lifetime of following Jesus’ and Paul’s patterns of ministry.',
  statement:
    'Local missionary practitioners will walk alongside you in a community of practice as you learn biblical principles and implement global best practices in Denton and North Texas. Participants are trained to share the gospel, make disciples, start churches, and train leaders to do all of the Great Commission, whether you plan to move overseas or live on mission at home.',
  audience: [
    {
      title: 'Exploring a call to missions',
      body: 'You sense God may be sending you somewhere and you want to test that call in real ministry before you go.',
    },
    {
      title: 'Preparing to go overseas',
      body: 'You already have a field in mind and want hands-on practice in entry, gospel sharing, discipleship and church formation before you leave.',
    },
    {
      title: 'Living sent where you are',
      body: 'You plan to stay in Denton and want to be as fruitful as possible in your neighborhood, campus or workplace.',
    },
  ],
  format: {
    residential: null,
    location: 'Denton, TX',
    duration: '12–18 months, condition-based',
    dates: 'Open enrollment',
    weeklyCommitment: [
      { label: 'Time commitment', hours: 'Full-time', body: 'The commitment of a full-time managerial job.' },
    ],
  },
  focus: [
    { title: 'Abiding', body: 'Apart from Jesus we can do nothing.', icon: '/icons/0-abiding.png' },
    { title: 'Entry', body: 'Engaging people far from God.', icon: '/icons/1-entry.png' },
    { title: 'Gospel', body: 'Proclaiming the good news.', icon: '/icons/2-gospel.png' },
    { title: 'Discipleship', body: 'Teaching them to obey all He commanded.', icon: '/icons/3-discipleship.png' },
    { title: 'Church', body: 'Forming disciples into communities.', icon: '/icons/4-church.png' },
    { title: 'Leaders', body: 'Reproducing kingdom servants.', icon: '/icons/5-leaders.png' },
  ],
  accommodation: null,
  eligibility: [
    'A follower of Jesus with a learning posture, willing to be stretched.',
    'Excited about seeing disciples and churches started for the sake of reaching people for Jesus.',
    'Able to commit full-time for the length of the residency (12–18 months).',
  ],
  applicationSteps: [
    'Send an inquiry using the form below and tell us a little about your story.',
    'Have a conversation with a Denton practitioner about fit, timing and expectations.',
    'Complete the application, interview and references to finish enrollment.',
  ],
  cost: 'TBD',
  financialSupport: null,
  faqs: [
    {
      question: 'Who is this for?',
      answer:
        'Anyone who is excited about seeing disciples and churches started for the sake of reaching people for Jesus. We are looking for people who have a learning posture and are willing to be stretched.',
    },
    {
      question: 'Do I need to plan on going overseas?',
      answer:
        'No. Whether you plan to move overseas or live on mission in Denton, you will gain experience implementing a comprehensive strategy for the Great Commission.',
    },
    {
      question: 'What is the time commitment?',
      answer: 'The commitment of a full-time managerial job.',
    },
    {
      question: 'Who facilitates the training?',
      answer:
        'Local missionary practitioners with years of field experience. Facilitator details for Denton will be published once confirmed.',
    },
  ],
  apply: { label: 'Ask about enrollment', href: '#mtc-inquiry' },
  // Client decision 2026-10-17: flyer and booklet as downloads (not Drive links). Files supplied by Jeremy Adams.
  downloads: [
    {
      label: 'Program flyer',
      description: 'One-page overview: what to expect, requirements and how to get in touch.',
      href: '/downloads/missions-training-center-flyer.pdf',
      format: 'PDF',
      size: '0.5 MB',
    },
    {
      label: 'Program booklet',
      description: 'Full program details: overview, admission requirements, duration and targeted outcomes.',
      href: '/downloads/missions-training-center-booklet.pdf',
      format: 'PDF',
      size: '0.2 MB · 4 pages',
    },
  ],
  contactNote: 'Have a question about the MTC or want to enroll? Send us a note and a Denton practitioner will reach out.',
  image: {
    src: 'city-street-portrait',
    alt: 'A young man standing on a busy city street, looking toward the camera',
    credit: 'Frame from the Sent Ones trailer',
  },
  status: 'proposed',
};

export const resourceGroups: ResourceGroup[] = [
  {
    key: 'dmc',
    title: 'Disciple Making Communities (DMC)',
    tagline: 'Start here: a free 10-week guided study',
    description:
      'Jumpstart your development by starting your own Disciple Making Community. Explore the foundations of disciple-making with a free 10-week guided study on how to get started fulfilling the Great Commission; perfect for small groups, a group of missionally minded Christians, and aspiring missionaries.',
    image: '/brand/dmc-logo.png',
    items: [
      {
        title: 'Request the DMC guide',
        description: 'Ask the Denton team for the guide and we will send it over.',
        format: 'guide',
        links: [{ label: 'Ask for the guide', href: '#questions' }],
      },
    ],
    source: 'sentones',
    status: 'shared',
  },
  {
    key: 'mission-of-god',
    title: 'Every people, every place',
    tagline: 'The mission of God',
    description:
      '"For from the rising of the sun to its setting my name will be great among the nations, and in every place incense will be offered to my name, and a pure offering. For my name will be great among the nations, says the Lord of hosts." Malachi 1:11',
    image: '/brand/every-people-every-place.png',
    items: [
      {
        title: "God's mission from Genesis to Revelation",
        format: 'video',
        links: [
          { label: 'Video', href: yt('rDdcCrZTG2A'), external: true },
          { label: 'Study (PDF)', href: `${UPLOADS}/GodsMissionFromGen-Rev.pdf`, external: true },
        ],
      },
    ],
    source: 'sentones',
    status: 'shared',
  },
  {
    key: 'four-fields',
    title: 'Four Fields / 5 Parts',
    tagline: 'The pattern of kingdom growth',
    description:
      'The four fields of kingdom growth is a helpful way to visualize the pattern of kingdom growth as exemplified in the ministry of Jesus and the early church.',
    image: '/brand/four-fields.png',
    items: [
      {
        title: 'Four Fields overview',
        format: 'video',
        links: [{ label: 'Video', href: yt('i9c6KVAqObs'), external: true }],
      },
    ],
    source: 'sentones',
    status: 'shared',
  },
  {
    key: 'abiding',
    number: '0',
    title: 'Abiding',
    tagline: 'Apart from Jesus we can do nothing.',
    icon: '/icons/0-abiding.png',
    items: [
      {
        title: 'Five essentials for abiding in Christ',
        format: 'video',
        links: [
          { label: 'Video', href: yt('7VRWl0ZBHpQ'), external: true },
          { label: 'Document (PDF)', href: `${UPLOADS}/AbidinginChrist.pdf`, external: true },
        ],
      },
    ],
    source: 'sentones',
    status: 'shared',
  },
  {
    key: 'entry',
    number: '1',
    title: 'Entry',
    tagline: 'Engaging people far from God.',
    icon: '/icons/1-entry.png',
    items: [
      { title: 'Oikos Map (known people)', format: 'video', links: [{ label: 'Video', href: yt('D5az2LAtDDw'), external: true }] },
      { title: 'House of Peace (unknown people)', format: 'video', links: [{ label: 'Video', href: yt('oCCS2BZy8UU'), external: true }] },
    ],
    source: 'sentones',
    status: 'shared',
  },
  {
    key: 'gospel',
    number: '2',
    title: 'Gospel',
    tagline: 'Proclaiming the good news.',
    icon: '/icons/2-gospel.png',
    items: [
      { title: 'Your story (15-second testimony)', format: 'video', links: [{ label: 'Video', href: yt('hkprflNySS8'), external: true }] },
      { title: "God's story (3 Circles)", format: 'video', links: [{ label: 'Video', href: yt('nSOKry3F3bc'), external: true }] },
    ],
    source: 'sentones',
    status: 'shared',
  },
  {
    key: 'discipleship',
    number: '3',
    title: 'Discipleship',
    tagline: 'Teaching them to obey all He commanded.',
    icon: '/icons/3-discipleship.png',
    items: [
      {
        title: 'Meeting pattern (how to teach)',
        format: 'video',
        links: [
          { label: 'Video', href: yt('QfzP2qDv0UY'), external: true },
          { label: 'Model', href: yt('cEiLWwJb-lo'), external: true },
        ],
      },
      {
        title: 'Short-term discipleship (what to teach)',
        format: 'video',
        links: [{ label: 'Video', href: 'https://www.youtube.com/watch?v=uRXjcbwsb3Q', external: true }],
      },
    ],
    source: 'sentones',
    status: 'shared',
  },
  {
    key: 'church',
    number: '4',
    title: 'Church',
    tagline: 'Forming disciples into communities.',
    icon: '/icons/4-church.png',
    items: [
      {
        title: 'Church Circle',
        format: 'video',
        links: [
          { label: 'Video', href: 'https://www.youtube.com/watch?v=AJrij3mYovE', external: true },
          { label: 'Document (PDF)', href: `${UPLOADS}/ChurchCirclesandGenerationalMapping.pdf`, external: true },
        ],
      },
      {
        title: 'Handy guide to maturity',
        format: 'video',
        links: [{ label: 'Video', href: 'https://www.youtube.com/watch?v=WW5tZ_SHBu0', external: true }],
      },
    ],
    source: 'sentones',
    status: 'shared',
  },
  {
    key: 'leaders',
    number: '5',
    title: 'Leaders',
    tagline: 'Reproducing kingdom servants.',
    icon: '/icons/5-leaders.png',
    items: [
      {
        title: 'MAWL (Model, Assist, Watch, Launch)',
        format: 'video',
        links: [
          { label: 'Video', href: yt('8YMsmQSIyjU'), external: true },
          { label: 'Map template (PDF)', href: `${UPLOADS}/MAWLMapTemplate.pdf`, external: true },
        ],
      },
      {
        title: 'The 1-3-9 leadership paradigm',
        format: 'video',
        links: [
          { label: 'Video', href: yt('wz6WbhwF-Is'), external: true },
          { label: 'Document (PDF)', href: `${UPLOADS}/The1-3-9LeadershipParadigm.pdf`, external: true },
        ],
      },
    ],
    source: 'sentones',
    status: 'shared',
  },
  {
    key: 'develop',
    number: 'X',
    title: 'Develop',
    tagline: 'Head, heart and hands for the long haul.',
    icon: '/icons/x-develop-h3.png',
    items: [],
    subgroups: [
      {
        title: 'Head',
        items: [
          {
            title: 'The mission of the early church (Acts 1–19)',
            format: 'playlist',
            links: [
              {
                label: 'Playlist',
                href: 'https://www.youtube.com/playlist?list=PLcde4YvGHKA0sD6X_iCCCJYQo1HFdnN50',
                external: true,
              },
            ],
          },
          {
            title: 'The role of women in the Great Commission',
            format: 'video',
            links: [
              { label: 'Video', href: yt('bpW3kogGfns'), external: true },
              { label: 'Document (PDF)', href: `${UPLOADS}/TheRoleofWomenintheNewTestament.pdf`, external: true },
            ],
          },
          { title: 'Old Testament women study', format: 'document', links: [{ label: 'Document (PDF)', href: `${UPLOADS}/OldTestamentWomenStudy.pdf`, external: true }] },
          { title: 'The coworkers study', format: 'document', links: [{ label: 'Document (PDF)', href: `${UPLOADS}/TheCoworkersStudy.pdf`, external: true }] },
          { title: '3 ways to catalyze new work', format: 'video', links: [{ label: 'Video', href: yt('8P2rR5kIjVk'), external: true }] },
          {
            title: 'Baptism study',
            format: 'video',
            links: [
              { label: 'Video', href: yt('uXcBp4noKHQ'), external: true },
              { label: 'Document (PDF)', href: `${UPLOADS}/BaptismStudy.pdf`, external: true },
            ],
          },
          {
            title: 'Oikos / House of Peace study',
            format: 'video',
            links: [
              { label: 'Video', href: yt('MvOL1ega4jI'), external: true },
              { label: 'Document (PDF)', href: `${UPLOADS}/OikosStudy.pdf`, external: true },
            ],
          },
          { title: 'The 3-legged stool', format: 'video', links: [{ label: 'Video', href: yt('5VGML0V-GFk'), external: true }] },
          { title: '7 phases of progress', format: 'document', links: [{ label: 'Document (PDF)', href: `${UPLOADS}/Updated_7_Phases2.pdf`, external: true }] },
          { title: '5 essential activities', format: 'video', links: [{ label: 'Video', href: yt('tfoPdggouZ8'), external: true }] },
          { title: 'Four responses to the gospel', format: 'video', links: [{ label: 'Video', href: yt('vR8PPN1gG_c'), external: true }] },
        ],
      },
      {
        title: 'Heart',
        items: [
          { title: 'The heart of the leader', format: 'document', links: [{ label: 'Document (PDF)', href: `${UPLOADS}/TheHeartoftheLeader.pdf`, external: true }] },
          { title: 'The ark of the testimony', format: 'document', links: [{ label: 'Document (PDF)', href: `${UPLOADS}/ArkoftheCovenantStudy.pdf`, external: true }] },
          { title: 'One another study', format: 'document', links: [{ label: 'Document (PDF)', href: `${UPLOADS}/OneAnotherStudy.pdf`, external: true }] },
          { title: 'Identity study', format: 'document', links: [{ label: 'Document (PDF)', href: `${UPLOADS}/IdentityStudy.pdf`, external: true }] },
          { title: 'Persecution study', format: 'document', links: [{ label: 'Document (PDF)', href: `${UPLOADS}/PersecutionStudy.pdf`, external: true }] },
          { title: 'Family on mission study', format: 'document', links: [{ label: 'Document (PDF)', href: `${UPLOADS}/FamilyonMissionStudy.pdf`, external: true }] },
          { title: 'Flow of money in the New Testament', format: 'document', links: [{ label: 'Document (PDF)', href: `${UPLOADS}/FlowofMoneyintheNewTestament.pdf`, external: true }] },
          { title: 'World, flesh, enemy study', format: 'document', links: [{ label: 'Document (PDF)', href: `${UPLOADS}/World.Flesh_.EnemyStudypdf.pdf`, external: true }] },
          { title: 'Biblical ethics', format: 'document', links: [{ label: 'Document (PDF)', href: `${UPLOADS}/BiblicalEthics.pdf`, external: true }] },
          { title: 'Communication study', format: 'document', links: [{ label: 'Document (PDF)', href: `${UPLOADS}/CommunicationStudy.pdf`, external: true }] },
        ],
      },
      {
        title: 'Hands',
        items: [
          { title: 'Counseling made simple', format: 'video', links: [{ label: 'Video', href: yt('iq2nCeVcWb4'), external: true }] },
          { title: 'Generational mapping', format: 'video', links: [{ label: 'Video', href: yt('UC0CNZkaD-s'), external: true }] },
          { title: '6 keys for effective training', format: 'video', links: [{ label: 'Video', href: yt('6zp9xLylBdU'), external: true }] },
          { title: 'The 411', format: 'video', links: [{ label: 'Video', href: 'https://www.youtube.com/watch?v=Q1c3sAZx0D4', external: true }] },
          { title: 'Developing your 1-3-9', format: 'video', links: [{ label: 'Video', href: yt('8ovH_XICOds'), external: true }] },
          {
            title: 'Iron on iron',
            format: 'video',
            links: [
              { label: 'Video', href: yt('RsFfbZvA93s'), external: true },
              { label: 'Graphic', href: `${UPLOADS}/IOI.jpeg`, external: true },
            ],
          },
          { title: 'Simple problem-solving framework', format: 'video', links: [{ label: 'Video', href: yt('QgrKHXtRGfM'), external: true }] },
        ],
      },
    ],
    source: 'sentones',
    status: 'shared',
  },
];

/** Coaching options. Destinations point to the local inquiry form until a Denton booking link is approved. */
export const coachingOptions: CoachingOption[] = [
  {
    title: 'Discovery call',
    body: 'Want to have an exploratory conversation about your purpose in life? Ask for a short intro call with someone from the Denton team.',
    cta: { label: 'Request a discovery call', href: '#questions' },
    status: 'proposed',
  },
  {
    title: 'Coaching call',
    body: 'Feel stuck? Get input from a proven practitioner on your next step in making disciples where you are.',
    cta: { label: 'Connect with a coach', href: '#questions' },
    status: 'proposed',
  },
  {
    title: "I'm ready, send me",
    body: 'Ready to deploy to a local, regional, or global mission field? We are ready to help you launch.',
    cta: { label: 'Explore deployment', href: '/deployment-opportunities/' },
    status: 'proposed',
  },
];

/**
 * Media rule (client, 2026-10-16): only Denton's own media is featured here. National Sent Ones
 * podcasts, documentary and playlists are linked from siteSettings.nationalMediaLinks, not embedded.
 */
export const media: MediaItem[] = [
  {
    slug: 'compelled',
    title: 'Compelled',
    type: 'video',
    summary: 'The Sent Ones Denton video.',
    cover: { src: 'https://i.ytimg.com/vi/mP3VcE5kCRY/maxresdefault.jpg', alt: 'Compelled video title frame' },
    provider: 'YouTube',
    youtubeId: 'mP3VcE5kCRY',
    links: [{ label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=mP3VcE5kCRY', external: true }],
    featured: true,
    status: 'confirmed',
  },
];

/** Kept for reference only (not exported through the content layer): the national items removed on 2026-10-16. */
const _nationalMediaArchive: MediaItem[] = [
  {
    slug: 'sent-ones-documentary',
    title: 'Sent Ones: the documentary',
    type: 'documentary',
    summary:
      'Every Kingdom movement begins with one simple act of obedience, even though it may cost you everything. Sent Ones is the true story of ordinary people saying "yes" to God, and how that obedience multiplies disciples, transforms lives, and reaches the nations.',
    cover: { src: 'https://i.ytimg.com/vi/NePwYkpaNFQ/hqdefault.jpg', alt: 'Sent Ones documentary title frame' },
    provider: 'YouTube · Mekong Kingdom Movement',
    youtubeId: 'NePwYkpaNFQ',
    links: [{ label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=NePwYkpaNFQ', external: true }],
    featured: true,
    status: 'shared',
  },
  {
    slug: 'the-sent-ones-podcast',
    title: 'The Sent Ones Podcast',
    type: 'podcast',
    summary:
      'Where we help disciples of Jesus discover their calling, develop their skills as disciple-makers, and deploy to the field to which God is calling them.',
    cover: { src: '/brand/sent-ones-icon-white.png', alt: 'The Sent Ones Podcast cover' },
    provider: 'Spotify · Apple Podcasts',
    links: [
      { label: 'Spotify', href: 'https://open.spotify.com/show/3SALcVogotZFToc1k3cTW1', external: true },
      { label: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/the-sent-ones-podcast/id1740783303', external: true },
      { label: 'Show notes', href: `${SENTONES}/the-sent-ones-podcast/`, external: true },
    ],
    featured: true,
    status: 'shared',
  },
  {
    slug: 'unleash-the-priest',
    title: 'Unleash the Priest',
    type: 'podcast',
    summary:
      'A podcast for church leaders and those who love the church. Imagine the priesthood of all believers being unleashed to make disciples of Jesus who impact our churches, our communities, and the ends of the earth.',
    cover: { src: '/brand/podcast-unleash-the-priest.png', alt: 'Unleash the Priest podcast cover' },
    provider: 'Spotify · Apple Podcasts',
    links: [
      { label: 'Spotify', href: 'https://open.spotify.com/show/05C63R1ft2fOwFSDCeh38V', external: true },
      { label: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/unleash-the-priest/id1758017890', external: true },
      { label: 'Show notes', href: `${SENTONES}/unleash-the-priest/`, external: true },
    ],
    featured: false,
    status: 'shared',
  },
  {
    slug: 'conversations-with-coworkers',
    title: 'Conversations with Coworkers',
    type: 'podcast',
    summary:
      'Experience transparent conversations with Sent Ones from around the world. A podcast designed for every believer and leader seeking to multiply disciples and churches.',
    cover: { src: '/brand/podcast-conversations-with-coworkers.png', alt: 'Conversations with Coworkers podcast cover' },
    provider: 'Spotify · Apple Podcasts',
    links: [
      { label: 'Spotify', href: 'https://open.spotify.com/show/7KiLB48sQGdfCNTy9T1HCM', external: true },
      { label: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/conversations-with-coworkers/id1761942256', external: true },
      { label: 'Show notes', href: `${SENTONES}/conversations-with-coworkers/`, external: true },
    ],
    featured: false,
    status: 'shared',
  },
  {
    slug: 'early-church-playlist',
    title: 'The mission of the early church (Acts 1–19)',
    type: 'playlist',
    summary: 'A teaching series walking through how the first believers obeyed the Great Commission, from Jerusalem to the ends of the earth.',
    cover: { src: 'bible-study', alt: 'People reading open Bibles together in a small group' },
    provider: 'YouTube',
    links: [
      { label: 'Open playlist', href: 'https://www.youtube.com/playlist?list=PLcde4YvGHKA0sD6X_iCCCJYQo1HFdnN50', external: true },
    ],
    featured: false,
    status: 'shared',
  },
  {
    slug: 'four-fields-video',
    title: '5 Parts / 4 Fields',
    type: 'video',
    summary: 'A short visual explanation of the pattern of kingdom growth seen in the ministry of Jesus and the early church.',
    cover: { src: 'https://i.ytimg.com/vi/i9c6KVAqObs/hqdefault.jpg', alt: 'Four Fields teaching video thumbnail' },
    provider: 'YouTube',
    youtubeId: 'i9c6KVAqObs',
    links: [{ label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=i9c6KVAqObs', external: true }],
    featured: false,
    status: 'shared',
  },
];
void _nationalMediaArchive;

/**
 * Confirmed Denton events, taken from the client's Eventbrite organizer page
 * (https://www.eventbrite.com/o/121736507932) on 2026-10-17. Images are the Eventbrite listing images.
 */
const EVENTBRITE_ORG = 'https://www.eventbrite.com/o/121736507932';
const ZERA = { name: 'Zera Coffee & Events', address: '420 East McKinney Street, Denton, TX 76209', city: 'Denton, TX', online: false };

export const events: Event[] = [
  {
    slug: 'compelled-november-2026',
    title: 'Compelled',
    type: 'worship',
    start: '2026-11-06T18:00:00-06:00',
    end: '2026-11-06T21:00:00-06:00',
    timezone: 'America/Chicago',
    venue: ZERA,
    image: {
      src: 'event-compelled',
      alt: 'Compelled: a crowd worshipping with raised hands under stage lights, in black and white',
      credit: 'Eventbrite listing image, Sent Ones Denton',
    },
    summary: 'Gather with us for a night of worship, prayer, and renewed commitment to His mission.',
    description: [
      'As believers, we are called to impact our communities and the world. Gather with us for a night of worship, prayer, and renewed commitment to His mission.',
      '6:00 PM: Welcome & connect. Arrive and enjoy refreshments, meet seasoned missionaries from around the world, and explore the Resource & Merch Center.',
      '6:50 PM: Make your way into the sanctuary. We invite everyone to come in and prepare to worship together.',
      '7:00 PM: Worship begins. Our worship gathering begins promptly at 7:00 PM.',
    ],
    registration: { label: 'Register on Eventbrite', href: 'https://www.eventbrite.com/e/compelled-tickets-2000667208477', external: true },
    cost: null,
    published: true,
    featured: true,
    status: 'confirmed',
  },
  {
    slug: 'gospel-conversations-training-november-2026',
    title: 'Gospel Conversations Training',
    type: 'training',
    start: '2026-11-08T16:00:00-06:00',
    end: '2026-11-08T20:00:00-06:00',
    timezone: 'America/Chicago',
    venue: ZERA,
    image: {
      src: 'event-gospel-conversations-training',
      alt: 'Two women praying with a young woman beside a campus fountain, in black and white',
      credit: 'Eventbrite listing image, Sent Ones Denton',
    },
    summary: 'Want to feel more confident sharing your faith? A hands-on training in simple, biblical tools for starting spiritual conversations.',
    description: [
      "Join us for a hands-on Gospel Conversations Training where you'll learn simple, biblical tools to start spiritual conversations, share your story and God's story, and help others begin following Jesus.",
      'Come ready to learn, practice, and put it into action!',
    ],
    registration: {
      label: 'Register on Eventbrite',
      href: 'https://www.eventbrite.com/e/gospel-conversations-training-tickets-2003551643901',
      external: true,
    },
    cost: null,
    published: true,
    featured: true,
    status: 'confirmed',
  },
  {
    slug: 'harvest-push-november-2026',
    title: 'Harvest Push',
    type: 'harvest',
    start: '2026-11-09T00:00:00-06:00',
    end: '2026-11-13T23:30:00-06:00',
    timezone: 'America/Chicago',
    venue: { name: 'Across Denton · meeting points shared with registrants', address: null, city: 'Denton, TX', online: false },
    image: {
      src: 'event-harvest-push',
      alt: 'A student talking with someone sitting on a bench along a tree-lined campus walkway, in black and white',
      credit: 'Eventbrite listing image, Sent Ones Denton',
    },
    summary: 'It’s time to put our faith into action! Join us as we “flood the zone” this week across Denton with prayer-walking and gospel sharing.',
    description: [
      'Join us and our “team of teams” that will be deployed to target peoples, points of interest, and neighborhoods across our city. Each of our teams will be led by seasoned modelers, making it easy for even the most inexperienced and nervous participants.',
      'Even if you may not be prepared to share directly, we still have a place for you to join and support in meaningful prayer as we go.',
      'Detailed schedule coming.',
    ],
    registration: { label: 'Register on Eventbrite', href: 'https://www.eventbrite.com/e/harvest-push-tickets-2003553667955', external: true },
    cost: null,
    published: true,
    featured: true,
    status: 'confirmed',
  },
];

export const eventsListingUrl = EVENTBRITE_ORG;

/**
 * Standing rhythms. DCSM details from Karen's Eventbrite listing (2026-10-19):
 * first meeting Thu 12 Nov 2026, series through 9 Dec 2027.
 * Karen confirmed 2026-10-19: second Thursday of each month, 9–11 AM.
 */
export const rhythms: Rhythm[] = [
  {
    slug: 'denton-county-strategy-meeting',
    title: 'Denton County Strategy Meeting',
    cadence: 'Second Thursday of each month',
    time: '9:00 – 11:00 AM',
    venue: { name: 'Zera Coffee & Events', city: 'Denton, TX', online: false },
    description:
      'A community of prayer and practice where leaders can be encouraged, championed and equipped with vision, training, and tools.',
    points: [
      'Understand and prioritize the needs of the harvest',
      'Build unity around movement principles and practices that serve the needs of Denton County',
      'Celebrate successes, mourn defeats, identify “stuckages,” and apply biblical solutions',
      'Cultivate IOI relationships in a low-control, high-accountability environment',
      'Ensure every believer is trained, equipped, and mobilized for the harvest in Denton County',
    ],
    audience: 'Leaders and practitioners serving Denton County',
    cta: { label: 'Ask to join', href: '/resources/#questions' },
    published: true,
    status: 'confirmed',
  },
];
export const opportunities: Opportunity[] = [];
export const authors: Author[] = [];
export const posts: Post[] = [];

export const blogCategories = [
  'Calling',
  'Church Formation',
  'Developing Leaders',
  'Discipleship',
  'Engaging the Lost',
  "God's Mission",
  'Sharing the Gospel',
];
