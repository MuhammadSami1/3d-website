import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <Link
          to="/"
          className="bg-white h-10 w-10 flex justify-center items-center rounded-lg shadow-md font-bold px-7 "
        >
          <p className="blue-gradient_text">Sami</p>
        </Link>
        <nav className="flex gap-7 text-lg font-medium">
          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link to="/projects" className="hover:text-blue-500">
            Projects
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
