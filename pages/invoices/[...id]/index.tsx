"use client"
import InvoiceDetailsTable from '@/components/ui/invoices/InvoiceDetailsTable'
import InvoiceTabs from '@/components/ui/invoices/InvoiceTabs'
import DefaultLayout from '@/layouts/default'
import { InvoiceType } from '@/types/Invoice'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'
import React, { useMemo } from 'react'

function InvoiceDtails() {
    const searchParams = useSearchParams()
    const invoiceDetails = JSON.parse(searchParams.get("invoice") as string) as InvoiceType

    const Map = useMemo(() => dynamic(
        () => import('@/components/ui/invoices/MapComponent'),
        { 
          loading: () => <p>A map is loading</p>,
          ssr: false
        }
      ), [])    
      if(!invoiceDetails) return null
  return (
    <DefaultLayout>
        <div className="w-full h-full flex flex-col py-8">
            <h1 className="font-semibold text-xl">
                Invoice Details
            </h1>
            <hr className="my-4" />
            <InvoiceTabs invoice={invoiceDetails} />
        </div>
    </DefaultLayout>
  )
}

export default InvoiceDtails

/**
<div className="flex gap-2 justify-between max-sm:flex-col-reverse max-sm:gap-4 max-lg:justify-center flex-wrap-reverse">
                <div className="flex gap-8 max-sm:flex-col flex-wrap justify-center">
                    <div className="flex flex-col gap-2">
                        <span className="text-default-600">
                            Merchant
                        </span>
                        <span className="text-lg font-medium">
                            {invoiceDetails.name}
                        </span>
                        <p className="flex items-center gap-1 text-slate-500">
                            <span className="font-medium">
                                Reference: 
                            </span>
                            <span className="font-light">
                                {invoiceDetails.merchant_reference}
                            </span>
                        </p>
                        <div className="mx-auto my-5 w-[25rem] bg-white h-[20rem]">
                            <Map posix={invoiceDetails.merchant_location} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-default-600">
                            Store
                        </span>
                        <span className="text-lg font-medium">
                            {invoiceDetails.seller_name}
                        </span>
                        <p className="flex items-center gap-1 text-slate-500">
                            <span className="font-medium">
                                Reference: 
                            </span>
                            <span className="font-light">
                                {invoiceDetails.store_reference}
                            </span>
                        </p>
                        <div className="mx-auto my-5 w-[25rem] max-sm:w-[20rem] bg-white h-[20rem]">
                            <Map posix={invoiceDetails.store_location} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:items-end">
                    <h1 className="font-semibold">
                        Order N°: {invoiceDetails.order_number}
                    </h1>
                    <div className="flex flex-col mt-4 w-[20rem] max-sm:w-[15rem]">
                        <div className="border rounded-lg p-4 w-full">
                            <InvoiceDetailsTable invoiceItems={invoiceDetails.items} />
                            <hr className="mt-4" />
                            <div className="w-full flex justify-between items-center text-sm mt-4 font-semibold px-4">
                                <span className="text-default-400">
                                    SUBTOTAL
                                </span>
                                <span>
                                    {invoiceDetails.subtotal_amount}$
                                </span>
                            </div>
                            <div className="w-full flex justify-between items-center text-sm mt-2 font-semibold px-4">
                                <span className="text-default-400">
                                    DISCOUNT
                                </span>
                                <span>
                                    {invoiceDetails.discount}%
                                </span>
                            </div>
                            <div className="w-full flex justify-between items-center text-sm mt-2 font-semibold px-4">
                                <span className="text-default-400">
                                    TOTAL
                                </span>
                                <span>
                                    {invoiceDetails.total_amount}$
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 */