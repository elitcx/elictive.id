import { Reveal, useInView } from '../hooks/motion.jsx';
import { HexOutline } from './Logo.jsx';
import { useLang } from '../i18n.jsx';

function Trait({ trait, idx, inView }) {
  const delay = 0.08 + idx * 0.1;
  return (
    <div
      className={`trait t${idx + 1} ${inView ? 'in' : ''}`}
      style={{ transitionDelay: inView ? `${delay}s` : '0s' }}
    >
      <div className="trait-head">
        <span className="trait-num">{trait.n}</span>
        <span className="trait-rule" />
      </div>
      <h3 className="trait-label">{trait.label}</h3>
      <p className="trait-desc">{trait.desc}</p>
    </div>
  );
}

export function About() {
  const { c } = useLang();
  const a = c.about;
  const [rightRef, rightIn] = useInView({ amount: 0.25 });

  return (
    <section id="about" className="about">
      <div className="wrap about-grid">
        <Reveal className="about-left">
          <div className="overline">{a.overline}</div>
          <h2 className="h2" style={{ marginTop: 14 }}>
            {a.h2.map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h2>
          <p style={{ marginTop: 28 }}>{a.p1}</p>
          <p>{a.p2}</p>
          <p className="en">{a.pAlt}</p>
        </Reveal>

        <div className="about-right" ref={rightRef}>
          <div className="about-hex" aria-hidden="true"><HexOutline /></div>
          <div className={`about-panel ${rightIn ? 'in' : ''}`}>
            <div className="about-panel-head">
              <span className="about-panel-lbl">{a.panelHead}</span>
              <span className="about-panel-id">{a.panelId}</span>
            </div>
            <div className="about-traits">
              {a.traits.map((t, i) => (
                <Trait key={t.label} trait={t} idx={i} inView={rightIn} />
              ))}
            </div>
            <div className="about-panel-foot">
              <span className="dot-blue" /> {a.panelFoot}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
