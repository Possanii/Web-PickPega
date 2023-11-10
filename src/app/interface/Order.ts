export interface Order {
  _id: string;
  table: string;
  status: "WAITING" | "DOING" | "DONE";
  createdAt: Date;
  products: {
    _id: string;
    quantity: number;
    product: {
      name: string;
      imagePath: string;
      price: number;
    };
  }[];
}
