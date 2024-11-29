import PropTypes from 'prop-types';

const ArsipButton = ({ id, onArsip, archived }) => {
  return (
    <button className="btn" onClick={() => onArsip(id)}>
      {archived ? `Pindahkan` : `Arsipkan`}
    </button>
  );
};

ArsipButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArsip: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default ArsipButton;
