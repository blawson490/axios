"use client";
import { validateUser } from '@/app/lib/actions';
import { Organization } from '@/app/lib/definitions';
import { EyeSlashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function LoginForm({
    organization
}: {
    organization: Organization;
}) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const loginUser = validateUser.bind(null)
    return (
        <form action={loginUser}>
            <div className='mb-10'>
                <label className="block text-white font-bold text-xl my-4 opacity-75">{organization.orgName}</label>

                <label className="block  text-white opacity-75">Email</label>
                <input
                  id='email'
                  name='email'
                  type="email"
                  className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
                />
                <label className="block  text-white opacity-75">Password</label>

                <div className="relative">
                    <input
                        id='password'
                        type="password"
                        name='password'
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded pr-10"
                    />
                    <EyeSlashIcon className="h-5 w-5 absolute top-2 right-2 text-gray-500 cursor-pointer" />
                </div>

                <div className="flex justify-end mb-4">
                  <a href="#" className="text-purple-500">
                    Forgot Password?
                  </a>
                </div>
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button type="submit" className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Login
            </button>

          </form>
    )
}