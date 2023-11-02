import React from "react";
import Card from "./Card";

export default function Column({ title, id, data }) {
  const filteredTickets = data.tickets.filter((item) => id === item.userId);

  return (
    <div className="column">
      <div className="columnHeader">
        <div className="image"></div>
        <div>{title}</div>
        <div> + ...</div>
      </div>
      {filteredTickets.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            tag={item.tag}
            status={item.status}
            priority={item.priority}
          />
        );
      })}
    </div>
  );
}
