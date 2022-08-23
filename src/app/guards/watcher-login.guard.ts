import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WatcherLoginGuard implements CanActivate {
  constructor(private router:Router, private http: HttpClient){
  }
  redirect():boolean{
    localStorage.clear();
    this.router.navigate(['/home'])
    return false;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any{
    return this.authUser()
  }
  authUser(){
  return this.http.post(
    'http://localhost:8000/api/auth',{},
    {headers:{'Authorization':`Bearer ${localStorage.getItem('tkn')}`}
  }).subscribe(
    {
      next:()=> true,
      error:()=> this.redirect()
    }
  )
  }
}
