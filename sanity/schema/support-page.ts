export const supportPage = {
  name: 'supportPage',
  title: 'Support Page',
  type: 'document',
  fields: [
    {
      name: 'textContent',
      title: 'Text Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'textBlock',
      media: 'backgroundImage',
    },
  },
};
