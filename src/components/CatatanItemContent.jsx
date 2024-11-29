import PropTypes from 'prop-types';
import CatatanItemHeader from './CatatanItemHeader';
import CatatanItemBody from './CatatanItemBody';

const CatatanItemContent = ({ title, date, body, id }) => {
  return (
    <div className="catatan-item_content">
      <CatatanItemHeader title={title} date={date} id={id} />
      <CatatanItemBody body={body} />
    </div>
  );
};
CatatanItemContent.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CatatanItemContent;
