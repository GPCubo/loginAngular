import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pipe, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BodyState } from '../interfaces/StateInputs';

@Injectable({
  providedIn: 'root'
})
export class LoginEndpointService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders()
  .set('Authorization', '')
  .set('Accept','application/json')
  .set('Content-Type','application/json');

  send(data:BodyState):Observable<any>{
    const formValues:any = {}
    data.allInputs.map(input => formValues[input.textContent]= input.value)
    return this.http.post(`${environment.BASEURL}api/login`,formValues)
    .pipe(
      catchError((data:ErrorEvent)=> throwError(()=> `K kgda parce ${data.message}`))
    )
  }
}
