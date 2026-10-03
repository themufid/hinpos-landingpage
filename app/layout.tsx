import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HINPOS - Aplikasi Kasir & Manajemen Bisnis | HINAI Tech',
  description: 'HINPOS adalah aplikasi kasir dan manajemen bisnis untuk toko retail, F&B, UMKM, restoran, cafe, dan bisnis lokal. Mulai dengan Starter gratis.',
  keywords: ['aplikasi kasir', 'software kasir', 'POS Indonesia', 'aplikasi POS', 'kasir toko', 'kasir restoran', 'kasir cafe', 'aplikasi kasir UMKM', 'manajemen bisnis', 'HINPOS', 'HINAI Tech'],
  generator: 'HINAI Tech',
  openGraph: {
    title: 'HINPOS - Kasir lebih praktis. Bisnis lebih terkontrol.',
    description: 'Kelola transaksi, stok, pembayaran, dan laporan dalam satu aplikasi.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'HINPOS by HINAI Tech',
  },
  icons: {
    icon: [{ url: '/icon.png', media: '(prefers-color-scheme: light)' }, { url: '/icon.png', media: '(prefers-color-scheme: dark)' }, { url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#07111f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
