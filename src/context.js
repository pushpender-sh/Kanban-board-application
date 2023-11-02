import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const MyContext = createContext();

function MyContextProvider({ children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [groupBy, setGroupBy] = useState("status");
  const [orderBy, setOrderBy] = useState("priority");

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
      value={{ data, groupBy, setGroupBy, orderBy, setOrderBy }}
    >
      {children}
    </MyContext.Provider>
  );
}

export const useAuth = () => useContext(MyContext);
export { MyContextProvider, MyContext };
