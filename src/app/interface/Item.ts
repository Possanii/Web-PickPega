export interface Item {
  id?: string;
  tempopreparo: number;
  foto?: string;
  valor: number | string;
  description: string;
  categoria: string;
  nome: string;
  active: boolean;
  restauranteid: string;
}
