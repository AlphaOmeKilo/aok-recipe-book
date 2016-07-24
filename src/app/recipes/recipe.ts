import {Ingredient} from "../shared";

export class Recipe {

  constructor(public name,
              public desc,
              public imagePath,
              public ingredients: Ingredient[]){}

}
