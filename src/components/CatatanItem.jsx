/* eslint-disable react/prop-types */

import CatatanItemAction from './CatatanItemAction';
import CatatanItemContent from './CatatanItemContent';
const CatatanItem = ({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArsip,
  archived,
}) => {
  return (
    <div className="catatan-item">
      <CatatanItemContent title={title} date={createdAt} body={body} />
      <CatatanItemAction
        id={id}
        onDelete={onDelete}
        onArsip={onArsip}
        archived={archived}
      />
    </div>
  );
};

export default CatatanItem;
