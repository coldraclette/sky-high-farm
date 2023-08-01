import Logo from '../components/Navigation/Logo';
import Menu from '../components/Navigation/Menu';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu />
      <Logo />
      <section>{children}</section>
    </>
  );
}
