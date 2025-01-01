import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Ampledigi',
    description: `Ampledigi offers complete digital solutions, including web and app development, web design, iOS development, digital marketing, and creative media services like video editing, logo design, and more. We empower businesses to succeed in the digital era.`,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} antialiased bg-cs-primary text-white`}>
                {children}
            </body>
        </html>
    );
}
