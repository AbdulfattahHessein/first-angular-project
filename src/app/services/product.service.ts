import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IProduct[] = [
    {
      id: 1,
      categoryId: 1,
      img: 'https://m.media-amazon.com/images/I/41oAtcp2wZL._AC_.jpg',
      name: 'Laptop IdeaPad 5',
      price: 25.666,
      quantity: 23,
      discount: 20,
      enable: true,
    },
    {
      id: 2,
      categoryId: 1,
      img: 'https://m.media-amazon.com/images/I/51fefkRnnAL._AC_SL1000_.jpg',
      name: 'Lenovo Legion Pro 5',
      price: 81.195,
      quantity: 1,
      discount: 0,
      enable: true,
    },
    {
      id: 3,
      categoryId: 1,
      img: 'https://m.media-amazon.com/images/I/51-LslqH0FL.__AC_SY300_SX300_QL70_ML2_.jpg',
      name: 'Vostro 3520',
      price: 23.099,
      quantity: 0,
      discount: 0,
      enable: true,
    },
    {
      id: 4,
      categoryId: 2,
      img: 'https://m.media-amazon.com/images/I/61eflBd-X2L._AC_SL1230_.jpg',
      name: 'Canon Eos M50 Mark',
      price: 22.133,
      quantity: 25,
      discount: 10,
      enable: true,
    },
    {
      id: 5,
      categoryId: 2,
      img: 'https://m.media-amazon.com/images/I/81WtQ64-SOL._AC_SL1500_.jpg',
      name: 'Nikon d850',
      price: 25.666,
      quantity: 23,
      discount: 20,
      enable: true,
    },
    {
      id: 6,
      categoryId: 2,
      img: 'https://m.media-amazon.com/images/I/61F+GAqNeTL._AC_SL1500_.jpg',
      name: 'GoPro - Hero 10 Black',
      price: 17.9,
      quantity: 12,
      discount: 26,
      enable: true,
    },
  ];

  constructor() {}

  getProductsByCategoryId(categoryId: number) {
    if (categoryId == 0) return this.getAllProducts();
    return this.products.filter((p) => p.categoryId == categoryId);
  }

  getAllProducts() {
    return this.products;
  }
  getProductById(id: number): IProduct | undefined {
    return this.products.find((p) => p.id == id);
  }
}
