import '@/app/ui/global.css'
import { Metadata } from 'next';
import { inter } from './ui/fonts';
import SideNav from './ui/sidenav/sidenav';
import TopBar from './ui/topbar/topbar';
 
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
      <body className={`${inter.className} antialiased`}>
      <link rel="icon" href="/favicon.png" sizes="any" />
        <div className="flex h-screen flex-row overflow-hidden bg-purple-50">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}