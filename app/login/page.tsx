import { Metadata } from 'next';
import Image from 'next/image';
import LoginForm from '../ui/login/login-form';

export const metadata: Metadata = {
  title: 'Login',
};
 
export default function Login() {
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
                <LoginForm />
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
