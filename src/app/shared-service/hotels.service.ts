import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Hotel} from '../models/hotel';

@Injectable()
export class HotelsService {
  private  baseUrl: string ='http://localhost:8080/hotels/';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private hotel = new Hotel();
  constructor(private _http:Http) { }

  getHotels(){    
    return this._http.get(this.baseUrl+'all',this.options).map((response:Response)=>response.json())
      .catch(this.erro_handler);
  }

  getHotel(id:Number){

    return this._http.get(this.baseUrl+id,this.options).map((response:Response)=>response.json())
      .catch(this.erro_handler);
  }

  deleteHotel(id: Number){
    return this._http.delete(this.baseUrl+'delete/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.erro_handler);
  }

  createhotel(hotel: Hotel){
    return this._http.post(this.baseUrl+'create', JSON.stringify(hotel), this.options).map((response:Response)=>response.json())
		.catch(this.erro_handler);
  }

  updateHotel(hotel: Hotel){
    return this._http.put(this.baseUrl+'update', JSON.stringify(hotel), this.options).map((response:Response)=>response.json())
		.catch(this.erro_handler);
  }

  erro_handler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 }

 set(hotel: Hotel){
   this.hotel = hotel
 }

 get(){
   return this.hotel;
 }

}
