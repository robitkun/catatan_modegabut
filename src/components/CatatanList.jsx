/* eslint-disable react/prop-types */
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

export default CatatanList;
