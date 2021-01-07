import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../api/recipes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  recipe : any;
  id : any ;

  constructor(private recipesService: RecipesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.recipesService.getRecipe(this.id).subscribe((data)=>{
      this.recipe = data;
      console.log(data);
    })  
  }

}
