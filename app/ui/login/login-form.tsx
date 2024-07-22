"use client";
import { authenticate } from '@/app/lib/actions';
import { ExclamationCircleIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useActionState } from 'react';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  )
    return (
        <form action={formAction}>
            <div className='mb-10'>
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

                <div className="flex justify-between mb-4">
                  {errorMessage && (
                    <div className='flex flex-row gap-2 mb-2 justify-start'>
                      <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                      <p className="text-sm text-red-500">{errorMessage}</p>
                    </div>
                  )}
                  <div className='flex w-full justify-end'>
                  <a href="#" className="text-purple-500">
                    Forgot Password?
                  </a>
                </div>
                </div>
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700" aria-disabled={isPending}>
              Login
            </button>

          </form>
    )
}