import { XMarkIcon, CheckIcon } from '@heroicons/react/16/solid';
import { BellAlertIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function PricingStatus({ status }: { status: string }) {
    return (
        <span
            className={clsx(
                'inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold',
                {
                    'bg-orange-300/40 text-orange-700': status === 'warning',
                    'bg-green-300/40 text-green-500': status === 'passed',
                    'bg-red-300/40 text-red-500': status === 'failed',
                },
            )}
        >
      {status === 'warning' ? (
          <div className="flex gap-2 pr-2 py-[2px]">
            <BellAlertIcon className="ml-1 w-4 text-orange-700" />
            Warning
          </div>
      ) : null}
            {status === 'passed' ? (
                <div className="flex gap-2 pr-2 py-[2px]">
                    <CheckIcon className="ml-1 w-4 text-white bg-green-500 rounded-full" />
                    Passed
                </div>
            ) : null}
                {status === 'failed' ? (
                    <div className="flex gap-2 pr-2 py-[2px]">
                            <XMarkIcon className="ml-1 w-4 text-white bg-red-500 rounded-full" />
                        Failed
                    </div>
                ) : null}
    </span>
    );
}