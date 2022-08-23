import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderStatusService {
  private statusOb$ = new BehaviorSubject<boolean>(false);
  get(){
    return this.statusOb$.asObservable();
  };
  set(setBool:boolean):void{
    this.statusOb$.next(setBool)
  }
}
