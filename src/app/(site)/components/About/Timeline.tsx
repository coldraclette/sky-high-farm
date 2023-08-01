import TimelineItem from './TimelineItem';

interface TimelineProps {
  timeline: {
    timelineTitle: string;
    timelineItems: TimelineItem[];
  };
}

interface TimelineItem {
  _key: string;
  image: any;
  year: string;
  description: string;
}

export default function Timeline({ timeline }: TimelineProps) {
  const { timelineTitle, timelineItems } = timeline;
  return (
    <div className="mt-8 md:mt-20">
      <h2 className="text-size-1-bold mb-4 text-center text-green md:mb-8">
        {timelineTitle}
      </h2>

      {timelineItems.map((item: TimelineItem) => (
        <TimelineItem key={item._key} item={item} />
      ))}
    </div>
  );
}
