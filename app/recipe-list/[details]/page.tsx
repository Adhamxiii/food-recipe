import RecipeDetailsItem from "@/components/RecipeDetails";
import React from "react";
import { Recipe } from "../page";

const RecipeDetailsPage = async ({
  params,
}: {
  params: { details: string };
}) => {
  const fetchRecipeDetails = async (currentRecipeId: string) => {
    try {
      const res = await fetch(
        `http://dummyjson.com/recipes/${currentRecipeId}`
      );
      const data = await res.json();
      return data as Recipe;
    } catch (error) {
      throw new Error("Error fetching recipe details");
    }
  };

  const getRecipeDetails = await fetchRecipeDetails(params?.details);

  return <RecipeDetailsItem recipe={getRecipeDetails} />;
};

export default RecipeDetailsPage;
