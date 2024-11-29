import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ArsipPage from './pages/ArsipPage';
import AddNotesPage from './pages/AddNotesPage';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';
import './styles/style.css';
const CatatanApp = () => {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/note/new" element={<AddNotesPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/archived" element={<ArsipPage />} />
          <Route path="/note/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default CatatanApp;
