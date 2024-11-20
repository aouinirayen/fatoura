import { InvoiceType } from '@/types/Invoice'
import dynamic from 'next/dynamic'
import React, { useMemo } from 'react'

function StoreTab({invoice}: {invoice: InvoiceType}) {
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
                Store
            </span>
            <span className="font-medium">
                {invoice.seller_name}
            </span>
            <p className="flex items-center gap-1 text-slate-500 text-sm">
                <span className="font-medium">
                    Reference: 
                </span>
                <span className="font-light">
                    {invoice.store_reference}
                </span>
            </p>
            <p className="flex items-center gap-1 text-slate-500 text-sm">
                <span className="font-medium">
                    Contact: 
                </span>
                <span className="font-light">
                    +{invoice.seller_contact}
                </span>
            </p>
            <div className="mx- my-5 w-full bg-white h-[25rem] max-sm:h-[20rem]">
                <Map posix={invoice.store_location} />
            </div>
        </div>
    )
}

export default StoreTab