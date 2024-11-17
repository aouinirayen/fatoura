import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react"
import { AdjustmentsHorizontalIcon, EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline'
import FieldDropdownMenu from './FieldDropdownMenu'
import StatusDropdownMenu from './StatusDropdownMenu'
import {DatePicker} from "@nextui-org/date-picker"
import { Tags } from '@/pages/invoices'
export type TextContentKeys = 'name' | 'email' | 'seller_name' | 'amount' | 'date' | 'status'

const Fields = [
    "name",
    "email",
    "seller_name",
    "amount",
    "date",
    "status"
]

const initialTextContents: Record<TextContentKeys, string | number> = {
    name: "",
    email: "",
    seller_name: "",
    amount: NaN,
    date: "",
    status: ""
}

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

function InvoiceFilters({invoices, setInvoices, tags, setTags}: {invoices: any[], setInvoices: any, tags: Tags, setTags: (tagName: string, tagvalue: string | null | number, operator?: string) => void}) {
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
    

    const [textContents, setTextContents] = React.useState(initialTextContents)
    const handleSelectOperator = (str: string, item: string) => {
        setSelectedOperator(prev => str)
        const operatorSymbol = operatorSymbolsMap[str as OperatorType]
        setTags(selectedFilter, Number(textContents[selectedFilter as keyof typeof textContents]), operatorSymbol === "==" ? "=" : operatorSymbol === "!=" ? "<>" : operatorSymbol)
    }
    const handleTextContentsChange = (str: string, item: string) => {
        if(selectedFilter && selectedFilter !== "amount"){
            setTextContents((prev: any) => ({...prev, [item]: str}))
            setTags(selectedFilter, str)
        }
        if(selectedFilter === "amount" && selectedOperator){
            setTextContents((prev: any) => ({...prev, [item]: str}))
            const operatorSymbol = operatorSymbolsMap[selectedOperator as OperatorType]
            setTags(selectedFilter, Number(str), operatorSymbol === "==" ? "=" : operatorSymbol === "!=" ? "<>" : operatorSymbol)
        }
    }    

    const ClickConfirm = () => {
        const filteredInvoices = invoices.filter(invoice => {
            return (
                (!textContents.name || invoice.name === textContents.name) &&
                (!textContents.email || invoice.email === textContents.email) &&
                (!textContents.seller_name || invoice.seller_name === textContents.seller_name) &&
                (!textContents.date || invoice.date.toLocaleDateString() === textContents.date) &&
                (!textContents.status || invoice.status === textContents.status)
            )
        })
        if(textContents.amount){
            if (textContents.amount && selectedOperator && selectedOperator in operatorSymbolsMap) {
                const operatorSymbol = operatorSymbolsMap[selectedOperator as OperatorType]
        
                const amountFilteredInvoices = filteredInvoices.filter(invoice => {
                    let fieldValue = invoice.amount
                    const compareValue = isNaN(Number(textContents.amount)) ? textContents.amount : Number(textContents.amount)
        
                    if (typeof fieldValue === 'string' && !isNaN(Number(fieldValue))) {
                        fieldValue = Number(fieldValue)
                    }
        
                    console.log({ operatorSymbol, compareValue, fieldValue })
        
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
                setInvoices(amountFilteredInvoices)
            } else {
                console.error("Invalid operator selected or amount field missing")
            }
        }else{
            setInvoices(filteredInvoices)
        }
    }
    
    const removeTag = (tag: string) => {
        setTags(tag, null)
        setTextContents((prev: any) => ({...prev, [tag]: ""}))
    }

    const CloseModal = () => {
        onClose()
        setTextContents(initialTextContents)
        tags.forEach(tag => {
            setTags(tag.name, null)
        })
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
            onClose={CloseModal} 
            backdrop='blur'
        >
            <ModalContent>
            {(CloseModal) => (
                <>
                <ModalHeader className="flex flex-col gap-1 text-center text-lg"> Invoice Filters </ModalHeader>
                <ModalBody>
                    <div className="w-full flex gap-2 flex-wrap my-2" >
                        {
                            tags.map((tag) => {
                            if(!tag.value) return null
                            tag.value === "pending" && tag.name === "status" ? tag.icon = <EllipsisHorizontalIcon className="w-4" /> : tag.icon = tag.icon
                            return(
                                <span className="flex gap-1 items-center w-fit bg-black/90 hover:bg-black transition-all duration-100 cursor-default text-white rounded-md sm:text-sm text-xs py-1 px-4">
                                    {tag.icon}
                                    <span>{tag.operator ? tag.operator : ""}</span>
                                    <span>{tag.value}</span>
                                    <XMarkIcon className="w-3 cursor-pointer" onClick={()=>removeTag(tag.name)} />
                                </span>
                            )
                            })
                        }
                    </div>
                    <FieldDropdownMenu field={"champ"} items={Fields} selected={selectedFilter} handleSelect={handleSelect} />
                    <FieldDropdownMenu field={"operator"} items={operators} disabled={!selectedFilter || textFields.includes(selectedFilter) || selectedFilter === "date"} handleSelect={handleSelectOperator} selected={selectedOperator} />
                    {
                        selectedFilter === "status" ? (
                            <StatusDropdownMenu items={status} selected={textContents[selectedFilter as keyof typeof textContents] as string} handleSelect={handleTextContentsChange} />
                        )
                        :
                        selectedFilter === "date" ? (
                            <DatePicker label="Invoice Date" className="" onChange={(e) => {handleTextContentsChange(e ? `${e.month}/${e.day}/${e.year}` : "", selectedFilter)}} />
                        )
                        :
                        (
                            <Input disabled={!selectedFilter} value={textContents[selectedFilter as keyof typeof textContents] as string} onChange={(e) => handleTextContentsChange(e.target.value, selectedFilter)} type={textFields.includes(selectedFilter) ? "text" : "number"} label="Filter Value" variant={!selectedFilter ? "faded" : "bordered"} className="h-[3.5rem]" />
                        )
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" variant="light" onPress={CloseModal}>
                    Close
                    </Button>
                    <Button onClick={ClickConfirm} color="primary" variant="light" onPress={onClose}>
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