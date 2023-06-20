import React, { useEffect, useState } from "react";
import "./Home.css";
// import { useFetch } from "../../hooks/useFetch";
import { projectFirestore } from "../../firebase/config";
import RecipeList from "../../components/RecipeList/RecipeList";
export default function Home() {
  // const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore.collection("recipes").onSnapshot(
      (snapshot) => {
        // .get()
        // .then((snapshot) => {
        console.log(snapshot);
        if (snapshot.empty) {
          setError("Nothing to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((item) => {
            console.log(item);
            results.push({ id: item.id, ...item.data() });
          });
          setData(results);
          setIsPending(false);
        }
      },
      (error) => {
        setError(error.message);
        setIsPending(false);
      }
    );
    // .catch((error) => {
    //   setError(error.message);
    // });
    return () => {
      unsub();
    };
  }, []);
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">...loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
