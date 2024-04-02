import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  bookinglist:any=[];
  
constructor(private bookingsrv :BookingService){

}
 ngOnInit(){
  this.getBookings();

  }
  getBookings(){

  
  this.bookingsrv.getDataFromServer("booking") .subscribe({
    next :(response:any)=> {
      if (response && response.length > 0){
        this.bookinglist=response;
        console.log("booking-list",this.bookinglist);
      }
    },
    error:(error:any) => {
      if(error.error instanceof ErrorEvent){
        console.log("Client Side Error "+ error.error.message);
      }else {
        console.log("Server Side Error " + error.message);
    console.log(error);
      };
    complete:()=>{
    }
    }
  })
 }
 deleteRecord(id: string, index: number) {
  const selection = confirm("Are you Sure");
  if (selection) {
    const endPoint = "booking/" + id;
    this.bookingsrv.deleteDataFromServer(endPoint).subscribe({
      next: () => {
        console.log("Delete Record Successfully");
       // this.getBookings();
       this.bookinglist.splice(index,1);
      },

      error: (error) => {
        if(error.error instanceof ErrorEvent){
          console.log("Client Side Error "+ error.error.message);
        }else {
          console.log("Server Side Error " + error.message);
        }
      }
    })
  }

}


}


