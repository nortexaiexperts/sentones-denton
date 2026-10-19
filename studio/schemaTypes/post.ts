import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'
import {imageWithAlt} from './fields'

export const BLOG_CATEGORIES = [
  'Calling',
  'Church Formation',
  'Developing Leaders',
  'Discipleship',
  'Engaging the Lost',
  "God's Mission",
  'Sharing the Gospel',
]

export const post = defineType({
  name: 'post',
  title: 'Blog post',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'Search & sharing'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().max(110),
    }),
    defineField({
      name: 'slug',
      title: 'Web address',
      type: 'slug',
      group: 'content',
      description: 'Click "Generate". Becomes sentonesdenton.org/blog/your-title/',
      options: {source: 'title', maxLength: 90},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      group: 'content',
      description: 'Pick an author, or create one under "Authors" first.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Publish date',
      type: 'date',
      group: 'content',
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      group: 'content',
      of: [{type: 'string'}],
      options: {list: BLOG_CATEGORIES.map((c) => ({title: c, value: c})), layout: 'grid'},
      description: 'Pick one or more. Used for the filter buttons on the Blog page.',
      validation: (rule) => rule.required().min(1),
    }),
    {...imageWithAlt('image', 'Main image'), group: 'content'},
    defineField({
      name: 'imageCaption',
      title: 'Image caption',
      type: 'string',
      group: 'content',
      description: 'Optional. Shown under the image.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Two sentences that make people want to read. Shown on the Blog page.',
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: 'body',
      title: 'Article',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Paragraph', value: 'normal'},
            {title: 'Heading', value: 'h2'},
            {title: 'Subheading', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet list', value: 'bullet'},
            {title: 'Numbered list', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Address',
                    validation: (r) => r.uri({scheme: ['https', 'http', 'mailto'], allowRelative: true}),
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          title: 'Image',
          options: {hotspot: true},
          fields: [
            {name: 'alt', type: 'string', title: 'Describe the photo', validation: (r) => r.required()},
            {name: 'caption', type: 'string', title: 'Caption (optional)'},
          ],
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'Title for Google and social sharing',
      type: 'string',
      group: 'seo',
      description: 'Optional. Leave empty to use the post title.',
      validation: (rule) => rule.max(70),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Description for Google and social sharing',
      type: 'text',
      rows: 2,
      group: 'seo',
      description: 'Optional. Leave empty to use the excerpt.',
      validation: (rule) => rule.max(160),
    }),
  ],
  orderings: [{title: 'Newest first', name: 'dateDesc', by: [{field: 'date', direction: 'desc'}]}],
  preview: {
    select: {title: 'title', date: 'date', author: 'author.name', media: 'image'},
    prepare: ({title, date, author, media}) => ({title, subtitle: [date, author].filter(Boolean).join(' · '), media}),
  },
})
