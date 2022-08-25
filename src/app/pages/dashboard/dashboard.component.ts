import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoaderStatusService } from 'src/app/services/loader-status.service';
import { LoginEndpointService } from 'src/app/services/login-endpoint.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private http : LoginEndpointService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }
}
