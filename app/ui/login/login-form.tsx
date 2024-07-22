import { EyeSlashIcon } from '@heroicons/react/24/outline';

export default function LoginForm() {
    return (
        <form>
    <div className='mb-10'>
            <label className="block text-white opacity-75">Organization</label>
            <input
              type="text"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
            />
            <label className="block  text-white opacity-75">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
            />
            <label className="block  text-white opacity-75">Password</label>
            <div className="relative">
              <input
                type="password"
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
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Login
            </button>
          </form>
    )
}