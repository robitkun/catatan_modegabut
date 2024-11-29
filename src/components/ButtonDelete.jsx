import PropTypes from 'prop-types';

const ButtonDelete = ({ id, onDelete }) => {
  return (
    <button className="btn" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
};

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ButtonDelete;
