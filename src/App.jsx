import { useEffect } from 'react';
import { LangProvider } from './i18n.jsx';
import { Nav } from './components/Nav.jsx';
import { Hero } from './components/Hero.jsx';
import { Services } from './components/Services.jsx';
import { Portfolio } from './components/Portfolio.jsx';
import { About } from './components/About.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

export function App() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    let phase = 'idle';
    const addEntrance = () => {
      if (phase === 'fired' || phase === 'done') return;
      phase = 'fired';
      document.body.classList.add('entrance');
    };
    const fire = () => {
      if (phase !== 'idle' && phase !== 'pending') return;
      if (document.visibilityState === 'visible') {
        phase = 'pending';
        requestAnimationFrame(addEntrance);
      }
    };
    fire();
    const onVis = () => {
      if (document.visibilityState === 'visible') {
        if (phase === 'idle') fire();
      } else {
        if (phase === 'fired' || phase === 'pending') {
          document.body.classList.remove('entrance');
          phase = 'done';
        }
      }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
