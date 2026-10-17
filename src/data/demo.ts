/**
 * SAMPLE CONTENT FOR LAYOUT REVIEW ONLY.
 *
 * Everything in this file is fictional. It is merged in by src/lib/content.ts only when
 * preview content is enabled (automatic in `astro dev`, explicit via PUBLIC_PREVIEW_CONTENT=true
 * for `npm run build:preview`). Production builds never include it.
 *
 * Each record is marked status: 'demo' and renders with a visible "Sample" badge.
 * Replace with confirmed Denton content in seed.ts (or Sanity) and delete as you go.
 */
import type { Author, Event, MtcProgram, Opportunity, Post, Rhythm } from '../lib/types';

const credit = 'Frame from the Sent Ones trailer';

/** Standing rhythms: the client named "Denton County Strategy Meeting" as an example. Schedule details are placeholders. */
export const demoRhythms: Rhythm[] = [
  {
    slug: 'denton-county-strategy-meeting',
    title: 'Denton County Strategy Meeting',
    cadence: 'Every other Tuesday',
    time: '7:00 – 8:30 PM',
    venue: { name: 'Location shared on request', city: 'Denton, TX', online: false },
    description:
      'Practitioners and church leaders across Denton County gather to pray, share what God is doing in the harvest, and coordinate next steps toward every neighborhood and people group being reached.',
    audience: 'Church leaders and movement practitioners',
    cta: { label: 'Ask to join', href: '/resources/#questions' },
    published: true,
    status: 'demo',
  },
  {
    slug: 'weekly-harvest-push',
    title: 'Weekly Harvest Push',
    cadence: 'Every Saturday morning',
    time: '9:00 – 11:30 AM',
    venue: { name: 'Meeting point shared on request', city: 'Denton, TX', online: false },
    description:
      'Two hours in the field together: prayer walking, gospel conversations, and following up with people of peace in Denton neighborhoods and on campus.',
    audience: 'Open to anyone who has attended a Gospel Conversations Training',
    cta: { label: 'Ask to join', href: '/resources/#questions' },
    published: true,
    status: 'demo',
  },
  {
    slug: 'abiding-and-intercession',
    title: 'Abiding & Intercession Hour',
    cadence: 'Every Thursday',
    time: '6:30 – 7:30 AM',
    venue: { name: 'Online (Zoom)', city: 'Online', online: true },
    description: 'An early hour of Scripture, silence and intercession for Denton, for workers being sent, and for the unreached.',
    audience: 'Open to all',
    cta: null,
    published: true,
    status: 'demo',
  },
];

