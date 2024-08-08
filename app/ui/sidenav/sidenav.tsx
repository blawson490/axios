'use client';
import Link from 'next/link';
import NavLinks from '@/app/ui/sidenav/nav-links';
import AxiosLogo from '@/app/ui/sidenav/axios-logo';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div
      ref={sidebarRef}
      className={clsx(
        'flex h-dvh flex-col pb-4 px-0 bg-white border-r transition-width duration-300 shadow-lg',
        { 'w-64': isOpen, 'w-16': !isOpen }
      )}
    >
      <div
        className="mb-2 flex items-center justify-center bg-white p-2 h-16 border-b cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-full">
          <AxiosLogo isOpen={isOpen} />
        </div>
      </div>
      <div className="flex grow justify-between flex-col space-x-0 space-y-2">
        <NavLinks isOpen={isOpen} />
        <div className="h-auto w-full grow rounded-md block"></div>
        <div className="w-full px-2 text-center flex flex-col items-center justify-center">
          <div className={clsx('flex', { 'w-full justify-end': isOpen })}>
            {isOpen ? (
              <button
                className="bg-purple-50 hidden md:block rounded-md border hover:bg-purple-100 p-2"
                onClick={() => setIsOpen(false)}
              >
                <ChevronDoubleLeftIcon className="w-4 h-4" />
              </button>
            ) : (
              <button
                className="bg-purple-50 hidden md:block rounded-md border hover:bg-purple-100 p-2"
                onClick={() => setIsOpen(true)}
              >
                <ChevronDoubleRightIcon className="w-4 h-4" />
              </button>
            )}
          </div>
          <hr className="my-2 border-gray-300 border-1 w-full" />
          <p className="text-xs text-gray-400">@ 2023 Axios Inc.</p>
        </div>
      </div>
    </div>
  );
}
