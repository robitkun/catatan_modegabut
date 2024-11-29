import PropTypes from 'prop-types';
import CatatanItem from './CatatanItem';

const CatatanList = ({ catatans, onDelete, onArsip }) => {
  return (
    <div className="catatan-list">
      {catatans.map((catatan) => (
        <CatatanItem
          {...catatan}
          key={catatan.id}
          id={catatan.id}
          onArsip={onArsip}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

CatatanList.propTypes = {
  catatans: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArsip: PropTypes.func.isRequired,
};

export default CatatanList;
