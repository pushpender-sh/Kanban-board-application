import React from "react";
import Card from "./Card";
import { useAuth } from "./context";

export default function Column({ title, id, img }) {
  const { data, groupBy } = useAuth();
  const filteredUsertickets = data?.tickets?.filter(
    (item) => id === item?.userId
  );

  const filteredPrioritytickets = data?.tickets?.filter(
    (item) => id === item?.priority
  );

  const filteredStatustickets = data?.tickets?.filter(
    (item) => id === item?.status
  );
  return (
    <div className="column">
      <div className="columnHeader">
        <div className="nameimg">
          <img className="image" src={img} />
          <div>{title}</div>
        </div>
        <div> + ---</div>
      </div>
      {groupBy === "user"
        ? filteredUsertickets?.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                tag={item.tag}
              />
            );
          })
        : groupBy === "status"
        ? filteredStatustickets?.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                tag={item.tag}
              />
            );
          })
        : filteredPrioritytickets?.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                tag={item.tag}
              />
            );
          })}
    </div>
  );
}
