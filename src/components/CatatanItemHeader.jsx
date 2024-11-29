import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';
const CatatanItemHeader = ({ title, date, id }) => {
  const formatdate = showFormattedDate(date);
  return (
    <div className="catatan-item_header">
      <h3 className="catatan-item-title">
        <Link className="title" to={`/note/${id}`}>
          {title}
        </Link>
      </h3>
      <p className="date">{formatdate}</p>
    </div>
  );
};
CatatanItemHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default CatatanItemHeader;
