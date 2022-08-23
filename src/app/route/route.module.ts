import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { WatcherLoginGuard } from '../guards/watcher-login.guard';
import { LoaderComponent } from '../components/loader/loader.component';

const routes:Routes = [
  {path:'home',component:LoginComponent},
  {path:'load',component:LoaderComponent},
  {path:'',canActivate:[WatcherLoginGuard],
  loadChildren:  () => import('./private-routes/private-routes.module')
  .then(m => m.PrivateRoutesModule)},
  {path: '**',redirectTo:'/home'},
  // {path:'',redirectTo:'/home',pathMatch:'full'},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RouteModule { }
