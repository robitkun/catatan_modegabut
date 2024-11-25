/* eslint-disable react/prop-types */
const ButtonDelete = ({ id, onDelete }) => {
  return (
    <button className="btn" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
};

export default ButtonDelete;
