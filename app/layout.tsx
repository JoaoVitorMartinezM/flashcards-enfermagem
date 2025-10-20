import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simulado de Enfermagem',
  description: 'Simulado para estudo de legislação e atuação profissional do Técnico em Enfermagem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}
