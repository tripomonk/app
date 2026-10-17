import type { ReactNode } from 'react';
import { MockStoreProvider } from './state/MockStore';
import { ToastProvider } from './state/Toasts';
import './styles/devDiwaliScoped.css';
import './styles/components.css';
import './styles/customer.css';
import './styles/hotelAdmin.css';
import './styles/superAdmin.css';

/**
 * Wrap the Dev Deepawali routes with this provider. It holds the in-memory
 * mock state and toasts; it does not touch any existing app context.
 */
export function DevDiwaliProvider({ children }: { children: ReactNode }) {
  return (
    <MockStoreProvider>
      <ToastProvider>{children}</ToastProvider>
    </MockStoreProvider>
  );
}
