export const organizations = {
  name: 'organizations',
  title: 'Organization',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'The name of the organization.',
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
      name: 'orgInfo',
      title: 'orgInfo',
      description: 'Organization info on the left side.',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'text',
      title: 'Text',
      description: 'A detailed text block about the organization.',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Image',
      description: 'The image of the team member.',
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
