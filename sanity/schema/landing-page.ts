export const landingPage = {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  groups: [
    {
      name: 'landingPageGroup',
      title: 'Landing Page fields',
      default: true,
    },
    { name: 'seoGroup', title: 'SEO' },
  ],
  fields: [
    {
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'file',
      description:
        'This is the video that appears in the background of the landing page.',
      group: 'landingPageGroup',
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
