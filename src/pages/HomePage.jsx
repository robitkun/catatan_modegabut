import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../utils';
import CatatanList from '../components/CatatanList';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catatans: getActiveNotes(),
      keyword: props.defaultKeyword || '',
    };
    this.onChangeKeyword = this.onChangeKeyword.bind(this);
  }

  onChangeKeyword(keyword) {
    this.setState({ keyword });
    this.props.keywordChange(keyword);
  }

  render() {
    const { catatans, keyword } = this.state;
    const filterCatatan = catatans.filter((cat) =>
      cat.title.toLocaleLowerCase().includes(keyword.toLowerCase())
    );

    return (
      <div className="home-page">
        <h1>Catatan Aktif</h1>
        <SearchBar keyword={keyword} keywordChange={this.onChangeKeyword} />
        {filterCatatan.length === 0 ? (
          <h3>Tidak Ada Catatan</h3>
        ) : (
          <CatatanList catatans={filterCatatan} />
        )}
        <div className="nav-new">
          <Link className="icons" to="/note/new">
            <FiPlus className="icon" />
          </Link>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
