import { AfterViewInit, Component,Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements AfterViewInit {
  @Input() textContent = '';
  @Input() routeIcon = '';
  @Input() typeInput = 'text';
  idArray = -1;
  formControl: FormControl = new FormControl('',[Validators.required,Validators.minLength(3)]);
  constructor(private obsInput:PruebaService) { }

  ngAfterViewInit(): void {
    if(this.textContent === 'email') this.formControl.addValidators([Validators.email])
    this.obsInput
    .add({status: this.formControl.status,textContent:this.textContent,value:this.formControl.value})
    .subscribe((id)=> this.idArray = id)
  }
  changeInput(){
    this.obsInput.set({status: this.formControl.status,textContent:this.textContent, value:this.formControl.value},this.idArray)
    // this.obsInput.set()
  }
}
