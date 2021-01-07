import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private httpClient: HttpClient) { }

  public getPlaces(){
    return this.httpClient.get(`http://localhost:3000/api/place`);
  }

  public getPlace(id){
    return this.httpClient.get(`http://localhost:3000/api/place/${id}`);
  }

}
