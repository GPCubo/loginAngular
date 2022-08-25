import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderStatusService } from './services/loader-status.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private loader:LoaderStatusService, private router: Router){}
  loaderIs:boolean = false
  ngOnInit(): void {
      this.loader.get().subscribe((statusLoad)=> this.loaderIs = statusLoad);
      if(localStorage.getItem('tkn')) this.router.navigate(['/dashboard'])
  }
}
