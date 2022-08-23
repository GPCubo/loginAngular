import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { OptionsComponent } from 'src/app/pages/options/options.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';

const routes: Routes = [
  {path:'',children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'profile',component:ProfileComponent},
    {path:'options',component:OptionsComponent},
  ],}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutesRoutingModule { }
