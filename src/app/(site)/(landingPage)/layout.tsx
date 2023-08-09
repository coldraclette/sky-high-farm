import Footer from '../components/Navigation/Footer';
import Logo from '../components/Navigation/Logo';
import Menu from '../components/Navigation/Menu';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Menu color="text-white" isLandingPage={true} />
      <Logo />
      {children}
      <Footer textColor="text-white" fixed={true} />
    </div>
  );
}
