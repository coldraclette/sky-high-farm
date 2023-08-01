import MenuItem from './MenuItem';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 z-20 m-4 text-white md:text-xl">
      <ul className="flex gap-8">
        <MenuItem path="/contact" title="Contact" />
        <MenuItem
          path="https://skyhighfarmuniverse.com/"
          title="Sky High Farm Universe"
          external
        />
        <MenuItem path="/jobs" title="Jobs" />
        <MenuItem
          path="https://www.instagram.com/skyhighfarmhudsonvalley/?hl=en"
          title="Instagram"
          external
        />
      </ul>
    </footer>
  );
}
