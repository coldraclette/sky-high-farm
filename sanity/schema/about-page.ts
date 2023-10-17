export const aboutPage = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  groups: [
    {
      name: 'aboutPageGroup',
      title: 'About Page fields',
      default: true,
    },
    { name: 'seoGroup', title: 'SEO' },
  ],
  fields: [
    {
      name: 'headerImage',
      title: 'Background Image',
      description: 'Full bleed background image',
      group: 'aboutPageGroup',
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
      group: 'aboutPageGroup',
      type: 'string',
    },
    {
      name: 'titlePosition',
      title: 'Title Position',
      description:
        'Position of the title on the image. It can be under the image, in the middle of the image, or at the bottom left of the image.',
      group: 'aboutPageGroup',
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
      group: 'aboutPageGroup',
      description: 'A place for lots of text.',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'timeline',
      title: 'Timeline',
      group: 'aboutPageGroup',
      description:
        'The timeline section of the about page. It contains a title and a list of timeline items.',
      type: 'object',
      fields: [
        {
          name: 'timelineTitle',
          title: 'Timeline Title',
          description: 'The title of the timeline section.',
          type: 'string',
        },
        {
          name: 'timelineItems',
          title: 'Timeline Items',
          description:
            'A list of timeline items. Each item has a year, a text description, and an optional image.',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'year',
                  title: 'Year',
                  description: 'The year of this timeline item.',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  description: 'The description of this timeline item.',
                  type: 'text',
                },
                {
                  name: 'image',
                  title: 'Image',
                  description: 'An image to represent this timeline item.',
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
            },
          ],
        },
      ],
    },
    {
      name: 'endTextBlock',
      title: 'End Text Block',
      group: 'aboutPageGroup',
      description: 'A text block to end the about page.',
      type: 'array',
      of: [{ type: 'block' }],
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
