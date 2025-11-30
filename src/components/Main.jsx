import { useState } from "react";
import IngredientsList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShow, setRecipeShow] = useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }
  async function getRecipe() {
    const recipeMarkDown = await getRecipeFromMistral(ingredients);
    console.log(recipeMarkDown)
  }
  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />{" "}
        <button>Add ingredient</button>{" "}
      </form>
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {recipeShow && <ClaudeRecipe getRecipe={getRecipe} />}
    </main>
  );
}
