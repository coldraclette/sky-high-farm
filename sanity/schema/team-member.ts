export const teamMember = {
  name: 'teamMember',
  title: 'Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'The name of the team member.',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      description: 'The job title of the team member.',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Biography',
      description: 'A detailed text block about the team member.',
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
      ],
    },
  ],
};
