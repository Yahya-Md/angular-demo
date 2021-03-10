import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { DepartementComponent } from './departement/departement.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {DepartementServiceService} from './services/departement-service.service';
import {HttpClientModule} from '@angular/common/http';
import { DepartementDetailsComponent } from './departement/departement-details/departement-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartementComponent,
    NotFoundComponent,
    DepartementDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DepartementServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
