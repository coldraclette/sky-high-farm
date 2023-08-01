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
  ],
};
