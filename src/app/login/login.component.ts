
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../Layout/navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage!: string;
  loading: boolean = false;


  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])

  })

  constructor(private _AuthSerivce: AuthService, private _Router: Router,private navBar :NavbarComponent) {
    this.navBar.showAndHideNavBar = false;
  }

  ngOnInit(): void {
  }


  loginSubmit(logForm: FormGroup) {
    this.loading = true;
    // debugger;
    this._AuthSerivce.sendLogin(this.loginForm.value).subscribe({


      next: (res) => {
        if (res.token) {
          localStorage.setItem("token", res.token)
          this._AuthSerivce.saveData();
          this._Router.navigate(["/home"]);
        }
        // console.log(res);
      },

      error: (err) => {
        this.errorMessage = err.error.message
        this.loading = false;
        console.log(err);


      }
    })

  }

}

// console.log(FormGroup);

