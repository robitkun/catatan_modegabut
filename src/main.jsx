import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CatatanApp from './CatatanApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CatatanApp />
  </StrictMode>
);
