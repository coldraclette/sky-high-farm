export const programmingPage = {
  name: 'programmingPage',
  title: 'Programming Page',
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
      name: 'specialProjectsTitle',
      title: 'Special Projects Title',
      description: 'The title of the special projects.',
      type: 'string',
    },
    {
      name: 'specialProjectsTextContent',
      title: 'Special projects text tontent',
      description:
        'A place for lots of text. Use blocks for separate paragraphs or different types of content.',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
