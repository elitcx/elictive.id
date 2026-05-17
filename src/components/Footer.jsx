import { Logo } from './Logo.jsx';
import { CONFIG } from './Contact.jsx';
import { useLang } from '../i18n.jsx';

const NAV_KEYS = ['services', 'portfolio', 'about', 'contact'];

export function Footer() {
  const { c } = useLang();
  const yr = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="id">
            <Logo />
            <span>elictive.id</span>
          </div>
          <div className="copy">© {yr} elictive.id — {c.footer.copy}</div>
        </div>

        <div className="footer-links">
          {NAV_KEYS.map((id) => (
            <a key={id} href={`#${id}`}>{c.nav[id]}</a>
          ))}
        </div>

        <div className="footer-end">
          <div className="city">{c.footer.city}</div>
          <a
            href={`https://instagram.com/${CONFIG.instagramHandle}`}
            target="_blank" rel="noreferrer"
          >
            @{CONFIG.instagramHandle}
          </a>
          <a
            href="https://elitcxportfolio.vercel.app/"
            target="_blank" rel="noreferrer"
          >
            {c.footer.portfolio}
          </a>
        </div>
      </div>
    </footer>
  );
}
