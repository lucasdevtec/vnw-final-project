import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [fatching, setFetching] = useState(true);
  const apiSecret = "7a887acb2ac607766d92d62c035c4c09";

  useEffect(() => {
    async () => {
      await axios
        .get(url + apiSecret)
        .then((response) => {
          setData(response.data.results);
        })
        .finally(() => {
          setFetching(false);
        });
    };
  }, [url]);

  return [data, fatching];
}
