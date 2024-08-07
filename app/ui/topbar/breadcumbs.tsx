import { clsx } from 'clsx';
import Link from 'next/link';
import { inter } from '@/app/ui/fonts';
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

type IconType = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>
>;

export interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
  icon?: IconType;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="block">
      <ol className={clsx(inter.className, 'flex text-xl')}>
        {breadcrumbs.map((breadcrumb, index) => {
          const BreadcrumbIcon = breadcrumb.icon;
          return (
            <li
              key={breadcrumb.href}
              aria-current={breadcrumb.active}
              className={clsx(
                breadcrumb.active ? 'text-gray-900' : 'text-gray-500',
                'flex items-center text-sm hover:text-purple-900'
              )}
            >
              {index === 0 && BreadcrumbIcon && (
                <BreadcrumbIcon className="mr-2 w-4 h-4" />
              )}
              <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
              {index < breadcrumbs.length - 1 ? (
                <ChevronRightIcon className="mx-3 w-4 h-4" />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
