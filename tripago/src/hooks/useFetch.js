import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // fetch data
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          setIsPending(false);
          setData(json);
          setError(null);
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        setError("Error fetching data");
        console.error(error);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
};
