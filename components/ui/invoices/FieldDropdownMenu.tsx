import React from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function FieldDropdownMenu({field, items, disabled, selected, handleSelect}: {field: string, items: string[], disabled?: boolean, selected?: string, handleSelect: (str: string, item: string) => void}) {
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
            selected.replace("_", " ")
            :
            field === "champ" ? "Choose Field For filters" : "Choose Operator"            
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
                    className="capitalize font-semibold"
                    onPress={() => handleSelect(item, field)}
                >
                {item.replace("_", " ")}
                </DropdownItem>
            ))
        }
      </DropdownMenu>
    </Dropdown>
  )
}

export default FieldDropdownMenu