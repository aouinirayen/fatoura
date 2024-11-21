import React from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function TransactionDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          color={"default"}
          variant={"bordered"}
          className="capitalize font-semibold flex items-center gap-2 h-[3.5rem] w-full"
        >
          {
            "Choose Transaction ID"          
          }
          <ChevronDownIcon className="w-4 h-4 translate-y-px" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Dropdown Variants"
        color={"default"} 
        variant={"bordered"}
      >
        <DropdownItem 
            className={`capitalize font-semibold`}
            onPress={() => {}}
        >
        8980248004603457
        </DropdownItem>
        <DropdownItem 
            className={`capitalize font-semibold`}
            onPress={() => {}}
        >
        5686707301632849
        </DropdownItem>
        <DropdownItem 
            className={`capitalize font-semibold`}
            onPress={() => {}}
        >
        6182687747410333
        </DropdownItem>
        <DropdownItem 
            className={`capitalize font-semibold`}
            onPress={() => {}}
        >
        0655130841462338
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default TransactionDropdown