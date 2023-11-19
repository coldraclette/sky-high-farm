import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: Image, width?: number) => {
  if (width) {
    return imageBuilder
      ?.image(source)
      .width(width)
      .auto('format')
      .fit('max')
      .url();
  }
  return imageBuilder?.image(source).auto('format').fit('max').url();
};

export const urlForImageBlur = (source: Image) => {
  return imageBuilder?.image(source).width(10).height(10).blur(50).url();
};
