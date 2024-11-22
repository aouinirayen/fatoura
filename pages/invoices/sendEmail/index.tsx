import InputWithSuggestions from '@/components/ui/invoices/SendInvoice/InputWithSuggestions';
import MerchantDropdown from '@/components/ui/invoices/SendInvoice/MerchantDropdown'
import SendEmailModal from '@/components/ui/invoices/SendInvoice/SendEmailModal';
import SendSMSModal from '@/components/ui/invoices/SendInvoice/SendSMSModal';
import TransactionDropdown from '@/components/ui/invoices/SendInvoice/TransactionDropdown'
import DefaultLayout from '@/layouts/default'
import {Textarea} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";

const Namesuggestions = [
    "Mouhib",
    "Naffeti",
    "Mourad",
    "Hello"
]

const idSuggestions = [
    "1578746784563",
    "2398475983746",
    "4857394857394",
    "3847593847592",
    "8475638475634",
]


function sendEmail() {
  return (
    <DefaultLayout>
        <div className="w-full h-full flex flex-col">
            <h1 className="font-semibold text-xl">
                Send Invoice
            </h1>
            <hr className="my-4" />
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col gap-3 w-full h-full justify-between">
                    <div className="flex flex-col gap-3 w-full">
                        <InputWithSuggestions suggestions={Namesuggestions} placeholder="Merchant Name" />
                        <InputWithSuggestions suggestions={idSuggestions} placeholder="Transaction ID" />
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <Checkbox defaultSelected className="font-semibold max-md:hidden">Join Receipt</Checkbox>
                        <div className="flex max-sm:flex-col sm:justify-end gap-2 max-md:hidden">
                            <SendSMSModal />
                            <SendEmailModal />
                        </div>
                    </div>
                </div>
                <Textarea
                    label="HTML Content"
                    placeholder="Enter your HTML content here"
                    variant='bordered'
                    minRows={20}
                    maxRows={20}
                    className="w-full font-semibold"
                    fullWidth
                />
                <Checkbox defaultSelected className="font-semibold max-md:flex hidden">Join Receipt</Checkbox>
                <div className="hidden max-sm:flex-col sm:justify-end gap-2 max-md:flex pb-4">
                    <SendSMSModal />
                    <SendEmailModal />
                </div>
            </div>
        </div>
    </DefaultLayout>
  )
}

export default sendEmail