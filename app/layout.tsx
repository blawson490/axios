import '@/app/ui/global.css'
import { Metadata } from 'next';
import { inter } from './ui/fonts';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Axios Dashboard',
    default: 'Axios Dashboard',
  },
  description: 'The official Dashboard for Microsoft Entra Sign-ins',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={`${inter.className} antialiased`}>
          {children}
      </body>
    </html>
  );
}