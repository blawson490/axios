'use client';
 import {
  UserGroupIcon,
  HomeIcon,
  Cog6ToothIcon,
  ExclamationCircleIcon,
  ClipboardDocumentListIcon,
  EyeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const sections = [
    {
      title: 'GENERAL',
      links: [
        { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
        { name: 'Users', href: '/users', icon: UserGroupIcon },
        { name: 'Logs', href: '/logs', icon: ClipboardDocumentListIcon },
      ],
    },
    {
      title: 'TOOLS',
      links: [
        { name: 'Overview', href: '/overview', icon: EyeIcon },
        { name: 'Reports', href: '/reports', icon: ChartBarIcon },
        { name: 'Alerts', href: '/alerts', icon: ExclamationCircleIcon },
      ],
    },
    {
      title: 'SUPPORT',
      links: [
        { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
        { name: 'Documentation', href: '/documentation', icon: DocumentTextIcon },
        { name: 'FAQ', href: '/faq', icon: QuestionMarkCircleIcon },
        { name: 'Contact Us', href: '/contact', icon: EnvelopeIcon },
      ],
    },
  ];

export default function NavLinks() {
  const pathname = usePathname();
 
  return (
    <>
      {sections.map((section, sectionIndex) => (
        <div key={section.title}>
          <h2 className="mb-2 pl-4 text-xs text-gray-400 font-semibold">{section.title}</h2>
          {section.links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'flex h-9 grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-purple-50 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3 md:mx-2',
                  {
                    'bg-purple-50 text-purple-600 font-bold': pathname === link.href,
                  },
                )}
              >
                <LinkIcon className="w-5" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
          {sectionIndex < sections.length - 1 && (
            <hr className="my-2 border-gray-300" />
          )}
        </div>
      ))}
    </>
  );
}