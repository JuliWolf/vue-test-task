import ProductMockPreviewImage from './../assets/product/product-mock-preview-image.webp'

export interface Product {
  image: string;
  title: string;
  productId: string;
  favorite: boolean;
}

const PRODUCTS_COUNT = 100

export function getProducts(page: number, pageSize: number = 12): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const startIndex = page * pageSize;

      if (startIndex >= PRODUCTS_COUNT) {
        resolve([]);
        return;
      }

      const remainingProducts = PRODUCTS_COUNT - startIndex;
      const currentPageSize = Math.min(pageSize, remainingProducts);

      const products = Array.from({ length: currentPageSize }, (_, index) => {
        const globalIndex = startIndex + index;

        return {
          image: ProductMockPreviewImage,
          title: `Зодак, 10 мг, таблетки, покрытые пленочной оболочкой, 10 шт. #${globalIndex + 1}`,
          productId: crypto.randomUUID(),
          favorite: Math.random() < 0.1
        };
      });

      resolve(products)
    }, 200)
  })
}

export function getProductsCount(): number {
  return PRODUCTS_COUNT
}
