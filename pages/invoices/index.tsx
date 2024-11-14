import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import InvoicePage from "@/components/ui/invoices/invoice-page";
import InvoicesTable from "@/components/ui/invoices/table";
import React, { useState } from "react";

const initialInvoices = [{
  id: "1",
  name: "haikel",
  email: "name@gmail.com",
  seller_name: "mcdo",
  amount: 700,
  image_url: "https://www.google.com",
  date: new Date(),
  status: "pending"
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

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState(initialInvoices)
  const clearFilters = () => {
    setInvoices(prev => [...initialInvoices])
  }
  return (
    <DefaultLayout>
      <section className="flex flex-col justify-center py-8 ">
        <InvoicePage onclear={clearFilters} invoices={invoices} setInvoices={setInvoices}></InvoicePage>
        <InvoicesTable invoices={invoices}></InvoicesTable>
      </section>
    </DefaultLayout>
  );
}
