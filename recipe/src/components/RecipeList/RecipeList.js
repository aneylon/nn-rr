import "./RecipeList.css";
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import Trashcan from "../../assets/trashcan.svg";
import { projectFirestore } from "../../firebase/config";
export default function RecipeList({ recipes }) {
  const { mode } = useTheme();
  const handleClick = (id) => {
    console.log("delete it", id);
    projectFirestore.collection("recipes").doc(id).delete();
  };
  if (recipes.length === 0)
    return <div className="error">Nothing to load...</div>;
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
          <img
            src={Trashcan}
            className="delete"
            onClick={() => {
              handleClick(recipe.id);
            }}
          />
        </div>
      ))}
    </div>
  );
}
