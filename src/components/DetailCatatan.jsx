import { showFormattedDate } from '../utils';
import CatatanItemAction from './CatatanItemAction';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
const DetailCatatan = ({
  body,
  title,
  createdAt,
  id,
  onDelete,
  onArsip,
  archived,
  unArsip,
}) => {
  const formatdate = showFormattedDate(createdAt);
  return (
    <div className="detail-catatan">
      <h1>{title}</h1>
      <p className="date">{formatdate}</p>
      <p className="catatan-item_body">{parse(body)}</p>
      <div className="action">
        <CatatanItemAction
          onDelete={onDelete}
          onArsip={onArsip}
          unArsip={unArsip}
          id={id}
          archived={archived}
        />
      </div>
    </div>
  );
};
DetailCatatan.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArsip: PropTypes.func.isRequired,
  createdAt: PropTypes.string.isRequired,
  unArsip: PropTypes.func.isRequired,
};
export default DetailCatatan;
