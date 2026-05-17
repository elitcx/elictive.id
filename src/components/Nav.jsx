import { Fragment, useEffect, useRef, useState } from 'react';
import { Logo } from './Logo.jsx';
import { useActiveSection } from '../hooks/motion.jsx';
import { useLang, LANG_ORDER } from '../i18n.jsx';

const NAV_KEYS = ['services', 'portfolio', 'about', 'contact'];

function LangSwitch({ className = '' }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`lang-switch ${className}`} role="group" aria-label="Language">
      {LANG_ORDER.map((code, i) => (
        <Fragment key={code}>
          {i > 0 && <span className="lang-switch-div" aria-hidden="true">/</span>}
          <button
            type="button"
            className={`lang-switch-btn ${lang === code ? 'active' : ''}`}
            aria-pressed={lang === code}
            onClick={() => setLang(code)}
          >
            {code.toUpperCase()}
          </button>
        </Fragment>
      ))}
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(['hero', 'services', 'portfolio', 'about', 'contact']);
  const { c } = useLang();
  const toggleRef = useRef(null);
  const overlayRef = useRef(null);
  const didMountRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!didMountRef.current) { didMountRef.current = true; return; }
    if (open) {
      overlayRef.current?.querySelector('a, button')?.focus();
    } else {
      toggleRef.current?.focus();
    }
  }, [open]);

  function handleOverlayKeyDown(e) {
    if (e.key === 'Escape') { setOpen(false); return; }
    if (e.key !== 'Tab') return;
    const focusable = Array.from(overlayRef.current?.querySelectorAll('a, button') ?? []);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }

  return (
    <Fragment>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Primary">
        <a href="#hero" className="nav-brand">
          <Logo />
          <span>elictive</span>
        </a>

        <div className="nav-links">
          {NAV_KEYS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${active === id ? 'active' : ''}`}
            >
              {c.nav[id]}
            </a>
          ))}
        </div>

        <div className="nav-end">
          <LangSwitch />
          <a href="#contact" className="nav-cta">
            {c.nav.cta} <span className="arr">→</span>
          </a>
        </div>

        <button
          ref={toggleRef}
          className="nav-mobile-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-mobile-overlay"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.7">
            {open ? (
              <Fragment>
                <line x1="7" y1="7" x2="21" y2="21" />
                <line x1="21" y1="7" x2="7" y2="21" />
              </Fragment>
            ) : (
              <Fragment>
                <line x1="5" y1="10" x2="23" y2="10" />
                <line x1="5" y1="18" x2="23" y2="18" />
              </Fragment>
            )}
          </svg>
        </button>
      </nav>

      <div
        id="nav-mobile-overlay"
        ref={overlayRef}
        className={`nav-mobile-overlay ${open ? 'open' : ''}`}
        onKeyDown={handleOverlayKeyDown}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',color:'#fff'}}>
          <a href="#hero" onClick={() => setOpen(false)} className="nav-brand" style={{color:'#fff'}}>
            <Logo />
            <span>elictive</span>
          </a>
          <button
            className="nav-mobile-toggle"
            aria-label="Close"
            style={{display:'inline-flex',color:'#fff'}}
            onClick={() => setOpen(false)}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.7">
              <line x1="7" y1="7" x2="21" y2="21" />
              <line x1="21" y1="7" x2="7" y2="21" />
            </svg>
          </button>
        </div>
        <div className="links">
          {NAV_KEYS.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {c.nav[id]}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{color: '#2563EB'}}>
            {c.nav.cta} →
          </a>
        </div>
        <LangSwitch className="mobile" />
      </div>
    </Fragment>
  );
}
