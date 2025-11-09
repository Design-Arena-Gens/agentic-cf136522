import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'भगवद् गीता - प्रथम अध्याय',
  description: 'धर्मक्षेत्रे कुरुक्षेत्रे - भगवद् गीता का प्रथम श्लोक',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
