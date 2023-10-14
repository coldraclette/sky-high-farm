export const grantsPage = {
  name: 'grantsPage',
  title: 'Grants Page',
  type: 'document',
  groups: [
    {
      name: 'grantsPageGroup',
      title: 'Grants Page fields',
      default: true,
    },
    { name: 'seoGroup', title: 'SEO' },
  ],
  fields: [
    {
      name: 'showPageTitle',
      title: 'Show Page Title',
      type: 'boolean',
      group: 'grantsPageGroup',
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      group: 'grantsPageGroup',
    },
    {
      name: 'textContent',
      title: 'Text Content',
      description: 'Add some text to the contact page. You can use links.',
      group: 'grantsPageGroup',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'showFourColumns',
      title: 'Show Four Columns',
      description:
        'If checked, then we show 4 columns. If unchecked, then we show 3 columns.',
      group: 'grantsPageGroup',
      type: 'boolean',
    },
    {
      name: 'grantSections',
      title: 'Grant Sections',
      description:
        'Sections of grant recipients or committee. You can create multiple sections if needed.',
      group: 'grantsPageGroup',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Grant Section',
          fields: [
            {
              name: 'sectionTitle',
              title: 'Section Title',
              description: 'The title of this grant section.',
              type: 'string',
            },
            {
              name: 'members',
              title: 'Grant Members',
              description:
                'Array of grant recipient or committee in this section.',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'grant' }],
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
