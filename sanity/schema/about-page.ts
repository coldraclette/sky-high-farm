export const aboutPage = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'headerImage',
      title: 'Header Image',
      description:
        'Big image for the header. In the frontend it takes about 80vh.',
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
    {
      name: 'pageTitle',
      title: 'Page Title',
      description: 'The title of the page.',
      type: 'string',
    },
    {
      name: 'titlePosition',
      title: 'Title Position',
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
      description:
        'A place for lots of text. Use blocks for separate paragraphs or different types of content.',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'timeline',
      title: 'Timeline',
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
      description: 'A text block to end the about page.',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
