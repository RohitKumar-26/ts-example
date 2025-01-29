import { BasePrice, Material, ProductType, Product, Sizes, ErrorResult } from "../../types";
import { basePrices, materials, productTypes, sizes } from "../../config";

export const getAllProductData = (): Product[] => {
  return productTypes.map((productType: ProductType) => {
    const basePriceRecords: BasePrice[] = basePrices.filter((basePrice) => basePrice.productTypeId === productType.id);

    const materialRecords: Material[] = materials.filter((material) => material.productTypeId === productType.id);
    const sizesRecords: Sizes[] = sizes.filter((size) => size.productTypeId === productType.id);

    const productData: Product = {
      ...productType,
      colors: basePriceRecords,
      materials: materialRecords,
      sizes: sizesRecords,
    };

    return productData;
  });
};

export const getProduct = (id: string): Product | ErrorResult => {
  let productType = productTypes.find((ptype) => ptype.id === id);

  if (!productType) {
    return { error: "Not Found!", errorCode: 404 };
  }
  const basePriceRecords: BasePrice[] = basePrices.filter((basePrice) => basePrice.productTypeId === id);

  const materialRecords: Material[] = materials.filter((material) => material.productTypeId === id);
  const sizesRecords: Sizes[] = sizes.filter((size) => size.productTypeId === productType.id);

  const productData: Product = {
    ...productType,
    colors: basePriceRecords,
    materials: materialRecords,
    sizes: sizesRecords,
  };

  return productData;
};

export const calculatePrice = (basePrice: BasePrice, material?: Material | null, text: string = "", hasImage: boolean = false): number => {
  let price: number = basePrice.price;
  if (material && material.priceIncrease) {
    price = price + material.priceIncrease;
  }
  if (text) {
    price += text.length > 8 ? 5 : 0;
  }
  if (hasImage) {
    price += 10;
  }

  return price;
};
