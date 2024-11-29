import PropTypes from 'prop-types';
import parse from 'html-react-parser';

const CatatanItemBody = ({ body }) => {
  return <p className="catatan-item_body">{parse(body)}</p>;
};

CatatanItemBody.propTypes = {
  body: PropTypes.string.isRequired,
};

export default CatatanItemBody;
