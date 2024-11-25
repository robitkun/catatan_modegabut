/* eslint-disable react/prop-types */
import React from 'react';
class CatatanInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
    this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
    this.onChangeBodyhandler = this.onChangeBodyhandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onChangeBodyhandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }
  onChangeTitleHandler(e) {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  }
  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addCatatan(this.state);
    this.setState(() => {
      return {
        title: '',
        body: '',
      };
    });
  }
  render() {
    return (
      <div className="catatan-input">
        <h1>Tambah Catatan</h1>
        <form onSubmit={this.onSubmitHandler}>
          <p>
            {this.state.title.length > 50
              ? `Judul Melebihi Batas`
              : `Sisa karakter judul: ${50 - this.state.title.length}`}
          </p>
          <input
            placeholder="Masukkan judul.."
            type="text"
            value={this.state.title}
            onChange={this.onChangeTitleHandler}
          />
          <textarea
            placeholder="Tulis catatanmu disini.."
            value={this.state.body}
            onChange={this.onChangeBodyhandler}
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default CatatanInput;
