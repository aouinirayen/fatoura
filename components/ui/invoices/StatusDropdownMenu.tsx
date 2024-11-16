import React from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function StatusDropdownMenu({selected, items, disabled, handleSelect}: {items: string[], disabled?: boolean, selected?: string, handleSelect: (str: string) => void}) {
  return (
    <Dropdown isDisabled={disabled}>
      <DropdownTrigger disabled={disabled}>
        <Button 
          color={"default"}
          variant={"bordered"}
          className="capitalize font-semibold flex items-center gap-2 h-[3.5rem]"
          disabled={disabled}
        >
          {
            selected ?
            selected
            :
            "Choose Status"          
          }
          <ChevronDownIcon className="w-4 h-4 translate-y-px" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Dropdown Variants"
        color={"default"} 
        variant={"bordered"}
      >
        {
            items.map((item, index) => (
                <DropdownItem
                    key={index} 
                    className={`capitalize font-semibold ${item === "paid" ? "bg-green-500/60 hover:bg-green-500 text-white" : "bg-gray-200/70 hover:bg-gray-200"}`}
                    onPress={() => handleSelect(item)}
                >
                {item.replace("_", " ")}
                </DropdownItem>
            ))
        }
      </DropdownMenu>
    </Dropdown>
  )
}

export default StatusDropdownMenu