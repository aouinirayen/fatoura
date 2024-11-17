"use client";
import { ResetFilters, FilterInvoice } from "@/components/ui/invoices/buttons";
import { useEffect, useState } from "react";
import Filter from "@/components/ui/invoices/filters";
import InvoiceFilters from "./InvoiceFilters";
import { Tags } from "@/pages/invoices";

export default function InvoicePage({invoices, setInvoices, onclear, tags, setTags}: {invoices: any[], setInvoices: any, onclear: any, tags: Tags, setTags: (tagName: string, tagvalue: string | null | number, operator?: string) => void}) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<ApiFiltersResponse[]>([]);
  const [error, setError] = useState(null);
  const [loadingFilters, setLoadingFilters] = useState(true);
  const [resetFilters, setResetFilters] = useState(false);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/receipts/internal/filters"); // Adjust the URL as needed
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: ApiFiltersResponse[] = await response.json();
        setFilters(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoadingFilters(false);
      }
    };

    fetchFilters();
  }, []);

  return (
    <>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <InvoiceFilters setTags={setTags} tags={tags} invoices={invoices} setInvoices={setInvoices} />
        <ResetFilters onClick={onclear} />
      </div>
      {showFilters ? <div className="">
        <Filter filters={filters} />
      </div> : null}
    </>
  );
}