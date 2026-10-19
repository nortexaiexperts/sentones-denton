import {CalendarIcon} from '@sanity/icons/Calendar'
import {defineField, defineType} from 'sanity'
import {imageWithAlt, simpleRichText} from './fields'

const TYPES = [
  {title: 'Training', value: 'training'},
  {title: 'Mobilization', value: 'mobilization'},
  {title: 'Harvest', value: 'harvest'},
  {title: 'Worship', value: 'worship'},
]

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  description: 'A one-time event with a date (a training, a harvest push, a worship night).',
  groups: [
    {name: 'basics', title: 'Basics', default: true},
    {name: 'place', title: 'Where'},
    {name: 'details', title: 'Details'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Event name',
      type: 'string',
      group: 'basics',
      validation: (rule) => rule.required().max(90),
    }),
    defineField({
      name: 'slug',
      title: 'Web address',
      type: 'slug',
      group: 'basics',
      description: 'Click "Generate". This becomes the page address, e.g. sentonesdenton.org/events/harvest-push/',
      options: {source: 'title', maxLength: 80},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type of event',
      type: 'string',
      group: 'basics',
      description: 'Used for the filter buttons on the Events page.',
      options: {list: TYPES, layout: 'radio', direction: 'horizontal'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'start',
      title: 'Starts',
      type: 'datetime',
      group: 'basics',
      description: 'Enter the date and time in Central Time (Denton).',
      options: {timeStep: 15},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'end',
      title: 'Ends',
      type: 'datetime',
      group: 'basics',
      description: 'Optional. For multi-day events (like a harvest week) choose the last day.',
      options: {timeStep: 15},
      validation: (rule) =>
        rule.custom((end, context) => {
          const start = (context.document as {start?: string} | undefined)?.start
          if (end && start && new Date(end) <= new Date(start)) return 'The end must be after the start.'
          return true
        }),
    }),
    defineField({
      name: 'featured',
      title: 'Show on the home page',
      type: 'boolean',
      group: 'basics',
      description: 'The home page shows up to three upcoming events. Featured ones come first.',
      initialValue: true,
    }),
    defineField({
      name: 'online',
      title: 'This is an online event',
      type: 'boolean',
      group: 'place',
      initialValue: false,
    }),
    defineField({
      name: 'venueName',
      title: 'Venue name',
      type: 'string',
      group: 'place',
      description: 'E.g. "Zera Coffee & Events", or "Meeting point shared with registrants".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Street address',
      type: 'string',
      group: 'place',
      description: 'Optional. Leave empty for private homes.',
      hidden: ({document}) => Boolean(document?.online),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      group: 'place',
      initialValue: 'Denton, TX',
      hidden: ({document}) => Boolean(document?.online),
    }),
    {...imageWithAlt('image', 'Event image'), group: 'details'},
    defineField({
      name: 'summary',
      title: 'Short summary',
      type: 'text',
      rows: 3,
      group: 'details',
      description: 'One or two sentences shown in the event list.',
      validation: (rule) => rule.required().max(260),
    }),
    {
      ...simpleRichText('description', 'Full description', 'Shown on the event’s own page. Add the schedule, what to bring, who it is for.'),
      group: 'details',
    },
    defineField({
      name: 'registrationUrl',
      title: 'Registration link',
      type: 'url',
      group: 'details',
      description: 'Optional. Paste the Eventbrite (or other) link. Leave empty if no registration is needed.',
      validation: (rule) => rule.uri({scheme: ['https', 'http']}),
    }),
    defineField({
      name: 'registrationLabel',
      title: 'Registration button text',
      type: 'string',
      group: 'details',
      initialValue: 'Register on Eventbrite',
      hidden: ({document}) => !document?.registrationUrl,
    }),
    defineField({
      name: 'cost',
      title: 'Cost',
      type: 'string',
      group: 'details',
      description: 'Optional, e.g. "Free" or "$10 for materials". Leave empty to hide.',
    }),
  ],
  orderings: [
    {title: 'Date, soonest first', name: 'startAsc', by: [{field: 'start', direction: 'asc'}]},
    {title: 'Date, latest first', name: 'startDesc', by: [{field: 'start', direction: 'desc'}]},
  ],
  preview: {
    select: {title: 'title', start: 'start', type: 'type', media: 'image'},
    prepare({title, start, type, media}) {
      const date = start
        ? new Date(start).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago'})
        : 'No date yet'
      const label = TYPES.find((t) => t.value === type)?.title ?? ''
      return {title, subtitle: [date, label].filter(Boolean).join(' · '), media}
    },
  },
})
