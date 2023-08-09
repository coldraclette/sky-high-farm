import { returnVideoUrl } from '../utils';

interface VideoFile {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

interface VideoPlayerProps {
  video: VideoFile;
}

export const VideoPlayer = ({ video }: VideoPlayerProps) => {
  return (
    <video
      className="absolute top-0 h-screen w-screen object-cover"
      preload="auto"
      autoPlay
      muted
      loop
    >
      <source src={returnVideoUrl(video) + '#t=000.1'} type="video/mp4" />
    </video>
  );
};
