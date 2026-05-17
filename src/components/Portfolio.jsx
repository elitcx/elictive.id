import { useRef } from 'react';
import { Reveal, useInView } from '../hooks/motion.jsx';
import { useLang } from '../i18n.jsx';
import { PROJECTS } from '../portfolio-data.jsx';
import { CONFIG } from './Contact.jsx';

function Thumb({ thumb }) {
  if (!thumb) return <div className="pf-thumb pf-thumb-placeholder" />;
  if (typeof thumb === 'string') {
    return <img className="pf-thumb pf-thumb-img" src={thumb} alt="" />;
  }
  const Component = thumb;
  return <Component />;
}

function PortfolioCard({ project, thumb, index, total }) {
  const [revealRef, inView] = useInView();
  const thumbWrapRef = useRef(null);
  const { c } = useLang();
  const delay = ((index % 2) + 1);
  const no = String(index + 1).padStart(2, '0');

  const waMsg = c.portfolio.waMsg
    .replace('{tag}', project.tag)
    .replace('{title}', project.title);
  const waLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;

  function handleMouseMove(e) {
    const el = thumbWrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <article
      ref={revealRef}
      className={`pf-card reveal d${delay} ${inView ? 'in' : ''}`}
      data-no={no}
    >
      <div className="pf-thumb-wrap" ref={thumbWrapRef} onMouseMove={handleMouseMove}>
        <Thumb thumb={thumb} />
      </div>
      <div className="pf-meta">
        <div className="pf-meta-top">
          <span className="pf-tag">{project.tag}</span>
          <span className="pf-no">{no} / {String(total).padStart(2, '0')}</span>
        </div>
        <h3 className="pf-title">
          {project.title}
          <span className="arr">→</span>
        </h3>
        <p className="pf-desc">{project.desc}</p>
        <div className="pf-chips">
          {project.meta.map((m) => <span key={m} className="pf-chip">{m}</span>)}
        </div>
        <a href={waLink} target="_blank" rel="noreferrer" className="pf-wa-cta">
          {c.portfolio.waBtn} <span className="arr">→</span>
        </a>
      </div>
    </article>
  );
}

export function Portfolio() {
  const { c, lang } = useLang();
  const total = PROJECTS.length;
  return (
    <section id="portfolio" className="portfolio">
      <div className="wrap">
        <Reveal className="section-head pf-head">
          <div className="pf-head-left">
            <div className="overline">{c.portfolio.overline}</div>
            <h2 className="h2">{c.portfolio.title}</h2>
            <p className="sub">{c.portfolio.sub}</p>
          </div>
          <div className="pf-head-right">
            <div className="pf-count">{String(total).padStart(2, '0')} <span>{c.portfolio.countLabel}</span></div>
            <p className="pf-disclaimer">{c.portfolio.disclaimer}</p>
          </div>
        </Reveal>

        <div className="pf-grid">
          {PROJECTS.map((p, i) => (
            <PortfolioCard
              key={p[lang]?.title ?? i}
              project={p[lang] ?? p.en}
              thumb={p.thumb}
              index={i}
              total={total}
            />
          ))}
        </div>

        <Reveal className="pf-cta-row" delay={3}>
          <a href="#contact">
            {c.portfolio.cta} <span className="arr">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
