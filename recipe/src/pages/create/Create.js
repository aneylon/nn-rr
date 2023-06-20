import React, { useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";
import "./Create.css";
import { projectFirestore } from "../../firebase/config";
export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const history = useHistory();

  // const { postData, data, error } = useFetch(
  //   "http://localhost:3000/recipes",
  //   "POST"
  // );
  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //     history.push("/");
  //   }
  // }, [data]);

  const ingredientInput = useRef(null);
  const submitRecipe = async (e) => {
    e.preventDefault();
    let newItem = {
      title,
      method,
      cookingTime: cookingTime + " minutes",
      ingredients,
    };
    console.log(newItem);
    try {
      await projectFirestore.collection("recipes").add(newItem);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
    // postData({
    //   title,
    //   method,
    //   ingredients,
    //   cookingTime: cookingTime + " minutes",
    // });
  };
  const addIngredient = (e) => {
    e.preventDefault();
    console.log("add ingredient");
    const trimmedIng = newIngredient.trim();
    if (trimmedIng && !ingredients.includes(trimmedIng)) {
      setIngredients([...ingredients, trimmedIng]);
      setNewIngredient("");
      ingredientInput.current.focus();
    }
  };
  return (
    <div className="create">
      <h2 className="page-title">Add a new thing</h2>
      <form onSubmit={submitRecipe}>
        <label>
          <span>Title : </span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Ingredients : </span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className="btn" onClick={addIngredient}>
              add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{" "}
          {ingredients.map((i) => (
            <em key={i}>{i},</em>
          ))}
        </p>
        <label>
          <span>Method : </span>
          <input
            type="text"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Time (minutes) : </span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