export const demoEvents: Event[] = [
  {
    slug: 'denton-gospel-training-november',
    title: 'Denton Gospel Training',
    type: 'training',
    start: '2026-11-14T09:00:00-06:00',
    end: '2026-11-14T15:00:00-06:00',
    timezone: 'America/Chicago',
    venue: { name: 'Venue announced on registration', address: null, city: 'Denton, TX', online: false },
    image: { src: 'training-whiteboard', alt: 'A trainer teaching a small group at a whiteboard', credit },
    summary:
      'A one-day training to equip everyday believers to live as Sent Ones in their own communities: pray intentionally, share the gospel simply, and take first steps toward starting new groups.',
    description: [
      'This training is designed to equip everyday believers to live as Sent Ones in their own communities. Together, we will learn practical ways to pray intentionally for the people and places around us, share the gospel with friends, family, neighbors, and coworkers, and take simple steps toward starting new groups among those who are far from God.',
      'You will practice the tools, not just hear about them: mapping your relationships, sharing your story in fifteen seconds, telling God’s story with three circles, and leading a simple discovery group.',
      'Lunch is included. Bring a Bible, a notebook, and one person you have been praying for.',
    ],
    registration: { label: 'Register', href: '#', external: true },
    cost: 'Free (sample)',
    published: true,
    featured: true,
    status: 'demo',
  },
  {
    slug: 'worship-and-prayer-night-november',
    title: 'Worship & Prayer for the Nations',
    type: 'worship',
    start: '2026-11-20T19:00:00-06:00',
    end: '2026-11-20T21:00:00-06:00',
    timezone: 'America/Chicago',
    venue: { name: 'Venue announced on registration', address: null, city: 'Denton, TX', online: false },
    image: { src: 'gathering-worship', alt: 'A crowded room of people worshipping with raised hands', credit },
    summary: 'An evening of worship and intercession for Denton, for North Texas, and for the peoples who still have no access to the gospel.',
    description: [
      'Two hours of unhurried worship and focused prayer. We will pray for our city by name, for workers being sent from Denton, and for specific unreached peoples.',
      'No registration required. Come as you are and bring friends.',
    ],
    registration: null,
    cost: null,
    published: true,
    featured: true,
    status: 'demo',
  },
  {
    slug: 'four-fields-workshop-december',
    title: 'Four Fields Workshop',
    type: 'training',
    start: '2026-12-05T09:00:00-06:00',
    end: '2026-12-05T12:30:00-06:00',
    timezone: 'America/Chicago',
    venue: { name: 'Venue announced on registration', address: null, city: 'Denton, TX', online: false },
    image: { src: 'bible-study', alt: 'People reading open Bibles together in a small group', credit },
    summary:
      'A half-day deep dive into the Four Fields of kingdom growth: entry, gospel, discipleship, church and leaders, with time to map your own field.',
    description: [
      'The Four Fields is a simple way to see the whole pattern of Jesus’ ministry at once. In this workshop we walk through each field, look at the Scriptures behind it, and help you map where you and your group are right now.',
      'Ideal for anyone who has attended a Gospel Training or leads a small group.',
    ],
    registration: { label: 'Register', href: '#', external: true },
    cost: '$10 materials (sample)',
    published: true,
    featured: true,
    status: 'demo',
  },
  {
    slug: 'north-texas-harvest-weekend',
    title: 'North Texas Harvest Weekend',
    type: 'harvest',
    start: '2026-12-12T09:00:00-06:00',
    end: '2026-12-13T16:00:00-06:00',
    timezone: 'America/Chicago',
    venue: { name: 'Meeting point shared on registration', address: null, city: 'Denton, TX', online: false },
    image: { src: 'walking-together', alt: 'A group of people walking together along a muddy street', credit },
    summary: 'Two days of concentrated harvest work: prayer walking, gospel conversations and starting discovery groups across Denton County, with training and debrief each evening.',
    description: [
      'A harvest push gathers everyone who has been trained and sends them out together. We cover a different part of the county each day, share meals, and debrief what God did each evening.',
      'Saturday and Sunday afternoon. Bring walking shoes and a friend who has been through a Gospel Conversations Training.',
    ],
    registration: { label: 'Register', href: '#', external: true },
    cost: 'Free (sample)',
    published: true,
    featured: false,
    status: 'demo',
  },
  {
    slug: 'dmc-info-night-january',
    title: 'Disciple Making Community: Winter Cohort Info Night',
    type: 'mobilization',
    start: '2027-01-14T19:30:00-06:00',
    end: '2027-01-14T20:30:00-06:00',
    timezone: 'America/Chicago',
    venue: { name: 'Online (link sent after registration)', address: null, city: 'Online', online: true },
    image: { src: 'notebook', alt: 'A person writing notes in a notebook', credit },
    summary: 'Hear how a 10-week Disciple Making Community works, meet the facilitators, and ask your questions before the winter cohort begins.',
    description: [
      'A Disciple Making Community is a small group of believers who commit to ten weeks of learning and practicing the basics of making disciples together.',
      'This online session explains the rhythm, the commitment, and how to join or start a community in your neighborhood.',
    ],
    registration: { label: 'Save my seat', href: '#', external: true },
    cost: 'Free (sample)',
    published: true,
    featured: false,
    status: 'demo',
  },
  {
    slug: 'night-of-worship-january',
    title: 'Night of Worship',
    type: 'worship',
    start: '2027-01-29T19:00:00-06:00',
    end: null,
    timezone: 'America/Chicago',
    venue: { name: 'Venue announced on registration', address: null, city: 'Denton, TX', online: false },
    image: { src: 'court-gathering', alt: 'A community gathered on an outdoor court', credit },
    summary: 'A night of worship with the wider Sent Ones family in North Texas.',
    description: ['Details to follow.'],
    registration: null,
    cost: null,
    published: true,
    featured: false,
    status: 'demo',
  },
  {
    slug: 'fall-kickoff-worship-night',
    title: 'Fall Kickoff Worship Night',
    type: 'worship',
    start: '2026-09-11T19:00:00-05:00',
    end: '2026-09-11T21:00:00-05:00',
    timezone: 'America/Chicago',
    venue: { name: 'Venue announced on registration', address: null, city: 'Denton, TX', online: false },
    image: { src: 'gathering-worship', alt: 'A crowded room of people worshipping with raised hands', credit },
    summary: 'We kicked off the fall by worshipping together and praying over every campus in Denton.',
    description: ['This event has already taken place.'],
    registration: null,
    cost: null,
    published: true,
    featured: false,
    status: 'demo',
  },
  {
    slug: 'oikos-mapping-workshop-august',
    title: 'Oikos Mapping Workshop',
    type: 'training',
    start: '2026-08-22T09:00:00-05:00',
    end: '2026-08-22T12:00:00-05:00',
    timezone: 'America/Chicago',
    venue: { name: 'Venue announced on registration', address: null, city: 'Denton, TX', online: false },
    image: { src: 'community-meeting', alt: 'People talking together in a community meeting', credit },
    summary: 'A morning workshop on mapping the relationships God has already given you.',
    description: ['This event has already taken place.'],
    registration: null,
    cost: null,
    published: true,
    featured: false,
    status: 'demo',
  },
];

