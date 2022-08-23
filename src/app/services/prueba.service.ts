import { Injectable } from '@angular/core';
import { BehaviorSubject, mergeMap, Observable, of, pipe } from 'rxjs';
import { BodyInput, BodyState } from '../interfaces/StateInputs';
@Injectable({
  providedIn: 'root'
})

export class PruebaService {
  private stateInputs$ = new BehaviorSubject<BodyState>({isValid:0,allInputs:[]})
  private bodyState = this.stateInputs$.value;
  get():Observable<BodyState>{
    return this.stateInputs$.asObservable()
  }
  add(val:BodyInput):Observable<number>{
    this.bodyState.allInputs.push(val);
    this.stateInputs$.next(this.bodyState);
    return of(this.bodyState.allInputs.length - 1)
  }
  set(body:BodyInput,val:number):void{
    this.bodyState.allInputs[val].status = body.status 
    this.bodyState.allInputs[val].value = body.value 
    const updateValid = this.bodyState.allInputs.every((input)=> input.status === 'VALID') ? 1 : 0
    this.bodyState.isValid = updateValid
    this.stateInputs$.next(this.bodyState)
  }
}
