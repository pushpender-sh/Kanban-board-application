import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import Dropdown from "./Dropdown";

export default function Body() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [open, setOpen] = useState(false);

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

  console.log(data);
  console.log(open, "state");

  return (
    <div>
      <div className="navbar">
        <button onClick={() => setOpen(!open)} className="display">
          Display
        </button>
        {open && <Dropdown />}
      </div>
      {/* <Card /> */}
    </div>
  );
}
