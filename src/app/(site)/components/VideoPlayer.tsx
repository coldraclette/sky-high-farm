'use client';

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export const VideoPlayer = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <ReactPlayer
        className="react-player absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-[5] md:scale-[4] lg:scale-[3] xl:scale-[2] 2xl:scale-150"
        url="https://vimeo.com/video/884349212"
        config={{
          vimeo: {
            playerOptions: {
              autoplay: true,
              controls: false,
              muted: true,
              loop: true,
              playsinline: true,
            },
          },
        }}
        playing
        loop
        muted
      />
    </div>
  );
};
