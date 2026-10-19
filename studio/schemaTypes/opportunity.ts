import {EarthGlobeIcon} from '@sanity/icons/EarthGlobe'
import {defineField, defineType} from 'sanity'
import {imageWithAlt} from './fields'

const SCOPES = [
  {title: 'Local', value: 'local'},
  {title: 'Regional', value: 'regional'},
  {title: 'International', value: 'international'},
]
const STATUSES = [
  {title: 'Open: accepting people now', value: 'open'},
  {title: 'Upcoming: coming soon', value: 'upcoming'},
  {title: 'Closed', value: 'closed'},
]

export const opportunity = defineType({
  name: 'opportunity',
  title: 'Deployment opportunity',
  type: 'document',
  icon: EarthGlobeIcon,
  description: 'A place or team people can be sent to, shown on the Deployment Opportunities page.',
  groups: [
    {name: 'basics', title: 'Basics', default: true},
    {name: 'details', title: 'Details'},
  ],
  fields: [
    defineField({name: 'title', title: 'Name', type: 'string', group: 'basics', validation: (r) => r.required().max(90)}),
    defineField({
      name: 'slug',
      title: 'Web address',
      type: 'slug',
      group: 'basics',
      description: 'Click "Generate".',
      options: {source: 'title', maxLength: 80},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      group: 'basics',
      description: 'E.g. "Denton, Texas" or "South Asia". Keep sensitive locations general.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'scope',
      title: 'Scope',
      type: 'string',
      group: 'basics',
      description: 'Used for the filter buttons on the page.',
      options: {list: SCOPES, layout: 'radio', direction: 'horizontal'},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'availability',
      title: 'Status',
      type: 'string',
      group: 'basics',
      options: {list: STATUSES, layout: 'radio'},
      initialValue: 'open',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 3,
      group: 'basics',
      description: 'Two or three sentences shown on the card.',
      validation: (r) => r.required().max(400),
    }),
    {...imageWithAlt('image', 'Photo'), group: 'basics'},
    defineField({name: 'dates', title: 'Dates', type: 'string', group: 'details', description: 'Optional, e.g. "June 2027" or "Ongoing".'}),
    defineField({name: 'duration', title: 'Length', type: 'string', group: 'details', description: 'Optional, e.g. "10 days" or "One semester".'}),
    defineField({name: 'purpose', title: 'Purpose', type: 'array', of: [{type: 'string'}], group: 'details', description: 'Optional bullet points: why this opportunity exists.'}),
    defineField({name: 'requirements', title: 'Requirements', type: 'array', of: [{type: 'string'}], group: 'details', description: 'Optional bullet points.'}),
    defineField({name: 'preparation', title: 'Preparation', type: 'array', of: [{type: 'string'}], group: 'details', description: 'Optional bullet points.'}),
    defineField({name: 'partner', title: 'Partner organization', type: 'string', group: 'details', description: 'Optional. Only if you are happy to name them publicly.'}),
    defineField({name: 'cost', title: 'Cost', type: 'string', group: 'details', description: 'Optional, e.g. "Travel costs only".'}),
    defineField({name: 'applyLabel', title: 'Button text', type: 'string', group: 'details', initialValue: 'Ask about this opportunity'}),
    defineField({
      name: 'applyUrl',
      title: 'Button link',
      type: 'url',
      group: 'details',
      description: 'Leave as /resources/#questions to send people to the contact form, or paste an application link.',
      initialValue: '/resources/#questions',
      validation: (r) => r.uri({scheme: ['https', 'http', 'mailto'], allowRelative: true}),
    }),
  ],
  preview: {
    select: {title: 'title', region: 'region', availability: 'availability', media: 'image'},
    prepare: ({title, region, availability, media}) => ({
      title,
      subtitle: [region, availability && availability[0].toUpperCase() + availability.slice(1)].filter(Boolean).join(' · '),
      media,
    }),
  },
})
