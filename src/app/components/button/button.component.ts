import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements AfterViewInit {
  @Input() textContent = '';
  isValid:number = 0;
  constructor(private inputState:PruebaService) { }
  
  ngAfterViewInit(): void {
    this.inputState.get().subscribe({
      next: (data)=> this.isValid = data.isValid,
      error: (err)=> console.error(err),
      complete: () => console.log('ready daddy')
    })
  }
}
