import { useState } from 'react';
import type { FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Info, LogIn, QrCode, Wallet, ListOrdered } from 'lucide-react';
import { useMockStore } from '../../state/MockStore';
import { DD_PATHS } from '../../paths';
import { GhatScene } from '../../components/GhatScene';
import { DemoBanner, DemoTag, Field, Logo, Modal } from '../../components/ui/primitives';

export function HotelAdminLoginPage() {
  const { admins, hotelById, loginHotelAdmin } = useMockStore();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from;

  const [demoId, setDemoId] = useState(admins[0]?.id ?? '');
  const [identifier, setIdentifier] = useState(admins[0]?.email ?? '');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState<{ identifier?: string; password?: string; form?: string }>({});
  const [loading, setLoading] = useState(false);
  const [forgot, setForgot] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const er: typeof errors = {};
    if (!identifier.trim()) er.identifier = 'Enter your email or mobile number.';
    if (!password) er.password = 'Enter your password.';
    const admin = admins.find((a) => a.id === demoId);
    if (!er.identifier && !er.password && admin?.status === 'Inactive') {
      er.form = 'This account is inactive. Contact your Tripomonk partner manager to reactivate it.';
    }
    setErrors(er);
    if (Object.keys(er).length || !admin) return;
    setLoading(true);
    window.setTimeout(() => {
      loginHotelAdmin(admin.id);
      navigate(from && from !== DD_PATHS.hotel.login ? from : DD_PATHS.hotel.dashboard, { replace: true });
    }, 700);
  };

  return (
    <div className="dd-scope dd-ha-login">
      <aside className="dd-ha-login-art">
        <div className="dd-ha-login-scene" aria-hidden="true">
          <GhatScene width={900} height={1000} skylineAt={0.74} waterAt={0.86} density={0.8} seed={21} animate={false} />
        </div>
        <div className="dd-ha-login-copy">
          <Logo variant="light" height={34} />
          <div className="dd-stack-sm" style={{ marginTop: 'auto' }}>
            <span className="dd-ha-login-deva" lang="hi">देव दीपावली 2026</span>
            <h2>Hotel Partner Portal</h2>
            <ul>
              <li><ListOrdered aria-hidden="true" /> See bookings made with your hotel code</li>
              <li><Wallet aria-hidden="true" /> Track commission and payouts</li>
              <li><QrCode aria-hidden="true" /> Download your QR poster</li>
            </ul>
          </div>
        </div>
      </aside>

      <main className="dd-ha-login-main">
        <div className="dd-ha-login-card">
          <div className="dd-ha-login-mobilelogo"><Logo variant="dark" height={30} /></div>
          <div className="dd-stack-sm">
            <span className="dd-eyebrow">Dev Deepawali 2026</span>
            <h1>Hotel Partner Login</h1>
            <p className="dd-muted">Sign in to see your hotel's bookings and commission.</p>
          </div>

          <DemoBanner>
            <strong>Simulated login.</strong> Any password works and nothing is verified. Pick a demo account below.
          </DemoBanner>

          <div className="dd-field">
            <label className="dd-label" htmlFor="dd-demo-acct">Demo account</label>
            <select
              id="dd-demo-acct"
              className="dd-select"
              value={demoId}
              onChange={(e) => {
                setDemoId(e.target.value);
                setIdentifier(admins.find((a) => a.id === e.target.value)?.email ?? '');
                setErrors({});
              }}
            >
              {admins.map((a) => (
                <option key={a.id} value={a.id}>
                  {hotelById(a.hotelId)?.name} — {a.name}{a.status === 'Inactive' ? ' (inactive)' : ''}
                </option>
              ))}
            </select>
          </div>

          <form className="dd-stack" onSubmit={submit} noValidate>
            {errors.form && (
              <div className="dd-callout dd-callout--bad" role="alert">
                <Info aria-hidden="true" />
                <div>{errors.form}</div>
              </div>
            )}
            <Field label="Email or mobile number" htmlFor="dd-login-id" required error={errors.identifier}>
              <input
                id="dd-login-id"
                className="dd-input"
                autoComplete="username"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                aria-invalid={!!errors.identifier}
              />
            </Field>
            <Field label="Password" htmlFor="dd-login-pw" required error={errors.password}>
              <div style={{ position: 'relative' }}>
                <input
                  id="dd-login-pw"
                  className="dd-input"
                  type={show ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={!!errors.password}
                  style={{ paddingRight: 44 }}
                />
                <button
                  type="button"
                  className="dd-btn dd-btn--ghost dd-btn--icon dd-btn--sm"
                  style={{ position: 'absolute', right: 5, top: 5 }}
                  aria-label={show ? 'Hide password' : 'Show password'}
                  onClick={() => setShow((s) => !s)}
                >
                  {show ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </Field>
            <div className="dd-row-between">
              <span />
              <button type="button" className="dd-link-btn" onClick={() => setForgot(true)}>Forgot password?</button>
            </div>
            <button type="submit" className="dd-btn dd-btn--primary dd-btn--lg dd-btn--block" disabled={loading}>
              {loading ? <><span className="dd-spinner" aria-hidden="true" /> Signing in…</> : <><LogIn /> Login</>}
            </button>
          </form>

          <div className="dd-ha-support">
            <strong>Need help?</strong>
            <span>Contact your Tripomonk partner manager. Support phone and email will be added before launch.</span>
            <DemoTag>Placeholder</DemoTag>
          </div>
        </div>
      </main>

      {forgot && (
        <Modal
          title="Reset your password"
          size="sm"
          onClose={() => setForgot(false)}
          footer={<button type="button" className="dd-btn dd-btn--primary" onClick={() => setForgot(false)}>OK</button>}
        >
          <p>Password reset will work once partner accounts are connected to Tripomonk's authentication. For now, ask your Tripomonk partner manager for help.</p>
        </Modal>
      )}
    </div>
  );
}
