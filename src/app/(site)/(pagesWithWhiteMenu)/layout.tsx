import BottomOverlay from '../components/BottomOverlay';
import Footer from '../components/Navigation/Footer';
import Logo from '../components/Navigation/Logo';
import Menu from '../components/Navigation/Menu';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu color="text-white" />
      <Logo />
      <section className="h-full w-full">{children}</section>
      <div className="absolute bottom-0">
        <Footer textColor="text-white" />
      </div>
    </>
  );
}
