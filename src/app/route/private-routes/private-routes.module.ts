import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { OptionsComponent } from 'src/app/pages/options/options.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { PrivateRoutesRoutingModule } from './private-routes-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    OptionsComponent,
    ProfileComponent,
  ],
  imports: [
    PrivateRoutesRoutingModule,
    CommonModule
  ]
})
export class PrivateRoutesModule { }
