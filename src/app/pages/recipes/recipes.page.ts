import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../api/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes : any;
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.getRecipes().subscribe((data:any)=>{
      this.recipes = data.data;
    })  
  }
}