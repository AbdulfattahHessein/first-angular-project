import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';
import { IProduct } from 'src/app/models/IProduct';

@Component( {
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
} )
export class ProductComponent implements OnInit {

  static counter : number = 0;
  // showImage: boolean = false;
  selectedCategoryId: number = 0;
  clientName: string = 'Taha';
  products: IProduct[] = [
    {
      id: 1,
      categoryId: 1,
      img: 'https://m.media-amazon.com/images/I/41oAtcp2wZL._AC_.jpg',
      name: 'Laptop IdeaPad 5',
      price: 25.666,
      quantity: 23,
      discount: 20,
      enable: true
    },
    {
      id: 2,
      categoryId: 1,
      img: 'https://m.media-amazon.com/images/I/51fefkRnnAL._AC_SL1000_.jpg',
      name: 'Lenovo Legion Pro 5',
      price: 81.195,
      quantity: 1,
      discount: 0,
      enable: true
    },
    {
      id: 3,
      categoryId: 1,
      img: 'https://m.media-amazon.com/images/I/51-LslqH0FL.__AC_SY300_SX300_QL70_ML2_.jpg',
      name: 'Vostro 3520',
      price: 23.099,
      quantity: 0,
      discount: 0,
      enable: true
    },
    {
      id: 4,
      categoryId: 2,
      img: 'https://m.media-amazon.com/images/I/61eflBd-X2L._AC_SL1230_.jpg',
      name: 'Canon Eos M50 Mark',
      price: 22.133,
      quantity: 25,
      discount: 10,
      enable: true
    },
    {
      id: 5,
      categoryId: 2,
      img: 'https://m.media-amazon.com/images/I/81WtQ64-SOL._AC_SL1500_.jpg',
      name: 'Nikon d850',
      price: 25.666,
      quantity: 23,
      discount: 20,
      enable: true
    },
    {
      id: 6,
      categoryId: 2,
      img: 'https://m.media-amazon.com/images/I/61F+GAqNeTL._AC_SL1500_.jpg',
      name: 'GoPro - Hero 10 Black',
      price: 17.900,
      quantity: 12,
      discount: 26,
      enable: true

    },

  ];
  categories: ICategory[] = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Camera" },
  ];

  constructor() {
    // console.log("HI Taha");

  }
  ngOnInit(): void {
    console.log( "HI Taha" );
  }
  // constructor( _products: IProduct[], _clientName: string ) {
  //   this.products = _products;
  //   this.clientName = _clientName;

  // }

  hideImage( id: number ) {
    // let index = this.products.findIndex( p => p.id == id )
    // this.products[index].enable = !this.products[index].enable;
    // return this.products[index].enable;

    let product = this.products.find( p => p.id == id );
    product!.enable = !product!.enable;
    return product!.enable;
  }

  decreaseQuantity( id: number ) {
    let product = this.products.find( p => p.id == id );
    return product!.quantity--;
  }
  logMessage()
  {
    console.log( "Taha Hussein" );
    // return `Message: ${++ProductComponent.counter}`

  }

}
