import Link from 'next/link';
import NavLinks from '@/app/ui/sidenav/nav-links';
import AxiosLogo from '@/app/ui/sidenav/axios-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 pb-4 md:px-0 bg-white border-r-2">
      <Link
        className="mb-2 flex h-10 items-center justify-center bg-white p-2 md:h-16 border-b-2"
        href="/"
      >
        <div className="w-full">
          <AxiosLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
          <div className='flex flex-col items-center justify-center'>
            <form className='w-full px-2 py-2'>
              <button className="flex w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-purple-50 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3 border-2">
                <div className="flex items-center w-full justify-center md:block">Sign Out</div>
              </button>
            </form>
              <hr className="my-2 border-gray-300 border-1 w-full" />
              <p className='text-xs text-gray-400'>
                @ 2023 Axios.in, Inc.
              </p>
          </div>
        </div>
      </div>
  );
}
