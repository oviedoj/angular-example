import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EmpleadoService } from './empleado/empleado.service';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient, EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
