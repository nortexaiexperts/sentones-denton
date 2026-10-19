import {defineField} from 'sanity'

/** An image with required alt text, used everywhere a photo appears on the website. */
export const imageWithAlt = (name = 'image', title = 'Image', required = true) =>
  defineField({
    name,
    title,
    type: 'image',
    options: {hotspot: true},
    description:
      'A landscape photo works best (at least 1600 pixels wide). Drag the circle to choose the part of the photo that must always stay visible.',
    validation: (rule) => (required ? rule.required() : rule),
    fields: [
      defineField({
        name: 'alt',
        title: 'Describe the photo',
        type: 'string',
        description:
          'One short sentence for people who cannot see the image, e.g. "Students praying together by a fountain". Required.',
        validation: (rule) => rule.required().max(160),
      }),
    ],
  })

/** A web address field that accepts https links and in-site links like /events/. */
export const linkUrl = (name: string, title: string, description: string) =>
  defineField({
    name,
    title,
    type: 'url',
    description,
    validation: (rule) => rule.uri({scheme: ['https', 'http', 'mailto'], allowRelative: true}),
  })

/** Simple rich text: paragraphs, bold, italic and links. */
export const simpleRichText = (name: string, title: string, description: string) =>
  defineField({
    name,
    title,
    type: 'array',
    description,
    of: [
      {
        type: 'block',
        styles: [{title: 'Paragraph', value: 'normal'}],
        lists: [{title: 'Bullet list', value: 'bullet'}],
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
              fields: [{name: 'href', type: 'url', title: 'Address', validation: (r) => r.uri({scheme: ['https', 'http', 'mailto'], allowRelative: true})}],
            },
          ],
        },
      },
    ],
  })
