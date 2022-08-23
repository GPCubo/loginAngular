import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoaderStatusService } from './services/loader-status.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  constructor(private loader:LoaderStatusService){}
  loaderIs:boolean = false
  ngAfterViewInit(): void {
      this.loader.set(false);
  }
  ngOnInit(): void {
      this.loader.get().subscribe((statusLoad)=> this.loaderIs = statusLoad);
      this.loader.set(true);
  }
}
