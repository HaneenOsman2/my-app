import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let router = inject(Router)
  
  if (localStorage.getItem('token') == null) {
    // console.log("hhh");
    router.navigate(['/login'])
    return false;
  }
  else {
    return true
  }
};
