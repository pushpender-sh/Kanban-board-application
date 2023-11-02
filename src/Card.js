import React from "react";

export default function Card({ id, title, tag }) {
  return (
    <div className="card">
      <div className="cardHeader">
        <div> {id}</div>
        <img className="image" src="robo.png" />
      </div>
      <p>{title}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img className="image" src="what.png" />
        <div
          style={{
            border: "1px solid grey",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          {tag}
        </div>
      </div>
    </div>
  );
}
