import { Metadata } from 'next';
import Footer from '../components/Footer';
import Header from '../components/headers/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hội An Mooncake - Bánh Trung Thu',
  description: 'Hội An Mooncake - Bánh Trung Thu',
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
