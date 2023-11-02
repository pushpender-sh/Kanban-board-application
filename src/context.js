import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";

const MyContext = createContext();

function MyContextProvider({ children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const group = searchParams.get("groupBy");
  const order = searchParams.get("orderBy");

  const [groupBy, setGroupBy] = useState(group || "status");
  const [orderBy, setOrderBy] = useState(order || "priority");

  const fetchData = useCallback(() => {
    const apiUrl = "https://api.quicksell.co/v1/internal/frontend-assignment";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <MyContext.Provider
      value={{
        data,
        groupBy,
        setGroupBy,
        orderBy,
        setOrderBy,
        searchParams,
        setSearchParams,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export const useAuth = () => useContext(MyContext);
export { MyContextProvider, MyContext };
