// Inline SVG decorations rendered into the page backdrop. Server-side, no JS.

export function PageDecorations() {
  return (
    <>
      <div className="qm-decor qm-decor--cloud-tl" aria-hidden="true">
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <g fill="#ffffff" stroke="#bae6fd" strokeWidth="2">
            <ellipse cx="60" cy="70" rx="40" ry="22" />
            <ellipse cx="100" cy="60" rx="46" ry="26" />
            <ellipse cx="140" cy="72" rx="38" ry="20" />
            <ellipse cx="80" cy="50" rx="28" ry="18" />
          </g>
        </svg>
      </div>
      <div className="qm-decor qm-decor--sun-tr" aria-hidden="true">
        <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="qm-sun" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="100%" stopColor="#fbbf24" />
            </radialGradient>
          </defs>
          <g>
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1="70"
                y1="14"
                x2="70"
                y2="32"
                stroke="#fbbf24"
                strokeWidth="3"
                strokeLinecap="round"
                transform={`rotate(${i * 30} 70 70)`}
              />
            ))}
            <circle cx="70" cy="70" r="30" fill="url(#qm-sun)" stroke="#f59e0b" strokeWidth="2" />
          </g>
        </svg>
      </div>
      <div className="qm-decor qm-decor--star-1" aria-hidden="true">
        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 2 L21.6 13 L33 13 L23.7 19.6 L27.3 30.6 L18 24 L8.7 30.6 L12.3 19.6 L3 13 L14.4 13 Z"
            fill="#a78bfa"
            stroke="#7c3aed"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="qm-decor qm-decor--star-2" aria-hidden="true">
        <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 1.6 L17 11 L26.5 11 L18.8 16.7 L21.7 26 L14 20.3 L6.3 26 L9.2 16.7 L1.5 11 L11 11 Z"
            fill="#fda4af"
            stroke="#e11d48"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="qm-decor qm-decor--ribbon-bl" aria-hidden="true">
        <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-10 110 Q 60 60 130 110 T 270 110"
            stroke="#34d399"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M-10 140 Q 60 90 130 140 T 270 140"
            stroke="#60a5fa"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
        </svg>
      </div>
    </>
  );
}

export function ProgressRing({ percent }: { percent: number }) {
  const safe = Math.max(0, Math.min(100, percent));
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (safe / 100) * circumference;
  return (
    <div className="qm-ring" aria-hidden="true">
      <svg width="56" height="56" viewBox="0 0 56 56">
        <defs>
          <linearGradient id="qm-ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <circle cx="28" cy="28" r={radius} fill="white" stroke="#eef0f7" strokeWidth="6" />
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="url(#qm-ring-grad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 28 28)"
        />
        <text x="28" y="28" textAnchor="middle" dominantBaseline="central">
          {safe}%
        </text>
      </svg>
    </div>
  );
}

export function SubjectIcon({ svg }: { svg: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: svg }} />
  );
}
