import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { CardStyleDirective } from './directives/card-style.directive';
import { CreditCardPipe } from './pipes/creditCard.pipe';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ParentComponent } from './components/parent/parent.component';
import { SelectOptionsComponent } from './components/select-options/select-options.component';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { NationalIdPipe } from './pipes/national-id.pipe';
import { OrderMasterComponent } from './components/Order/order-master/order-master.component';
import { ProductListComponent } from './components/Order/product-list/product-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/MainLayout/MainLayout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    ProductComponent,
    CardStyleDirective,
    CreditCardPipe,
    NotFoundComponent,
    ParentComponent,
    SelectOptionsComponent,
    PostsComponent,
    NationalIdPipe,
    OrderMasterComponent,
    ProductListComponent,
    LoginComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
