// =============================================================================
// PORTFOLIO DATA — add / edit / reorder projects here
//
// Each entry has:
//   thumb  — React component (custom art) OR image path string e.g. '/portfolio/my-project.png'
//   id     — Indonesian text
//   en     — English text
//
// To add a new project:
//   1. Copy an existing entry below
//   2. Fill in the text for both languages
//   3. For thumb: use an image path (easiest) or write a new Thumb component
//   4. Done — the card count, grid, and both language files update automatically
// =============================================================================

// ---- Thumb components (custom CSS/SVG art) -----------------------------------
// You can keep these here or move each to its own file. For new real-client
// projects an image path is usually simpler — see the instructions above.

function ThumbWarung() {
  return (
    <div className="pf-thumb thumb-warung">
      <div className="thumb-warung-paper" />
      <div className="thumb-warung-grain" />
      <div className="thumb-warung-corner tl" />
      <div className="thumb-warung-corner tr" />
      <div className="thumb-warung-corner bl" />
      <div className="thumb-warung-corner br" />
      <div className="wm">
        <div className="est">— SINCE 1998 —</div>
        <div className="stamp">Warung</div>
        <div className="ornament">❦</div>
        <div className="stamp xl"><span className="amp">Bu Sari</span></div>
        <div className="dots">
          <span /><span /><span />
        </div>
        <div className="tag">MASAKAN RUMAH · SOLO</div>
      </div>
    </div>
  );
}

function ThumbLaundry() {
  return (
    <div className="pf-thumb thumb-laundry">
      <svg className="thumb-laundry-wave" viewBox="0 0 600 450" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,360 C 150,300 300,420 450,340 S 600,300 600,330 L 600,450 L 0,450 Z" fill="rgba(37,99,235, 0.08)" />
        <path d="M0,390 C 200,340 350,440 600,380 L 600,450 L 0,450 Z" fill="rgba(37,99,235, 0.14)" />
      </svg>
      <div className="bubbles">
        <span className="b b1" />
        <span className="b b2" />
        <span className="b b3" />
        <span className="b b4" />
        <span className="b b5 dot" />
      </div>
      <div className="wm">
        <div className="lab"><span className="dot" /> LAUNDRY KILOAN</div>
        <div className="name">Laundry<br /><em>Express</em></div>
        <div className="sub">Bersih · Cepat · Wangi</div>
      </div>
      <div className="thumb-laundry-pricetag">
        <div className="pt-lbl">MULAI</div>
        <div className="pt-num">Rp 5K<span>/kg</span></div>
      </div>
    </div>
  );
}

function ThumbBatik() {
  return (
    <div className="pf-thumb thumb-batik">
      <svg className="thumb-batik-pattern" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id="kawung" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="0" cy="0" r="10" fill="none" stroke="#daa520" strokeWidth="0.6" />
            <circle cx="40" cy="0" r="10" fill="none" stroke="#daa520" strokeWidth="0.6" />
            <circle cx="0" cy="40" r="10" fill="none" stroke="#daa520" strokeWidth="0.6" />
            <circle cx="40" cy="40" r="10" fill="none" stroke="#daa520" strokeWidth="0.6" />
            <circle cx="20" cy="20" r="10" fill="none" stroke="#daa520" strokeWidth="0.6" />
            <circle cx="20" cy="20" r="2.5" fill="#daa520" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#kawung)" opacity="0.55" />
      </svg>
      <div className="thumb-batik-frame">
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />
      </div>
      <div className="wm">
        <div className="top">TOKO BATIK · EST 1997</div>
        <div className="rule" />
        <div className="name">Sekar</div>
        <div className="dot-row">
          <span className="dot" /><span className="dot" /><span className="dot" />
        </div>
        <div className="top sub">SOLO · JAWA TENGAH</div>
      </div>
    </div>
  );
}

function ThumbBengkel() {
  return (
    <div className="pf-thumb thumb-bengkel">
      <div className="stripes" />
      <div className="thumb-bengkel-checker" />
      <div className="accent-block" />
      <svg className="thumb-bengkel-bolt" viewBox="0 0 40 40" aria-hidden="true">
        <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" fill="none" stroke="#fff" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="3" fill="#fff" />
      </svg>
      <svg className="thumb-bengkel-bolt b2" viewBox="0 0 40 40" aria-hidden="true">
        <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" fill="none" stroke="#2563EB" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="3" fill="#2563EB" />
      </svg>
      <div className="wm">
        <div className="id"><span className="id-num">NO. 04</span> BENGKEL · SOLO BARAT</div>
        <div className="name">Pak Joko<span>Motor Service</span></div>
        <div className="rule" />
        <div className="badges">
          <span className="badge">SERVICE</span>
          <span className="badge ghost">SPAREPART</span>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// PROJECT LIST — add new entries here
// =============================================================================

export const PROJECTS = [
  {
    thumb: ThumbWarung,
    accent: '#e4b863',
    id: {
      tag: 'BRANDING',
      title: 'Warung Bu Sari',
      desc: 'Konsep identitas visual untuk warung makan lokal Solo — hangat, jujur, dan mudah diingat.',
      meta: ['Logo', 'Menu Print', 'Signage'],
    },
    en: {
      tag: 'BRANDING',
      title: 'Warung Bu Sari',
      desc: 'Visual identity concept for a local Solo home-cooking warung — warm, honest, memorable.',
      meta: ['Logo', 'Menu Print', 'Signage'],
    },
  },
  {
    thumb: ThumbLaundry,
    accent: '#2563EB',
    id: {
      tag: 'BRANDING',
      title: 'Laundry Express',
      desc: 'Rebranding untuk jasa laundry kiloan di kawasan Banjarsari — bersih, profesional, modern.',
      meta: ['Logo', 'Brand Guide', 'Packaging'],
    },
    en: {
      tag: 'BRANDING',
      title: 'Laundry Express',
      desc: 'Rebrand concept for a kilo-laundry service in Banjarsari — clean, professional, modern.',
      meta: ['Logo', 'Brand Guide', 'Packaging'],
    },
  },
  {
    thumb: ThumbBatik,
    accent: '#daa520',
    id: {
      tag: 'DESAIN IG',
      title: 'Toko Batik Sekar',
      desc: 'Set template Instagram untuk toko batik tradisional — elegan, klasik, konsisten.',
      meta: ['Feed (12)', 'Story', 'Highlight Cover'],
    },
    en: {
      tag: 'IG DESIGN',
      title: 'Toko Batik Sekar',
      desc: 'Instagram template set for a traditional batik shop — elegant, classic, consistent.',
      meta: ['Feed (12)', 'Story', 'Highlight Cover'],
    },
  },
  {
    thumb: ThumbBengkel,
    accent: '#2563EB',
    id: {
      tag: 'WEBSITE',
      title: 'Bengkel Motor Pak Joko',
      desc: 'Landing page konsep untuk bengkel motor di Solo Barat — industrial, tegas, terpercaya.',
      meta: ['Landing Page', 'Mobile', 'Booking Form'],
    },
    en: {
      tag: 'WEBSITE',
      title: 'Bengkel Motor Pak Joko',
      desc: 'Landing page concept for a West Solo motorcycle workshop — industrial, decisive, trustworthy.',
      meta: ['Landing Page', 'Mobile', 'Booking Form'],
    },
  },

  // ---------------------------------------------------------------------------
  // ADD NEW PROJECTS BELOW — copy the block above and fill it in.
  // For the thumb, use an image path string instead of a component:
  //
  //   thumb: '/portfolio/my-project.png',
  //
  // The image should be placed in the public/portfolio/ folder.
  // ---------------------------------------------------------------------------
];
