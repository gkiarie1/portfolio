import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/devicon.png" alt="devicon"/>
        <span className="text-xl font-bold">Kiarie</span>
      </div>

      <div className="nav-links">
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/projects" >Projects</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </nav>
  );
};

export default Navbar;
