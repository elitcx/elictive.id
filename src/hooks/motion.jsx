import { useEffect, useRef, useState } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useInView(opts = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) { setInView(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: opts.amount ?? 0.2, rootMargin: opts.rootMargin ?? '0px 0px -10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] || '');
  useEffect(() => {
    function update() {
      const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
      if (!els.length) return;
      const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
      if (nearBottom) { setActive(els[els.length - 1].id); return; }
      const trigger = window.innerHeight * 0.3;
      let best = els[0];
      for (const el of els) {
        if (el.getBoundingClientRect().top <= trigger) best = el;
        else break;
      }
      setActive(best.id);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [ids.join('|')]);
  return active;
}

export function Reveal({ as: As = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, inView] = useInView();
  const cls = [
    'reveal',
    delay ? `d${delay}` : '',
    inView ? 'in' : '',
    className
  ].filter(Boolean).join(' ');
  return <As ref={ref} className={cls} {...rest}>{children}</As>;
}
