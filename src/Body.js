import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import Dropdown from "./Dropdown";
import { useAuth } from "./context";

export default function Body() {
  const { data, groupBy, orderBy } = useAuth();
  const [open, setOpen] = useState(false);

  console.log(data);

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
