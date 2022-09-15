import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-around shadow py-4">
        <div className="flex justify-between gap-4">
          <div>
            <Link to="home"> Home</Link>
          </div>
          <div>
            <Link to="about"> About</Link>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div>
            <Link to="home">Github</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
