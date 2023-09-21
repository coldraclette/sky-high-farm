export const volunteerPage = {
  name: 'volunteerPage',
  title: 'Volunteer Page',
  groups: [
    {
      name: 'volunteerPageGroup',
      title: 'Volunteer Page fields',
      default: true,
    },
    { name: 'seoGroup', title: 'SEO' },
  ],
  type: 'document',
  fields: [
    {
      name: 'showPageTitle',
      title: 'Show Page Title',
      type: 'boolean',
      group: 'volunteerPageGroup',
      defaultValue: false,
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      group: 'volunteerPageGroup',
    },
    {
      name: 'textContent',
      title: 'Text Content',
      description: 'Add some text to the contact page. You can use links.',
      group: 'volunteerPageGroup',
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
