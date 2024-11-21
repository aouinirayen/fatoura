import React from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function MerchantDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          color={"default"}
          variant={"bordered"}
          className="capitalize font-semibold flex items-center gap-2 h-[3.5rem] w-full"
        >
          {
            "Choose Merchant Name"          
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
        Mouhib Naffeti
        </DropdownItem>
        <DropdownItem 
            className={`capitalize font-semibold`}
            onPress={() => {}}
        >
        Med Mouhib
        </DropdownItem>
        <DropdownItem 
            className={`capitalize font-semibold`}
            onPress={() => {}}
        >
        Naffeti Mohamed
        </DropdownItem>
        <DropdownItem 
            className={`capitalize font-semibold`}
            onPress={() => {}}
        >
        Mouhib Mohamed
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default MerchantDropdown