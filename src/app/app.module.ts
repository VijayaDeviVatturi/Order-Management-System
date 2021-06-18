import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './Login/loginpage/loginpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { OrderspageComponent } from './Orders/orderspage/orderspage.component';
import {MatTableModule,MatButtonModule,MatDialogModule,MatDatepickerModule} from '@angular/material';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    OrderspageComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule
  ],
  entryComponents: [DialogBoxComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
