"use client";

import {
  PencilIcon,
  AdjustmentsHorizontalIcon,
  PaperAirplaneIcon,
  EyeIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import {Tooltip} from "@nextui-org/tooltip";
interface FilterInvoiceProps {
  show: () => void,
  setFilter?: (value: (((prevState: {}) => {}) | {})) => void,
  allFilters?: {}
}

export function FilterInvoice({ show, setFilter, allFilters }: FilterInvoiceProps) {
  return (
    <Button
      onClick={e => show()}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Filters</span>{" "}
      <AdjustmentsHorizontalIcon className="h-5 md:ml-4" />
    </Button>
  );
}

export function ScrollButtonFilter({ name, values, allFilters, setFilter }: {
  name: string,
  values: Array<string>,
  allFilters?: any,
  setFilter?: (value: (((prevState: {}) => {}) | {})) => void
}) {

  const [isActive, setIsActive] = useState(false);

  const handleSelection = (txt: string) => {
    const currentSelection: Array<string> = [...(allFilters[name] || []), txt];

    setFilter({ ...allFilters, [name]: currentSelection });
    console.log({ ...allFilters, [name]: currentSelection });
  };
  return (<div className="">
      <Button onClick={e => setIsActive(!isActive)}
              className="flex h-10 items-center rounded-lg bg-gray-600 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
      >
        <span className="hidden md:block">{name}</span>{" "}
        {isActive ? <ChevronDownIcon className="h-5 md:ml-4" /> : <ChevronUpIcon className="h-5 md:ml-4" />}
      </Button>
      {

        isActive ? <div className={" bg-gray-200 rounded-b-lg "}>
          {values.map(txt => <div
            className={"space-y-5 md:ml-3"}>
            <input type={"checkbox"} onChange={e => {
              const fs = allFilters[name] || [];
              if (fs.includes(txt)) {
                const currentSelection: Array<string> = fs.filter(c => c !== txt);
                setFilter({ ...allFilters, [name]: currentSelection });
              } else handleSelection(txt);
            }} checked={(allFilters[name] || []).includes(txt)} />
            <span className="md:ml-4 md:mb-4">{txt}</span>{" "}
          </div>)}
        </div> : null
      }
    </div>
  );
}

export function ResetFilters({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={() => onClick()}
      className="flex h-10 items-center rounded-lg bg-gray-200 px-4 text-sm font-medium text-black transition-colors hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
    >
      <span className="hidden md:block">reset</span>{" "}
      <ArrowPathIcon className="h-5 md:ml-4" />
    </Button>
  );
}


export function SendInvoice({ id }: { id: string }) {
  return (
    <form>
      <Tooltip color="primary" content={"Send"} className="capitalize">
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <PaperAirplaneIcon className="w-5" />
        </button>
      </Tooltip>
    </form>
  );
}

export function ViewInvoice({ id }: { id: string }) {
  return (
    <Tooltip color="danger" content={"View"} className="capitalize">
      <Link className="rounded-md border p-2 hover:bg-gray-100" href={`/dashboard/invoices/${id}/detail`}>
        <EyeIcon className="w-5" />
      </Link>
    </Tooltip>
  );
}