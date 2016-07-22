import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe'
import { RecipeItemComponent } from './recipe-item.component'

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy','Dummy','http://www.knorr.com/Images/1020/1020-245706.jpg');

  constructor() {}

  ngOnInit() {
  }

}
