import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginEndpointService } from 'src/app/services/login-endpoint.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  bgLi:string = '';
  constructor(
    private route:ActivatedRoute,
    private http :LoginEndpointService,
    private routeNavigate :Router) { }
  ngOnInit(): void {
      this.route.url.subscribe((data)=>  this.bgLi = data[0].path.toLowerCase()).unsubscribe();
  }
  logOut(){
    this.http.logOut().subscribe({
      next:()=> this.routeNavigate.navigate(['/home']),
      error:(err)=> console.log(err),
    })
  }
}
