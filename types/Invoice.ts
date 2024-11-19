export type ItemType = {
    item_name: string;
    item_price: number;
}
  
export  type InvoiceType = {
    id: string;
    name: string;
    email: string;
    seller_name: string;
    amount: number;
    image_url: string;
    date: Date;
    status: "paid" | "pending";
    merchant_location: [number, number];
    store_location: [number, number];
    merchant_reference: string;
    store_reference: string;
    order_number: string;
    items: ItemType[];
    subtotal_amount: number;
    discount: number;
    total_amount: number;
}