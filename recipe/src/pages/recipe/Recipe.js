import React from "react";
import "./Recipe.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
export default function Recipe() {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: recipe,
  } = useFetch(`http://localhost:3000/recipes/${id}`);
  return (
    <div className="recipe">
      {isLoading && <p className="error">...loading...</p>}
      {error && <p className="loading">{error}</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook. </p>
          <ul>
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}