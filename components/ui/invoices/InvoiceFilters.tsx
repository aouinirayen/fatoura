import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import FieldDropdownMenu from './FieldDropdownMenu';
import StatusDropdownMenu from './StatusDropdownMenu';
import {DatePicker} from "@nextui-org/date-picker";

const Fields = [
    "name",
    "email",
    "seller_name",
    "amount",
    "date",
    "status"
]

const status = [
    "pending",
    "paid"
]

const textFields = [
    "name",
    "email",
    "seller_name",
    "status"
]
const operators = [
    "Equals",
    "Not Equals",
    "Bigger Than",
    "Smaller Than",    
    "Bigger or Equals",
    "Smaller or Equals",
]

const operatorSymbolsMap = {
    "Equals": "==",
    "Not Equals": "!=",
    "Bigger Than": ">",
    "Smaller Than": "<",
    "Bigger or Equals": ">=",
    "Smaller or Equals": "<=",
}

type OperatorType = keyof typeof operatorSymbolsMap

function InvoiceFilters({invoices, setInvoices}: {invoices: any[], setInvoices: any}) {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const size = '4xl'
    const handleOpen = () => {
        onOpen()
    }
    const [selectedFilter, setSelectedFilter] = React.useState<string>("")
    const handleSelect = (str: string, item: string) => {
        setSelectedFilter(prev => str)
    }
    const [selectedOperator, setSelectedOperator] = React.useState<string>("")
    const handleSelectOperator = (str: string, item: string) => {
        setSelectedOperator(prev => str)
    }

    const [textContent, setTextContent] = React.useState<string>("")

    const handleConfirmButtonClick = () => {
        if(selectedFilter === "date"){
            const filteredInvoices = invoices.filter(
                invoice => invoice[selectedFilter].toLocaleDateString() === textContent
            )
            console.log(filteredInvoices)
            setInvoices((prev: any) => filteredInvoices)
        }
        else{
            if (textFields.includes(selectedFilter)) {
                const filteredInvoices = invoices.filter(
                    invoice => invoice[selectedFilter].toString().toLowerCase() === textContent.toLowerCase()
                )
                setInvoices((prev: any) => filteredInvoices)
            } else {
                if (selectedOperator in operatorSymbolsMap) {
                    const operatorSymbol = operatorSymbolsMap[selectedOperator as OperatorType]
        
                    const filteredInvoices = invoices.filter(invoice => {
                        let fieldValue = invoice[selectedFilter]
                        const compareValue = isNaN(Number(textContent)) ? textContent : Number(textContent)
    
                        if (typeof fieldValue === 'string' && !isNaN(Number(fieldValue))) {
                            fieldValue = Number(fieldValue)
                        }
                        console.log({operatorSymbol, compareValue, fieldValue})
                        switch (operatorSymbol) {
                            case '==':
                                return fieldValue == compareValue
                            case '!=':
                                return fieldValue != compareValue
                            case '>':
                                return fieldValue > compareValue
                            case '<':
                                return fieldValue < compareValue
                            case '>=':
                                return fieldValue >= compareValue
                            case '<=':
                                return fieldValue <= compareValue
                            default:
                                console.error("Invalid operator")
                                return false
                        }
                    })
                    console.log(filteredInvoices)
                    setInvoices((prev: any) => filteredInvoices)
                } else {
                    console.error("Invalid operator selected")
                }
            }
        }
        
    }
    const handleSelectStatus = (str: string) => {
        setTextContent(prev => str)
    }
    return (
        <>
      <div className="flex flex-wrap gap-3">
        <Button
        onClick={e => handleOpen()}
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
        <span className="hidden md:block">Filters</span>{" "}
        <AdjustmentsHorizontalIcon className="h-5 md:ml-4" />
        </Button>
      </div>
      <Modal
        size={size} 
        isOpen={isOpen} 
        onClose={onClose} 
        backdrop='blur'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-lg"> Invoice Filters </ModalHeader>
              <ModalBody>
                <FieldDropdownMenu field={"champ"} items={Fields} selected={selectedFilter} handleSelect={handleSelect} />
                <FieldDropdownMenu field={"operator"} items={operators} disabled={textFields.includes(selectedFilter) || selectedFilter === "date"} handleSelect={handleSelectOperator} selected={selectedOperator} />
                {
                    selectedFilter === "status" ? (
                        <StatusDropdownMenu items={status} selected={textContent} handleSelect={handleSelectStatus} />
                    )
                    :
                    selectedFilter === "date" ? (
                        <DatePicker label="Invoice Date" className="" onChange={(e) => {setTextContent(`${e.month}/${e.day}/${e.year}`)}} />
                    )
                    :
                    (
                        <Input onChange={(e) => setTextContent(e.target.value)} type={textFields.includes(selectedFilter) ? "text" : "number"} label="Filter Value" variant='bordered' className="h-[3.5rem]" />
                    )
                    
                }
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button onClick={handleConfirmButtonClick} color="primary" variant="light" onPress={onClose}>
                  Confirm Changes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
    )
}

export default InvoiceFilters