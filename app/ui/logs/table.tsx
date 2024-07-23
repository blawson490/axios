import { fetchFilteredLogs } from "@/app/lib/database-placeholder";
import InitialsAvatar from "../initials-avatar";

export default async function LogsTable({
    query,
    currentPage,
}: {
    query: string,
    currentPage: number;
}) {
    const logs = await fetchFilteredLogs(query, currentPage)

    return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {logs?.map((log) => (
              <div
                key={log.id}
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
                    <p className="text-sm text-gray-500">{log.userPrincipalName}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {log.appDisplayName}
                    </p>
                    <p>{log.ipAddress}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  User
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  App
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  IP Address
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {logs?.map((user) => (
                <tr
                  key={user.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                    <InitialsAvatar name={user.userDisplayName} />
                      <p>{user.userDisplayName}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.userPrincipalName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.appDisplayName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.ipAddress}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}