export const demoOpportunities: Opportunity[] = [
  {
    slug: 'denton-neighborhood-engagement',
    title: 'Denton Neighborhood Engagement Team',
    region: 'Denton, Texas',
    scope: 'local',
    availability: 'open',
    overview:
      'Join a small team that prayer-walks, meets neighbors, and starts discovery groups in one Denton neighborhood over a semester.',
    purpose: [
      'Practice entry and gospel conversations in a real neighborhood with coaching alongside you.',
      'See new discovery groups started among people who are far from God.',
      'Develop a sustainable rhythm of local mission you can keep for life.',
    ],
    dates: 'Ongoing · join at the start of any semester',
    duration: 'One semester (about 15 weeks), 3–4 hours per week',
    requirements: [
      'Completed a Gospel Training or equivalent.',
      'Able to commit to a weekly team time and a weekly field time.',
      'Willing to be coached and to report honestly.',
    ],
    preparation: ['Map your oikos before week one.', 'Memorize a 15-second testimony and the 3 Circles.'],
    partner: null,
    cost: 'None',
    apply: { label: 'Ask about joining', href: '/resources/#questions' },
    image: { src: 'walking-together', alt: 'A group of people walking together along a muddy street', credit },
    published: true,
    status: 'demo',
  },
  {
    slug: 'north-texas-church-planting-support',
    title: 'North Texas Church Planting Support',
    region: 'Dallas–Fort Worth & North Texas',
    scope: 'regional',
    availability: 'upcoming',
    overview:
      'Serve alongside church planters across North Texas for a season: prayer, outreach events, and discipling new believers in towns without a gospel-centered church nearby.',
    purpose: [
      'Strengthen young church plants with trained laborers for a defined season.',
      'Gain experience in church formation beyond your own city.',
    ],
    dates: 'Spring 2027 (sample)',
    duration: '12 weeks, two Saturdays per month plus weekly prayer',
    requirements: ['Completed the Four Fields Workshop.', 'Reliable transportation within North Texas.'],
    preparation: ['Read the Church Circle resource.', 'Attend the orientation evening.'],
    partner: null,
    cost: 'Travel costs only',
    apply: null,
    image: { src: 'aerial-city', alt: 'An aerial view of a dense city neighborhood', credit },
    published: true,
    status: 'demo',
  },
  {
    slug: 'southeast-asia-vision-trip',
    title: 'Southeast Asia Vision Trip',
    region: 'Southeast Asia',
    scope: 'international',
    availability: 'upcoming',
    overview:
      'A ten-day vision trip to see a disciple-making movement up close, pray on site among unreached peoples, and discern whether God is calling you to longer-term service.',
    purpose: [
      'Expose Denton believers to movement work among the unreached.',
      'Give people exploring a long-term call a concrete first step.',
    ],
    dates: 'June 2027 (sample)',
    duration: '10 days',
    requirements: [
      'Active in a local Denton team or Disciple Making Community.',
      'Valid passport with at least six months validity.',
      'Attendance at three preparation sessions.',
    ],
    preparation: ['Cultural and security briefing.', 'Support-raising coaching.', 'Health and travel preparation.'],
    partner: 'Field partner to be confirmed',
    cost: 'Approx. $2,400 including flights (sample)',
    apply: null,
    image: { src: 'temple-backpack', alt: 'A traveler with a backpack walking past an ancient stone temple', credit },
    published: true,
    status: 'demo',
  },
  {
    slug: 'summer-campus-outreach',
    title: 'Summer Campus Outreach',
    region: 'Denton, Texas',
    scope: 'local',
    availability: 'closed',
    overview: 'A six-week summer team focused on gospel conversations and discovery groups with students who stay in Denton over the summer.',
    purpose: ['Reach students who stay in Denton over the summer.'],
    dates: 'June – July 2026 (completed)',
    duration: '6 weeks',
    requirements: ['Completed a Gospel Training.'],
    preparation: [],
    partner: null,
    cost: 'None',
    apply: null,
    image: { src: 'bike-conversation', alt: 'Young people sitting on a curb talking next to a bicycle', credit },
    published: true,
    status: 'demo',
  },
];

