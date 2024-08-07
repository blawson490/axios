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
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const sections = [
  {
    title: 'GENERAL',
    links: [
      { name: 'Home', href: '/dashboard/home', icon: HomeIcon },
      { name: 'Users', href: '/dashboard/users', icon: UserGroupIcon },
      {
        name: 'Logs',
        href: '/dashboard/logs',
        icon: ClipboardDocumentListIcon,
      },
    ],
  },
  {
    title: 'TOOLS',
    links: [
      { name: 'Overview', href: '/dashboard/tools/overview', icon: EyeIcon },
      { name: 'Reports', href: '/dashboard/tools/reports', icon: ChartBarIcon },
      {
        name: 'Alerts',
        href: '/dashboard/tools/alerts',
        icon: ExclamationCircleIcon,
      },
    ],
  },
  {
    title: 'SUPPORT',
    links: [
      {
        name: 'Settings',
        href: '/dashboard/support/settings',
        icon: Cog6ToothIcon,
      },
      {
        name: 'Documentation',
        href: '/dashboard/support/documentation',
        icon: DocumentTextIcon,
      },
      {
        name: 'FAQ',
        href: '/dashboard/support/faq',
        icon: QuestionMarkCircleIcon,
      },
      {
        name: 'Contact Us',
        href: '/dashboard/support/contact',
        icon: EnvelopeIcon,
      },
    ],
  },
];

interface NavLinksProps {
  isOpen: boolean;
}

export default function NavLinks({ isOpen }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {sections.map((section, sectionIndex) => (
        <div key={section.title}>
          <h2
            className={clsx('mb-2 hidden text-xs text-gray-400 font-semibold', {
              'text-xs px-2': !isOpen,
              'pl-4': isOpen,
            })}
          >
            {section.title}
          </h2>
          {section.links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'flex h-9 grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-purple-50 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3 md:mx-2',
                  {
                    'bg-purple-50 text-purple-600 font-bold': pathname.includes(
                      link.href
                    ),
                    'md:justify-center': !isOpen,
                    'md:justify-start': isOpen,
                  }
                )}
              >
                <LinkIcon className="w-5" />
                <p
                  className={clsx('hidden', {
                    'md:hidden ': !isOpen,
                    'md:block': isOpen,
                  })}
                >
                  {link.name}
                </p>
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
