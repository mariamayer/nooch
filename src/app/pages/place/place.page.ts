import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../api/places.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {
  place : any;
  id : any ;

  constructor(private placesService: PlacesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.placesService.getPlace(this.id).subscribe((data)=>{
      this.place = data;
    })  
  }

}
