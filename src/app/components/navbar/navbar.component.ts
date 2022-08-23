import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// const iconDashboard = new URL('../../../assets/iconDashboard.svg',import.meta.url);
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  bgLi:string = '';
  constructor(private route:ActivatedRoute) { }
  ngOnInit(): void {
      this.route.url.subscribe((data)=>  this.bgLi = data[0].path.toLowerCase()).unsubscribe();
  }
}
