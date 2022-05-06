import React from "react";
//this component generates a new <tr> element and paints the recipe object to a table
function ConvertedRecipe({ recipe, index, deleteRecipeHandler }) {
	return (
		<tr key={index} id={index}>
			<td key={index + "-name"}>{recipe.name}</td>
			<td key={index + "-cuisine"}>{recipe.cuisine}</td>
			<td key={index + "-photo"}>
				<img
					src={recipe.photo}
					alt="finished recipe"
					style={{
						objectFit: "scale-down",
						width: "100%",
						height: "100%",
					}}
				/>
			</td>
			<td key={index + "-ingredients"} className="content_td">
				<p>{recipe.ingredients}</p>
			</td>
			<td key={index + "-preparation"} className="content_td">
				<p>{recipe.preparation}</p>
			</td>
			<td key={index + "-delete"}>
				<button name="delete" onClick={deleteRecipeHandler}>
					Delete
				</button>
			</td>
		</tr>
	);
}

export default ConvertedRecipe;
