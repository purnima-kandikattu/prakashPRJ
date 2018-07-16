import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import {AuthService} from 'app/auth.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
