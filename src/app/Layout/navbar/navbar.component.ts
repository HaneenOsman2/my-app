import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogin: boolean = false

  constructor(private authService: AuthService, private Route: Router) {

  }
  ngOnInit(): void {

    this.authService.userDataSaved.subscribe(() => {
      if (this.authService.userDataSaved.getValue() == null) {
        this.isLogin = false
      } else {
        this.isLogin = true
      }
    })

  }

  logout() {
    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa");
    localStorage.removeItem("token")
    this.authService.saveData()
    this.Route.navigate(["/login"])
  }
  showAndHideNavBar: boolean = true
}
