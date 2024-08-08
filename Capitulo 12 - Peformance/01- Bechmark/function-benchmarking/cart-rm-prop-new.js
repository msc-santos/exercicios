import Product from "../src/entities/Product.js";

export default class Cart {
  constructor({ products }) {
    this.products = this.removeUndefinedProps(products);
  }

  removeUndefinedProps(products) {
    const result = [];

    for (const product of products) {
      const keys = Reflect.ownKeys(product);
      if (!keys.length) continue;

      keys.forEach(
        (key) => product[key] || Reflect.deleteProperty(product, key)
      );

      result.push(new Product(product));
      // result.push(JSON.parse(JSON.stringify(new Product(product))));
    }

    return result;
  }
}
