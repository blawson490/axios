import { inter } from '@/app/ui/fonts';
import clsx from 'clsx';
import Image from 'next/image';

interface NavLinksProps {
  isOpen: boolean;
}

export default function AxiosLogo({ isOpen }: NavLinksProps) {
  return (
    <div
      className={`${inter.className} font-bold text-purple-800 flex flex-row items-center justify-start ps-4 gap-3 leading-none`}
    >
      <Image
        src="/axios-logo.png"
        width={20}
        height={20}
        className="block"
        alt="Axios Logo"
      />
      <p
        className={clsx('text-xl hidden md:block', {
          'md:hidden ': !isOpen,
          'md:block': isOpen,
        })}
      >
        Axios
      </p>
    </div>
  );
}
