import clsx from 'clsx';

export default function SuccessStatus({ status }: { status: number }) {
  return (
    <span>
      {status === 0 ? (
        <div className="flex flex-row items-center align-middle">
          <div className="relative pr-2">
            <div className="w-2 h-2 bg-green-500/25 rounded-full animate-ping absolute"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <p className="font-medium">Success</p>
        </div>
      ) : null}
      {status !== 0 ? (
        <div className="flex flex-row items-center align-middle">
          <div className="relative pr-2">
            <div className="w-2 h-2 bg-red-500/25 rounded-full animate-ping absolute"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          <p className="font-medium">Failed</p>
        </div>
      ) : null}
    </span>
  );
}
