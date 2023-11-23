export interface Item {
  itemId?: string;
  time: number;
  picture?: string;
  price: number | string;
  description: string;
  category: string;
  name: string;
  active: boolean;
  restaurantId: string;
}

export interface ItemOrder extends Item {
  qntd: number;
}
