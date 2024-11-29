import React from 'react';
import { getArchivedNotes } from '../utils';
import CatatanList from '../components/CatatanList';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function ArsipPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return (
    <ArsipPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ArsipPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catatans: getArchivedNotes(),
      keyword: props.defaultKeyword || '',
    };
    this.onChangeKeyword = this.onChangeKeyword.bind(this);
  }
  onChangeKeyword(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }
  render() {
    const { catatans, keyword } = this.state;
    const Filtercatatan = catatans.filter((cat) =>
      cat.title.toLocaleLowerCase().includes(keyword)
    );
    return (
      <div className="arsip-page">
        <h1>Catatan Arsip</h1>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onChangeKeyword}
        />
        {Filtercatatan.length === 0 ? (
          <h3>Tidak Ada Catatan</h3>
        ) : (
          <CatatanList catatans={Filtercatatan} />
        )}
      </div>
    );
  }
}
ArsipPage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};
export default ArsipPageWrapper;
