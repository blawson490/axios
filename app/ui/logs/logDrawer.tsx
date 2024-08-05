import { fetchFilteredLogs } from '@/app/lib/database-placeholder';
import InitialsAvatar from '../initials-avatar';
import { LogEntry } from '@/app/lib/definitions';
import { formatDateToLocal, truncateString } from '@/app/lib/utils';
import ConditionalAccessStatus from './conditionalAccessStatus';
import SuccessStatus from './successStatus';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../drawer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../card';
import { ScrollArea } from '../scrollarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tabs';

export default async function LogDrawer({ log }: { log: LogEntry }) {
  // export default async function LogDrawer() {
  return (
    <div className="w-full">
      <DrawerHeader>
        <div className="flex flex-row gap-2 w-full">
          <DrawerClose asChild>
            <button className="bg-gray-200 rounded-md p-1">
              <ChevronLeftIcon className="text-black w-5 h-5" />
            </button>
          </DrawerClose>
          <div>
            <DrawerTitle className="p-1">Back to Logs</DrawerTitle>
            {/* <DrawerDescription>See the details of the activity log.</DrawerDescription> */}
          </div>
        </div>
      </DrawerHeader>
      <ScrollArea className="h-full w-full mb-4">
        <div className="flex h-full flex-col gap-1">
          <div className=" flex flex-row justify-between">
            <div className="flex-col p-4">
              <p className="text-gray-500 font-semibold text-sm">
                User Details:
              </p>
              <div className="flex flex-row py-2">
                <div className="flex flex-row gap-3 items-center justify-center cursor-pointer">
                  <InitialsAvatar name={log.userDisplayName} />
                  <div className="flex-col">
                    <p className="font-semibold">
                      {truncateString(log.userDisplayName, 50)}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {truncateString(log.userPrincipalName, 50)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col p-4">
              <p className="text-gray-500 font-semibold text-sm">Status:</p>
              <div className="flex flex-row py-1">
                <div className="flex flex-row gap-3 items-center justify-center">
                  <div className="flex-col">
                    <p>
                      <SuccessStatus status={log.statusErrorCode} />
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatDateToLocal(log.createdDateTime)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Card className="mx-4 border-0 shadow-none bg-gray-50 rounded-lg mb-4">
            <CardHeader className="p-2 border-0">
              <CardTitle className="text-sm font-semibold text-gray-500">
                Location Details:
              </CardTitle>
              <CardDescription>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between">
                    <div className="text-xs flex flex-row gap-1">
                      <p className="text-gray-500">
                        City, State, Country/Region:
                      </p>
                      <p className="font-medium">
                        {log.locationCity}, {log.locationState},{' '}
                        {log.locationCountryOrRegion}
                      </p>
                    </div>
                    <div className="text-xs flex flex-row gap-1">
                      <p className="text-gray-500">IP Address:</p>
                      <p className="font-medium">{log.ipAddress}</p>
                    </div>
                  </div>
                  <div className="text-xs flex flex-row gap-1">
                    <p className="text-gray-500">Latitude:</p>
                    <p className="font-medium">
                      {log.locationGeoCoordinatesLatitude}
                    </p>
                  </div>
                  <div className="text-xs flex flex-row gap-1">
                    <p className="text-gray-500">Longitude:</p>
                    <p className="font-medium">
                      {log.locationGeoCoordinatesLongitude}
                    </p>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2">
              <div className="bg-gray-200 h-72 rounded-lg flex items-center justify-center">
                <p>Location Map comming soon</p>
              </div>
            </CardContent>
          </Card>
          <Tabs defaultValue="device" className="mx-4">
            <Card className="h-80 border-0 shadow-none">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="device">
                  Application & Device Details
                </TabsTrigger>
                <TabsTrigger value="status">Log Status Details</TabsTrigger>
              </TabsList>
              <TabsContent value="device">
                <CardHeader className="p-0 border-0">
                  <CardTitle className="text-lg font-semibold text-gray-500">
                    Application & Device Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 py-3">
                  <div className="flex flex-row justify-between">
                    <div>
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
                    <div>
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
              </TabsContent>
              <TabsContent value="status">
                <CardHeader className="p-0 border-0">
                  <CardTitle className="text-lg font-semibold text-gray-500">
                    Log Status Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 py-3">
                  <div className="flex flex-row justify-between">
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
              </TabsContent>
            </Card>
          </Tabs>
        </div>
      </ScrollArea>
      <DrawerFooter></DrawerFooter>
    </div>
  );
}
