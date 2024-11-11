"use client";

import {
  SelectItem,
  Select,
  DateRangePicker,
  Input,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent
} from "@nextui-org/react";
import React from "react";
import { parseZonedDateTime } from "@internationalized/date";

export default function Filter({ filters }: {
  filters: ApiFiltersResponse[],
}) {

  function chunkArray(arr: ApiFiltersResponse[], chunkSize: number): ApiFiltersResponse[][] {
    const result: ApiFiltersResponse[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  function getCorrectComponent(f: ApiFiltersResponse) {
    switch (f.type) {
      case "string":
        return <div key={"lg"} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input size={"lg"} type="text" label={f.name} />
        </div>;
      case "enum":
        return <div className="flex w-full max-w-xs flex-col gap-2">
          <Select
            selectionMode="multiple"
            selectedKeys={[]}
            className="max-w-xs"
          >
            {(f.values || []).map((v) => (
              <SelectItem key={v}>
                {v}
              </SelectItem>
            ))}
          </Select>
        </div>;
      case "datetime":
        return <div className="w-full max-w-xl flex flex-row gap-4">
          <DateRangePicker
            label="Event duration"
            hideTimeZone
            visibleMonths={2}
            defaultValue={{
              start: parseZonedDateTime("2024-04-01T00:45[America/Los_Angeles]"),
              end: parseZonedDateTime("2024-04-08T11:15[America/Los_Angeles]")
            }}
          />
        </div>;
      case "number":
        return <div key={"lg"} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input size={"lg"} type="number" label={f.name} />
        </div>;

      case "boolean":
        return <div className="flex w-full max-w-xs flex-col gap-2">
          <Select
            selectionMode="single"
            selectedKeys={[]}
            className="max-w-xs"
          >
            {(f.values || []).map((v) => (
              <SelectItem key={v}>
                {v}
              </SelectItem>
            ))}
          </Select>
        </div>;
      default:
        <></>;
    }
  }

  function popOverComponent(f: ApiFiltersResponse) {
    return (
      <Popover placement="bottom" showArrow offset={10}>
        <PopoverTrigger>
          <Button color="primary">{f.name}</Button>
        </PopoverTrigger>
        <PopoverContent className="w-[240px]">
          {(titleProps) => (
            <div className="px-1 py-2 w-full">
              <p className="text-small font-bold text-foreground" {...titleProps}>
                {f.name}
              </p>
              <div className="mt-2 flex flex-col gap-2 w-full">
                <Select
                  label="Select an operator"
                  className="max-w-xs"
                >
                  {["equals", "notEquals", "like"].map((animal) => (
                    <SelectItem key={animal}>
                      {animal}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="mt-2 flex flex-col gap-2 w-full">
                {getCorrectComponent(f)}
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    );
  }


  return (<div className="space-y-5  items-center justify-between ">
      {chunkArray(filters, 10).map((cs, index) => <div key={index}
                                                       className="flex gap-2 md:mt-2">{cs.map(f => {
        return popOverComponent(f);
      })}</div>)}

    </div>
  );
}
