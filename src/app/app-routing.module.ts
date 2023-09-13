import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutUsComponent } from './components/AboutUs/AboutUs.component';
import { ContactUsComponent } from './components/ContactUs/ContactUs.component';
import { ProductDetailsComponent } from './components/ProductDetails/ProductDetails.component';

const routes: Routes = [
  { path: '', component: MainComponent, title: "Home" },
  { path: 'Home', component: MainComponent, title: "Home" },
  { path: 'AboutUs', component: AboutUsComponent, title: "AboutUs" },
  { path: 'ContactUs', component: ContactUsComponent, title: "AboutUs" },
  { path: 'Products', component: ProductComponent, title: "Products" },
  { path: 'Products/:Id', component: ProductDetailsComponent, title: "Product Details" },
  // { path: 'NotFound', component: NotFoundComponent, title: "NotFound" },
  // { path: '**', redirectTo: '/NotFound' },
  { path: '**', component: ProductDetailsComponent, title: "Page Not Found" },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
