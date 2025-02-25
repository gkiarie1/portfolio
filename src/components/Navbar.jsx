import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/devicon.png" alt="devicon"/>
        <span className="text-xl font-bold">Kiarie</span>
      </div>

      <div className="nav-links">
        <Link to="/" className="hover:text-black">Home</Link>
        <Link to="/about" className="hover:text-black">About</Link>
        <Link to="/projects" className="hover:text-black">Projects</Link>
        <Link to="/resume" className="hover:text-black">Resume</Link>
      </div>
    </nav>
  );
};

export default Navbar;
