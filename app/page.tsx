'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  CreditCard,
  Database,
  Download,
  Gauge,
  LayoutDashboard,
  Menu,
  Package,
  PanelLeft,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Users,
  WalletCards,
  X,
} from 'lucide-react'

const CTA_URL = '#daftar'

const navItems = [
  ['Beranda', '#beranda'],
  ['Fitur', '#fitur'],
  ['Cara Kerja', '#cara-kerja'],
  ['Harga', '#harga'],
  ['FAQ', '#faq'],
]

const features = [
  ['Point of Sale', 'Proses transaksi dengan lebih cepat dan terorganisir.', ShoppingCart],
  ['Manajemen Produk', 'Kelola produk dan informasi barang dari satu tempat.', Package],
  ['Manajemen Stok', 'Pantau persediaan agar lebih mudah dikontrol.', Database],
  ['Laporan Penjualan', 'Pantau data penjualan dan aktivitas bisnis.', BarChart3],
  ['Pembayaran', 'Kelola status pembayaran dan proses langganan HINPOS.', CreditCard],
  ['Dashboard', 'Lihat informasi penting bisnis dalam satu tampilan.', LayoutDashboard],
  ['Dukungan Retail & F&B', 'Gunakan mode yang sesuai dengan karakter bisnis.', Store],
  ['Sistem Paket', 'Pilih paket sesuai kebutuhan usaha.', WalletCards],
  ['Verifikasi Pembayaran', 'Pembayaran paket dapat diverifikasi oleh admin HINAI Tech.', Check],
  ['Export Data', 'Data bisnis dapat diekspor untuk kebutuhan administrasi.', Download],
]

const pricing = [
  { name: 'STARTER', price: 'Gratis', note: 'Untuk mulai mengenal HINPOS.', features: ['Fitur dasar HINPOS', 'Dashboard bisnis', 'Mulai tanpa biaya'], action: 'Mulai Gratis' },
  { name: 'RETAIL', price: 'Rp149.999', suffix: '/ 30 hari', note: 'Untuk bisnis retail.', features: ['Seluruh fitur Starter', 'Fitur khusus Retail', 'Operasional toko'], action: 'Pilih Retail' },
  { name: 'F&B', price: 'Rp149.999', suffix: '/ 30 hari', note: 'Untuk bisnis makanan dan minuman.', features: ['Seluruh fitur Starter', 'Fitur khusus F&B', 'Operasional F&B'], action: 'Pilih F&B' },
  { name: 'PRO', price: 'Rp250.000', suffix: '/ 30 hari', note: 'Untuk bisnis yang membutuhkan fitur lebih lengkap.', features: ['Fitur sesuai mode toko', 'Fitur Pro', 'Fitur tambahan yang tersedia'], action: 'Pilih Pro', featured: true },
  { name: 'LIFETIME', price: 'Rp2.500.000', suffix: 'Sekali bayar', note: 'Gunakan semua fitur tanpa masa 30 hari.', features: ['Semua fitur', 'Semua mode usaha', 'Tidak perlu pembayaran bulanan'], action: 'Pilih Lifetime', badge: 'SEKALI BAYAR' },
]

const faqs = [
  ['Apa itu HINPOS?', 'HINPOS adalah aplikasi Point of Sale dan manajemen bisnis dari HINAI Tech untuk membantu usaha mengelola transaksi dan operasional bisnis.'],
  ['HINPOS cocok untuk siapa?', 'HINPOS ditujukan untuk toko retail, bisnis F&B, UMKM, restoran, cafe, kedai, dan berbagai bisnis lokal.'],
  ['Apakah HINPOS gratis?', 'Ya. HINPOS menyediakan paket Starter gratis.'],
  ['Berapa harga HINPOS?', 'Retail Rp149.999/30 hari, F&B Rp149.999/30 hari, Pro Rp250.000/30 hari, dan Lifetime Rp2.500.000 sekali bayar.'],
  ['Apa itu Lifetime?', 'Paket Lifetime adalah pembayaran sekali sebesar Rp2.500.000 untuk membuka seluruh fitur tanpa masa 30 hari.'],
  ['Apakah pembayaran langsung mengaktifkan paket?', 'Pembayaran perlu mengikuti proses verifikasi yang ditetapkan HINAI Tech.'],
  ['Apa yang terjadi jika paket 30 hari habis?', 'Jika belum diperpanjang, paket 30 hari akan kembali ke Starter sesuai aturan sistem HINPOS.'],
  ['Apakah HINPOS bisa digunakan untuk retail dan F&B?', 'Ya. HINPOS menyediakan mode yang disesuaikan untuk Retail dan F&B.'],
]

