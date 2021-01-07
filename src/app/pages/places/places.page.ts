import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../api/places.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places : any;
  id : any ;

  constructor(private placesService: PlacesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.placesService.getPlaces().subscribe((data:any)=>{
      this.places = data.data;
      console.log(this.places);
    })   
  }
}