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
        <div className='flex text-white p-1 px-2 rounded-md bg-gray-200/20 border-gray-600 border'>
          <p className='text-gray-600 font-medium'>Not Applied</p>
        </div>
      ) : null}
      {status === 'success' ? (
        <div className='flex text-white p-1 px-2 rounded-md bg-green-200/20 border-green-600 border'>
          <p className='text-green-600 font-medium'>Success</p>
        </div>
      ) : null}
      {status === 'failure' ? (
         <div className='flex text-white p-1 px-2 rounded-md bg-red-200/20 border-red-600 border'>
         <p className='text-red-600 font-medium'>Failed</p>
       </div>
      ) : null}
    </span>
  );
}
