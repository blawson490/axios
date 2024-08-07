import { fetchFilteredUsers } from '@/app/lib/database-placeholder';
import InitialsAvatar from '../initials-avatar';
import { UserEntry } from '@/app/lib/definitions';
import Link from 'next/link';

export default async function UsersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const users = await fetchFilteredUsers(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {users?.map((user: UserEntry) => (
              <div
                key={user.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <div className="text-2xl flex w-2 h-2">
                        <InitialsAvatar name={user.displayName} />
                      </div>
                      <p>{user.displayName}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {user.userPrincipalName}
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">{user.jobTitle}</p>
                    <p>{user.jobTitle}</p>
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
                  Department
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Job Title
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users?.map((user: UserEntry) => (
                <tr
                  key={user.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg hover:bg-gray-100 cursor-pointer"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">

                  <Link href={`/dashboard/users/${user.id}`}>
                    <div className="flex items-center gap-3">
                      <InitialsAvatar name={user.displayName} />
                      <p>{user.displayName}</p>
                    </div>
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  <Link href={`/dashboard/users/${user.id}`}>
                    {user.userPrincipalName}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  <Link href={`/dashboard/users/${user.id}`}>
                    {user.jobTitle}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  <Link href={`/dashboard/users/${user.id}`}>
                    {user.jobTitle}
                    </Link>
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
