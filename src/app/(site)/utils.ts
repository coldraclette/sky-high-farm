import { buildFileUrl, parseAssetId } from "@sanity/asset-utils";

export const returnVideoUrl = (video: any) => {
  const id = video.asset._ref;
  return buildFileUrl(parseAssetId(id), {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
  });
};
