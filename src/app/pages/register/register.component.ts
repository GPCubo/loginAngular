import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginEndpointService } from 'src/app/services/login-endpoint.service';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(private http: LoginEndpointService, private router: Router, private inputsValue: PruebaService) { }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
      this.inputsValue.reset()
  }
  onSubmit(){
    this.inputsValue.get().subscribe((data)=> console.log(data)).unsubscribe();
    // this.http.register().subscribe({
    //   next:()=> this.router.navigate(['/home']),
    //   error:(err)=>console.error(err),
    //   complete:()=>console.log('listo')
    // })
  }
}
