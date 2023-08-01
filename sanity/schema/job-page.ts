export const jobPage = {
  name: 'jobPage',
  title: 'Job Page',
  type: 'document',
  fields: [
    {
      name: 'noJobOpeningsText',
      title: 'No Job Openings Text',
      type: 'string',
      description: 'Will be shown before newsletter text, when no openings',
    },
    {
      name: 'jobOpeningsText',
      title: 'Job Openings Text',
      type: 'string',
      description:
        'Will be shown before newsletter text, when there are openings',
    },
    {
      name: 'singUpText',
      title: 'Sign Up Text',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Will include the newsletter sign up link and text',
    },
    {
      name: 'jobOpenings',
      title: 'Job Openings',
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
  ],
};
