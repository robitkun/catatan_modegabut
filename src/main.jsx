import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CatatanApp from './CatatanApp.jsx';
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CatatanApp />
    </BrowserRouter>
  </StrictMode>
);
