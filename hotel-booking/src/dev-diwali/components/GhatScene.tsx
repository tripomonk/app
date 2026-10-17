/**
 * Illustrated Varanasi ghats at night — diya-lined steps, temple skyline,
 * full moon (Kartik Purnima) and boats on the Ganga.
 * Generated procedurally so it scales cleanly; replace with campaign
 * photography when available (see CustomerBookingPage hero).
 */
import { useId, useMemo } from 'react';

function rng(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Props {
  width?: number;
  height?: number;
  /** 0–1: how many diyas/buildings to draw */
  density?: number;
  seed?: number;
  className?: string;
  boats?: boolean;
  animate?: boolean;
  /** fraction of height where the skyline meets the ghat steps */
  skylineAt?: number;
  /** fraction of height where the river starts */
  waterAt?: number;
}

export function GhatScene({
  width = 1440,
  height = 640,
  density = 1,
  seed = 7,
  className,
  boats = true,
  animate = true,
  skylineAt = 0.6,
  waterAt = 0.74,
}: Props) {
  const uid = useId().replace(/:/g, '');
  const W = width;
  const H = height;
  const skyline = H * skylineAt; // where buildings meet the ghat steps
  const stepTop = skyline;
  const waterTop = H * waterAt;

  const scene = useMemo(() => {
    const r = rng(seed);
    // stars
    const stars = Array.from({ length: Math.round(46 * density) }, () => ({
      x: r() * W,
      y: r() * skyline * 0.55,
      s: 0.6 + r() * 1.3,
      o: 0.25 + r() * 0.6,
    }));
    // buildings
    const buildings: { x: number; w: number; h: number; spire: boolean; dome: boolean; shade: string }[] = [];
    let x = -20;
    while (x < W + 20) {
      const w = (44 + r() * 90) * (W / 1440) ** 0.6;
      const h = skyline * (0.1 + r() * 0.22);
      const spire = r() < 0.22;
      const dome = !spire && r() < 0.18;
      buildings.push({ x, w, h, spire, dome, shade: r() < 0.5 ? '#050a1c' : '#08102a' });
      x += w - 2;
    }
    // lit windows
    const windows: { x: number; y: number; w: number; h: number; o: number }[] = [];
    for (const b of buildings) {
      const n = Math.floor((b.w * b.h) / 1800 * density);
      for (let i = 0; i < n; i++) {
        if (r() < 0.45) continue;
        windows.push({
          x: b.x + 6 + r() * Math.max(0, b.w - 14),
          y: skyline - b.h + 10 + r() * Math.max(0, b.h - 22),
          w: 3 + r() * 3,
          h: 4 + r() * 4,
          o: 0.35 + r() * 0.55,
        });
      }
    }
    // ghat steps with diyas
    const stepCount = 6;
    const stepH = (waterTop - stepTop) / stepCount;
    const diyas: { x: number; y: number; g: number }[] = [];
    for (let s = 0; s < stepCount; s++) {
      const y = stepTop + stepH * (s + 0.55);
      const spacing = (9 + s * 1.6) / Math.max(density, 0.35);
      for (let dx = r() * spacing; dx < W; dx += spacing * (0.7 + r() * 0.6)) {
        if (r() < 0.08) continue;
        diyas.push({ x: dx, y: y + (r() - 0.5) * 1.5, g: Math.floor(r() * 3) });
      }
    }
    // reflections
    const streaks = Array.from({ length: Math.round(150 * density) }, () => ({
      x: r() * W,
      y: waterTop + 4 + r() * 18,
      w: 1.2 + r() * 2.6,
      h: 24 + r() * (H - waterTop) * 0.7,
      o: 0.12 + r() * 0.3,
    }));
    // floating diyas
    const floating = Array.from({ length: Math.round(26 * density) }, () => ({
      x: r() * W,
      y: waterTop + 30 + r() * (H - waterTop - 40),
    }));
    return { stars, buildings, windows, diyas, streaks, floating, stepCount, stepH };
  }, [W, H, density, seed, skyline, stepTop, waterTop]);

  const boatList = boats
    ? [
        { x: W * 0.2, y: waterTop + (H - waterTop) * 0.46, s: 1.0, canopy: true },
        { x: W * 0.58, y: waterTop + (H - waterTop) * 0.72, s: 1.25, canopy: false },
        { x: W * 0.83, y: waterTop + (H - waterTop) * 0.32, s: 0.75, canopy: true },
      ]
    : [];

  return (
    <svg
      className={className}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      role="img"
      aria-label="Illustration: Varanasi ghats lit with diyas under a full moon, with boats on the Ganga"
    >
      <defs>
        <linearGradient id={`sky${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#040a1c" />
          <stop offset="0.5" stopColor="#13245a" />
          <stop offset="0.85" stopColor="#3b3070" />
          <stop offset="1" stopColor="#6a3f6e" />
        </linearGradient>
        <radialGradient id={`horizon${uid}`} cx="0.5" cy="1" r="0.7">
          <stop offset="0" stopColor="#ff9a3c" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ff9a3c" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`moon${uid}`}>
          <stop offset="0" stopColor="#fff6dc" stopOpacity="0.5" />
          <stop offset="1" stopColor="#fff6dc" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`water${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0d1a42" />
          <stop offset="1" stopColor="#040a1c" />
        </linearGradient>
        <linearGradient id={`streak${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffb547" stopOpacity="0.9" />
          <stop offset="1" stopColor="#ffb547" stopOpacity="0" />
        </linearGradient>
        <filter id={`glow${uid}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.2" />
        </filter>
      </defs>

      <rect width={W} height={skyline + 2} fill={`url(#sky${uid})`} />
      <rect y={skyline - H * 0.35} width={W} height={H * 0.35} fill={`url(#horizon${uid})`} />

      {scene.stars.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.s} fill="#dfe8ff" opacity={s.o} />
      ))}

      {/* Full moon — Kartik Purnima */}
      <circle cx={W * 0.74} cy={H * 0.17} r={H * 0.2} fill={`url(#moon${uid})`} />
      <circle cx={W * 0.74} cy={H * 0.17} r={H * 0.065} fill="#fff3d1" />

      {/* Temple & ghat skyline */}
      <g>
        {scene.buildings.map((b, i) => (
          <g key={i} fill={b.shade}>
            <rect x={b.x} y={skyline - b.h} width={b.w} height={b.h + 2} />
            {b.spire && (() => {
              const sh = Math.min(b.w * 1.05, skyline * 0.2);
              const base = skyline - b.h;
              const l = b.x + b.w * 0.24;
              const rr = b.x + b.w * 0.76;
              const cx = b.x + b.w / 2;
              return (
                <>
                  <path d={`M${l} ${base} C${l} ${base - sh * 0.55} ${cx - b.w * 0.08} ${base - sh * 0.9} ${cx} ${base - sh} C${cx + b.w * 0.08} ${base - sh * 0.9} ${rr} ${base - sh * 0.55} ${rr} ${base} Z`} />
                  <circle cx={cx} cy={base - sh - 3} r={3} />
                  <rect x={cx - 0.75} y={base - sh - 14} width={1.5} height={10} />
                </>
              );
            })()}
            {b.dome && (
              <path d={`M${b.x + b.w * 0.2} ${skyline - b.h} A${b.w * 0.3} ${b.w * 0.3} 0 0 1 ${b.x + b.w * 0.8} ${skyline - b.h} Z`} />
            )}
          </g>
        ))}
        {scene.windows.map((w, i) => (
          <rect key={i} x={w.x} y={w.y} width={w.w} height={w.h} fill="#ffc46b" opacity={w.o} rx={0.8} />
        ))}
      </g>

      {/* Ghat steps */}
      {Array.from({ length: scene.stepCount }, (_, s) => (
        <rect
          key={s}
          x={0}
          y={stepTop + s * scene.stepH}
          width={W}
          height={scene.stepH + 1}
          fill={s % 2 ? '#0c1636' : '#101c42'}
        />
      ))}

      {/* Diyas: soft glow layer then flames */}
      <g filter={`url(#glow${uid})`} className={animate ? 'dd-diya-glow' : undefined}>
        {scene.diyas.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={4.2} fill="#ff9f2e" opacity={0.75} />
        ))}
      </g>
      {[0, 1, 2].map((g) => (
        <g key={g} className={animate ? `dd-diya-flicker dd-diya-flicker-${g}` : undefined}>
          {scene.diyas
            .filter((d) => d.g === g)
            .map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r={1.7} fill="#ffe29a" />
            ))}
        </g>
      ))}

      {/* River */}
      <rect y={waterTop} width={W} height={H - waterTop} fill={`url(#water${uid})`} />
      {scene.streaks.map((s, i) => (
        <rect key={i} x={s.x} y={s.y} width={s.w} height={s.h} fill={`url(#streak${uid})`} opacity={s.o} />
      ))}
      <g filter={`url(#glow${uid})`}>
        {scene.floating.map((f, i) => (
          <circle key={i} cx={f.x} cy={f.y} r={3.4} fill="#ff9f2e" opacity={0.8} />
        ))}
      </g>
      {scene.floating.map((f, i) => (
        <circle key={i} cx={f.x} cy={f.y} r={1.4} fill="#ffe29a" />
      ))}

      {/* Boats */}
      {boatList.map((b, i) => (
        <g key={i} transform={`translate(${b.x} ${b.y}) scale(${b.s * (W / 1440) ** 0.4})`}>
          <ellipse cx={0} cy={10} rx={90} ry={6} fill="#ffb547" opacity={0.08} />
          {b.canopy && (
            <path d="M-38 -26 L38 -26 L44 -14 L-44 -14 Z" fill="#070e24" />
          )}
          {b.canopy && <rect x={-36} y={-14} width={4} height={14} fill="#070e24" />}
          {b.canopy && <rect x={32} y={-14} width={4} height={14} fill="#070e24" />}
          <path d="M-78 -2 Q-70 14 -40 16 L42 16 Q72 14 82 -4 L64 2 L-60 2 Z" fill="#050a1a" />
          <circle cx={-48} cy={-6} r={7} fill="#ff9f2e" opacity={0.35} filter={`url(#glow${uid})`} />
          <circle cx={-48} cy={-6} r={2.2} fill="#ffe29a" />
          <g fill="#050a1a">
            <circle cx={-10} cy={-10} r={4.5} />
            <rect x={-14} y={-6} width={8} height={9} rx={2} />
            <circle cx={10} cy={-9} r={4.5} />
            <rect x={6} y={-5} width={8} height={8} rx={2} />
          </g>
        </g>
      ))}
    </svg>
  );
}
