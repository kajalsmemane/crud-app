import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
// import { HttpClientModule} from '@angular/common/http';
// import { CreateBookigComponent } from './create-bookig/create-bookig.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    // CreateBookigComponent,
    CreateBookingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
