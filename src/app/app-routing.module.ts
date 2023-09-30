import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutUsComponent } from './components/AboutUs/AboutUs.component';
import { ContactUsComponent } from './components/ContactUs/ContactUs.component';
import { SelectOptionsComponent } from './components/select-options/select-options.component';
import { PostsComponent } from './components/posts/posts.component';
import { OrderMasterComponent } from './components/Order/order-master/order-master.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainLayoutComponent } from './components/MainLayout/MainLayout.component';
import { authGuard } from './Guards/auth.guard';
import { loginGuard } from './Guards/login.guard';
import { navigationGuard } from './Guards/navigation.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/Home',
        pathMatch: 'full',
      },
      {
        path: 'Home',
        component: MainComponent,
        title: 'Home',
        canActivate: [navigationGuard],
      },
      {
        path: 'AboutUs',
        component: AboutUsComponent,
        title: 'AboutUs',
        canActivate: [authGuard, navigationGuard],
      },
      {
        path: 'ContactUs',
        component: ContactUsComponent,
        title: 'AboutUs',
        canActivate: [authGuard, navigationGuard],
      },
      {
        path: 'Products',
        component: ProductComponent,
        title: 'Products',
        canActivate: [authGuard, navigationGuard],
      },
      {
        path: 'Products/:Id',
        component: ProductDetailsComponent,
        title: 'Product Details',
        canActivate: [authGuard, navigationGuard],
      },
      {
        path: 'Order',
        component: OrderMasterComponent,
        title: 'Order',
        canActivate: [authGuard, navigationGuard],
      },
      {
        path: 'FilteredProducts',
        component: SelectOptionsComponent,
        title: 'Filtered Products',
        canActivate: [authGuard, navigationGuard],
      },
      {
        path: 'Posts',
        component: PostsComponent,
        title: 'Posts',
        canActivate: [authGuard, navigationGuard],
      },
    ],
  },
  {
    path: 'Login',
    component: LoginComponent,
    title: 'Login',
    canActivate: [loginGuard],
  },
  {
    path: 'Register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'NotFound',
    // canActivate: [navigationGuard],
  },
  // { path: '**', redirectTo: '/NotFound' },
  // { path: '**', component: ProductDetailsComponent, title: 'Page Not Found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
