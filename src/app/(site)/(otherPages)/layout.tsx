import BottomOverlay from '../components/BottomOverlay';
import Footer from '../components/Navigation/Footer';
import Logo from '../components/Navigation/Logo';
import Menu from '../components/Navigation/Menu';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Menu />
        <Logo />
      </header>
      <div className="relative flex min-h-screen w-full flex-col justify-between">
        <main className="h-full w-full">
          <section className="h-full w-full pt-48">{children}</section>
        </main>
        <Footer />
      </div>
      <BottomOverlay />
    </>
  );
}
