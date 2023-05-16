import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(0);
  const [isFething, setIsFething] = useState(true);
  const keySecret = "7a887acb2ac607766d92d62c035c4c09";

  useEffect(() => {
    axios
      .get(url + keySecret)
      .then((response) => {
        setData(response.data.results);
      })
      .finally(setIsFething(false));
  }, [url]);

  return { data, isFething };
}
