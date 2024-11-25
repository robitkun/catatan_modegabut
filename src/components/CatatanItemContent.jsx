/* eslint-disable react/prop-types */
import CatatanItemHeader from './CatatanItemHeader';
import CatatanItemBody from './CatatanItemBody';

const CatatanItemContent = ({ title, date, body }) => {
  return (
    <div className="catatan-item_content">
      <CatatanItemHeader title={title} date={date} />
      <CatatanItemBody body={body} />
    </div>
  );
};

export default CatatanItemContent;
