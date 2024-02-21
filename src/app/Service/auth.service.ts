import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';


interface loginInterface {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "https://fakestoreapi.com";
  userDataSaved: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient, private router: Router) {
    if (localStorage.getItem('token') == null) {
      router.navigate(['/login'])
    }else{
      this.saveData()
      router.navigate([localStorage.getItem("currentPage")])
    }

  }
  sendLogin(loginData: loginInterface): Observable<any> {

    return this._HttpClient.post(this.baseUrl + "/auth/login", loginData)
    console.log(loginData);
  }

  saveData() {

    this.userDataSaved.next(localStorage.getItem("token"))
    if (this.userDataSaved.getValue() != null) {
      this.userDataSaved.next(jwtDecode(this.userDataSaved.getValue()));
    }
    else {
      this.userDataSaved.next(null)
    }
  }
}
