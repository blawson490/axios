import { Metadata } from 'next';
import '@/app/ui/global.css'
import TopBar from '@/app/ui/topbar/topbar'; 
import {
  HomeIcon,
} from '@heroicons/react/24/outline';


export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function Page() {
  const breadcrumbs = [
    { label: 'Dashboard', href: '/dashboard', active: true, icon: HomeIcon }
];
  return (
    <div className='flex flex-col w-full'>
        <TopBar breadcrumbs={breadcrumbs}/>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          <p>Dashboard Page</p>
        </div>
    </div>
  );
}