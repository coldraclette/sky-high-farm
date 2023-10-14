export const fellowshipPage = {
  name: 'fellowshipPage',
  title: 'Fellowship Page',
  type: 'document',
  groups: [
    {
      name: 'fellowshipPageGroup',
      title: 'Fellowship Page fields',
      default: true,
    },
    { name: 'seoGroup', title: 'SEO' },
  ],
  fields: [
    {
      name: 'showPageTitle',
      title: 'Show Page Title',
      type: 'boolean',
      group: 'fellowshipPageGroup',
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      group: 'fellowshipPageGroup',
    },
    {
      name: 'textContent',
      title: 'Text Content',
      description: 'Add some text to the contact page. You can use links.',
      group: 'fellowshipPageGroup',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'showFourColumns',
      title: 'Show Four Columns',
      description:
        'If checked, then we show 4 columns. If unchecked, then we show 3 columns.',
      group: 'fellowshipPageGroup',
      type: 'boolean',
    },
    {
      name: 'fellowSections',
      title: 'Fellow Sections',
      description:
        'Sections of fellows. You can create multiple sections if needed.',
      group: 'fellowshipPageGroup',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Fellows Section',
          fields: [
            {
              name: 'sectionTitle',
              title: 'Section Title',
              description: 'The title of this fellowship section.',
              type: 'string',
            },
            {
              name: 'members',
              title: 'Fellowship Members',
              description: 'Array of fellowship members in this section.',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'fellow' }],
                },
              ],
            },
          ],
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
