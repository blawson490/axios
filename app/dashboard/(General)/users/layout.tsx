import '@/app/ui/global.css'
import TopBar from '@/app/ui/topbar/topbar'; 
import {
    UserGroupIcon,
  } from '@heroicons/react/24/outline';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

const breadcrumbs = [
    { label: 'Users', href: '/users', active: true, icon: UserGroupIcon }
];

  return (
    <div className='flex flex-col w-full'>
        <TopBar breadcrumbs={breadcrumbs}/>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );

}