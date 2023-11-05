import { getLandingPageData } from '../../../../sanity/sanity.query';
import { VideoPlayer } from '../components/VideoPlayer';

export const revalidate = 3600;

export default async function Home() {
  const landingPageData = await getLandingPageData();
  const { backgroundVideo } = landingPageData;

  return (
    <div>
      <VideoPlayer video={backgroundVideo} />
    </div>
  );
}
