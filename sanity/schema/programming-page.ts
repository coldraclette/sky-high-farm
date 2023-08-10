export const programmingPage = {
  name: 'programmingPage',
  title: 'Programming Page',
  type: 'document',
  groups: [
    {
      name: 'programmingPageGroup',
      title: 'Programming Page fields',
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
      group: 'programmingPageGroup',
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
      group: 'programmingPageGroup',
      type: 'string',
    },
    {
      name: 'titlePosition',
      title: 'Title Position',
      group: 'programmingPageGroup',
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
      group: 'programmingPageGroup',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'specialProjectsTitle',
      title: 'Special Projects Title',
      description: 'The title of the special projects.',
      group: 'programmingPageGroup',
      type: 'string',
    },
    {
      name: 'specialProjectsTextContent',
      title: 'Special projects text tontent',
      description:
        'A place for lots of text. Use blocks for separate paragraphs or different types of content.',
      group: 'programmingPageGroup',
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
