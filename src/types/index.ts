export interface ProductType {
  id: string;
  name: string;
  type: string;
}

export interface BasePrice {
  id: string;
  productTypeId: string;
  color: string;
  price: number;
}

export interface Material {
  id: string;
  productTypeId: string;
  name: string;
  priceIncrease: number;
}

export interface Sizes {
  id: string;
  productTypeId: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  type: string;
  colors: BasePrice[];
  materials?: Material[];
  sizes?: Sizes[];
}

export interface Order {
  id: string;
  productId: string;
  materialId?: string;
  basePricAndColorId: string;
  text: string;
  image?: string;
  totalPrice: number;
  sizeId: string;
  orderImage: string;
}

export interface OrderDetails {
  id: string;
  product: ProductType;
  material?: Material;
  basePricAndColor: BasePrice;
  text: string;
  image?: string;
  totalPrice: number;
  size: Sizes;
  orderImage: string;

}

export interface ErrorResult {
  error: string;
  errorCode: number;
}
