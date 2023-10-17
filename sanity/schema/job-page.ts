export const jobPage = {
  name: 'jobPage',
  title: 'Job Page',
  type: 'document',
  groups: [
    {
      name: 'jobPageGroup',
      title: 'Job Page fields',
      default: true,
    },
    { name: 'seoGroup', title: 'SEO' },
  ],
  fields: [
    {
      name: 'showPageTitle',
      title: 'Show Page Title',
      type: 'boolean',
      group: 'jobPageGroup',
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      group: 'jobPageGroup',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      description: 'Full bleed background image',
      group: 'jobPageGroup',
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
    {
      name: 'noJobOpeningsText',
      title: 'No Job Openings Text',
      type: 'string',
      group: 'jobPageGroup',
      description: 'Will be shown before newsletter text, when no openings',
    },
    {
      name: 'jobOpeningsText',
      title: 'Job Openings Text',
      type: 'string',
      group: 'jobPageGroup',
      description:
        'Will be shown before newsletter text, when there are openings',
    },
    {
      name: 'singUpText',
      title: 'Sign Up Text',
      type: 'array',
      group: 'jobPageGroup',
      of: [{ type: 'block' }],
      description: 'Will include the newsletter sign up link and text',
    },
    {
      name: 'jobOpenings',
      title: 'Job Openings',
      group: 'jobPageGroup',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Job',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Job Title',
            },
            {
              name: 'additionalInfo',
              type: 'string',
              title: 'Additional Info',
              description: 'Additional information, e.g. "Full Time, On-Site"',
            },
            {
              name: 'description',
              type: 'array',
              title: 'Job Description',
              of: [{ type: 'block' }],
            },
          ],
        },
      ],
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seoGroup',
      description: 'This is the title that appears in the browser tab.',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seoGroup',
      description: 'This is the description that appears on search engines.',
    },
    {
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
      group: 'seoGroup',
      description:
        'This is the image that appears in the browser tab when the page is shared.',
    },
  ],
};
