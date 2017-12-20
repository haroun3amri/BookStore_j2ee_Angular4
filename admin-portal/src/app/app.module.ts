import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatToolbar} from '@angular/material';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MatToolbar
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
