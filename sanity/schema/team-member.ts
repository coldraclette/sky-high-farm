export const teamMember = {
  name: 'teamMember',
  title: 'Members',
  type: 'document',
  groups: [
    {
      name: 'teamMemberGroup',
      title: 'Team Member fields',
      default: true,
    },
    { name: 'seoGroup', title: 'SEO' },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'The name of the team member.',
      group: 'teamMemberGroup',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'teamMemberGroup',
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
      description: 'The job title of the team member.',
      group: 'teamMemberGroup',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Biography',
      description: 'A detailed text block about the team member.',
      group: 'teamMemberGroup',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Image',
      group: 'teamMemberGroup',
      description: 'The image of the team member.',
      type: 'image',
      fields: [
        {
          name: 'mobilePosition',
          type: 'string',
          description:
            "This option is for the grid display. On mobile the image can be positioned 'top', 'center', or 'bottom'.",
          options: {
            list: [
              { title: 'Show top', value: 'top' },
              { title: 'Show center', value: 'center' },
              { title: 'Show bottom', value: 'bottom' },
            ],
            layout: 'radio',
            direction: 'horizontal',
          },
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seoGroup',
      description: 'This is the description that appears on search engines.',
    },
  ],
};