function Logo() {
  return (
    <a href="#beranda" aria-label="HINPOS beranda">
      <img
        src="/icon.png"
        alt="HINPOS"
        height="20"
        style={{
          width: 'auto',
          maxWidth: '50px',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </a>
  )
}

function ProductMockup() {
  return <div className="mockup-wrap" aria-label="Preview dashboard HINPOS dengan data demo">
    <div className="float-card float-top"><span className="float-icon green"><BarChart3 /></span><span><b>Rp8.240.000</b><small>Penjualan Hari Ini</small></span><em>+12.8%</em></div>
    <div className="app-window">
      <div className="app-sidebar"><div className="mini-logo">H</div>{[LayoutDashboard, ShoppingCart, Package, BarChart3, Gauge].map((Icon, i) => <span key={i} className={i === 0 ? 'active' : ''}><Icon /></span>)}<span className="sidebar-bottom"><Users /></span></div>
      <div className="app-main"><div className="app-header"><div><small>Tuesday, 08 October 2026</small><h3>Selamat datang di HINPOS</h3></div><div className="avatar">D</div></div><div className="metric-grid"><div><small>Penjualan Hari Ini</small><strong>Rp8.240.000</strong><em>+12.8%</em></div><div><small>Transaksi</small><strong>128</strong><em>+8.2%</em></div><div><small>Produk</small><strong>1.248</strong><em>Aktif</em></div></div><div className="chart-card"><div className="card-heading"><b>Ringkasan Penjualan</b><small>7 hari terakhir⌄</small></div><div className="chart"><i /><i /><i /><i /><i /><i /><i /></div><div className="chart-labels"><span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span></div></div><div className="recent"><div className="card-heading"><b>Transaksi Terbaru</b><small>Lihat semua →</small></div>{['#INV-24081', '#INV-24080', '#INV-24079'].map((id, i) => <div className="transaction" key={id}><span className="trans-icon">{i === 1 ? <Store /> : <ShoppingBag />}</span><span><b>{id}</b><small>{i === 0 ? 'Kopi Senja' : i === 1 ? 'Toko Harapan' : 'Lokal Mart'}</small></span><strong>{i === 0 ? 'Rp245.000' : i === 1 ? 'Rp890.000' : 'Rp1.240.000'}</strong><em>Selesai</em></div>)}</div></div>
    </div>
    <div className="float-card float-bottom"><span className="float-icon blue"><Package /></span><span><b>Stok Produk</b><small>12 produk perlu restock</small></span><ArrowRight /></div>
  </div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  return <main>
    <nav className="navbar">
  <div className="container nav-inner">
    <Logo />

    <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
      {navItems.map(([label, href]) => (
        <a
          key={href}
          href={href}
          onClick={() => setMenuOpen(false)}
        >
          {label}
        </a>
      ))}

      <a
        className="nav-cta"
        href={CTA_URL}
        onClick={() => setMenuOpen(false)}
      >
        Mulai Sekarang <ArrowRight />
      </a>
    </div>

    <button
      className="menu-button"
      aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X /> : <Menu />}
    </button>
  </div>
</nav>
    <section id="beranda" className="hero"><div className="hero-glow" /><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow"><Sparkles /> HINPOS</div><h1>Kasir lebih praktis.<br /><span>Bisnis lebih terkontrol.</span></h1><p>HINPOS membantu toko dan bisnis F&B mengelola transaksi, stok, pembayaran, dan laporan dalam satu aplikasi.</p><div className="hero-actions"><a className="button button-primary" href={CTA_URL}>Mulai Sekarang <ArrowRight /></a><a className="button button-ghost" href="#fitur">Lihat Fitur</a></div><div className="trust-note"><span><Check /> Starter gratis untuk memulai</span><span><Check /> Dirancang untuk bisnis sehari-hari</span></div></div><ProductMockup /></div></section>

    <section className="value-bar"><div className="container value-inner"><p>Dirancang untuk membantu <strong>operasional bisnis sehari-hari.</strong></p><div className="value-points"><span><Check /> Kasir lebih praktis</span><span><Check /> Data lebih terorganisir</span><span><Check /> Laporan mudah dipantau</span><span><Check /> Sesuai kebutuhan usaha</span></div></div></section>

    <section className="section problem-section"><div className="container split-heading"><div><div className="section-kicker">OPERASIONAL YANG LEBIH RAPI</div><h2>Masih mengelola kasir<br /><span>secara manual?</span></h2></div><p>Ketika bisnis bertumbuh, pencatatan manual bisa membuat pekerjaan sehari-hari terasa lebih rumit. HINPOS membantu menyederhanakan semuanya dalam satu sistem yang mudah digunakan.</p></div><div className="container problem-grid">{[['Perhitungan transaksi memakan waktu', '01'], ['Stok sulit dipantau', '02'], ['Data penjualan tercecer', '03'], ['Rekap laporan dilakukan manual', '04'], ['Sulit mengetahui kondisi bisnis dengan cepat', '05']].map(([text, no]) => <div className="problem-card" key={no}><span>{no}</span><b>{text}</b><ArrowRight /></div>)}</div></section>

    <section id="fitur" className="section features-section"><div className="container"><div className="section-heading"><div><div className="section-kicker">FITUR UTAMA</div><h2>Semua yang dibutuhkan<br /><span>untuk operasional kasir.</span></h2></div><p>HINPOS membantu Anda mengelola hal-hal penting dalam bisnis, dari transaksi hingga laporan.</p></div><div className="feature-grid">{features.map(([title, desc, Icon]) => <article className="feature-card" key={title}><div className="feature-icon"><Icon /></div><h3>{title as string}</h3><p>{desc as string}</p><ArrowRight className="feature-arrow" /></article>)}</div></div></section>

    <section className="section modes-section"><div className="container"><div className="section-heading centered"><div><div className="section-kicker">FLEKSIBEL UNTUK BISNIS ANDA</div><h2>Cocok untuk berbagai<br /><span>jenis usaha.</span></h2></div><p>Apapun bentuk bisnis Anda, HINPOS hadir untuk membantu operasional terasa lebih sederhana.</p></div><div className="mode-grid"><article className="mode-card retail"><div className="mode-content"><span className="mode-label">MODE 01 / RETAIL</span><h3>Dirancang untuk kebutuhan toko retail.</h3><div className="mode-tags"><span>Transaksi penjualan</span><span>Produk & stok</span><span>Kategori</span><span>Laporan</span></div><a href={CTA_URL}>Gunakan HINPOS untuk Retail <ArrowRight /></a></div><div className="mode-visual retail-visual"><div className="shelf"><span /><span /><span /><span /></div><div className="receipt"><small>HINPOS POS</small><b>Rp 2.485.000</b><i>TRANSAKSI SELESAI</i></div></div></article><article className="mode-card food"><div className="mode-content"><span className="mode-label">MODE 02 / F&B</span><h3>Bisnis F&B juga lebih mudah dikelola.</h3><div className="mode-tags"><span>Kasir</span><span>Produk / menu</span><span>Transaksi</span><span>Operasional</span></div><a href={CTA_URL}>Gunakan HINPOS untuk F&B <ArrowRight /></a></div><div className="mode-visual food-visual"><div className="plate" /><div className="food-lines"><span /><span /><span /></div></div></article></div></div></section>

    <section id="cara-kerja" className="section steps-section"><div className="container"><div className="section-heading"><div><div className="section-kicker">CARA KERJA</div><h2>Mulai menggunakan HINPOS<br /><span>dalam beberapa langkah.</span></h2></div><p>Mulai dari Starter gratis, lalu pilih paket yang sesuai ketika bisnis Anda siap berkembang.</p></div><div className="steps-grid">{[['Buat Toko', 'Daftarkan bisnis Anda.'], ['Pilih Paket', 'Pilih paket yang sesuai dengan kebutuhan bisnis.'], ['Lakukan Pembayaran', 'Ikuti instruksi pembayaran yang tersedia.'], ['Verifikasi', 'Pembayaran diverifikasi oleh admin HINAI Tech.'], ['Mulai Berjualan', 'Gunakan HINPOS untuk menjalankan operasional bisnis.']].map(([title, desc], i) => <div className="step" key={title}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{desc}</p></div>{i < 4 && <ArrowRight />}</div>)}</div></div></section>

    <section id="harga" className="section pricing-section"><div className="container"><div className="section-heading"><div><div className="section-kicker">PAKET & HARGA</div><h2>Pilih paket yang sesuai<br /><span>dengan bisnis Anda.</span></h2></div><p>Mulai dari versi gratis, lalu tingkatkan sesuai kebutuhan bisnis.</p></div><div className="pricing-grid">{pricing.map((plan) => <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>{plan.badge && <div className="price-badge">{plan.badge}</div>}<div className="plan-name">{plan.name}</div><div className="plan-price">{plan.price}{plan.suffix && <small>{plan.suffix}</small>}</div><p>{plan.note}</p><div className="price-divider" />{plan.features.map((feature) => <span className="price-feature" key={feature}><Check /> {feature}</span>)}<a className={`button ${plan.featured ? 'button-primary' : 'button-outline'}`} href={CTA_URL}>{plan.action} <ArrowRight /></a></article>)}</div><p className="pricing-note">Starter gratis dan langsung aktif. Paket Retail, F&B, dan Pro berlaku 30 hari. Paket Lifetime merupakan pembayaran sekali untuk membuka seluruh fitur. Jika masa paket 30 hari berakhir dan belum diperpanjang, akun akan kembali ke paket Starter.</p></div></section>

    <section className="section compare-section"><div className="container"><div className="section-heading"><div><div className="section-kicker">PERBANDINGAN PAKET</div><h2>Temukan paket yang<br /><span>paling sesuai.</span></h2></div></div><div className="compare-wrap"><table><thead><tr><th>Fitur</th><th>Starter</th><th>Retail</th><th>F&B</th><th>Pro</th><th>Lifetime</th></tr></thead><tbody>{['Point of Sale', 'Manajemen Produk', 'Manajemen Stok', 'Laporan Penjualan', 'Mode usaha', 'Export data'].map((row, i) => <tr key={row}><td>{row}</td>{[0, 1, 2, 3, 4].map((col) => <td key={col}>{i === 4 ? (col === 1 ? <Check /> : col === 2 ? <Check /> : col > 2 ? <Check /> : '—') : i === 5 ? (col === 0 ? 'Tersedia' : <Check />) : <Check />}</td>)}</tr>)}</tbody></table></div></div></section>

    <section className="section benefit-section"><div className="container benefit-panel"><div><div className="section-kicker">LEBIH DARI SEKADAR KASIR</div><h2>Bisnis rapi,<br /><span>pikiran tenang.</span></h2><p>HINPOS membantu Anda fokus pada hal yang lebih penting: menjalankan dan mengembangkan bisnis.</p></div><div className="benefit-list">{[['Lebih praktis', 'Kurangi pekerjaan administratif yang berulang.'], ['Lebih terorganisir', 'Kelola data bisnis dalam satu sistem.'], ['Lebih mudah dipantau', 'Informasi penting bisnis lebih mudah dilihat.'], ['Siap berkembang', 'Mulai dari Starter dan gunakan paket sesuai kebutuhan.']].map(([title, desc], i) => <div key={title}><span>0{i + 1}</span><b>{title}</b><p>{desc}</p></div>)}</div></div></section>

    <section className="section faq-section" id="faq"><div className="container faq-grid"><div><div className="section-kicker">PERTANYAAN UMUM</div><h2>Ada yang ingin<br /><span>ditanyakan?</span></h2><p>Temukan jawaban singkat tentang HINPOS dan paket yang tersedia.</p><a href="https://hinaitech.com/" className="text-link">Kunjungi HINAI Tech <ArrowRight /></a></div><div className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{question}</span><ChevronDown /></button>{openFaq === i && <p>{answer}</p>}</div>)}</div></div></section>

    <section id="daftar" className="final-cta">
  <div className="cta-glow" />

  <div className="container final-inner">
    <div className="eyebrow">
      <Sparkles /> HINPOS
    </div>

    <h2>
      Kasir lebih praktis.
      <br />
      <span>Bisnis lebih terkontrol.</span>
    </h2>

    <p>
      Mulai dari Starter gratis dan kenali cara HINPOS membantu operasional bisnis Anda.
    </p>

    <a
      className="button button-light"
      href="https://wa.me/6282144137914?text=Halo%20Admin%2C%20saya%20tertarik%20dengan%20HINPOS.%20Saya%20ingin%20mendapatkan%20informasi%20lebih%20lanjut."
      target="_blank"
      rel="noopener noreferrer"
    >
      Mulai Sekarang <ArrowRight />
    </a>
  </div>
</section>

    <footer><div className="container footer-top"><div><Logo /><p>Smart Point of Sale & Business<br />Management Platform.</p></div><div className="footer-links"><div><b>Produk</b><a href="#fitur">Fitur</a><a href="#harga">Harga</a></div><div><b>Perusahaan</b><a href="https://hinaitech.com/">HINAI Tech</a><a href="#faq">FAQ</a></div><div><b>Mulai</b><a href={CTA_URL}>Mulai Sekarang</a><a href="https://pos.hinaitech.com/">Kontak</a></div></div></div><div className="container footer-bottom"><span>© 2026 HINPOS. All rights reserved.</span><span>HINPOS - Dibuat untuk membantu bisnis bertumbuh.</span></div></footer>
  </main>
}
