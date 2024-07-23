import Pagination from '@/app/ui/pagination';
import Search from '@/app/ui/search';
import UsersTable from '@/app/ui/users/table';
import { inter, lusitana } from '@/app/ui/fonts';
import { UsersTableSkeleton } from '@/app/ui/skeltons';
import { Suspense } from 'react';
import { fetchUsersPages } from '@/app/lib/database-placeholder';
import { Metadata } from 'next';
import TopBar from '@/app/ui/topbar/topbar';
import { UserGroupIcon } from '@heroicons/react/24/outline';
 
export const metadata: Metadata = {
  title: 'Users',
};
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchUsersPages(query);

  const breadcrumbs = [
    { label: 'Users', href: '/dashboard/users', active: !searchParams?.query, icon: UserGroupIcon },
  ];

  if (searchParams?.query) {
    breadcrumbs.push({ label: `Search: ${searchParams?.query}`, href: `/dashboard/users?page=${searchParams.page}&query=${searchParams?.query}`, active: true, icon: UserGroupIcon });
  }

  return (
    <div className='flex flex-col w-full'>
      <TopBar breadcrumbs={breadcrumbs} />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <h1 className={`${inter.className} text-2xl`}>Users</h1>
          </div>
          <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Search placeholder="Search users..." />
          </div>
          <Suspense key={query + currentPage} fallback={<UsersTableSkeleton />}>
            <UsersTable query={query} currentPage={currentPage} />
          </Suspense>
          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  );
}