import '@/app/ui/global.css';
import SideNav from '@/app/ui/sidenav/sidenav';
import TopBar from '@/app/ui/topbar/topbar';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="h-full flex-shrink">
        <SideNav />
      </div>
      <div className="flex flex-grow">{children}</div>
    </div>
  );
}
