import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { CircleCheck as CheckCircle2, FlaskConical, Info, X } from 'lucide-react';

type Tone = 'info' | 'good' | 'demo';
interface Toast {
  id: number;
  message: string;
  tone: Tone;
}

const ToastContext = createContext<(message: string, tone?: Tone) => void>(() => {});

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: number) => setToasts((t) => t.filter((x) => x.id !== id)), []);

  const show = useCallback(
    (message: string, tone: Tone = 'info') => {
      const id = Date.now() + Math.random();
      setToasts((t) => [...t.slice(-2), { id, message, tone }]);
      window.setTimeout(() => dismiss(id), 5200);
    },
    [dismiss],
  );

  const api = useMemo(() => show, [show]);

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div className="dd-scope dd-toast-host" style={{ background: 'transparent' }}>
        <div className="dd-toasts" role="status" aria-live="polite">
          {toasts.map((t) => (
            <div key={t.id} className={`dd-toast ${t.tone === 'good' ? 'dd-toast--good' : t.tone === 'demo' ? 'dd-toast--warn' : ''}`}>
              {t.tone === 'good' ? <CheckCircle2 /> : t.tone === 'demo' ? <FlaskConical /> : <Info />}
              <span>{t.message}</span>
              <button type="button" aria-label="Dismiss" onClick={() => dismiss(t.id)}>
                <X size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
