import PropTypes from 'prop-types';
import ArsipButton from './ArsipButton';
import ButtonDelete from './ButtonDelete';
import UnArsip from './UnArsip';

const CatatanItemAction = ({ id, onDelete, onArsip, archived, unArsip }) => {
  return (
    <div className="catatan-item_action">
      <ButtonDelete id={id} onDelete={onDelete} />
      {archived ? (
        <UnArsip unArsip={unArsip} id={id} />
      ) : (
        <ArsipButton id={id} onArsip={onArsip} />
      )}
    </div>
  );
};

CatatanItemAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArsip: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
  unArsip: PropTypes.func.isRequired,
};

export default CatatanItemAction;
