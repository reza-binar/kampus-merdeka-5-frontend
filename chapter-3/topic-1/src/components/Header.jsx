import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/people-comparison">Comparison</Link>
    </nav>
  );
};

export default Header;
