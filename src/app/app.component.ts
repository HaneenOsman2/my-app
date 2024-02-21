import { Component } from '@angular/core';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // constructor(private showAndHideNavBar: LoginComponent) {
  //   this.showAndHideNavBar.showAndHideNavBar = true
  // }

}
