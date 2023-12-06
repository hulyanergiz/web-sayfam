import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { data } from "../api/data";

export const FetchContext = createContext();

export default function FetchProvider({ children }) {
  const [fetch, setFetch] = useState();
  const [loading, setLoading] = useState(false);

  const baseUrl = "https://reqres.in/api/workintech";
  useEffect(() => {
    axios
      .post(baseUrl, data)
      .then((res) => {
        console.log(res.data);
        setFetch(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <FetchContext.Provider value={{ fetch, loading }}>
      {children}
    </FetchContext.Provider>
  );
}
