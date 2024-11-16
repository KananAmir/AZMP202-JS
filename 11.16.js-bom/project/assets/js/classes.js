export class Product {
  //   static id = 0;
  constructor(image, title, price, category, raiting) {
    this.image = image;
    this.title = title;
    this.price = price;
    this.category = category;
    this.raiting = raiting;
    // this.id = ++Product.id;
    this.id = Date.now();
  }
}
