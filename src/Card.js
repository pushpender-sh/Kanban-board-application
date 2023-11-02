import React from "react";

export default function Card({ id, title, tag }) {
  return (
    <div className="card">
      <div className="cardHeader">
        <div> {id}</div>
        <div> photo</div>
      </div>
      <p>{title}</p>
      <div> {tag}</div>
    </div>
  );
}
