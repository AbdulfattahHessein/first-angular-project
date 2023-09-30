import { Location } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  public product?: IProduct;
  constructor(
    public productService: ProductService,
    public activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateProduct();
  }

  updateProduct() {
    // let param = this.activatedRoute.snapshot.paramMap.get('Id');
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      let param = paramMap.get('Id');
      this.productId = param ? Number(param) : 0;
      this.product = this.productService.getProductById(this.productId);
    });

    console.log(this.product);
  }
  goBack() {
    // window.history.back();
    this.location.back();
  }
  previousProduct() {
    let index = this.productService.getAllProducts().indexOf(this.product!);
    if (index - 1 >= 0) {
      let previousProductId =
        this.productService.getAllProducts()[index - 1].id;
      this.router.navigate(['/Products', previousProductId]);
    }
  }
  nextProduct() {
    let index = this.productService.getAllProducts().indexOf(this.product!);
    if (index + 1 < this.productService.getAllProducts().length) {
      let previousProductId =
        this.productService.getAllProducts()[index + 1].id;
      // window.location.pathname = `/Products/${previousProductId}`;
      this.router.navigate(['/Products', previousProductId]);
    }
  }
}
