import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dra. Carolina',
  description: 'Cuidar da mente é um ato de coragem',
}

const font = Montserrat({ subsets: ['latin'], weight: ['500'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={font.className}>{children}</body>
    </html>
  )
}
