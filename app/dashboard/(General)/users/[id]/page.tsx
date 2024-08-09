import Pagination from '@/app/ui/pagination';
import Search from '@/app/ui/search';
import UsersTable from '@/app/ui/users/table';
import { inter, lusitana } from '@/app/ui/fonts';
import { UsersTableSkeleton } from '@/app/ui/skeltons';
import { Suspense } from 'react';
import {
  fetchLogByID,
  fetchLogsPages,
  fetchUserByID,
} from '@/app/lib/database-placeholder';
import { Metadata } from 'next';
import TopBar from '@/app/ui/topbar/topbar';
import {
  ArrowUpRightIcon,
  ChevronRightIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import LogsTable from '@/app/ui/logs/table';
import MyMap from '@/app/ui/logs/map/mymap';
import { ScrollArea } from '@/app/ui/scrollarea';
import InitialsAvatar from '@/app/ui/initials-avatar';
import { formatDateToLocal, truncateString } from '@/app/lib/utils';
import SuccessStatus from '@/app/ui/logs/successStatus';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/ui/card';
import { Tabs } from '@/app/ui/tabs';
import { TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import ConditionalAccessStatus from '@/app/ui/logs/conditionalAccessStatus';
import { Component } from '@/app/ui/users/chart';
import OverviewCard from '@/app/ui/overviewCard';
import { title } from 'process';

export const metadata: Metadata = {
  title: 'Log',
};

export default async function Page({
  params,
}: {
  params?: {
    id?: string;
  };
}) {
  const query = params?.id || '';
  const users = await fetchUserByID(query);
  const user = users[0];

  const breadcrumbs = [
    {
      label: 'Users',
      href: '/dashboard/users',
      active: false,
      icon: ClipboardDocumentCheckIcon,
    },
    {
      label: `${user.displayName}`,
      href: `/dashboard/users/${user.id}`,
      active: true,
      icon: ClipboardDocumentCheckIcon,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* <TopBar breadcrumbs={breadcrumbs} /> */}
      {/* Insert Breadcrumbs here */}
      <div className="flex flex-row flex-grow">
        <div
          className="w-full h-full bg-white"
          style={{ marginRight: '-100px' }}
        >
          {/* <ScrollArea className="h-full w-full mb-4"> */}
          <div className="flex h-full flex-col gap-1">
            <div className=" flex flex-row w-full">
              <div className="flex-col p-4 w-full">
                {/* <p className="text-gray-500 font-semibold text-lg">
                  User Details:
                </p> */}
                <div className="flex flex-row p-2 w-full rounded-md items-center justify-between">
                  <div className="flex flex-row gap-3 items-center justify-center">
                    {/* <InitialsAvatar name={user.displayName} /> */}
                    <div className="flex-col">
                      <div className="flex flex-row gap-2 items-center">
                        <p className="font-semibold text-xl">
                          {truncateString(user.displayName, 50)}
                        </p>
                      </div>
                      <p className="text-gray-500 font-light text-sm">
                        {truncateString(user.userPrincipalName, 50)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full p-4 gap-2">
              <div className="p-2">
                <OverviewCard
                  cardInfo={{
                    title: 'Total Sign-in Attempts',
                    value: 836,
                    trendValue: '+25',
                    percentageIncrease: 25,
                  }}
                />
              </div>
              <div className="p-2">
                <OverviewCard
                  cardInfo={{
                    title: 'Non-US Attempts',
                    value: 353,
                    trendValue: '+60',
                    percentageIncrease: 60,
                  }}
                />
              </div>
              <div className="p-2">
                <OverviewCard
                  cardInfo={{
                    title: 'Successful Attempts',
                    value: 539,
                    trendValue: '+10',
                    percentageIncrease: 10,
                  }}
                />
              </div>
              <div className="p-2">
                <OverviewCard
                  cardInfo={{
                    title: 'Failed Attempts',
                    value: 297,
                    trendValue: '+54',
                    percentageIncrease: 54,
                  }}
                />
              </div>
            </div>
            <div className="flex w-full xl:w-1/2 p-4">
              <Component />
            </div>
          </div>
          {/* </ScrollArea> */}
        </div>
      </div>
    </div>
  );
}
