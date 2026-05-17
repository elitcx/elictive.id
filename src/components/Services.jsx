import { Reveal } from '../hooks/motion.jsx';
import { useLang } from '../i18n.jsx';

const ICONS = [
  (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 36 L26 18 L33 25 L15 43 Z" transform="translate(0,-2)" />
      <path d="M28 16 L31 13 L35 17 L32 20 Z" transform="translate(0,-2)" />
      <circle cx="11" cy="11" r="3" />
      <path d="M7 13 L11 7 L15 13" />
    </svg>
  ),
  (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="14" height="14" />
      <rect x="24" y="6" width="14" height="14" />
      <rect x="6" y="24" width="14" height="14" />
      <rect x="24" y="24" width="14" height="14" />
      <circle cx="31" cy="13" r="2.5" fill="currentColor" />
    </svg>
  ),
  (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="8" width="34" height="24" rx="1" />
      <line x1="5" y1="14" x2="39" y2="14" />
      <circle cx="9" cy="11" r="0.8" fill="currentColor" />
      <circle cx="12" cy="11" r="0.8" fill="currentColor" />
      <circle cx="15" cy="11" r="0.8" fill="currentColor" />
      <path d="M18 38 L26 38" />
      <path d="M22 32 L22 38" />
      <path d="M14 22 L18 26 L14 30" />
      <path d="M30 22 L26 26 L30 30" />
    </svg>
  )
];

export function Services() {
  const { c } = useLang();
  return (
    <section id="services" className="services">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="overline">{c.services.overline}</div>
          <h2 className="h2">{c.services.title}</h2>
          <p className="sub">{c.services.sub}</p>
        </Reveal>

        <div className="svc-grid">
          {c.services.items.map((s, i) => (
            <Reveal key={i} className="svc-card" delay={i + 1}>
              <div className="svc-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="svc-icon">{ICONS[i]}</div>
              <h3 className="svc-title">{s.title}</h3>
              <div className="svc-title-en">{s.titleAlt}</div>
              <p className="svc-desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="svc-foot" delay={4}>
          <span>{c.services.footNote}</span>
          <a href="#contact">{c.services.footLink}</a>
        </Reveal>
      </div>
    </section>
  );
}
