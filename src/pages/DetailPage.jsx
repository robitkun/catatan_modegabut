import React from 'react';
import { getNote } from '../utils';
import { useParams } from 'react-router-dom';
import DetailCatatan from '../components/DetailCatatan';
import PropTypes from 'prop-types';
import { deleteNote, archiveNote, unarchiveNote } from '../utils';
import { useNavigate } from 'react-router-dom';
function DetailPageWrapper() {
  const navigate = useNavigate();
  const { id } = useParams();
  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catatan: getNote(props.id),
    };
    this.onDelete = this.onDelete.bind(this);
    this.onArsip = this.onArsip.bind(this);
    this.unArsip = this.unArsip.bind(this);
  }
  onDelete(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        catatan: getNote(this.props.id),
      };
    });
    this.props.navigate('/');
  }
  onArsip(id) {
    archiveNote(id);
    this.props.navigate('/');
  }
  unArsip(id) {
    unarchiveNote(id);
    this.props.navigate('/');
  }
  render() {
    return (
      <div className="detail-page">
        <DetailCatatan
          {...this.state.catatan}
          onDelete={this.onDelete}
          onArsip={this.onArsip}
          unArsip={this.unArsip}
        />
      </div>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.string.isRequired,
};
export default DetailPageWrapper;
