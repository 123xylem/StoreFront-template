export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  brand?: string;
  stock?: number;
  rating?: number;
};

export type Products = Product[];
