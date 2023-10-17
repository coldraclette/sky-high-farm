export const contactPage = {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  groups: [
    {
      name: 'contactPageGroup',
      title: 'Contact Page fields',
      default: true,
    },
    { name: 'seoGroup', title: 'SEO' },
  ],
  fields: [
    {
      name: 'showPageTitle',
      title: 'Show Page Title',
      type: 'boolean',
      group: 'contactPageGroup',
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      group: 'contactPageGroup',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      description: 'Full bleed background image',
      group: 'contactPageGroup',
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
      name: 'textContent',
      title: 'Text Content',
      description: 'Add some text to the contact page. You can use links.',
      type: 'array',
      group: 'contactPageGroup',
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
