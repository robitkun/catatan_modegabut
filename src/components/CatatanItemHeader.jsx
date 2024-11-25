/* eslint-disable react/prop-types */
import { showFormattedDate } from '../utils';
const CatatanItemHeader = ({ title, date }) => {
  const formatdate = showFormattedDate(date);
  return (
    <div className="catatan-item_header">
      <h3 className="catatan-item-title">{title}</h3>
      <p>{formatdate}</p>
    </div>
  );
};

export default CatatanItemHeader;
