export const grant = {
  name: 'grant',
  title: 'Grant Recipient and Committee',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'The name of the grant recipient or committee.',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        slugify: (input: any) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .slice(0, 200),
      },
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      description:
        'Additional information about the grant recipient or committee.',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Biography',
      description:
        'A detailed text block about the grant recipient or committee.',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Image',
      description: 'The image of the grant recipient or committee.',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
        {
          name: 'credit',
          type: 'string',
          title: 'Credit',
        },
      ],
    },
  ],
};
