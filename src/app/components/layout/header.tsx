import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="flex justify-between uppercase border-b-2 border-white/20 px-6 py-4">
      <h2 className="text-[28px] tracking-tighter font-medium">The Planets</h2>
      <Navigation />
    </header>
  );
};

export default Header;
