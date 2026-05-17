import { createContext, useContext, useEffect, useState } from 'react';
import { PROJECTS } from './portfolio-data.jsx';

export const LANG_ORDER = ['id', 'en'];

const STORAGE_KEY = 'elictive.lang';

export const COPY = {
  id: {
    nav: {
      services: 'Layanan',
      portfolio: 'Portofolio',
      about: 'Tentang',
      contact: 'Kontak',
      cta: 'Hubungi Kami'
    },
    hero: {
      overline: 'SOLO · JAWA TENGAH · INDONESIA',
      est: 'EST 2026',
      h1: ['Bantu usahamu', 'tampil profesional', 'di digital.'],
      subtitle: 'Help your business look professional online.',
      body: 'Studio digital untuk UMKM Solo Raya. Kami bantu kamu dari logo, desain media sosial, sampai website — dengan tampilan yang serius tapi tetap ramah.',
      ctaPrimary: 'Mulai Sekarang',
      ctaSecondary: 'Lihat Portofolio',
      meta: ['Branding', 'Social Design', 'Website'],
      scroll: 'SCROLL'
    },
    services: {
      overline: 'APA YANG KAMI TAWARKAN',
      title: 'Layanan.',
      sub: 'Paket lengkap untuk UMKM yang ingin hadir secara digital — dirancang agar usahamu terasa serius, tanpa kehilangan ciri lokalnya.',
      items: [
        { title: 'Branding & Identitas', titleAlt: 'Brand Identity', desc: 'Logo, palet warna, panduan visual — fondasi tampilan bisnis Anda.' },
        { title: 'Desain Media Sosial', titleAlt: 'Social Media Design', desc: 'Template Instagram, konten feed, dan highlight cover yang konsisten.' },
        { title: 'Website', titleAlt: 'Website', desc: 'Landing page sederhana hingga website lengkap. Mobile-friendly dan cepat.' }
      ],
      footNote: 'Harga disesuaikan dengan kebutuhan — tidak ada paket standar.',
      footLink: 'Diskusi gratis →'
    },
    portfolio: {
      overline: 'KARYA KAMI',
      title: 'Portofolio.',
      sub: 'Mock-up konsep untuk usaha lokal Solo.',
      countLabel: 'PROJECTS',
      disclaimer: '* Semua karya berikut adalah konsep mock-up yang dibuat sebagai demonstrasi — bukan klien aktif. Sengaja kami tampilkan apa adanya.',
      cta: 'Punya usaha yang butuh tampilan baru?',
      waBtn: 'Tertarik layanan ini?',
      waMsg: 'Halo elictive.id, saya tertarik dengan layanan {tag} seperti {title}.',
      projects: PROJECTS.map(p => p.id)
    },
    about: {
      overline: 'TENTANG ELICTIVE',
      h2: ['Studio digital', 'untuk UMKM lokal.'],
      p1: 'elictive.id adalah personal brand dan studio digital berbasis di Solo, Jawa Tengah. Kami membantu usaha kecil dan menengah tampil profesional di dunia digital — dari logo, desain media sosial, hingga website.',
      p2: 'Didirikan oleh seorang anak muda Solo yang percaya bahwa UMKM lokal layak punya tampilan digital yang serius.',
      pAlt: 'elictive.id is a Solo-based digital studio helping local UMKM look professional online — from branding to websites.',
      portfolioLink: 'Lihat portofolio pribadi →',
      panelHead: 'PRINSIP',
      panelId: 'FILE · 01 / 26',
      panelFoot: 'SOLO · JAWA TENGAH',
      traits: [
        { n: '01', label: 'TECH-FORWARD', desc: 'Alat modern, alur pikir jernih.' },
        { n: '02', label: 'APPROACHABLE', desc: 'Ramah, tanpa jargon membingungkan.' },
        { n: '03', label: 'PRECISE', desc: 'Perhatian pada setiap detail kecil.' },
        { n: '04', label: 'LOCAL', desc: 'Berakar di Solo, Indonesia.' }
      ]
    },
    contact: {
      overline: 'HUBUNGI KAMI',
      title: 'Mulai diskusi.',
      sub: 'Ceritakan usahamu — kami bantu pikirkan tampilannya. Konsultasi awal gratis, tanpa komitmen.',
      waLbl: 'JALUR CEPAT',
      waTitle: 'Chat langsung di WhatsApp.',
      waBtn: 'Chat di WhatsApp',
      waNote: 'Biasanya kami balas dalam 1×24 jam.',
      form: {
        nama: 'Nama',
        usaha: 'Nama Usaha',
        telepon: 'Nomor Telepon / WhatsApp',
        email: 'Email',
        kebutuhan: 'Kebutuhan',
        pesan: 'Pesan',
        submit: 'Kirim Pesan',
        submitting: 'Mengirim…',
        errorMsg: 'Gagal mengirim pesan. Silakan coba lagi.',
        successTitle: 'Pesan terkirim!',
        successBody: 'Kami akan segera menghubungi Anda — biasanya dalam 1×24 jam.',
        needOptions: ['Logo & Branding', 'Desain IG', 'Website', 'Paket Lengkap', 'Lainnya'],
        teleponHint: 'Contoh: 0812-3456-7890',
        errorWa: 'Atau chat langsung di WhatsApp'
      },
      waMsg: 'Halo elictive.id, saya tertarik dengan layanan kalian.'
    },
    footer: {
      copy: 'Semua hak dilindungi.',
      city: 'Solo, Jawa Tengah, Indonesia',
      portfolio: 'Portofolio Pribadi'
    }
  },
  en: {
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
      cta: 'Get in Touch'
    },
    hero: {
      overline: 'SOLO · CENTRAL JAVA · INDONESIA',
      est: 'EST 2026',
      h1: ['Help your business', 'look professional', 'online.'],
      subtitle: 'Bantu usahamu tampil profesional di digital.',
      body: 'A digital studio for small businesses across Greater Solo. From logos to social media design to websites — serious but still approachable.',
      ctaPrimary: 'Start a Project',
      ctaSecondary: 'View Portfolio',
      meta: ['Branding', 'Social Design', 'Website'],
      scroll: 'SCROLL'
    },
    services: {
      overline: 'WHAT WE OFFER',
      title: 'Services.',
      sub: 'A full kit for small businesses ready to show up online — designed to feel serious, without losing the local character.',
      items: [
        { title: 'Brand Identity', titleAlt: 'Branding & Identitas', desc: 'Logo, color palette, visual guidelines — the foundation of how your business looks.' },
        { title: 'Social Media Design', titleAlt: 'Desain Media Sosial', desc: 'Instagram templates, feed content, and consistent highlight covers.' },
        { title: 'Website', titleAlt: 'Website', desc: 'From simple landing pages to full sites. Mobile-friendly and fast.' }
      ],
      footNote: 'Pricing fits the project — no fixed packages.',
      footLink: 'Free consultation →'
    },
    portfolio: {
      overline: 'OUR WORK',
      title: 'Portfolio.',
      sub: 'Concept mock-ups for local Solo businesses.',
      countLabel: 'PROJECTS',
      disclaimer: '* Every piece below is a concept mock-up made as a demonstration — not active clients. We show our work openly.',
      cta: 'Got a business that needs a new look?',
      waBtn: 'Interested in this?',
      waMsg: "Hi elictive.id, I'm interested in {tag} like {title}.",
      projects: PROJECTS.map(p => p.en)
    },
    about: {
      overline: 'ABOUT ELICTIVE',
      h2: ['A digital studio', 'for local UMKM.'],
      p1: 'elictive.id is a personal brand and digital studio based in Solo, Central Java. We help small businesses look professional online — from logos to social media design to websites.',
      p2: 'Founded by a young creative from Solo who believes local businesses deserve a digital presence that feels serious.',
      pAlt: 'elictive.id adalah studio digital di Solo yang membantu UMKM lokal tampil profesional online — dari branding hingga website.',
      portfolioLink: 'View personal portfolio →',
      panelHead: 'PRINCIPLES',
      panelId: 'FILE · 01 / 26',
      panelFoot: 'SOLO · CENTRAL JAVA',
      traits: [
        { n: '01', label: 'TECH-FORWARD', desc: 'Modern tools, clear thinking.' },
        { n: '02', label: 'APPROACHABLE', desc: 'Friendly, no confusing jargon.' },
        { n: '03', label: 'PRECISE', desc: 'Attention to every small detail.' },
        { n: '04', label: 'LOCAL', desc: 'Rooted in Solo, Indonesia.' }
      ]
    },
    contact: {
      overline: 'CONTACT US',
      title: "Let's talk.",
      sub: 'Tell us about your business — we will help shape its look. First consultation is free, no strings attached.',
      waLbl: 'FAST LANE',
      waTitle: 'Chat with us on WhatsApp.',
      waBtn: 'Chat on WhatsApp',
      waNote: 'We usually reply within 24 hours.',
      form: {
        nama: 'Name',
        usaha: 'Business Name',
        telepon: 'Phone / WhatsApp Number',
        email: 'Email',
        kebutuhan: 'What you need',
        pesan: 'Message',
        submit: 'Send Message',
        submitting: 'Sending…',
        errorMsg: 'Failed to send message. Please try again.',
        successTitle: 'Message sent!',
        successBody: 'We will be in touch shortly — usually within 24 hours.',
        needOptions: ['Logo & Branding', 'IG Design', 'Website', 'Full Package', 'Other'],
        teleponHint: 'Example: 0812-3456-7890',
        errorWa: 'Or chat with us on WhatsApp'
      },
      waMsg: "Hi elictive.id, I'm interested in your services."
    },
    footer: {
      copy: 'All rights reserved.',
      city: 'Solo, Central Java, Indonesia',
      portfolio: 'Personal Portfolio'
    }
  }
};

const LangContext = createContext({
  lang: 'id',
  setLang: () => {},
  c: COPY.id
});

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'id';
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && COPY[saved]) return saved;
    } catch (e) { /* ignore */ }
    return 'id';
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }, [lang]);

  const setLang = (l) => { if (COPY[l]) setLangState(l); };

  return (
    <LangContext.Provider value={{ lang, setLang, c: COPY[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
