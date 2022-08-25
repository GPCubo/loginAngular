import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoaderStatusService } from '../services/loader-status.service';

@Injectable({
  providedIn: 'root'
})
export class WatcherLoginGuard implements CanActivate {
  statusLoader = new BehaviorSubject(false);
  constructor(private router:Router, private http: HttpClient, private loader:LoaderStatusService){
  }
  redirectInvalid():boolean{
    localStorage.clear();
    this.router.navigate(['/home'])
    this.loader.set(false)
    return false;
  }
  redirectValid():boolean{
    this.loader.set(false)
    return true;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any{
      return this.authUser()
    }
  authUser(){
    this.loader.set(true);
    return this.http.post(
      `${environment.BASEURL}api/auth`,{},{headers:{'Authorization':`Bearer ${localStorage.getItem('tkn')}`}}
      ).subscribe({
        next:()=> this.redirectValid(),
        error:()=> this.redirectInvalid()
    })
  }
}
