/* eslint-disable react/prop-types */

const ArsipButton = ({ id, onArsip, archived }) => {
  return (
    <button className="btn" onClick={() => onArsip(id)}>
      {archived ? `Pindahkan` : `Arsipkan`}
    </button>
  );
};

export default ArsipButton;
