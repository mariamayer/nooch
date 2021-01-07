import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private httpClient: HttpClient) { }

  public getRecipes() {
    return this.httpClient.get(`http://localhost:3000/api/recipe`);
  }

  public getRecipe(id){
    return this.httpClient.get(`http://localhost:3000/api/recipe/${id}`);
  }

}