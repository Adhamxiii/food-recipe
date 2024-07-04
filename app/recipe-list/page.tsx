import RecipeList from "@/components/RecipeList";
import React from "react";

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealTypes: string[];
}

export interface Recipes {
  recipes: Recipe[];
}

const RecipesPage = async () => {
  const fetchListOfRecipes = async () => {
    try {
      const response = await fetch("http://dummyjson.com/recipes");
      const data = await response.json();

      return data?.recipes;
    } catch (error) {
      throw new Error("Error fetching recipes");
    }
  };

  const recipes = await fetchListOfRecipes();

  return <RecipeList recipes={recipes} />;
};

export default RecipesPage;
