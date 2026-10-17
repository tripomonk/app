/** Illustrated placeholder thumbnails. Replace with real hotel / room photos from the CMS. */
import type { RoomType } from '../data/types';

export function HotelThumb({ tint, size = 44, label }: { tint: string; size?: number; label: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" role="img" aria-label={`${label} (placeholder image)`} style={{ borderRadius: size * 0.22, flex: 'none' }}>
      <rect width="44" height="44" fill={tint} />
      <circle cx="34" cy="9" r="4" fill="#fff4d1" opacity="0.9" />
      <path d="M6 32 V17 h9 v-5 h8 v5 h6 v-3 h9 v18 Z" fill="#ffffff" opacity="0.9" />
      <g fill={tint} opacity="0.85">
        <rect x="9" y="20" width="3" height="3" />
        <rect x="15" y="20" width="3" height="3" />
        <rect x="21" y="15" width="3" height="3" />
        <rect x="21" y="20" width="3" height="3" />
        <rect x="31" y="20" width="3" height="3" />
        <rect x="31" y="25" width="3" height="3" />
        <rect x="9" y="25" width="3" height="3" />
      </g>
      <path d="M0 35 Q11 32 22 35 T44 35 V44 H0 Z" fill="#0b1f44" opacity="0.35" />
      <g fill="#ffd27a">
        <circle cx="8" cy="33" r="1" />
        <circle cx="16" cy="33.5" r="1" />
        <circle cx="25" cy="34" r="1" />
        <circle cx="34" cy="33.4" r="1" />
      </g>
    </svg>
  );
}

const ROOM_TINT: Record<RoomType, [string, string]> = {
  Standard: ['#e9eef7', '#a9b8d3'],
  Deluxe: ['#f3e9dc', '#c9a27a'],
  Premium: ['#e3ecfb', '#6f97d8'],
  Suite: ['#efe6f7', '#a07fcf'],
  Family: ['#e3f1ea', '#6fb08f'],
};

export function RoomThumb({ type, label, className }: { type: RoomType; label: string; className?: string }) {
  const [bg, accent] = ROOM_TINT[type];
  return (
    <svg className={className} viewBox="0 0 120 90" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${label} (placeholder image)`}>
      <rect width="120" height="90" fill={bg} />
      {/* window with river */}
      <rect x="70" y="12" width="36" height="28" rx="3" fill="#0e1d48" />
      <rect x="70" y="30" width="36" height="10" fill="#1d3a7a" />
      <circle cx="98" cy="20" r="3" fill="#fff3d1" />
      <g fill="#ffc46b">
        <circle cx="75" cy="29" r="0.9" /><circle cx="81" cy="29.4" r="0.9" /><circle cx="87" cy="29" r="0.9" />
        <circle cx="93" cy="29.3" r="0.9" /><circle cx="100" cy="29" r="0.9" />
      </g>
      <rect x="86.5" y="12" width="3" height="28" fill={bg} opacity="0.9" />
      {/* bed */}
      <rect x="10" y="38" width="56" height="22" rx="4" fill={accent} />
      <rect x="8" y="56" width="74" height="16" rx="4" fill="#ffffff" />
      <rect x="8" y="66" width="74" height="10" rx="3" fill={accent} opacity="0.55" />
      <rect x="14" y="48" width="18" height="10" rx="4" fill="#ffffff" />
      <rect x="36" y="48" width="18" height="10" rx="4" fill="#ffffff" />
      <rect x="10" y="76" width="4" height="6" fill={accent} />
      <rect x="76" y="76" width="4" height="6" fill={accent} />
      {/* lamp */}
      <rect x="92" y="58" width="14" height="18" rx="2" fill="#ffffff" opacity="0.8" />
      <path d="M94 50 h10 l3 8 h-16 Z" fill="#ffd27a" />
      <rect x="0" y="82" width="120" height="8" fill={accent} opacity="0.25" />
    </svg>
  );
}
