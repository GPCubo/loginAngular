import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoaderStatusService } from 'src/app/services/loader-status.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private loader: LoaderStatusService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
      this.loader.set(false);
  }
}
