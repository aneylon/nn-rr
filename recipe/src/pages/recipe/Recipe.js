import React, { useEffect, useState } from "react";
import "./Recipe.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";
export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();
  // const {
  //   isLoading,
  //   error,
  //   data: recipe,
  // } = useFetch(`http://localhost:3000/recipes/${id}`);
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        console.log(doc);
        if (doc.exists) {
          setIsLoading(false);
          setRecipe({ id: doc.id, ...doc.data() });
        } else {
          setIsLoading(false);
          setError("Could not find data");
        }
      });
  }, [id]);

  return (
    <div className={`recipe ${mode}`}>
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
