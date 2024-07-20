import { inter } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AxiosLogo() {
  return (
    <div
      className={`${inter.className} font-bold text-purple-800 flex flex-row items-center justify-start ps-4 gap-3 leading-none`}
    >
      <Image
        src="/axios-logo.png"
        width={20}
        height={20}
        className="hidden md:block"
        alt="Axios Logo"
      />
      <p className="text-xl">Axios</p>
    </div>
  );
}
