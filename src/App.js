import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

//App creates a website that allows users to add recipes w/ images to a list

function App() {
	//state management of a recipes list
	const [recipes, setRecipes] = useState(RecipeData);
	/*createRecipeHandler is passed through the RecipeCreate component as a prop to
  allow updating the recipe list with new recipe objects.*/
	const createRecipeHandler = (content) => {
		setRecipes([...recipes, content]);
	};
	/*deleteRecipeHandler is passed through the RecipeList component as a prop to 
  allow onClick assignment to "delete" buttons when generating a list to render.*/
	const deleteRecipeHandler = (event) => {
		const idIndex = parseInt(event.target.parentNode.parentNode.id);
		const updatedArray = recipes.filter((_, index) => index !== idIndex);
		setRecipes(updatedArray);
	};

	return (
		<div className="App">
			<header>
				<h1
					style={{
						fontFamily: "Playfair Display SC",
						textAlign: "center",
						fontSize: "64px",
					}}
				>
					Delicious Food Recipes
				</h1>
			</header>
			<RecipeList
				recipes={recipes}
				deleteRecipeHandler={deleteRecipeHandler}
			/>
			<RecipeCreate createRecipeHandler={createRecipeHandler} />
		</div>
	);
}

export default App;
