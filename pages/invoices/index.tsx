import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import InvoicePage from "@/components/ui/invoices/invoice-page";
import InvoicesTable from "@/components/ui/invoices/table";
import React, { useState } from "react";
import { BanknotesIcon, CalendarDaysIcon, CurrencyDollarIcon, EllipsisHorizontalIcon, UserIcon, UsersIcon, XMarkIcon } from "@heroicons/react/24/outline";
export type Tags = {
  name: string;
  value: string | number | null;
  operator?: string;
  icon: JSX.Element;
}[]
const initialInvoices = [{
  id: "1",
  name: "haikel",
  email: "name@gmail.com",
  seller_name: "mcdo",
  amount: 700,
  image_url: "https://www.google.com",
  date: new Date(),
  status: "paid"
}, {
  id: "2",
  name: "haikel",
  email: "name@gmail.com",
  seller_name: "mcdo",
  amount: 700,
  image_url: "https://www.google.com",
  date: new Date(),
  status: "pending"
}, {
  id: "3",
  name: "haikel",
  email: "name@gmail.com",
  seller_name: "mcdo",
  amount: 700,
  image_url: "https://www.google.com",
  date: new Date(),
  status: "pending"
}, {
  id: "4",
  name: "haikel",
  email: "name@gmail.com",
  seller_name: "mcdo",
  amount: 700,
  image_url: "https://www.google.com",
  date: new Date(),
  status: "pending"
},
  {
    id: "5",
    name: "haikel",
    email: "name@gmail.com",
    seller_name: "mcdo",
    amount: 200,
    image_url: "https://www.google.com",
    date: new Date(),
    status: "paid"
  },
  {
    id: "6",
    name: "haikel",
    email: "name@gmail.com",
    seller_name: "mcdo",
    amount: 200,
    image_url: "https://www.google.com",
    date: new Date(),
    status: "paid"
  }
]

const InitialTags: Tags = [
  {
    name: "amount",
    value: null,
    operator: "",
    icon: <CurrencyDollarIcon className="w-4"/>
  },
  {
    name: "name",
    value: null,
    icon: <UserIcon className="w-4"/>
  },
  {
    name: "date",
    value: null,
    icon: <CalendarDaysIcon className="w-4" />
  },
  {
    name: "seller_name",
    value: null,
    icon: <UsersIcon className="w-4" />
  },
  {
    name: "status",
    value: null,
    icon: <BanknotesIcon className="w-4" />
  }
]

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState(initialInvoices)
  const [tags, setTags] = useState(InitialTags)
  const clearFilters = () => {
    setInvoices(prev => [...initialInvoices])
  }
  const handleSetTags = (tagName: string, tagvalue: string | null | number, operator?: string) => {
    setTags(prev => {
      return prev.map(tag => {
        if(tag.name === tagName) {
          return {
            ...tag,
            value: tagvalue,
            operator: operator
          }
        }
        return tag
      })
    })
  }
  return (
    <DefaultLayout>
      <section className="flex flex-col justify-center py-8 ">
        <InvoicePage tags={tags} setTags={handleSetTags} onclear={clearFilters} invoices={invoices} setInvoices={setInvoices}></InvoicePage>
        <div className="w-full flex gap-2 flex-wrap my-2">
          {
            tags.map((tag) => {
              if(!tag.value) return null
              tag.value === "pending" && tag.name === "status" ? tag.icon = <EllipsisHorizontalIcon className="w-4" /> : tag.icon = tag.icon
              return(
                <span className="flex gap-1 items-center w-fit bg-black/90 hover:bg-black transition-all duration-100 cursor-default text-white rounded-md sm:text-sm text-xs py-1 px-4">
                  {tag.icon}
                  <span>{tag.operator ? tag.operator : ""}</span>
                  <span>{tag.value}</span>
                  <XMarkIcon className="w-3 cursor-pointer" />
                </span>
              )
            })
          }
        </div>
        <InvoicesTable invoices={invoices}></InvoicesTable>
      </section>
    </DefaultLayout>
  );
}
