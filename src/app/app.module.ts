import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MakeupComponent } from './makeup/makeup.component';
import { AddMakeupComponent } from './add-makeup/add-makeup.component';
import { UpdateMakeupComponent } from './update-makeup/update-makeup.component';


@NgModule({
  declarations: [
    AppComponent,
    MakeupComponent,
    AddMakeupComponent,
    UpdateMakeupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
