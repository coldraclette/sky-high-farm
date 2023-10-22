export const supportPage = {
  name: 'supportPage',
  title: 'Support Page',
  type: 'document',
  groups: [
    {
      name: 'supportPageGroup',
      title: 'Support Page fields',
      default: true,
    },
    { name: 'seoGroup', title: 'SEO' },
  ],
  fields: [
    {
      name: 'textContent',
      title: 'Text Content',
      type: 'array',
      group: 'supportPageGroup',
      of: [{ type: 'block' }],
    },
    {
      name: 'link',
      title: 'Link',
      group: 'supportPageGroup',
      type: 'url',
    },
    {
      name: 'donateButtonImage',
      title: 'Donate Button Image',
      type: 'image',
      group: 'supportPageGroup',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      group: 'supportPageGroup',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seoGroup',
      description: 'This is the title that appears in the browser tab.',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seoGroup',
      description: 'This is the description that appears on search engines.',
    },
    {
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
      group: 'seoGroup',
      description:
        'This is the image that appears in the browser tab when the page is shared.',
    },
  ],
  preview: {
    select: {
      title: 'textBlock',
      media: 'backgroundImage',
    },
  },
};
