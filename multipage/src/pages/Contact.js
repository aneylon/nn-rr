import { useLocation } from "react-router-dom";
import useQuery from "../hooks/useQuery";

export default function Contact() {
  const queryString = useLocation().search;
  console.log(queryString);
  const queryParams = new URLSearchParams(queryString);
  console.log(queryParams);
  const name = queryParams.get("name");
  console.log(name);

  const query = useQuery();
  const queryName = query.get("name");
  console.log({ queryName });

  return (
    <div>
      <h2>Contact Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim
        nostrum cumque animi ullam sapiente quia molestias, dolorum suscipit,
        labore odio aut debitis, quasi quidem voluptas? Iusto quaerat a sed.
      </p>
    </div>
  );
}
