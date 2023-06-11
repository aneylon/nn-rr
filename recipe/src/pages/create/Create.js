import React, { useState } from "react";
import "./Create.css";
export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const submitRecipe = (e) => {
    e.preventDefault();
    console.log({ title, method, cookingTime });
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
            <input type="text" />
            <button className="btn">add</button>
          </div>
        </label>
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
