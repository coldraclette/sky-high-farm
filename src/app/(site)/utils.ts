import { buildFileUrl, parseAssetId } from '@sanity/asset-utils';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const returnVideoUrl = (video: any) => {
  const id = video.asset._ref;
  return buildFileUrl(parseAssetId(id), {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
  });
};

/**
 * Tailwind CSS classnames generator
 *
 * @param inputs - Classnames to be merged
 * @returns Tailwind CSS classnames
 *
 * @example
 * ```tsx
 * import { composeClassNames } from 'lib/utils';
 *
 * const className = composeClassNames('text-red-500', 'bg-blue-500');
 * ```
 */
export function composeClassNames(...inputs: any) {
  return twMerge(clsx(inputs));
}
