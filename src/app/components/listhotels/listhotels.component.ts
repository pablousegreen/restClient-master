import { Component, OnInit } from '@angular/core';
import {HotelsService} from  '../../shared-service/hotels.service';
import {Hotel} from '../../models/hotel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listhotels',
  templateUrl: './listhotels.component.html',
  styleUrls: ['./listhotels.component.css']
})
export class ListhotelsComponent implements OnInit {
  private hotels:Hotel[];
  constructor(private _hotelService: HotelsService, private _router: Router) { }

  ngOnInit() {
    this._hotelService.getHotels().subscribe((hotels)=>{
      console.log(hotels);
      this.hotels=hotels;
    },(error)=>{
      console.log(error);
    })
  }

  deleteHotel(hotel: Hotel){
    this._hotelService.deleteHotel(hotel.id).subscribe((data)=>{
      this.hotels.slice(this.hotels.indexOf(hotel),1);
    }),(error)=>{
      console.log(this.hotels);
    }
  }

  updateHotel(hotel:Hotel){
    this._hotelService.set(hotel);
    this._router.navigate(['/hoform']);
  }

  newHotel(){
    let hotel= new Hotel();
    this._hotelService.createhotel(hotel);
    this._router.navigate(['/hoform']);
  }
}
