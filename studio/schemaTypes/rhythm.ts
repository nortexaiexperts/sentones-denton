import {SyncIcon} from '@sanity/icons/Sync'
import {defineField, defineType} from 'sanity'

export const rhythm = defineType({
  name: 'rhythm',
  title: 'Standing rhythm',
  type: 'document',
  icon: SyncIcon,
  description: 'A regular gathering that repeats (weekly or monthly), shown at the top of the Events page.',
  fields: [
    defineField({
      name: 'title',
      title: 'Name',
      type: 'string',
      description: 'E.g. "Denton County Strategy Meeting".',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'cadence',
      title: 'How often',
      type: 'string',
      description: 'E.g. "Second Thursday of each month" or "Every Tuesday".',
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'E.g. "9:00 – 11:00 AM". Optional.',
    }),
    defineField({
      name: 'online',
      title: 'This meets online',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'venueName',
      title: 'Where',
      type: 'string',
      description: 'E.g. "Zera Coffee & Events". For homes, write "Location shared on request".',
      hidden: ({document}) => Boolean(document?.online),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      initialValue: 'Denton, TX',
      hidden: ({document}) => Boolean(document?.online),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'One or two sentences about what happens and why.',
      validation: (rule) => rule.required().max(400),
    }),
    defineField({
      name: 'points',
      title: 'Bullet points',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Optional. Goals or what to expect, one per line.',
    }),
    defineField({
      name: 'audience',
      title: 'Who it’s for',
      type: 'string',
      description: 'E.g. "Open to all" or "Leaders and practitioners serving Denton County".',
    }),
    defineField({
      name: 'joinLabel',
      title: 'Join button text',
      type: 'string',
      initialValue: 'Ask to join',
    }),
    defineField({
      name: 'joinUrl',
      title: 'Join button link',
      type: 'url',
      description: 'Leave as /resources/#questions to send people to the contact form, or paste another link.',
      initialValue: '/resources/#questions',
      validation: (rule) => rule.uri({scheme: ['https', 'http', 'mailto'], allowRelative: true}),
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers show first (1, 2, 3…).',
      initialValue: 10,
    }),
  ],
  orderings: [{title: 'Display order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {
    select: {title: 'title', cadence: 'cadence', time: 'time'},
    prepare: ({title, cadence, time}) => ({title, subtitle: [cadence, time].filter(Boolean).join(' · ')}),
  },
})
