function describeProduct(product) {
  console.log(`Product: ${product.name} | Price: ₦${product.price} | Stock: ${product.stock} units`);
}

const product1 = {
  name: "Smartphone",
  price: 150000,
  stock: 50
};
const product2 = {
  name: "Laptop",
  price: 250000,
  stock: 30
};
const product3 = {
  name: "Headphones",
  price: 50000,
  stock: 100
};

describeProduct(product1);
describeProduct(product2);
describeProduct(product3);