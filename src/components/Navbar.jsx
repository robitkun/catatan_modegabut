import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>
        <Link className="a" to="/">
          NotesApp
        </Link>
      </h3>

      <h3>
        <Link className="a" to="/archived">
          Arsip
        </Link>
      </h3>
    </nav>
  );
};

export default Navbar;
