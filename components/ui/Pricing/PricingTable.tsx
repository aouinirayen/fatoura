"use client";
import Image from "next/image";
import { SendInvoice, ViewInvoice } from "@/components/ui/invoices/buttons";
import InvoiceStatus from "@/components/ui/invoices/status";
import { useEffect, useState } from "react";

export default function PricingTable({pricings}: {pricings: any[]}) {

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {pricings.map((pricing) => (
              <div
                key={pricing.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={pricing.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${pricing.name}'s profile picture`}
                      />
                      <p>{pricing.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {pricing.email}
                    </p>
                  </div>
                  <InvoiceStatus status={pricing.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4 pb-4 border-b">
                  Seller: {pricing.seller_name}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {pricing.amount}
                    </p>
                    <p>{pricing.date.getDate()}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <ViewInvoice invoice={pricing} />
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
                className="px-4 py-5 font-medium sm:pl-6"
              >
                Customer
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Email
              </th>
              <th
                scope="col"
                className="px-4 py-5 font-medium sm:pl-6"
              >
                Seller
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Amount
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Date
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Status
              </th>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
            </thead>
            <tbody className="bg-white">
            {pricings.map((pricing) => (
              <tr
                key={pricing.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={pricing.image_url}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt={`${pricing.name}'s profile picture`}
                    />
                    <p>{pricing.name}</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {pricing.email}
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  {pricing.seller_name}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {pricing.amount}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {pricing.date.toLocaleDateString()}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <InvoiceStatus status={pricing.status} />
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <SendInvoice id={pricing.id} />
                    <ViewInvoice invoice={pricing} />
                  </div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}