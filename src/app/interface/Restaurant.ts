export interface Restaurant {
  uid: string;
  name: string;
  email: string;
  category: string;
  categories?: Array<string>;
  address: {
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    uf: string;
    zip: number;
  };
  photo: string;
  lat: number;
  lng: number;
}
