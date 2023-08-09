import BottomOverlay from '../components/BottomOverlay';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" lg:mb-[78px]">
      <section>{children}</section>
      <BottomOverlay />
    </div>
  );
}
