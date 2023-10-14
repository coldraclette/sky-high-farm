export const teamPage = {
  name: 'teamPage',
  title: 'Team Page',
  type: 'document',
  groups: [
    {
      name: 'teamPageGroup',
      title: 'Team Page fields',
      default: true,
    },
    { name: 'seoGroup', title: 'SEO' },
  ],
  fields: [
    {
      name: 'showPageTitle',
      title: 'Show Page Title',
      type: 'boolean',
      group: 'teamPageGroup',
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      group: 'teamPageGroup',
    },
    {
      name: 'showFourColumns',
      title: 'Show Four Columns',
      description:
        'If checked, then we show 4 columns. If unchecked, then we show 3 columns.',
      group: 'teamPageGroup',
      type: 'boolean',
    },
    {
      name: 'staffSections',
      title: 'Staff Sections',
      description:
        'Sections of staff members. You can create multiple sections if needed.',
      group: 'teamPageGroup',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Staff Section',
          fields: [
            {
              name: 'sectionTitle',
              title: 'Section Title',
              description: 'The title of this staff section.',
              type: 'string',
            },
            {
              name: 'members',
              title: 'Staff Members',
              description: 'Array of staff members in this section.',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'teamMember' }],
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
