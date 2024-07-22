import { authenticate } from '@/app/lib/actions';
import { fetchOrganiationById } from '@/app/lib/database-placeholder';
import LoginForm from '@/app/ui/login/organization-login-form';
import { EyeSlashIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Login',
  };

export default async function Login({ params }: { params : { id: string } }) {
    const id = params.id
    const organization = await fetchOrganiationById(id);

  if (!organization) {
      notFound();
  }

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/login-background.jpg)' }}
    >
      <div className="flex h-full">
      <div className="w-1/2 flex flex-col items-center justify-center p-10 bg-black bg-opacity-75">
        
        <div className="w-full max-w-md">
        <div className='flex flex-col items-start justify-center w-full mb-8'>
          <Image src="/axios-logo.png" alt="Axios Logo" width={80} height={80} className="mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-white">Log in</h2>
          <p className="text-white mb-6 opacity-75">
            Enter your information below to log in
          </p>
        </div>
            <LoginForm organization={organization} />
        </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="p-10 shadow-lg rounded-lg">
          </div>
        </div>
      </div>
    </div>
  );
}
