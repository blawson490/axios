import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function ConditionalAccessStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'notApplied' ? (
        <div className='flex text-white p-1 pr-2 rounded-full bg-yellow-500'>
          <XMarkIcon className="ml-1 w-4 text-white" />
          Not Applied
        </div>
      ) : null}
      {status === 'success' ? (
        <div className='flex text-white p-1 pr-2 rounded-full bg-green-500'>
          <CheckIcon className="ml-1 w-4 text-white bg-green-500" />
          Success
        </div>
      ) : null}
      {status === 'failure' ? (
        <div className='flex text-white p-1 pr-2 rounded-full bg-red-500'>
          <XMarkIcon className="ml-1 w-4 text-white bg-red-500" />
          Failed
        </div>
      ) : null}
    </span>
  );
}
