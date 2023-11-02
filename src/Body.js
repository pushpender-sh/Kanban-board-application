import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import Dropdown from "./Dropdown";
import { useAuth } from "./context";
import Column from "./Column";

export default function Body() {
  const { data, groupBy, orderBy } = useAuth();
  const [open, setOpen] = useState(false);

  const Priority = [
    { priority: "No priority", id: 0, img: "zero.png" },
    { priority: "Low", id: 1, img: "one.png" },
    { priority: "Medium", id: 2, img: "two.png" },
    { priority: "High", id: 3, img: "three.png" },
    { priority: "Urgent", id: 4, img: "four.jpg" },
  ];

  const Status = [
    { status: "Backlog", id: 0, img: "backlog.jpg" },
    { status: "In progress", id: 1, img: "progress.png" },
    { status: "Todo", id: 2, img: "todo.jpg" },
  ];

  return (
    <div className="body">
      <div className="navbar">
        <button onClick={() => setOpen(!open)} className="display">
          <img src="options.png" style={{ height: "15px " }} />
          <div> Display</div>
        </button>
        {open && <Dropdown open={open} setOpen={setOpen} />}
      </div>
      <div className="bodyColumn">
        {groupBy === "user"
          ? data?.users?.map((item) => (
              <Column
                key={item?.id}
                id={item?.id}
                title={item?.name}
                img="robo.png"
              />
            ))
          : groupBy === "status"
          ? Status?.map((item) => (
              <Column
                key={item.id}
                id={item?.status}
                title={item?.status}
                img={item?.img}
              />
            ))
          : Priority?.map((item) => (
              <Column
                key={item.id}
                id={item?.id}
                title={item?.priority}
                img={item?.img}
              />
            ))}
      </div>
      <div>copyright© 2023 pushpender</div>
    </div>
  );
}
