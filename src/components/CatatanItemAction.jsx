/* eslint-disable react/prop-types */

import ArsipButton from './ArsipButton';
import ButtonDelete from './ButtonDelete';

const CatatanItemAction = ({ id, onDelete, onArsip, archived }) => {
  return (
    <div className="catatan-item_action">
      <ButtonDelete id={id} onDelete={onDelete} />
      <ArsipButton id={id} onArsip={onArsip} archived={archived} />
    </div>
  );
};

export default CatatanItemAction;
