import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex justify-between uppercase">
      <h2>The Planets</h2>
      <Navigation />
    </header>
  );
};

export default Header;
