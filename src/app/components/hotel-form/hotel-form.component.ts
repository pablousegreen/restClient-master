import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HotelsService} from '../../shared-service/hotels.service';
import {Hotel} from '../../models/hotel';


@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {
  private hotel:Hotel;

  constructor(private _hotelService: HotelsService, private _router: Router) { }

  ngOnInit() {
    this.hotel = this._hotelService.getHotel();
  }

  processForm(){
		if(this.hotel.id ==undefined){
			this._hotelService.createhotel(this.hotel).subscribe((hotel)=>{
				console.log(hotel);
				this._router.navigate(['/ho']);
			},(error)=>{
				console.log(error);
			});
		}else{
			this._hotelService.updateHotel(this.hotel).subscribe((hotel)=>{
				console.log(hotel);
				this._router.navigate(['/ho']);
			},(error)=>{
				console.log(error);
			});
		}
	}

}
