import { useState, useEffect } from "react";

export const useApi = (handler) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    
    handler()
      .then((result) => {
        setData(result);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [handler]); /* рпи изменении функции будет выполняться */

  return { data, loading, error };
};
