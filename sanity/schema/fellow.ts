export const fellow = {
    name: 'fellow',
    title: 'Fellow',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        description: 'The name of the fellow.',
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
        description: 'The job title of the fellow.',
        type: 'string',
      },
      {
        name: 'bio',
        title: 'Biography',
        description: 'A detailed text block about the fellow.',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'image',
        title: 'Image',
        description: 'The image of the team fellow.',
        type: 'image',
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'Important for SEO and accessiblity.',
          },
        ],
      },
    ],
  };
  