import { ClockIcon } from "@heroicons/react/24/outline";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import InvoiceTab from "./InvoiceTabs/InvoiceTab";
import MerchantTab from "./InvoiceTabs/MerchantTab";
import StoreTab from "./InvoiceTabs/StoreTab";
import { InvoiceType } from "@/types/Invoice";

export default function InvoiceTabs({invoice}: {invoice: InvoiceType}) {
  let tabs = [
    {
      id: "invoice",
      label: "Invoice",
      content: (
        <InvoiceTab invoice={invoice} />
      )
    },
    {
      id: "merchant",
      label: "Merchant",
      content: <MerchantTab invoice={invoice} />
    },
    {
      id: "store",
      label: "Store",
      content: <StoreTab invoice={invoice} />
    }
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
  );
}