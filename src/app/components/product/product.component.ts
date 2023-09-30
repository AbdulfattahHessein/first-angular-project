import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';
import { IProduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component( {
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
} )
export class ProductComponent implements OnInit, OnChanges {

  static counter: number = 0;
  @Input() selectedCategoryId: number = 0;
  // showImage: boolean = false;
  clientName: string = 'Taha';

  products: IProduct[] = this.productService.getAllProducts();

  constructor( public productService: ProductService ) {

  }
  ngOnChanges( changes: SimpleChanges ): void {
    if ( this.selectedCategoryId == 0 )
      this.products = this.products;
    else this.products = this.productService.getProductsByCategoryId( this.selectedCategoryId )
  }
  ngOnInit(): void {

  }

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
  // logMessage( event: MouseEvent ) {
  logMessage() {
    // console.log( "Taha Hussein" );
    // console.log( ( event.target as Element ).classList.add( `btn-success` ) );

    // console.log( event.target.classList.add("btn-success") );

    // return `Message: ${++ProductComponent.counter}`

    // console.log(event);
  }

  // getProductsByCategoryId( categoryId: number ) {
  //   return this.products.filter( p => p.categoryId == categoryId )
  // }

}
