import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children : [
      {
        path: 'recipes',
        loadChildren: () =>import('../pages/recipes/recipes.module').then(m => m.RecipesPageModule)
      },
      {
        path: 'recipe/:id',
        loadChildren: () =>import('../pages/recipe/recipe.module').then(m => m.RecipePageModule)
      },
      {
        path: 'place/:id',
        loadChildren: () =>import('../pages/place/place.module').then(m => m.PlacePageModule)
      },        
      {
        path: 'stories',
        loadChildren: () => import('../pages/stories/stories.module').then( m => m.StoriesPageModule)
      },
      {
        path: 'places',
        loadChildren: () => import('../pages/places/places.module').then( m => m.PlacesPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
