import BottomOverlay from '../components/BottomOverlay';
import Logo from '../components/Navigation/Logo';
import Menu from '../components/Navigation/Menu';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex h-screen w-full flex-col justify-between">
        <main className="h-full w-full">
          <section className="h-full w-full pt-48">{children}</section>
        </main>
      </div>
      <BottomOverlay />
    </>
  );
}