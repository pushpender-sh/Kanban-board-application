import React from "react";
import { useAuth } from "./context";

export default function Dropdown({ open, setOpen }) {
  const {
    data,
    groupBy,
    setGroupBy,
    orderBy,
    setOrderBy,
    searchParams,
    setSearchParams,
  } = useAuth();

  return (
    <div className="dropdown">
      <div className="dropdown-row">
        <div>Grouping</div>
        <select
          className="selectbar"
          value={groupBy}
          onChange={(e) => {
            setGroupBy(e.target.value);
            setSearchParams((prev) => {
              prev.set("groupBy", e.target.value);
              return prev;
            });
            setOpen(false);
          }}
        >
          <option className="options" value="status">
            Status
          </option>
          <option className="options" value="user">
            User
          </option>
          <option className="options" value="priority">
            Priority
          </option>
        </select>
      </div>
      <div className="dropdown-row">
        <div>Ordering</div>
        <select
          className="selectbar"
          value={orderBy}
          onChange={(e) => {
            setOrderBy(e.target.value);
            setSearchParams((prev) => {
              prev.set("orderBy", e.target.value);
              return prev;
            });
            setOpen(false);
          }}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}
