import './globals.css'
import { Inter } from 'next/font/google'
import { SponsorBookLayout } from 'sponsorbook/components/sponsorBookLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'SponsorBook',
    description: 'Generated by create next app',
    viewport:
        'width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SponsorBookLayout>{children}</SponsorBookLayout>
            </body>
        </html>
    )
}
