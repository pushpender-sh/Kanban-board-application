import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import Dropdown from "./Dropdown";
import { useAuth } from "./context";
import Column from "./Column";

export default function Body() {
  const { data, groupBy, orderBy } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="body">
      <div className="navbar">
        <button onClick={() => setOpen(!open)} className="display">
          Display
        </button>
        {open && <Dropdown />}
      </div>
      <div className="bodyColumn">
        {data?.users?.map((item) => {
          return (
            <Column
              key={item.name}
              id={item?.id}
              title={item?.name}
              data={data}
            />
          );
        })}
      </div>
    </div>
  );
}
