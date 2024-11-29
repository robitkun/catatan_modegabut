import { useNavigate } from 'react-router-dom';
import CatatanInput from '../components/CatatanInput';
import { addNote } from '../utils';
const AddNotesPage = () => {
  const navigate = useNavigate();
  function addCatatan(catatan) {
    addNote(catatan);
    navigate('/');
  }
  return (
    <div className="add-page">
      <h1>Tambah Catatan</h1>
      <CatatanInput addCatatan={addCatatan} />
    </div>
  );
};

export default AddNotesPage;
