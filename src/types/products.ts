import type { Price } from "@/types";

export interface Product {
  id: string;
  name: string;
  price: Price;
  rating: number;
  image: string;
}
