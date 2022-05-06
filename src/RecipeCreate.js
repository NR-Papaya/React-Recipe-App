import React, { useState } from "react";

function RecipeCreate({ createRecipeHandler }) {
	const initDataState = {
		name: "",
		cuisine: "",
		photo: "",
		ingredients: "",
		preparation: "",
	};
	const [dataForm, setDataForm] = useState({ ...initDataState });
	//manages event changes to form elements
	const changeHandler = (event) => {
		const value = event.target.value;
		const id = event.target.id;
		setDataForm({ ...dataForm, [id]: value });
	};
	//manages the submit event. Generates a new object and places it on the recipes list
	const submitHandler = (event) => {
		event.preventDefault();
		createRecipeHandler(dataForm);
		setDataForm({ ...initDataState });
	};

	return (
		<form name="create" onSubmit={submitHandler}>
			<table>
				<tbody>
					<tr>
						<td>
							<input
								type="text"
								name="name"
								placeholder="Name"
								value={dataForm.name}
								id="name"
								onChange={changeHandler}
								style={{ width: "100%" }}
							></input>
						</td>
						<td>
							<input
								type="text"
								name="cuisine"
								placeholder="cuisine"
								value={dataForm.cuisine}
								id="cuisine"
								onChange={changeHandler}
								style={{ width: "100%" }}
							></input>
						</td>
						<td>
							<input
								type="text"
								name="photo"
								placeholder="URL"
								value={dataForm.photo}
								id="photo"
								onChange={changeHandler}
								style={{ width: "100%" }}
							></input>
						</td>
						<td>
							<textarea
								type="text"
								name="ingredients"
								placeholder="ingredients"
								value={dataForm.ingredients}
								id="ingredients"
								onChange={changeHandler}
								style={{ width: "75%" }}
							></textarea>
						</td>
						<td>
							<textarea
								type="text"
								name="preparation"
								placeholder="preparation"
								value={dataForm.preparation}
								id="preparation"
								onChange={changeHandler}
								style={{ width: "75%" }}
							></textarea>
						</td>
						<td>
							<button type="submit">Create</button>
						</td>
					</tr>
				</tbody>
			</table>
		</form>
	);
}

export default RecipeCreate;
