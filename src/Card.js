import React from "react";

export default function Card({ id, title, tag, status, priority }) {
  return (
    <div className="card">
      <div className="cardHeader">
        <div> {id}</div>
        <div className="image"></div>
      </div>
      <p>{title}</p>
      <div> {tag}</div>
    </div>
  );
}
