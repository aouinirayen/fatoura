import { CheckBadgeIcon, ClockIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import InvoiceImage from "@/components/images/invoice.webp"
import { InvoiceType } from '@/types/Invoice'
function InvoiceTab({invoice}: {invoice: InvoiceType}) {
    return (
        <div className="flex gap-2 p-8 max-sm:flex-col">
            <div className="w-full flex flex-col gap-5">
                <div className="flex gap-4 text-sm flex-wrap">
                    {
                        invoice.status === "overdue" ? (
                            <span className="flex gap-2 text-red-500 bg-red-400/20 px-3 py-2 font-semibold items-center rounded-md whitespace-nowrap">
                                <ClockIcon className="w-5 h-5" /> Overdue
                            </span>
                        )
                        :
                        invoice.status === "paid" ? (
                            <span className="flex gap-2 text-green-500 bg-green-400/20 px-3 py-2 font-semibold items-center rounded-md whitespace-nowrap">
                                <CheckBadgeIcon className="w-5 h-5" /> Paid
                            </span>
                        )
                        :
                        (
                            <span className="flex gap-2 text-yellow-500 bg-yellow-400/20 px-3 py-2 font-semibold items-center rounded-md whitespace-nowrap">
                                <ClockIcon className="w-5 h-5" /> Pending
                            </span>
                        )
                    }
                    {
                        invoice.status === "overdue" && invoice.delay_days && (
                            <span className="flex gap-2 text-red-500 px-3 py-2 font-semibold items-center rounded-md whitespace-nowrap">
                                {invoice.delay_days} Days Delay
                            </span>
                        )
                    }
                </div>
                <div className="grid grid-cols-3 max-sm:grid-cols-1 text-sm">
                    <div className="flex flex-col gap-2 font-semibold">
                        <span className="text-gray-500">
                            Total Amount
                        </span>
                        <span className="text-red-400 font-bold">
                            {invoice.total_amount} TND
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 font-semibold">
                        <span className="text-gray-500">
                            Open Amount
                        </span>
                        <span className="font-bold">
                            {invoice.amount} TND
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 font-semibold">
                        <span className="text-gray-500">
                            Subtotal Amount
                        </span>
                        <span className="font-bold">
                            {invoice.subtotal_amount} TND
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-3 max-sm:grid-cols-1 text-sm">
                    <div className="flex flex-col gap-2 font-semibold">
                        <span className="text-gray-500">
                            Due Date
                        </span>
                        <span className="font-bold">
                            {invoice.due_date}
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 font-semibold">
                        <span className="text-gray-500">
                            Paid On
                        </span>
                        <span className="font-bold">
                            {invoice.paid_on ? invoice.paid_on : "-"} 
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 font-semibold">
                        <span className="text-gray-500">
                            Customer av. Delay
                        </span>
                        <span className="font-bold">
                            {invoice.customer_average_delay} Days
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-3">
                    <h3 className="font-bold"> Payments </h3>
                    <hr />
                    {
                        (invoice.payments?.length === 0 || !invoice.payments) && (
                            <span className="text-sm text-gray-500">
                                No Invoice Payments at the moment
                            </span>
                        )
                    }
                    {
                        invoice.payments?.map((payment, index) => (
                            <div key={index} className="grid gap-8 grid-flow-col max-w-fit text-sm">
                                <div className="flex flex-col gap-1">
                                    <span className="font-semibold"> 
                                        {payment.amount} TND
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        Paid on 17-11-2001
                                    </span>
                                </div>
                                <div className="h-full border-l-[1px] border-gray-300" />
                                {
                                    payment.matched_transaction ? (
                                        <div className="flex flex-col gap-1">
                                            <span className="font-semibold text-green-600"> 
                                                Matched Transaction
                                            </span>
                                            <span className="text-gray-500 text-sm">
                                                {payment.matched_transaction}
                                            </span>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="flex flex-col gap-1">
                                            <span className="font-semibold"> 
                                                Manual Mark
                                            </span>
                                            <span className="text-gray-500 text-sm">
                                                Devoteam
                                            </span>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                    
                </div>
                <div className="flex flex-col gap-3 mt-3">
                    <h3 className="font-bold"> Credit Note </h3>
                    <hr />
                    {
                        (invoice.credit_notes?.length === 0 || !invoice.credit_notes) && (
                            <span className="text-sm text-gray-500">
                                No Credit Notes at the moment
                            </span>
                        )
                    }
                    {
                        invoice.credit_notes?.map((creditNote, index) => (
                            <div className="grid gap-8 grid-flow-col max-w-fit text-sm">
                                <div className="flex flex-col gap-1">
                                    <span className="font-semibold"> 
                                        {creditNote.note_id}
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        Created on {creditNote.created_on}
                                    </span>
                                </div>
                                <div className="h-full border-l-[1px] border-gray-300" />
                                <span className="font-bold"> 
                                    {creditNote.amount} TND
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="h-[30rem] w-[50%] max-sm:w-full">
                <Image src={InvoiceImage} alt='' className=" h-full object-cover" />
            </div>
        </div>
    )
}

export default InvoiceTab