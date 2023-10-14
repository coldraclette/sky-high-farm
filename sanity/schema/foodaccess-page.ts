export const foodaccessPage = {
  name: 'foodaccessPage',
  title: 'Food Access Page',
  type: 'document',
  groups: [
    {
      name: 'foodaccessPageGroup',
      title: 'Food Access Page fields',
      default: true,
    },
    { name: 'seoGroup', title: 'SEO' },
  ],
  fields: [
    {
      name: 'showPageTitle',
      title: 'Show Page Title',
      type: 'boolean',
      group: 'foodaccessPageGroup',
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      group: 'foodaccessPageGroup',
    },
    {
      name: 'textContent',
      title: 'Text Content',
      description: 'Add some text to the contact page. You can use links.',
      group: 'foodaccessPageGroup',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'showFourColumns',
      title: 'Show Four Columns',
      description:
        'If checked, then we show 4 columns. If unchecked, then we show 3 columns.',
      group: 'foodaccessPageGroup',
      type: 'boolean',
    },
    {
      name: 'organizations',
      title: 'Organizations',
      description: 'Array of organizations in this section.',
      group: 'foodaccessPageGroup',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'organizations' }],
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
};
