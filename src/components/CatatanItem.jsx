import PropTypes from 'prop-types';
import CatatanItemContent from './CatatanItemContent';

const CatatanItem = ({ title, createdAt, body, id }) => {
  return (
    <div className="catatan-item">
      <CatatanItemContent title={title} date={createdAt} body={body} id={id} />
    </div>
  );
};

CatatanItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default CatatanItem;
