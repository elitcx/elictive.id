import { Fragment, useEffect, useState } from 'react';
import { HexOutline } from './Logo.jsx';
import { useLang } from '../i18n.jsx';
import { PROJECTS } from '../portfolio-data.jsx';

export function Hero() {
  const { c } = useLang();
  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-hex tl" aria-hidden="true"><HexOutline /></div>
      <div className="hero-hex br" aria-hidden="true"><HexOutline /></div>
      <div className="hero-spotlight" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-scanlines" aria-hidden="true" />

      <div className="hero-stage">
        <div className="hero-inner">
          <div className="hero-cols">
            <div className="hero-text">
              <div className="overline hero-overline">
                <span className="dot-blue" /> {c.hero.overline} <span className="hero-overline-est">{c.hero.est}</span>
              </div>

              <h1 className="hero-h1">
                {c.hero.h1.map((line, i) => (
                  <span key={i} className={`line l${i + 1}`}>
                    <span className="line-inner">{line}</span>
                  </span>
                ))}
              </h1>

              <div className="hero-subtitle">
                <span className="quote-mark">“</span>{c.hero.subtitle}<span className="quote-mark">”</span>
              </div>

              <p className="hero-body">{c.hero.body}</p>

              <div className="hero-ctas">
                <a href="#contact" className="hero-cta primary">
                  <span className="cta-bg" />
                  <span className="cta-label">{c.hero.ctaPrimary}</span>
                  <span className="arr">→</span>
                </a>
                <a href="#portfolio" className="hero-cta secondary">
                  <span className="cta-label">{c.hero.ctaSecondary}</span>
                </a>
              </div>
            </div>

            <div className="hero-mark-col">
              <HeroShowcase />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-meta" aria-hidden="true">
        {c.hero.meta.map((label, i) => (
          <Fragment key={label}>
            <div><span className="num">{String(i + 1).padStart(2, '0')}</span> &nbsp;{label}</div>
            <div className="tick" />
          </Fragment>
        ))}
        <div className="hero-meta-clock"><LiveClock /></div>
      </div>

      <a href="#services" className="hero-scroll" aria-label={c.hero.scroll}>
        <div className="lbl">{c.hero.scroll}</div>
        <div className="track">
          <div className="dot" />
        </div>
      </a>
    </section>
  );
}

function HeroShowcase() {
  return (
    <div className="hero-showcase" aria-hidden="true">
      <div className="hero-showcase-grid">
        {PROJECTS.slice(0, 4).map((p, i) => {
          const Thumb = p.thumb;
          return (
            <div key={i} className="hero-showcase-cell">
              <Thumb />
            </div>
          );
        })}
      </div>
      <div className="hero-showcase-foot">
        <span className="sf-num">{String(PROJECTS.length).padStart(2, '0')}</span>
        <span className="sf-bar" />
        <span>Projects</span>
      </div>
    </div>
  );
}

function LiveClock() {
  const [now, setNow] = useState(() => formatJakartaTime());
  useEffect(() => {
    const i = setInterval(() => setNow(formatJakartaTime()), 1000);
    return () => clearInterval(i);
  }, []);
  return <span>{now} WIB</span>;
}
function formatJakartaTime() {
  try {
    return new Intl.DateTimeFormat('id-ID', {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    }).format(new Date());
  } catch (e) {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }
}

