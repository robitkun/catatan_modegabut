import PropTypes from 'prop-types';
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
    this.onInputHandler = this.onInputHandler.bind(this);
  }
  onInputHandler(e) {
    this.setState(() => {
      return {
        body: e.target.innerHTML,
      };
    });
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
      <form onSubmit={this.onSubmitHandler} className="catatan-input">
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
        <div
          className="add-body"
          contentEditable
          data-placeholder="Tulis Catatanmu disini lek...."
          onInput={this.onInputHandler}
        ></div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

CatatanInput.propTypes = {
  addCatatan: PropTypes.func.isRequired,
};

export default CatatanInput;
