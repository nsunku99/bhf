import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Britannica Home Fashions Next.js Assessment',
  // description: 'Simple App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} max-w-[1500px] mx-auto`}>
        <main className='p-20'>{children}</main>
      </body>
    </html>
  );
}
