export interface signUp {
  id:number;
  name: string;
  username: string;
  email: string;
  contact: string;
  password: string;
}
export interface login {
  email: String;
  password: String;
}

export interface product {
  name: string,
  price: number,
  brand: string,
  color: string,
  image: string,
  description: string,
  id: number,
  quantity: undefined | number,
  productId: undefined | number
}
export interface cart {
  name: string,
  price: number,
  color: string,
  image: string,
  description: string,
  id: number | undefined,
  quantity: undefined | number,
  productId: number,
  userId: number
}

export interface priceSummary {
  price: number,
  discount: number,
  tax: number,
  delivery: number,
  total: number
}

export interface order {
  name: string,
  address: string,
  contact: string,
  totalPrice: number,
  userId: string,
  id: number | undefined
}