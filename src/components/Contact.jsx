import { Fragment, useCallback, useState } from 'react';
import { Reveal } from '../hooks/motion.jsx';
import { useLang } from '../i18n.jsx';

export const CONFIG = {
  whatsappNumber: '6282261592211',
  instagramHandle: 'elictive.id',
  formEndpoint: 'https://formspree.io/f/xykvgzyw',
  email: 'elictive@gmail.com'
};

function Field({ label, type = 'text', value, onChange, multiline, options, required, hint }) {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const cls = `field ${focused ? 'focused' : ''} ${hasValue ? 'has-value' : ''}`;
  const id = `f-${label.replace(/\W+/g, '-').toLowerCase()}`;

  let control;
  if (options) {
    control = (
      <Fragment>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <option value=""></option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <svg className="caret" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 5 L6 8 L9 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Fragment>
    );
  } else if (multiline) {
    control = (
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={4}
        required={required}
      />
    );
  } else {
    control = (
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
      />
    );
  }

  return (
    <div className={cls}>
      <label htmlFor={id}>
        {label}{required && <span className="field-req" aria-label="required"> *</span>}
      </label>
      {control}
      {hint && focused && !hasValue && <span className="field-hint">{hint}</span>}
    </div>
  );
}

function ContactForm() {
  const { c } = useLang();
  const f = c.contact.form;
  const waLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(c.contact.waMsg)}`;
  const [data, setData] = useState({ name: '', biz: '', phone: '', email: '', need: '', msg: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const update = (k) => (v) => setData((d) => ({ ...d, [k]: v }));

  const onSubmit = useCallback(async () => {
    if (submitting) return;
    setSubmitting(true);
    setError(false);
    try {
      if (CONFIG.formEndpoint && CONFIG.formEndpoint.startsWith('http')) {
        const res = await fetch(CONFIG.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error('non-2xx');
      } else {
        await new Promise((r) => setTimeout(r, 700));
      }
      setSuccess(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }, [data, submitting]);

  if (success) {
    return (
      <div className="form-success">
        <svg className="check-svg" viewBox="0 0 100 100">
          <circle className="ring" cx="50" cy="50" r="40" />
          <path className="check" d="M32 51 L45 64 L70 38" />
        </svg>
        <h3>{f.successTitle}</h3>
        <p>{f.successBody}</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <Field label={f.nama} value={data.name} onChange={update('name')} required />
      <Field label={f.usaha} value={data.biz} onChange={update('biz')} />
      <Field label={f.telepon} type="tel" value={data.phone} onChange={update('phone')} required hint={f.teleponHint} />
      <Field label={f.email} type="email" value={data.email} onChange={update('email')} />
      <Field label={f.kebutuhan} value={data.need} onChange={update('need')} options={f.needOptions} />
      <Field label={f.pesan} value={data.msg} onChange={update('msg')} multiline required />
      {error && (
        <div className="form-error" role="alert">
          <span>{f.errorMsg}</span>
          <a href={waLink} target="_blank" rel="noreferrer" className="form-error-wa">
            {f.errorWa} <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
      <button type="submit" className="form-submit" disabled={submitting}>
        {submitting ? f.submitting : f.submit} <span className="arr">→</span>
      </button>
    </form>
  );
}

export function Contact() {
  const { c } = useLang();
  const waLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(c.contact.waMsg)}`;
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="overline">{c.contact.overline}</div>
          <h2 className="h2">{c.contact.title}</h2>
          <p className="sub">{c.contact.sub}</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="wa-card">
              <div className="lbl">{c.contact.waLbl}</div>
              <h3 className="title">{c.contact.waTitle}</h3>
              <a href={waLink} className="wa-btn" target="_blank" rel="noreferrer">
                {c.contact.waBtn} <span className="arr">→</span>
              </a>
              <p className="note">{c.contact.waNote}</p>
              <a
                href={`https://instagram.com/${CONFIG.instagramHandle}`}
                target="_blank" rel="noreferrer"
                className="ig"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                @{CONFIG.instagramHandle}
              </a>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
