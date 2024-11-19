import { ItemType } from "@/types/Invoice";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const columns = [
  {
    key: "item_name",
    label: "ITEM",
  },
  {
    key: "item_price",
    label: "PRICE",
  }
];

export default function InvoiceDetailsTable({invoiceItems}: {invoiceItems: ItemType[]}) {
  return (
    <Table removeWrapper>
      <TableHeader columns={columns} className="font-semibold">
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={invoiceItems}>
        {(item) => (
          <TableRow key={item.item_name}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}