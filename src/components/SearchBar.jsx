import PropTypes from 'prop-types';
const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Cari berdasarkan nama..."
      value={keyword}
      onChange={(e) => keywordChange(e.target.value)}
    />
  );
};
SearchBar.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};
export default SearchBar;
