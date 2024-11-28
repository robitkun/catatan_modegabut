/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
const Navbar = ({ value, onChangeKeyword }) => {
  return (
    <nav className="navbar">
      <h3>
        <Link to="/">NotesApp</Link>
      </h3>
      <input
        type="text"
        placeholder="Cari catatan..."
        value={value}
        onChange={(e) => onChangeKeyword(e)}
      />
    </nav>
  );
};

export default Navbar;
