export const eventsPage = {
  name: 'eventsPage',
  title: 'Events Page',
  type: 'document',
  groups: [
    {
      name: 'eventsPageGroup',
      title: 'Events Page fields',
      default: true,
    },
    { name: 'seoGroup', title: 'SEO' },
  ],
  fields: [
    {
      name: 'headerImage',
      title: 'Header Image',
      description:
        'Big image for the header. In the frontend it takes about 80vh.',
      group: 'eventsPageGroup',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
        {
          name: 'credit',
          type: 'string',
          title: 'Credit',
        },
      ],
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      description: 'The title of the page.',
      group: 'eventsPageGroup',
      type: 'string',
    },
    {
      name: 'titlePosition',
      title: 'Title Position',
      group: 'eventsPageGroup',
      description:
        'Position of the title on the image. It can be under the image, in the middle of the image, or at the bottom left of the image.',
      type: 'string',
      options: {
        list: [
          { title: 'Under the image', value: 'under' },
          { title: 'In the middle of the image', value: 'middle' },
          { title: 'At the bottom left of the image', value: 'bottomLeft' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'textContent',
      title: 'Text Content',
      description: 'A place for lots of text.',
      group: 'eventsPageGroup',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'showFourColumns',
      title: 'Show Four Columns',
      description:
        'If checked, then we show 4 columns. If unchecked, then we show 3 columns.',
      group: 'eventsPageGroup',
      type: 'boolean',
    },
    {
      name: 'projects',
      title: 'Events',
      type: 'array',
      description: 'Pick the events you want to show on this page.',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'event',
            },
          ],
        },
      ],
      group: 'eventsPageGroup',
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
};
