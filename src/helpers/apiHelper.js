import axios from "axios";

export const getRecipes = () => {
  return axios.get("https://app-recipe-apidae.herokuapp.com/AllRecipes");
};
export const deleteRecipe = (id) => {
  return axios.delete(`https://app-recipe-apidae.herokuapp.com/${id}`);
};
export const updateRecipe = (id, newRecipe) => {
  return axios.put(
    `https://app-recipe-apidae.herokuapp.com/${newRecipe._id}`,
    newRecipe
  );
};
export const addRecipe = (recipe) => {
  return axios.post(
    "https://app-recipe-apidae.herokuapp.com/AddRecipe",
    recipe
  );
};
