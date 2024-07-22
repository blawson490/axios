import '@/app/ui/global.css'
import { Metadata } from 'next';
import SideNav from '../ui/sidenav/sidenav';
 
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
        <div className="flex h-screen flex-row overflow-hidden bg-purple-50">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          {children}
        </div>
  );
}