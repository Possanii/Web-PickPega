export interface Item {
  id?: string;
  time: number;
  picture?: string;
  price: number | string;
  description: string;
  category: string;
  name: string;
  active: boolean;
  restaurantId: string;
}
