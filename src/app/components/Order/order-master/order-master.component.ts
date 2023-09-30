import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faRemove,
  faTrashCan,
  faMoneyCheck,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { CartItem } from 'src/app/models/CartItem';
import { ICategory } from 'src/app/models/ICategory';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css'],
})
export class OrderMasterComponent {
  selectedCategoryId: number = 0;
  icons = {
    faRemove,
    faTrashCan,
    faMoneyCheck,
    faPlus,
    faMinus,
  };
  // categories: ICategory[] = [
  //   { id: 1, name: 'Laptop' },
  //   { id: 2, name: 'Camera' },
  // ];
  cart: CartItem[] = [];

  constructor(
    public categoriesService: CategoriesService,
    public router: Router
  ) {
    // router.navigate(['45']);
    // console.log("TAHA HUSSEIN");
  }

  get orderTotalPrice() {
    return this.cart.reduce((c1, c2) => c1 + c2.totalPrice, 0);
  }

  AddToCard(cartItem: CartItem) {
    let cartItemIndex = this.cart.findIndex(
      (c) => c.product.id == cartItem.product.id
    );
    if (cartItemIndex == -1) this.cart.push(cartItem);
  }
  decreaseValue(cartItem: CartItem) {
    cartItem.count--;
    // cartItem.product.quantity++;
  }
  increaseValue(cartItem: CartItem) {
    cartItem.count++;
    // cartItem.product.quantity++;
  }
  removeFromCart(cartItem: CartItem) {
    let index = this.cart.indexOf(cartItem);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
}
