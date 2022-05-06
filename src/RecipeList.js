import React from "react";
import ConvertedRecipe from "./ConvertedRecipe";
// component takes a recipe list and converts it to html for rendering within a table
function RecipeList({ recipes, deleteRecipeHandler }) {
	//maps each recipe using the convertedRecipe component and retruns an array with each recipe to render
	const htmlRecipeList = recipes.map((recipe, index) => (
		<ConvertedRecipe
			index={index}
      key={index}
			recipe={recipe}
			deleteRecipeHandler={deleteRecipeHandler}
		/>
	));

	return (
		<div className="recipe-list">
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Cuisine</th>
						<th>Photo</th>
						<th>Ingredients</th>
						<th>Preperation</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>{htmlRecipeList}</tbody>
			</table>
		</div>
	);
}

export default RecipeList;
