import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'ORBIS ENM | Entertainment & Media', description: 'Creators to the World. MCN & Entertainment Company.', openGraph: { title: 'ORBIS ENM', description: 'MCN & Entertainment Company', images: ['/orbis-logo.png'] } }
export default function RootLayout({children}:{children:React.ReactNode}){ return <html lang="ko"><body>{children}</body></html> }
