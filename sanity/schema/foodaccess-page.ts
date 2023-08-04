export const foodaccessPage = {
  name: 'foodaccessPage',
  title: 'Food Access Page',
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
      name: 'organizations',
      title: 'Organizations',
      description: 'Array of organizations in this section.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'organizations' }],
        },
      ],
    },
  ],
};
