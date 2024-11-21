import MerchantDropdown from '@/components/ui/invoices/SendInvoice/MerchantDropdown'
import TransactionDropdown from '@/components/ui/invoices/SendInvoice/TransactionDropdown'
import DefaultLayout from '@/layouts/default'
import { ChatBubbleLeftIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import {Textarea, Button} from "@nextui-org/react";


function sendEmail() {
  return (
    <DefaultLayout>
        <div className="w-full h-full flex flex-col">
            <h1 className="font-semibold text-xl">
                Send Invoice
            </h1>
            <hr className="my-4" />
            <div className="flex flex-col gap-3 w-full h-full">
                <div className="flex max-sm:flex-col gap-3 w-full">
                    <TransactionDropdown />
                    <MerchantDropdown />
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
                <div className="flex max-sm:flex-col sm:justify-end gap-2">
                    <Button className="flex items-center whitespace-nowrap gap-1 bg-default-800 text-default-200 font-semibold">
                        Send SMS <ChatBubbleLeftIcon className="w-4" />
                    </Button>
                    <Button className="flex items-center whitespace-nowrap gap-1 bg-purple-500 text-white">
                        Send Email <EnvelopeIcon className="w-4" />
                    </Button>
                </div>
            </div>
        </div>
    </DefaultLayout>
  )
}

export default sendEmail