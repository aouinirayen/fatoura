export type ItemType = {
    item_name: string;
    item_price: number;
}

export type Payment = {
    amount: number;
    paid_on: string; // ISO date string
    matched_transaction: string;
};
  

  export type CreditNote = {
    note_id: string;
    created_on: string; // ISO date string
    amount: number;
};
  
export type InvoiceType = {
    phone_number: string;
    seller_contact: string;
    id: string;
    name: string;
    email: string;
    seller_name: string;
    amount: number;
    image_url: string;
    date: Date;
    status: "paid" | "pending" | "overdue"
    merchant_location: [number, number];
    store_location: [number, number];
    merchant_reference: string;
    store_reference: string;
    order_number: string;
    items: ItemType[];
    subtotal_amount: number;
    discount: number;
    total_amount: number;
    delay_days?: number;
    customer_average_delay?: number
    due_date?: string;
    paid_on?: string | null
    payments?: Payment[]; 
    credit_notes?: CreditNote[];
  }