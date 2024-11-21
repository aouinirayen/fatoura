import MerchantDropdown from '@/components/ui/invoices/SendInvoice/MerchantDropdown'
import SendEmailModal from '@/components/ui/invoices/SendInvoice/SendEmailModal';
import SendSMSModal from '@/components/ui/invoices/SendInvoice/SendSMSModal';
import TransactionDropdown from '@/components/ui/invoices/SendInvoice/TransactionDropdown'
import DefaultLayout from '@/layouts/default'
import {Textarea} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";



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
                <Checkbox defaultSelected className="font-semibold">Join Receipt</Checkbox>
                <div className="flex max-sm:flex-col sm:justify-end gap-2">
                    <SendSMSModal />
                    <SendEmailModal />
                </div>
            </div>
        </div>
    </DefaultLayout>
  )
}

export default sendEmail