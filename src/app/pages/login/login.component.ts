import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { PruebaService } from 'src/app/services/prueba.service';
import { LoginEndpointService } from 'src/app/services/login-endpoint.service';
import { BodyState } from 'src/app/interfaces/StateInputs';
import { Router } from '@angular/router';
import { LoaderStatusService } from 'src/app/services/loader-status.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  lastInfo = null
  constructor(
    private inputsValue:PruebaService,
    private endpointLogin:LoginEndpointService,
    private router: Router,
    private loader: LoaderStatusService
    ){}
  ngOnDestroy(): void {
      this.inputsValue.reset();
  }
    onSubmit(f:NgForm){
      this.inputsValue.get().subscribe((data)=> this.onSub(data)).unsubscribe();
    }
    onSub(data:BodyState){
      this.loader.set(true);
      this.endpointLogin.send(data).subscribe({
        next: (data)=> {
          localStorage.setItem('tkn',data.access_token)
          this.loader.set(false)
          this.router.navigate(['/dashboard'])
        },
        error: (err)=> {
          this.loader.set(false);
          console.log(err)
        }
    })
  }
}
