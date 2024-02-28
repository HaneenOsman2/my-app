import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { FilterComponent } from './filter/filter.component';
import { RegisterComponent } from './register/register.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilteredProductComponent } from './filtered-product/filtered-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';




@NgModule({
  declarations: [    //componet
    AppComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    ProductDetialsComponent,
    FilterComponent,
    RegisterComponent,
    SearchBarComponent,
    FilteredProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [NavbarComponent],  /// service
  bootstrap: [AppComponent]
})
export class AppModule { 

 
}