export const demoAuthors: Author[] = [
  {
    slug: 'denton-team',
    name: 'Sent Ones Denton Team',
    role: 'Sample author',
    bio: 'Sample author profile. Real author names, roles and bios will replace this once the client supplies them.',
    status: 'demo',
  },
  {
    slug: 'guest-contributor',
    name: 'Guest Contributor',
    role: 'Sample author',
    bio: 'Sample guest profile used to show how a contributor bio appears below an article.',
    status: 'demo',
  },
];

export const demoPosts: Post[] = [
  {
    slug: 'praying-for-every-street-in-denton',
    title: 'Praying for every street in Denton',
    authorSlug: 'denton-team',
    date: '2026-10-02',
    categories: ['Engaging the Lost', "God's Mission"],
    image: { src: 'village-road', alt: 'A quiet tree-lined road in the early morning', credit },
    excerpt:
      'Before we knock on a single door we want to have prayed over the whole city. Here is how a few of us started walking Denton one neighborhood at a time, and how you can join.',
    body: `Before we knock on a single door we want to have prayed over the whole city. That sounds ambitious until you break it down: Denton has a finite number of streets, and a handful of people walking a few of them each week can cover a neighborhood in a month.

## Why walk, when you could just pray at home?

Walking slows you down. You notice the duplex with the broken fence, the apartment block where three languages are spoken on the stairwell, the park where the same group of teenagers gathers every evening. Prayer that starts with noticing becomes specific, and specific prayer changes the one praying.

> "Lift up your eyes, and see that the fields are white for harvest." (John 4:35)

Jesus said that to disciples who had just walked through a Samaritan town and noticed nothing. We would rather not make the same mistake.

## How a prayer walk works

1. **Pick a square.** We use a simple map with the city divided into walkable squares. Each team takes one.
2. **Walk it twice.** The first walk is silent: look, listen, pray. The second walk, a week later, is for conversations. If someone is in their yard, say hello.
3. **Write it down.** Names, needs, anything God brought to mind. Those notes become the prayer list for the whole team.
4. **Go back.** The person who waved at you on week two is often the person of peace in week six.

## What we have seen so far

This is a sample article, so there are no real stories here yet. When the Denton team publishes its own posts, this is where testimonies of answered prayer and new groups will live.

## Join a square

If you live in Denton and want to take a square, come to the next Gospel Training or send us a note through the Resources page. We will pair you with someone who has walked before.`,
    seo: { description: 'How Sent Ones Denton prayer-walks the city one square at a time, and how you can take a square.' },
    published: true,
    status: 'demo',
  },
  {
    slug: 'three-questions-to-discover-your-calling',
    title: 'Three questions to discover your calling',
    authorSlug: 'guest-contributor',
    date: '2026-09-18',
    categories: ['Calling'],
    image: { src: 'looking-up', alt: 'A bearded man looking upward thoughtfully in soft light', credit },
    excerpt:
      'Calling is rarely a lightning bolt. More often it is the quiet overlap of what God has said, what He has done in you, and the people He keeps putting in front of you.',
    body: `People ask us all the time how to know what God is calling them to. We do not have a formula, but we have noticed that calling usually shows up at the overlap of three honest questions.

## 1. What has God already said?

Not to you specifically. To everyone. "Go and make disciples of all nations" is not a special assignment for a few; it is the standing order for every follower of Jesus. Before you ask where, settle the what. Most of the clarity people are waiting for comes after obedience to what is already clear.

## 2. What has God already done in you?

Look back. Where have you seen fruit? Which conversations left you more alive rather than drained? Which injustices or peoples keep you up at night? God does not waste a story. The things He has walked you through are usually part of the things He wants to walk others through with you.

## 3. Who keeps showing up?

Calling is confirmed in community. The neighbor who keeps asking questions, the international student you met at the laundromat, the friend who said "you should lead this": pay attention. The Spirit often speaks through the people already in your path.

## Then take one step

You will not discover your calling by thinking about it harder. Pray through the three questions, write your answers down, and then do the smallest obedient thing you can see. The next step shows up after the first one.

*This is a sample article used to demonstrate the layout. It is not a published Denton article.*`,
    seo: {},
    published: true,
    status: 'demo',
  },
  {
    slug: 'what-a-disciple-making-community-looks-like',
    title: 'What a Disciple Making Community looks like week to week',
    authorSlug: 'denton-team',
    date: '2026-08-27',
    categories: ['Discipleship', 'Church Formation'],
    image: { src: 'bible-study', alt: 'People reading open Bibles together in a small group', credit },
    excerpt:
      'A DMC is not another Bible study. It is a small group that learns to obey Jesus together and immediately passes on what it learns. Here is the rhythm of a typical evening.',
    body: `A Disciple Making Community (DMC) is a small group of believers who commit to ten weeks of learning and practicing the basics of making disciples together. It is not a lecture, and it is not a typical Bible study. The whole evening is built so that everyone leaves knowing exactly what to obey and who to share it with.

## The three-thirds pattern

Every gathering follows the same simple shape, which is part of why it reproduces so easily.

### Look back (first third)
- How are you doing? Honest care for one another.
- How did it go? Everyone reports on last week's obedience and sharing goals.
- Worship and prayer.

### Look up (second third)
- A short passage of Scripture, read twice.
- Simple questions: What does this say about God? About people? What will you obey?

### Look forward (final third)
- Practice. We rehearse the tool for the week out loud, in pairs.
- Set goals: who will you share this with before next time?
- Pray for the people you named.

## What makes it different

Accountability is loving, not heavy. Nobody is shamed for a missed goal, but nobody is allowed to drift either. The expectation that you will pass on what you learned this week is the engine of the whole thing.

## Starting one in Denton

You need a living room, a facilitator who has been through a DMC, and three to eight people who are willing to be stretched. The free ten-week guide on the Resources page walks you through all ten sessions.

*Sample article for layout review.*`,
    seo: {},
    published: true,
    status: 'demo',
  },
  {
    slug: 'oikos-start-with-the-people-you-already-know',
    title: 'Oikos: start with the people you already know',
    authorSlug: 'guest-contributor',
    date: '2026-07-30',
    categories: ['Sharing the Gospel', 'Engaging the Lost'],
    image: { src: 'community-meeting', alt: 'People talking together in a community meeting', credit },
    excerpt:
      'The New Testament word for household, oikos, is the most overlooked mission field most of us have. Mapping it takes twenty minutes and changes how you pray.',
    body: `When the Philippian jailer believed, Luke tells us he "and all his household" were baptized. The word is *oikos*: the web of family, friends, coworkers and neighbors that every person already belongs to. The gospel almost always travels along those lines first.

## Draw your map

Take a sheet of paper and write your name in the middle. Around it, write the names of people you see regularly who do not yet follow Jesus. Family. The people at work. Neighbors. The parents at your kid's practice. The barista who knows your order.

Most people are surprised to find twenty to forty names.

## Sort it honestly

Next to each name, note two things: how close you are, and how open they seem. Then circle three people who are both reasonably close and at least a little open. These three become your prayer list and your first conversations.

## Pray, then say something

Pray for your three every day for a week. Then, the next time you see them, ask one question that goes a little deeper than usual. You are not pitching anything. You are paying attention. Most gospel conversations begin because someone was finally asked how they were really doing.

## Keep the map alive

Revisit the map monthly. Add names. Move people as things change. When someone believes, help them draw their own map on day one; their oikos is the next field.

*Sample article for layout review.*`,
    seo: {},
    published: true,
    status: 'demo',
  },
  {
    slug: 'from-denton-to-the-nations',
    title: 'From Denton to the nations: preparing for a first vision trip',
    authorSlug: 'denton-team',
    date: '2026-06-19',
    categories: ["God's Mission", 'Developing Leaders'],
    image: { src: 'aerial-city', alt: 'An aerial view of a dense city neighborhood', credit },
    excerpt:
      'A vision trip is not a mission trip with better branding. It is ten days of looking, listening and praying so you can discern a longer obedience. Here is how to prepare well.',
    body: `A vision trip is short on purpose. You are not going to build anything or run a program. You are going to see a movement up close, pray on the ground among people who have never heard, and come home with a clearer sense of whether God is calling you to more.

## Prepare your heart before your bags

- **Settle the basics.** If you are not already sharing the gospel in Denton, a flight will not change that. Start here first.
- **Learn the story.** Read everything available about the people you will visit. Learn ten phrases in their language.
- **Build your prayer team.** Ten people who will pray daily while you are gone are worth more than any amount of fundraising.

## What to expect on the ground

Long days. Hard travel. Conversations through translators that leave you humbled by how simply the gospel can be shared. Meetings with local believers who are doing far more with far less than you have ever seen. Expect to be quiet a lot.

## Coming home well

The most important part of a vision trip happens after you land. Debrief with your coach within a week. Write down what you saw, what you felt, and what you sensed God saying. Then decide on one next step: a longer trip, language study, a support-raising plan, or a renewed commitment to the field you already live in.

*Sample article for layout review. No trip dates or partners are confirmed.*`,
    seo: {},
    published: true,
    status: 'demo',
  },
];

/** Sample MTC details so the layout of confirmed-fact sections can be reviewed. */
export const demoMtcFormat: Partial<MtcProgram['format']> &
  Partial<Pick<MtcProgram, 'accommodation' | 'cost' | 'financialSupport' | 'apply'>> = {
  // Dates, duration, location, cost and the enrollment link are now confirmed in seed.ts, so only
  // the remaining unconfirmed facts carry sample values here.
  residential: 'Residential program: participants live in Denton for the length of the residency.',
  accommodation: 'Housing and meal arrangements will be confirmed with each resident (sample).',
  financialSupport: 'Residents raise personal support; coaching is provided (sample).',
  apply: null,
};
