import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    // fetch data
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (response.ok) {
          const json = await response.json();
          setIsPending(false);
          setData(json);
          setError(null);
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.error("Fetch was aborted");
        } else {
          setError("Error fetching data");
          console.error(error);
          setIsPending(false);
        }
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
};
