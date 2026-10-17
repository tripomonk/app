/**
 * Standalone preview harness. In the real Tripomonk app you would NOT use this
 * file: add <DevDiwaliProvider> + {devDiwaliRoutes} to the existing router instead.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DevDiwaliProvider, devDiwaliRoutes } from './dev-diwali';
import { PreviewBar } from './preview/PreviewBar';
import './preview/preview.css';

const useMemoryRouter = import.meta.env.VITE_ROUTER === 'memory';
const Router = useMemoryRouter ? MemoryRouter : BrowserRouter;
const routerProps = useMemoryRouter ? { initialEntries: ['/dev-diwali?src=hotel-qr'] } : {};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router {...routerProps}>
      <DevDiwaliProvider>
        <PreviewBar />
        <Routes>
          {devDiwaliRoutes}
          <Route path="*" element={<Navigate to="/dev-diwali?src=hotel-qr" replace />} />
        </Routes>
      </DevDiwaliProvider>
    </Router>
  </StrictMode>,
);
