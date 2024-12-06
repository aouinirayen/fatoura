"use client"
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useState } from "react";

const status = [
  {
    name: "All",
    count: 100
  },
  {
    name: "In Progress",
    count: 50
  },
  {
    name: "Finished",
    count: 50
  }
]

export default function DocsPage() {
  const [SelectedStatus, setSelectedStatus] = useState("All")
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-wrap gap-2 w-full my-2">
          {
            status.map((stat) => (
              <button key={stat.name} onClick={() => setSelectedStatus(stat.name)} className={`px-4 py-2 text-sm font-medium text-foreground-800 rounded-none transition-all duration-150 ${SelectedStatus === stat.name ? "border-b-blue-500 border-b-2 bg-foreground-100 text-white" : ""} gap-2`}>{stat.name} <span className="bg-foreground-200 text-xs px-2 py-px rounded-md">{stat.count}</span> </button>
            ))
          }
        </div>
      </section>
    </DefaultLayout>
  );
}
