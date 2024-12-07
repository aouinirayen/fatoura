"use client";
import Image from "next/image";
import { SendInvoice, ViewInvoice } from "@/components/ui/invoices/buttons";
import InvoiceStatus from "@/components/ui/invoices/status";
import { useEffect, useState } from "react";
import PricingStatus from "./PricingStatus";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { RestartWorkflow, RunWorkflow, ViewWorkflow } from "./PricingButtons";

export default function PricingTable({pricings}: {pricings: any[]}) {

  return (
    <div className="mt-6 flow-root w-full">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {pricings.map((pricing) => (
              <div
                key={pricing.id}
                className="mb-3 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <PricingStatus status={pricing.workflowStatus} />
                  <span className="text-xs whitespace-nowrap flex flex-nowrap gap-1">
                    <ClockIcon className="w-4 h-4" />
                    {pricing.duration}
                  </span>
                </div>
                <div className="flex w-full items-center justify-between pt-4 border-b pb-4">
                  <div>
                    <p className="text-xl font-semibold">
                      {pricing.name}
                    </p>
                    <p className="text-gray-500 font-semibold">{pricing.createdAt}</p>
                  </div>
                  {
                    /*
                    <div className="flex justify-end gap-2">
                      <ViewInvoice invoice={pricing} />
                    </div>
                    */
                  }
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text- font-semibold">
                      {pricing.Runnedby}
                    </p>
                    <div className="flex justify-start gap-3 mt-3">
                      <RunWorkflow id={pricing.id} />
                      <RestartWorkflow id={pricing.id} />
                      <ViewWorkflow id={pricing.id} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th
                scope="col"
                className="px-4 py-5 font-semibold sm:pl-6"
              >
                Status
              </th>
              <th scope="col" className="px-3 py-5 font-semibold">
                Workflow
              </th>
              <th scope="col" className="px-3 py-5 font-semibold">
                Runned by
              </th>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span>Actions</span>
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
                <td className="px-3 py-3">
                  <span className="text-blue-500 font-semibold">
                    {pricing.name}  
                  </span><br/>
                  <p className="text-blue-500 font-semibold mt-2">
                    {pricing.workflowID}  
                  </p>
                </td>
                <td className="px-3 py-3 text-gray-600 font-semibold">
                  {pricing.Runnedby}
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-start gap-3">
                      <RunWorkflow id={pricing.id} />
                      <RestartWorkflow id={pricing.id} />
                      <ViewWorkflow id={pricing.id} />
                    </div>
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