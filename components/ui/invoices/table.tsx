"use client";
import Image from "next/image";
import { SendInvoice, ViewInvoice } from "@/components/ui/invoices/buttons";
import InvoiceStatus from "@/components/ui/invoices/status";

export default function InvoicesTable() {
  const invoices = [{
    id: "1",
    name: "haikel",
    email: "name@gmail.com",
    seller_name: "mcdo",
    amount: 700,
    image_url: "https://www.google.com",
    date: new Date(),
    status: "pending"
  }, {
    id: "1",
    name: "haikel",
    email: "name@gmail.com",
    seller_name: "mcdo",
    amount: 700,
    image_url: "https://www.google.com",
    date: new Date(),
    status: "pending"
  }, {
    id: "1",
    name: "haikel",
    email: "name@gmail.com",
    seller_name: "mcdo",
    amount: 700,
    image_url: "https://www.google.com",
    date: new Date(),
    status: "pending"
  }, {
    id: "1",
    name: "haikel",
    email: "name@gmail.com",
    seller_name: "mcdo",
    amount: 700,
    image_url: "https://www.google.com",
    date: new Date(),
    status: "pending"
  },
    {
      id: "2",
      name: "haikel",
      email: "name@gmail.com",
      seller_name: "mcdo",
      amount: 200,
      image_url: "https://www.google.com",
      date: new Date(),
      status: "paid"
    },
    {
      id: "3",
      name: "haikel",
      email: "name@gmail.com",
      seller_name: "mcdo",
      amount: 200,
      image_url: "https://www.google.com",
      date: new Date(),
      status: "paid"
    }

  ];

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {invoice.email}
                    </p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4 pb-4 border-b">
                  Seller: {invoice.seller_name}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {invoice.amount}
                    </p>
                    <p>{invoice.date.getDate()}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <ViewInvoice id={invoice.id} />
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
            {invoices?.map((invoice) => (
              <tr
                key={invoice.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={invoice.image_url}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt={`${invoice.name}'s profile picture`}
                    />
                    <p>{invoice.name}</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {invoice.email}
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  {invoice.seller_name}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {invoice.amount}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  invoice.date
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  <InvoiceStatus status={invoice.status} />
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <SendInvoice id={invoice.id} />
                    <ViewInvoice id={invoice.id} />
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