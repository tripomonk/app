import { useState } from 'react';
import { Lock, Pencil, Power, UserCog, UserPlus } from 'lucide-react';
import type { HotelAdmin, RecordStatus } from '../../data/types';
import { useMockStore } from '../../state/MockStore';
import { useToast } from '../../state/Toasts';
import { formatDate } from '../../utils/format';
import { HotelAdminForm } from '../../components/HotelAdminForm';
import { FilterBar, SearchFilter, SelectFilter } from '../../components/FilterBar';
import { ConfirmDialog, EmptyState, StatusBadge } from '../../components/ui/primitives';
import { PageHead, useHotelOptions } from './saShared';

export function HotelAdminAccountsPage() {
  const { admins, hotels, hotelById, addAdmin, updateAdmin } = useMockStore();
  const toast = useToast();
  const hotelOptions = useHotelOptions();
  const [q, setQ] = useState('');
  const [hotel, setHotel] = useState('all');
  const [status, setStatus] = useState<'all' | RecordStatus>('all');
  const [editing, setEditing] = useState<HotelAdmin | 'new' | null>(null);
  const [toggling, setToggling] = useState<HotelAdmin | null>(null);

  const filtered = admins.filter((a) => {
    const s = q.trim().toLowerCase();
    const matches = !s || a.name.toLowerCase().includes(s) || a.email.toLowerCase().includes(s);
    return matches && (hotel === 'all' || a.hotelId === hotel) && (status === 'all' || a.status === status);
  });

  return (
    <div className="dd-stack-lg">
      <PageHead
        title="Hotel Admin Accounts"
        description="People at partner hotels who can sign in to the Hotel Partner Portal. Each account sees only its assigned hotel."
        actions={
          <button type="button" className="dd-btn dd-btn--primary" onClick={() => setEditing('new')}>
            <UserPlus /> Create Hotel Admin
          </button>
        }
      />

      <div className="dd-callout">
        <Lock aria-hidden="true" />
        <span>
          Hotel Admins cannot edit attribution codes, commission rules, rooms or prices. Accounts here are mock records — real logins,
          invites and passwords are created by the backend later.
        </span>
      </div>

      <FilterBar onReset={() => { setQ(''); setHotel('all'); setStatus('all'); }} active={!!q || hotel !== 'all' || status !== 'all'}>
        <SearchFilter id="sa-admins-q" value={q} onChange={setQ} placeholder="Search name or email" />
        <SelectFilter id="sa-admins-hotel" label="Assigned hotel" value={hotel} onChange={setHotel} options={hotelOptions} />
        <SelectFilter
          id="sa-admins-status"
          label="Status"
          value={status}
          onChange={setStatus}
          options={[
            { value: 'all', label: 'All statuses' },
            { value: 'Active', label: 'Active' },
            { value: 'Inactive', label: 'Inactive' },
          ]}
        />
      </FilterBar>

      <div className="dd-table-wrap">
        {filtered.length === 0 ? (
          <EmptyState icon={<UserCog />} title="No accounts match these filters">
            Reset the filters or create a Hotel Admin.
          </EmptyState>
        ) : (
          <table className="dd-table">
            <caption className="dd-sr-only">Hotel Admin accounts</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Assigned hotel</th>
                <th scope="col">Status</th>
                <th scope="col">Created</th>
                <th scope="col"><span className="dd-sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a) => {
                const h = hotelById(a.hotelId);
                return (
                  <tr key={a.id}>
                    <td>
                      <div className="dd-row" style={{ gap: 10, flexWrap: 'nowrap' }}>
                        <span className="dd-avatar">{a.name.split(' ').map((p) => p[0]).join('').slice(0, 2)}</span>
                        <span className="dd-cell-title">{a.name}</span>
                      </div>
                    </td>
                    <td>{a.email}</td>
                    <td className="dd-nowrap dd-sa-tnum">{a.phone}</td>
                    <td>
                      <div>{h?.name ?? '—'}</div>
                      <div className="dd-cell-sub">{h?.code}{h?.status === 'Inactive' ? ' · hotel inactive' : ''}</div>
                    </td>
                    <td><StatusBadge kind="record" value={a.status} /></td>
                    <td className="dd-nowrap">{formatDate(a.createdAt)}</td>
                    <td>
                      <div className="dd-row" style={{ gap: 6, flexWrap: 'nowrap' }}>
                        <button type="button" className="dd-btn dd-btn--secondary dd-btn--sm" onClick={() => setEditing(a)}>
                          <Pencil /> Edit
                        </button>
                        <button
                          type="button"
                          className={`dd-btn dd-btn--sm ${a.status === 'Active' ? 'dd-btn--soft-danger' : 'dd-btn--secondary'}`}
                          onClick={() => setToggling(a)}
                        >
                          <Power /> {a.status === 'Active' ? 'Deactivate' : 'Activate'}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {editing && (
        <HotelAdminForm
          admin={editing === 'new' ? undefined : editing}
          hotels={hotels}
          existingEmails={admins.map((a) => a.email.toLowerCase())}
          onCancel={() => setEditing(null)}
          onSave={(input) => {
            if (editing === 'new') {
              addAdmin(input);
              toast(`${input.name} added to demo state. No real login or invite was created.`, 'demo');
            } else {
              updateAdmin(editing.id, input);
              toast(`${input.name} updated in demo state — not saved.`, 'demo');
            }
            setEditing(null);
          }}
        />
      )}

      {toggling && (
        <ConfirmDialog
          title={`${toggling.status === 'Active' ? 'Deactivate' : 'Activate'} ${toggling.name}?`}
          message={
            <p>
              {toggling.status === 'Active'
                ? `${toggling.name} would lose access to the ${hotelById(toggling.hotelId)?.name ?? ''} portal.`
                : `${toggling.name} would regain access to the ${hotelById(toggling.hotelId)?.name ?? ''} portal.`}{' '}
              This changes demo state only; no real access is affected.
            </p>
          }
          confirmLabel={toggling.status === 'Active' ? 'Deactivate' : 'Activate'}
          tone={toggling.status === 'Active' ? 'danger' : 'primary'}
          onConfirm={() => {
            const next: RecordStatus = toggling.status === 'Active' ? 'Inactive' : 'Active';
            updateAdmin(toggling.id, { status: next });
            toast(`${toggling.name} marked ${next.toLowerCase()} in demo state.`, 'demo');
            setToggling(null);
          }}
          onCancel={() => setToggling(null)}
        />
      )}
    </div>
  );
}
