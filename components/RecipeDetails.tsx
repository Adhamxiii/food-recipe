import { Recipe } from "@/app/recipe-list/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipeDetailsItem = (recipe: any) => {
  return (
    <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
      <Link href="/recipe-list">Go to recipe list</Link>
      <div className="grid items-start grid-cols-1 last:grid-cols-2 gap-10">
        <div className="w-full lg:sticky top-0 sm:flex gap-2">
          <Image
            src={recipe?.recipe.image}
            alt={recipe?.recipe.name}
            width={1000}
            height={1000}
            className="w-4/5 rounded object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-gray-950">
            {recipe?.recipe.name}
          </h2>
          <div className="mt-5 flex flex-wrap gap-4">
            <p className="text-2xl text-gray-700">
              {recipe?.recipe?.mealType[0]}
            </p>
          </div>
          <div className="mt-5">
            <p className="text-2xl text-gray-800">{recipe?.recipe.cuisine}</p>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
            <ul className="mt-4 space-y-3 list-disc pl-4 text-sm text-gray-700">
              {recipe?.recipe?.ingredients.map((ingredient: any) => (
                <li className="text-lg text-gray-700">{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsItem;
