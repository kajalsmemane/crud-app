import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {
bookingObj:Booking = new Booking();

selectedBookingId:string | null= null;
editBooking: string | null = null ;
constructor(private bookingSvc:BookingService,private router:Router,private activatedRoute:ActivatedRoute){
  this.selectedBookingId = this.activatedRoute.snapshot.paramMap.get("id");
  this.editBooking = this.activatedRoute.snapshot.queryParamMap.get("edit");
  console.log(this.selectedBookingId);

  console.log(this.editBooking);
}

ngOnInit(){
if(this.editBooking ){
  this.getBookingById();
}
}


getBookingById(){
const endPoint = "booking/"+this.selectedBookingId;
this.bookingSvc.getDataFromServer(endPoint).subscribe({
  next:(response:any)=>{
    console.log("response ", response); 
    this.bookingObj = {...response};
  },
  error:(error:any)=>{

  }
})
}
SaveBooking(){
  if(this.editBooking){
    this.updateBooking();
  }else{
    this.createBooking();
  }
}
createBooking(){
  console.log("form data",this.bookingObj);
  this.bookingSvc.putDataToServer("booking",this.bookingObj).subscribe({
    next:(response : any)=>{
      console.log("Data Saved Successfully");
      this.router.navigate(["/booking-list"]);
    },
    error:()=>{

    }
  })
  console.log("Create Booking Completed");
}



updateBooking(){
  const endPoint = "booking/" + this.selectedBookingId;
  this.bookingSvc.putDataToServer(endPoint,this.bookingObj).subscribe({
    next:(response:any) =>{
      console.log("Data updated Successfully");
      this.router.navigate(["/booking-list"]);
    },
  error:(error)=>{
    console.log(error);
  }

 })
}
}



class Booking {
source:string="";
destination:string="";
name:string="";
date:string=""

}


