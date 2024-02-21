import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './Auth/auth.guard';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'signUp', pathMatch: 'full' },
  
  { path: 'signUp', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: 'home', canActivate: [authGuard], component: HomeComponent },
  {path: 'product', canActivate: [authGuard],component:ProductsComponent},
  { path: 'productDetials/:id', canActivate: [authGuard], component: ProductDetialsComponent },

  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
