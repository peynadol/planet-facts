import type { Metadata } from 'next';
import { Antonio, League_Spartan } from 'next/font/google';
import './globals.css';
import Header from './components/layout/header';

const antonio = Antonio({
  variable: '--font-antonio',
  subsets: ['latin'],
});

const spartan = League_Spartan({
  variable: '--font-spartan',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Planet Facts',
  description: 'Facts about the planets in our solar system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${antonio.variable} ${spartan.variable} antialiased 
        bg-[url(/background-stars.svg)] bg-cover bg-no-repeat bg-center h-dvh]
        `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
