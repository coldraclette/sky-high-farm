export const programmingProject = {
  name: 'programmingProject',
  title: 'Programming Projects',
  type: 'document',
  groups: [
    {
      name: 'programmingGroup',
      title: 'Programming Group fields',
      default: true,
    },
    { name: 'seoGroup', title: 'SEO' },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This is the title of the project.',
      group: 'programmingGroup',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'programmingGroup',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input: any) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .slice(0, 200),
      },
    },
    {
      title: 'Project image',
      name: 'projectImage',
      type: 'image',
      group: 'programmingGroup',
      description:
        'This is the image that appears on the overview and is also the first image in the project.',
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
    {
      name: 'subtitleGreen',
      title: 'Subtitle Green',
      group: 'programmingGroup',
      type: 'string',
      description: 'This is the green text that appears under the title.',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      group: 'programmingGroup',
      validation: (Rule: any) => Rule.required(),
      description:
        'This is the date of the project. Sorting will be done by this field. If the flexible date field is filled out, this field will be ignored on the frontend. If the date should be for example 2021 - 2022 then write 2022-01-01.',
    },
    {
      name: 'flexibleDate',
      title: 'Flexible Date',
      type: 'string',
      group: 'programmingGroup',
      description:
        'Use this field for flexible date formats, e.g. "2021 - 2022" or "May 2021". If this field is filled out, the date field will be ignored on the frontend. If this field is empty, the date field will be used. Sorting will be done always by the date field.',
    },
    {
      name: 'projectInfo',
      title: 'Project Info',
      type: 'array',
      group: 'programmingGroup',
      of: [{ type: 'block', styles: [{ title: 'Normal', value: 'normal' }] }],
      description:
        'This is the information that appears under the title in the detail view. E.g. July 29, 2022 with Forge Project Led by Jane Doe Photos: John Doe',
    },
    {
      name: 'textContent',
      title: 'Text Content',
      type: 'array',
      group: 'programmingGroup',
      of: [{ type: 'block', styles: [{ title: 'Normal', value: 'normal' }] }],
      description: 'This is the text that appears in the detail view.',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      group: 'programmingGroup',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'imageStyle',
              title: 'Image Style',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'Full Width',
                    value: 'fullWidth',
                  },
                  { title: 'Portrait', value: 'portrait' },
                ],
                layout: 'radio',
                direction: 'horizontal',
                initialValue: 'fullWidth',
              },
            },
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
      // TODO: FIX THIS PREVIEW
      preview: {
        select: {
          image: 'image',
          credit: 'image.credit',
        },
        prepare({ image, credit }: any) {
          return {
            title: credit ? `Image credit: ${credit}` : 'No credit',
            media: image,
          };
        },
      },
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
