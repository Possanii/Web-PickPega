import { ItemOrder } from "./Item";

export interface Order {
  orderId: string;
  name: string;
  status: "Em espera" | "Em produção" | "Finalizado";
  date: string;
  necessaryTime: number;
  time: string;
  payment: string;
  price: number;
  products: Array<ItemOrder>;
}
