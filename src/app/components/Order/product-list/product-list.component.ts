import { ProductService } from './../../../services/product.service';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  Type,
} from '@angular/core';
// import * as faIcons from '@fortawesome/free-solid-svg-icons';
import {
  IconDefinition,
  faHeart,
  faCocktail,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { CartItem } from 'src/app/models/CartItem';
import { IProduct } from 'src/app/models/IProduct';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges {
  icons = {
    faHeart,
    faCocktail,
    faShoppingCart,
  };
  @Input() categoryId: number = 0;
  @Output() onAddToCard = new EventEmitter<CartItem>();
  products!: IProduct[];
  constructor(
    public productService: ProductService,
    public categoriesService: CategoriesService
  ) {
    this.products = productService.getAllProducts();
  }
  AddToCard(product: IProduct) {
    this.onAddToCard.emit(new CartItem(product));
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.updateProducts();
  }

  updateProducts(): void {
    this.products = this.productService.getProductsByCategoryId(
      this.categoryId
    );
  }
}
