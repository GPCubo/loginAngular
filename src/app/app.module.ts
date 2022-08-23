import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouteModule } from './route/route.module';
import { LoaderComponent } from './components/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    ButtonComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
