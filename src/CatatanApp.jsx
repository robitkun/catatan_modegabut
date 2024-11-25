import React from 'react';
import { getInitialData } from './utils';
import CatatanList from './components/CatatanList';
import './styles/style.css';
import CatatanInput from './components/CatatanInput';
import Navbar from './components/Navbar';
class CatatanApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catatans: getInitialData(),
      keyword: '',
    };
    this.onDelete = this.onDelete.bind(this);
    this.onArsip = this.onArsip.bind(this);
    this.onAddCatatan = this.onAddCatatan.bind(this);
    this.onChangeKeyword = this.onChangeKeyword.bind(this);
  }
  onChangeKeyword(e) {
    this.setState(() => {
      return {
        keyword: e.target.value,
      };
    });
  }
  onAddCatatan({ title, body }) {
    this.setState((prev) => {
      return {
        catatans: [
          ...prev.catatans,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }
  onDelete(id) {
    const catatans = this.state.catatans.filter((catatan) => catatan.id !== id);
    this.setState({ catatans });
  }
  onArsip(id) {
    const catatans = this.state.catatans.map((catatan) => {
      if (catatan.id === id) {
        return { ...catatan, archived: !catatan.archived };
      }
      return catatan;
    });

    this.setState({ catatans });
    console.log(catatans);
  }
  render() {
    const filterCatatan = this.state.catatans.filter((catatan) => {
      return catatan.title.toLocaleLowerCase().includes(this.state.keyword);
    });
    const catatanAktif = filterCatatan.filter(
      (catatan) => catatan.archived === false
    );
    const catatanArsip = filterCatatan.filter(
      (catatan) => catatan.archived === true
    );
    return (
      <div className="container">
        <Navbar
          value={this.state.keyword}
          onChangeKeyword={this.onChangeKeyword}
        />
        <CatatanInput addCatatan={this.onAddCatatan} />
        <h1>Catatan Aktif</h1>
        {catatanAktif.length <= 0 ? (
          <h3>Tidak ada catatan</h3>
        ) : (
          <CatatanList
            catatans={catatanAktif}
            onDelete={this.onDelete}
            onArsip={this.onArsip}
          />
        )}
        <h1>Catatan Arsip</h1>
        {catatanArsip.length <= 0 ? (
          <h3>Tidak ada catatan</h3>
        ) : (
          <CatatanList
            catatans={catatanArsip}
            onDelete={this.onDelete}
            onArsip={this.onArsip}
          />
        )}
      </div>
    );
  }
}
export default CatatanApp;
