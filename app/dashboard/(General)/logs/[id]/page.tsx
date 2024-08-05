import Pagination from '@/app/ui/pagination';
import Search from '@/app/ui/search';
import UsersTable from '@/app/ui/users/table';
import { inter, lusitana } from '@/app/ui/fonts';
import { UsersTableSkeleton } from '@/app/ui/skeltons';
import { Suspense } from 'react';
import { fetchLogsPages } from '@/app/lib/database-placeholder';
import { Metadata } from 'next';
import TopBar from '@/app/ui/topbar/topbar';
import { ClipboardDocumentCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import LogsTable from '@/app/ui/logs/table';
 
export const metadata: Metadata = {
  title: 'Logs',
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

  const totalPages = await fetchLogsPages(query);

  const breadcrumbs = [
    { label: 'Logs', href: '/dashboard/logs', active: !searchParams?.query, icon: ClipboardDocumentCheckIcon },
    { label: 'abc123...', href: '/dashboard/logs/abc123', active: true, icon: ClipboardDocumentCheckIcon }
  ];

  if (searchParams?.query) {
    breadcrumbs.push({ label: `Search: ${searchParams?.query}`, href: `/dashboard/logs?page=${searchParams.page}&query=${searchParams?.query}`, active: true, icon: ClipboardDocumentCheckIcon });
  }

  return (
    <div className='flex flex-col w-full'>
      <TopBar breadcrumbs={breadcrumbs} />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-6">
        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <h1 className={`${inter.className} text-2xl`}>Logs</h1>
          </div>
          <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Search placeholder="Search logs..." />
          </div>
          {/* <Suspense key={query + currentPage} fallback={<UsersTableSkeleton />}>
            <LogsTable query={query} currentPage={currentPage} />
          </Suspense> */}
          {/* <div className="mt-5 flex w-full justify-center"> */}
            {/* <Pagination totalPages={totalPages} />
          </div> */}
        </div>
      </div>
    </div>
  );
}