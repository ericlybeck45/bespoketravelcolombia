import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bespoke Travel & Tours of Colombia',
  description: '25 years of U.S.-to-Colombia bespoke travel planning expertise.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
