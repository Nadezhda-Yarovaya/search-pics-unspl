import { useState, useEffect } from "react";

/*в хук приходит функция, ее имя handler*/
export const useApi = (handler) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    handler()
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [handler]); /* рпи изменении функции будет выполняться */

  return { data, loading, error };
};
