import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import InvoicePage from "@/components/ui/invoices/invoice-page";
import InvoicesTable from "@/components/ui/invoices/table";
import React from "react";

export default function InvoicesPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col justify-center py-8 ">
        <InvoicePage></InvoicePage>
        <InvoicesTable></InvoicesTable>
      </section>
    </DefaultLayout>
  );
}
