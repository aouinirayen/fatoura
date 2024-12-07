"use client";
import Image from "next/image";
import { SendInvoice, ViewInvoice } from "@/components/ui/invoices/buttons";
import InvoiceStatus from "@/components/ui/invoices/status";
import { useEffect, useState } from "react";
import PricingStatus from "./PricingStatus";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function PricingTable({pricings}: {pricings: any[]}) {

  return (
    <div className="mt-6 flow-root w-full">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {pricings.map((pricing) => (
              <div
                key={pricing.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <InvoiceStatus status={pricing.status} />
                  <span className="text-xs">
                    <ClockIcon className="w-4 h-4" />
                    {pricing.duration}
                  </span>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {pricing.name}
                    </p>
                    <p>{pricing.createdAt}</p>
                  </div>
                  {
                    /*
                    <div className="flex justify-end gap-2">
                      <ViewInvoice invoice={pricing} />
                    </div>
                    */
                  }
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th
                scope="col"
                className="px-4 py-5 font-medium sm:pl-6"
              >
                Status
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Runned by
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Status
              </th>
              {
                /*
                              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Edit</span>
              </th>
                */
              }
            </tr>
            </thead>
            <tbody className="bg-white">
            {pricings.map((pricing, index) => (
              <tr
                key={index}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap px-3 py-3 flex flex-col w-fit gap-[5px]">
                  <PricingStatus status={pricing.workflowStatus} />
                  <span className="text-xs flex items-center flex-nowrap gap-1 font-semibold pl-2 text-gray-500">
                    <ClockIcon className="w-4 h-4" />
                    {pricing.duration}
                  </span>
                  <span className="text-xs flex items-center flex-nowrap gap-1 font-semibold pl-2 text-gray-500">
                    <CalendarIcon className="w-4 h-4" />
                    {pricing.createdAt}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {pricing.name}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {pricing.createdAt}
                </td>
                
                {
                  /*
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={pricing.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <SendInvoice id={pricing.id} />
                      <ViewInvoice invoice={pricing} />
                    </div>
                  </td>
                  */
                }
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}