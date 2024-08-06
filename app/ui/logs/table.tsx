import { fetchFilteredLogs } from '@/app/lib/database-placeholder';
import InitialsAvatar from '../initials-avatar';
import { LogEntry } from '@/app/lib/definitions';
import { formatDateToLocal, truncateString } from '@/app/lib/utils';
import ConditionalAccessStatus from './conditionalAccessStatus';
import SuccessStatus from './successStatus';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Drawer, DrawerContent, DrawerTrigger } from '../drawer';
import LogDrawer from './logDrawer';
import React from 'react';
export default async function LogsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const logs = await fetchFilteredLogs(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {logs?.map((log: LogEntry) => (
              <div
                key={log.logId}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <div className="text-2xl flex w-2 h-2">
                        <InitialsAvatar name={log.userDisplayName} />
                      </div>
                      <p>{log.userDisplayName}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {log.userPrincipalName}
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">{log.appDisplayName}</p>
                    <p>{log.ipAddress}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-xs font-normal">
              <tr>
                <th scope="col" className="p-4 font-medium sm:pl-6">
                  User
                </th>
                <th scope="col" className="p-4 font-medium">
                  Status
                </th>
                <th scope="col" className="p-4 font-medium">
                  Created
                </th>
                <th scope="col" className="p-4 font-medium">
                  App
                </th>
                <th scope="col" className="p-4 font-medium">
                  Location
                </th>
                <th scope="col" className="p-4 font-medium">
                  IP Address
                </th>
                <th scope="col" className="p-4 font-medium">
                  Conditional Access
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {logs?.map((log: LogEntry) => (
                <Drawer dismissible={false} direction="right" key={log.logId}>
                  <DrawerTrigger asChild key={log.logId}>
                    <tr
                      key={log.logId}
                      className="cursor-pointer w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg hover:bg-gray-100"
                    >
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex items-center gap-3">
                          <InitialsAvatar name={log.userDisplayName} />
                          <div className="flex flex-col gap-1">
                            <p>{truncateString(log.userDisplayName, 32)}</p>
                            <p className="text-xs text-gray-500">
                              {truncateString(log.userPrincipalName, 32)}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        <SuccessStatus status={log.statusErrorCode} />
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-gray-500">
                        {formatDateToLocal(log.createdDateTime)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-gray-500">
                        {truncateString(log.appDisplayName, 24)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        <div className="flex flex-col gap-0">
                          <p>
                            {truncateString(
                              `${log.locationCity}, ${log.locationState}`,
                              22
                            )}
                          </p>
                          <p className="text-xs text-gray-500">
                            {truncateString(
                              `${log.locationCountryOrRegion}`,
                              4
                            )}
                          </p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-gray-500">
                        {truncateString(log.ipAddress, 19)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        <ConditionalAccessStatus
                          status={log.conditionalAccessStatus}
                        />
                      </td>
                      <td className="whitespace-nowrap pr-4 text-gray-500">
                        <ChevronRightIcon className="h-5 w-5" />
                      </td>
                    </tr>
                  </DrawerTrigger>
                  <DrawerContent>
                    <LogDrawer log={log} />
                  </DrawerContent>
                </Drawer>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
