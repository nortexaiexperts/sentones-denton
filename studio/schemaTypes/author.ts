import {UserIcon} from '@sanity/icons/User'
import {defineField, defineType} from 'sanity'

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  description: 'A person who writes blog posts. Shown in the "About the author" box.',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      title: 'Web address',
      type: 'slug',
      description: 'Click "Generate".',
      options: {source: 'name', maxLength: 60},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'role', title: 'Role', type: 'string', description: 'Optional, e.g. "Field coordinator".'}),
    defineField({
      name: 'bio',
      title: 'Short bio',
      type: 'text',
      rows: 3,
      description: 'Two or three sentences.',
      validation: (rule) => rule.max(500),
    }),
  ],
  preview: {select: {title: 'name', subtitle: 'role'}},
})
