import Pagination from '@/app/ui/pagination';
import Search from '@/app/ui/search';
import UsersTable from '@/app/ui/users/table';
import { inter, lusitana } from '@/app/ui/fonts';
import { UsersTableSkeleton } from '@/app/ui/skeltons';
import { Suspense } from 'react';
import { fetchLogByID, fetchLogsPages } from '@/app/lib/database-placeholder';
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
  const logs = await fetchLogByID(query);
  const log = logs[0];

  const breadcrumbs = [
    {
      label: 'Logs',
      href: '',
      active: false,
      icon: ClipboardDocumentCheckIcon,
    },
    {
      label: `${log.logId}`,
      href: `/dashboard/logs/${log.logId}`,
      active: true,
      icon: ClipboardDocumentCheckIcon,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <TopBar breadcrumbs={breadcrumbs} />
      <div className="flex flex-row flex-grow md:overflow-y-auto">
        <div
          className="w-2/3 h-full bg-white shadow-2xl rounded-tr-2xl z-10 relative"
          style={{ marginRight: '-100px' }}
        >
          <ScrollArea className="h-full w-full mb-4">
            <div className="flex h-full flex-col gap-1">
              <div className=" flex flex-row w-full">
                <div className="flex-col p-4 w-full">
                  <p className="text-gray-500 font-semibold text-lg">
                    User Details:
                  </p>
                  <div className="flex flex-row p-2 hover:bg-gray-100 w-full rounded-md items-center justify-between">
                    <div className="flex flex-row gap-3 items-center justify-center">
                      <InitialsAvatar name={log.userDisplayName} />
                      <div className="flex-col">
                        <div className="flex flex-row gap-2 items-center">
                          <p className="font-semibold">
                            {truncateString(log.userDisplayName, 50)}
                          </p>
                        </div>
                        <p className="text-gray-500 text-sm">
                          {truncateString(log.userPrincipalName, 50)}
                        </p>
                      </div>
                    </div>
                    {/* <ChevronRightIcon className="h-5 w-5 text-gray-500" /> */}
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center px-4 w-full pb-4">
                <div className="flex flex-col">
                  <p className="text-gray-500 font-semibold text-lg">
                    Log Details:
                  </p>
                  <div className="flex flex-col">
                    {/* Log Date */}
                    <div className="flex flex-row">
                      <div className="flex flex-row gap-3 items-center justify-center">
                        <p className="text-sm text-gray-500">
                          {formatDateToLocal(log.createdDateTime)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex flex-col gap-0 justify-start">
                  <div className="flex flex-row items-center gap-2">
                    <p className="text-gray-500 font-medium">Status:</p>
                    <div className="flex flex-row">
                      <div className="flex flex-row gap-3 items-center justify-center">
                        <div className="flex-col">
                          <p>
                            <SuccessStatus status={log.statusErrorCode} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1">
                    <p className="text-sm font-light text-gray-500">
                      Error code:
                    </p>
                    <p className="text-sm font-light text-gray-500">
                      {log.statusErrorCode}
                    </p>
                  </div>
                </div>
              </div>
              <Card className="mx-4 border-0 shadow-none bg-gray-50 rounded-lg mb-4 p-2">
                <CardHeader className="p-0 border-0">
                  <CardTitle className="text-lg font-semibold text-gray-500">
                    Location Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 py-3">
                  <div className="flex flex-row">
                    <div className="w-1/2">
                      <div className="pt-2 flex flex-col gap-2">
                        <div>
                          <div className="text-sm flex flex-row gap-1">
                            <p className="text-gray-500">City:</p>
                            <p className="font-medium">{log.locationCity}</p>
                          </div>
                          <div className="text-sm flex flex-row gap-1">
                            <p className="text-gray-500">State:</p>
                            <p className="font-medium">{log.locationState}</p>
                          </div>
                          <div className="text-sm flex flex-row gap-1">
                            <p className="text-gray-500">Country or Region:</p>
                            <p className="font-medium">
                              {log.locationCountryOrRegion}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="pt-2 flex flex-col gap-2">
                        <div>
                          <div className="text-sm flex flex-row gap-1">
                            <p className="text-gray-500">Latitude:</p>
                            <p className="font-medium">
                              {log.locationGeoCoordinatesLatitude}
                            </p>
                          </div>
                          <div className="text-sm flex flex-row gap-1">
                            <p className="text-gray-500">Longitude:</p>
                            <p className="font-medium">
                              {log.locationGeoCoordinatesLongitude}
                            </p>
                          </div>
                          <div className="text-sm flex flex-row gap-1">
                            <p className="text-gray-500">IP Address:</p>
                            <p className="font-medium">{log.ipAddress}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="mx-4 border-0 shadow-none bg-gray-50 rounded-lg mb-4 p-2">
                <CardHeader className="p-0 border-0">
                  <CardTitle className="text-lg font-semibold text-gray-500">
                    Application & Device Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 py-3">
                  <div className="flex flex-row">
                    <div className="w-1/2">
                      <div className="text-md flex flex-row gap-1">
                        <p className="text-gray-500 font-semibold">
                          Application
                        </p>
                      </div>
                      <div className="pt-2 flex flex-col gap-2">
                        <div>
                          <div className="text-sm flex flex-row gap-1">
                            <p className="text-gray-500">App Name:</p>
                            <p className="font-medium">{log.appDisplayName}</p>
                          </div>
                          <div className="text-sm flex flex-row gap-1">
                            <p className="text-gray-500">App ID:</p>
                            <p className="font-medium">{log.appId}</p>
                          </div>
                          <div className="text-sm flex flex-row gap-1">
                            <p className="text-gray-500">Client App Used:</p>
                            <p className="font-medium">{log.clientAppUsed}</p>
                          </div>
                        </div>
                        <div>
                          <div className="pt-1 gap-1">
                            <div className="text-sm flex flex-row gap-1">
                              <p className="text-gray-500">Resource Name:</p>
                              <p className="font-medium">
                                {log.resourceDisplayName}
                              </p>
                            </div>
                            <div className="text-sm flex flex-row gap-1">
                              <p className="text-gray-500">Resource ID:</p>
                              <p className="font-medium">{log.resourceId}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="text-md flex flex-row gap-1">
                        <p className="text-gray-500 font-semibold">Device</p>
                      </div>
                      <div className="pt-2 flex flex-col gap-2">
                        <div>
                          <div className="text-sm flex flex-row gap-1">
                            <p className="text-gray-500">Device Name:</p>
                            <p className="font-medium">
                              {log.deviceDetailDisplayName}
                            </p>
                          </div>
                          <div className="text-sm flex flex-row gap-1">
                            <p className="text-gray-500">Device ID:</p>
                            <p className="font-medium">
                              {log.deviceDetailDeviceId}
                            </p>
                          </div>
                          <div className="text-sm flex flex-row gap-1">
                            <p className="text-gray-500">Operating System:</p>
                            <p className="font-medium">
                              {log.deviceDetailOperatingSystem}
                            </p>
                          </div>
                          <div className="text-sm flex flex-row gap-1">
                            <p className="text-gray-500">
                              Device Detail Browser:
                            </p>
                            <p className="font-medium">
                              {log.deviceDetailBrowser}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="mx-4 border-0 shadow-none bg-gray-50 rounded-lg mb-4 p-2">
                <CardHeader className="p-0 border-0">
                  <CardTitle className="text-lg font-semibold text-gray-500">
                    Log Status Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 py-3">
                  <div className="flex flex-row">
                    <div>
                      <div className="pt-2 flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                          <div className="text-sm flex flex-row items-center gap-1">
                            <p className="text-gray-500">
                              Conditional Access Status:
                            </p>
                            <p className="font-medium">
                              <ConditionalAccessStatus
                                status={log.conditionalAccessStatus}
                              />
                            </p>
                          </div>
                          <div className="text-sm flex flex-wrap gap-1">
                            <p className="text-gray-500">Error Code:</p>
                            <p className="font-medium">{log.statusErrorCode}</p>
                          </div>
                          <div className="text-sm flex flex-wrap gap-1">
                            <p className="text-gray-500">Failure Reason:</p>
                            <p className="font-medium">
                              {log.statusFailureReason}
                            </p>
                          </div>
                          <div className="text-sm flex flex-wrap items-baseline gap-1">
                            <p className="text-gray-500 mr-1 whitespace-nowrap">
                              Additional Details:
                            </p>
                            <p className="font-medium break-words">
                              {log.statusAdditionalDetails}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </div>
        <div className="w-2/3 h-full relative z-0">
          <MyMap
            location={{
              lat: log.locationGeoCoordinatesLatitude,
              long: log.locationGeoCoordinatesLongitude,
            }}
            mapZoom={6}
          />
        </div>
      </div>
    </div>
  );
}
