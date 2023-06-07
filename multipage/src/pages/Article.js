import { useHistory, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

export default function Article() {
  const { id } = useParams();
  let url = `http://localhost:3000/articles/${id}`;
  const { data: article, isPending, error } = useFetch(url);
  const history = useHistory();

  useEffect(() => {
    if (error) {
      console.log("redirect");
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error, history]); // history not necessary ?

  return (
    <div>
      {isPending && <div>...Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
