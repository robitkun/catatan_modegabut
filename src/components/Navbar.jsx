
const Navbar = ({ value, onChangeKeyword }) => {
  return (
    <nav className="navbar">
      <h1>KyuJayNotes</h1>
      <input
        type="text"
        placeholder="Cari catatan.."
        value={value}
        onChange={(e) => onChangeKeyword(e)}
      />
    </nav>
  );
};

export default Navbar;
