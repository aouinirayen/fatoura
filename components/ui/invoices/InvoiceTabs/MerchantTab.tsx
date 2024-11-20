import { InvoiceType } from '@/types/Invoice'
import dynamic from 'next/dynamic'
import React, { useMemo } from 'react'

function MerchantTab({invoice}: {invoice: InvoiceType}) {
    const Map = useMemo(() => dynamic(
        () => import('@/components/ui/invoices/MapComponent'),
        { 
          loading: () => <p>A map is loading</p>,
          ssr: false
        }
      ), [])   
    return (
        <div className="flex flex-col gap-1 p-8">
            <span className="text-default-600 text-lg font-bold">
                Merchant
            </span>
            <span className="font-medium">
                {invoice.name}
            </span>
            <p className="flex items-center gap-1 text-slate-500 text-sm">
                <span className="font-medium">
                    Reference: 
                </span>
                <span className="font-light">
                    {invoice.merchant_reference}
                </span>
            </p>
            <div className="mx- my-5 w-full bg-white h-[25rem] max-sm:h-[20rem]">
                <Map posix={invoice.merchant_location} />
            </div>
        </div>
    )
}

export default MerchantTab