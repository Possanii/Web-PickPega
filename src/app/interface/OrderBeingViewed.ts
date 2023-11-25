import { ItemOrder } from "./Item";

export interface OrderBeingViewed {
  orderId: string;
  products: ItemOrder[];
  status: "Em espera" | "Em produção" | "Finalizado";
  table: string;
  payment: string;
}
