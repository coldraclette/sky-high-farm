export const grantsPage = {
  name: 'grantsPage',
  title: 'Grants Page',
  type: 'document',
  fields: [
    {
      name: 'textContent',
      title: 'Text Content',
      description: 'Add some text to the contact page. You can use links.',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'grantSections',
      title: 'Grant Sections',
      description:
        'Sections of grant recipients or committee. You can create multiple sections if needed.',
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
              description: 'Array of grant recipient or committee in this section.',
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
  ],
};
