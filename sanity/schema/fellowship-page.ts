export const fellowshipPage = {
  name: 'fellowshipPage',
  title: 'Fellowship Page',
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
      name: "fellowSections",
      title: "Fellow Sections",
      description: "Sections of fellows. You can create multiple sections if needed.",
      type: "array",
      of: [
        {
          type: "object",
          title: "Fellows Section",
          fields: [
            {
              name: "sectionTitle",
              title: "Section Title",
              description: "The title of this fellowship section.",
              type: "string",
            },
            {
              name: "members",
              title: "Fellowship Members",
              description: "Array of fellowship members in this section.",
              type: "array",
              of: [
                {
                  type: "reference",
                  to: [{ type: "fellow" }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
